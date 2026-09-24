import { SectionHeading } from '@/components/common/SectionHeading'
import { WaysToTravel } from '@/features/tours/components/WaysToTravel'
import type { Tour } from '@/features/tours/types/tour.types'


type Props = {
  tours: Tour[]
}

export function TourTravelStyles({ tours }: Props) {
  return (
    <section className="shell pt-16 sm:pt-20 lg:pt-28">
        <SectionHeading
          eyebrow="Ways to Travel"
          title="Choose how you'd like to travel"
          aside="Every journey can be private. Pick a style to see the routes built for it."
        />
        <WaysToTravel tours={tours} onToursPage />
      </section>
  )
}
