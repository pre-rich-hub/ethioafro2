import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { PostsGrid } from '@/components/posts-grid'
import { SectionHeading } from '@/components/section-heading'
import { NewsletterForm } from '@/components/newsletter-form'
import { CtaBand } from '@/components/cta-band'
import { posts } from '@/lib/site'

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
      <section>
        <div className="shell py-16 sm:py-20 lg:py-28">
          <SectionHeading
            eyebrow="Archive"
            title="Everything we've written"
            aside="Six pieces so far, each one written to actually answer something."
          />
          <PostsGrid posts={posts} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              <span className="rule" />
              The Letter
            </p>
            <h2 className="max-w-[22ch] text-balance text-3xl leading-[1.1] text-background sm:text-4xl">
              Four letters a year, nothing in between
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-background/70">
              Upcoming festival dates, lodges we've genuinely stayed at, and
              occasionally a direct answer on where to skip this season.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a question these didn't answer?"
        text="Nearly every post here began as a real question from a guest. Send us yours and it might be the next one we write."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
