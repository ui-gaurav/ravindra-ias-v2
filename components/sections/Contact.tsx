import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { ContactForm } from '@/components/ui/contact-form'

const Contact = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dim relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-overline text-amber-dark mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            Have Questions?
          </h2>
          <p className="text-on-surface-muted text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Our mentors are ready to guide you on your UPSC journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto">

          {/* LEFT: Form — 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 ambient-shadow-lg ghost-border">
              <ContactForm />
            </div>
          </div>

          {/* RIGHT: Info Cards — 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {/* Delhi Center */}
            <div className="p-6 rounded-2xl bg-white ambient-shadow ghost-border card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-navy-light/8 text-navy-light flex-shrink-0 group-hover:bg-navy-light group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-[15px] mb-1">Delhi Center</h4>
                  <p className="text-on-surface-muted text-sm leading-relaxed">
                    102, 2nd Floor, Ansals Building, Mukherjee Nagar, Delhi-110009
                  </p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="p-6 rounded-2xl bg-white ambient-shadow ghost-border card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-[15px] mb-1">Call Us</h4>
                  <p className="text-on-surface-muted text-sm">+91 8700170483</p>
                  <p className="text-on-surface-muted text-sm">+91 9953101176</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white ambient-shadow ghost-border card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber/8 text-amber-dark flex-shrink-0 group-hover:bg-amber group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-[15px] mb-1">Email Us</h4>
                  <p className="text-on-surface-muted text-sm">ravindrasiasdelhi@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Gwalior Center */}
            <div className="p-6 rounded-2xl bg-white ambient-shadow ghost-border card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600 flex-shrink-0 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-[15px] mb-1">Gwalior Center</h4>
                  <p className="text-on-surface-muted text-sm leading-relaxed">
                    1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact