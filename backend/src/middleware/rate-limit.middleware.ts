import { rateLimit } from "express-rate-limit";

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
  // The health router is mounted at /health, so by the time this runs
  // req.path is still the full path. Matching "/ready" here would never fire
  // and a load balancer polling /health/ready would spend the bucket.
  skip: (req) => req.path === "/health" || req.path === "/health/ready",
});

export const publicFormLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

export const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
