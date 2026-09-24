'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { languages } from './navigation.data'

export function useNavigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  // Hover dropdowns are pure CSS, so after a click the pointer is still over
  // the menu and it would stay open on the new page. Clicking any link inside
  // marks that dropdown dismissed until the pointer leaves it.
  const [dismissed, setDismissed] = useState<string | null>(null)
  const [lang, setLang] = useState(languages[0])
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [pathname])

  const dismiss = (label: string) => () => setDismissed(label)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setLangOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const tone: 'light' | 'dark' = scrolled ? 'dark' : 'light'


  return {


    scrolled,


    open,


    setOpen,


    langOpen,


    setLangOpen,


    dismissed,


    setDismissed,


    lang,


    setLang,


    langRef,


    dismiss,


    isActive,


    tone,


  }
}

export type NavigationState = ReturnType<typeof useNavigation>
