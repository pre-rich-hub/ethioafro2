import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { experiences } from '@/lib/site'

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
            The ideas behind every journey
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {experiences.slice(0, 4).map((e, i) => {
          // Rows mirror each other so the number always sits beside the
          // picture: number · picture · text, then text · picture · number.
          const flip = i % 2 === 0
          return (
          <Reveal key={e.slug}>
            <Link
              href={`/experiences/${e.slug}`}
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
                <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {e.intro}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-300 group-hover:text-accent">
                  Read the story
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div
                className={`shell relative h-[240px] overflow-hidden rounded-sm sm:h-[320px] lg:order-2 lg:h-[280px] lg:px-0`}
              >
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
          See all six ideas
        </LinkButton>
      </Reveal>
    </section>
  )
}
