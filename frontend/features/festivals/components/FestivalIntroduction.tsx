import { CalendarDays } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'


export function FestivalIntroduction() {
  return (
    <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Through the Year
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Living traditions, not performances
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            These are working festivals of faith and community, and visitors
            are welcome as long as they come respectfully. We plan festival
            journeys well ahead — rooms and good vantage points go early — and
            travel with guides who can explain what is happening and when to
            put the camera down.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-l-2 border-accent bg-muted/60 px-6 py-5">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground sm:text-[11px]">
              <CalendarDays className="h-4 w-4 text-accent" strokeWidth={1.5} />
              About the dates
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ethiopia follows its own calendar, so feast days fall on fixed
              Ethiopian dates that can move by a day in some Western years.
              Fichee and Irreecha move from year to year. We confirm exact
              dates when you book.
            </p>
          </div>
        </Reveal>
      </section>
  )
}
