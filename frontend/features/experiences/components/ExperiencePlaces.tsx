import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations/components/DestinationCard'
import type { Destination } from '@/features/destinations/types/destination.types'

type Props = {
  places: Destination[]
}

export function ExperiencePlaces({ places }: Props) {
  const t = useTranslations('Experiences')

  return (
    <section className="border-t border-border bg-muted/40">
          <div className="shell py-16 sm:py-20">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4 text-accent">
                <span className="rule" />
                {t('detailPlacesEyebrow')}
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                {t('detailPlacesTitle')}
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {places.map((d, i) => (
                <Reveal key={d.slug} delay={i * 80} className="h-full">
                  <DestinationCard destination={d} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
  )
}
