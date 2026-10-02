import type { AppLocale } from '@/i18n/routing'

/** Partial locale overlay for catalogue card + meta fields. */
export type LocalizedOverlay<T extends object> = Partial<T>

/**
 * Merge an English base record with a locale overlay.
 * Missing overlay keys fall back to English. Arrays (itinerary, paragraphs,
 * etc.) replace wholly when provided — no per-item merge.
 */
export function applyOverlay<T extends object>(
  base: T,
  overlay: LocalizedOverlay<T> | undefined,
): T {
  if (!overlay) return base
  const next = { ...base }
  for (const [key, value] of Object.entries(overlay) as [keyof T, T[keyof T]][]) {
    if (value === undefined || value === null) continue
    if (typeof value === 'string' && value === '') continue
    next[key] = value
  }
  return next
}

export function isDefaultLocale(locale: string): locale is 'en' {
  return locale === 'en'
}

export type CatalogueLocale = Exclude<AppLocale, 'en'>

export const catalogueLocales: CatalogueLocale[] = ['es', 'fr', 'de', 'zh']
