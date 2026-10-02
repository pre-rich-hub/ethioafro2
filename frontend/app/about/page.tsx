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

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd())} />
      <PageHero
        eyebrow="Our Story"
        title="A family business, born in Bahir Dar"
        lede="Shaped by years on the ground, a love of hospitality, and a lifelong devotion to showing Ethiopia properly."
        image={cloudinaryImage('lake-tana', 1920)}
        imageAlt="A fisherman in a papyrus tankwa on Lake Tana at dawn, near Bahir Dar"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <FounderLetter />

      <AboutFacts />

      <CompanyTimeline />

      <InternationalPerspective />

      <FamilyTeam />

      <ResponsibleEmployment />

      <CtaBand
        title="Start a conversation with the family"
        text="Tell us roughly when you'd travel and what draws you to Ethiopia. You'll hear back from one of us — not a call centre."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image={cloudinaryImage('simien-mountains', 1920)}
      />
    </>
  )
}
