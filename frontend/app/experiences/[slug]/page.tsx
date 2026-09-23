import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CalendarDays, Clock3, Info, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { DestinationCard } from '@/components/destination-card'
import { TourCard } from '@/components/tour-card'
import { EnquiryForm } from '@/components/enquiry-form'
import { activities, getActivity, getDestination, getTour } from '@/lib/site'

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const a = getActivity(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.teaser,
    openGraph: { title: a.title, description: a.teaser, images: [a.image] },
  }
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const a = getActivity(slug)
  if (!a) notFound()

  const places = a.destinationSlugs
    .map((s) => getDestination(s))
    .filter((d) => d !== undefined)
  const journeys = a.tourSlugs
    .map((s) => getTour(s))
    .filter((t) => t !== undefined)
  const more = activities.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 2)
  const others = more.length
    ? more
    : activities.filter((x) => x.slug !== a.slug).slice(0, 2)

  return (
    <>
      <PageHero
        eyebrow={`Experiences · ${a.category}`}
        title={a.title}
        lede={a.teaser}
        image={a.image}
        imageAlt={a.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Experiences', href: '/experiences' },
          { label: a.title },
        ]}
        compact
      />

      {/* Story + details */}
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <p className="text-pretty font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
            {a.intro}
          </p>
          <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          {a.goodToKnow && (
            <p className="mt-8 flex gap-3 border-l-2 border-accent bg-muted/60 px-5 py-4 text-sm leading-relaxed text-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
              {a.goodToKnow}
            </p>
          )}
        </Reveal>

        <Reveal delay={120} className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden bg-secondary p-2 text-secondary-foreground shadow-[0_30px_60px_-30px_rgba(26,26,26,0.55)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative border border-accent/35 px-6 py-8 sm:px-8 sm:py-10">
              <p className="eyebrow text-accent">
                <span className="rule" />
                The details
              </p>
              <dl className="mt-6 space-y-4">
                {[
                  { k: 'Time needed', v: a.duration, Icon: Clock3 },
                  { k: 'Where', v: a.where, Icon: MapPin },
                  { k: 'When', v: a.season, Icon: CalendarDays },
                ].map(({ k, v, Icon }) => (
                  <div key={k} className="flex items-start gap-3">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-background/50">{k}</dt>
                      <dd className="mt-0.5 font-serif text-lg leading-snug text-background">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <p className="mt-8 border-t border-background/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-background/50">
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-3">
                {a.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 text-sm leading-relaxed text-background/85">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href="#add"
                className="group mx-auto mt-8 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-accent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background sm:text-xs"
              >
                Add to my journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Where */}
      {places.length > 0 && (
        <section className="border-t border-border bg-muted/40">
          <div className="shell py-16 sm:py-20">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                Where It Happens
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Places you can do this
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {places.map((d, i) => (
                <Reveal key={d.slug} delay={i * 80} className="h-full">
                  <DestinationCard destination={d} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Journeys */}
      {journeys.length > 0 && (
        <section className="shell py-16 sm:py-20">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              Fits Well With
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
              Journeys this slots into
            </h2>
          </Reveal>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {journeys.map((t, i) => (
              <Reveal key={t.slug} delay={i * 90}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section id="add" className="scroll-mt-20 border-t border-border bg-secondary text-secondary-foreground">
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              <span className="rule" />
              Add It
            </p>
            <h2 className="max-w-[20ch] text-balance text-3xl leading-[1.08] text-background sm:text-4xl lg:text-5xl">
              Add {a.title.toLowerCase()} to your journey
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70 sm:text-lg">
              Tell us roughly when you&apos;re travelling and what else is on
              your list. We&apos;ll fit this in where it works best.
            </p>
            {others.length > 0 && (
              <div className="mt-10 border-t border-background/15 pt-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50 sm:text-[11px]">
                  You might also like
                </p>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/experiences/${o.slug}`}
                        className="group inline-flex items-center gap-2 py-1 font-serif text-xl text-background transition-colors hover:text-accent"
                      >
                        {o.title}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm subject={a.title} defaultStyles={[]} defaultActivities={[a.short]} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
