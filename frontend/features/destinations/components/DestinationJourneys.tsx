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
  fallback: Tour[]
}

export function DestinationJourneys({ d, fallback }: Props) {
  return (
    <section className="border-y border-border bg-muted/40">
        <div className="shell py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent sm:mb-5">
                <span className="rule" />
                Journeys Including {d.name}
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Routes that pass through here
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
            {fallback.map((t, i) => (
              <Reveal key={t.slug} delay={i * 90}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  )
}
