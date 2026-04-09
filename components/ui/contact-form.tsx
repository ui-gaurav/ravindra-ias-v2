'use client'

import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-on-surface-muted mb-2 tracking-wide uppercase">First Name</label>
          <input
            type="text"
            placeholder="John"
            required
            className="dribbble-input w-full px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline text-[15px]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-on-surface-muted mb-2 tracking-wide uppercase">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            required
            className="dribbble-input w-full px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline text-[15px]"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-on-surface-muted mb-2 tracking-wide uppercase">Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
          required
          className="dribbble-input w-full px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline text-[15px]"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-on-surface-muted mb-2 tracking-wide uppercase">Message</label>
        <textarea
          placeholder="How can we help you?"
          rows={4}
          required
          className="dribbble-input w-full px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline text-[15px] resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitted}
        className="gradient-cta active-press w-full h-13 text-base font-semibold text-white rounded-full flex items-center justify-center gap-2.5 shadow-lg disabled:opacity-70 transition-all mt-2"
      >
        {submitted ? (
          <>
            <CheckCircle className="h-5 w-5" />
            Message Sent!
          </>
        ) : (
          <>
            Send Message <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  )
}
