import type { Activity } from '@/features/experiences/types/experience.types'

/** Card + meta fields for Step 4. paragraphs stay English until pass 2. */
export type ActivityCardCopy = Pick<
  Activity,
  'title' | 'teaser' | 'intro' | 'short' | 'category' | 'duration' | 'where'
>

export type ActivityOverlayMap = Record<string, Partial<ActivityCardCopy>>
