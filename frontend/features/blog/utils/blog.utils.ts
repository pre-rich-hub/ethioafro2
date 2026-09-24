import { posts } from '@/features/blog/data/blog.data'

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
