'use client'

import React, { useState } from 'react'
import { ChevronDown, BookOpen, Clock, HeadphonesIcon } from 'lucide-react'

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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-surface-bright relative overflow-hidden">
      {/* Subtle orb */}
      <div className="orb orb-navy w-[400px] h-[400px] -top-40 -left-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-on-surface">
            GS Syllabus Overview
          </h2>
          <div className="ornament-divider w-24 mx-auto mt-6 mb-6" />
          <p className="text-on-surface-muted text-lg font-sans">
            Deep dive into our comprehensive NCERT-based curriculum.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {syllabusData.map((section, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-surface-bright ambient-shadow-lg'
                  : 'bg-surface-dim hover:bg-surface-bright'
              } ghost-border`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
              >
                <span className="text-xl font-serif font-semibold text-navy-light">
                  {section.title}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-amber transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent mb-6" />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-on-surface-muted font-sans text-[15px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-surface-dim ghost-border card-hover">
              <div className="inline-flex p-3 rounded-xl bg-navy-light/10 text-navy-light mb-4">
                {feature.icon}
              </div>
              <div className="text-3xl font-serif font-bold text-navy-light">{feature.value}</div>
              <div className="text-sm text-on-surface-muted font-sans mt-1 tracking-wide uppercase">
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