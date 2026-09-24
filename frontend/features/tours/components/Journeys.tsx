import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TourCard } from '@/features/tours/components/TourCard'
import { LinkButton } from '@/components/common/LinkButton'
import { tours as staticTours } from '@/features/tours/data/tour.data'
import { type Tour } from '@/features/tours/types/tour.types'

export function Journeys({ tours = staticTours }: { tours?: Tour[] }) {
  // Capped so the homepage grid stays at two rows, even if more tours are
  // flagged as featured in the admin.
  const featured = tours.filter((t) => t.featured).slice(0, 6)

  return (
    <section id="tours" className="shell py-20 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Featured Tours"
        title="A starting point, not a fixed itinerary"
        lede="Each of these routes exists to open a conversation. What you actually travel gets reshaped around your pace and interests."
      />

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {featured.map((t, i) => (
          <Reveal key={t.slug} delay={i * 120}>
            <TourCard tour={t} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center sm:mt-14">
        <LinkButton href="/tours" variant="outline">
          Explore All Tours
        </LinkButton>
      </Reveal>
    </section>
  )
}
