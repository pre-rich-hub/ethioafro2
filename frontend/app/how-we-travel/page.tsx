import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { experiences, getDestination, getTour } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How We Travel',
  description:
    'Six ideas behind every Simien Ethiopia Tours journey — community treks, the January feast days, lodges at the edge of the wild, light-led photography, access through relationship, and coffee traced to its forest.',
}

export default function ExperiencesPage() {
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

      {/* Opening statement + contents */}
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-6 text-accent">
            <span className="rule" />
            Our Way
          </p>
          <p className="text-balance font-serif text-3xl leading-[1.2] text-foreground sm:text-4xl lg:text-[2.75rem]">
            We plan around people, light and the calendar — not around what is
            easiest to sell. These are the ideas we keep coming back to.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="border-t border-border">
            {experiences.map((e) => (
              <li key={e.slug} className="border-b border-border">
                <a
                  href={`#${e.slug}`}
                  className="group flex items-baseline gap-5 py-4 transition-colors"
                >
                  <span className="w-7 shrink-0 font-serif text-lg text-accent">
                    {e.number}
                  </span>
                  <span className="flex-1 font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                    {e.title}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* One chapter per idea */}
      {experiences.map((e, i) => {
        const flip = i % 2 === 1
        const places = e.destinationSlugs
          .map((s) => getDestination(s))
          .filter((d) => d !== undefined)
        const tour = getTour(e.tourSlugs[0])
        return (
          <section
            key={e.slug}
            id={e.slug}
            className={`scroll-mt-20 ${flip ? 'bg-muted/40' : ''} border-t border-border`}
          >
            <div className="shell grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <Link
                  href={`/how-we-travel/${e.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(26,26,26,0.5)] lg:aspect-[4/5]"
                >
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-6 font-serif text-7xl leading-none text-background/90 sm:text-8xl">
                    {e.number}
                  </span>
                </Link>
              </Reveal>

              <Reveal delay={100} className={flip ? 'lg:order-1' : ''}>
                <p className="eyebrow mb-4 text-accent">
                  <span className="rule" />
                  {e.tagline}
                </p>
                <h2 className="text-balance text-3xl leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
                  {e.title}
                </h2>
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                  {e.intro}
                </p>

                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {e.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex gap-4 text-pretty text-sm leading-relaxed text-foreground sm:text-[15px]"
                    >
                      <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                {places.length > 0 && (
                  <div className="mt-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                      Where it happens
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {places.map((d) => (
                        <li key={d.slug}>
                          <Link
                            href={`/destinations/${d.slug}`}
                            className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:text-[11px]"
                          >
                            <MapPin className="h-3 w-3 text-accent" />
                            {d.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href={`/how-we-travel/${e.slug}`}
                    className="group inline-flex items-center gap-2.5 rounded-sm bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground sm:text-xs"
                  >
                    Read the full story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  {tour && (
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="group inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
                    >
                      Travel it on {tour.title}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <CtaBand
        title="Not sure which of these fits your trip?"
        text="Most journeys draw on two or three of these at once. Tell us what matters most to you and we'll build the route around it."
        secondary={{ label: 'See Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
