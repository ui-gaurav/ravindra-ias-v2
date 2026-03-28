import React from 'react'

export const metadata = {
  title: 'Our Selections | Ravindra IAS',
  description: 'View the success stories and testimonials of our top rankers in UPSC and State PCS examinations.',
}

const selections = [
  { rank: 'AIR 14', name: 'Alok Singh', exam: 'UPSC CSE 2023', year: '2023' },
  { rank: 'AIR 28', name: 'Neha Sharma', exam: 'UPSC CSE 2023', year: '2023' },
  { rank: 'AIR 56', name: 'Rahul Kumar', exam: 'UPSC CSE 2022', year: '2022' },
  { rank: 'AIR 102', name: 'Priya Patel', exam: 'UPPSC 2022', year: '2022' },
  { rank: 'Rank 1', name: 'Vikram Singh', exam: 'MPPSC 2021', year: '2021' },
  { rank: 'Rank 5', name: 'Anjali Verma', exam: 'UPPSC 2021', year: '2021' },
]

export default function SelectionsPage() {
  return (
    <div className="pt-24 pb-32 min-h-[80vh] bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-on-surface tracking-tight">
            Our Legacy of Success
          </h1>
          <div className="ornament-divider w-24 mx-auto mt-6 mb-6" />
          <p className="text-on-surface-muted max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            Meet the scholars who transformed their aspirations into administrative reality through our NCERT Foundation Programme.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {selections.map((selection, i) => (
            <div key={i} className="bg-surface-bright rounded-2xl p-8 ghost-border ambient-shadow text-center card-hover">
              <div className="w-20 h-20 mx-auto rounded-full bg-navy-light/5 border-2 border-amber/30 flex items-center justify-center mb-6">
                <span className="font-serif font-bold text-navy-light text-xl px-2 text-center leading-tight">
                  {selection.rank.replace('AIR ', '#')}
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-on-surface mb-2">
                {selection.name}
              </h3>
              <p className="font-sans text-sm text-navy-light font-semibold mb-1">
                {selection.exam}
              </p>
              <p className="font-sans text-xs text-on-surface-muted">
                Batch of {selection.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
