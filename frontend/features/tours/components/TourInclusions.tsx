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

export function TourInclusions({ t }: Props) {
  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
          <div className={`grid gap-12 xl:grid-cols-2 xl:gap-16 ${railPad}`}>
            <Reveal>
              <p className="eyebrow mb-6 text-primary">
                <span className="rule" />
                What Is Included
              </p>
              <ul className="space-y-4">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow mb-6 text-muted-foreground">
                <span className="rule" />
                Not Included
              </p>
              <ul className="space-y-4">
                {t.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
  )
}
