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
  a: Activity
  others: Activity[]
}

export function ExperienceEnquiry({ a, others }: Props) {
  return (
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
  )
}
