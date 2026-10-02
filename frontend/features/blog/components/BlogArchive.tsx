import { getLocale, getTranslations } from 'next-intl/server'
import { BlogList } from '@/features/blog/components/BlogList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getLocalizedPosts } from '@/features/blog/utils/blog.utils'

export async function BlogArchive() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'Blog' })
  const posts = getLocalizedPosts(locale)

  return (
    <section>
        <div className="shell py-16 sm:py-20 lg:py-28">
          <SectionHeading
            eyebrow={t('archiveEyebrow')}
            title={t('archiveTitle')}
            aside={t('archiveAside')}
          />
          <BlogList posts={posts} />
        </div>
      </section>
  )
}
