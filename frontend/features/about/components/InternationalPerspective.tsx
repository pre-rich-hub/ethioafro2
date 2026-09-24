import { Reveal } from '@/components/common/Reveal'
import { MapPinned } from 'lucide-react'
import { travelled, values } from '../data/about.data'

export function InternationalPerspective() {
  return (
    <section className="shell py-16 sm:py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            An International Perspective
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            We know what travellers look for, because we travel too
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            Representing the company at tourism fairs and business events,
            and travelling widely beyond Ethiopia, taught us to see a trip
            from the guest&apos;s side of the table. Five things come up
            every time.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {travelled.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]"
              >
                <MapPinned className="h-3 w-3 text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 90}
              className={`bg-background p-7 sm:p-8 ${i === values.length - 1 ? 'sm:col-span-2' : ''}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
