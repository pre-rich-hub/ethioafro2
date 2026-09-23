import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { activities, activityCategories, type Activity } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Experiences',
  description:
    'Add-on experiences for any Ethiopia journey — injera and cooking classes, tej and coffee tastings, running at altitude, Rift Valley cycling, farm days, village stays and clean-up days.',
}

const longer = [
  {
    title: 'Run with Ethiopia\'s Champions',
    text: 'Six days on Entoto and in Bekoji, the town of runners.',
    href: '/tours/run-with-ethiopias-champions',
  },
  {
    title: 'Rift Valley by Bike',
    text: 'Five days lake to lake, with a big highland descent.',
    href: '/tours/rift-valley-by-bike',
  },
  {
    title: 'Mountain climbing',
    text: 'Guided ascents of Ethiopia\'s highest summits.',
    href: '/mountains',
  },
]

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function ActivityCard({ a }: { a: Activity }) {
  return (
    <Link
      href={`/experiences/${a.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={a.image}
          alt={a.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
          {a.category}
        </span>
        <h3 className="absolute inset-x-0 bottom-0 p-5 font-serif text-2xl leading-tight text-background">
          {a.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{a.teaser}</p>
        <div className="mt-5 grid gap-2.5">
          <span className="flex items-center gap-2 text-xs text-foreground">
            <Clock3 className="h-3.5 w-3.5 shrink-0 text-accent" />
            {a.duration}
          </span>
          <span className="flex items-center gap-2 text-xs text-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            {a.where}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Add a day you'll talk about for years"
        lede="Short experiences that slot into any journey — in kitchens, coffee houses, farms and villages, on running trails and quiet Rift Valley roads."
        image="/images/coffee-ceremony.png"
        imageAlt="Coffee being poured from a traditional jebena during a coffee ceremony"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Experiences' }]}
        compact
      />

      {/* Intro + category jump */}
      <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            How It Works
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Choose what appeals, and we fit it into your route
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Every experience here can be added to any tour or tailor-made
            journey. Tick the ones you like on the enquiry form — or ask about
            them once your route takes shape — and we place them where they
            make sense on the map and in the calendar.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-2">
            {activityCategories.map((c) => (
              <li key={c}>
                <a
                  href={`#${slugify(c)}`}
                  className="inline-block border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:text-[11px]"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Categories */}
      {activityCategories.map((c, ci) => {
        const items = activities.filter((a) => a.category === c)
        if (!items.length) return null
        return (
          <section
            key={c}
            id={slugify(c)}
            className={`scroll-mt-20 border-t border-border ${ci % 2 === 0 ? 'bg-muted/40' : ''}`}
          >
            <div className="shell py-14 sm:py-16 lg:py-20">
              <Reveal className="mb-8 flex items-baseline gap-4 sm:mb-10">
                <span className="font-serif text-lg text-accent">
                  {String(ci + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">{c}</h2>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 90} className="h-full">
                    <ActivityCard a={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Longer adventures */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              Want More?
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-background sm:text-4xl">
              Turn an experience into a whole journey
            </h2>
          </Reveal>
          <div className="grid gap-px border border-background/15 bg-background/15 md:grid-cols-3">
            {longer.map((l, i) => (
              <Reveal key={l.title} delay={i * 90} className="h-full">
                <Link
                  href={l.href}
                  className="group flex h-full flex-col bg-secondary p-7 transition-colors duration-500 hover:bg-charcoal sm:p-9"
                >
                  <span className="font-serif text-2xl text-background">{l.title}</span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-background/65">{l.text}</span>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Build your experiences into a journey"
        text="Tell us which experiences caught your eye and roughly when you'd travel. A designer will fit them into a route that makes sense."
        secondary={{ label: 'See Tours', href: '/tours' }}
        image="/images/hero-lalibela.png"
      />
    </>
  )
}
