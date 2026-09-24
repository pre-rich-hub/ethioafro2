import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mountain } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours'
import { EnquiryForm } from '@/features/enquiries'
import { CtaBand } from '@/features/enquiries'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestination } from '@/features/destinations/utils/destination.utils'
import { tours } from '@/features/tours/data/tour.data'

import { DestinationOverview } from '@/features/destinations/components/DestinationOverview'
import { DestinationJourneys } from '@/features/destinations/components/DestinationJourneys'
import { DestinationEnquiry } from '@/features/destinations/components/DestinationEnquiry'
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

  // Tours naming this destination exactly come first — by its full name or
  // the part before "&" (e.g. "Lake Tana" for "Lake Tana & Blue Nile"). A
  // looser first-word match (e.g. "Simien") fills any remaining slots.
  const names = [d.name, d.name.split(' & ')[0]]
  const exact = tours.filter((t) => t.places.some((p) => names.includes(p)))
  const loose = tours.filter(
    (t) => !exact.includes(t) && t.places.some((p) => p.includes(d.name.split(' ')[0])),
  )
  const related = [...exact, ...loose].slice(0, 3)
  const fallback = related.length ? related : tours.slice(0, 3)
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
