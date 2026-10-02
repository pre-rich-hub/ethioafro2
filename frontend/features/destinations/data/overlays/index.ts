import type { AppLocale } from '@/i18n/routing'
import type { DestinationOverlayMap } from './types'
import es from './es.json'
import fr from './fr.json'
import de from './de.json'
import zh from './zh.json'

const overlays: Partial<Record<AppLocale, DestinationOverlayMap>> = {
  es: es as DestinationOverlayMap,
  fr: fr as DestinationOverlayMap,
  de: de as DestinationOverlayMap,
  zh: zh as DestinationOverlayMap,
}

export function getDestinationOverlayMap(locale: string): DestinationOverlayMap | undefined {
  return overlays[locale as AppLocale]
}

export type { DestinationCardCopy, DestinationOverlayMap } from './types'
