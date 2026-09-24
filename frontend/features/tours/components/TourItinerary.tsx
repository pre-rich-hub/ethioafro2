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
}

export function TourItinerary({ t }: Props) {
  return (
    <section className="border-y border-border bg-muted/40">
          <div className="shell py-16 sm:py-20 lg:py-28">
            <div className={railPad}>
              <Reveal className="mb-12 max-w-2xl sm:mb-16">
                <p className="eyebrow mb-5 text-accent">
                  <span className="rule" />
                  Day by Day
                </p>
                <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                  The itinerary, as it usually runs
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                  A working draft rather than a fixed schedule — we move days around
                  for weather, festivals and how you are feeling.
                </p>
              </Reveal>

              <ol className="relative border-l border-border pl-8 sm:pl-12">
                {t.itinerary.map((step, i) => (
                  <Reveal
                    key={step.day}
                    delay={i * 70}
                    as="li"
                    className="relative pb-10 last:pb-0"
                  >
                    <span
                      aria-hidden
                      className="absolute -left-[38px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-muted sm:-left-[54px]"
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                      {step.day}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-foreground sm:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>
  )
}
