import { Reveal } from '@/components/common/Reveal'
import { ways } from '@/features/mountains/data/climbing-guide'
import {
ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export function ClimbingStyles() {
  return (
    <section className="shell py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow mb-4 text-accent">
            <span className="rule" />
            How We Run Climbs
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Three ways to reach the top
          </h2>
        </Reveal>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {ways.map(({ Icon, title, text, href, link }, i) => (
            <Reveal key={title} delay={i * 90} className="flex flex-col bg-background p-7 sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {text}
              </p>
              <Link
                href={href}
                className="group mt-6 inline-flex items-center gap-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
              >
                {link}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
  )
}
