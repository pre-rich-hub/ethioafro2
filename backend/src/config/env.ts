import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

function envBoolean(value: unknown): boolean {
  if (value === true || value === 1) return true;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "on";
  }
  return Boolean(value);
}

/**
 * Rejects a database URL that was copied out of .env.example and never replaced.
 *
 * A placeholder is not a malformed value, it is a well-formed one.
 * `postgresql://USER:PASSWORD@ep-xxxx-pooler.region.aws.neon.tech/neondb` parses
 * as a URL, so `tuneUrl` reads a `-pooler.` host, adds pgbouncer, skips the
 * direct-endpoint boot warning, and the server starts clean. Nothing fails until
 * the first query, which then returns "Can't reach database server at
 * ep-xxxx-...". On a deployed function that is a 500 on every request, with the
 * example file's hostname in the log, and no error at deploy time to point at it.
 * Refusing it here turns a silent runtime 500 into a process that will not boot.
 *
 * The cost of getting this wrong is higher than the cost of missing a placeholder.
 * app.ts imports this module at module scope, so a ZodError here means the Express
 * app is never constructed, api/index.ts loses its default export, and Vercel 500s
 * every path including /health. A false positive takes the whole site down to catch
 * one typo. So every rule below is anchored on a complete DNS label rather than a
 * substring, and nothing is refused on one shared label: the credential rule needs
 * the example host as well, and the region rule needs a Neon-shaped label in front
 * of `region`.
 */

/**
 * Neon generates endpoint hosts as `ep-<project>` and `ep-<project>-pooler`, with
 * the region host spelled `ep-<project>.region.aws.neon.tech`. Those are the only
 * two label shapes that can hold the literal placeholder, so the pattern names both
 * and nothing else. Anchoring the whole label is what lets a project whose generated
 * name happens to contain "xxxx" boot: `ep-xxxx-real-name-pooler` is not a
 * placeholder, it is somebody's real project.
 */
const PLACEHOLDER_NEON_LABEL = /^ep-xxxx(?:-pooler)?$/;

/** The literal region label Neon puts in the middle of a region host. */
const PLACEHOLDER_NEON_REGION_HOST = "region.aws.neon.tech";

/** Every label Neon puts in front of an endpoint host starts with this. */
const NEON_ENDPOINT_LABEL_PREFIX = "ep-";

/**
 * Every .env.example writes the credentials USER:PASSWORD. A provisioned database
 * is neondb_owner with a generated password, so neither half is ever a real value,
 * whichever case it was written in. Either half alone is enough to signal, because
 * an operator who edited one half of the template is still in template territory.
 *
 * A SIGNAL, never a verdict. On its own it is not worth refusing the site over:
 * `postgresql://user:password@localhost:5432/mydb` is the single most common local
 * dev setup and is exactly what .env.example teaches, and placeholder credentials
 * against a real host produce a loud authentication error naming the actual problem.
 */
const PLACEHOLDER_CREDENTIAL = /^(?:user|password)$/i;

function hasPlaceholderCredential(url: URL): boolean {
  return PLACEHOLDER_CREDENTIAL.test(url.username) || PLACEHOLDER_CREDENTIAL.test(url.password);
}

/**
 * A host that cannot resolve, so it is fatal on its own with nothing to corroborate.
 * NXDOMAIN is unambiguous: no amount of correct configuration makes it work.
 */
function isFatalPlaceholderHost(hostname: string): boolean {
  // postgresql: is not a "special" scheme for the WHATWG URL parser, so it leaves
  // the host case alone. An operator who pasted the host in uppercase gets no help
  // from the parser here. Lowercase explicitly rather than assume.
  const labels = hostname.toLowerCase().split(".");
  if (labels.some((label) => PLACEHOLDER_NEON_LABEL.test(label))) return true;
  return isPlaceholderRegionHost(labels);
}

/**
 * `region.aws.neon.tech` is only the tail of a Neon region endpoint. The tail on its
 * own says nothing: `db.region.aws.neon.tech` and `anything.region.aws.neon.tech`
 * are hostnames a split-horizon resolver or a private-link mirror could hand back,
 * and refusing them on one shared label would trade a working database for a
 * deployment that does not boot. So the rule requires the same corroboration the
 * credential rule has: everything in front of `region` has to look like a Neon
 * endpoint label, which is what separates `ep-xxxx-pooler.region.aws.neon.tech`
 * from `db.region.aws.neon.tech`. The whole-host tail match stays exact, so
 * `ep-foo-pooler.us-east-2.aws.neon.tech` never reaches this at all.
 */
