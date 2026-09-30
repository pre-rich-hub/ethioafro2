import { describe, it, expect, vi, afterEach } from "vitest";
import { ZodError } from "zod";
import { isPlaceholderUrl } from "../../src/config/env.js";

// env.ts calls dotenv.config() at module scope, and vitest's cwd is the backend
// project root, which holds the developer's real backend/.env. dotenv does not
// overwrite keys that are already in process.env, so setup.ts's values survive, but
// anything setup.ts does not name gets filled in from that file. That silently
// breaks the schema cases below: `delete process.env.DIRECT_URL` does not make
// DIRECT_URL absent, it makes it whatever the developer's .env says, and a case
// named "accepts an absent DIRECT_URL" then passes against a value it never
// installed. Mock it out for this whole file so process.env is only ever what the
// test put there. A mock is also not cwd-dependent, so the case means the same
// thing on a machine with no .env as on one with a hostile one.
vi.mock("dotenv", () => ({
  default: { config: () => ({ parsed: {} }) },
}));

// The guard this file pins exists because a real production deploy 500ed on every
// path. DATABASE_URL held the literal .env.example hostname, Prisma could not
// resolve it, and nothing said so until the first request. Refusing the value at
// boot trades a 500-on-every-request for a process that will not start, which is
// the better deal, but only if the refusal is right. app.ts imports this module at
// module scope, so a false positive here does not degrade gracefully, it takes down
// the whole deployment including /health. Every case below is therefore pinned from
// both sides: what must be refused, and the real values that must not be.

describe("isPlaceholderUrl refuses a copied template", () => {
  // The exact value from .env.example line 12, which is the line an operator
  // copies and forgets to finish.
  const EXAMPLE_DATABASE_URL =
    "postgresql://user:password@host-pooler.example.com/neondb?sslmode=require&connect_timeout=30";
  const EXAMPLE_DIRECT_URL =
    "postgresql://user:password@host.example.com/neondb?sslmode=require&connect_timeout=30";

  it("refuses the placeholder that caused the outage", () => {
    // This is the value Vercel Production was actually running.
    expect(
      isPlaceholderUrl(
        "postgresql://USER:PASSWORD@ep-xxxx-pooler.region.aws.neon.tech/neondb?sslmode=require",
      ),
    ).toBe(true);
  });

  it("refuses the bare ep-xxxx label on its own", () => {
    // The label, not a substring of some project name that happens to contain xxxx.
    expect(isPlaceholderUrl("postgresql://u:p@ep-xxxx-pooler.aws.neon.tech/neondb")).toBe(true);
    expect(isPlaceholderUrl("postgresql://u:p@ep-xxxx.region.aws.neon.tech/neondb")).toBe(true);
    expect(isPlaceholderUrl("postgresql://u:p@ep-xxxx/neondb")).toBe(true);
  });

  it("refuses any ep- label in front of the region tail, not just xxxx", () => {
    // The ep-xxxx label rule misses this one, so the region rule is what catches it.
    // Narrowing the region rule must not lose it.
    expect(isPlaceholderUrl("postgresql://u:p@ep-xxx-pooler.region.aws.neon.tech/neondb")).toBe(
      true,
    );
    expect(isPlaceholderUrl("postgresql://u:p@ep-xxx.region.aws.neon.tech/neondb")).toBe(true);
  });

  it("refuses the literal region label, so ep-yyyy is caught too", () => {
    // xxxx is not the only placeholder spelling people paste.
    expect(isPlaceholderUrl("postgresql://u:p@ep-yyyy-pooler.region.aws.neon.tech/neondb")).toBe(
      true,
    );
    expect(isPlaceholderUrl("postgresql://u:p@ep-yyyy.region.aws.neon.tech/neondb")).toBe(true);
  });

  it("refuses an ep- host on the region tail, even when the project name looks real", () => {
    // ep-cool-name-pooler reads like somebody's real project, but it cannot be one.
    // A real Neon endpoint is `ep-<project>[-pooler].<region>.aws.neon.tech`, and
    // <region> is an AWS region code: this project's own working host is
    // ep-sweet-pond-b5ioog05-pooler.c-7.us-east-2.aws.neon.tech, so the segment after
    // the label is `c-7.us-east-2`. The literal word `region` never appears in a real
    // Neon host.
    //
    // That is what makes the narrowing safe on this row rather than a false positive.
    // The narrowing's corroboration rule is `ep-` prefix plus this exact tail, and on
    // this tail there is no real host for that conjunction to spare: `ep-` is not a
    // signal that the host is genuine, it is the reason it has to be refused. So
    // ep-cool-name-pooler.region.aws.neon.tech is a refusal, not a boot.
    //
    // The split-horizon risk the narrowing protects against is the opposite shape, an
    // internal name that does NOT start with ep-, which the "boots a region host that
    // is not a Neon endpoint label" case below pins.
    expect(
      isPlaceholderUrl(
        "postgresql://neondb_owner:abc@ep-cool-name-pooler.region.aws.neon.tech/neondb?sslmode=require",
      ),
    ).toBe(true);
  });

  it("refuses both .env.example database lines verbatim", () => {
    expect(isPlaceholderUrl(EXAMPLE_DATABASE_URL)).toBe(true);
    expect(isPlaceholderUrl(EXAMPLE_DIRECT_URL)).toBe(true);
  });

  it("refuses the template host-pooler.example.com paired with template credentials", () => {
    expect(isPlaceholderUrl("postgresql://user:password@host-pooler.example.com/neondb")).toBe(
      true,
    );
    // Either half of the credential pair is enough to signal. An operator who
    // edited one half of the template is still in template territory.
    expect(isPlaceholderUrl("postgresql://user@host-pooler.example.com/neondb")).toBe(true);
    expect(isPlaceholderUrl("postgresql://:password@host-pooler.example.com/neondb")).toBe(true);
  });

  it("refuses the example host in any case", () => {
    // The example host too, not just the Neon ones. postgresql: is not a WHATWG
    // special scheme, so the URL parser leaves the host case alone and the lowercase
    // in isExampleHost has to happen in the predicate.
    expect(isPlaceholderUrl("postgresql://USER:PASSWORD@HOST-POOLER.EXAMPLE.COM/neondb")).toBe(
      true,
    );
  });

  it("refuses the Neon placeholder in any case", () => {
    // postgresql: is not a WHATWG special scheme, so the URL parser leaves the
    // host case alone and the lowercase has to happen in the predicate.
    expect(
      isPlaceholderUrl("postgresql://neondb_owner:abc@EP-XXXX-POOLER.REGION.AWS.NEON.TECH/neondb"),
    ).toBe(true);
    expect(isPlaceholderUrl("postgresql://NeOnDb_Owner:AbC@Ep-Xxxx.aws.neon.tech/neondb")).toBe(
      true,
    );
  });

  it("refuses on the postgres scheme too, not just postgresql", () => {
    expect(isPlaceholderUrl("postgres://user:password@host-pooler.example.com/neondb")).toBe(true);
  });
});

