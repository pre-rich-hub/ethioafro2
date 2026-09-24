import type { Metadata } from 'next'
import { AdminGallery } from '@/features/admin/components/gallery/GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  robots: { index: false, follow: false },
}

export default function AdminGalleryPage() {
  return <AdminGallery />
}
