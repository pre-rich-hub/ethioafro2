import { getLocalizedActivities } from '@/features/experiences/utils/experience.utils'
import type { AppLocale } from '@/i18n/routing'

// One experience from each of four categories, for the nav dropdown.
const navExperienceSlugs = [
  'tej-tella-and-areki',
  'coffee-cupping-and-ceremony',
  'run-where-champions-train',
  'teff-farm-day',
]

export function getNavExperiences(locale: string = 'en') {
  const localized = getLocalizedActivities(locale)
  return navExperienceSlugs
    .map((slug) => localized.find((a) => a.slug === slug))
    .filter((a) => a !== undefined)
}

export const navExperiences = getNavExperiences('en')

export const languages: { code: AppLocale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
]
