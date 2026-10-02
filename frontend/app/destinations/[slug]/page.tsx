import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/common/PageHero'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { getRelatedToursForDestination } from '@/features/destinations/utils/destination-tours.utils'
import { tours } from '@/features/tours/data/tour.data'

import { DestinationOverview } from '@/features/destinations/components/DestinationOverview'
import { DestinationJourneys } from '@/features/destinations/components/DestinationJourneys'
import { DestinationEnquiry } from '@/features/destinations/components/DestinationEnquiry'
import { CtaBand } from '@/features/enquiries'
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const d = getDestination(slug)
  if (!d) return { title: 'Destination not found' }
  return {
    title: d.name,
    description: d.intro,
    openGraph: { title: d.name, description: d.intro, images: [d.image] },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const d = getDestination(slug)
  if (!d) notFound()

  const fallback = getRelatedToursForDestination(d, tours, 3)
  const others = destinations.filter((o) => o.slug !== d.slug).slice(0, 4)

  return (
    <>
      <PageHero
        eyebrow={`${d.tag} · ${d.region}`}
        title={d.name}
        lede={d.intro}
        image={d.image}
        imageAlt={`${d.name}, Ethiopia`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: d.name },
        ]}
      />

      {/* Essay + highlights */}
      <DestinationOverview d={d} />

      {/* Related tours */}
      <DestinationJourneys d={d} fallback={fallback} />

      {/* Enquiry */}
      <DestinationEnquiry d={d} others={others} />

      <CtaBand
        title="Speak to someone who has been there this season"
        text="Our designers travel these routes themselves. Ask about road conditions, festival dates or which lodge has the better view — you will get a straight answer."
        secondary={{ label: 'All Destinations', href: '/destinations' }}
        image={d.image}
      />
    </>
  )
}
