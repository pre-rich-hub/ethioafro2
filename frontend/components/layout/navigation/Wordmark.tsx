import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import Link from 'next/link'

export function Wordmark({
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
      <Image
        src="/images/logo.png"
        alt="Simien Ethiopia Tours Logo"
        width={56}
        height={56}
        priority
        className="h-14 w-14 rounded-full object-cover border border-accent/25 shadow-md transition-transform duration-300 hover:scale-105"
      />
      <span className="ml-3 flex flex-col">
        <span
          className={cn(
            'font-serif text-2xl leading-none transition-colors duration-300',
            tone === 'dark' ? 'text-foreground' : 'text-background',
          )}
        >
          Simien Ethiopia
        </span>
        <span
          className={cn(
            'mt-1 text-[9px] font-semibold uppercase tracking-[0.28em]',
            tone === 'dark' ? 'text-accent' : 'text-accent-light',
          )}
        >
          Tours
        </span>
      </span>
    </Link>
  )
}
