import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { DestinationCard } from '@/components/destination-card'
import { TourCard } from '@/components/tour-card'
import { experiences, getDestination, getExperience, getTour } from '@/lib/site'

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const e = getExperience(slug)
  if (!e) return {}
  return {
    title: e.title,
    description: e.intro,
    openGraph: { title: e.title, description: e.intro, images: [e.image] },
  }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const e = getExperience(slug)
  if (!e) notFound()

  const index = experiences.findIndex((x) => x.slug === e.slug)
  const prev = experiences[(index - 1 + experiences.length) % experiences.length]
  const next = experiences[(index + 1) % experiences.length]
  const places = e.destinationSlugs
    .map((s) => getDestination(s))
    .filter((d) => d !== undefined)
  const journeys = e.tourSlugs
    .map((s) => getTour(s))
    .filter((t) => t !== undefined)
  const [lead, ...rest] = e.gallery

  return (
    <>
      <PageHero
        eyebrow={`How We Travel · ${e.number} of ${String(experiences.length).padStart(2, '0')}`}
        title={e.title}
        lede={e.tagline}
        image={e.image}
        imageAlt={e.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'How We Travel', href: '/how-we-travel' },
          { label: e.title },
        ]}
      />

      {/* Story + highlights */}
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="text-pretty font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
            {e.intro}
          </p>
          <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {e.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          {lead && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm sm:col-span-2">
                <Image
                  src={lead}
                  alt={e.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              {rest.map((src) => (
                <div
                  key={src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm ${rest.length === 1 ? 'sm:col-span-2 sm:aspect-[16/9]' : ''}`}
                >
                  <Image
                    src={src}
                    alt={e.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
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
                What this looks like
              </p>
              <ol className="mt-6 space-y-4">
                {e.highlights.map((h, i) => (
                  <li key={h} className="flex items-baseline gap-4">
                    <span className="w-6 shrink-0 font-serif text-base text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-pretty text-sm leading-relaxed text-background/85 sm:text-[15px]">
                      {h}
                    </span>
                  </li>
                ))}
              </ol>

              <dl className="mt-8 grid grid-cols-2 border-t border-background/15">
                {e.facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`border-b border-background/15 py-4 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4'}`}
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-background/50">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 font-serif text-lg leading-snug text-background">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/contact"
                className="group mx-auto mt-8 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-accent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background sm:text-xs"
              >
                Enquire now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Where it happens */}
      {places.length > 0 && (
        <section className="border-t border-border bg-muted/40">
          <div className="shell py-16 sm:py-20 lg:py-24">
            <Reveal className="mb-10 max-w-2xl sm:mb-12">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                Where It Happens
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                The places behind this idea
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((d, i) => (
                <Reveal key={d.slug} delay={i * 90} className="h-full">
                  <DestinationCard destination={d} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Journeys */}
      {journeys.length > 0 && (
        <section className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                Journeys That Include It
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Travel it for yourself
              </h2>
            </div>
            <Link
              href="/tours"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
            >
              All tours
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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

      {/* Previous / next */}
      <nav
        aria-label="More ways we travel"
        className="border-t border-border"
      >
        <div className="shell grid sm:grid-cols-2">
          {[
            { e: prev, dir: 'Previous', Icon: ArrowLeft },
            { e: next, dir: 'Next', Icon: ArrowRight },
          ].map(({ e: x, dir, Icon }, i) => (
            <Link
              key={dir}
              href={`/how-we-travel/${x.slug}`}
              className={`group flex flex-col gap-2 py-10 transition-colors sm:py-12 ${
                i === 1
                  ? 'border-t border-border sm:items-end sm:border-l sm:border-t-0 sm:pl-10 sm:text-right'
                  : 'sm:pr-10'
              }`}
            >
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                {i === 0 && <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />}
                {dir} · {x.number}
                {i === 1 && <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
              </span>
              <span className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                {x.title}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <CtaBand
        title="Build this into your journey"
        text="Tell us roughly when you'd travel and what drew you to this idea. A designer will suggest the route that carries it best."
        secondary={{ label: 'How We Travel', href: '/how-we-travel' }}
        image={e.image}
      />
    </>
  )
}
