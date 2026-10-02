import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { PostCard } from '@/features/blog/components/BlogCard'
import { CtaBand } from '@/features/enquiries'
import { getPost } from '@/features/blog/utils/blog.utils'
import { posts } from '@/features/blog/data/blog.data'

import { BlogHeader } from '@/features/blog/components/BlogHeader'
import { RelatedPosts } from '@/features/blog/components/RelatedPosts'
import { BlogLeadImage } from '@/features/blog/components/BlogLeadImage'
import { BlogBody } from '@/features/blog/components/BlogBody'
import { BlogRelatedCatalogue } from '@/features/blog/components/BlogRelatedCatalogue'
import { getRelatedCatalogueForPost } from '@/features/blog/utils/blog-related.utils'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  articleJsonLd,
  breadcrumbJsonLd,
  graphJsonLd,
  organizationJsonLd,
} from '@/lib/seo/json-ld'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) {
    return { title: 'Article not found', robots: { index: false, follow: false } }
  }
  return {
    ...buildPageMetadata({
      title: p.title,
      description: p.excerpt,
      path: `/blog/${slug}`,
      image: p.image,
      imageAlt: p.title,
      type: 'article',
    }),
    authors: [{ name: p.author }],
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const index = posts.findIndex((p) => p.slug === post.slug)
  const next = posts[(index + 1) % posts.length]
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const related = getRelatedCatalogueForPost(post.slug)

  return (
    <article>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />
      {/* Header */}
      <BlogHeader post={post} />

      {/* Lead image */}
      <BlogLeadImage post={post} />

      {/* Body */}
      <BlogBody post={post} next={next} />

      <BlogRelatedCatalogue destinations={related.destinations} tours={related.tours} />

      {/* More reading */}
      <RelatedPosts more={more} />

      <CtaBand
        title="Ready to see it for yourself?"
        text="Every essay here comes out of a journey we designed for someone. Tell us what you want yours to feel like."
        secondary={{ label: 'See Destinations', href: '/destinations' }}
        image={post.image}
      />
    </article>
  )
}
