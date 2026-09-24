import { Reveal } from '@/components/common/Reveal'
import { peaks } from '@/features/mountains/data/mountain.data'

export function ClimbingIntroduction() {
  return (
    <section className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-5 text-accent">
            <span className="rule" />
            Why Climb Here
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Big summits, no ropes, and almost no crowds
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Ethiopia&apos;s highest mountains are walking peaks. None needs
              ropes or technical skill — what makes them serious is altitude,
              distance and weather. With good acclimatisation, a fit walker can
              stand on Ras Dashen at 4,550 metres, the highest point in the
              country.
            </p>
            <p>
              And you will rarely share the top. The approaches cross farmland,
              river valleys and Afro-alpine moorland where gelada monkeys,
              walia ibex and Ethiopian wolves live — mountains with a
              landscape, and a culture, all the way up.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-2 border-t border-border">
            {[
              { k: 'Highest summit', v: '4,550 m' },
              { k: 'Summits over 4,000 m', v: `${peaks.filter((p) => p.height >= 4000).length} in this guide` },
              { k: 'Main ranges', v: 'Simien & Bale' },
              { k: 'Climbing season', v: 'Oct – Feb' },
            ].map(({ k, v }, i) => (
              <div
                key={k}
                className={`border-b border-border py-6 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-5'}`}
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                  {k}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-foreground sm:text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
  )
}
