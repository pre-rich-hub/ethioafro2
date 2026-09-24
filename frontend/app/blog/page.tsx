import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { BlogArchive } from '@/features/blog/components/BlogArchive'
import { JournalNewsletter } from '@/features/blog/components/JournalNewsletter'
export const metadata: Metadata = {
  title: 'The Journal',
  description:
    'Planning guidance, destination essays and dispatches from the designers and guides who run our Ethiopian journeys.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from the people who run these trips"
        lede="Practical writing from our own designers and guides — timing, packing, etiquette, and the reasoning behind how we operate."
        image="/images/coffee-ceremony.png"
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
        image="/images/hero-simien.png"
      />
    </>
  )
}
