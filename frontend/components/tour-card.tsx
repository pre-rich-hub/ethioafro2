import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Tour } from '@/lib/site'

export function TourCard({
  tour: t,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: {
  tour: Tour
  sizes?: string
}) {
  return (
    <Link
      href={`/tours/${t.slug}`}
      className="group relative block overflow-hidden rounded-sm h-[360px] sm:h-[440px] lg:h-[480px] w-full"
    >
      <Image
        src={t.image || '/placeholder.svg'}
        alt={t.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent z-10" />

      {/* Bottom Text Overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center sm:p-7 lg:p-8 z-20">
        {/* Metadata tag line */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-light">
          {t.days} · {t.group} · {t.style}
        </p>

        {/* Title */}
        <h3 className="font-serif text-2xl text-background sm:text-3xl leading-tight">
          {t.title}
        </h3>

        {/* Teaser text, always visible */}
        <p className="mt-2 max-w-[44ch] text-pretty text-xs leading-relaxed text-background/85 sm:text-sm font-sans">
          {t.teaser}
        </p>

        {/* See the Journey link */}
        <div className="mt-5 inline-flex items-center gap-2.5 rounded-sm border border-accent-light/70 bg-charcoal/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-light backdrop-blur-sm transition-all duration-300 group-hover:border-accent-light group-hover:bg-accent-light group-hover:text-charcoal sm:text-[11px]">
          <span>See the Journey</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
