import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { LinkButton } from '@/components/common/LinkButton'

const featured = [
  {
    number: '01',
    eyebrow: 'Mountain Climbing',
    title: 'Stand on the roof of Ethiopia',
    text: 'Guided ascents of Ras Dashen at 4,550 metres, Bwahit, Tullu Dimtu and Abune Yosef — walking summits with no ropes, just altitude, weather and some of the finest views in Africa.',
    href: '/mountains',
    link: 'Explore the mountains',
    image: '/images/bale-gelada.png',
  },
  {
    number: '02',
    eyebrow: 'Photography',
    title: 'Travel with the light, not the clock',
    text: 'A photographer-guide times every stop to its best hour — Imet Gogo at sunrise, the Lalibela trenches at first light, the salt flats as the heat goes — with portraits only ever taken with consent.',
    href: '/tours/ethiopia-through-the-lens',
    link: 'Ethiopia Through the Lens',
    image: '/images/lalibela.png',
  },
  {
    number: '03',
    eyebrow: 'Running',
    title: 'Run where champions train',
    text: 'Dawn on the forest trails of Entoto, around 3,000 metres up, then the highland town of Bekoji — birthplace of Derartu Tulu, Kenenisa Bekele and the Dibaba sisters. Time it to the Great Ethiopian Run in late November.',
    href: '/tours/run-with-ethiopias-champions',
    link: 'Run with Ethiopia\'s Champions',
    image: '/images/addis-skyline.png',
  },
  {
    number: '04',
    eyebrow: 'Cooking & Food',
    title: 'Pour injera in a family kitchen',
    text: 'Learn to pour injera on the mitad, cook the stews that go with it, and share one platter the Ethiopian way — then taste tej, tella and areki on an evening with azmari musicians.',
    href: '/experiences/injera-and-ethiopian-cooking',
    link: 'Injera & an Ethiopian kitchen',
    image: '/images/coffee-ceremony.png',
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
