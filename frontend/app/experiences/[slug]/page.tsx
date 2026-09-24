import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CalendarDays, Clock3, Info, MapPin } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { activities } from '@/features/experiences/data/experience.data'
import { getActivity } from '@/features/experiences/utils/experience.utils'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'

import { ExperienceStory } from '@/features/experiences/components/ExperienceStory'
import { ExperiencePlaces } from '@/features/experiences/components/ExperiencePlaces'
import { ExperienceJourneys } from '@/features/experiences/components/ExperienceJourneys'
import { ExperienceEnquiry } from '@/features/experiences/components/ExperienceEnquiry'
export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const a = getActivity(slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.teaser,
    openGraph: { title: a.title, description: a.teaser, images: [a.image] },
  }
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const a = getActivity(slug)
  if (!a) notFound()

  const places = a.destinationSlugs
    .map((s) => getDestination(s))
    .filter((d) => d !== undefined)
  const journeys = a.tourSlugs
    .map((s) => getTour(s))
    .filter((t) => t !== undefined)
  const more = activities.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 2)
  const others = more.length
    ? more
    : activities.filter((x) => x.slug !== a.slug).slice(0, 2)

  return (
    <>
      <PageHero
        eyebrow={`Experiences · ${a.category}`}
        title={a.title}
        lede={a.teaser}
        image={a.image}
        imageAlt={a.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Experiences', href: '/experiences' },
          { label: a.title },
        ]}
        compact
      />

      {/* Story + details */}
      <ExperienceStory a={a} />

      {/* Where */}
      {places.length > 0 && (
        <ExperiencePlaces places={places} />
      )}

      {/* Journeys */}
      {journeys.length > 0 && (
        <ExperienceJourneys journeys={journeys} />
      )}

      {/* Enquiry */}
      <ExperienceEnquiry a={a} others={others} />
    </>
  )
}
