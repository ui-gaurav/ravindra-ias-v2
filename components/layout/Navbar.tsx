'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Download, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Study Resources', path: '/resources' },
  { label: 'Our Selections', path: '/selections' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="gradient-cta h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
            R
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:flex items-baseline gap-1.5">
            <span className="text-on-surface">RAVINDRA</span>
            <span className="text-gradient-gold text-sm font-extrabold">IAS</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="nav-pill text-sm font-medium text-on-surface-muted hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button className="gradient-cta active-press hidden sm:flex items-center gap-2 h-10 px-6 text-sm font-semibold text-white rounded-full border-0">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl text-on-surface-muted hover:text-on-surface hover:bg-surface-dim transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide-down panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-nav border-t border-outline-light/20">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-on-surface-muted hover:text-on-surface hover:bg-surface-dim rounded-xl px-4 py-3 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-outline-light/20">
              <Button className="gradient-cta active-press flex items-center justify-center gap-2 h-12 w-full text-sm font-semibold text-white rounded-full border-0">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar