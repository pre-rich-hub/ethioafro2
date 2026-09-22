import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { experiences, getTour } from '@/lib/site'

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const experience = experiences.find((e) => e.slug === slug)
  if (!experience) return {}
  return {
    title: experience.title,
    description: experience.tagline,
  }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const e = experiences.find((exp) => exp.slug === slug)
  if (!e) notFound()

  const tour = getTour(e.relatedTourSlug)

  return (
    <>
      <PageHero
        eyebrow={`Experience ${e.number}`}
        title={e.title}
        lede={e.tagline}
        image={e.image}
        imageAlt={e.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Experiences', href: '/experiences' },
          { label: e.title },
        ]}
      />

      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-foreground">
            {e.intro}
          </p>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            {e.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {e.gallery.length > 1 && (
            <div className="mt-10 grid grid-cols-2 gap-4">
              {e.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm"
                >
                  <Image
                    src={src}
                    alt={e.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-border bg-card p-7 sm:p-8">
            <p className="eyebrow mb-5 text-accent">
              <span className="rule" />
              What This Looks Like
            </p>
            <ul className="space-y-3.5">
              {e.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border pt-7">
              {e.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {tour && (
        <CtaBand
          title={`See it inside ${tour.title}`}
          text={tour.teaser}
          primary={{ label: 'View This Tour', href: `/tours/${tour.slug}` }}
          secondary={{ label: 'All Experiences', href: '/experiences' }}
          image={tour.image}
        />
      )}
    </>
  )
}
