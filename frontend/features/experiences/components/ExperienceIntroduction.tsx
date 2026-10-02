import { getLocale, getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { activityCategories } from '@/features/experiences/data/experience.data'
import {
  getActivityCategoryLabels,
  slugify,
} from '@/features/experiences/utils/experience.utils'

export async function ExperienceIntroduction() {
  const t = await getTranslations('Experiences')
  const locale = await getLocale()
  const categoryLabels = getActivityCategoryLabels(locale)

  return (
    <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:py-24">
      <Reveal>
        <p className="eyebrow mb-5 text-accent">
          <span className="rule" />
          {t('introEyebrow')}
        </p>
        <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
          {t('introTitle')}
        </h2>
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          {t('introBody')}
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
          {t('jumpTo')}
        </p>
        <ul className="flex flex-wrap gap-2">
          {activityCategories.map((c) => (
            <li key={c}>
              <a
                href={`#${slugify(c)}`}
                className="inline-block border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:text-[11px]"
              >
                {categoryLabels[c] ?? c}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
