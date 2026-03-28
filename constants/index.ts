import { 
  BookOpen, GraduationCap, Calculator, Landmark, Microscope, 
  Library, Scale, BrainCircuit, FileText, CheckCircle2
} from 'lucide-react'
import React from 'react'

export const SITE_INFO = {
  name: "Ravindra IAS",
  director: "Ravindra Singh Jadon",
  email: "ravindrasiasdelhi@gmail.com",
  phones: ["+91 9953101176", "+91 8700170483", "+91 7042027486"],
  gwaliorPhone: "+91 8359038350",
  addresses: {
    delhi: "102, 2nd Floor, 8-9, Ansal Building, Near Chawla Restaurant Lane, Dr. Mukherjee Nagar, Delhi-110009",
    gwalior: "1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior"
  },
  socials: {
    facebook: "#",
    youtube: "#",
    instagram: "#",
    telegram: "#"
  }
}

export const HERO_FEATURES = [
  "NCERT Based Teaching",
  "Conceptual Clarity",
  "Regular Classes & Assessments",
  "Bilingual Classes",
  "Answer Writing Practice",
  "Personal Mentorship",
]

export const COURSES_DATA = [
  {
    id: "gs-ncert",
    title: "GS-NCERT Foundation",
    description: "The complete base for UPSC/State PCS using Ravindra Sir's certified NCERT approach.",
    icon: React.createElement(BookOpen, { className: "h-7 w-7" }),
    tag: "Most Popular",
    tagColor: "bg-amber/20 text-amber-dark",
    span: "md:col-span-2 md:row-span-2",
    bg: "bg-[#e8eef5]",
    featured: true,
  },
  {
    id: "upsc-foundation",
    title: "UPSC / State PCS Foundation",
    description: "Advanced prep for Prelims and Mains. Elite program for the vanguard of national service.",
    icon: React.createElement(GraduationCap, { className: "h-6 w-6" }),
    tag: "Expert",
    tagColor: "bg-navy-light/10 text-navy-light",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "ca-foundation",
    title: "CA Foundation",
    description: "Comprehensive coaching for Chartered Accountancy aspirants.",
    icon: React.createElement(Calculator, { className: "h-6 w-6" }),
    tag: "Commerce",
    tagColor: "bg-blue-100 text-blue-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "ssc",
    title: "SSC & One Day Exams",
    description: "Targeted preparation for Staff Selection Commission and other competitive exams.",
    icon: React.createElement(Landmark, { className: "h-6 w-6" }),
    tag: "Gov Jobs",
    tagColor: "bg-green-100 text-green-700",
    span: "md:col-span-2 md:row-span-2",
    bg: "bg-surface-bright",
    featured: true,
  },
  {
    id: "iit-neet",
    title: "IIT-JEE / NEET Foundation",
    description: "Strong foundational science & medical prep for aspiring engineers and doctors.",
    icon: React.createElement(Microscope, { className: "h-6 w-6" }),
    tag: "Science",
    tagColor: "bg-purple-100 text-purple-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "cuet",
    title: "CUET-UG / Academics",
    description: "Focused guidance for Central University Entrance Test and academic excellence.",
    icon: React.createElement(Library, { className: "h-6 w-6" }),
    tag: "UG Entrance",
    tagColor: "bg-teal-100 text-teal-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "judiciary",
    title: "Judiciary / CLAT-UG",
    description: "Expert coaching for law aspirants targeting CLAT and Judiciary exams.",
    icon: React.createElement(Scale, { className: "h-6 w-6" }),
    tag: "Law",
    tagColor: "bg-rose-100 text-rose-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "abacus",
    title: "Abacus / Vedic Maths",
    description: "Enhance calculation speed and mental math abilities from a young age.",
    icon: React.createElement(BrainCircuit, { className: "h-6 w-6" }),
    tag: "Skills",
    tagColor: "bg-orange-100 text-orange-700",
    span: "md:col-span-2",
    bg: "bg-surface-bright",
    featured: false,
  },
  {
    id: "study-material",
    title: "Study Material & Test Series",
    description: "Curated NCERT-based materials and comprehensive test series for thorough evaluation.",
    icon: React.createElement(FileText, { className: "h-6 w-6" }),
    tag: "Resources",
    tagColor: "bg-indigo-100 text-indigo-700",
    span: "",
    bg: "bg-surface-bright",
    featured: false,
  },
]
