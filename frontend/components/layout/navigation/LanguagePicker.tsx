'use client'

import { cn } from '@/lib/utils/cn'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { languages } from './navigation.data'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'tone' | 'langRef' | 'langOpen' | 'setLangOpen' | 'lang' | 'setLang'>

export function LanguagePicker({ tone, langRef, langOpen, setLangOpen, lang, setLang }: Props) {
  return (
    <div ref={langRef} className="relative hidden sm:block">
      <button
        aria-label="Change language"
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
        <span className="text-[11px] font-semibold tracking-[0.1em]">
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
        aria-label="Language"
        className={cn(
          'absolute right-0 top-12 w-44 overflow-hidden rounded-sm border border-border bg-popover shadow-xl transition-all duration-200',
          langOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        {languages.map((l) => (
          <li key={l.code}>
            <button
              role="option"
              aria-selected={l.code === lang.code}
              onClick={() => {
                setLang(l)
                setLangOpen(false)
              }}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-popover-foreground/80 transition-colors duration-200 hover:bg-muted"
            >
              <span>{l.label}</span>
              {l.code === lang.code && (
                <Check className="h-4 w-4 text-accent" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
