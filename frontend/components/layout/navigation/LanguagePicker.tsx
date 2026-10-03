'use client'

import { cn } from '@/lib/utils/cn'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useId, useRef } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { languages } from './navigation.data'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'tone' | 'langRef' | 'langOpen' | 'setLangOpen' | 'lang'>

export function LanguagePicker({ tone, langRef, langOpen, setLangOpen, lang }: Props) {
  const t = useTranslations('Nav')
  const pathname = usePathname()
  const listId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      ref={langRef}
      className="relative hidden sm:block"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setLangOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && langOpen) {
          event.preventDefault()
          setLangOpen(false)
          buttonRef.current?.focus()
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={t('changeLanguage')}
        aria-controls={listId}
        aria-expanded={langOpen}
        onClick={() => setLangOpen((v) => !v)}
        className={cn(
          'flex h-10 items-center gap-1.5 rounded-full px-3 transition-colors duration-300',
          tone === 'dark'
            ? 'text-foreground/70 hover:bg-muted'
            : 'text-background/80 hover:bg-background/10',
        )}
      >
        <Globe aria-hidden="true" className="h-[17px] w-[17px]" />
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">
          {lang.code}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-300',
            langOpen && 'rotate-180',
          )}
        />
      </button>

      <ul
        id={listId}
        hidden={!langOpen}
        aria-label={t('language')}
        className="absolute right-0 top-12 w-44 overflow-hidden rounded-sm border border-border bg-popover shadow-xl"
      >
        {languages.map((l) => (
          <li key={l.code}>
            <Link
              href={pathname}
              locale={l.code}
              hrefLang={l.code}
              aria-current={l.code === lang.code ? 'page' : undefined}
              onClick={() => setLangOpen(false)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-popover-foreground/80 transition-colors duration-200 hover:bg-muted"
            >
              <span>{l.label}</span>
              {l.code === lang.code && (
                <Check aria-hidden="true" className="h-4 w-4 text-accent" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
