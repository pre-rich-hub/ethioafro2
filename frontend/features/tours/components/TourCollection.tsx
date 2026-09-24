import { SectionHeading } from '@/components/common/SectionHeading'
import { ToursGrid } from '@/features/tours/components/TourGrid'
import type { Tour } from '@/features/tours/types/tour.types'


type Props = {
  tours: Tour[]
}

export function TourCollection({ tours }: Props) {
  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Collection"
          title="The full route list"
          aside="Sort by the kind of travel you're after — any route here can be stretched, shortened or joined with another."
        />
        <ToursGrid tours={tours} />
      </section>
  )
}
