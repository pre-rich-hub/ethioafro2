import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
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
            Four ideas we build every journey around
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {experiences.map((e, i) => (
          <Reveal key={e.slug}>
            <Link
              href={`/experiences/${e.slug}`}
              className="group grid gap-8 py-12 sm:py-16 lg:grid-cols-[80px_1fr_1fr] lg:items-center lg:gap-12"
            >
              <span
                className={`font-serif text-2xl text-accent lg:text-3xl ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                {e.number}
              </span>

              <div className={`shell lg:px-0 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
                <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {e.intro}
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
                  src={e.image}
                  alt={e.title}
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
