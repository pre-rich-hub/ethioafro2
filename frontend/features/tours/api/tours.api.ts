import { endpoints } from '@/lib/api/endpoints'
import type { ToursParams } from '@/features/tours/types/tour-api.types'
import type { ToursPage } from '@/features/tours/types/tour-api.types'
import { request } from '@/lib/api/client'
import { queryString } from '@/lib/api/client'
import type { ApiTour } from '@/features/tours/types/tour-api.types'

export async function getTours(params: ToursParams = {}): Promise<ToursPage> {
  return request<ToursPage>(`${endpoints.tours}${queryString(params)}`)
}

export async function getTourBySlug(slug: string): Promise<ApiTour> {
  return request<ApiTour>(endpoints.tourBySlug(slug))
}
