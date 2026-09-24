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

export function TourEnquiry({ t }: Props) {
  return (
    <section
        id="enquire"
        className="border-t border-border bg-secondary text-secondary-foreground"
      >
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              <span className="rule" />
              Enquire
            </p>
            <h2 className="max-w-[20ch] text-balance text-3xl leading-[1.08] text-background sm:text-4xl lg:text-5xl">
              Make {t.title} yours
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70 sm:text-lg">
              Send us your dates and we will confirm availability, quote
              precisely, and suggest the two or three changes we would make if it
              were our own trip.
            </p>
            <p className="mt-8 border-l-2 border-accent-light pl-5 text-sm leading-relaxed text-background/70">
              Runs {t.season} · {t.group} ·{' '}
              {isTailorMade(t) ? (
                <span className="text-background">priced to your plans</span>
              ) : (
                <>
                  from <span className="text-background">{t.from}</span>
                </>
              )}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm
              subject={t.title}
              defaultStyles={t.style.split('·').map((s) => s.trim())}
            />
          </Reveal>
        </div>
      </section>
  )
}
