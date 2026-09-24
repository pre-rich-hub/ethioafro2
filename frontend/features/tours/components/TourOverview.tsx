import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Compass,
  MapPin,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours/components/TourCard'
import { EnquiryForm } from '@/features/enquiries'
import { CtaBand } from '@/features/enquiries'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import { isTailorMade } from '@/features/tours/utils/tour.utils'
import { tours } from '@/features/tours/data/tour.data'
import { getTourData } from '@/features/tours/api/tour-data.api'
import type { ReactNode } from 'react'
import type { Tour } from '@/features/tours/types/tour.types'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Activity, ActivityCategory } from '@/features/experiences/types/experience.types'
import type { Post } from '@/features/blog/types/blog.types'
import type { Peak } from '@/features/mountains/types/mountain.types'
import { railPad } from '@/features/tours/constants/tour-layout'

type Props = {
  t: Tour
  nightsLabel: string
  priceCard: ReactNode
}

export function TourOverview({ t, nightsLabel, priceCard }: Props) {
  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
          <div className={railPad}>
            <Reveal>
              <p className="eyebrow mb-5 text-accent">
                <span className="rule" />
                The Journey
              </p>
              <h2 className="max-w-[22ch] text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                {t.nights ? `${nightsLabel}, designed` : 'A single day, designed'} around the hours that matter
              </h2>
              <p className="mt-7 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                {t.summary}
              </p>

              <div className="mt-10">
                <p className="eyebrow mb-5 text-primary">
                  <span className="rule" />
                  Places
                </p>
                <ul className="flex flex-wrap gap-2">
                  {t.places.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]"
                    >
                      <MapPin className="h-3 w-3 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Inline on smaller screens; pinned in the rail from lg up */}
          <Reveal delay={120} className="mt-12 lg:hidden">
            {priceCard}
          </Reveal>
        </section>
  )
}
