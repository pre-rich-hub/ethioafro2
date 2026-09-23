import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

const featured = [
  {
    number: '01',
    eyebrow: 'Climbing & Trekking',
    title: 'Stand on the roof of Ethiopia',
    text: 'Guided ascents of Ras Dashen at 4,550 metres, Bwahit, Tullu Dimtu and Abune Yosef — walking summits with no ropes, just altitude, weather and some of the finest views in Africa.',
    href: '/mountains',
    link: 'Explore the mountains',
    image: '/images/bale-gelada.png',
  },
  {
    number: '02',
    eyebrow: 'Festivals',
    title: 'Arrive for Genna and Timkat',
    text: 'Christmas night among the pilgrims at Lalibela\'s rock churches, then Epiphany in Gondar as the tabots are carried to Fasilides\' Bath — two January feast days, planned a year ahead.',
    href: '/tours/christmas-to-epiphany',
    link: 'Christmas to Epiphany',
    image: '/images/festival-timkat.png',
  },
  {
    number: '03',
    eyebrow: 'Coffee & Traditional Drinks',
    title: 'Taste where coffee began',
    text: 'Cup the coffees of Sidama, Yirgacheffe, Jimma and Harar side by side, share a three-round ceremony in a family home, and spend an evening on tej, tella and areki with azmari musicians.',
    href: '/experiences/coffee-cupping-and-ceremony',
    link: 'Coffee cupping & ceremony',
    image: '/images/coffee-ceremony.png',
  },
  {
    number: '04',
    eyebrow: 'Community & Farm Life',
    title: 'Live a day the way Ethiopia does',
    text: 'Plough and thresh teff with a highland farming family, walk out with Borana herders to the singing wells, and sleep in community-run lodges where your hosts are also your guides.',
    href: '/experiences/village-homestay',
    link: 'Community stays',
    image: '/images/textile.png',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Ways to Explore
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Every way into Ethiopia, one team behind them all
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {featured.map((e, i) => {
          // Rows mirror each other so the number always sits beside the
          // picture: text · picture · number, then number · picture · text.
          const flip = i % 2 === 0
          return (
            <Reveal key={e.number}>
              <Link
                href={e.href}
                className={`group grid gap-8 py-12 sm:py-16 lg:items-center lg:gap-12 ${
                  flip ? 'lg:grid-cols-[1fr_1fr_80px]' : 'lg:grid-cols-[80px_1fr_1fr]'
                }`}
              >
                <span
                  className={`px-5 font-serif text-2xl text-accent sm:px-6 lg:px-0 lg:text-center lg:text-3xl ${
                    flip ? 'lg:order-3' : 'lg:order-1'
                  }`}
                >
                  {e.number}
                </span>

                <div
                  className={`shell lg:px-0 ${flip ? 'lg:order-1 lg:!pl-[calc(80px+3rem)]' : 'lg:order-3'}`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                    {e.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">
                    {e.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {e.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
                    {e.link}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <div className="shell relative h-[240px] overflow-hidden rounded-sm sm:h-[320px] lg:order-2 lg:h-[280px] lg:px-0">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-12 flex justify-center sm:mt-14">
        <LinkButton href="/experiences" variant="outline">
          Explore all
        </LinkButton>
      </Reveal>
    </section>
  )
}
