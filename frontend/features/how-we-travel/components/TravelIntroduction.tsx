import { Reveal } from '@/components/common/Reveal'
import { experiences } from '@/features/how-we-travel/data/travel-style.data'
import { ArrowRight } from 'lucide-react'

export function TravelIntroduction() {
  return (
    <section className="shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:py-28">
      <Reveal>
        <p className="eyebrow mb-6 text-accent">
          <span className="rule" />
          Our Way
        </p>
        <p className="text-balance font-serif text-3xl leading-[1.2] text-foreground sm:text-4xl lg:text-[2.75rem]">
          We plan around people, light and the calendar — not around what is
          easiest to sell. These are the ideas we keep coming back to.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <ol className="border-t border-border">
          {experiences.map((e) => (
            <li key={e.slug} className="border-b border-border">
              <a
                href={`#${e.slug}`}
                className="group flex items-baseline gap-5 py-4 transition-colors"
              >
                <span className="w-7 shrink-0 font-serif text-lg text-accent">
                  {e.number}
                </span>
                <span className="flex-1 font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                  {e.title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
