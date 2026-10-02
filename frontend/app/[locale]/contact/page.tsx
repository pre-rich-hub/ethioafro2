import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { FaqSection } from '@/components/seo/FaqSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { ContactEnquiry, ContactProcess, ContactPromises } from '@/features/contact'
import { cloudinaryImage } from '@/lib/cloudinary'
import { contactFaqs } from '@/lib/seo/faq-data'
import { getContactFaqs } from '@/lib/i18n/faq-helpers'
import { faqPageJsonLd, graphJsonLd, organizationJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Speak directly with an Addis-based travel designer about your Ethiopian journey. We are available Monday to Saturday, 8:00 AM - 5:30 PM.',
  path: '/contact',
  image: cloudinaryImage('simien-mountains', 1200),
  imageAlt: 'Simien Mountains escarpment in northern Ethiopia',
})

export default async function ContactPage() {
  const t = await getTranslations('Contact')
  const tc = await getTranslations('Crumbs')
  const localFaqs = getContactFaqs(t)

  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd(), faqPageJsonLd(contactFaqs))} />
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
