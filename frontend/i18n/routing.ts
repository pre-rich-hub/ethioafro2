import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'es', 'fr', 'de', 'zh'] as const

export type AppLocale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // Avoid auto-redirecting first-time visitors based on Accept-Language.
  localeDetection: false,
})
