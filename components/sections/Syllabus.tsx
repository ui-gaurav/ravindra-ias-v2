import React from 'react'
import { BookOpen, Clock, HeadphonesIcon } from 'lucide-react'
import { SyllabusAccordion } from '@/components/ui/syllabus-accordion'

const syllabusData = [
  {
    title: 'Prelims Subjects',
    items: [
      'History (Ancient, Medieval, Modern)',
      'Constitution & Polity',
      'General Science & Geography',
      'Economics & Ecology',
      'Art & Culture',
      'Current Affairs & General Knowledge',
    ],
  },
  {
    title: 'Mains Subjects',
    items: [
      'World History & Indian Society',
      'Ethics, Integrity & Aptitude',
      'Internal Security & Disaster Management',
      'Governance & Social Justice',
      'International Relations',
      'Essay Writing & Answer Craft',
    ],
  },
  {
    title: 'Optional Subjects',
    items: [
      'Public Administration',
      'Political Science & International Relations',
      'Sociology',
      'Geography',
      'History',
    ],
  },
]

const features = [
  { icon: <BookOpen className="h-6 w-6" />, label: 'Subjects', value: '12+' },
  { icon: <Clock className="h-6 w-6" />, label: 'Study Hours', value: '800+' },
  { icon: <HeadphonesIcon className="h-6 w-6" />, label: 'Support', value: '24/7' },
]

const Syllabus = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-overline text-amber-dark mb-4 block">Curriculum</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
            GS Syllabus Overview
          </h2>
          <p className="text-on-surface-muted text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Deep dive into our comprehensive NCERT-based curriculum.
          </p>
        </div>

        {/* Accordion — Dribbble clean style */}
        <SyllabusAccordion data={syllabusData} />

        {/* Feature Cards — clean grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-7 rounded-2xl bg-surface-dim ghost-border card-hover group">
              <div className="inline-flex p-3.5 rounded-2xl bg-white ambient-shadow text-navy-light mb-5 group-hover:bg-navy-light group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">{feature.value}</div>
              <div className="text-xs font-semibold text-on-surface-muted mt-2 tracking-widest uppercase">
                {feature.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Syllabus