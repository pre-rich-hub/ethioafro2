import { PageHero } from '@/components/common/PageHero'
import { ContactEnquiry, ContactProcess, ContactPromises } from '@/features/contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Speak directly with an Addis-based travel designer about your Ethiopian journey. We are available Monday to Saturday, 8:00 AM - 5:30 PM.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Speak With a Designer"
        title="Start with a conversation, not a form"
        lede="There is no call centre and no fixed package. Write to us directly and an Addis-based designer replies personally, almost always the same day."
        image="/images/traveler-portrait.png"
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

    </>
  )
}