describe("isPlaceholderUrl refuses nothing that could be real", () => {
  // Each of these was refused before the rules were anchored on label boundaries.
  // They are the regression that matters most, because the cost of a false positive
  // is a deployment that does not boot at all.

  it("boots the ordinary local dev URL that .env.example teaches", () => {
    expect(isPlaceholderUrl("postgresql://user:password@localhost:5432/mydb")).toBe(false);
  });

  it("boots an internal hostname", () => {
    expect(isPlaceholderUrl("postgresql://user:password@db.internal.acme.dev:5432/mydb")).toBe(
      false,
    );
  });

  it("boots a registrable domain that merely contains example.com", () => {
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@myexample.com/prod")).toBe(false);
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@notexample.co/prod")).toBe(false);
  });

  it("boots a staging host under example.com, because credentials must corroborate", () => {
    // This is the case that decides the conflict between host-pooler.example.com
    // and db.example.com. The template pairs the host with user:password; a real
    // staging host does not. Requiring both catches the template and leaves this.
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@db.example.com:5432/prod")).toBe(false);
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@example.com/prod")).toBe(false);
  });

  it("boots a real Neon project whose generated name contains xxxx", () => {
    // ep-xxxx matches ep-xxxx and ep-xxxx-pooler. It does not match a project
    // name that merely starts with xxxx.
    expect(
      isPlaceholderUrl(
        "postgresql://neondb_owner:abc@ep-xxxx-real-name-pooler.us-east-2.aws.neon.tech/neondb",
      ),
    ).toBe(false);
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@ep-xxxx5-pooler.aws.neon.tech/neondb")).toBe(
      false,
    );
  });

  it("boots a region host that is not a Neon endpoint label", () => {
    // The region rule used to fire on the tail alone, so it refused any host ending
    // in region.aws.neon.tech. NXDOMAIN covers *.region.aws.neon.tech today, but a
    // split-horizon resolver or a private-link mirror can serve that shape, and
    // refusing it would take /health down with it.
    //
    // This is the case the narrowing was written for, so it stays pinned on its own:
    // drop the `ep-` corroboration requirement from the rule and both of these come
    // back refused, which is a deployment that does not boot over a working database.
    // Note these do not start with ep-, which is exactly why they survive the rule.
    expect(isPlaceholderUrl("postgresql://u:p@db.region.aws.neon.tech:5432/mydb")).toBe(false);
    expect(isPlaceholderUrl("postgresql://u:p@pg.region.aws.neon.tech:5432/mydb")).toBe(false);
  });

  it("boots on a placeholder credential alone, because it is only a signal", () => {
    // Credentials that merely contain the word, and the exact word against a real
    // host. A wrong password against a reachable host produces an auth error that
    // names itself, which is a far better failure than refusing to boot.
    expect(isPlaceholderUrl("postgresql://neondb_owner:password@ep-real-name.aws.neon.tech/neondb")).toBe(
      false,
    );
    expect(isPlaceholderUrl("postgresql://neondb_owner:mypassword123@ep-real-name.aws.neon.tech/neondb")).toBe(
      false,
    );
    expect(isPlaceholderUrl("postgresql://neondb_owner:Password1!@ep-real-name.aws.neon.tech/neondb")).toBe(
      false,
    );
    expect(isPlaceholderUrl("postgresql://user:neondb_owner@ep-real-name.aws.neon.tech/neondb")).toBe(
      false,
    );
  });

  it("boots on an IPv6 literal", () => {
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@[2001:db8::1]:5432/prod")).toBe(false);
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@[::1]:5432/prod")).toBe(false);
  });

  it("boots on a unix socket connection string", () => {
    // No authority at all, so no host and no credentials to read.
    expect(isPlaceholderUrl("postgresql:///neondb?host=/var/run/postgresql")).toBe(false);
    expect(isPlaceholderUrl("postgresql://")).toBe(false);
  });

  it("boots on a percent-encoded password", () => {
    expect(isPlaceholderUrl("postgresql://neondb_owner:p%40ssw0rd@host.internal/neondb")).toBe(false);
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc%2Fdef@host.internal/neondb")).toBe(false);
  });

  it("boots on surrounding whitespace or a trailing newline", () => {
    // A value pasted out of a file or a terminal arrives with the whitespace still
    // attached, and Prisma tolerates it.
    expect(isPlaceholderUrl("  postgresql://neondb_owner:abc@ep-real-name.aws.neon.tech/db  ")).toBe(
      false,
    );
    expect(isPlaceholderUrl("postgresql://neondb_owner:abc@ep-real-name.aws.neon.tech/db\r\n")).toBe(
      false,
    );
  });

  it("boots on a real pooled endpoint, which is the only shape this deploy uses", () => {
    expect(
      isPlaceholderUrl(
        "postgresql://neondb_owner:abc123@ep-cool-name-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&connection_limit=1",
      ),
    ).toBe(false);
  });

  it("leaves an unparseable string to Prisma, which names it better", () => {
    expect(isPlaceholderUrl("not-a-url")).toBe(false);
    expect(isPlaceholderUrl("")).toBe(false);
    expect(isPlaceholderUrl("postgres://")).toBe(false);
  });
});

