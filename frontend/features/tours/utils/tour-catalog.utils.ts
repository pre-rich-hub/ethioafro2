import { tours } from '../data/tour.data'

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug)
}
