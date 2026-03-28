import React from 'react'
import CourseGrid from '@/components/sections/CourseGrid'

export const metadata = {
  title: 'Our Courses | Ravindra IAS',
  description: 'Explore our comprehensive NCERT-based courses for UPSC, State PCS, SSC, IIT-JEE, and more.',
}

export default function CoursesPage() {
  return (
    <div className="pt-18"> {/* Add padding top to account for sticky navbar */}
      <CourseGrid />
    </div>
  )
}
