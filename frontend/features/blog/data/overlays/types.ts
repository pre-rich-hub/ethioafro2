import type { Post } from '@/features/blog/types/blog.types'

/** Card + meta fields for Step 4. body essays stay English until pass 2. */
export type PostCardCopy = Pick<Post, 'title' | 'excerpt' | 'category' | 'directAnswer'>

export type PostOverlayMap = Record<string, Partial<PostCardCopy>>
