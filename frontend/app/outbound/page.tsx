import type { Metadata } from 'next'
import { Check, Plane, ShieldCheck, Clock3, BadgeCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { WhereToNext } from '@/components/where-to-next'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EnquiryForm } from '@/components/enquiry-form'
import { CtaBand } from '@/components/cta-band'
import { getLayoverPackagesData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Outbound Tours from Ethiopia',
  description:
    'Regional add-on trips to Kenya, Tanzania, Zanzibar and Rwanda, flown direct from our Addis Ababa hub — extend an Ethiopia journey rather than planning a second trip.',
}

const assurances = [
  {
    icon: Plane,
    title: 'One booking, one point of contact',
    text: 'Your Ethiopia designer plans the add-on too — flights, permits and lodges arranged as a single itinerary, not handed off to a second company.',
  },
  {
    icon: BadgeCheck,
    title: 'Visas confirmed before you fly',
    text: 'Entry requirements differ by country and passport. We tell you exactly what is needed, and what can be arranged on arrival, well before departure.',
  },
  {
    icon: Clock3,
    title: 'Built around real connection times',
    text: 'Regional flights out of Addis run on their own schedule. We route around the actual timetable, not an assumption of how long transfers take.',
  },
  {
    icon: ShieldCheck,
    title: 'The permits are secured in advance',
    text: 'Gorilla trekking and conservancy access are capacity-limited. We hold these before confirming dates, not after.',
  },
]

export default async function OutboundPage() {
  const packages = await getLayoverPackagesData()

  return (
    <>
      <PageHero
        eyebrow="Outbound Tours"
        title="Ethiopia is the start, not the whole trip"
        lede="Addis is a hub before it is a destination — Ethiopian Airlines connects it to most of East and Southern Africa directly. If you are already flying through, a second country is closer than it looks."
        image="/images/addis-skyline.png"
        imageAlt="The Addis Ababa skyline at dusk seen from the Entoto hills"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Outbound Tours' }]}
      />

      <WhereToNext />

      {/* Routes — presented as a timeline of durations */}
      <section className="shell py-16 sm:py-20 lg:py-28">
        <SectionHeading
          eyebrow="Four Ways Onward"
          title="Regional add-ons, flown direct from Addis"
          aside="Tell us your Ethiopia dates and we'll tell you plainly which of these fits the calendar without a long layover of its own."
        />

        <div className="relative">
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border lg:left-auto lg:right-auto lg:top-6 lg:block lg:h-px lg:w-full" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="relative flex gap-5 lg:block lg:gap-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent bg-background font-serif text-base text-accent lg:h-16 lg:w-16 lg:text-lg">
                  {p.hours.split(' ')[0]}
                </div>

                <div className="lg:mt-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.hours}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-serif text-lg text-primary">{p.price}</p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.teaser}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.includes.slice(0, 3).map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check className="mt-1 h-3 w-3 shrink-0 text-accent" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-border pt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Best for:{' '}
                    <span className="text-foreground">{p.best}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="border-y border-border bg-secondary text-secondary-foreground">
        <div className="shell py-16 sm:py-20 lg:py-28">
          <SectionHeading
            eyebrow="How the Handoff Works"
            title="A second country, without a second travel agent"
            lede="Combining countries usually means combining agencies. We keep it to one itinerary and one person you can reach."
            tone="dark"
          />
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 90}
                className="border-t border-background/20 pt-6"
              >
                <a.icon className="mb-4 h-5 w-5 text-accent-light" aria-hidden />
                <p className="mb-3 font-serif text-xl text-background sm:text-2xl">
                  {a.title}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-background/70">
                  {a.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Add a Country
          </p>
          <h2 className="max-w-[18ch] text-balance text-3xl leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
            Tell us your Ethiopia dates first
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            From there we build the add-on around them — flights, permits and
            lodges as one itinerary, quoted as one number.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              'One designer for both countries, start to finish',
              'Permits and conservancy fees confirmed before you commit',
              'A private vehicle and guide on the ground in each country',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 leading-relaxed text-foreground"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <EnquiryForm subject="Outbound tour add-on" defaultStyles={['Outbound']} />
        </Reveal>
      </section>

      <CtaBand
        title="Not sure which country fits your dates?"
        text="Send us your Ethiopia itinerary and how many extra days you have. We'll tell you honestly whether a second country makes sense this trip, or is better saved for the next one."
        primary={{ label: 'Ask a Designer', href: '/contact' }}
        secondary={{ label: 'See Ethiopia Tours', href: '/tours' }}
        image="/images/luxury-lodge.png"
      />
    </>
  )
}

// ISR: admin edits surface within an hour (deliberate deviation from the
// statically frozen tours pages — the catalog is now API-backed).
export const revalidate = 3600
