import type { Destination } from '@/features/destinations/types/destination.types'

/** Card + meta fields for Step 4. paragraphs/highlights stay English until pass 2. */
export type DestinationCardCopy = Pick<
  Destination,
  'name' | 'teaser' | 'intro' | 'tag' | 'region'
>

export type DestinationOverlayMap = Record<string, Partial<DestinationCardCopy>>
