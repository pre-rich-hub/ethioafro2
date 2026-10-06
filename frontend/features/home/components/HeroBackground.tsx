'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const HERO_IMAGE =
  'https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1920/lalibela.png'
const HERO_VIDEO =
  'https://res.cloudinary.com/wwgwrs4y/video/upload/v1791314354/lv_0_20261006130845.mp4'

function canPlayHeroVideo() {
  if (typeof window === 'undefined') return false

  const isTabletUp = window.matchMedia('(min-width: 768px)').matches
  if (!isTabletUp) return false

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection

  if (connection?.saveData) return false
  if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
    return false
  }

  return true
}

export function HeroBackground() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => setShowVideo(canPlayHeroVideo())

    update()
    mediaQuery.addEventListener('change', update)
    reducedMotion.addEventListener('change', update)

    const connection = (
      navigator as Navigator & {
        connection?: EventTarget & { addEventListener?: typeof mediaQuery.addEventListener }
      }
    ).connection
    connection?.addEventListener?.('change', update)

    return () => {
      mediaQuery.removeEventListener('change', update)
      reducedMotion.removeEventListener('change', update)
      connection?.removeEventListener?.('change', update)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={HERO_IMAGE}
        alt="Rock-hewn churches of Lalibela at golden hour, Ethiopia"
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />

      {showVideo && !videoFailed ? (
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_IMAGE}
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-charcoal/10 to-transparent" />
    </div>
  )
}
