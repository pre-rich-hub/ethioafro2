import Image from 'next/image'
import { Reveal } from '@/components/common/Reveal'

const facts = [
  ['3,000+', 'years of continuous civilization'],
  ['9', 'UNESCO World Heritage Sites'],
  ['80+', 'living languages and cultures'],
  ['13', 'months in the Ethiopian calendar'],
]

export function WhyEthiopia() {
  return (
    <section id="why" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/festival-timkat.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-accent-light">
              <span className="h-px w-10 bg-accent-light" />
              Why Ethiopia
            </p>
            <h2 className="max-w-[15ch] text-balance font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              There is nowhere else quite like it
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-secondary-foreground/80">
              <p>
                Few countries hold this much contrast inside one set of
                borders — a highland kingdom that kept its own calendar and
                script for millennia, sitting a short flight from one of the
                hottest, lowest places on the continent.
              </p>
              <p>
                Guests rarely describe it as a trip they took. More often it
                is a recalibration of what they assumed the world still had
                left to show them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="flex items-center">
            <dl className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl bg-secondary-foreground/15">
              {facts.map(([stat, label]) => (
                <div key={label} className="bg-secondary p-8 lg:p-10">
                  <dt className="font-serif text-4xl text-accent lg:text-5xl">
                    {stat}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
