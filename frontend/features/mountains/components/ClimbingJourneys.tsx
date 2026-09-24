import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  climbs: Tour[]
}

export function ClimbingJourneys({ climbs }: Props) {
  return (
    <section className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-4 text-accent">
            <span className="rule" />
            Guided Ascents
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Climbing journeys
          </h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {climbs.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 90}>
              <TourCard tour={t} />
            </Reveal>
          ))}
        </div>
      </section>
  )
}
