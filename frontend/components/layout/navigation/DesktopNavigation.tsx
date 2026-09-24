'use client'

import { navLinks } from '@/lib/constants/routes'
import { cn } from '@/lib/utils/cn'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { DestinationsDropdown } from './DestinationsDropdown'
import { ExperiencesDropdown } from './ExperiencesDropdown'
import { ToursDropdown } from './ToursDropdown'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'tone' | 'isActive' | 'dismiss' | 'dismissed' | 'setDismissed'>

export function DesktopNavigation({ tone, isActive, dismiss, dismissed, setDismissed }: Props) {
  return (
    <ul className="hidden items-center gap-5 lg:flex xl:gap-9">
      {navLinks.map((link) => {
        const active = isActive(link.href)
        const hasDropdown = ['Destinations', 'Tours', 'Experiences'].includes(link.label)
        return (
          <li
            key={link.href}
            // On narrower desktops the logo already links home, so the
            // Home item is dropped to keep every label on one line.
            className={cn('group py-5', link.href === '/' && 'hidden xl:block')}
            onMouseLeave={() => setDismissed(null)}
          >
            <Link
              href={link.href}
              onClick={dismiss(link.label)}
              className={cn(
                'relative flex items-center gap-1 whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300',
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
              <DestinationsDropdown dismissed={dismissed} dismiss={dismiss} />
            )}

            {link.label === 'Tours' && (
              <ToursDropdown dismissed={dismissed} dismiss={dismiss} />
            )}

            {link.label === 'Experiences' && (
              <ExperiencesDropdown dismissed={dismissed} dismiss={dismiss} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
