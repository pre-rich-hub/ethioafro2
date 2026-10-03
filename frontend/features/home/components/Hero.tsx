import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export async function Hero() {
  const t = await getTranslations('Home')

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1920/lalibela.png"
          alt="Rock-hewn churches of Lalibela at golden hour, Ethiopia"
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
          {t('heroTitle')}
        </h1>

        <p className="mt-5 max-w-[56ch] text-pretty leading-relaxed text-background/85 [animation:fade-up_1s_ease_0.25s_both] sm:mt-7 sm:text-lg">
          {t('heroBody')}
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 [animation:fade-up_1s_ease_0.4s_both] sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/tours"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-pop px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-pop-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-pop/90 sm:text-xs"
          >
            {t('heroExploreCta')}
          </Link>
          <Link
            href="/destinations"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm border border-background/40 bg-background/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-background backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-background/70 hover:bg-background/20 sm:text-xs"
          >
            {t('heroDestCta')}
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="mb-2 flex flex-col items-center gap-3 self-center text-[10px] font-semibold uppercase tracking-[0.3em] text-background/85 transition-colors [animation:fade-up_1s_ease_0.6s_both] hover:text-background sm:mb-3"
      >
        {t('heroScroll')}
        <span className="relative h-12 w-px overflow-hidden bg-background/30 sm:h-16">
          <span className="absolute inset-x-0 top-0 h-2/5 animate-scroll-cue bg-background motion-reduce:animate-none" />
        </span>
      </a>
    </section>
  )
}
