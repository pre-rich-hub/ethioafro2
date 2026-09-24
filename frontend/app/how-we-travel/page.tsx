import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { TravelChapter, TravelIntroduction } from '@/features/how-we-travel'
import { experiences } from '@/features/how-we-travel/data/travel-style.data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Travel',
  description:
    'Six ideas behind every Simien Ethiopia Tours journey — community treks, the January feast days, lodges at the edge of the wild, light-led photography, access through relationship, and coffee traced to its forest.',
}

export default function HowWeTravelPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Travel"
        title="Six ideas behind every journey"
        lede="Not add-ons or activities — the standards each itinerary is measured against, whichever route it ends up woven into."
        image="/images/hero-gondar.jpg"
        imageAlt="The royal enclosure of Gondar in the late afternoon"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'How We Travel' }]}
      />

      <TravelIntroduction />
      {experiences.map((e, i) => (
        <TravelChapter key={e.slug} e={e} i={i} />
      ))}

      <CtaBand
        title="Not sure which of these fits your trip?"
        text="Most journeys draw on two or three of these at once. Tell us what matters most to you and we'll build the route around it."
        secondary={{ label: 'See Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
