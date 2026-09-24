import {
  Gauge,
  HeartPulse,
  Mountain,
  ShieldCheck,
  Sofa,
  Users,
  CalendarDays,
  Undo2,
} from 'lucide-react'
import { type Peak } from '@/features/mountains/types/mountain.types'

export const difficultyStyle: Record<Peak['difficulty'], string> = {
  Easy: 'border-border text-muted-foreground',
  Moderate: 'border-accent/50 text-foreground',
  Challenging: 'border-accent bg-accent/15 text-foreground',
  Strenuous: 'border-primary bg-primary text-primary-foreground',
}

export const ways = [
  {
    Icon: Users,
    title: 'Small-group departures',
    text: 'Join other climbers on set dates for Ras Dashen and Abune Yosef — shared crews, lower cost, same senior guides.',
    href: '/tours/ras-dashen-summit-climb',
    link: 'Ras Dashen Summit Climb',
  },
  {
    Icon: Mountain,
    title: 'Private climbs',
    text: 'Every ascent can run privately on your dates, at your pace, with your own guide, scout, cook and mule team.',
    href: '/tours/bale-summits-batu-and-tullu-dimtu',
    link: 'Bale Summits: Batu & Tullu Dimtu',
  },
  {
    Icon: Sofa,
    title: 'Climbing in comfort',
    text: 'Lodge-supported summits with a vehicle to every trailhead and a hot shower each night — the altitude without the tents.',
    href: '/tours/simien-summits-in-comfort',
    link: 'Simien Summits in Comfort',
  },
]

export const safety = [
  {
    Icon: Gauge,
    title: 'Acclimatisation first',
    text: 'Every climb gains height gradually and builds in rest. Warm-up summits near Addis — Wechecha and Zuqualla — are a good start.',
  },
  {
    Icon: HeartPulse,
    title: 'Checked every morning',
    text: 'Guides carry a pulse oximeter and first-aid kit, and check oxygen saturation daily above 3,500 metres.',
  },
  {
    Icon: Undo2,
    title: 'We turn around',
    text: 'If the altitude, weather or your body says stop, we stop. No summit is worth a serious illness, and the decision is never negotiable on the day.',
  },
  {
    Icon: ShieldCheck,
    title: 'Insured properly',
    text: 'Travel insurance with medical evacuation cover is required on every climb, and we may ask to see it before departure.',
  },
  {
    Icon: CalendarDays,
    title: 'The right season',
    text: 'October to February is the climbing season. The long rains, roughly June to September, make the high trails slippery and cloud-bound.',
  },
]
