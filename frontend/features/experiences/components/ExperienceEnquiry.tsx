import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import { EnquiryForm } from '@/features/enquiries'
import type { Activity } from '@/features/experiences/types/experience.types'

type Props = {
  a: Activity
  others: Activity[]
}

export function ExperienceEnquiry({ a, others }: Props) {
  const t = useTranslations('Experiences')
  const locale = useLocale()
  // English reads naturally lower-cased mid-sentence; other locales keep the proper title.
  const title = locale === 'en' ? a.title.toLowerCase() : a.title

  return (
    <section id="add" className="scroll-mt-20 border-t border-border bg-secondary text-secondary-foreground">
        <div className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
          <Reveal>
            <p className="eyebrow mb-5 text-accent-light">
              {t('detailAddEyebrow')}
            </p>
            <h2 className="max-w-[20ch] text-balance text-3xl leading-[1.08] text-background sm:text-4xl lg:text-5xl">
              {t('detailAddTitle', { title })}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/70 sm:text-lg">
              {t('detailAddBody')}
            </p>
            {others.length > 0 && (
              <div className="mt-10 border-t border-background/15 pt-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50 sm:text-[11px]">
                  {t('detailMightLike')}
                </p>
                <ul className="space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/experiences/${o.slug}`}
                        className="group inline-flex items-center gap-2 py-1 font-serif text-xl text-background transition-colors hover:text-accent"
                      >
                        {o.title}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm subject={a.title} defaultStyles={[]} defaultActivities={[a.short]} />
          </Reveal>
        </div>
      </section>
  )
}
