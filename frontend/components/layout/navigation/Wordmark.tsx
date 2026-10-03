'use client'

import { cn } from '@/lib/utils/cn'
import { company } from '@/lib/seo/entities'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

// Two colourways of the same lockup: light lettering for the dark hero,
// dark lettering once the header turns cream. Both stay mounted and
// cross-fade so the swap never waits on an image load.
const logoProps = {
  width: 747,
  height: 240,
  priority: true,
  sizes: '(min-width: 640px) 200px, 162px',
}
const logoClass = 'h-[52px] w-auto transition-opacity duration-500 sm:h-16'

export function Wordmark({
  tone,
  onClick,
}: {
  tone: 'light' | 'dark'
  onClick?: () => void
}) {
  const t = useTranslations('Common')

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={t('homeAria', { name: company.name })}
      className="relative flex items-center transition-transform duration-300 hover:scale-[1.03]"
    >
      <Image
        {...logoProps}
        src="/images/simien-logo-light.png"
        alt={`${company.name} logo`}
        className={cn(logoClass, tone === 'dark' && 'opacity-0')}
      />
      <Image
        {...logoProps}
        src="/images/simien-logo-dark.png"
        alt=""
        aria-hidden
        className={cn(logoClass, 'absolute left-0', tone === 'light' && 'opacity-0')}
      />
    </Link>
  )
}
