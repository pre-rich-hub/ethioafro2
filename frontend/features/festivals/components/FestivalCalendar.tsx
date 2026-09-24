import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, MapPin } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { festivals } from '@/features/festivals/data/festival.data'
import { getTour } from '@/features/tours/utils/tour-catalog.utils'


type Props = {
  months: string[]
}

export function FestivalCalendar({ months }: Props) {
  return (
    <section className="border-t border-border">
        <div className="shell py-16 sm:py-20 lg:py-24">
          {months.map((m) => (
            <div key={m} className="grid gap-6 border-b border-border py-10 first:pt-0 last:border-b-0 lg:grid-cols-[200px_1fr] lg:gap-12">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <p className="font-serif text-3xl text-accent sm:text-4xl">{m}</p>
              </Reveal>
              <div className="space-y-8">
                {festivals
                  .filter((f) => f.month === m)
                  .map((f, i) => {
                    const tours = f.tourSlugs
                      .map((s) => getTour(s))
                      .filter((t) => t !== undefined)
                    return (
                      <Reveal
                        key={f.slug}
                        id={f.slug}
                        delay={i * 80}
                        className="grid scroll-mt-28 overflow-hidden border border-border bg-card sm:grid-cols-[220px_1fr]"
                      >
                        <div className="relative aspect-[16/10] sm:aspect-auto">
                          <Image
                            src={f.image}
                            alt={f.localName ?? f.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 220px"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 sm:p-8">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                            {f.when}
                          </p>
                          <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                            {f.localName ?? f.name}
                          </h3>
                          {f.localName && (
                            <p className="mt-1 text-sm text-muted-foreground">{f.name}</p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-foreground">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-accent" />
                              {f.where}
                            </span>
                            {f.unesco && (
                              <span className="flex items-center gap-1.5">
                                <Award className="h-3.5 w-3.5 text-accent" />
                                {f.unesco}
                              </span>
                            )}
                          </div>
                          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                            {f.text}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
                            {tours.length > 0 ? (
                              tours.map((t) => (
                                <Link
                                  key={t.slug}
                                  href={`/tours/${t.slug}`}
                                  className="group inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
                                >
                                  {t.title}
                                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                              ))
                            ) : (
                              <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
                              >
                                Plan a tailor-made trip
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
