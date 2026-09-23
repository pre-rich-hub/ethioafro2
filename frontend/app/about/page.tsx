import type { Metadata } from 'next'
import Image from 'next/image'
import {
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Route,
  ShieldCheck,
  Sofa,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { contact } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Simien Ethiopia Tours is a licensed, family-run Ethiopian tour company founded by Mihiret Getenat — born in Bahir Dar, trained in Addis Ababa, and guiding travellers since school days.',
}

const milestones = [
  {
    place: 'Bahir Dar',
    title: 'A childhood on the shore of Lake Tana',
    text: 'Born and raised in the city where the Blue Nile begins, surrounded by island monasteries and the steady traffic of travellers passing through on their way north.',
  },
  {
    place: 'Bahir Dar & the Simien',
    title: 'First travellers, still in school',
    text: 'Weekends and holidays spent working alongside visitors — on the lake, then up on the Simien escarpment. What began alongside school became a calling.',
  },
  {
    place: 'Addis Ababa',
    title: 'Formal training in tourism',
    text: 'A move to the capital after high school to study Tourism and Tour Operations at the Tourism Training Institute (TTI, formerly CTTI).',
  },
  {
    place: 'Across Ethiopia',
    title: 'Years inside the industry',
    text: 'Guiding, planning tours, looking after guests and managing destinations for several established operators — learning every side of the work.',
  },
  {
    place: 'Simien Ethiopia Tours',
    title: 'A company of our own',
    text: 'A licensed Ethiopian tour company built around private, tailor-made journeys — named for the mountains where it all started.',
  },
  {
    place: 'Today',
    title: 'Run as a family',
    text: 'Operated by three brothers, the wider family and a trusted team of guides and drivers, with the founder still involved in every season from abroad.',
  },
]

const values = [
  {
    Icon: ShieldCheck,
    title: 'Safety',
    text: 'Vetted vehicles, experienced drivers, and routes checked against current conditions before every departure.',
  },
  {
    Icon: Sofa,
    title: 'Comfort',
    text: 'Lodges we have stayed in ourselves, and days paced so you arrive rested rather than wrung out.',
  },
  {
    Icon: Route,
    title: 'Careful planning',
    text: 'Itineraries drawn around light, festivals, altitude and distance — not around what is easiest to sell.',
  },
  {
    Icon: MessageCircle,
    title: 'Honest communication',
    text: 'Straight answers about road time, difficulty and cost, before you book and all the way through.',
  },
  {
    Icon: HeartHandshake,
    title: 'Genuine hospitality',
    text: 'The Ethiopian kind — a welcome that begins at the airport and does not switch off when the tour does.',
  },
]

