'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ArrowRight, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react'
import { HERO_FEATURES } from '@/constants'

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
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
    <div ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-navy-light tracking-tight">
      {count}{suffix}
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      {/* Decorative Orbs */}
      <div className="orb orb-navy w-[600px] h-[600px] -top-40 -left-40 opacity-20" />
      <div className="orb orb-gold w-[400px] h-[400px] top-20 -right-20 opacity-15" />
      <div className="orb orb-navy w-[300px] h-[300px] bottom-0 left-1/3 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-amber/10 text-amber-dark px-5 py-2 rounded-full text-sm font-semibold ghost-border">
              <Sparkles className="h-4 w-4 text-amber" />
              India&apos;s Only Certified NCERT Expert
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-on-surface animate-fade-in-up stagger-1 leading-[1.1]">
            NCERT Foundation Programme by{' '}
            <span className="text-gradient-navy">Ravindra Sir</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg md:text-xl text-on-surface-muted leading-relaxed animate-fade-in-up stagger-2 font-sans">
            Transforming aspirants into officers since 2013 through conceptual mastery and personalized mentorship. Master the core with our revolutionary approach.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up stagger-2">
            {HERO_FEATURES.map((feature, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 bg-white ghost-border px-4 py-2 rounded-full text-sm font-medium text-navy-muted shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-amber" />
                {feature}
              </span>
            ))}
          </div>

          {/* News Ticker */}
          <div className="relative overflow-hidden w-full max-w-2xl mx-auto mb-10 bg-navy-light/5 rounded-full py-2 px-6 ghost-border animate-fade-in-up stagger-2">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-red-500 animate-pulse z-10" />
            <div className="animate-shimmer whitespace-nowrap text-sm font-sans font-medium text-navy-light pl-6">
              Admissions open for New NCERT Foundation Batch 2026! Limited seats available for offline classes. Secure your enrollment today.
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up stagger-3">
            <button className="gradient-cta h-14 px-10 text-lg font-semibold text-white rounded-full flex items-center gap-2 shadow-xl animate-pulse-gold">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button className="h-14 px-10 text-lg font-medium text-navy-light flex items-center gap-2 hover:text-amber-dark transition-colors">
              <PlayCircle className="h-5 w-5 text-amber" /> Watch Demo
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 relative w-full border-t border-outline-light/30">
            {/* Ornamental divider over the border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-32 ornament-divider" />

            {[
              { label: 'Success Rate', value: '45', suffix: '%' },
              { label: 'Students Helped', value: '10000', suffix: '+', display: '10K+' },
              { label: 'Expert Mentors', value: '50', suffix: '+' },
              { label: 'Courses Offered', value: '15', suffix: '+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                {stat.display ? (
                  <div className="text-4xl md:text-5xl font-serif font-bold text-navy-light tracking-tight group-hover:text-amber transition-colors">
                    {stat.display}
                  </div>
                ) : (
                  <div className="group-hover:text-amber transition-colors">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                )}
                <div className="text-sm font-sans text-on-surface-muted mt-2 tracking-wide uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero