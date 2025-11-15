// components/ContinuousCarousel.tsx
'use client'
import React, { useRef, useEffect } from 'react'
import CustomImage from '@/components/CustomImage'

type Props = {
  images: string[]
  itemClassName?: string
  trackHeight?: number | string
  speed?: number // pixels per second
}

export default function ContinuousCarousel({ images, itemClassName = '', trackHeight = '260px', speed = 40 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const posRef = useRef(0)
  const widthRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Duplicamos o conteúdo -> no markup vamos renderizar images concat(images)
    const updateWidth = () => {
      widthRef.current = track.scrollWidth / 2 // porque duplicado
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)

    let last = performance.now()
    const step = (now: number) => {
      const dt = now - last
      last = now
      const dx = (speed * dt) / 1000 // em px
      posRef.current += dx
      if (posRef.current >= widthRef.current) posRef.current = posRef.current - widthRef.current
      if (track) {
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', updateWidth)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [images, speed])

  // Renderizamos images duas vezes para loop contínuo
  const content = [...images, ...images]

  return (
    <div className="overflow-hidden w-full" style={{ height: trackHeight }}>
      <div
        ref={trackRef}
        className={`flex items-center h-full will-change-transform transition-transform`}
        style={{ transform: 'translateX(0)', gap: '16px' }}
      >
        {content.map((src, i) => (
          <div key={i} className={`flex-shrink-0 relative ${itemClassName}`} style={{ width: '28%', minWidth: '220px' }}>
            <CustomImage src={src} alt={`item-${i}`} fill className="object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
