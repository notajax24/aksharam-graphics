"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Target, Lightbulb, Hammer, Quote } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div 
          style={{ 
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
          className="w-full h-full" 
        />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Composition */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main Image */}
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Craftsman working in studio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 max-w-[200px]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Established</p>
                <p className="text-2xl font-bold text-white">2015</p>
                <p className="text-xs text-slate-300 mt-1">Over a decade of excellence in Nashik</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-repeat opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full -z-10 blur-2xl"></div>
          </div>

          {/* Right Column: Content */}
          <div 
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Hammer size={14} className="text-purple-400" />
              <span>Our Story</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting perfection in <br className="hidden sm:block" />
              our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Studio</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              At Aksharam Art, we don't just make signs; we Design first impressions. What started as a small passion project in 2015 has grown into Nashik's premier destination for bespoke branding solutions.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 text-blue-400">
                  <Target size={20} />
                </div>
                <h3 className="font-bold text-white mb-2">Our Mission</h3>
                <p className="text-sm text-slate-400">To empower businesses with transformative signage that commands attention.</p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-3 text-amber-400">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-bold text-white mb-2">Our Vision</h3>
                <p className="text-sm text-slate-400">To become the most trusted partner in digital innovation and design.</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 border-t border-white/10 pt-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase mt-1">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase mt-1">Quality Focus</p>
                </div>
            </div>

            {/* Dedicated Founder Div with LOCAL Image */}
            <div className="relative mt-8 bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-6 border border-white/10 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div className="absolute top-4 right-4 text-white/10">
                 <Quote size={40} />
              </div>
              
              {/* Founder Image */}
              <div className="flex-shrink-0 relative h-16 w-16 rounded-full overflow-hidden shadow-lg border-2 border-slate-900/50">
                 {/* Make sure your image is in 'public/images/shekhar.jpg' */}
                 <Image 
                    src="/images/shekhar.jpg" 
                    alt="Shekhar Gaikwad"
                    fill
                    className="object-cover"
                 />
              </div>

              {/* Founder Info */}
              <div>
                 <h4 className="text-lg font-bold text-white">Shekhar Gaikwad</h4>
                 <p className="text-purple-400 text-sm font-medium mb-2">Founder & Owner</p>
                 <p className="text-slate-400 text-sm leading-relaxed italic pr-6">
                   "We believe that every brand has a soul, and our job is to give it a face through art and precision."
                 </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}