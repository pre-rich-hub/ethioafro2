import { Reveal } from '@/components/common/Reveal'
import { milestones } from '../data/about.data'

export function CompanyTimeline() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div className="shell py-16 sm:py-20 lg:py-28">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            The Journey So Far
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-background sm:text-4xl lg:text-5xl">
            From a lakeside town to travellers around the world
          </h2>
        </Reveal>

        <ol className="grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal
              key={m.title}
              as="li"
              delay={(i % 3) * 90}
              className="group relative bg-secondary p-7 transition-colors duration-500 hover:bg-charcoal sm:p-9"
            >
              <span className="font-serif text-5xl leading-none text-accent/80 transition-colors duration-500 group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50 sm:text-[11px]">
                {m.place}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug text-background">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-background/65 sm:text-[15px]">
                {m.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
