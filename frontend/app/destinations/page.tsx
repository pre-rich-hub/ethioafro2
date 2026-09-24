import { DestinationGrid, DestinationHero } from '@/features/destinations'
import type { Metadata } from 'next'
import { CtaBand } from '@/features/enquiries'

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Rock-hewn churches, Afro-alpine plateaus, sulphur springs below sea level and the most culturally dense valley on earth — the eight regions of Ethiopia we know best.',
}

export default function DestinationsPage() {
  return (
    <>
      <DestinationHero />

      <DestinationGrid />

      <CtaBand
        title="Can't decide where to start?"
        text="A sentence is enough — the altitude you're comfortable with, the pace, roughly when you'd travel. A designer will reply with two or three routes worth considering."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
