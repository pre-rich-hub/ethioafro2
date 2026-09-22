import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ToursGrid } from '@/components/tours-grid'
import { CtaBand } from '@/components/cta-band'
import { promises } from '@/lib/site'
import { getToursData } from '@/lib/data'

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
        title="Eight starting points, not eight packages"
        lede="Every route here has been run many times over and adjusted after each one. Treat them as a draft — the version you travel will be redrawn around you."
        image="/images/luxury-lodge.png"
        imageAlt="A terrace at a highland lodge above the Ethiopian escarpment at dusk"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tours' }]}
        compact
      />

      {/* All journeys */}
      <section className="shell py-16 sm:py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Collection"
          title="The full route list"
          aside="Sort by the kind of travel you're after — any route here can be stretched, shortened or joined with another."
        />
        <ToursGrid tours={tours} />
      </section>

      {/* Promises */}
      <section className="border-y border-border bg-secondary text-secondary-foreground">
        <div className="shell py-16 sm:py-20 lg:py-28">
          <SectionHeading
            eyebrow="How We Work"
            title="Constant across every route here"
            tone="dark"
          />
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="border-t border-background/20 pt-6"
              >
                <p className="mb-3 font-serif text-xl text-background sm:text-2xl">
                  {p.title}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-background/70">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="None of these quite fit? Start blank"
        text="Most guests actually land somewhere between two of these routes. Describe what you have in mind and a designer will draft it from scratch."
        secondary={{ label: 'See Destinations', href: '/destinations' }}
      />
    </>
  )
}
