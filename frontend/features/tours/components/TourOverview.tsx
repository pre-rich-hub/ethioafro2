import { useTranslations } from 'next-intl'
import { MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import type { Tour } from '@/features/tours/types/tour.types'
import { getDestinationSlugForPlace } from '@/features/destinations/utils/destination-tours.utils'
import { getTourAudience } from '@/features/tours/utils/tour-audience.utils'
import { railPad } from '@/features/tours/constants/tour-layout'
import type { ReactNode } from 'react'

type Props = {
  t: Tour
  nightsLabel: string
  priceCard: ReactNode
}

export function TourOverview({ t, nightsLabel, priceCard }: Props) {
  const tt = useTranslations('Tours')
  const audience = getTourAudience(t, tt)

  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
      <div className={railPad}>
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            {tt('detailJourney')}
          </p>
          <h2 className="max-w-[22ch] text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            {t.nights ? tt('detailTitleNights', { nights: nightsLabel }) : tt('detailTitleDay')}
          </h2>
          <p className="mt-7 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {t.summary}
          </p>

          <div className="mt-10 grid gap-6 border border-border bg-card p-6 sm:grid-cols-2 sm:p-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                {tt('detailWhoFor')}
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground sm:text-[15px]">
                {audience.forWhom}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                {tt('detailWhatNot')}
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground sm:text-[15px]">
                {audience.notFor}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="eyebrow mb-5 text-primary">
              <span className="rule" />
              {tt('detailPlaces')}
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

      <Reveal delay={120} className="mt-12 lg:hidden">
        {priceCard}
      </Reveal>
    </section>
  )
}
