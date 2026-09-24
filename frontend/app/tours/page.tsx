import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { getToursData } from '@/features/tours/api/tour-data.api'
import { TourTravelStyles } from '@/features/tours/components/TourTravelStyles'
import { TourCollection } from '@/features/tours/components/TourCollection'
import { TourPromises } from '@/features/tours/components/TourPromises'
export const metadata: Metadata = {
  title: 'Tours & Journeys',
  description:
    'Private, tailor-made Ethiopian itineraries — historic route, highland wildlife, Danakil expedition, Omo immersion, festival, photography and birding journeys. Every route drawn from scratch.',
}

export default async function ToursPage() {
  const tours = await getToursData()

  return (
    <>
      <PageHero
        eyebrow="Tours & Journeys"
        title="Starting points, not packages"
        lede="Every route here is drawn from years on the ground across Ethiopia. Treat them as a draft — the version you travel will be redrawn around you."
        image="/images/luxury-lodge.png"
        imageAlt="A terrace at a highland lodge above the Ethiopian escarpment at dusk"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tours' }]}
        compact
      />

      {/* Ways to travel */}
      <TourTravelStyles tours={tours} />

      {/* All journeys */}
      <TourCollection tours={tours} />

      {/* Promises */}
      <TourPromises />

      <CtaBand
        title="None of these quite fit? Start blank"
        text="Most guests actually land somewhere between two of these routes. Describe what you have in mind and a designer will draft it from scratch."
        secondary={{ label: 'See Destinations', href: '/destinations' }}
      />
    </>
  )
}
