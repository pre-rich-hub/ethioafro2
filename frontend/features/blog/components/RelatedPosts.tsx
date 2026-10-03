import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Reveal } from '@/components/common/Reveal'
import { PostCard } from '@/features/blog/components/BlogCard'
import type { Post } from '@/features/blog/types/blog.types'


type Props = {
  more: Post[]
}

export function RelatedPosts({ more }: Props) {
  const t = useTranslations('Blog')

  return (
    <section className="border-t border-border bg-muted/40">
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4 text-accent sm:mb-5">
                {t('moreEyebrow')}
              </p>
              <h2 className="text-balance text-3xl leading-[1.1] text-foreground sm:text-4xl">
                {t('moreTitle')}
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent sm:text-xs"
            >
              {t('moreAll')}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  )
}
