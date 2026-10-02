import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { getToursData } from '@/features/tours/api/tour-data.api'
import { TourTravelStyles } from '@/features/tours/components/TourTravelStyles'
import { TourCollection } from '@/features/tours/components/TourCollection'
import { TourPromises } from '@/features/tours/components/TourPromises'
import { cloudinaryImage } from '@/lib/cloudinary'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Tours & Journeys',
  description:
    'Private, tailor-made Ethiopian itineraries — historic route, highland wildlife, Danakil expedition, Omo immersion, festival, photography and birding journeys. Every route drawn from scratch.',
  path: '/tours',
  image: cloudinaryImage('simien-mountains', 1200),
  imageAlt: 'Simien Mountains escarpment in northern Ethiopia',
})

export default async function ToursPage() {
  const tours = await getToursData()

  return (
    <>
      <PageHero
        eyebrow="Tours & Journeys"
        title="Starting points, not packages"
        lede="Every route here is drawn from years on the ground across Ethiopia. Treat them as a draft — the version you travel will be redrawn around you."
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/simien-mountains.png"
        imageAlt="Simien Mountains escarpment in northern Ethiopia"
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
