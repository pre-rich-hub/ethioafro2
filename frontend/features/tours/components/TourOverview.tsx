import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import type { Tour } from '@/features/tours/types/tour.types'
import { getDestinationSlugForPlace } from '@/features/destinations/utils/destination-tours.utils'
import { railPad } from '@/features/tours/constants/tour-layout'
import type { ReactNode } from 'react'

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
            {t.nights ? `${nightsLabel}, designed` : 'A single day, designed'} around the hours that
            matter
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
              {t.places.map((place) => {
                const slug = getDestinationSlugForPlace(place)
                const className =
                  'inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors sm:text-[11px]'

                return (
                  <li key={place}>
                    {slug ? (
                      <Link
                        href={`/destinations/${slug}`}
                        className={`${className} hover:border-accent hover:text-accent`}
                      >
                        <MapPin className="h-3 w-3 text-accent" />
                        {place}
                      </Link>
                    ) : (
                      <span className={className}>
                        <MapPin className="h-3 w-3 text-accent" />
                        {place}
                      </span>
                    )}
                  </li>
                )
              })}
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
