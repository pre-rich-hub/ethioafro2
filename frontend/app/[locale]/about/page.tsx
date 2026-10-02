import { getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  AboutFacts,
  CompanyTimeline,
  FamilyTeam,
  FounderLetter,
  InternationalPerspective,
  ResponsibleEmployment,
} from '@/features/about'
import { CtaBand } from '@/features/enquiries'
import { cloudinaryImage } from '@/lib/cloudinary'
import { company } from '@/lib/seo/entities'
import { graphJsonLd, organizationJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Our Story',
  description: company.foundingOneLiner,
  path: '/about',
  image: cloudinaryImage('lake-tana', 1200),
  imageAlt: 'Lake Tana near Bahir Dar, Ethiopia',
})

export default async function AboutPage() {
  const t = await getTranslations('About')
  const tc = await getTranslations('Crumbs')
  const ts = await getTranslations('Shared')

  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd())} />
      <PageHero
        eyebrow={t('heroEyebrow')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image={cloudinaryImage('lake-tana', 1920)}
        imageAlt="A fisherman in a papyrus tankwa on Lake Tana at dawn, near Bahir Dar"
        crumbs={[{ label: tc('home'), href: '/' }, { label: tc('about') }]}
      />

      <FounderLetter />

      <AboutFacts />

      <CompanyTimeline />

      <InternationalPerspective />

      <FamilyTeam />

      <ResponsibleEmployment />

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
