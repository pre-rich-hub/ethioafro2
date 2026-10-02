import { activities } from '@/features/experiences/data/experience.data'
import type { Activity } from '@/features/experiences/types/experience.types'

export function getRelatedExperiencesForTour(tourSlug: string, limit = 3): Activity[] {
  return activities.filter((activity) => activity.tourSlugs.includes(tourSlug)).slice(0, limit)
}
