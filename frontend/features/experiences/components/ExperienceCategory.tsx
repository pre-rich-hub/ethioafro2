import { Reveal } from '@/components/common/Reveal'
import { ActivityCard } from '@/features/experiences/components/ActivityCard'
import type { ActivityCategory } from '@/features/experiences/types/experience.types'
import { type Activity } from '@/features/experiences/types/experience.types'
import { slugify } from '@/features/experiences/utils/experience.utils'

type Props = {
  c: ActivityCategory
  ci: number
  items: Activity[]
}

export function ExperienceCategory({ c, ci, items }: Props) {
  return (
    <section
            key={c}
            id={slugify(c)}
            className={`scroll-mt-20 border-t border-border ${ci % 2 === 0 ? 'bg-muted/40' : ''}`}
          >
            <div className="shell py-14 sm:py-16 lg:py-20">
              <Reveal className="mb-8 flex items-baseline gap-4 sm:mb-10">
                <span className="font-serif text-lg text-accent">
                  {String(ci + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">{c}</h2>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 90} className="h-full">
                    <ActivityCard a={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
  )
}
