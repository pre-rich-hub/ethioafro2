import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import type { Tour } from '@/features/tours/types/tour.types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TravelJourneys({ journeys }: { journeys: Tour[] }) {
  return (
    <>
      {journeys.length > 0 && (
        <section className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                Journeys That Include It
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Travel it for yourself
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
            {journeys.map((t, i) => (
              <Reveal key={t.slug} delay={i * 90}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
