import { useTranslations } from 'next-intl'
import { ArrowRight, CalendarDays, Clock, Compass, ShieldCheck, Users } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getPriceAmount, isTailorMade } from '@/features/tours/utils/tour.utils'
import { localizeStyleString } from '@/features/tours/utils/style-labels'
import type { Tour } from '@/features/tours/types/tour.types'

type Props = {
  t: Tour
  nightsLabel: string
}

export function TourPriceCard({ t, nightsLabel }: Props) {
  const tt = useTranslations('Tours')
  const tc = useTranslations('Cta')
  const price = getPriceAmount(t.from)

  return (
    <div className="relative overflow-hidden bg-secondary p-2 text-secondary-foreground shadow-[0_30px_60px_-30px_rgba(26,26,26,0.55)]">
      {/* Soft gold glow behind the price */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Inset hairline frame */}
      <div className="relative border border-accent/35 px-6 py-8 sm:px-8 sm:py-10">
        {isTailorMade(t) || !price ? (
          <>
            <p className="eyebrow text-accent">
              {tt('detailTailorEyebrow')}
            </p>
            <p className="mt-6 font-serif text-4xl leading-[1.05] text-background sm:text-5xl">
              {tt('detailTailorTitle')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/60">
              {tt('detailTailorBody')}
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow text-accent">
              {tt('detailIndicative')}
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-background/55">
                {tt('detailFrom')}
              </span>
              <p className="font-serif text-5xl leading-none text-background sm:text-6xl">
                {price}
              </p>
            </div>
            <p className="mt-3 text-sm text-background/60">
              {tt('detailPerPerson')}
            </p>
          </>
        )}

        <dl className="mt-8 grid grid-cols-2 border-t border-background/15">
          {[
            { k: tt('detailDuration'), v: t.nights ? `${t.days} · ${nightsLabel}` : t.days, Icon: Clock },
            { k: tt('detailBestSeason'), v: t.season, Icon: CalendarDays },
            { k: tt('detailGroupSize'), v: t.group, Icon: Users },
            { k: tt('detailStyle'), v: localizeStyleString(t.style, tt), Icon: Compass },
          ].map(({ k, v, Icon }, i) => (
            <div
              key={k}
              className={`border-b border-background/15 py-5 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4 sm:pl-5'}`}
            >
              <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
                <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                {k}
              </dt>
              <dd className="mt-2 font-serif text-lg leading-snug text-background sm:text-xl">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href="#enquire"
          className="group mx-auto mt-8 flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-accent px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background sm:text-xs"
        >
          {tc('enquireNow')}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-background/55">
          <ShieldCheck className="mt-px h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          {tt('detailPriceNote')}
        </p>
      </div>
    </div>
  )
}
