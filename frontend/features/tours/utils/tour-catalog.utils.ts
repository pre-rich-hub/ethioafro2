import { tours } from '../data/tour.data'
import { getTourOverlayMap } from '../data/overlays'
import { applyOverlay, isDefaultLocale } from '@/lib/i18n/localized'
import type { Tour } from '../types/tour.types'

export function getTour(slug: string, locale: string = 'en'): Tour | undefined {
  const base = tours.find((t) => t.slug === slug)
  if (!base) return undefined
  if (isDefaultLocale(locale)) return base
  return applyOverlay<Tour>(base, getTourOverlayMap(locale)?.[slug])
}

export function getLocalizedTours(locale: string = 'en'): Tour[] {
  if (isDefaultLocale(locale)) return tours
  const map = getTourOverlayMap(locale)
  return tours.map((t) => applyOverlay<Tour>(t, map?.[t.slug]))
}
