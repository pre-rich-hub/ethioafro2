import { BlogList } from '@/features/blog/components/BlogList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { posts } from '@/features/blog/data/blog.data'


export function BlogArchive() {
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
