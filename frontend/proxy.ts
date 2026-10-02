import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip API, admin, auth, Next internals, and static files.
  matcher: ['/', '/(es|fr|de|zh)/:path*', '/((?!api|admin|login|_next|_vercel|.*\\..*).*)'],
}
