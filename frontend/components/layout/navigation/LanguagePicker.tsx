'use client'

import { cn } from '@/lib/utils/cn'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { languages } from './navigation.data'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'tone' | 'langRef' | 'langOpen' | 'setLangOpen' | 'lang'>

export function LanguagePicker({ tone, langRef, langOpen, setLangOpen, lang }: Props) {
  const t = useTranslations('Nav')
  const pathname = usePathname()

  return (
    <div ref={langRef} className="relative hidden sm:block">
      <button
        type="button"
        aria-label={t('changeLanguage')}
        aria-haspopup="listbox"
        aria-expanded={langOpen}
        onClick={() => setLangOpen((v) => !v)}
        className={cn(
          'flex h-10 items-center gap-1.5 rounded-full px-3 transition-colors duration-300',
          tone === 'dark'
            ? 'text-foreground/70 hover:bg-muted'
            : 'text-background/80 hover:bg-background/10',
        )}
      >
        <Globe className="h-[17px] w-[17px]" />
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase">
          {lang.code}
        </span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-300',
            langOpen && 'rotate-180',
          )}
        />
      </button>

      <ul
        role="listbox"
        aria-label={t('language')}
        className={cn(
          'absolute right-0 top-12 w-44 overflow-hidden rounded-sm border border-border bg-popover shadow-xl transition-all duration-200',
          langOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        {languages.map((l) => (
          <li key={l.code}>
            <Link
              href={pathname}
              locale={l.code}
              hrefLang={l.code}
              role="option"
              aria-selected={l.code === lang.code}
              onClick={() => setLangOpen(false)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-popover-foreground/80 transition-colors duration-200 hover:bg-muted"
            >
              <span>{l.label}</span>
              {l.code === lang.code && (
                <Check className="h-4 w-4 text-accent" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
