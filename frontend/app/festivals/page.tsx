import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CalendarDays, MapPin } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { CtaBand } from '@/features/enquiries'
import { festivals } from '@/features/festivals/data/festival.data'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'

import { FestivalIntroduction } from '@/features/festivals/components/FestivalIntroduction'
import { FestivalCalendar } from '@/features/festivals/components/FestivalCalendar'
export const metadata: Metadata = {
  title: 'Festival Calendar',
  description:
    'Ethiopia\'s great festivals through the year — Genna, Timkat, Fichee-Chambalaalla, Ashendye, Enkutatash, Meskel, Irreecha and the Great Ethiopian Run — with dates, places and journeys.',
}

export default function FestivalsPage() {
  const months = Array.from(new Set(festivals.map((f) => f.month)))

  return (
    <>
      <PageHero
        eyebrow="Festival Calendar"
        title="Time your journey to a feast day"
        lede="Ethiopia keeps its own calendar, and its festivals are some of the most spectacular anywhere — processions, bonfires, all-night vigils and whole cities in white."
        image="/images/festival-timkat.png"
        imageAlt="Priests under embroidered umbrellas during the Timkat procession"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Festivals' }]}
      />

      {/* Intro */}
      <FestivalIntroduction />

      {/* Calendar */}
      <FestivalCalendar months={months} />

      <CtaBand
        title="Want to travel for a festival?"
        text="Tell us which festival and roughly when. Because rooms go early, the sooner we start, the better the places we can hold for you."
        secondary={{ label: 'Festival Tours', href: '/tours?style=Festival' }}
        image="/images/festival-timkat.png"
      />
    </>
  )
}
