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
}

export function TourPriceCard({ t, nightsLabel }: Props) {
  return (
    <div className="relative overflow-hidden bg-secondary p-2 text-secondary-foreground shadow-[0_30px_60px_-30px_rgba(26,26,26,0.55)]">
      {/* Soft gold glow behind the price */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Inset hairline frame */}
      <div className="relative border border-accent/35 px-6 py-8 sm:px-8 sm:py-10">
        {isTailorMade(t) ? (
          <>
            <p className="eyebrow text-accent">
              <span className="rule" />
              Tailor-made journey
            </p>
            <p className="mt-6 font-serif text-4xl leading-[1.05] text-background sm:text-5xl">
              Priced to your plans
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              Quoted individually once we know your dates, lodges and group
              size.
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow text-accent">
              <span className="rule" />
              Indicative price
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-background/55">
                From
              </span>
              <p className="font-serif text-5xl leading-none text-background sm:text-6xl">
                {t.from.split(' per')[0]}
              </p>
            </div>
            <p className="mt-3 text-sm text-background/60">
              per person, twin share
            </p>
          </>
        )}

        <dl className="mt-8 grid grid-cols-2 border-t border-background/15">
          {[
            { k: 'Duration', v: t.nights ? `${t.days} · ${nightsLabel}` : t.days, Icon: Clock },
            { k: 'Best season', v: t.season, Icon: CalendarDays },
            { k: 'Group size', v: t.group, Icon: Users },
            { k: 'Style', v: t.style, Icon: Compass },
          ].map(({ k, v, Icon }, i) => (
            <div
              key={k}
              className={`border-b border-background/15 py-5 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4 sm:pl-5'}`}
            >
              <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
                <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                {k}
              </dt>
              <dd className="mt-2 font-serif text-lg leading-snug text-background sm:text-xl">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href="#enquire"
          className="group mx-auto mt-8 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-accent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background sm:text-xs"
        >
          Enquire now
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-background/55">
          <ShieldCheck className="mt-px h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          Final pricing depends on season, room category and group size. No
          deposit is taken until the itinerary is right.
        </p>
      </div>
    </div>
  )
}
