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
}

export function ExperienceStory({ a }: Props) {
  return (
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
  )
}
