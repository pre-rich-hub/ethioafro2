import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { BlogArchive } from '@/features/blog/components/BlogArchive'
import { JournalNewsletter } from '@/features/blog/components/JournalNewsletter'
import { cloudinaryImage } from '@/lib/cloudinary'
import { buildPageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const tn = await getTranslations({ locale, namespace: 'Nav' })
  // The journal index shell is not translated yet; description stays English.
  return buildPageMetadata({
    title: tn('journal'),
    description:
      'Planning guidance, destination essays and dispatches from the designers and guides who run our Ethiopian journeys.',
    path: '/blog',
    locale,
    image: cloudinaryImage('coffee-cupping-and-ceremony', 1200),
    imageAlt: 'Ethiopian coffee ceremony',
  })
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from the people who run these trips"
        lede="Practical writing from our own designers and guides — timing, packing, etiquette, and the reasoning behind how we operate."
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/coffee-cupping-and-ceremony.png"
        imageAlt="Green coffee beans roasting over coals during an Ethiopian coffee ceremony"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Journal' }]}
        compact
      />

      {/* All posts */}
      <BlogArchive />

      {/* Newsletter */}
      <JournalNewsletter />

      <CtaBand
        title="Have a question these didn't answer?"
        text="Nearly every post here began as a real question from a guest. Send us yours and it might be the next one we write."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/the-historic-route.png"
      />
    </>
  )
}