function isPlaceholderRegionHost(labels: string[]): boolean {
  const regionIndex = labels.indexOf("region");
  if (regionIndex === -1) return false;
  if (labels.slice(regionIndex).join(".") !== PLACEHOLDER_NEON_REGION_HOST) return false;
  const preceding = labels.slice(0, regionIndex);
  return (
    preceding.length > 0 && preceding.every((label) => label.startsWith(NEON_ENDPOINT_LABEL_PREFIX))
  );
}

/**
 * example.com is reserved for documentation, so it is a strong hint, but it is also
 * the ordinary way to name a staging host and a registrable domain can contain it:
 * `myexample.com` and `db.example.com` are both real hosts. So unlike the Neon rules
 * this one needs the credential signal as corroboration, which is what separates the
 * .env.example template (example.com paired with user:password) from a staging host
 * that merely happens to sit under it.
 */
function isExampleHost(hostname: string): boolean {
  const labels = hostname.toLowerCase().split(".");
  const exampleIndex = labels.indexOf("example");
  return exampleIndex !== -1 && labels[exampleIndex + 1] === "com";
}

const PLACEHOLDER_URL_MESSAGE =
  "looks like an unreplaced .env.example placeholder. A placeholder is still a valid " +
  "URL, so nothing downstream would catch it and the server would boot and then fail " +
  'every request with "Can\'t reach database server". Set the real Neon pooled endpoint ' +
  "in this environment, and keep the direct endpoint in DIRECT_URL for migrations.";

export function isPlaceholderUrl(raw: string): boolean {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    // Not this check's error to report. A string that is not a URL at all is
    // malformed rather than placeholder, and Prisma names that better than we
    // could, so leave it to the same handling database.ts gives it.
    return false;
  }
  if (isFatalPlaceholderHost(url.hostname)) return true;
  return hasPlaceholderCredential(url) && isExampleHost(url.hostname);
}

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  DATABASE_URL: z.string().min(1).refine((value) => !isPlaceholderUrl(value), {
    message: PLACEHOLDER_URL_MESSAGE,
  }),
  // Optional, because a serverless deploy does not run migrations and does not
  // need it. So an absent value is fine, but a value that was left as an
  // unreplaced placeholder is not: it would fail the same first-query way.
  DIRECT_URL: z
    .string()
    .optional()
    .default("")
    .refine((value) => value === "" || !isPlaceholderUrl(value), {
      message: PLACEHOLDER_URL_MESSAGE,
    }),
  FRONTEND_ORIGIN: z.string().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(16),
  JWT_EXPIRES_IN: z.string().default("7d"),
  AUTH_COOKIE_NAME: z.string().default("admin_session"),
  COOKIE_SECURE: z.preprocess(envBoolean, z.boolean()).default(false),

  // Email
  SMTP_HOST: z.string().optional().default(""),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_USER: z.string().optional().default(""),
  SMTP_PASS: z.string().optional().default(""),
  SMTP_FROM: z.string().optional().default(""),
  EMAIL_PROVIDER: z.enum(["smtp", "resend"]).default("smtp"),
  RESEND_API_KEY: z.string().optional().default(""),
  ADMIN_EMAIL: z.string().optional().default(""),
  ADMIN_PASSWORD: z.string().optional().default(""),
  EMAIL_ENABLED: z.preprocess(envBoolean, z.boolean()).default(false),

  // File uploads
  UPLOAD_ROOT: z.string().default("."),
  PUBLIC_FILE_BASE_URL: z.string().optional().default(""),
  MAX_UPLOAD_MB: z.coerce.number().positive().default(4),

  // Storage
  // When omitted, hosted storage is inferred from the deployment:
  //   - explicit STORAGE_DRIVER wins
  //   - `local` on Vercel is replaced with database storage (serverless disk is
  //     ephemeral), matching the reference behavior
  //   - on any non-Vercel host the default is local disk
  STORAGE_DRIVER: z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.enum(["local", "database"]).optional(),
  ),

  // AI assistant
  ASSISTANT_ENABLED: z.preprocess(envBoolean, z.boolean()).default(false),
  ASSISTANT_PROVIDER: z.enum(["openai", "gemini", "groq"]).default("groq"),
  OPENAI_API_KEY: z.string().optional().default(""),
  GEMINI_API_KEY: z.string().optional().default(""),
  GROQ_API_KEY: z.string().optional().default(""),
  // Overridable so the provider can be pointed at a mock in tests.
  GROQ_BASE_URL: z.string().default("https://api.groq.com/openai/v1"),
  // Grounded in the catalog, so the work is instruction following rather than
  // knowledge, and this holds those rules while streaming fast.
  ASSISTANT_MODEL: z.string().default("openai/gpt-oss-120b"),
  // Same provider as the primary, so it reuses the one configured key.
  ASSISTANT_FALLBACK_MODEL: z.string().optional().default("openai/gpt-oss-20b"),
  ASSISTANT_MAX_ATTEMPTS: z.coerce.number().int().min(1).max(6).default(3),
  ASSISTANT_RETRY_BASE_MS: z.coerce.number().int().positive().default(500),
  ASSISTANT_MAX_MESSAGES: z.coerce.number().int().positive().default(30),
  ASSISTANT_MAX_SESSION_TOKENS: z.coerce.number().int().positive().default(50000),
  ASSISTANT_MAX_OUTPUT_TOKENS: z.coerce.number().int().positive().default(600),
  ASSISTANT_MAX_HISTORY_MESSAGES: z.coerce.number().int().positive().default(10),
  ASSISTANT_MAX_CONTEXT_CHARS: z.coerce.number().int().positive().default(40000),
  ASSISTANT_MAX_DAILY_TOKENS: z.coerce.number().int().positive().default(200000),
  ASSISTANT_STREAM: z.preprocess(envBoolean, z.boolean()).default(true),
  ASSISTANT_STREAM_TIMEOUT_MS: z.coerce.number().int().positive().default(45000),
  ASSISTANT_CONTEXT_TTL_MS: z.coerce.number().int().positive().default(300000),
  ASSISTANT_IP_HASH_SALT: z.string().optional().default(""),
});

