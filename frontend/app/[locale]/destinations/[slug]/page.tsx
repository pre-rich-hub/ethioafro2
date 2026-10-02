import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { FaqSection } from '@/components/seo/FaqSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { destinations } from '@/features/destinations/data/destination.data'
import { getDestination, getLocalizedDestinations } from '@/features/destinations/utils/destination.utils'
import { getRelatedToursForDestination } from '@/features/destinations/utils/destination-tours.utils'
import { getLocalizedTours } from '@/features/tours/utils/tour-catalog.utils'

import { DestinationOverview } from '@/features/destinations/components/DestinationOverview'
import { DestinationJourneys } from '@/features/destinations/components/DestinationJourneys'
import { DestinationEnquiry } from '@/features/destinations/components/DestinationEnquiry'
import { CtaBand } from '@/features/enquiries'
import { destinationFaqsBySlug } from '@/lib/seo/faq-data'
import { buildPageMetadata } from '@/lib/seo/metadata'
import {
  breadcrumbJsonLd,
  destinationJsonLd,
  faqPageJsonLd,
  graphJsonLd,
  organizationJsonLd,
} from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const d = getDestination(slug, locale)
  if (!d) {
    return { title: 'Destination not found', robots: { index: false, follow: false } }
  }
  return buildPageMetadata({
    title: d.name,
    description: d.intro,
    path: `/destinations/${slug}`,
    image: d.image,
    imageAlt: d.name,
  })
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const locale = await getLocale()
  const d = getDestination(slug, locale)
  if (!d) notFound()

  const fallback = getRelatedToursForDestination(d, getLocalizedTours(locale), 3)
  const others = getLocalizedDestinations(locale).filter((o) => o.slug !== d.slug).slice(0, 4)
  const faqs = destinationFaqsBySlug[d.slug] ?? []

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          destinationJsonLd(d),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Destinations', path: '/destinations' },
            { name: d.name, path: `/destinations/${d.slug}` },
          ]),
          ...(faqs.length ? [faqPageJsonLd(faqs)] : []),
        )}
      />
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

      <DestinationOverview d={d} />

      <DestinationJourneys d={d} fallback={fallback} />

      {faqs.length > 0 && (
        <FaqSection
          title={`Planning ${d.name}`}
          intro="Season, altitude and how long to stay — answered plainly."
          items={faqs}
          footerLink={
            d.slug === 'lalibela'
              ? { label: 'Read: Lalibela at dawn', href: '/blog/lalibela-at-dawn' }
              : { label: 'When to visit Ethiopia', href: '/blog/when-to-visit-ethiopia' }
          }
        />
      )}

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
