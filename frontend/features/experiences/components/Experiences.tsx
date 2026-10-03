import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { LinkButton } from '@/components/common/LinkButton'

// Copy (eyebrow/title/text/link) lives in the `Home` messages as experiencesCard{n}*.
const featured = [
  {
    number: '01',
    href: '/tours/ras-dashen-summit-climb',
    image: 'https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/ras-dashen.png',
  },
  {
    number: '02',
    href: '/tours/ethiopia-through-the-lens',
    image: 'https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/lalibela.png',
  },
  {
    number: '03',
    href: '/tours/run-with-ethiopias-champions',
    image: 'https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/run-where-champions-train.png',
  },
  {
    number: '04',
    href: '/experiences/injera-and-ethiopian-cooking',
    image: 'https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/injera-and-ethiopian-cooking.png',
  },
] as const

export async function Experiences() {
  const t = await getTranslations('Home')

  return (
    <section id="experiences" className="py-24 lg:py-36">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent">
            {t('experiencesEyebrow')}
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl">
            {t('experiencesTitle')}
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {featured.map((e, i) => {
          const n = i + 1
          const eyebrow = t(`experiencesCard${n}Eyebrow`)
          const title = t(`experiencesCard${n}Title`)
          const text = t(`experiencesCard${n}Text`)
          const link = t(`experiencesCard${n}Link`)
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
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
                    {link}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <div className="shell relative h-[240px] overflow-hidden rounded-sm sm:h-[320px] lg:order-2 lg:h-[280px] lg:px-0">
                  <Image
                    src={e.image}
                    alt={title}
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
          {t('experiencesAllCta')}
        </LinkButton>
      </Reveal>
    </section>
  )
}
