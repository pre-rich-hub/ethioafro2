import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { FaqSection } from '@/components/seo/FaqSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { ContactEnquiry, ContactProcess, ContactPromises } from '@/features/contact'
import { cloudinaryImage } from '@/lib/cloudinary'
import { getContactFaqs } from '@/lib/i18n/faq-helpers'
import { faqPageJsonLd, graphJsonLd, organizationJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'Contact' })
  const tf = await getTranslations({ locale, namespace: 'Footer' })
  return buildPageMetadata({
    title: tf('contactUs'),
    description: `${t('heroTitle')}. ${t('heroLede')}`,
    path: '/contact',
    locale,
    image: cloudinaryImage('simien-mountains', 1200),
    imageAlt: 'Simien Mountains escarpment in northern Ethiopia',
  })
}

export default async function ContactPage() {
  const locale = await getLocale()
  const t = await getTranslations('Contact')
  const tc = await getTranslations('Crumbs')
  const localFaqs = getContactFaqs(t)

  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd(), faqPageJsonLd(localFaqs, locale))} />
      <PageHero
        eyebrow={t('heroEyebrow')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image={cloudinaryImage('simien-mountains', 1920)}
        imageAlt="A traveller looking out over the Ethiopian highlands at dawn"
        crumbs={[{ label: tc('home'), href: '/' }, { label: tc('contact') }]}
        meta={[
          { label: t('metaReplyLabel'), value: t('metaReplyValue') },
          { label: t('metaBasedLabel'), value: t('metaBasedValue') },
          { label: t('metaSupportLabel'), value: t('metaSupportValue') },
          { label: t('metaDepositLabel'), value: t('metaDepositValue') },
        ]}
      />

      <ContactEnquiry />

      <ContactProcess />

      <ContactPromises />

      <FaqSection
        title={t('faqTitle')}
        intro={t('faqIntro')}
        items={localFaqs}
        footerLink={{ label: t('faqFooterLink'), href: '/about' }}
      />
    </>
  )
}
