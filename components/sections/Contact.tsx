'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-24 lg:py-32 bg-surface-dim relative overflow-hidden">
      {/* Subtle orb */}
      <div className="orb orb-gold w-[350px] h-[350px] -top-20 -right-20 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-surface tracking-tight">
                Have Questions?
              </h2>
              <div className="ornament-divider w-16 mt-6 mb-4" />
              <p className="text-on-surface-muted text-lg font-sans leading-relaxed">
                Our mentors are ready to guide you on your UPSC journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-surface-bright ghost-border text-on-surface font-sans placeholder:text-outline focus:outline-none focus:border-transparent focus:shadow-[0_2px_0_0_#ffbf00] transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-surface-bright ghost-border text-on-surface font-sans placeholder:text-outline focus:outline-none focus:border-transparent focus:shadow-[0_2px_0_0_#ffbf00] transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-4 rounded-xl bg-surface-bright ghost-border text-on-surface font-sans placeholder:text-outline focus:outline-none focus:border-transparent focus:shadow-[0_2px_0_0_#ffbf00] transition-all"
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                required
                className="w-full px-5 py-4 rounded-xl bg-surface-bright ghost-border text-on-surface font-sans placeholder:text-outline focus:outline-none focus:border-transparent focus:shadow-[0_2px_0_0_#ffbf00] transition-all resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="gradient-cta w-full h-14 text-lg font-semibold text-white rounded-full flex items-center justify-center gap-2 shadow-xl disabled:opacity-70 transition-all"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: Info Cards */}
          <div className="space-y-6">
            {/* Delhi Center */}
            <div className="p-6 rounded-2xl bg-surface-bright ambient-shadow ghost-border card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-navy-light/10 text-navy-light flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-on-surface text-lg">Delhi Center</h4>
                  <p className="text-on-surface-muted text-sm font-sans mt-1 leading-relaxed">
                    102, 2nd Floor, Ansals Building, Mukherjee Nagar, Delhi-110009
                  </p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="p-6 rounded-2xl bg-surface-bright ambient-shadow ghost-border card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-green-100 text-green-700 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-on-surface text-lg">Call Us</h4>
                  <p className="text-on-surface-muted text-sm font-sans mt-1">+91 8700170483</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-surface-bright ambient-shadow ghost-border card-hover">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-amber/10 text-amber-dark flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-on-surface text-lg">Email Us</h4>
                  <p className="text-on-surface-muted text-sm font-sans mt-1">info@ravindraias.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-56 w-full bg-surface rounded-2xl ghost-border overflow-hidden flex items-center justify-center relative group">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-outline mx-auto mb-2" />
                <p className="text-on-surface-muted text-sm font-sans italic">
                  Google Maps Integration
                </p>
              </div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact