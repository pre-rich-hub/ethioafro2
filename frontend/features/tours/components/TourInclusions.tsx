import { useTranslations } from 'next-intl'
import { Check, X } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import type { Tour } from '@/features/tours/types/tour.types'
import { railPad } from '@/features/tours/constants/tour-layout'

type Props = {
  t: Tour
}

export function TourInclusions({ t }: Props) {
  const tt = useTranslations('Tours')

  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
          <div className={`grid gap-12 xl:grid-cols-2 xl:gap-16 ${railPad}`}>
            <Reveal>
              <p className="eyebrow mb-6 text-primary">
                <span className="rule" />
                {tt('detailIncluded')}
              </p>
              <ul className="space-y-4">
                {t.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow mb-6 text-muted-foreground">
                <span className="rule" />
                {tt('detailNotIncluded')}
              </p>
              <ul className="space-y-4">
                {t.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
  )
}
