import type { AppLocale } from '@/i18n/routing'
import type { ActivityOverlayMap } from './types'
import es from './es.json'
import fr from './fr.json'
import de from './de.json'
import zh from './zh.json'

const overlays: Partial<Record<AppLocale, ActivityOverlayMap>> = {
  es: es as ActivityOverlayMap,
  fr: fr as ActivityOverlayMap,
  de: de as ActivityOverlayMap,
  zh: zh as ActivityOverlayMap,
}

export function getActivityOverlayMap(locale: string): ActivityOverlayMap | undefined {
  return overlays[locale as AppLocale]
}

export type { ActivityCardCopy, ActivityOverlayMap } from './types'
