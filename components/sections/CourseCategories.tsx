import React from 'react'
import { BookOpen, GraduationCap, Microscope, Landmark, ChevronRight, ArrowRight } from 'lucide-react'

const courses = [
  {
    title: "GS-NCERT Foundation",
    description: "The complete base for UPSC/State PCS using our certified NCERT approach. This foundational volume sets the gold standard for your academic journey.",
    icon: <BookOpen className="h-7 w-7" />,
    tag: "Popular",
    tagColor: "bg-amber/20 text-amber-dark",
    span: "md:col-span-2 md:row-span-2",
    bg: "bg-[#e8eef5]",
    featured: true,
  },
  {
    title: "UPSC Civil Services",
    description: "Advanced prep for Prelims and Mains. An elite program for the vanguard of national service.",
    icon: <GraduationCap className="h-6 w-6" />,
    tag: "Expert",
    tagColor: "bg-navy-light/10 text-navy-light",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    title: "State PCS",
    description: "Specialized state-level PSC coaching with localized expertise.",
    icon: <Landmark className="h-6 w-6" />,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    title: "IIT-JEE / NEET",
    description: "Foundational science & medical prep. Master the core principles of the physical world.",
    icon: <Microscope className="h-6 w-6" />,
    tag: "Science",
    tagColor: "bg-purple-100 text-purple-700",
    span: "md:col-span-2",
    bg: "bg-surface-bright",
    featured: false,
  },
]

const CourseCategories = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dim relative overflow-hidden">
      {/* Subtle background orb */}
      <div className="orb orb-gold w-[500px] h-[500px] -bottom-40 -right-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface tracking-tight">
            Our Specializations
          </h2>
          <div className="ornament-divider w-24 mx-auto mt-6 mb-6" />
          <p className="text-on-surface-muted max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            Choose from our range of meticulously designed courses to kickstart your career.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`card-hover relative overflow-hidden rounded-2xl ${course.span} ${course.bg} ghost-border group cursor-pointer flex flex-col ${course.featured ? 'min-h-[280px] md:min-h-[460px]' : 'min-h-[220px]'}`}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Icon + Tag Row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white ambient-shadow text-navy-light">
                    {course.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-serif font-bold text-on-surface mb-3 ${course.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {course.title}
                  </h3>
                  <p className={`text-on-surface-muted leading-relaxed font-sans ${course.featured ? 'text-base' : 'text-sm'}`}>
                    {course.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-6">
                  {course.featured ? (
                    <button className="gradient-cta text-white font-semibold px-8 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories