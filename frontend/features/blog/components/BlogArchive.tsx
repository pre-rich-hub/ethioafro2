import { getLocale } from 'next-intl/server'
import { BlogList } from '@/features/blog/components/BlogList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getLocalizedPosts } from '@/features/blog/utils/blog.utils'

export async function BlogArchive() {
  const locale = await getLocale()
  const posts = getLocalizedPosts(locale)

  return (
    <section>
        <div className="shell py-16 sm:py-20 lg:py-28">
          <SectionHeading
            eyebrow="Archive"
            title="Everything we've written"
            aside="Six pieces so far, each one written to actually answer something."
          />
          <BlogList posts={posts} />
        </div>
      </section>
  )
}
