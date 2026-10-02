import type { Destination } from '../types/destination.types'
import type { Tour } from '@/features/tours/types/tour.types'

/**
 * Place strings (from tour.places) that count as a match for each destination.
 * Exact alias matching only — no first-word fallback — so "Lake Tana" does not
 * pull tours that mention "Lake Assale" or "Lake Hayk".
 */
export const destinationPlaceAliases: Record<string, string[]> = {
  'simien-mountains': ['Simien Mountains', 'Sankaber', 'Geech', 'Chenek', 'Imet Gogo', 'Bwahit'],
  gondar: ['Gondar'],
  lalibela: ['Lalibela'],
  'lake-tana': ['Lake Tana', 'Lake Tana & Blue Nile', 'Blue Nile', 'Bahir Dar', 'Zege'],
  'danakil-depression': [
    'Danakil Depression',
    'Dallol',
    'Erta Ale',
    'Lake Assale',
    'Lake Karum',
    'Lake Karum (Assale)',
    'Hamed Ela',
  ],
  gheralta: ['Gheralta', 'Korkor', 'Abuna Yemata Guh'],
  'ras-dashen': ['Ras Dashen', 'Ambiko'],
  gorgora: ['Gorgora'],
  'guassa-plateau': ['Guassa Plateau', 'Guassa'],
  'awra-amba': ['Awra Amba'],
  'choke-mountains': ['Choke Mountains', 'Choke'],
  'lake-hayk': ['Hayk & Istifanos', 'Lake Hayk', 'Hayk', 'Istifanos'],
  axum: ['Axum', 'Yeha'],
  'omo-valley': [
    'Omo Valley',
    'Turmi',
    'Dimeka',
    'Mursi Highlands',
    'Karo',
  ],
  'bale-mountains': ['Bale Mountains', 'Sanetti Plateau', 'Harenna', 'Dinsho', 'Tullu Dimtu'],
  'addis-ababa': ['Addis Ababa', 'Entoto', 'Merkato'],
  harar: ['Harar', 'Dire Dawa'],
  'debre-libanos': ['Debre Libanos', 'Jemma Gorge'],
  'tiya-adadi-mariam': ['Tiya & Adadi Mariam', 'Tiya', 'Adadi Mariam', 'Melka Kunture'],
  'bishoftu-zuqualla': ['Bishoftu', 'Mount Zuqualla', 'Zuqualla', 'Bishoftu & Mount Zuqualla'],
  'menagesha-suba-forest': ['Menagesha', 'Menagesha Suba Forest'],
  'wenchi-crater-lake': ['Wenchi', 'Wenchi Crater Lake'],
  'awash-national-park': ['Awash', 'Awash National Park', 'Fantale'],
  'sof-omar-caves': ['Sof Omar', 'Sof Omar Caves'],
  'borana-yabelo': ['Borana', 'Yabelo', 'Borana & Yabelo', 'El Sod'],
  jimma: ['Jimma', 'Kafa', 'Kaffa', 'Bonga Forest', 'Bonga'],
  'arba-minch-nechisar': ['Arba Minch', 'Nechisar', 'Arba Minch & Nechisar', 'Dorze'],
  konso: ['Konso'],
  'sidama-yirgacheffe': ['Sidama', 'Yirgacheffe', 'Sidama & Yirgacheffe', 'Gedeo'],
}

function normalize(value: string) {
  return value.trim().toLowerCase()
}

function placeMatchesAliases(place: string, aliases: string[]) {
  const p = normalize(place)
  return aliases.some((alias) => {
    const a = normalize(alias)
    return p === a
  })
}

/** Tours whose places list matches this destination via the alias map. */
export function getRelatedToursForDestination(
  destination: Destination,
  tours: Tour[],
  limit = 3,
): Tour[] {
  const aliases = destinationPlaceAliases[destination.slug] ?? [
    destination.name,
    destination.name.split(' & ')[0]?.trim() ?? destination.name,
  ]

  const matched = tours.filter((tour) =>
    tour.places.some((place) => placeMatchesAliases(place, aliases)),
  )

  if (matched.length >= limit) return matched.slice(0, limit)

  // Prefer tours already featured if we still need fillers, then catalogue order.
  const remaining = tours.filter((tour) => !matched.includes(tour))
  const featured = remaining.filter((tour) => tour.featured)
  const fillers = [...featured, ...remaining.filter((tour) => !tour.featured)]

  return [...matched, ...fillers].slice(0, limit)
}

/** Resolve a tour `places` label to a destination slug via the alias map. */
export function getDestinationSlugForPlace(place: string): string | undefined {
  const p = normalize(place)
  for (const [slug, aliases] of Object.entries(destinationPlaceAliases)) {
    if (aliases.some((alias) => normalize(alias) === p)) return slug
  }
  return undefined
}
