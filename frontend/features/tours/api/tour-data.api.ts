// Tour data with static overlay.
//
// Phase 1 strategy: the API is authoritative for the fields it can supply
// (prices, featured flags), while the static catalog stays the source for
// display copy. Locale card overlays apply before the live price overlay.
//
// Merge order: English static → locale card overlay → API from/featured.

import { type Tour } from '@/features/tours/types/tour.types'
import { getLocalizedTours, getTour as getStaticTour } from '@/features/tours/utils/tour-catalog.utils'
import { isTailorMade } from '@/features/tours/utils/tour.utils'
import { getTours, getTourBySlug } from '@/features/tours/api/tours.api'
import { type ApiTour } from '@/features/tours/types/tour-api.types'

function formatPrice(price: number | null): string | null {
  if (price === null || price === undefined) return null
  return `$${price.toLocaleString('en-US')} per person`
}

function overlayLive(staticTour: Tour, live: ApiTour): Tour {
  const price = formatPrice(live.adultPrice)
  return {
    ...staticTour,
    ...(price && !isTailorMade(staticTour) ? { from: price } : {}),
    ...(typeof live.isFeatured === 'boolean' ? { featured: live.isFeatured } : {}),
  }
}

export async function getToursData(locale: string = 'en'): Promise<Tour[]> {
  let liveTours: ApiTour[] = []
  try {
    const page = await getTours({ limit: 100 })
    liveTours = page.items ?? []
  } catch {
    liveTours = []
  }

  const bySlug = new Map(liveTours.map((t) => [t.canonical?.slug, t]))
  const localized = getLocalizedTours(locale)

  return localized.map((t) => {
    const live = bySlug.get(t.slug)
    return live ? overlayLive(t, live) : t
  })
}

export async function getTourData(
  slug: string,
  locale: string = 'en',
): Promise<Tour | undefined> {
  const staticTour = getStaticTour(slug, locale)
  if (!staticTour) return undefined

  try {
    const live = await getTourBySlug(slug)
    if (live && live.canonical?.slug === slug) {
      return overlayLive(staticTour, live)
    }
  } catch {
    // Fall through to the static record.
  }

  return staticTour
}
