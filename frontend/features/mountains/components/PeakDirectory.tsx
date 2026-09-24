import { Reveal } from '@/components/common/Reveal'
import { difficultyStyle } from '@/features/mountains/data/climbing-guide'
import { peaks } from '@/features/mountains/data/mountain.data'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'
import {
ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export function PeakDirectory() {
  return (
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
  )
}
