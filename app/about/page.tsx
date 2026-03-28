import React from 'react'

export const metadata = {
  title: 'About Us | Ravindra IAS',
  description: 'Learn about the journey and vision of Ravindra IAS Institute, pioneers of the NCERT Foundation Programme for UPSC.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 min-h-[80vh] bg-surface relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="orb orb-navy w-[600px] h-[600px] -top-40 -right-40 opacity-10" />
      <div className="orb orb-gold w-[400px] h-[400px] bottom-20 -left-20 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-amber font-semibold tracking-wider uppercase text-sm mb-4 block">Our Origin Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-on-surface tracking-tight">
            Welcome to <span className="text-gradient-navy">Ravindra's Institute</span>
          </h1>
          <div className="ornament-divider w-32 mx-auto mt-8 mb-8" />
        </div>

        {/* Director's Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h3 className="font-serif text-2xl font-semibold text-navy-light mb-6">Dear Aspirants,</h3>
            <div className="space-y-6 text-lg text-on-surface-muted font-sans leading-relaxed">
              <p>
                As I reflect on the journey that began in 2013, I am filled with gratitude and a deep sense of purpose. When I decided to focus specifically on teaching NCERT for the UPSC Civil Services Examination, it was not an easy decision. At the time, most teachers and institutes relied on heavy, often overwhelming, reference books. But I knew in my heart that the NCERT textbooks held something far more valuable—clarity, simplicity, and a strong foundation. These were the building blocks I wanted to offer to every serious UPSC aspirant.
              </p>
              <p>
                However, the road was not smooth. Many questioned my approach. I faced skepticism from colleagues and students alike who believed that NCERTs were too "basic" for such a prestigious and challenging exam. Financial challenges arose, and at times, it seemed like the odds were stacked against me. There were sleepless nights and moments when I doubted whether I had made the right choice. But deep inside, I knew that the students who understood and mastered the NCERTs would not only crack the prelims but also excel in the mains and beyond.
              </p>
              <p>
                I believed in this so strongly because I had lived it. As a student, I struggled through the confusion and frustration of trying to grasp difficult concepts from thick, unapproachable books. It was the NCERTs that saved me, that grounded my understanding and gave me clarity. I wanted to give back to the students of Mukherjee Nagar what I had learned the hard way—that simplicity often holds the key to mastery.
              </p>
            </div>
            
            <div className="mt-10 border-t border-outline-light/50 pt-8">
              <h4 className="font-serif font-bold text-2xl text-on-surface">Ravindra Singh Jadon</h4>
              <p className="text-amber-dark font-medium mt-1">Director, Ravindra Institute</p>
            </div>
          </div>
          
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden bg-navy-light/5 aspect-[3/4] flex items-center justify-center ghost-border ambient-shadow card-hover">
              {/* Image Placeholder representing the photo */}
              <div className="text-center p-6 text-on-surface-muted/60">
                <div className="w-24 h-24 mx-auto rounded-full bg-navy-light/10 mb-4 animate-pulse"></div>
                <p className="font-serif italic">Director Portrait</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                <div className="w-full">
                  <h4 className="font-serif font-bold text-lg text-white">Ravindra Singh Jadon</h4>
                  <p className="text-amber font-medium text-sm mt-1">Founding Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Director's Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-surface-bright rounded-3xl p-8 lg:p-12 ghost-border ambient-shadow">
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden bg-navy-light/5 aspect-[3/4] flex items-center justify-center ghost-border shadow-inner">
              {/* Image Placeholder representing the photo */}
              <div className="text-center p-6 text-on-surface-muted/60">
                <div className="w-24 h-24 mx-auto rounded-full bg-navy-light/10 mb-4 animate-pulse"></div>
                <p className="font-serif italic">MD Portrait</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-6">
                <div className="w-full">
                  <h4 className="font-serif font-bold text-lg text-white">Sangeeta Gupta</h4>
                  <p className="text-amber font-medium text-sm mt-1">Managing Director</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg text-on-surface-muted font-sans leading-relaxed">
              <p>
                As the Managing Director of Ravindra's IAS Institute, my vision is rooted in empowering aspirants to achieve their dreams of becoming civil servants. At Ravindra's, we are committed to excellence in UPSC exam preparation, providing comprehensive coaching that blends traditional wisdom with innovative teaching methods.
              </p>
              <p>
                Our institute stands out for its holistic approach, focusing not only on academic excellence but also on fostering critical thinking, ethical leadership, and a deep-rooted sense of responsibility towards society. We aim to create a nurturing environment where students are encouraged to push their boundaries, challenge themselves, and grow both personally and professionally.
              </p>
              <p>
                Through strategic curriculum design, personalized mentoring, and state-of-the-art facilities, we ensure that every student receives the guidance and support they need to succeed. Our faculty comprises experienced educators and industry experts who are dedicated to nurturing talent and imparting knowledge that goes beyond textbooks.
              </p>
              <p>
                At Ravindra's IAS Institute, we believe in preparing individuals not just for exams, but for life as conscientious administrators and leaders who will contribute positively to the nation's governance and development. Our success stories are a testament to our commitment to excellence and our unwavering belief in the potential of every aspirant who walks through our doors.
              </p>
            </div>
            
            <div className="mt-10 border-t border-outline-light/50 pt-8">
              <h4 className="font-serif font-bold text-2xl text-on-surface">Sangeeta Gupta</h4>
              <p className="text-amber-dark font-medium mt-1">Managing Director of Ravindra's Institute</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
