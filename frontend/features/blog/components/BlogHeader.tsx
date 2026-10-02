import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { ChevronRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import type { Post } from '@/features/blog/types/blog.types'
import { cloudinaryImage } from '@/lib/cloudinary'
import { formatDisplayDate } from '@/lib/i18n/format-date'

type Props = {
  post: Post
}

export function BlogHeader({ post }: Props) {
  const tc = useTranslations('Crumbs')
  const tn = useTranslations('Nav')
  const locale = useLocale()

  return (
    <header className="border-b border-border">
      <div className="shell pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pt-40">
        <Reveal className="mx-auto max-w-3xl">
          <nav
            aria-label={tc('ariaLabel')}
            className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              {tc('home')}
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
            <Link href="/blog" className="transition-colors hover:text-primary">
              {tn('journal')}
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
            <span className="text-foreground/80">{post.title}</span>
          </nav>

          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-accent">{post.category}</span>
            <span className="h-3 w-px bg-border" aria-hidden />
            {formatDisplayDate(post.date, locale)}
            <span className="h-3 w-px bg-border" aria-hidden />
            {post.readTime}
          </p>

          <h1 className="mt-5 text-balance text-[2rem] font-medium leading-[1.1] text-foreground sm:text-4xl lg:text-[3.25rem]">
            {post.title}
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-9 flex items-center gap-4 border-t border-border pt-7">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
              <Image
                src={cloudinaryImage('coffee-cupping-and-ceremony', 200)}
                alt=""
                aria-hidden
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-sm font-medium text-foreground">{post.author}</span>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {post.authorRole}
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
