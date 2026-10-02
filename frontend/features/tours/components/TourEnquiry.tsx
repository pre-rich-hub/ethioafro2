import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import { EnquiryForm } from '@/features/enquiries'
import { getPriceAmount, isTailorMade } from '@/features/tours/utils/tour.utils'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  t: Tour
}

export function TourEnquiry({ t }: Props) {
  const tt = useTranslations('Tours')
  const price = getPriceAmount(t.from)
  const bold = (chunks: ReactNode) => <span className="text-background">{chunks}</span>

  return (
    <section
        id="enquire"
        className="border-t border-border bg-secondary text-secondary-foreground"
      >
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              <span className="rule" />
              {tt('detailEnquireEyebrow')}
            </p>
            <h2 className="max-w-[20ch] text-balance text-3xl leading-[1.08] text-background sm:text-4xl lg:text-5xl">
              {tt('detailEnquireTitle', { title: t.title })}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70 sm:text-lg">
              {tt('detailEnquireBody')}
            </p>
            <p className="mt-8 border-l-2 border-accent-light pl-5 text-sm leading-relaxed text-background/70">
              {isTailorMade(t) || !price
                ? tt.rich('detailRunsTailor', { season: t.season, group: t.group, b: bold })
                : tt.rich('detailRunsPriced', { season: t.season, group: t.group, price, b: bold })}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm
              subject={t.title}
              defaultStyles={t.style.split('·').map((s) => s.trim())}
            />
          </Reveal>
        </div>
      </section>
  )
}
