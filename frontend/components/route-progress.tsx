'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Instant feedback for every tap. A thin gold bar at the top of the viewport
// starts the moment an internal link is clicked and completes when the new
// route renders, and touched links and buttons get a pressed state — so a tap
// is always acknowledged immediately, even on a slow connection.
export function RouteProgress() {
  const pathname = usePathname()
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest('a')
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin) return
      // Same page (including in-page anchors): nothing to load.
      if (url.pathname === window.location.pathname) return
      setState('loading')
      if (safety.current) clearTimeout(safety.current)
      safety.current = setTimeout(() => setState('idle'), 10_000)
    }
    // Touch feedback: :active is unreliable across mobile browsers, so mark
    // the touched link or button ourselves and style [data-pressed] in CSS.
    let pressed: Element | null = null
    const release = () => {
      pressed?.removeAttribute('data-pressed')
      pressed = null
    }
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return
      release()
      pressed = (e.target as Element | null)?.closest('a, button, [role="button"]') ?? null
      pressed?.setAttribute('data-pressed', '')
    }
    document.addEventListener('click', onClick, true)
    document.addEventListener('pointerdown', onPointerDown, { passive: true })
    document.addEventListener('pointerup', release, { passive: true })
    document.addEventListener('pointercancel', release, { passive: true })
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', release)
      document.removeEventListener('pointercancel', release)
    }
  }, [])

  useEffect(() => {
    setState((s) => (s === 'loading' ? 'done' : s))
  }, [pathname])

  useEffect(() => {
    if (state !== 'done') return
    const t = setTimeout(() => setState('idle'), 400)
    return () => clearTimeout(t)
  }, [state])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]"
    >
      <div
        className="h-full origin-left bg-accent shadow-[0_0_10px_rgba(193,170,127,0.7)]"
        style={{
          transform: `scaleX(${state === 'idle' ? 0 : state === 'loading' ? 0.85 : 1})`,
          opacity: state === 'idle' ? 0 : 1,
          transition:
            state === 'loading'
              ? 'transform 6s cubic-bezier(0.08, 0.8, 0.2, 1), opacity 0.1s'
              : state === 'done'
                ? 'transform 0.2s ease-out, opacity 0.3s ease 0.15s'
                : 'none',
        }}
      />
    </div>
  )
}
