'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Globe,
  Check,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, contact, destinations, tours } from '@/lib/site'

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'ES', label: 'Español' },
  { code: 'FR', label: 'Français' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'ZH', label: '中文' },
]

function Wordmark({
  tone,
  onClick,
}: {
  tone: 'light' | 'dark'
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Simien Ethiopia Tours — home"
      className="flex items-center"
    >
      <img
        src="/images/logo.png"
        alt="Simien Ethiopia Tours Logo"
        className="h-14 w-14 rounded-full object-cover border border-accent/25 shadow-md transition-transform duration-300 hover:scale-105"
      />
    </Link>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setLangOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const tone: 'light' | 'dark' = scrolled ? 'dark' : 'light'

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

          <div className="flex items-center gap-8 xl:gap-10">
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const hasDropdown = link.label === 'Destinations' || link.label === 'Tours'
              return (
                <li key={link.href} className="group py-5">
                  <Link
                    href={link.href}
                    className={cn(
                      'relative py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 flex items-center gap-1',
                      tone === 'dark'
                        ? active
                          ? 'text-foreground'
                          : 'text-foreground/65 hover:text-foreground'
                        : active
                          ? 'text-background'
                          : 'text-background/75 hover:text-background',
                    )}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300',
                        active ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                  </Link>

                  {/* Dropdowns */}
                  {link.label === 'Destinations' && (
                    <div className="absolute left-0 top-full w-full border-b border-border/60 bg-background/98 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ease-out invisible -translate-y-3 pointer-events-none group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto z-45 text-foreground before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/60 before:to-transparent">
                      <div className="shell grid grid-cols-[1fr_3.4fr] gap-16 py-12">
                        <div className="flex flex-col justify-between border-r border-border/60 pr-10">
                          <div>
                            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                              <span className="h-px w-8 bg-accent" />
                              Ethiopia
                            </p>
                            <h3 className="font-serif text-[2rem] leading-[1.1] text-foreground mb-5">
                              Our Destinations
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              From monolithic churches carved from solid rock
                              to tectonic landscapes at the edge of the world
                              — the ancient cradle of civilization, explored
                              slowly.
                            </p>
                          </div>
                          <Link
                            href="/destinations"
                            className="group/cta mt-8 inline-flex items-center gap-2.5 self-start border-b border-accent/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-colors duration-300 hover:border-accent"
                          >
                            View All Destinations
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-4 gap-7">
                          {destinations.slice(0, 4).map((d) => (
                            <Link
                              key={d.slug}
                              href={`/destinations/${d.slug}`}
                              className="group/item flex flex-col gap-4"
                            >
                              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm shadow-sm transition-shadow duration-300 group-hover/item:shadow-lg">
                                <Image
                                  src={d.image}
                                  alt={d.name}
                                  fill
                                  sizes="220px"
                                  className="object-cover transition-transform duration-700 ease-out group-hover/item:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                                <span className="absolute left-3 top-3 rounded-sm bg-background/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                                  {d.tag}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-serif text-base text-foreground transition-colors duration-300 group-hover/item:text-accent">
                                  {d.name}
                                </h4>
                                <p className="mt-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                                  {d.region}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {link.label === 'Tours' && (
                    <div className="absolute left-0 top-full w-full border-b border-border/60 bg-background/98 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ease-out invisible -translate-y-3 pointer-events-none group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto z-45 text-foreground before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/60 before:to-transparent">
                      <div className="shell grid grid-cols-[1fr_3.4fr] gap-16 py-12">
                        <div className="flex flex-col justify-between border-r border-border/60 pr-10">
                          <div>
                            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                              <span className="h-px w-8 bg-accent" />
                              Curated Journeys
                            </p>
                            <h3 className="font-serif text-[2rem] leading-[1.1] text-foreground mb-5">
                              Signature Itineraries
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              Private expeditions built around expert
                              guiding, boutique lodges and access that cannot
                              be booked online.
                            </p>
                          </div>
                          <Link
                            href="/tours"
                            className="group/cta mt-8 inline-flex items-center gap-2.5 self-start border-b border-accent/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-colors duration-300 hover:border-accent"
                          >
                            Explore All Tours
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-7">
                          {tours.slice(0, 3).map((t) => (
                            <Link
                              key={t.slug}
                              href={`/tours/${t.slug}`}
                              className="group/item flex flex-col gap-4"
                            >
                              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-sm transition-shadow duration-300 group-hover/item:shadow-lg">
                                <Image
                                  src={t.image}
                                  alt={t.title}
                                  fill
                                  sizes="280px"
                                  className="object-cover transition-transform duration-700 ease-out group-hover/item:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                                <span className="absolute left-3 top-3 rounded-sm bg-accent px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-accent-foreground">
                                  {t.days}
                                </span>
                                <span className="absolute bottom-3 right-3 font-serif text-sm text-background">
                                  {t.from.split(' per ')[0]}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-serif text-base text-foreground transition-colors duration-300 group-hover/item:text-accent line-clamp-1">
                                  {t.title}
                                </h4>
                                <p className="mt-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                                  {t.style}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
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

            <Link
              href="/contact"
              className="hidden rounded-sm bg-pop px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-pop-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-pop/90 lg:ml-6 lg:inline-block xl:ml-10"
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
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-background transition-all duration-500 lg:hidden',
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
                    style={{ transitionDelay: open ? `${120 + i * 55}ms` : '0ms' }}
                    className={cn(
                      'flex items-center justify-between gap-4 py-5 transition-all duration-500',
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
    </>
  )
}
