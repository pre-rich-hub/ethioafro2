import type { Destination } from '@/features/destinations/types/destination.types'

/** Card + Pass-2 detail fields. */
export type DestinationCardCopy = Pick<
  Destination,
  | 'name'
  | 'teaser'
  | 'intro'
  | 'tag'
  | 'region'
  | 'bestTime'
  | 'duration'
  | 'altitude'
  | 'highlights'
  | 'paragraphs'
>

export type DestinationOverlayMap = Record<string, Partial<DestinationCardCopy>>
