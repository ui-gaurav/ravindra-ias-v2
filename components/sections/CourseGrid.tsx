import React from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { COURSES_DATA } from '@/constants'

const CourseGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dim relative overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber/3 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header — Dribbble overline style */}
        <div className="text-center mb-16">
          <span className="section-overline text-amber-dark mb-4 block">Programs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            Our Specializations
          </h2>
          <p className="text-on-surface-muted max-w-xl mx-auto text-lg mt-5 leading-relaxed">
            Choose from our range of meticulously designed programs for comprehensive mastery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className={`card-hover relative overflow-hidden rounded-2xl ${course.span} bg-white ghost-border group cursor-pointer flex flex-col ${course.featured ? 'min-h-[280px] md:min-h-[360px]' : 'min-h-[220px]'}`}
            >
              <div className="p-7 md:p-8 flex flex-col h-full z-10">
                {/* Icon + Tag Row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${course.featured ? 'bg-navy-light/8 text-navy-light ambient-shadow' : 'bg-surface-dim text-navy-light'} transition-colors duration-300 group-hover:bg-navy-light group-hover:text-white`}>
                    {course.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 mt-1">
                  <h3 className={`font-bold text-on-surface mb-2.5 tracking-tight ${course.featured ? 'text-2xl md:text-[1.75rem]' : 'text-lg'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-on-surface-muted leading-relaxed ${course.featured ? 'text-[15px] max-w-sm' : 'text-sm max-w-[280px]'}`}>
                    {course.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-6">
                  {course.featured ? (
                    <button className="gradient-cta active-press text-white font-semibold px-7 py-3 rounded-full text-sm flex items-center gap-2.5 shadow-md group-hover:shadow-lg transition-shadow">
                      Begin Foundation <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-on-surface-muted group-hover:text-navy-light transition-colors duration-300">
                      Explore Track
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </div>
              </div>

              {/* Decorative accent on featured hover */}
              {course.featured && (
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tl from-amber/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              )}

              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy-light via-amber to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseGrid
