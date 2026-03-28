import React from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { COURSES_DATA } from '@/constants'

const CourseGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dim relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="orb orb-gold w-[500px] h-[500px] -bottom-40 -right-40 opacity-10" />
      <div className="orb orb-navy w-[600px] h-[600px] top-40 -left-60 opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface tracking-tight">
            Our Specializations
          </h2>
          <div className="ornament-divider w-24 mx-auto mt-6 mb-6" />
          <p className="text-on-surface-muted max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            Choose from our range of meticulously designed programs for comprehensive mastery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className={`card-hover relative overflow-hidden rounded-2xl ${course.span} ${course.bg} ghost-border group cursor-pointer flex flex-col ${course.featured ? 'min-h-[280px] md:min-h-[380px]' : 'min-h-[240px]'}`}
            >
              <div className="p-8 flex flex-col h-full z-10">
                {/* Icon + Tag Row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-white text-navy-light ${course.featured ? 'ambient-shadow-lg' : 'ambient-shadow'}`}>
                    {course.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 mt-2">
                  <h3 className={`font-serif font-bold text-on-surface mb-3 ${course.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-on-surface-muted leading-relaxed font-sans ${course.featured ? 'text-base max-w-sm' : 'text-sm max-w-[280px]'}`}>
                    {course.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-6">
                  {course.featured ? (
                    <button className="gradient-cta text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg group-hover:px-9 transition-all">
                      Begin Foundation <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-light group-hover:text-amber-dark transition-colors">
                      Explore Track
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </div>
              </div>
              
              {/* Decorative background accent for featured cards */}
              {course.featured && (
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-amber/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseGrid
