import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { LegalContactCard, LegalContents, LegalSections } from '@/features/legal'
import { privacySections } from '@/features/legal/data/privacy.data'
import { cloudinaryImage } from '@/lib/cloudinary'
import { company } from '@/lib/seo/entities'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: `How ${company.name} collects, uses, shares and protects the information you give us when planning a journey.`,
  path: '/privacy',
  image: cloudinaryImage('simien-mountains', 1200),
  imageAlt: 'The Simien Mountains escarpment at first light',
})

export default async function PrivacyPage() {
  const t = await getTranslations('Legal')
  const tc = await getTranslations('Crumbs')

  return (
    <>
      <PageHero
        eyebrow={t('privacyEyebrow')}
        title={t('privacyTitle')}
        lede={t('privacyLede', { company: company.name })}
        image={cloudinaryImage('simien-mountains', 1920)}
        imageAlt="The Simien Mountains escarpment at first light"
        crumbs={[{ label: tc('home'), href: '/' }, { label: t('privacyCrumb') }]}
        compact
      />
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-20 lg:py-24">
        <LegalContents updated="September 23, 2026" sections={privacySections} />
        <div className="max-w-3xl">
          <LegalSections sections={privacySections} />
          <LegalContactCard related={{ label: t('relatedTerms'), href: '/terms' }} />
        </div>
      </section>
    </>
  )
}
