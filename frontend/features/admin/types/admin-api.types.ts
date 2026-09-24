// Admin API client. Same-origin relative paths only — Next rewrites route
// /api/:path* to the backend (see next.config.mjs), so cookies flow without
// hardcoding an origin. Mirrors the reference implementation contract.

export type AdminApiEnvelope<T> = {
  success: boolean
  message: string
  data: T
  errors?: Array<{ path?: string; message: string }>
}