const travelled = [
  'Trade fairs across Europe',
  'China',
  'Thailand',
  'Dubai',
  'Kenya',
  'Tanzania',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A family business, born in Bahir Dar"
        lede="Shaped by years on the ground, a love of hospitality, and a lifelong devotion to showing Ethiopia properly."
        image="/images/lake-tana.png"
        imageAlt="A fisherman in a papyrus tankwa on Lake Tana at dawn, near Bahir Dar"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Founder's letter */}
      <section className="shell grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:py-28">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-6 text-accent">
            <span className="rule" />
            From the Founder
          </p>
          <blockquote className="font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.5rem]">
            <span aria-hidden className="mb-2 block text-7xl leading-none text-accent">
              &ldquo;
            </span>
            Travel is both my profession and my passion.
          </blockquote>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <span
              aria-hidden
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-xl text-accent"
            >
              MG
            </span>
            <div>
              <p className="font-serif text-2xl leading-tight text-foreground">
                Mihiret Getenat
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                Founder · Simien Ethiopia Tours
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p className="font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
            I was born and raised in Bahir Dar, and my life in tourism began
            there while I was still at school.
          </p>
          <p>
            Between classes I worked with visitors in Bahir Dar and up in the
            Simien Mountains. What started as work alongside my studies became
            the thing I wanted to do with my life: sharing the cultures,
            the history, the landscapes and the hospitality of the country I
            love with people seeing it for the first time.
          </p>
          <p>
            After high school I moved to Addis Ababa to study Tourism and Tour
            Operations at the Tourism Training Institute, then spent years
            working for other tour companies — guiding, planning itineraries,
            looking after guests and managing destinations. Those years taught
            me every side of the work.
          </p>
          <p>
            Simien Ethiopia Tours grew out of that. It is a licensed Ethiopian
            company built for private, tailor-made journeys, and it is run
            today by my three brothers, our wider family, our team — and me.
          </p>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden">
            <Image
              src="/images/hero-simien.png"
              alt="The Simien Mountains escarpment at first light"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <p className="absolute bottom-0 left-0 bg-background/95 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-[11px]">
              The Simien — where it all started
            </p>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div className="shell py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-12 max-w-2xl sm:mb-16">
            <p className="eyebrow mb-5 text-accent">
              <span className="rule" />
              The Journey So Far
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-background sm:text-4xl lg:text-5xl">
              From a lakeside town to travellers around the world
            </h2>
          </Reveal>

          <ol className="grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal
                key={m.title}
                as="li"
                delay={(i % 3) * 90}
                className="group relative bg-secondary p-7 transition-colors duration-500 hover:bg-charcoal sm:p-9"
              >
                <span className="font-serif text-5xl leading-none text-accent/80 transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50 sm:text-[11px]">
                  {m.place}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-background">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/65 sm:text-[15px]">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* International perspective */}
      <section className="shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5 text-accent">
              <span className="rule" />
              An International Perspective
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
              We know what travellers look for, because we travel too
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              Representing the company at tourism fairs and business events,
              and travelling widely beyond Ethiopia, taught us to see a trip
              from the guest&apos;s side of the table. Five things come up
              every time.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {travelled.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]"
                >
                  <MapPinned className="h-3 w-3 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={(i % 2) * 90}
                className={`bg-background p-7 sm:p-8 ${i === values.length - 1 ? 'sm:col-span-2' : ''}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Two continents */}
      <section className="border-y border-border bg-muted/40">
        <div className="shell py-16 sm:py-20 lg:py-28">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[11px]">
              <span className="h-px w-10 bg-accent" />
              A Family-Led Company
              <span className="h-px w-10 bg-accent" />
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              Two continents, one family
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="relative flex flex-col border border-border bg-card p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                In Los Angeles
              </p>
              <h3 className="mt-3 font-serif text-3xl text-foreground">
                Close to you
              </h3>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Our founder now lives in the Los Angeles area with family and
                stays hands-on with every season — which means a conversation
                in your time zone, with someone who has walked the routes
                themselves.
              </p>
              <a
                href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                className="mt-8 font-serif text-2xl text-foreground transition-colors hover:text-accent"
              >
                {contact.phone}
              </a>
            </Reveal>

            <Reveal delay={120} className="relative flex flex-col bg-secondary p-8 text-secondary-foreground sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                In Ethiopia
              </p>
              <h3 className="mt-3 font-serif text-3xl text-background">
                On the ground
              </h3>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-background/70">
                Three brothers, the wider family and a trusted team of guides
                and drivers run every departure from Addis Ababa — the people
                who meet you at the airport are the people who planned the
                trip.
              </p>
              <p className="mt-8 text-sm leading-relaxed text-background/60">
                {contact.address}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Responsible employment */}
      <section className="shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src="/images/textile.png"
            alt="An Ethiopian weaver at a traditional loom"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            More Than a Business
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Opening the industry to the people who live here
          </h2>
          <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Tourism gave our family a future, and we want it to do the same
              for others. We hire locally wherever we travel, and we make a
              particular point of training and employing women who want to
              become tour operators and guides.
            </p>
            <p>
              It is a family story built on experience, opportunity and
              responsible tourism. Every journey you take with us is a small
              part of it.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Start a conversation with the family"
        text="Tell us roughly when you'd travel and what draws you to Ethiopia. You'll hear back from one of us — not a call centre."
        secondary={{ label: 'Browse Tours', href: '/tours' }}
        image="/images/hero-simien.png"
      />
    </>
  )
}
