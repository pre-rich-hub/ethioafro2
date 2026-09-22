import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { DestinationCard } from '@/components/destination-card'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { destinations } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Rock-hewn churches, Afro-alpine plateaus, sulphur springs below sea level and the most culturally dense valley on earth — the eight regions of Ethiopia we know best.',
}

const regions = Array.from(new Set(destinations.map((d) => d.region)))

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Travel"
        title="Eight regions, each a different country in feel"
        lede="From churches quarried out of solid rock to a permanent lava lake below sea level — these are the places our designers can talk about by season, altitude and time of day."
        image="/images/gondar.png"
        imageAlt="The royal enclosure of Fasil Ghebbi in Gondar at golden hour"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        compact
      />

      <section className="shell py-16 sm:py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Map"
          title="The regions our routes are built from"
          aside="Most itineraries draw on three or four of these. Point to the ones that pull at you and we'll connect them."
        />

        <Reveal className="mb-12 flex flex-wrap gap-2 sm:mb-16">
          {regions.map((r) => (
            <span
              key={r}
              className="border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]"
            >
              {r}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 90} className="h-full">
              <DestinationCard destination={d} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Can't decide where to start?"
        text="A sentence is enough — the altitude you're comfortable with, the pace, roughly when you'd travel. A designer will reply with two or three routes worth considering."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
