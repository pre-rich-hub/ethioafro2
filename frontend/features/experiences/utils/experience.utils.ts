import { activities } from '@/features/experiences/data/experience.data'

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug)
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
