import { Reveal } from '@/components/common/Reveal'
import Image from 'next/image'

export function FounderLetter() {
  return (
    <section className="shell grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:py-28">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-6 text-accent">
          <span className="rule" />
          From the Founder
        </p>
        <blockquote className="font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.5rem]">
          <span aria-hidden className="mb-2 block text-7xl leading-none text-accent">
            &ldquo;
          </span>
          Travel is both my profession and my passion.
        </blockquote>
        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <span
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-xl text-accent"
          >
            MG
          </span>
          <div>
            <p className="font-serif text-2xl leading-tight text-foreground">
              Mihiret Getenat
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              Founder · Simien Ethiopia Tours
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
        <p className="font-serif text-2xl leading-snug text-foreground sm:text-[1.75rem]">
          I was born and raised in Bahir Dar, and my life in tourism began
          there while I was still at school.
        </p>
        <p>
          Between classes I worked with visitors in Bahir Dar and up in the
          Simien Mountains. What started as work alongside my studies became
          the thing I wanted to do with my life: sharing the cultures,
          the history, the landscapes and the hospitality of the country I
          love with people seeing it for the first time.
        </p>
        <p>
          After high school I moved to Addis Ababa to study Tourism and Tour
          Operations at the Tourism Training Institute, then spent years
          working for other tour companies — guiding, planning itineraries,
          looking after guests and managing destinations. Those years taught
          me every side of the work.
        </p>
        <p>
          Simien Ethiopia Tours grew out of that. It is a licensed Ethiopian
          company built for private, tailor-made journeys, and it is run
          today by my three brothers, our wider family, our team — and me.
        </p>
        <div className="relative mt-10 aspect-[16/10] overflow-hidden">
          <Image
            src="/images/hero-simien.png"
            alt="The Simien Mountains escarpment at first light"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 bg-background/95 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-[11px]">
            The Simien — where it all started
          </p>
        </div>
      </Reveal>
    </section>
  )
}
