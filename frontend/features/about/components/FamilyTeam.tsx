import { getTranslations } from 'next-intl/server'
import { Reveal } from '@/components/common/Reveal'
import { contact } from '@/lib/constants/contact'

export async function FamilyTeam() {
  const t = await getTranslations('About')

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="shell py-16 sm:py-20 lg:py-28">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[11px]">
            <span className="h-px w-10 bg-accent" />
            {t('teamEyebrow')}
            <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            {t('teamTitle')}
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="relative flex flex-col border border-border bg-card p-8 sm:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
              {t('teamLaEyebrow')}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-foreground">
              {t('teamLaTitle')}
            </h3>
            <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
              {t('teamLaBody')}
            </p>
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
              className="mt-8 font-serif text-2xl text-foreground transition-colors hover:text-accent"
            >
              {contact.phone}
            </a>
          </Reveal>

          <Reveal delay={120} className="relative flex flex-col bg-secondary p-8 text-secondary-foreground sm:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
              {t('teamEtEyebrow')}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-background">
              {t('teamEtTitle')}
            </h3>
            <p className="mt-4 flex-1 text-pretty leading-relaxed text-background/70">
              {t('teamEtBody')}
            </p>
            <p className="mt-8 text-sm leading-relaxed text-background/60">
              {contact.address}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
