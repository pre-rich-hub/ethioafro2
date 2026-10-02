import type { AppLocale } from '@/i18n/routing'
import type { FaqItem } from '@/lib/seo/faq.types'
import { destinationFaqsBySlug } from '@/lib/seo/faq-data'
import { isDefaultLocale } from '@/lib/i18n/localized'
import es from './destination-faq-overlays/es.json'
import fr from './destination-faq-overlays/fr.json'
import de from './destination-faq-overlays/de.json'
import zh from './destination-faq-overlays/zh.json'

export type DestinationFaqUi = {
  title: string
  intro: string
  lalibelaLink: string
  defaultLink: string
}

type DestinationFaqOverlay = { ui: DestinationFaqUi } & Record<string, FaqItem[] | DestinationFaqUi>

const overlays: Partial<Record<AppLocale, DestinationFaqOverlay>> = {
  es: es as unknown as DestinationFaqOverlay,
  fr: fr as unknown as DestinationFaqOverlay,
  de: de as unknown as DestinationFaqOverlay,
  zh: zh as unknown as DestinationFaqOverlay,
}

/**
 * Destination FAQs for page rendering. English stays in `faq-data.ts`
 * (source of truth); es/fr/de/zh come from `destination-faq-overlays/{locale}.json`.
 * Falls back to English when a slug has no localized set.
 */
export function getDestinationFaqs(slug: string, locale: string): FaqItem[] {
  const english = destinationFaqsBySlug[slug] ?? []
  if (isDefaultLocale(locale)) return english
  const localized = overlays[locale as AppLocale]?.[slug]
  if (Array.isArray(localized) && localized.length === english.length) return localized
  return english
}

/** Localized FAQ section chrome (title/intro/footer links), or undefined for English. */
export function getDestinationFaqUi(locale: string): DestinationFaqUi | undefined {
  if (isDefaultLocale(locale)) return undefined
  return overlays[locale as AppLocale]?.ui
}
