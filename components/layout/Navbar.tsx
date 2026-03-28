'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Download } from 'lucide-react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="gradient-cta h-11 w-11 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
            R
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            <span className="text-navy-light font-serif">RAVINDRA</span>{' '}
            <span className="text-gradient-gold font-serif">IAS</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', path: '/' },
            { label: 'About Us', path: '/about' },
            { label: 'Courses', path: '/courses' },
            { label: 'Our Selections', path: '/selections' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="gold-underline text-sm font-medium tracking-wide text-on-surface-muted hover:text-navy-light transition-colors pb-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button className="gradient-cta hidden sm:flex items-center gap-2 h-10 px-6 text-sm font-semibold text-white rounded-full border-0 shadow-lg">
            <Download className="h-4 w-4" />
            Download App
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-on-surface-muted hover:text-navy-light transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-outline-light/15 animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Courses', path: '/courses' },
              { label: 'Our Selections', path: '/selections' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-on-surface-muted hover:text-navy-light transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button className="gradient-cta flex items-center justify-center gap-2 h-12 w-full text-sm font-semibold text-white rounded-full border-0 mt-2">
              <Download className="h-4 w-4" />
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar