import type { Express } from "express";
import { authRouter } from "./modules/auth/auth.routes.js";
import { mediaRouter } from "./modules/media/media.routes.js";

export function registerRoutes(app: Express) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/media", mediaRouter);
}
