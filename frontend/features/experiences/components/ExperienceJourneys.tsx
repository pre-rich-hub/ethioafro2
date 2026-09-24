import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CalendarDays, Clock3, Info, MapPin } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { activities } from '@/features/experiences/data/experience.data'
import { getActivity } from '@/features/experiences/utils/experience.utils'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import type { ReactNode } from 'react'
import type { Tour } from '@/features/tours/types/tour.types'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Activity, ActivityCategory } from '@/features/experiences/types/experience.types'
import type { Post } from '@/features/blog/types/blog.types'
import type { Peak } from '@/features/mountains/types/mountain.types'


type Props = {
  journeys: Tour[]
}

export function ExperienceJourneys({ journeys }: Props) {
  return (
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
  )
}
