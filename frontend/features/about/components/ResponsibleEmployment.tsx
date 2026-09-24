import { Reveal } from '@/components/common/Reveal'
import Image from 'next/image'

export function ResponsibleEmployment() {
  return (
    <section className="shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
        <Image
          src="/images/textile.png"
          alt="An Ethiopian weaver at a traditional loom"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow mb-5 text-accent">
          <span className="rule" />
          More Than a Business
        </p>
        <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
          Opening the industry to the people who live here
        </h2>
        <div className="mt-7 space-y-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Tourism gave our family a future, and we want it to do the same
            for others. We hire locally wherever we travel, and we make a
            particular point of training and employing women who want to
            become tour operators and guides.
          </p>
          <p>
            It is a family story built on experience, opportunity and
            responsible tourism. Every journey you take with us is a small
            part of it.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
