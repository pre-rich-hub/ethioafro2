import { Hero } from '@/components/hero'
import { BrandIntro } from '@/components/brand-intro'
import { Destinations } from '@/components/destinations'
import { Journeys } from '@/components/journeys'
import { Experiences } from '@/components/experiences'
import { WaysToTravel } from '@/components/ways-to-travel'
import { SectionHeading } from '@/components/section-heading'
import { WhereToNext } from '@/components/where-to-next'
import { Testimonial } from '@/components/testimonial'
import { Gallery } from '@/components/gallery'
import { PlanJourney } from '@/components/plan-journey'
import { getToursData } from '@/lib/data'

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

