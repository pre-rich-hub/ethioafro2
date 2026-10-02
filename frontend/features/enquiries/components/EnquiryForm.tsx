'use client'

import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedActivities } from '@/features/experiences/utils/experience.utils'
import { journeyStyles } from '@/features/enquiries/data/journey-styles'
import { submitContact } from '@/features/enquiries/api/enquiries.api'

const styleKey = {
  Luxury: 'styleLuxury',
  Climbing: 'styleClimbing',
  Photography: 'stylePhotography',
  Cultural: 'styleCultural',
  Wildlife: 'styleWildlife',
  Trekking: 'styleTrekking',
  Festival: 'styleFestival',
  Family: 'styleFamily',
} as const

export function EnquiryForm({
  defaultStyles = ['Luxury'],
  defaultActivities = [],
  subject,
}: {
  defaultStyles?: string[]
  defaultActivities?: string[]
  subject?: string
}) {
  const locale = useLocale()
  const t = useTranslations('Enquiry')
  const activities = getLocalizedActivities(locale)
  const [selected, setSelected] = useState<string[]>(defaultStyles)
  const [extras, setExtras] = useState<string[]>(defaultActivities)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggle = (style: string) =>
    setSelected((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
    )
  const toggleExtra = (name: string) =>
    setExtras((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    )

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center border border-border bg-card px-6 py-16 text-center">
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-3xl text-foreground">{t('successTitle')}</h3>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {t('successBody')}
        </p>
      </div>
    )
  }

  return (
    <div className="border border-border bg-card p-6 shadow-[0_28px_70px_-40px_oklch(0.185_0.012_58/0.4)] sm:p-8 lg:p-10">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setError(null)
          const data = new FormData(e.currentTarget)
          const name = String(data.get('name') ?? '').trim()
          const email = String(data.get('email') ?? '').trim()
          const when = String(data.get('when') ?? '').trim()
          const travellers = String(data.get('travellers') ?? '').trim()
          const dream = String(data.get('dream') ?? '').trim()

          const lines: string[] = []
          if (subject) lines.push(`Journey: ${subject}`)
          if (when) lines.push(`Preferred dates: ${when}`)
          if (travellers) lines.push(`Travellers: ${travellers}`)
          if (selected.length) lines.push(`Journey styles: ${selected.join(', ')}`)
          if (extras.length) lines.push(`Experiences to add: ${extras.join(', ')}`)
          if (dream) lines.push('')
          lines.push(dream)

          try {
            await submitContact({ name, email, message: lines.join('\n') })
            setSubmitted(true)
          } catch (err) {
            setError(
              err instanceof Error ? err.message : t('errorGeneric'),
            )
          }
        }}
        className="space-y-6"
      >
        {subject ? (
          <p className="border-l-2 border-accent bg-muted/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
            {t.rich('aboutSubject', {
              subject,
              strong: (chunks) => (
                <span className="font-medium text-foreground">{chunks}</span>
              ),
            })}
          </p>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t('nameLabel')} id="name">
            <input
              id="name"
              name="name"
              required
              className="input"
              placeholder={t('namePlaceholder')}
            />
          </Field>
          <Field label={t('emailLabel')} id="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input"
              placeholder={t('emailPlaceholder')}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t('whenLabel')} id="when">
            <input
              id="when"
              name="when"
              className="input"
              placeholder={t('whenPlaceholder')}
            />
          </Field>
          <Field label={t('travellersLabel')} id="travellers">
            <input
              id="travellers"
              name="travellers"
              className="input"
              placeholder={t('travellersPlaceholder')}
            />
          </Field>
        </div>

        <div>
          <span className="mb-3 block text-sm font-medium text-foreground">
            {t('stylesLabel')}
          </span>
          <div className="flex flex-wrap gap-2">
            {journeyStyles.map((style) => {
              const active = selected.includes(style)
              const key = styleKey[style as keyof typeof styleKey]
              return (
                <button
                  type="button"
                  key={style}
                  aria-pressed={active}
                  onClick={() => toggle(style)}
                  className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {key ? t(key) : style}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <span className="mb-3 block text-sm font-medium text-foreground">
            {t('experiencesLabel')}{' '}
            <span className="font-normal text-muted-foreground">{t('optional')}</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {activities.map((a) => {
              const active = extras.includes(a.short)
              return (
                <button
                  type="button"
                  key={a.slug}
                  aria-pressed={active}
                  onClick={() => toggleExtra(a.short)}
                  className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    active
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent hover:text-foreground'
                  }`}
                >
                  {a.short}
                </button>
              )
            })}
          </div>
        </div>

        <Field label={t('dreamLabel')} id="dream">
          <textarea
            id="dream"
            name="dream"
            rows={4}
            className="input resize-none"
            placeholder={t('dreamPlaceholder')}
          />
        </Field>

        {error ? (
          <p className="text-xs text-red-600" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2.5 bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-charcoal sm:w-auto"
        >
          {t('submit')}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground">{t('privacyNote')}</p>
      </form>
    </div>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
