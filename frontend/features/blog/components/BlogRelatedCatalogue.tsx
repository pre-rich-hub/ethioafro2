import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations'
import { TourCard } from '@/features/tours'
import type { Destination } from '@/features/destinations/types/destination.types'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  destinations: Destination[]
  tours: Tour[]
}

export function BlogRelatedCatalogue({ destinations, tours }: Props) {
  const t = useTranslations('Blog')

  if (destinations.length === 0 && tours.length === 0) return null

  return (
    <section className="border-t border-border">
      <div className="shell space-y-16 py-16 sm:py-20 lg:py-24">
        {destinations.length > 0 && (
          <div>
            <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-4 text-accent">
                  {t('relatedDestEyebrow')}
                </p>
                <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                  {t('relatedDestTitle')}
                </h2>
              </div>
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
              >
                {t('allDestinations')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((d, i) => (
                <Reveal key={d.slug} delay={i * 80} className="h-full">
                  <DestinationCard destination={d} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {tours.length > 0 && (
          <div>
            <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-4 text-accent">
                  {t('relatedToursEyebrow')}
                </p>
                <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                  {t('relatedToursTitle')}
                </h2>
              </div>
              <Link
                href="/tours"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
              >
                {t('allTours')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour, i) => (
                <Reveal key={tour.slug} delay={i * 90}>
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
