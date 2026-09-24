import { Reveal } from '@/components/common/Reveal'
import { activityCategories } from '@/features/experiences/data/experience.data'
import { slugify } from '@/features/experiences/utils/experience.utils'

export function ExperienceIntroduction() {
  return (
    <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            How It Works
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Choose what appeals, and we fit it into your route
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Every experience here can be added to any tour or tailor-made
            journey. Tick the ones you like on the enquiry form — or ask about
            them once your route takes shape — and we place them where they
            make sense on the map and in the calendar.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-2">
            {activityCategories.map((c) => (
              <li key={c}>
                <a
                  href={`#${slugify(c)}`}
                  className="inline-block border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:text-[11px]"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
  )
}
