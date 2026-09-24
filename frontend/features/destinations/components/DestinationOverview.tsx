import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mountain } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { CtaBand } from '@/features/enquiries'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { tours } from '@/features/tours/data/tour.data'
import type { ReactNode } from 'react'
import type { Tour } from '@/features/tours/types/tour.types'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Activity, ActivityCategory } from '@/features/experiences/types/experience.types'
import type { Post } from '@/features/blog/types/blog.types'
import type { Peak } from '@/features/mountains/types/mountain.types'


type Props = {
  d: Destination
}

export function DestinationOverview({ d }: Props) {
  return (
    <section className="shell grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Why We Go
          </p>
          <h2 className="max-w-[24ch] text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            {d.teaser}
          </h2>
          <div className="mt-8 space-y-6">
            {d.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-pretty leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden border border-secondary bg-secondary p-7 text-secondary-foreground shadow-[0_30px_60px_-30px_rgba(26,26,26,0.55)] outline outline-1 -outline-offset-[9px] outline-accent/35 sm:p-9">
            {/* Soft gold glow in the corner */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />

            <p className="eyebrow relative mb-6 text-accent">
              <span className="rule" />
              Highlights
            </p>
            <ul className="relative space-y-5">
              {d.highlights.map((h, i) => (
                <li key={h} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center font-serif text-base leading-none text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-pretty text-sm leading-relaxed text-background/85 sm:text-base">
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-7 flex items-start gap-3 border-t border-background/15 pt-6">
              <Mountain className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-background/60">
                Best combined with a stay of{' '}
                <span className="text-background">{d.duration}</span>, travelling{' '}
                <span className="text-background">{d.bestTime}</span>.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative mx-auto mt-5 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm border border-accent/60 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground sm:text-xs"
            >
              <span className="sm:hidden">Enquire now</span>
              <span className="hidden sm:inline">Enquire about {d.name}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
  )
}
