import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PostCard } from '@/features/blog/components/BlogCard'
import { getLocale, getTranslations } from 'next-intl/server'
import { getLocalizedPosts } from '@/features/blog/utils/blog.utils'

export async function JournalTeaser() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'Blog' })
  const latest = getLocalizedPosts(locale).slice(0, 3)

  return (
    <section className="shell py-20 lg:py-32">
      <SectionHeading
        eyebrow={t('teaserEyebrow')}
        title={t('teaserTitle')}
        aside={t('teaserAside')}
        action={{ href: '/blog', label: t('teaserCta') }}
      />

      <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
        {latest.map((post, i) => (
          <Reveal key={post.slug} delay={i * 100}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
