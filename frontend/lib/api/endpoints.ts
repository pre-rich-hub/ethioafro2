export const endpoints = {
  tours: '/api/v1/tours',
  tourBySlug: (slug: string) => `/api/v1/tours/slug/${encodeURIComponent(slug)}`,
  contact: '/api/v1/contact',
  subscribe: '/api/v1/subscribe',
  assistant: '/api/v1/assistant',
  auth: {
    login: '/api/v1/auth/login',
  },
} as const
