'use client'

import { navDropdownKeys, navLinks } from '@/lib/constants/routes'
import { cn } from '@/lib/utils/cn'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { DestinationsDropdown } from './DestinationsDropdown'
import { ExperiencesDropdown } from './ExperiencesDropdown'
import { ToursDropdown } from './ToursDropdown'
import type { NavigationState } from './useNavigation'

type Props = Pick<NavigationState, 'tone' | 'isActive' | 'dismiss' | 'dismissed' | 'setDismissed'>

export function DesktopNavigation({ tone, isActive, dismiss, dismissed, setDismissed }: Props) {
  const t = useTranslations('Nav')

  return (
    <ul className="hidden items-center gap-5 lg:flex xl:gap-9">
      {navLinks.map((link) => {
        const active = isActive(link.href)
        const hasDropdown = (navDropdownKeys as readonly string[]).includes(link.key)
        return (
          <li
            key={link.href}
            className="group py-5"
            onMouseLeave={() => setDismissed(null)}
          >
            <Link
              href={link.href}
              onClick={dismiss(link.key)}
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
              {t(link.key)}
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

            {link.key === 'destinations' && (
              <DestinationsDropdown dismissed={dismissed} dismiss={dismiss} />
            )}

            {link.key === 'tours' && (
              <ToursDropdown dismissed={dismissed} dismiss={dismiss} />
            )}

            {link.key === 'experiences' && (
              <ExperiencesDropdown dismissed={dismissed} dismiss={dismiss} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
