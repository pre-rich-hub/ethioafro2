import type { Metadata } from 'next'
import { AdminTestimonials } from '@/features/admin/components/testimonials/TestimonialsClient'

export const metadata: Metadata = {
  title: 'Testimonials',
  robots: { index: false, follow: false },
}

export default function AdminTestimonialsPage() {
  return <AdminTestimonials />
}
