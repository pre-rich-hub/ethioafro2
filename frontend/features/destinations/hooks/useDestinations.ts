'use client'

import { useRef, useState } from 'react'
import { destinations } from '../data/destination.data'

export function useDestinations() {
  const featured = destinations.slice(0, 6)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const isDragging = useRef(false)
  const dragMoved = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const pointerId = useRef<number | null>(null)

  const scrollToIndex = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.min(Math.max(i, 0), featured.length)
    const card = track.children[clamped] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setActive(clamped)
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
  }

  const onCardClick = (e: React.MouseEvent) => {
    if (dragMoved.current) e.preventDefault()
  }


  return { featured, trackRef, active, scrollToIndex, onPointerDown, onPointerMove, endDrag, onCardClick }
}
