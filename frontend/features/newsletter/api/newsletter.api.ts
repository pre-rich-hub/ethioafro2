import { endpoints } from '@/lib/api/endpoints'
import { request } from '@/lib/api/client'

export async function subscribe(email: string): Promise<void> {
  await request<null>(endpoints.subscribe, {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
