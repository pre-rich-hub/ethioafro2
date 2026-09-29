# syntax=docker/dockerfile:1

# Multi-stage so the runtime image carries no compiler, no dev dependencies and
# no source. The assistant holds a streaming connection open for up to
# ASSISTANT_STREAM_TIMEOUT_MS, so a lean image matters less than an image that
# boots predictably.
#
# Base is slim rather than alpine on purpose: Prisma resolves its query engine
# against glibc, and alpine's musl means chasing openssl variants when the engine
# fails to load at runtime.

FROM node:26-slim AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable
WORKDIR /app

# --- dependencies -----------------------------------------------------------
# Copied on its own so a source-only change reuses the install layer.
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# --- build ------------------------------------------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# tsc alone would emit JS that throws on the first import of the Prisma client,
# because generate has not run yet.
RUN pnpm build

# Drop dev dependencies from the tree we are about to copy forward.
RUN pnpm prune --prod

# --- runtime ----------------------------------------------------------------
FROM base AS runtime
ENV NODE_ENV=production
ENV PORT=5000

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
# `prisma migrate deploy` reads the schema, so it has to ship. It is kept out of
# the runtime image deliberately otherwise, but the one file it needs is cheap.
COPY prisma ./prisma
COPY package.json ./

# Run unprivileged. The image needs no write access anywhere on the filesystem:
# uploads go to STORAGE_DRIVER and, when that is local, to a mounted volume.
USER node

EXPOSE 5000

# /health is unauthenticated and skipped by the rate limiter precisely so an
# orchestrator can poll it without spending the visitor budget.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||5000)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/server.js"]
