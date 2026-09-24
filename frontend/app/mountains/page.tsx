import type { Metadata } from 'next'
import { PageHero } from '@/components/common/PageHero'
import { CtaBand } from '@/features/enquiries'
import { tours } from '@/features/tours/data/tour.data'
import { ClimbingIntroduction } from '@/features/mountains/components/ClimbingIntroduction'
import { PeakDirectory } from '@/features/mountains/components/PeakDirectory'
import { ClimbingStyles } from '@/features/mountains/components/ClimbingStyles'
import { ClimbingSafety } from '@/features/mountains/components/ClimbingSafety'
import { ClimbingJourneys } from '@/features/mountains/components/ClimbingJourneys'
export const metadata: Metadata = {
  title: 'Mountain Climbing in Ethiopia',
  description:
    'A guide to Ethiopia\'s high peaks — Ras Dashen, Bwahit, Tullu Dimtu, Batu, Abune Yosef, Guna and more — with heights, difficulty, seasons and guided ascents.',
}

export default function MountainsPage() {
  const climbs = tours.filter((t) =>
    t.style.split('·').map((s) => s.trim()).includes('Climbing'),
  )

  return (
    <>
      <PageHero
        eyebrow="Mountain Climbing"
        title="Ethiopia's high peaks"
        lede="Summits above 4,000 metres on the Ethiopian Highlands, the largest continuous area of high ground in Africa — peaks you can walk to, guided by people who know them intimately."
        image="/images/hero-simien.png"
        imageAlt="The Simien Mountains escarpment above the clouds"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Mountains' }]}
      />

      {/* Intro */}
      <ClimbingIntroduction />

      {/* Peak table */}
      <PeakDirectory />

      {/* Ways to climb */}
      <ClimbingStyles />

      {/* Safety */}
      <ClimbingSafety />

      {/* Climbing tours */}
      <ClimbingJourneys climbs={climbs} />

      <CtaBand
        title="Not sure which summit suits you?"
        text="Tell us your walking experience, how you handle altitude, and how many days you have. A designer will suggest the climb — and the acclimatisation — that fits."
        secondary={{ label: 'All Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
