import { getDestination } from '@/features/destinations/utils/destination.utils'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Tour } from '@/features/tours/types/tour.types'

const relatedBySlug: Record<string, { destinations: string[]; tours: string[] }> = {
  'when-to-visit-ethiopia': {
    destinations: ['lalibela', 'simien-mountains', 'omo-valley'],
    tours: ['the-historic-route'],
  },
  'lalibela-at-dawn': {
    destinations: ['lalibela'],
    tours: ['the-historic-route', 'lalibela-highlands-community-trek'],
  },
  'the-coffee-ceremony': {
    destinations: ['sidama-yirgacheffe', 'jimma'],
    tours: ['the-coffee-road'],
  },
  'packing-for-the-highlands': {
    destinations: ['simien-mountains', 'bale-mountains'],
    tours: ['simien-escarpment-trek'],
  },
  'responsible-travel-in-the-omo': {
    destinations: ['omo-valley'],
    tours: ['omo-valley-immersion'],
  },
  'twelve-hours-in-addis': {
    destinations: ['addis-ababa'],
    tours: ['addis-ababa-in-depth'],
  },
}

export function getRelatedCatalogueForPost(slug: string): {
  destinations: Destination[]
  tours: Tour[]
} {
  const mapping = relatedBySlug[slug]
  if (!mapping) return { destinations: [], tours: [] }

  return {
    destinations: mapping.destinations
      .map((s) => getDestination(s))
      .filter((d): d is Destination => Boolean(d)),
    tours: mapping.tours.map((s) => getTour(s)).filter((t): t is Tour => Boolean(t)),
  }
}
