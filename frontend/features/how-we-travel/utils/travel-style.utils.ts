import { experiences } from '@/features/how-we-travel/data/travel-style.data'

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug)
}
