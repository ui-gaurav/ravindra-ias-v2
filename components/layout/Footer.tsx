import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Navy gradient background */}
      <div className="bg-gradient-to-b from-[#022448] to-[#0a1628] text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 bg-white/10 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl border border-white/10">
                  R
                </div>
                <span className="text-xl font-serif font-bold tracking-tight">
                  RAVINDRA <span className="text-gradient-gold">IAS</span>
                </span>
              </div>
              <p className="text-white/50 text-sm font-sans leading-relaxed">
                Empowering future leaders through India&apos;s most trusted NCERT-based UPSC coaching programme.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-white/80 mb-4 text-sm tracking-widest uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Courses', 'Faculty'].map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-white/40 hover:text-amber text-sm font-sans transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-serif font-semibold text-white/80 mb-4 text-sm tracking-widest uppercase">
                Resources
              </h4>
              <ul className="space-y-3">
                {['Current Affairs', 'Study Material', 'Mock Tests', 'Blog'].map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-white/40 hover:text-amber text-sm font-sans transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-white/80 mb-4 text-sm tracking-widest uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-white/40 text-sm font-sans">
                <li>Mukherjee Nagar, Delhi-110009</li>
                <li>+91 8700170483</li>
                <li>info@ravindraias.com</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm font-sans">
              © 2024 Ravindra IAS. Empowering Future Leaders.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <Link key={link} href="/" className="text-white/30 hover:text-white/60 text-xs font-sans transition-colors">
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
