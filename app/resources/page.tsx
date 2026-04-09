import React from 'react'

const resourcesCategories = [
  'All Resources',
  'NCERT Summaries',
  'Current Affairs',
  'Previous Year Papers',
  'Syllabus',
  'Toppers Notes',
]

const recentResources = [
  { title: 'UPSC GS Prelims Syllabus 2026', category: 'Syllabus', icon: '📝' },
  { title: 'February 2026 Current Affairs Digest', category: 'Current Affairs', icon: '📰' },
  { title: 'Class 11 History NCERT Summary', category: 'NCERT Summaries', icon: '📚' },
  { title: '2025 Prelims GS Paper 1 Solved', category: 'Previous Year Papers', icon: '✅' },
  { title: 'Ethics (GS 4) Case Studies Framework', category: 'Toppers Notes', icon: '🧠' },
  { title: 'Indian Polity - Supreme Court Judgments', category: 'NCERT Summaries', icon: '⚖️' },
]

export const metadata = {
  title: 'Study Resources | Ravindra IAS',
  description: 'Access premium UPSC study materials, NCERT summaries, and current affairs.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      {/* Hero Header */}
      <div className="container mx-auto px-6 lg:px-10 mb-12 relative z-10 text-center">
        <span className="section-overline text-amber-dark mb-4 block">Library</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight mb-4">
          Study Resources
        </h1>
        <p className="text-on-surface-muted text-lg max-w-2xl mx-auto leading-relaxed">
          Curated materials, NCERT summaries, and comprehensive notes for your UPSC preparation.
        </p>
      </div>

      {/* Secondary Sticky Navbar for Resources */}
      <div className="sticky top-[72px] z-40 bg-background/90 backdrop-blur-md border-b border-outline-light/40 mb-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {resourcesCategories.map((cat, idx) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  idx === 0
                    ? 'bg-navy-light text-white shadow-md'
                    : 'bg-surface-dim hover:bg-outline-light/50 text-on-surface-muted hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentResources.map((resource, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl ghost-border ambient-shadow card-hover group cursor-pointer flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="text-3xl bg-surface-dim h-14 w-14 rounded-2xl flex items-center justify-center group-hover:bg-amber/10 transition-colors duration-300">
                  {resource.icon}
                </div>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest bg-surface-dim text-on-surface-muted group-hover:bg-navy-light/10 group-hover:text-navy-light transition-colors duration-300">
                  {resource.category}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.15rem] font-bold text-on-surface mb-3 leading-snug group-hover:text-navy-light transition-colors">
                  {resource.title}
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-light/30 flex items-center justify-between text-sm font-semibold text-on-surface-muted">
                <span>View Document</span>
                <span className="group-hover:translate-x-1 group-hover:text-amber-dark transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="h-12 px-8 text-sm font-semibold text-on-surface bg-white ghost-border rounded-full ambient-shadow hover:bg-surface-dim hover:-translate-y-0.5 transition-all duration-300">
                Load More Resources
            </button>
        </div>
      </div>
    </div>
  )
}
