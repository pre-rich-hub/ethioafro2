import { getLocale, getTranslations } from 'next-intl/server'
import { Hero } from '@/features/home/components/Hero'
import { BrandIntro } from '@/features/home/components/BrandIntro'
import { WhyEthiopia } from '@/features/home/components/WhyEthiopia'
import { Destinations } from '@/features/destinations'
import { Journeys } from '@/features/tours'
import { Experiences } from '@/features/experiences'
import { WaysToTravel } from '@/features/tours'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhereToNext } from '@/features/home/components/WhereToNext'
import { Testimonial } from '@/features/home/components/Testimonial'
import { Gallery } from '@/features/home/components/Gallery'
import { PlanJourney } from '@/features/enquiries'
import { getToursData } from '@/features/tours/api/tour-data.api'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  graphJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/seo/json-ld'

export default async function Page() {
  const locale = await getLocale()
  const tours = await getToursData(locale)
  const t = await getTranslations('Home')

  return (
    <>
      <JsonLd data={graphJsonLd(organizationJsonLd(), websiteJsonLd())} />
      <Hero />
      <BrandIntro />
      <WhyEthiopia />
      <Destinations />
      <Journeys tours={tours} />
      <section className="shell pb-20 sm:pb-24 lg:pb-32">
        <SectionHeading
          eyebrow={t('waysEyebrow')}
          title={t('waysTitle')}
          aside={t('waysAside')}
        />
        <WaysToTravel tours={tours} />
      </section>
      <Experiences />
      <WhereToNext />
      <Testimonial />
      <Gallery />
      <PlanJourney />
    </>
  )
}
