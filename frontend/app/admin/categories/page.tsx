import type { Metadata } from 'next'
import { AdminTourCategories } from '@/features/admin/components/categories/CategoriesClient'

export const metadata: Metadata = {
  title: 'Tour Categories',
  robots: { index: false, follow: false },
}

export default function AdminCategoriesPage() {
  return <AdminTourCategories />
}
