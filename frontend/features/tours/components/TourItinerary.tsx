import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import type { Tour } from '@/features/tours/types/tour.types'
import { railPad } from '@/features/tours/constants/tour-layout'

type Props = {
  t: Tour
}

export function TourItinerary({ t }: Props) {
  const tt = useTranslations('Tours')

  return (
    <section className="border-y border-border bg-muted/40">
          <div className="shell py-16 sm:py-20 lg:py-28">
            <div className={railPad}>
              <Reveal className="mb-12 max-w-2xl sm:mb-16">
                <p className="eyebrow mb-5 text-accent">
                  <span className="rule" />
                  {tt('detailItineraryEyebrow')}
                </p>
                <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                  {tt('detailItineraryTitle')}
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                  {tt('detailItineraryLede')}
                </p>
              </Reveal>

              <ol className="relative border-l border-border pl-8 sm:pl-12">
                {t.itinerary.map((step, i) => (
                  <Reveal
                    key={step.day}
                    delay={i * 70}
                    as="li"
                    className="relative pb-10 last:pb-0"
                  >
                    <span
                      aria-hidden
                      className="absolute -left-[38px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-muted sm:-left-[54px]"
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
                      {step.day}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-foreground sm:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>
  )
}
