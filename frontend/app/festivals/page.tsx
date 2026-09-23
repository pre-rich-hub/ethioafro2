import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CalendarDays, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { festivals, getTour } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Festival Calendar',
  description:
    'Ethiopia\'s great festivals through the year — Genna, Timkat, Fichee-Chambalaalla, Ashendye, Enkutatash, Meskel, Irreecha and the Great Ethiopian Run — with dates, places and journeys.',
}

export default function FestivalsPage() {
  const months = Array.from(new Set(festivals.map((f) => f.month)))

  return (
    <>
      <PageHero
        eyebrow="Festival Calendar"
        title="Time your journey to a feast day"
        lede="Ethiopia keeps its own calendar, and its festivals are some of the most spectacular anywhere — processions, bonfires, all-night vigils and whole cities in white."
        image="/images/festival-timkat.png"
        imageAlt="Priests under embroidered umbrellas during the Timkat procession"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Festivals' }]}
      />

      {/* Intro */}
      <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Through the Year
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Living traditions, not performances
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            These are working festivals of faith and community, and visitors
            are welcome as long as they come respectfully. We plan festival
            journeys well ahead — rooms and good vantage points go early — and
            travel with guides who can explain what is happening and when to
            put the camera down.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-l-2 border-accent bg-muted/60 px-6 py-5">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground sm:text-[11px]">
              <CalendarDays className="h-4 w-4 text-accent" strokeWidth={1.5} />
              About the dates
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ethiopia follows its own calendar, so feast days fall on fixed
              Ethiopian dates that can move by a day in some Western years.
              Fichee and Irreecha move from year to year. We confirm exact
              dates when you book.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Calendar */}
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

      <CtaBand
        title="Want to travel for a festival?"
        text="Tell us which festival and roughly when. Because rooms go early, the sooner we start, the better the places we can hold for you."
        secondary={{ label: 'Festival Tours', href: '/tours?style=Festival' }}
        image="/images/festival-timkat.png"
      />
    </>
  )
}
