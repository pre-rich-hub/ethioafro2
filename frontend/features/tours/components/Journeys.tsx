import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TourCard } from '@/features/tours/components/TourCard'
import { LinkButton } from '@/components/common/LinkButton'
import { tours as staticTours } from '@/features/tours/data/tour.data'
import { type Tour } from '@/features/tours/types/tour.types'

export async function Journeys({ tours = staticTours }: { tours?: Tour[] }) {
  const t = await getTranslations('Home')
  // Capped so the homepage grid stays at two rows, even if more tours are
  // flagged as featured in the admin.
  const featured = tours.filter((tour) => tour.featured).slice(0, 6)

  return (
    <section id="tours" className="shell py-20 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow={t('journeysEyebrow')}
        title={t('journeysTitle')}
        lede={t('journeysLede')}
      />

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {featured.map((tour, i) => (
          <Reveal key={tour.slug} delay={i * 120}>
            <TourCard tour={tour} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center sm:mt-14">
        <LinkButton href="/tours" variant="outline">
          {t('journeysAllCta')}
        </LinkButton>
      </Reveal>
    </section>
  )
}
