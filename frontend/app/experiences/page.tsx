import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { experiences } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Signature Experiences',
  description:
    'Four ideas we build every Ethiopia journey around — coffee traced to its origin, light-first photography, access built on relationship, and lodges chosen for the wild.',
}

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Travel"
        title="Four ideas we build every journey around"
        lede="These aren't add-ons. They're the standard every itinerary gets measured against, whichever tour they end up woven into."
        image="/images/coffee-ceremony.png"
        imageAlt="Hands pouring coffee from a traditional Ethiopian jebena during a coffee ceremony"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Experiences' }]}
        compact
      />

      <section className="shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((e, i) => (
            <Reveal key={e.slug} delay={(i % 2) * 100}>
              <Link
                href={`/experiences/${e.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
                  <span className="absolute left-5 top-5 font-serif text-2xl text-accent-light">
                    {e.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                    {e.title}
                  </h2>
                  <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                    {e.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which of these fits your trip?"
        text="Most journeys draw on two or three of these at once. Tell us what matters most to you and we'll build the route around it."
        secondary={{ label: 'See Tours', href: '/tours' }}
        image="/images/luxury-lodge.png"
      />
    </>
  )
}
