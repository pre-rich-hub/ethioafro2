import { activities } from '@/features/experiences/data/experience.data'
import type { AppLocale } from '@/i18n/routing'

// One experience from each of four categories, for the nav dropdown.
export const navExperiences = [
  'tej-tella-and-areki',
  'coffee-cupping-and-ceremony',
  'run-where-champions-train',
  'teff-farm-day',
]
  .map((slug) => activities.find((a) => a.slug === slug))
  .filter((a) => a !== undefined)

export const languages: { code: AppLocale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
]
