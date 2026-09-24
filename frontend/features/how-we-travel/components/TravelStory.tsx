import type { Experience } from '../types/travel-style.types'
import { Reveal } from '@/components/common/Reveal'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function TravelStory({ e }: { e: Experience }) {
  const [lead, ...rest] = e.gallery
  return (
    <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-28">
      <Reveal>
        <p className="text-pretty font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
          {e.intro}
        </p>
        <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          {e.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        {lead && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm sm:col-span-2">
              <Image
                src={lead}
                alt={e.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            {rest.map((src) => (
              <div
                key={src}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm ${rest.length === 1 ? 'sm:col-span-2 sm:aspect-[16/9]' : ''}`}
              >
                <Image
                  src={src}
                  alt={e.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 28vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </Reveal>

      <Reveal delay={120} className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative overflow-hidden bg-secondary p-2 text-secondary-foreground shadow-[0_30px_60px_-30px_rgba(26,26,26,0.55)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative border border-accent/35 px-6 py-8 sm:px-8 sm:py-10">
            <p className="eyebrow text-accent">
              <span className="rule" />
              What this looks like
            </p>
            <ol className="mt-6 space-y-4">
              {e.highlights.map((h, i) => (
                <li key={h} className="flex items-baseline gap-4">
                  <span className="w-6 shrink-0 font-serif text-base text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-pretty text-sm leading-relaxed text-background/85 sm:text-[15px]">
                    {h}
                  </span>
                </li>
              ))}
            </ol>

            <dl className="mt-8 grid grid-cols-2 border-t border-background/15">
              {e.facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`border-b border-background/15 py-4 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4'}`}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-background/50">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-lg leading-snug text-background">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/contact"
              className="group mx-auto mt-8 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-accent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background sm:text-xs"
            >
              Enquire now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
