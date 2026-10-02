export const navLinks = [
  { key: 'destinations', href: '/destinations' },
  { key: 'tours', href: '/tours' },
  { key: 'experiences', href: '/experiences' },
  { key: 'journal', href: '/blog' },
  { key: 'about', href: '/about' },
] as const

export type NavLinkKey = (typeof navLinks)[number]['key']

export const navDropdownKeys = ['destinations', 'tours', 'experiences'] as const satisfies readonly NavLinkKey[]
