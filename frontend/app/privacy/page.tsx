import { PageHero } from '@/components/common/PageHero'
import { LegalContactCard, LegalContents, LegalSections } from '@/features/legal'
import { privacySections } from '@/features/legal/data/privacy.data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Simien Ethiopia Tours collects, uses, shares and protects the information you give us when planning a journey.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="How Simien Ethiopia Tours handles the information shared by guests, website visitors and travel partners — in plain language."
        image="/images/hero-simien.png"
        imageAlt="The Simien Mountains escarpment at first light"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        compact
      />
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-20 lg:py-24">
        <LegalContents updated="September 23, 2026" sections={privacySections} />
        <div className="max-w-3xl">
          <LegalSections sections={privacySections} />
          <LegalContactCard related={{ label: 'Read our Terms & Conditions', href: '/terms' }} />
        </div>
      </section>
    </>
  )
}
