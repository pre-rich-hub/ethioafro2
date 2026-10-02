import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { activityCategories } from '@/features/experiences/data/experience.data'
import {
  getActivityCategoryLabels,
  getLocalizedActivities,
} from '@/features/experiences/utils/experience.utils'
import { ExperienceIntroduction } from '@/features/experiences/components/ExperienceIntroduction'
import { ExperienceCategory } from '@/features/experiences/components/ExperienceCategory'
import { LongerAdventures } from '@/features/experiences/components/LongerAdventures'
import { cloudinaryImage } from '@/lib/cloudinary'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Experiences',
  description:
    'Add-on experiences for any Ethiopia journey — injera and cooking classes, tej and coffee tastings, running at altitude, Rift Valley cycling, farm days, village stays and clean-up days.',
  path: '/experiences',
  image: cloudinaryImage('coffee-cupping-and-ceremony', 1200),
  imageAlt: 'Ethiopian coffee ceremony',
})

export default async function ExperiencesPage() {
  const t = await getTranslations('Experiences')
  const tc = await getTranslations('Crumbs')
  const ts = await getTranslations('Shared')
  const locale = await getLocale()
  // Group on the English category key; display the localized label.
  const activities = getLocalizedActivities(locale)
  const categoryLabels = getActivityCategoryLabels(locale)
  const baseCategory = new Map(getLocalizedActivities('en').map((a) => [a.slug, a.category]))

  return (
    <>
      <PageHero
        eyebrow={t('heroEyebrow')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/coffee-cupping-and-ceremony.png"
        imageAlt="Coffee being poured from a traditional jebena during a coffee ceremony"
        crumbs={[{ label: tc('home'), href: '/' }, { label: tc('experiences') }]}
        compact
      />

      {/* Intro + category jump */}
      <ExperienceIntroduction />

      {/* Categories */}
      {activityCategories.map((c, ci) => {
        const items = activities.filter((a) => baseCategory.get(a.slug) === c)
        if (!items.length) return null
        return (
          <ExperienceCategory
            key={c}
            c={c}
            label={categoryLabels[c] ?? c}
            ci={ci}
            items={items}
          />
        )
      })}

      {/* Longer adventures */}
      <LongerAdventures />

      <CtaBand
        eyebrow={ts('speakWithDesigner')}
        title={t('ctaTitle')}
        text={t('ctaText')}
        primary={{ label: ts('planYourJourney'), href: '/contact' }}
        secondary={{ label: t('ctaSecondaryCta'), href: '/tours' }}
        image="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/injera-and-ethiopian-cooking.png"
      />
    </>
  )
}
