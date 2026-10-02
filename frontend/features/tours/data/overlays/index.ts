import type { AppLocale } from '@/i18n/routing'
import type { TourOverlayMap } from './types'
import es from './es.json'
import fr from './fr.json'
import de from './de.json'
import zh from './zh.json'

const overlays: Partial<Record<AppLocale, TourOverlayMap>> = {
  es: es as TourOverlayMap,
  fr: fr as TourOverlayMap,
  de: de as TourOverlayMap,
  zh: zh as TourOverlayMap,
}

export function getTourOverlayMap(locale: string): TourOverlayMap | undefined {
  return overlays[locale as AppLocale]
}

export type { TourCardCopy, TourOverlayMap } from './types'
