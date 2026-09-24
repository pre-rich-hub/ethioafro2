import type { Tour } from '@/features/tours/types/tour.types'

// Tours without a price we can stand behind are quoted individually. Keep this
// sentinel in `from`, and check it with isTailorMade() before showing a price.
export const TAILOR_MADE = 'Tailor-made'

export function isTailorMade(t: Pick<Tour, 'from'>) {
  return t.from === TAILOR_MADE
}

export function styleTokens(tour: Tour) {
  return tour.style.split('·').map((s) => s.trim())
}
