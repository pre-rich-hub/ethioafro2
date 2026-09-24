import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-simien.png"
          alt="Layered escarpments of the Simien Mountains at sunrise, Ethiopia"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-charcoal/10 to-transparent" />
      </div>

      <div className="shell flex flex-1 flex-col items-center justify-center text-center pb-10 pt-32 sm:pb-14 lg:pb-16">
        <h1 className="max-w-[20ch] text-balance text-[2.6rem] font-medium leading-[1.04] text-background text-shadow-soft [animation:fade-up_1s_ease_0.1s_both] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Where the World Began
        </h1>

        <p className="mt-5 max-w-[56ch] text-pretty leading-relaxed text-background/85 [animation:fade-up_1s_ease_0.25s_both] sm:mt-7 sm:text-lg">
          Rock-hewn churches, highland kingdoms, and a landscape unlike
          anywhere else — shaped into a journey built entirely around you.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 [animation:fade-up_1s_ease_0.4s_both] sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/tours"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-pop px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-pop-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-pop/90 sm:text-xs"
          >
            Explore Ethiopia
          </Link>
        </div>
      </div>
    </section>
  )
}


