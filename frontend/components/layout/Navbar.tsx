'use client'

import { cn } from '@/lib/utils/cn'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { DesktopNavigation } from './navigation/DesktopNavigation'
import { LanguagePicker } from './navigation/LanguagePicker'
import { MobileNavigation } from './navigation/MobileNavigation'
import { useNavigation } from './navigation/useNavigation'
import { Wordmark } from './navigation/Wordmark'

export function Navbar() {
  const {
    scrolled,
    open,
    setOpen,
    langOpen,
    setLangOpen,
    dismissed,
    setDismissed,
    lang,
    setLang,
    langRef,
    dismiss,
    isActive,
    tone,
  } = useNavigation()

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border bg-background/92 backdrop-blur-xl'
            : 'bg-gradient-to-b from-charcoal/55 to-transparent',
        )}
      >
        <nav
          className={cn(
            'shell flex items-center justify-between transition-all duration-500',
            scrolled ? 'h-16 sm:h-[68px]' : 'h-[68px] sm:h-20',
          )}
        >
          <Wordmark tone={open ? 'dark' : tone} />

          <div className="flex items-center gap-5 xl:gap-10">
            <DesktopNavigation
              tone={tone}
              isActive={isActive}
              dismiss={dismiss}
              dismissed={dismissed}
              setDismissed={setDismissed}
            />

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguagePicker
                tone={tone}
                langRef={langRef}
                langOpen={langOpen}
                setLangOpen={setLangOpen}
                lang={lang}
                setLang={setLang}
              />

              <Link
                href="/contact"
                className="hidden whitespace-nowrap rounded-sm bg-pop px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-pop-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-pop/90 lg:ml-1 lg:inline-block xl:ml-10 xl:px-6"
              >
                Start Planning
              </Link>

              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden',
                  open
                    ? 'border-border text-foreground'
                    : tone === 'dark'
                      ? 'border-border text-foreground hover:bg-muted'
                      : 'border-background/30 text-background hover:bg-background/10',
                )}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <MobileNavigation open={open} setOpen={setOpen} isActive={isActive} lang={lang} setLang={setLang} />
    </>
  )
}
