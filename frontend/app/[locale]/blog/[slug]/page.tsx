import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/common/Reveal'
import { PostCard } from '@/features/blog/components/BlogCard'
import { CtaBand } from '@/features/enquiries'
import { getLocalizedPosts, getPost } from '@/features/blog/utils/blog.utils'
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
  const locale = await getLocale()
  const p = getPost(slug, locale)
  if (!p) {
    return { title: 'Article not found', robots: { index: false, follow: false } }
  }
  return {
    ...buildPageMetadata({
      title: p.title,
      description: p.excerpt,
      path: `/blog/${slug}`,
      locale,
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
  const locale = await getLocale()
  const post = getPost(slug, locale)
  if (!post) notFound()
  const tc = await getTranslations({ locale, namespace: 'Crumbs' })
  const tn = await getTranslations({ locale, namespace: 'Nav' })
  const tb = await getTranslations({ locale, namespace: 'Blog' })

  const localizedPosts = getLocalizedPosts(locale)
  const index = localizedPosts.findIndex((p) => p.slug === post.slug)
  const next = localizedPosts[(index + 1) % localizedPosts.length]
  const more = localizedPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const related = getRelatedCatalogueForPost(post.slug, locale)

  return (
    <article>
      <JsonLd
        data={graphJsonLd(
          organizationJsonLd(),
          articleJsonLd(post, locale),
          breadcrumbJsonLd(
            [
              { name: tc('home'), path: '/' },
              { name: tn('journal'), path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ],
            locale,
          ),
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
        title={tb('articleCtaTitle')}
        text={tb('articleCtaText')}
        secondary={{ label: tb('articleCtaSecondary'), href: '/destinations' }}
        image={post.image}
      />
    </article>
  )
}
