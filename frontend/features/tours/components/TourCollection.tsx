import { getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ToursGrid } from '@/features/tours/components/TourGrid'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  tours: Tour[]
}

export async function TourCollection({ tours }: Props) {
  const t = await getTranslations('Tours')

  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow={t('collectionEyebrow')}
        title={t('collectionTitle')}
        aside={t('collectionAside')}
      />
      <ToursGrid tours={tours} />
    </section>
  )
}
