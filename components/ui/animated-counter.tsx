'use client'

import React, { useEffect, useState, useRef } from 'react'

export function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0
          const increment = Math.ceil(numericTarget / 40)
          const timer = setInterval(() => {
            current += increment
            if (current >= numericTarget) {
              setCount(numericTarget)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 30)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericTarget])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight tabular-nums">
      {count}{suffix}
    </div>
  )
}
