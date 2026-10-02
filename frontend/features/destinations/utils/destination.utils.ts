import type { Destination } from '../types/destination.types'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestinationOverlayMap } from '../data/overlays'
import { applyOverlay, isDefaultLocale } from '@/lib/i18n/localized'

export function getDestination(slug: string, locale: string = 'en'): Destination | undefined {
  const base = destinations.find((d) => d.slug === slug)
  if (!base) return undefined
  if (isDefaultLocale(locale)) return base
  return applyOverlay<Destination>(base, getDestinationOverlayMap(locale)?.[slug])
}

export function getLocalizedDestinations(locale: string = 'en'): Destination[] {
  if (isDefaultLocale(locale)) return destinations
  const map = getDestinationOverlayMap(locale)
  return destinations.map((d) => applyOverlay<Destination>(d, map?.[d.slug]))
}

export function getDestinationRegions(list: Destination[]) {
  return Array.from(new Set(list.map((d) => d.region)))
}
