import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Navy gradient background — deeper, more premium */}
      <div className="bg-gradient-to-b from-[#022448] via-[#071e38] to-[#060e1a] text-white">
        <div className="container mx-auto px-6 lg:px-10 py-16 lg:py-20">
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-lg border border-white/10">
                  R
                </div>
                <span className="text-lg font-bold tracking-tight">
                  RAVINDRA <span className="text-gradient-gold">IAS</span>
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Empowering future leaders through India&apos;s most trusted NCERT-based UPSC coaching programme since 2013.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white/60 mb-5 text-xs tracking-[0.15em] uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Courses', path: '/courses' },
                  { label: 'Our Selections', path: '/selections' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-white/35 hover:text-amber text-sm transition-colors duration-200 flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white/60 mb-5 text-xs tracking-[0.15em] uppercase">
                Resources
              </h4>
              <ul className="space-y-3">
                {['Current Affairs', 'Study Material', 'Mock Tests', 'Blog'].map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-white/35 hover:text-amber text-sm transition-colors duration-200 flex items-center gap-1 group">
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white/60 mb-5 text-xs tracking-[0.15em] uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-white/35 text-sm">
                <li>Mukherjee Nagar, Delhi-110009</li>
                <li>Phoolbagh Chauraha, Gwalior</li>
                <li className="pt-2">
                  <a href="tel:+918700170483" className="hover:text-amber transition-colors">+91 8700170483</a>
                </li>
                <li>
                  <a href="mailto:ravindrasiasdelhi@gmail.com" className="hover:text-amber transition-colors">ravindrasiasdelhi@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-sm">
              © {new Date().getFullYear()} Ravindra IAS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <Link key={link} href="/" className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
