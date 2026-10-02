import { getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WaysToTravel } from '@/features/tours/components/WaysToTravel'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  tours: Tour[]
}

export async function TourTravelStyles({ tours }: Props) {
  const t = await getTranslations('Tours')

  return (
    <section className="shell pt-16 sm:pt-20 lg:pt-28">
      <SectionHeading
        eyebrow={t('stylesEyebrow')}
        title={t('stylesTitle')}
        aside={t('stylesAside')}
      />
      <WaysToTravel tours={tours} onToursPage />
    </section>
  )
}
