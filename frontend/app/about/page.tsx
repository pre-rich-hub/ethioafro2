import { PageHero } from '@/components/common/PageHero'
import { CompanyTimeline, FamilyTeam, FounderLetter, InternationalPerspective, ResponsibleEmployment } from '@/features/about'
import { CtaBand } from '@/features/enquiries'
import { cloudinaryImage } from '@/lib/cloudinary'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata = buildPageMetadata({
  title: 'Our Story',
  description:
    'Simien Ethiopia Tours is a licensed, family-run Ethiopian tour company founded by Mihiret Getenat — born in Bahir Dar, trained in Addis Ababa, and guiding travellers since school days.',
  path: '/about',
  image: cloudinaryImage('lake-tana', 1200),
  imageAlt: 'Lake Tana near Bahir Dar, Ethiopia',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A family business, born in Bahir Dar"
        lede="Shaped by years on the ground, a love of hospitality, and a lifelong devotion to showing Ethiopia properly."
        image={cloudinaryImage('lake-tana', 1920)}
        imageAlt="A fisherman in a papyrus tankwa on Lake Tana at dawn, near Bahir Dar"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <FounderLetter />

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
