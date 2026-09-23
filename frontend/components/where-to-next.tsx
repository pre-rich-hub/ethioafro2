'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const stops = [
  { src: '/images/lalibela.png', location: 'Lalibela', region: 'Northern Highlands', href: '/destinations/lalibela' },
  { src: '/images/hero-simien.png', location: 'Simien Mountains', region: 'Northern Highlands', href: '/destinations/simien-mountains' },
  { src: '/images/danakil.png', location: 'Danakil Depression', region: 'Afar Lowlands', href: '/destinations/danakil-depression' },
  { src: '/images/omo-valley.png', location: 'Omo Valley', region: 'Southern Rift', href: '/destinations/omo-valley' },
  { src: '/images/gondar.png', location: 'Gondar', region: 'Northern Highlands', href: '/destinations/gondar' },
  { src: '/images/bale-gelada.png', location: 'Bale Mountains', region: 'Southern Highlands', href: '/destinations/bale-mountains' },
  { src: '/images/lake-tana.png', location: 'Lake Tana', region: 'Amhara', href: '/destinations/lake-tana' },
]

// Three copies of the set so there's always more track to scroll into in
// either direction — the effect of an infinite loop without ever actually
// wrapping the DOM around.
const loopStops = [...stops, ...stops, ...stops]

const AUTO_SCROLL_SPEED = 0.4 // pixels per animation frame, ~24px/sec

export function WhereToNext() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragMoved = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const pointerId = useRef<number | null>(null)
  const normalizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPaused = useRef(false)
  // Arrow clicks start a smooth scroll that the auto-drift would cancel, so
  // hold the drift off until the scroll has finished.
  const holdUntil = useRef(0)

  // Start the visible viewport inside the middle copy, so there's a full
  // set's worth of track to scroll through before either edge is reached.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.scrollLeft = track.scrollWidth / 3
  }, [])

  // Drift slowly to the right when no one is touching it. Paused on hover
  // or drag, and wraps instantly (same content on either side) so it never
  // visibly reaches an end.
  useEffect(() => {
    let frame: number
    const tick = () => {
      const track = trackRef.current
      if (
        track &&
        !isPaused.current &&
        !isDragging.current &&
        performance.now() > holdUntil.current
      ) {
        track.scrollLeft += AUTO_SCROLL_SPEED
        const singleWidth = track.scrollWidth / 3
        if (track.scrollLeft > singleWidth * 1.5) {
          track.scrollLeft -= singleWidth
        }
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Once scrolling settles, silently jump back into the middle copy if the
  // viewport has drifted into the first or third copy — same content, so
  // the jump is invisible to the eye.
  const scheduleNormalize = () => {
    if (normalizeTimeout.current) clearTimeout(normalizeTimeout.current)
    normalizeTimeout.current = setTimeout(() => {
      const track = trackRef.current
      if (!track) return
      const singleWidth = track.scrollWidth / 3
      if (track.scrollLeft < singleWidth * 0.5) {
        track.scrollLeft += singleWidth
      } else if (track.scrollLeft > singleWidth * 1.5) {
        track.scrollLeft -= singleWidth
      }
    }, 120)
  }

  // Step by one card (its width plus the gap), whatever the breakpoint.
  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    holdUntil.current = performance.now() + 900
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
    scheduleNormalize()
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    if (!track) return
    isDragging.current = false
    dragMoved.current = false
    dragStartX.current = e.clientX
    dragStartScroll.current = track.scrollLeft
    pointerId.current = e.pointerId
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || pointerId.current === null) return
    const delta = e.clientX - dragStartX.current
    if (!isDragging.current) {
      if (Math.abs(delta) <= 8) return
      isDragging.current = true
      dragMoved.current = true
      track.setPointerCapture(pointerId.current)
    }
    track.scrollLeft = dragStartScroll.current - delta
  }

  const endDrag = () => {
    isDragging.current = false
    pointerId.current = null
    scheduleNormalize()
  }

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-28">
      <div className="shell mb-10 flex items-end justify-between gap-6 sm:mb-14">
        <div>
          <p className="eyebrow mb-4 text-accent">
            <span className="rule" />
            Keep Exploring
          </p>
          <h2 className="text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Where to next?
          </h2>
        </div>
        <div className="hidden shrink-0 gap-3 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scrollBy(dir)}
              aria-label={dir === -1 ? 'Scroll left' : 'Scroll right'}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              {dir === -1 ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Soft fade at both edges so cards drift in and out of view */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-20 lg:w-32"
        />

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onScroll={scheduleNormalize}
          onClickCapture={(e) => {
            // A drag that ends over a card should not also open it.
            if (dragMoved.current) {
              e.preventDefault()
              dragMoved.current = false
            }
          }}
          onMouseEnter={() => {
            isPaused.current = true
          }}
          onMouseLeave={() => {
            isPaused.current = false
          }}
          className="flex cursor-grab gap-4 overflow-x-auto px-4 pb-2 active:cursor-grabbing [scrollbar-width:none] sm:gap-5 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {loopStops.map((s, i) => (
            <Link
              key={`${s.location}-${i}`}
              href={s.href}
              draggable={false}
              className="group relative h-[340px] w-[240px] shrink-0 select-none overflow-hidden rounded-sm shadow-[0_20px_40px_-24px_rgba(26,26,26,0.5)] sm:h-[460px] sm:w-[320px] lg:h-[520px] lg:w-[360px]"
            >
              <Image
                src={s.src}
                alt={s.location}
                fill
                draggable={false}
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

              <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm sm:left-5 sm:top-5 sm:text-[10px]">
                {s.region}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h3 className="font-serif text-2xl leading-tight text-background sm:text-3xl">
                  {s.location}
                </h3>
                <span className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-light sm:text-[11px]">
                  <span className="h-px w-6 bg-accent-light transition-all duration-500 group-hover:w-10" />
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
