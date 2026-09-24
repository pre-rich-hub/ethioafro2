import { PageHero } from '@/components/common/PageHero'
import { LegalContactCard, LegalContents, LegalSections } from '@/features/legal'
import { termsSections } from '@/features/legal/data/terms.data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Booking, payment, cancellation, liability, insurance and guest responsibilities for private journeys with Simien Ethiopia Tours.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lede="How bookings, payments, cancellations, liability, insurance and guest responsibilities work on a private journey with Simien Ethiopia Tours."
        image="/images/hero-simien.png"
        imageAlt="The Simien Mountains escarpment at first light"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
        compact
      />
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-20 lg:py-24">
        <LegalContents updated="September 23, 2026" sections={termsSections} />
        <div className="max-w-3xl">
          <LegalSections sections={termsSections} />
          <LegalContactCard related={{ label: 'Read our Privacy Policy', href: '/privacy' }} />
        </div>
      </section>
    </>
  )
}
