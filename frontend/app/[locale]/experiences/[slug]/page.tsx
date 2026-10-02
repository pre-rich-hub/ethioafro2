import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ArrowRight, CalendarDays, Clock3, Info, MapPin } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { DestinationCard } from '@/features/destinations'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { activities } from '@/features/experiences/data/experience.data'
import { getActivity, getLocalizedActivities } from '@/features/experiences/utils/experience.utils'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'

import { ExperienceStory } from '@/features/experiences/components/ExperienceStory'
import { ExperiencePlaces } from '@/features/experiences/components/ExperiencePlaces'
import { ExperienceJourneys } from '@/features/experiences/components/ExperienceJourneys'
import { ExperienceEnquiry } from '@/features/experiences/components/ExperienceEnquiry'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  breadcrumbJsonLd,
  experienceJsonLd,
  graphJsonLd,
  organizationJsonLd,
} from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const a = getActivity(slug, locale)
  if (!a) {
    return { title: 'Experience not found', robots: { index: false, follow: false } }
  }
  return buildPageMetadata({
    title: a.title,
    description: a.teaser,
    path: `/experiences/${slug}`,
    image: a.image,
    imageAlt: a.title,
  })
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const locale = await getLocale()
  const a = getActivity(slug, locale)
  if (!a) notFound()

  const localizedActivities = getLocalizedActivities(locale)

  const places = a.destinationSlugs
    .map((s) => getDestination(s, locale))
    .filter((d) => d !== undefined)
  const journeys = a.tourSlugs
    .map((s) => getTour(s, locale))
    .filter((t) => t !== undefined)
  const more = localizedActivities
    .filter((x) => x.slug !== a.slug && x.category === a.category)
    .slice(0, 2)
  const others = more.length
    ? more
    : localizedActivities.filter((x) => x.slug !== a.slug).slice(0, 2)

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          experienceJsonLd(a),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Experiences', path: '/experiences' },
            { name: a.title, path: `/experiences/${a.slug}` },
          ]),
        )}
      />
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
