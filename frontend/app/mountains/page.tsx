import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Gauge,
  HeartPulse,
  Mountain,
  ShieldCheck,
  Sofa,
  Users,
  CalendarDays,
  Undo2,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { TourCard } from '@/components/tour-card'
import { CtaBand } from '@/components/cta-band'
import { getTour, peaks, tours, type Peak } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mountain Climbing in Ethiopia',
  description:
    'A guide to Ethiopia\'s high peaks — Ras Dashen, Bwahit, Tullu Dimtu, Batu, Abune Yosef, Guna and more — with heights, difficulty, seasons and guided ascents.',
}

const difficultyStyle: Record<Peak['difficulty'], string> = {
  Easy: 'border-border text-muted-foreground',
  Moderate: 'border-accent/50 text-foreground',
  Challenging: 'border-accent bg-accent/15 text-foreground',
  Strenuous: 'border-primary bg-primary text-primary-foreground',
}

const ways = [
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

const safety = [
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
      <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Why Climb Here
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Big summits, no ropes, and almost no crowds
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Ethiopia&apos;s highest mountains are walking peaks. None needs
              ropes or technical skill — what makes them serious is altitude,
              distance and weather. With good acclimatisation, a fit walker can
              stand on Ras Dashen at 4,550 metres, the highest point in the
              country.
            </p>
            <p>
              And you will rarely share the top. The approaches cross farmland,
              river valleys and Afro-alpine moorland where gelada monkeys,
              walia ibex and Ethiopian wolves live — mountains with a
              landscape, and a culture, all the way up.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 border-t border-border">
            {[
              { k: 'Highest summit', v: '4,550 m' },
              { k: 'Summits over 4,000 m', v: `${peaks.filter((p) => p.height >= 4000).length} in this guide` },
              { k: 'Main ranges', v: 'Simien & Bale' },
              { k: 'Climbing season', v: 'Oct – Feb' },
            ].map(({ k, v }, i) => (
              <div
                key={k}
                className={`border-b border-border py-6 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-5'}`}
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                  {k}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Peak table */}
      <section className="border-y border-border bg-muted/40">
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              The Summits
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
              From half-day warm-ups to Ethiopia&apos;s highest point
            </h2>
          </Reveal>

          {/* Header row, desktop only */}
          <div className="hidden grid-cols-[1.4fr_0.7fr_0.8fr_1fr_0.8fr_auto] gap-6 border-b border-foreground/20 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:grid">
            <span>Peak</span>
            <span>Height</span>
            <span>Difficulty</span>
            <span>Time needed</span>
            <span>Season</span>
            <span className="w-24" />
          </div>

          <ol>
            {peaks.map((p, i) => {
              const tour = p.tourSlug ? getTour(p.tourSlug) : undefined
              return (
                <Reveal
                  key={p.name}
                  as="li"
                  delay={Math.min(i, 4) * 50}
                  className="border-b border-border"
                >
                  <div className="grid gap-4 py-6 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr_0.8fr_auto] lg:items-center lg:gap-6">
                    <div>
                      <p className="font-serif text-2xl leading-tight text-foreground">{p.name}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-[11px]">
                        {p.range}
                      </p>
                      <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                        {p.note}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:contents">
                      <p className="font-serif text-2xl text-foreground lg:text-3xl">
                        {p.heightLabel ?? `${p.height.toLocaleString('en-US')} m`}
                      </p>
                      <p>
                        <span
                          className={`inline-block rounded-sm border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${difficultyStyle[p.difficulty]}`}
                        >
                          {p.difficulty}
                        </span>
                      </p>
                      <p className="text-sm text-foreground">{p.days}</p>
                      <p className="text-sm text-foreground">{p.season}</p>
                    </div>
                    <div className="lg:w-24 lg:text-right">
                      {tour && (
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="group inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
                        >
                          Climb it
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ol>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Heights follow commonly cited figures; published sources differ by
            a few metres for some peaks, and by more for Choke, whose summits
            exceed 4,000 metres.
          </p>
        </div>
      </section>

      {/* Ways to climb */}
      <section className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-4 text-accent">
            <span className="rule" />
            How We Run Climbs
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Three ways to reach the top
          </h2>
        </Reveal>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {ways.map(({ Icon, title, text, href, link }, i) => (
            <Reveal key={title} delay={i * 90} className="flex flex-col bg-background p-7 sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {text}
              </p>
              <Link
                href={href}
                className="group mt-6 inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
              >
                {link}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              Before You Climb
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-background sm:text-4xl">
              Altitude is the real challenge — here is how we handle it
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {safety.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70} className="border-t border-background/20 pt-6">
                <Icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                <p className="mb-2 font-serif text-xl text-background">{title}</p>
                <p className="text-pretty text-sm leading-relaxed text-background/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Climbing tours */}
      <section className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-4 text-accent">
            <span className="rule" />
            Guided Ascents
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Climbing journeys
          </h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {climbs.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 90}>
              <TourCard tour={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which summit suits you?"
        text="Tell us your walking experience, how you handle altitude, and how many days you have. A designer will suggest the climb — and the acclimatisation — that fits."
        secondary={{ label: 'All Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
