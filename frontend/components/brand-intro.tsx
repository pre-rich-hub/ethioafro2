import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const principles = [
  ['01', 'We ask first', 'before we assume what you want'],
  ['02', 'We build once', 'a single itinerary, never a shelf product'],
  ['03', 'We stay accountable', 'to the communities whose land we visit'],
]

export function BrandIntro() {
  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-40">
      <Reveal className="mx-auto max-w-[720px] px-6 text-center lg:px-10">
        <p className="mb-6 flex items-center justify-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent">
          <span className="h-px w-10 bg-accent" />
          Our Philosophy
          <span className="h-px w-10 bg-accent" />
        </p>
        <h2 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          A country that rewards slow travel
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Ethiopia was never conquered by a European power, never fully
            mapped by outsiders, and has kept its own calendar, its own
            script and its own church for longer than most nations have
            existed. Almost nothing here was built for a visitor.
          </p>
          <p>
            We exist to open that country properly, without flattening it
            into a package tour. Founded and run from Addis Ababa, our team
            has spent more than ten years building the relationships — with
            monks, elders, drivers and guides — that make a genuinely
            private itinerary possible, in ten languages and counting.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-16 max-w-[1280px] px-6 lg:px-10">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            src="/images/coffee-ceremony.png"
            alt="Hands pouring coffee from a traditional Ethiopian jebena during a coffee ceremony"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal
        delay={180}
        className="mx-auto mt-16 grid max-w-[1280px] gap-10 divide-y divide-border px-6 sm:grid-cols-3 sm:gap-8 sm:divide-y-0 sm:divide-x lg:px-10"
      >
        {principles.map(([n, bold, rest]) => (
          <div key={bold} className="pt-8 first:pt-0 sm:px-8 sm:pt-0 sm:first:pl-0">
            <span className="font-serif text-sm text-accent">{n}</span>
            <span className="mt-2 block font-serif text-xl text-foreground">
              {bold}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
              {rest}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
