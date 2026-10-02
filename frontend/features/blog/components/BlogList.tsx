'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/common/Reveal'
import { PostCard } from '@/features/blog/components/BlogCard'
import { type Post } from '@/features/blog/types/blog.types'

export function BlogList({ posts }: { posts: Post[] }) {
  const t = useTranslations('Blog')
  // `null` is the "all" filter, so the label itself can be localized freely.
  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts],
  )
  const [active, setActive] = useState<string | null>(null)

  const visible = active === null ? posts : posts.filter((p) => p.category === active)

  return (
    <div>
      <div
        role="group"
        aria-label={t('filterAria')}
        className="mb-12 flex flex-wrap gap-2 sm:mb-16"
      >
        {[null, ...categories].map((c) => {
          const on = c === active
          return (
            <button
              key={c ?? 'all'}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c)}
              className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[11px] ${
                on
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {c ?? t('allWriting')}
            </button>
          )
        })}
      </div>

      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 90}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          {t('empty')}
        </p>
      )}
    </div>
  )
}
