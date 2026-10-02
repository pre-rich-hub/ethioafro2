import type { Tour } from '@/features/tours/types/tour.types'

/** Card + Pass-2 itinerary / logistics fields. */
export type TourCardCopy = Pick<
  Tour,
  | 'title'
  | 'teaser'
  | 'summary'
  | 'days'
  | 'style'
  | 'season'
  | 'group'
  | 'from'
  | 'includes'
  | 'excludes'
  | 'itinerary'
  | 'places'
>

export type TourOverlayMap = Record<string, Partial<TourCardCopy>>