const rawEnv = envSchema.parse(process.env);

const parsed = {
  ...rawEnv,
  STORAGE_DRIVER:
    process.env.VERCEL && (!rawEnv.STORAGE_DRIVER || rawEnv.STORAGE_DRIVER === "local")
      ? "database"
      : rawEnv.STORAGE_DRIVER ?? "local",
  ASSISTANT_IP_HASH_SALT: rawEnv.ASSISTANT_IP_HASH_SALT || rawEnv.JWT_SECRET,
};

// Boot check: email must be fully configured before enabled
if (parsed.EMAIL_ENABLED) {
  if (!parsed.SMTP_FROM) {
    throw new Error("EMAIL_ENABLED is true but SMTP_FROM is not configured.");
  }
  if (!parsed.ADMIN_EMAIL) {
    throw new Error("EMAIL_ENABLED is true but ADMIN_EMAIL is not configured.");
  }
  if (parsed.EMAIL_PROVIDER === "smtp" && (!parsed.SMTP_HOST || !parsed.SMTP_PASS)) {
    throw new Error(
      "EMAIL_ENABLED is true but SMTP_HOST/SMTP_PASS are not configured. " +
        "Set SMTP_HOST and SMTP_PASS, or set EMAIL_ENABLED=false.",
    );
  }
}

// Boot check: assistant provider key must be set when enabled
if (parsed.ASSISTANT_ENABLED) {
  if (parsed.ASSISTANT_PROVIDER === "openai" && !parsed.OPENAI_API_KEY) {
    throw new Error("ASSISTANT_ENABLED is true but OPENAI_API_KEY is not configured.");
  }
  if (parsed.ASSISTANT_PROVIDER === "gemini" && !parsed.GEMINI_API_KEY) {
    throw new Error("ASSISTANT_ENABLED is true but GEMINI_API_KEY is not configured.");
  }
  if (parsed.ASSISTANT_PROVIDER === "groq" && !parsed.GROQ_API_KEY) {
    throw new Error("ASSISTANT_ENABLED is true but GROQ_API_KEY is not configured.");
  }
}

export const env = parsed;
export const isProduction = parsed.NODE_ENV === "production";
