import type { Tour } from '@/features/tours/types/tour.types'

/** Card + meta fields translated in Step 4. Itinerary stays English until pass 2. */
export type TourCardCopy = Pick<Tour, 'title' | 'teaser' | 'summary'>

export type TourOverlayMap = Record<string, Partial<TourCardCopy>>
