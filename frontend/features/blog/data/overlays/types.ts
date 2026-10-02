import type { Post } from '@/features/blog/types/blog.types'

/** Card + Pass-2 article body fields. */
export type PostCardCopy = Pick<
  Post,
  'title' | 'excerpt' | 'category' | 'directAnswer' | 'readTime' | 'authorRole' | 'body'
>

export type PostOverlayMap = Record<string, Partial<PostCardCopy>>
