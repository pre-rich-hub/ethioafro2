import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const moments = [
  {
    number: '01',
    title: 'Follow the bean home',
    text: 'Wild coffee still grows under the canopy in Kaffa, where the plant was first found. We take you from forest floor to open-coal roast, in the hands of a family that has done this for generations.',
    image: '/images/coffee-ceremony.png',
    href: '/tours/sacred-waters-and-coffee',
  },
  {
    number: '02',
    title: 'Work around the light, not the schedule',
    text: 'A photographer-guide reads each site for its hour — the churches at dawn, the salt flats at dusk — so the camera is never fighting flat midday sun.',
    image: '/images/danakil.png',
    href: '/tours/danakil-expedition',
  },
  {
    number: '03',
    title: 'Arrive as a guest, not a tourist',
    text: 'Years of standing relationships with artisans, elders and monks mean doors open before you knock. What you see is offered, never staged.',
    image: '/images/textile.png',
    href: '/tours/omo-valley-immersion',
  },
  {
    number: '04',
    title: 'Sleep at the edge of the wild',
    text: 'Each evening ends somewhere chosen for its view and its quiet — lodges set into escarpments and forest edges, built to disappear into what surrounds them.',
    image: '/images/luxury-lodge.png',
    href: '/tours',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="max-w-xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent">
            <span className="h-px w-10 bg-accent" />
            How We Travel
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Four ideas we build every journey around
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {moments.map((m, i) => (
          <Reveal key={m.title}>
            <Link
              href={m.href}
              className="group grid gap-8 py-12 sm:py-16 lg:grid-cols-[80px_1fr_1fr] lg:items-center lg:gap-12"
            >
              <span
                className={`font-serif text-2xl text-accent lg:text-3xl ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                {m.number}
              </span>

              <div className={`shell lg:px-0 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
                <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
                  See the journey
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div
                className={`shell relative h-[240px] overflow-hidden rounded-sm sm:h-[320px] lg:h-[280px] lg:px-0 ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
