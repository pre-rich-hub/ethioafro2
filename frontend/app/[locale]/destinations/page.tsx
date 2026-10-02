import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { DestinationGrid, DestinationHero } from '@/features/destinations'
import { CtaBand } from '@/features/enquiries'
import { cloudinaryImage } from '@/lib/cloudinary'
import { buildPageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'Destinations' })
  return buildPageMetadata({
    title: t('heroEyebrow'),
    description: `${t('heroTitle')}. ${t('heroLede')}`,
    path: '/destinations',
    locale,
    image: cloudinaryImage('lalibela', 1200),
    imageAlt: 'Rock-hewn churches of Lalibela, Ethiopia',
  })
}

export default async function DestinationsPage() {
  const t = await getTranslations('Destinations')
  const ts = await getTranslations('Shared')

  return (
    <>
      <DestinationHero />

      <DestinationGrid />

      <CtaBand
        eyebrow={ts('speakWithDesigner')}
        title={t('ctaTitle')}
        text={t('ctaText')}
        primary={{ label: ts('planYourJourney'), href: '/contact' }}
        secondary={{ label: t('ctaSecondaryCta'), href: '/tours' }}
        image={cloudinaryImage('simien-mountains', 1920)}
      />
    </>
  )
}
