import React from 'react'
import { ArrowRight, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react'
import { HERO_FEATURES } from '@/constants'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-24 lg:pt-20 lg:pb-36">
      {/* Very subtle decorative gradient blobs — Dribbble style */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge — high-contrast pill */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-amber/10 text-amber-dark px-5 py-2.5 rounded-full text-sm font-semibold border border-amber/15 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber" />
              India&apos;s Only Certified NCERT Expert
            </span>
          </div>

          {/* Headline — sans-serif, Dribbble bold */}
          <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-on-surface animate-fade-in-up stagger-1 leading-[1.08]">
            NCERT Foundation Programme by{' '}
            <span className="text-gradient-navy">Ravindra Sir</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg md:text-xl text-on-surface-muted leading-relaxed animate-fade-in-up stagger-2 max-w-2xl mx-auto">
            Transforming aspirants into officers since 2013 through conceptual mastery and personalized mentorship.
          </p>

          {/* Feature Pills — clean white cards */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12 animate-fade-in-up stagger-2">
            {HERO_FEATURES.map((feature, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 bg-white ghost-border px-4 py-2.5 rounded-full text-sm font-medium text-on-surface-muted hover:text-on-surface hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber flex-shrink-0" />
                {feature}
              </span>
            ))}
          </div>

          {/* News Ticker — clean marquee */}
          <div className="relative overflow-hidden w-full max-w-xl mx-auto mb-12 bg-surface-dim rounded-2xl py-3 px-5 ghost-border animate-fade-in-up stagger-3">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <div className="overflow-hidden whitespace-nowrap">
                <span className="inline-block animate-marquee text-sm font-medium text-on-surface-muted">
                  Admissions open for New NCERT Foundation Batch 2026! Limited seats available for offline classes. Secure your enrollment today.
                  &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
                  Admissions open for New NCERT Foundation Batch 2026! Limited seats available for offline classes. Secure your enrollment today.
                </span>
              </div>
            </div>
          </div>

          {/* CTAs — bouncy hover, tactile press */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up stagger-4">
            <button className="gradient-cta active-press h-14 px-10 text-base font-semibold text-white rounded-full flex items-center gap-3 shadow-lg animate-pulse-gold">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </button>
            <button className="h-14 px-8 text-base font-medium text-on-surface-muted flex items-center gap-2.5 hover:text-on-surface rounded-full hover:bg-surface-dim active-press transition-all duration-300">
              <PlayCircle className="h-5 w-5 text-amber" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Bar — separated visually with a card */}
        <div className="mt-24 max-w-4xl mx-auto animate-fade-in-up stagger-5">
          <div className="bg-white rounded-3xl ambient-shadow-lg ghost-border p-8 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Success Rate', value: '45', suffix: '%' },
                { label: 'Students Helped', value: '10000', suffix: '+', display: '10K+' },
                { label: 'Expert Mentors', value: '50', suffix: '+' },
                { label: 'Courses Offered', value: '15', suffix: '+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center group cursor-default">
                  {stat.display ? (
                    <div className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight group-hover:text-navy-light transition-colors duration-300 tabular-nums">
                      {stat.display}
                    </div>
                  ) : (
                    <div className="group-hover:text-navy-light transition-colors duration-300">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                  )}
                  <div className="text-xs font-semibold text-on-surface-muted mt-2 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero