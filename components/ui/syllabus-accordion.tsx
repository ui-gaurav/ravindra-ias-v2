'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

interface SyllabusSection {
  title: string
  items: string[]
}

export function SyllabusAccordion({ data }: { data: SyllabusSection[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {data.map((section, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden transition-all duration-400 ${
              isOpen
                ? 'bg-white ambient-shadow-lg ring-1 ring-black/[0.04]'
                : 'bg-surface-dim hover:bg-white hover:ambient-shadow'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-7 py-5 md:px-8 md:py-6 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isOpen ? 'bg-navy-light text-white' : 'bg-surface-dim text-on-surface-muted group-hover:bg-navy-light/10 group-hover:text-navy-light'
                }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-lg md:text-xl font-bold text-on-surface tracking-tight">
                  {section.title}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-amber/15 rotate-180' : 'bg-surface-dim group-hover:bg-amber/10'
              }`}
              >
                <ChevronDown className="h-4 w-4 text-amber-dark" />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-7 pb-7 md:px-8 md:pb-8">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-light to-transparent mb-6" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface-muted text-[15px] group/item hover:text-on-surface transition-colors duration-200">
                      <CheckCircle2 className="h-4 w-4 text-amber flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
