# Simien Ethiopia Tours backend

Express and Prisma API for the Simien Ethiopia Tours storefront. The frontend in
`../frontend` is the only consumer, and every route here exists to satisfy a call
that file already makes.

The admin backend is deliberately absent. Auth, media, the assistant, health and
the public catalogue are in place; anything under `/api/v1/admin` is not, so the
existing admin screens in the frontend do not work. Every non-admin reference to
layover in the frontend is prose, not a field, so no layover data was carried
over.

## Stack

- Express 4, TypeScript (ESM, `NodeNext` resolution)
- Prisma 6 on PostgreSQL
- Zod validation at every boundary
- Vitest for unit tests
- pnpm

Node 20 or newer. There is no `engines` pin; this was developed against Node 26.

## Setup

```bash
cd backend
pnpm install
cp .env.example .env      # then fill it in
pnpm prisma:generate
pnpm prisma:deploy        # apply migrations, use over the direct URL
pnpm dev                  # tsx watch on PORT
```

The frontend needs to point at this server. `frontend/.env` takes
`API_BASE_URL`, which defaults to `http://localhost:5000`.

## Database

Two connection strings, and the split matters:

| Variable | Used by |
| --- | --- |
| `DIRECT_URL` | `prisma/schema.prisma` as Prisma's `directUrl`, so migrations, `db push` and studio never go through the pooler. |
| `DATABASE_URL` | Every runtime query. Use the Neon pooled endpoint here. |

Set the pooled endpoint on 6543 and the direct one on 5432 if your Neon project
has transaction pooling enabled. Session pooling on 5432 is fine too, and is what
this project currently uses. Pointing `DATABASE_URL` at the pooler is what keeps a
serverless cold start from opening a new Postgres connection per request.

`connect_timeout=30` is not optional on a scale-to-zero database. Neon suspends the
compute after a few idle minutes, and the first query after a wake fails with
`Can't reach database server` while the compute is still starting. Measured here,
a cold start took 3.1s and the default timeout lost the race. Without it, the
first visitor to an idle site gets a 500.

## Configuration

`.env.example` lists every variable with its default. Only three are required:

- `DATABASE_URL`
- `DIRECT_URL`
- `JWT_SECRET`, 16 characters minimum

`FRONTEND_ORIGIN` is a comma-separated allowlist. Add the production origin before
deploying, or the browser blocks every call.

## Routes

Public, no auth:

| Method | Path |
| --- | --- |
| GET | `/api/v1/tours` |
| GET | `/api/v1/tours/slug/:slug` |
| POST | `/api/v1/contact` |
| POST | `/api/v1/subscribe` |
| GET | `/api/v1/media/:id` |
| POST | `/api/v1/assistant` |
| GET | `/health`, `/health/ready` |

Admin auth, cookie session:

| Method | Path |
| --- | --- |
| POST | `/api/v1/auth/login` |
| POST | `/api/v1/auth/logout` |
| GET | `/api/v1/auth/me` |
| PUT | `/api/v1/auth/profile` |
| PUT | `/api/v1/auth/change-password` |

`GET /api/v1/tours` accepts `page`, `limit` (max 100), `featured`, `categorySlug`,
`destinationSlug`, `q`, `priceMin`, `priceMax` and `ratingMin`. A `destinationSlug`
matches either the legacy `destinationId` column or the `destinations` junction
table, so a tour linked either way is found.

Uploads in local mode are also reachable as static files under `/assets`.

## Response envelope

Every JSON response uses the same three fields:

```json
{ "success": true, "message": "...", "data": { } }
```

`/health` and `/health/ready` are the exception. They return a bare
`{ "status": "ok" }` with no envelope, because a load balancer or uptime check
should not have to parse the business format to know the process is up.

`data.items`, `data.meta.total`, `data.meta.page`, `data.meta.limit` and
`data.meta.totalPages`. Errors set `success: false` and fill `errors` with
`{ "path": "email", "message": "..." }` entries when validation is the cause.
Status codes carry the meaning: 401 unauthenticated, 404 unknown resource, 409
duplicate, 422 validation, 429 rate limited, 503 dependency down. Messages are
replaced with `Internal server error` in production.

## Assistant

`POST /api/v1/assistant` streams SSE. Frontend parsing lives in
`frontend/features/support/api/assistant.api.ts`, and the frames match it field
for field:

Each frame carries an `event:` name and a `data:` line. The frontend reads only
`data:`, so the names are for logs and debugging:

```
event: meta    data: {"success":true,"message":"...","data":{"sessionId":"..."}}
event: delta   data: {"text":"chunk"}
event: done    data: {"sessionId":"...","messageId":12,"handoff":{"type":"none"},"usage":{...}}
```

Errors arrive as a normal JSON error body, so the client falls back to
`consumeJson` when the content type is not `text/event-stream`. Set
`ASSISTANT_STREAM=false` to always get a single JSON body.

Grounding is context injection. Tours, destinations and journal posts are read at
request time and put into a trusted `<catalog>` block in the system prompt; the
model is told to answer only from it. It is not a retrieval system and there is no
vector store.

It ships disabled. `ASSISTANT_ENABLED=false` makes the route return 503 before
validation, so a disabled assistant never reaches a provider. To turn it on you
need `ASSISTANT_ENABLED=true` plus the key for `ASSISTANT_PROVIDER`.

### Providers

`ASSISTANT_PROVIDER` takes `openai`, `gemini` or `groq`. The boot check refuses to
start if the selected provider has no key, so a typo fails immediately instead of
on the first visitor's request.

