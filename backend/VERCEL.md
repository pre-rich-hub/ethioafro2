# Deploying the backend to Vercel
#
# Two projects in one repo. Set the frontend project's Root Directory to
# `frontend` and this one to `backend`. They deploy independently and the
# backend needs its own domain for CORS.

## How it runs there

Vercel does not keep a process listening on a port. It imports `api/index.ts`
and calls the default export with a request and a response, so the Express app
is handed over directly. `src/server.ts` skips `listen()` when `VERCEL` is set,
which is what keeps the two paths from fighting each other.

`vercel.json` rewrites every path to that one function, because Express owns the
routing, not Vercel. `maxDuration` is 300s, which is what the assistant's long
stream needs.

## Environment variables

Set these in the backend project's Settings, not in a file. `prisma migrate
deploy` also has to run once, which is a separate step below.

```
DATABASE_URL     Neon POOLED endpoint, ends in -pooler
DIRECT_URL       Neon direct endpoint, for migrations only
JWT_SECRET       32+ random characters
FRONTEND_ORIGIN  your Vercel frontend URL, no trailing slash
ASSISTANT_ENABLED true
ASSISTANT_PROVIDER groq
GROQ_API_KEY     gsk_...
ASSISTANT_MODEL  openai/gpt-oss-120b
NODE_ENV         production
```

`DATABASE_URL` must be the pooled endpoint, the hostname containing `-pooler.`.
The direct one works locally but exhausts Neon's connection limit on Vercel,
where every warm instance opens its own pool. The app logs a warning at boot if
it detects a direct URL, because the resulting failure looks like a network
fault rather than a configuration one.

Confirm the two Neon URLs differ before deploying. In the Neon console they are
listed as "Pooled connection" and "Direct connection".

## Migrations

Vercel does not run them. Once, from a machine that has the env:

```bash
pnpm prisma:deploy
```

This uses `DIRECT_URL` on purpose. Running it against the pooler fails, since
migrations need session state.

## Verify after deploying

```bash
curl https://YOUR-BACKEND.vercel.app/health
curl https://YOUR-BACKEND.vercel.app/health/ready
```

Then ask the assistant something in the live chat. The stream is the part worth
watching: it should appear word by word rather than all at once, which is what
buffering looks like.
