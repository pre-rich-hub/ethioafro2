import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
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
import { getDestinationFaqs, getDestinationFaqUi } from '@/lib/i18n/destination-faq-helpers'
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
    locale,
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
  const tc = await getTranslations({ locale, namespace: 'Crumbs' })
  const t = await getTranslations({ locale, namespace: 'Destinations' })

  const fallback = getRelatedToursForDestination(d, getLocalizedTours(locale), 3)
  const others = getLocalizedDestinations(locale).filter((o) => o.slug !== d.slug).slice(0, 4)
  const faqs = getDestinationFaqs(d.slug, locale)
  const faqUi = getDestinationFaqUi(locale)

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          destinationJsonLd(d, locale),
          breadcrumbJsonLd(
            [
              { name: tc('home'), path: '/' },
              { name: tc('destinations'), path: '/destinations' },
              { name: d.name, path: `/destinations/${d.slug}` },
            ],
            locale,
          ),
          ...(faqs.length ? [faqPageJsonLd(faqs, locale)] : []),
        )}
      />
      <PageHero
        eyebrow={`${d.tag} · ${d.region}`}
        title={d.name}
        lede={d.intro}
        image={d.image}
        imageAlt={t('cardAlt', { name: d.name })}
        crumbs={[
          { label: tc('home'), href: '/' },
          { label: tc('destinations'), href: '/destinations' },
          { label: d.name },
        ]}
      />

      <DestinationOverview d={d} />

      <DestinationJourneys d={d} fallback={fallback} />

      {faqs.length > 0 && (
        <FaqSection
          title={faqUi ? faqUi.title.replace('{name}', d.name) : t('detailFaqTitle', { name: d.name })}
          intro={faqUi?.intro ?? t('detailFaqIntro')}
          items={faqs}
          footerLink={
            d.slug === 'lalibela'
              ? {
                  label: faqUi?.lalibelaLink ?? t('detailFaqLinkLalibela'),
                  href: '/blog/lalibela-at-dawn',
                }
              : {
                  label: faqUi?.defaultLink ?? t('detailFaqLinkDefault'),
                  href: '/blog/when-to-visit-ethiopia',
                }
          }
        />
      )}

      <DestinationEnquiry d={d} others={others} />

      <CtaBand
        title={t('detailCtaTitle')}
        text={t('detailCtaText')}
        secondary={{ label: t('detailCtaSecondary'), href: '/destinations' }}
        image={d.image}
      />
    </>
  )
}
