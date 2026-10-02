'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

/** Client-only wrapper so Turbopack does not fail resolving `@vercel/analytics/next` on SSR. */
export function Analytics() {
  return <VercelAnalytics />
}
