/**
 * Vercel function entry.
 *
 * Vercel does not run a listening process. It imports this module and calls the
 * default export with a request and a response, so the Express app is handed
 * over directly rather than bound to a port. `src/server.ts` already skips
 * listen() when VERCEL is set, which is what keeps the two paths from fighting.
 *
 * The import is from dist, not src. Vercel runs the build command first, so tsc
 * output is present by the time this is bundled, and importing TypeScript
 * directly would drag the whole source tree through the bundler.
 */
import app from "../dist/server.js";

export default app;
