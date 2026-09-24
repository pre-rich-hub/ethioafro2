'use client'

import { contact } from '@/lib/constants/contact'
import { navLinks } from '@/lib/constants/routes'
import { cn } from '@/lib/utils/cn'
import { ArrowRight, Globe, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { languages } from './navigation.data'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'open' | 'setOpen' | 'isActive' | 'lang' | 'setLang'>

export function MobileNavigation({ open, setOpen, isActive, lang, setLang }: Props) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 flex flex-col bg-background transition-all duration-300 lg:hidden',
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
      aria-hidden={!open}
    >
      <div className="flex-1 overflow-y-auto px-5 pb-8 pt-24 sm:px-6">
        <ul className="border-t border-border">
          {navLinks.map((link, i) => {
            const active = isActive(link.href)
            return (
              <li key={link.href} className="border-b border-border">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
                  className={cn(
                    'flex items-center justify-between gap-4 py-5 transition-all duration-300',
                    open
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-3 opacity-0',
                  )}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'font-serif text-3xl sm:text-4xl',
                        active ? 'text-primary' : 'text-foreground',
                      )}
                    >
                      {link.label}
                    </span>
                  </span>
                  <ArrowRight
                    className={cn(
                      'h-5 w-5 shrink-0',
                      active ? 'text-accent' : 'text-muted-foreground',
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-8">
          <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Globe className="h-3.5 w-3.5" />
            Language
          </span>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm transition-colors duration-200',
                  l.code === lang.code
                    ? 'border-accent bg-accent/10 text-foreground'
                    : 'border-border text-muted-foreground',
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-3"
          >
            <Phone className="h-4 w-4 text-accent" />
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3"
          >
            <Mail className="h-4 w-4 text-accent" />
            {contact.email}
          </a>
        </div>
      </div>

      <div className="border-t border-border bg-background px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-pop px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-pop-foreground"
        >
          Start Planning
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
