import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { FaqSection } from '@/components/seo/FaqSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { CtaBand } from '@/features/enquiries'
import { getToursData } from '@/features/tours/api/tour-data.api'
import { TourTravelStyles } from '@/features/tours/components/TourTravelStyles'
import { TourCollection } from '@/features/tours/components/TourCollection'
import { TourPromises } from '@/features/tours/components/TourPromises'
import { cloudinaryImage } from '@/lib/cloudinary'
import { toursFaqs } from '@/lib/seo/faq-data'
import { getToursFaqs } from '@/lib/i18n/faq-helpers'
import { faqPageJsonLd, graphJsonLd, organizationJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Tours & Journeys',
  description:
    'Private, tailor-made Ethiopian itineraries — historic route, highland wildlife, Danakil expedition, Omo immersion, festival, photography and birding journeys. Every route drawn from scratch.',
  path: '/tours',
  image: cloudinaryImage('simien-mountains', 1200),
  imageAlt: 'Simien Mountains escarpment in northern Ethiopia',
})

export default async function ToursPage() {
  const tours = await getToursData()
  const t = await getTranslations('Tours')
  const tc = await getTranslations('Crumbs')
  const ts = await getTranslations('Shared')
  const localFaqs = getToursFaqs(t)

  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd(), faqPageJsonLd(toursFaqs))} />
      <PageHero
        eyebrow={t('heroEyebrow')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/simien-mountains.png"
        imageAlt="Simien Mountains escarpment in northern Ethiopia"
        crumbs={[{ label: tc('home'), href: '/' }, { label: tc('tours') }]}
        compact
      />

      <TourTravelStyles tours={tours} />

      <TourCollection tours={tours} />

      <TourPromises />

      <FaqSection
        title={t('faqTitle')}
        intro={t('faqIntro')}
        items={localFaqs}
        footerLink={{ label: t('faqFooterLink'), href: '/contact' }}
      />

      <CtaBand
        eyebrow={ts('speakWithDesigner')}
        title={t('ctaTitle')}
        text={t('ctaText')}
        primary={{ label: ts('planYourJourney'), href: '/contact' }}
        secondary={{ label: t('ctaSecondaryCta'), href: '/destinations' }}
      />
    </>
  )
}