// The three schema cases below are the only ones that can exercise the DIRECT_URL
// field, because the predicate never sees the field name. env.ts parses
// process.env at import time and calls dotenv.config() on the way in, so each case
// has to set the variable before the module loads and put it back afterwards.
// That means vi.resetModules() and a dynamic import per case; a static top-level
// import would be evaluated once, against setup.ts's values, and every case here
// would pass or fail together.
describe("DIRECT_URL is validated by the schema", () => {
  // A database URL that is definitively not a placeholder, so a DIRECT_URL failure
  // can only be about DIRECT_URL.
  const REAL_URL = "postgresql://neondb_owner:abc123@ep-cool-name-pooler.aws.neon.tech/neondb";

  // Canaries against the restore loop in loadSchema silently breaking. The old
  // "next file notices" comment was order-dependent: under 8 of 9 shuffle seeds,
  // deleting the restore left the whole suite green, because a leaked DATABASE_URL
  // only breaks a later file if that file happens to run after this one and happens
  // to depend on the value. Assert it here instead, per test, so the signal does not
  // depend on what runs next. Snapshot taken during collection, before any case here
  // has touched process.env.
  const ENV_SNAPSHOT = { ...process.env };

  afterEach(() => {
    expect({ ...process.env }).toEqual(ENV_SNAPSHOT);
  });

  function issuePaths(error: unknown): string[] {
    return ((error as ZodError).issues ?? []).map((issue) => issue.path.join("."));
  }

  function issueMessages(error: unknown): string[] {
    return ((error as ZodError).issues ?? []).map((issue) => issue.message);
  }

  async function loadSchema(databaseUrl: string, directUrl: string | undefined) {
    vi.resetModules();
    const saved = {
      DATABASE_URL: process.env.DATABASE_URL,
      DIRECT_URL: process.env.DIRECT_URL,
      // setup.ts already forces these, but pin them anyway so a stray value cannot
      // fail a test that is about the database URL. Both throw at boot.
      EMAIL_ENABLED: process.env.EMAIL_ENABLED,
      ASSISTANT_ENABLED: process.env.ASSISTANT_ENABLED,
    };
    process.env.DATABASE_URL = databaseUrl;
    process.env.EMAIL_ENABLED = "false";
    process.env.ASSISTANT_ENABLED = "false";
    if (directUrl === undefined) delete process.env.DIRECT_URL;
    else process.env.DIRECT_URL = directUrl;
    try {
      const mod = await import("../../src/config/env.js");
      return { ok: true as const, directUrl: mod.env.DIRECT_URL };
    } catch (error) {
      return { ok: false as const, error };
    } finally {
      for (const [key, value] of [
        ["DATABASE_URL", saved.DATABASE_URL],
        ["DIRECT_URL", saved.DIRECT_URL],
        ["EMAIL_ENABLED", saved.EMAIL_ENABLED],
        ["ASSISTANT_ENABLED", saved.ASSISTANT_ENABLED],
      ] as const) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      }
      vi.resetModules();
    }
  }

  it("accepts an absent DIRECT_URL, because a serverless deploy runs no migrations", async () => {
    const result = await loadSchema(REAL_URL, undefined);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // Assert the absence, not just that nothing threw. The default is "", so this is
    // what the schema produces for an absent value. Before the dotenv mock this
    // assertion read the developer's own DIRECT_URL straight back out of backend/.env,
    // which is how the case passed while testing the opposite of its name.
    expect(result.directUrl).toBe("");
  });

  it("accepts an empty DIRECT_URL", async () => {
    expect(await loadSchema(REAL_URL, "")).toMatchObject({ ok: true, directUrl: "" });
  });

  it("rejects a placeholder DIRECT_URL, which would fail its first query", async () => {
    const result = await loadSchema(
      REAL_URL,
      "postgresql://user:password@host.example.com/neondb?sslmode=require&connect_timeout=30",
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error).toBeInstanceOf(ZodError);
    expect(issuePaths(result.error)).toEqual(["DIRECT_URL"]);
    // The message has to say what is wrong. An operator seeing a bare
    // "invalid_string" at 3am cannot act on it.
    expect(issueMessages(result.error).join(" ")).toContain("placeholder");
  });

  it("rejects a placeholder DATABASE_URL, which is the outage itself", async () => {
    const result = await loadSchema(
      "postgresql://USER:PASSWORD@ep-xxxx-pooler.region.aws.neon.tech/neondb?sslmode=require",
      "",
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(issuePaths(result.error)).toEqual(["DATABASE_URL"]);
    // DIRECT_URL was empty and valid, so it must not be dragged down with it. Assert
    // on the paths rather than the serialised error, because the message itself
    // mentions DIRECT_URL and would match a substring check either way.
  });

  it("accepts the dev values that setup.ts installs, so the suite still boots", async () => {
    // Guards the helper itself: a bad DATABASE_URL here would be noticed by afterEach
    // and by the rest of the suite, rather than by whichever file happened to run next.
    expect(await loadSchema(process.env.DATABASE_URL as string, undefined)).toMatchObject({ ok: true });
  });
});
