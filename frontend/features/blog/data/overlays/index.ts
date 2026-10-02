import type { AppLocale } from '@/i18n/routing'
import type { PostOverlayMap } from './types'
import es from './es.json'
import fr from './fr.json'
import de from './de.json'
import zh from './zh.json'

const overlays: Partial<Record<AppLocale, PostOverlayMap>> = {
  es: es as PostOverlayMap,
  fr: fr as PostOverlayMap,
  de: de as PostOverlayMap,
  zh: zh as PostOverlayMap,
}

export function getPostOverlayMap(locale: string): PostOverlayMap | undefined {
  return overlays[locale as AppLocale]
}

export type { PostCardCopy, PostOverlayMap } from './types'
