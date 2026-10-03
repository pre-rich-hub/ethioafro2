import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  journeys: Tour[]
}

export function ExperienceJourneys({ journeys }: Props) {
  const t = useTranslations('Experiences')

  return (
    <section className="shell py-16 sm:py-20">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4 text-accent">
              {t('detailJourneysEyebrow')}
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
              {t('detailJourneysTitle')}
            </h2>
          </Reveal>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {journeys.map((tour, i) => (
              <Reveal key={tour.slug} delay={i * 90}>
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </div>
        </section>
  )
}
