import type { Metadata } from 'next'
import { AdminBlog } from '@/features/admin/components/blog/BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  robots: { index: false, follow: false },
}

export default function AdminBlogPage() {
  return <AdminBlog />
}
