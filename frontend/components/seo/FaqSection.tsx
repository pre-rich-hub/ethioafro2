import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import type { FaqItem } from '@/lib/seo/faq.types'

type Props = {
  eyebrow?: string
  title: string
  intro?: string
  items: FaqItem[]
  footerLink?: { label: string; href: string }
}

export function FaqSection({
  eyebrow,
  title,
  intro,
  items,
  footerLink,
}: Props) {
  const ts = useTranslations('Shared')

  if (items.length === 0) return null

  return (
    <section className="border-t border-border">
      <div className="shell py-16 sm:py-20 lg:py-28">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow mb-5 text-accent">
            {eyebrow ?? ts('commonQuestions')}
          </p>
          <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          )}
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={Math.min(i, 5) * 60}>
              <details className="group py-5 sm:py-6">
                <summary className="cursor-pointer list-none font-serif text-xl leading-snug text-foreground marker:content-none [&::-webkit-details-marker]:hidden sm:text-2xl">
                  <span className="flex items-start justify-between gap-6">
                    <span>{item.question}</span>
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        {footerLink && (
          <Reveal delay={200} className="mt-10">
            <Link
              href={footerLink.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
            >
              {footerLink.label}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
