import { PageHero } from '@/components/common/PageHero'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { CtaBand } from '@/features/enquiries'
import { TravelJourneys, TravelNavigation, TravelPlaces, TravelStory } from '@/features/how-we-travel'
import { experiences } from '@/features/how-we-travel/data/travel-style.data'
import { getExperience } from '@/features/how-we-travel/utils/travel-style.utils'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const e = getExperience(slug)
  if (!e) return {}
  return {
    title: e.title,
    description: e.intro,
    openGraph: { title: e.title, description: e.intro, images: [e.image] },
  }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const e = getExperience(slug)
  if (!e) notFound()

  const index = experiences.findIndex((x) => x.slug === e.slug)
  const prev = experiences[(index - 1 + experiences.length) % experiences.length]
  const next = experiences[(index + 1) % experiences.length]
  const places = e.destinationSlugs
    .map((s) => getDestination(s))
    .filter((d) => d !== undefined)
  const journeys = e.tourSlugs
    .map((s) => getTour(s))
    .filter((t) => t !== undefined)

  return (
    <>
      <PageHero
        eyebrow={`How We Travel · ${e.number} of ${String(experiences.length).padStart(2, '0')}`}
        title={e.title}
        lede={e.tagline}
        image={e.image}
        imageAlt={e.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'How We Travel', href: '/how-we-travel' },
          { label: e.title },
        ]}
      />

      <TravelStory e={e} />

      <TravelPlaces places={places} />

      <TravelJourneys journeys={journeys} />

      <TravelNavigation prev={prev} next={next} />

      <CtaBand
        title="Build this into your journey"
        text="Tell us roughly when you'd travel and what drew you to this idea. A designer will suggest the route that carries it best."
        secondary={{ label: 'How We Travel', href: '/how-we-travel' }}
        image={e.image}
      />
    </>
  )
}
