import type { Destination } from '../types/destination.types'
import { destinations } from '@/features/destinations/data/destination.data'

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug)
}

export function getDestinationRegions(destinations: Destination[]) {
  return Array.from(new Set(destinations.map((d) => d.region)))
}
