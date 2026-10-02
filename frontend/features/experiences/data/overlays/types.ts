import type { Activity } from '@/features/experiences/types/experience.types'

/** Card + Pass-2 detail fields. */
export type ActivityCardCopy = Pick<
  Activity,
  | 'title'
  | 'teaser'
  | 'intro'
  | 'short'
  | 'category'
  | 'duration'
  | 'where'
  | 'season'
  | 'paragraphs'
  | 'includes'
  | 'goodToKnow'
>

export type ActivityOverlayMap = Record<string, Partial<ActivityCardCopy>>
