import { endpoints } from '@/lib/api/endpoints'
import type { LoginCredentials } from '../types/auth.types'

export function login({ email, password }: LoginCredentials) {
  return fetch(endpoints.auth.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  })
}
