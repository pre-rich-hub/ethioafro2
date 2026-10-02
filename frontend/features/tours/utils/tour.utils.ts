import type { Tour } from '@/features/tours/types/tour.types'

// Tours without a price we can stand behind are quoted individually. Keep this
// sentinel in `from`, and check it with isTailorMade() before showing a price.
export const TAILOR_MADE = 'Tailor-made'

// Localized overlays replace `from` with a translated "tailor-made" label for
// quote-only routes (see tours/data/overlays), so accept every locale's wording.
const TAILOR_MADE_LABELS = new Set([TAILOR_MADE, 'A medida', 'Sur mesure', 'Maßgeschneidert', '量身定制'])

export function isTailorMade(t: Pick<Tour, 'from'>) {
  return TAILOR_MADE_LABELS.has(t.from)
}

/** "$1,890 per person" / "每人 $1,890" -> "$1,890". Locale-neutral; undefined when no amount. */
export function getPriceAmount(from: string): string | undefined {
  return from.match(/\$\s?[\d,]+(?:\.\d+)?/)?.[0].replace(/\s/g, '')
}

export function styleTokens(tour: Tour) {
  return tour.style.split('·').map((s) => s.trim())
}