Groq serves the OpenAI chat completions shape, so it reuses the same client with a
different `baseURL`. The one difference that matters: OpenAI's newer models want
`max_completion_tokens` and Groq documents `max_tokens`, so the parameter name is
per provider rather than shared. Sending the wrong one is a 400.

To use it:

```bash
ASSISTANT_ENABLED=true
ASSISTANT_PROVIDER=groq
GROQ_API_KEY=gsk_...
ASSISTANT_MODEL=openai/gpt-oss-120b
```

**Do not pick a model from the provider's published lineup.** Both failures in
this project were a model the docs advertised and the account could not call.
Gemini returned 404 for the numbered 2.x models on a recent key, and Groq
returned 404 for `llama-3.3-70b-versatile` and `llama-3.1-8b-instant`, the
exact models its own docs label as production. Groq gates access per account,
so the docs table is global and your subset is not.

Run `pnpm assistant:check` instead. It lists the models your key can reach,
sends one streaming request to each, and reports first-token and total latency
alongside the configured ones. Exit code is non-zero if a configured model is
not callable, so it works as a deploy gate.

Defaults are `openai/gpt-oss-120b` primary and `openai/gpt-oss-20b` fallback,
both open-weight and the cheapest tier. Same provider means one key covers
both.

Two things to know about `openai/gpt-oss-*`. They are reasoning models, so
part of `ASSISTANT_MAX_OUTPUT_TOKENS` is spent on hidden reasoning before any
visible text; at 60 tokens total a request returns an empty reply that looks
like a dead model. The 600 default is comfortable, but lowering it too far
silently truncates answers to nothing. They also emit `delta.reasoning` in the
stream alongside `delta.content`, which the parser discards.

`GROQ_BASE_URL` is overridable, which is how the request shape is tested without a
live key.

### When the provider misbehaves

Groq overloads individual models without taking the account down, and a bare
chat completion call surfaces a `503` on the first request after a spike. The
provider layer handles this:

- `ASSISTANT_MAX_ATTEMPTS` attempts on the primary model, with exponential
  backoff and jitter so a crowd of clients does not return in lockstep.
- `ASSISTANT_FALLBACK_MODEL` if the primary is exhausted.
- A free-tier quota error is treated as a hard stop rather than a spike, and a
  second model is not tried, since the limit is per account and would fail
  identically.
- Upstream bodies never reach the browser. The visitor gets a sentence they can
  act on, and the raw detail goes to the log, where it can be matched against
  the `requestId` the client already has.

Retrying requires priming the stream, because an async generator does no work
until it is pulled. The first chunk is buffered, then emitted once.

Budgets, with the reason they are not smaller: `ASSISTANT_STREAM_TIMEOUT_MS` is
120s and the frontend aborts at 150s. Measured against a live key, a healthy
reply took 7.8s and a loaded one took 36s, so a 45s server cutoff was cutting off
answers that were still coming. The server is deliberately below the client so
it can send a clean error frame instead of leaving the browser to time out.

`ASSISTANT_MODEL` defaults to `gemini-flash-latest` rather than a numbered
release. Google gates the numbered models by account, and a key created recently
gets `404 no longer available` for `gemini-2.5-flash` and `gemini-2.0-flash`. The
alias tracks whatever the account is actually entitled to, which makes it the
safer default. Verify your own key with a single `generateContent` call before
relying on a pinned name.

Usage is gated by a per-IP limiter, a per-session in-flight guard, per-session
message and token caps, and a daily token cap enforced with a single atomic
upsert. Counters live in `ChatSession` and `ChatDailyUsage`, and the transcript in
`ChatMessage`.

Nothing prunes those tables. Sessions that go quiet stay forever, so add a
periodic delete on `ChatSession` older than a few weeks before the table grows
past anything you want to scan by hand.

## Files

`UPLOAD_ROOT` decides where local uploads land. With `STORAGE_DRIVER=database`
the bytes go to `MediaAsset` and are served from `/api/v1/media/:id` with a
one-year immutable cache header. Vercel infers the database driver, since there is
no writable filesystem there.

## Email

`EMAIL_ENABLED=false` by default, and delivery failures are caught and logged
rather than failing the request, so a dead SMTP host cannot reject an enquiry.
When it is on, a new contact submission is forwarded to `ADMIN_EMAIL` and a
password change notifies the account owner. Nothing is sent to the enquirer.

## Creating the first admin

There is no admin backend, so nothing creates the Admin row for you. The auth
routes are there; the account is not seeded by default, because picking a
password for someone else is not ours to do. When you want one:

```bash
ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='your-password-here' pnpm seed:admin
```

The script uses `DIRECT_URL`, is safe to re-run, and bumps `tokenVersion` on
update so sessions signed with the old password stop working. It refuses
fallback credentials when `NODE_ENV=production`.

## Scripts

| Command | Does |
| --- | --- |
| `pnpm dev` | Watch mode |
| `pnpm build` | `prisma generate` then `tsc` |
| `pnpm start` | Run `dist/server.js` |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Vitest |
| `pnpm prisma:deploy` | Apply migrations |
| `pnpm prisma:studio` | Browse data |
| `pnpm seed:admin` | Create the admin |

## Tests

`pnpm test` runs unit suites with no database and no server. They cover the
response envelope, slug and parser helpers, calendar date validation, the tour
query filters and the `mapTour` output shape. `mapTour` is asserted against the
exact key list the frontend parses, so a rename on this side fails a test instead
of blanking a price on the live site.

Route tests would need the app wired to a live Postgres, so database-backed
endpoints were verified by hand against Neon rather than by suite.
