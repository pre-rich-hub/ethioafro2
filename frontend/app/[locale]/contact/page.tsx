import { PageHero } from '@/components/common/PageHero'
import { FaqSection } from '@/components/seo/FaqSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { ContactEnquiry, ContactProcess, ContactPromises } from '@/features/contact'
import { cloudinaryImage } from '@/lib/cloudinary'
import { contactFaqs } from '@/lib/seo/faq-data'
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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd(), faqPageJsonLd(contactFaqs))} />
      <PageHero
        eyebrow="Speak With a Designer"
        title="Start with a conversation, not a form"
        lede="There is no call centre and no fixed package. Write to us directly and an Addis-based designer replies personally, almost always the same day."
        image={cloudinaryImage('simien-mountains', 1920)}
        imageAlt="A traveller looking out over the Ethiopian highlands at dawn"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        meta={[
          { label: 'Reply Time', value: 'Within 24 hrs' },
          { label: 'Based In', value: 'Addis Ababa' },
          { label: 'Support', value: '24/7 In-Country' },
          { label: 'Deposit', value: 'Only When Right' },
        ]}
      />

      <ContactEnquiry />

      <ContactProcess />

      <ContactPromises />

      <FaqSection
        title="Before you write"
        intro="Straight answers about how planning with us actually works."
        items={contactFaqs}
        footerLink={{ label: 'Read our story', href: '/about' }}
      />
    </>
  )
}
