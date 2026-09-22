import { Check } from 'lucide-react'
import { EnquiryForm } from '@/components/enquiry-form'
import { Reveal } from '@/components/reveal'

export function PlanJourney() {
  return (
    <section id="plan" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="shell relative grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <p className="eyebrow mb-6 text-accent-light">
            <span className="rule" />
            Where It Begins
          </p>
          <h2 className="max-w-[16ch] text-balance font-serif text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            A journey shaped entirely around you
          </h2>
          <p className="mt-7 max-w-md text-pretty text-base leading-relaxed text-secondary-foreground/70 sm:text-lg">
            There's no fixed package to adapt — just a conversation about
            where you want to go, how you like to travel, and how much time
            you actually have. From there, a designer builds a route made
            specifically for that trip, and nothing else.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              'Planned in Addis, guided by people who live here',
              'One quote up front, no add-ons later',
              'A single point of contact from first email to touchdown home',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-secondary-foreground sm:text-base"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  )
}
