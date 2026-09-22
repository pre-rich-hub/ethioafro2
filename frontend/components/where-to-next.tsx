'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const stops = [
  { src: '/images/lalibela.png', location: 'Lalibela' },
  { src: '/images/hero-simien.png', location: 'Simien Mountains' },
  { src: '/images/danakil.png', location: 'Danakil Depression' },
  { src: '/images/luxury-lodge.png', location: 'Kenya Safari Extension' },
  { src: '/images/omo-valley.png', location: 'Omo Valley' },
  { src: '/images/gondar.png', location: 'Gondar' },
  { src: '/images/bale-gelada.png', location: 'Bale Mountains' },
  { src: '/images/lake-tana.png', location: 'Lake Tana' },
]

export function WhereToNext() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragMoved = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
    dragMoved.current = false
    dragStartX.current = e.clientX
    dragStartScroll.current = track.scrollLeft
    track.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !isDragging.current) return
    const delta = e.clientX - dragStartX.current
    if (Math.abs(delta) > 4) dragMoved.current = true
    track.scrollLeft = dragStartScroll.current - delta
  }

  const endDrag = () => {
    isDragging.current = false
  }

  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24">
      <h2 className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground sm:mb-12">
        Where to Next?
      </h2>

      <div className="group/carousel relative">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="flex cursor-grab gap-3 overflow-x-auto px-3 pb-2 active:cursor-grabbing [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {stops.map((s) => (
            <div
              key={s.location}
              className="group relative h-[220px] w-[150px] shrink-0 select-none overflow-hidden rounded-sm sm:h-[320px] sm:w-[220px]"
            >
              <Image
                src={s.src}
                alt={s.location}
                fill
                draggable={false}
                sizes="220px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-background sm:text-sm">
                {s.location}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover/carousel:opacity-100 sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
