import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { activities, activityCategories } from '@/features/experiences/data/experience.data'
import { ExperienceIntroduction } from '@/features/experiences/components/ExperienceIntroduction'
import { ExperienceCategory } from '@/features/experiences/components/ExperienceCategory'
import { LongerAdventures } from '@/features/experiences/components/LongerAdventures'
export const metadata: Metadata = {
  title: 'Experiences',
  description:
    'Add-on experiences for any Ethiopia journey — injera and cooking classes, tej and coffee tastings, running at altitude, Rift Valley cycling, farm days, village stays and clean-up days.',
}

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Add a day you'll talk about for years"
        lede="Short experiences that slot into any journey — in kitchens, coffee houses, farms and villages, on running trails and quiet Rift Valley roads."
        image="/images/coffee-ceremony.png"
        imageAlt="Coffee being poured from a traditional jebena during a coffee ceremony"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Experiences' }]}
        compact
      />

      {/* Intro + category jump */}
      <ExperienceIntroduction />

      {/* Categories */}
      {activityCategories.map((c, ci) => {
        const items = activities.filter((a) => a.category === c)
        if (!items.length) return null
        return (
          <ExperienceCategory key={c} c={c} ci={ci} items={items} />
        )
      })}

      {/* Longer adventures */}
      <LongerAdventures />

      <CtaBand
        title="Build your experiences into a journey"
        text="Tell us which experiences caught your eye and roughly when you'd travel. A designer will fit them into a route that makes sense."
        secondary={{ label: 'See Tours', href: '/tours' }}
        image="/images/hero-lalibela.png"
      />
    </>
  )
}
