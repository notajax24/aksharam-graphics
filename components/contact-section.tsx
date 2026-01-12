"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, MapPin, Phone, Mail, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
                element.classList.remove("opacity-0", "translate-y-8")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-10 md:py-24 bg-slate-950 overflow-hidden">
      
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
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />


      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Glass Container */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out p-5 md:p-12 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-20">
            
            {/* --- Left Column: Form --- */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-400 mb-4 md:mb-6">
                 <Sparkles size={14} />
                 <span>Start a Project</span>
              </div>

              <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Let’s bring your next <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  signage idea
                </span>{" "}
                to life
              </h3>
              <p className="text-slate-400 mb-6 md:mb-10 max-w-xl leading-relaxed text-sm md:text-base">
                Share a few details about your space or branding needs, and we’ll get back to you with ideas, options, and timelines.
              </p>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault()
                  alert("Thank you for your enquiry! We'll get back to you soon.")
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wide ml-1">Name</label>
                    <Input className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-10 md:h-12 rounded-xl transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wide ml-1">Email</label>
                    <Input type="email" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-10 md:h-12 rounded-xl transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wide ml-1">Phone</label>
                    <Input className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 h-10 md:h-12 rounded-xl transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wide ml-1">Service Type</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-10 md:h-12 rounded-xl focus:ring-purple-500/20">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 text-white border-white/10">
                        <SelectItem value="pvc">PVC Nameplates / Art</SelectItem>
                        <SelectItem value="signboards">Signboards</SelectItem>
                        <SelectItem value="logos">3D Logos</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wide ml-1">Message</label>
                  <Textarea
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-purple-500/50 focus:ring-purple-500/20 rounded-xl resize-none transition-all p-4"
                    placeholder="Tell us about the space, size, and style you’re imagining..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto mt-2 bg-white text-slate-900 hover:bg-slate-200 rounded-full px-8 py-6 font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Submit Enquiry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* --- Right Column: Info --- */}
            <div className="flex flex-col justify-center space-y-8 md:space-y-10 lg:pl-10 lg:border-l lg:border-white/10 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
              
            <div className="space-y-4">
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Aksharam+Graphics+Nashik&query_place_id=ChIJfQLYt9aV3TsRGIyttgaXlFU" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group block"
  >
    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400 mb-2 border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
       <MapPin size={24} />
    </div>
    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-2">
      Visit our studio
      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </h4>
    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors mt-2">
      Shop no. 9, Pratik Arcade,<br />
      Near Bytco Point Nashik Road,<br />
      Nashik - 422101.
    </p>
  </a>
</div>

              <div className="space-y-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400 mb-2 border border-white/10">
                   <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Contact</h4>
                <div className="space-y-2 text-slate-400 text-sm md:text-base">
                  <p>
                    <span className="text-slate-500 text-xs block mb-1 uppercase tracking-wider">Phone</span>
                    <a href="tel:+919881810589" className="text-white hover:text-purple-400 transition-colors font-medium">
                      +91 98818 10589
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-500 text-xs block mb-1 uppercase tracking-wider">Email</span>
                    <a href="mailto:aksharamgraphics14@gmail.com" className="text-white hover:text-purple-400 transition-colors font-medium break-all">
                      aksharamgraphics14@gmail.com
                    </a>
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