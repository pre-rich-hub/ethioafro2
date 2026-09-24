import { Hero } from '@/features/home/components/Hero'
import { BrandIntro } from '@/features/home/components/BrandIntro'
import { Destinations } from '@/features/destinations'
import { Journeys } from '@/features/tours'
import { Experiences } from '@/features/experiences'
import { WaysToTravel } from '@/features/tours'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhereToNext } from '@/features/home/components/WhereToNext'
import { Testimonial } from '@/features/home/components/Testimonial'
import { Gallery } from '@/features/home/components/Gallery'
import { PlanJourney } from '@/features/enquiries'
import { getToursData } from '@/features/tours/api/tour-data.api'

export default async function Page() {
  const tours = await getToursData()

  return (
    <>
      <Hero />
      <BrandIntro />
      <Destinations />
      <Journeys tours={tours} />
      <section className="shell pb-20 sm:pb-24 lg:pb-32">
        <SectionHeading
          eyebrow="Ways to Travel"
          title="Private, family, luxury or expedition"
          aside="However you like to travel, there's a route built for it — and every one can be reshaped around you."
        />
        <WaysToTravel tours={tours} />
      </section>
      <Experiences />
      <WhereToNext />
      <Testimonial />
      <Gallery />
      <PlanJourney />
    </>
  )
}

