import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Compass,
  MapPin,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { TourCard } from '@/features/tours/components/TourCard'
import { EnquiryForm } from '@/features/enquiries'
import { CtaBand } from '@/features/enquiries'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import { isTailorMade } from '@/features/tours/utils/tour.utils'
import { tours } from '@/features/tours/data/tour.data'
import { getTourData } from '@/features/tours/api/tour-data.api'
import { railPad } from '@/features/tours/constants/tour-layout'
import { TourOverview } from '@/features/tours/components/TourOverview'
import { TourItinerary } from '@/features/tours/components/TourItinerary'
import { TourInclusions } from '@/features/tours/components/TourInclusions'
import { TourEnquiry } from '@/features/tours/components/TourEnquiry'
import { RelatedTours } from '@/features/tours/components/RelatedTours'
import { TourPriceCard } from '@/features/tours/components/TourPriceCard'
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const t = getTour(slug)
  if (!t) return { title: 'Journey not found' }
  return {
    title: t.title,
    description: t.summary,
    openGraph: { title: t.title, description: t.summary, images: [t.image] },
  }
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const t = await getTourData(slug)
  if (!t) notFound()

  const others = tours.filter((o) => o.slug !== t.slug).slice(0, 3)
  const nightsLabel = `${t.nights} ${t.nights === 1 ? 'night' : 'nights'}`

  const priceCard = (
    <TourPriceCard t={t} nightsLabel={nightsLabel} />
  )

  return (
    <>
      <PageHero
        eyebrow={t.style}
        title={t.title}
        lede={t.teaser}
        image={t.image}
        imageAlt={t.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tours', href: '/tours' },
          { label: t.title },
        ]}
      />

      {/* Overview, itinerary and inclusions share one rail so the price
          card can stay pinned beside all three on desktop. */}
      <div className="relative">
        {/* Overview + places */}
        <TourOverview t={t} nightsLabel={nightsLabel} priceCard={priceCard} />

        {/* Itinerary */}
        <TourItinerary t={t} />

        {/* Includes / excludes */}
        <TourInclusions t={t} />

        {/* Price rail: spans the three sections above, card sticks inside it */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="shell flex h-full justify-end py-28">
            <div className="w-[380px] xl:w-[440px]">
              <div className="pointer-events-auto sticky top-24">{priceCard}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquire */}
      <TourEnquiry t={t} />

      {/* Other journeys */}
      <RelatedTours others={others} />

      <CtaBand
        title="Questions before you enquire?"
        text="Altitude, road time, how hard the walking really is, whether the children will cope. Ask us anything — a designer will answer honestly."
        image={t.image}
      />
    </>
  )
}
