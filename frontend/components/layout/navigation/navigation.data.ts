import { activities } from '@/features/experiences/data/experience.data'

// One experience from each of four categories, for the nav dropdown.
export const navExperiences = [
  'tej-tella-and-areki',
  'coffee-cupping-and-ceremony',
  'run-where-champions-train',
  'teff-farm-day',
]
  .map((slug) => activities.find((a) => a.slug === slug))
  .filter((a) => a !== undefined)

export const languages = [
  { code: 'EN', label: 'English' },
  { code: 'ES', label: 'Español' },
  { code: 'FR', label: 'Français' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'ZH', label: '中文' },
]
