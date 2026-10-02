import { getLocalizedActivities } from '@/features/experiences/utils/experience.utils'
import type { Activity } from '@/features/experiences/types/experience.types'

export function getRelatedExperiencesForTour(
  tourSlug: string,
  limit = 3,
  locale: string = 'en',
): Activity[] {
  return getLocalizedActivities(locale)
    .filter((activity) => activity.tourSlugs.includes(tourSlug))
    .slice(0, limit)
}
