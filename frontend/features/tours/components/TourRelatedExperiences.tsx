import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import type { Activity } from '@/features/experiences/types/experience.types'

type Props = {
  experiences: Activity[]
}

export function TourRelatedExperiences({ experiences }: Props) {
  const t = useTranslations('Tours')

  if (experiences.length === 0) return null

  return (
    <section className="border-t border-border bg-muted/40">
      <div className="shell py-16 sm:py-20 lg:py-28">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-accent sm:mb-5">
              <span className="rule" />
              {t('detailAddEyebrow')}
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
              {t('detailAddTitle')}
            </h2>
          </div>
          <Link
            href="/experiences"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
          >
            {t('detailAllExperiences')}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((activity, i) => (
            <Reveal key={activity.slug} delay={i * 80}>
              <li>
                <Link
                  href={`/experiences/${activity.slug}`}
                  className="group block border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {activity.category} · {activity.duration}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground transition-colors group-hover:text-accent">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {activity.teaser}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {t('detailViewExperience')}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
