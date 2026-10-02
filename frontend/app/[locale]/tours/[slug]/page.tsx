import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
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
import { getLocalizedTours, getTour } from '@/features/tours/utils/tour-catalog.utils'
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
import { TourRelatedExperiences } from '@/features/tours/components/TourRelatedExperiences'
import { getRelatedExperiencesForTour } from '@/features/tours/utils/tour-experiences.utils'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  breadcrumbJsonLd,
  graphJsonLd,
  organizationJsonLd,
  tourJsonLd,
} from '@/lib/seo/json-ld'
export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const t = getTour(slug, locale)
  if (!t) {
    return { title: 'Journey not found', robots: { index: false, follow: false } }
  }
  return buildPageMetadata({
    title: t.title,
    description: t.summary,
    path: `/tours/${slug}`,
    locale,
    image: t.image,
    imageAlt: t.title,
  })
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const locale = await getLocale()
  const t = await getTourData(slug, locale)
  const tc = await getTranslations({ locale, namespace: 'Crumbs' })
  const tt = await getTranslations({ locale, namespace: 'Tours' })
  if (!t) notFound()

  const others = getLocalizedTours(locale)
    .filter((o) => o.slug !== t.slug)
    .slice(0, 3)
  const nightsLabel = tt('nights', { count: t.nights })
  const relatedExperiences = getRelatedExperiencesForTour(t.slug, 3, locale)

  const priceCard = (
    <TourPriceCard t={t} nightsLabel={nightsLabel} />
  )

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          tourJsonLd(t, locale),
          breadcrumbJsonLd(
            [
              { name: tc('home'), path: '/' },
              { name: tc('tours'), path: '/tours' },
              { name: t.title, path: `/tours/${t.slug}` },
            ],
            locale,
          ),
        )}
      />
      <PageHero
        eyebrow={t.style}
        title={t.title}
        lede={t.teaser}
        image={t.image}
        imageAlt={t.title}
        crumbs={[
          { label: tc('home'), href: '/' },
          { label: tc('tours'), href: '/tours' },
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

      <TourRelatedExperiences experiences={relatedExperiences} />

      {/* Other journeys */}
      <RelatedTours others={others} />

      <CtaBand
        title={tt('detailCtaTitle')}
        text={tt('detailCtaText')}
        image={t.image}
      />
    </>
  )
}
