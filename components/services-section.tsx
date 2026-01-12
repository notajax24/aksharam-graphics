"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight } from "lucide-react"

// Service Data with updated images
const services = [
  {
    id: 1,
    title: "Handcrafted PVC Nameplates",
    description: "Premium customized nameplates with intricate CNC detailing. Weather-resistant finishes perfect for luxury homes.",
    image: "https://nutcaseshop.com/cdn/shop/products/15a_ba8fbd69-d9c4-4fe8-a23d-ff22c266ebf6.jpg?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "3D LED & Neon Signage",
    description: "Illuminated acrylic letters and neon visuals that make your business visible day and night. High-impact branding.",
    image: "https://images.unsplash.com/photo-1565206595640-6cfd90e0ae09?q=80&w=800&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: 3,
    title: "Corporate Branding Wall",
    description: "Transform dull office walls into inspiring brand stories with 3D logos, mission statements, and dimensional graphics.",
    image: "https://i.pinimg.com/736x/4e/82/44/4e82443114201cff366238e92b67aef5.jpg?q=80&w=800&auto=format&fit=crop",
    tag: "Corporate"
  },
  {
    id: 4,
    title: "Wayfinding & Directional",
    description: "Clear, professional signage systems for hospitals, campuses, and malls to guide visitors effectively.",
    image: "https://i.pinimg.com/736x/f9/32/a0/f932a0c114680716360f4319e2f037ec.jpg?q=80&w=800&auto=format&fit=crop",
    tag: "Functional"
  },
  {
    id: 5,
    title: "Retail Storefront Facades",
    description: "Complete shop front transformations including ACP cladding, main signage, and window graphics.",
    image: "https://i.pinimg.com/1200x/55/ef/37/55ef37fb7803bb2a9197b18be2d0a2ed.jpg?q=80&w=800&auto=format&fit=crop",
    tag: "Commercial"
  },
]

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Check scroll position to enable/disable buttons
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      checkScroll()
    }
    return () => container?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="pt-0 pb-24 md:pt-10 md:pb-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS (Matches Hero/Portfolio) --- */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div 
          style={{ 
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
          className="w-full h-full" 
        />
      </div>
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-4 backdrop-blur-sm">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Expert Craftsmanship</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Bring your brand to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Life</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              From handcrafted home decor to industrial-grade corporate signage, we deliver precision and style in every cut.
            </p>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all duration-300 ${
                !canScrollLeft
                  ? "border-white/5 text-white/20 cursor-not-allowed"
                  : "border-white/10 text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-white/5"
              }`}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all duration-300 ${
                !canScrollRight
                  ? "border-white/5 text-white/20 cursor-not-allowed"
                  : "border-white/10 text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-white/5"
              }`}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-none w-[85vw] sm:w-[380px] snap-center group"
            >
              <div className="h-full bg-slate-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                
                {/* Image Area */}
                <div className="relative h-64 w-full overflow-hidden border-b border-white/5">
                   <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white rounded-full">
                        {service.tag}
                      </span>
                   </div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-400 font-semibold text-sm group/btn cursor-pointer">
                    View Details
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="w-4 flex-none sm:hidden" />
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-[-20px]">
           <div className="text-xs text-slate-500 animate-pulse flex items-center gap-1">
              <span>Swipe to explore</span>
              <ArrowRight size={12} />
           </div>
        </div>
      </div>
    </section>
  )
}