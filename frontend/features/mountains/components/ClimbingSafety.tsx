import { Reveal } from '@/components/common/Reveal'
import { safety } from '@/features/mountains/data/climbing-guide'

export function ClimbingSafety() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="eyebrow mb-4 text-accent">
              <span className="rule" />
              Before You Climb
            </p>
            <h2 className="text-balance text-3xl leading-[1.1] text-background sm:text-4xl">
              Altitude is the real challenge — here is how we handle it
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {safety.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 70} className="border-t border-background/20 pt-6">
                <Icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                <p className="mb-2 font-serif text-xl text-background">{title}</p>
                <p className="text-pretty text-sm leading-relaxed text-background/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  )
}
