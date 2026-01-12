"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, Filter } from "lucide-react"

// Category Data
const categories = ["All", "PVC Art", "Sign Boards", "Client Works", "3D Lettering"]

// Project Data
const projects = [
  {
    id: 1,
    title: "Sayadri The Juice Farm",
    category: "Client Works", // or "PVC Art"
    // Placeholder image for a Juice Shop - Replace with your REAL photo of the shop
    image: "https://i.postimg.cc/hPxdffSw/client1.png?q=80&w=800&auto=format&fit=crop", 
    description: "Vibrant custom PVC branding and menu boards designed for high visibility and weather resistance."
  },
  {
    id: 2,
    title: "Neon Coffee Shop Signage",
    category: "Sign Boards",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
    description: "Vibrant custom neon flex signage for a modern cafe entrance."
  },
  {
    id: 3,
    title: "Geometric Room Divider",
    category: "PVC Art",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    description: "CNC-cut intricate jaali partition for a private residence living room."
  },
  {
    id: 4,
    title: "Corporate Office Branding",
    category: "3D Lettering",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    description: "Brushed steel finish dimensional letters for reception backdrop."
  },
  {
    id: 5,
    title: "Backlit Storefront Facade",
    category: "Sign Boards",
    image: "https://images.unsplash.com/photo-1550921448-605e6dc9b4c0?q=80&w=800&auto=format&fit=crop",
    description: "Complete ACP cladding with LED channel letters for a retail showroom."
  },
  {
    id: 6,
    title: "Custom House Nameplate",
    category: "PVC Art",
    image: "https://images.unsplash.com/photo-1628191011993-4350f9a7413a?q=80&w=800&auto=format&fit=crop",
    description: "Weather-proof engraved nameplate with floral motifs."
  }
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(projects)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => {
      if (activeCategory === "All") {
        setVisibleProjects(projects)
      } else {
        setVisibleProjects(projects.filter(p => p.category === activeCategory))
      }
      setIsAnimating(false)
    }, 300)
    return () => clearTimeout(timeout)
  }, [activeCategory])

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- HERO STYLE BACKGROUND EFFECTS --- */}
      
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div 
          style={{ 
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
          className="w-full h-full" 
        />
      </div>

      {/* 2. Ambient Glows (Purple/Blue) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Works</span>
            </h2>
            <p className="text-lg text-slate-400">
              A showcase of our finest custom signage, branding, and decorative art projects.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
            <div className="flex space-x-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Layout (Horizontal on Mobile / Grid on Desktop) */}
        <div 
          className={`
            flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0
            transition-all duration-500 ease-in-out
            ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}
          `}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar styles */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {visibleProjects.map((project) => (
            <div 
              key={project.id} 
              className="
                flex-none w-[85vw] md:w-auto snap-center 
                group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer
              "
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                 {/* Category Badge */}
                 <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white rounded-full">
                      {project.category}
                    </span>
                 </div>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Arrow Icon on Hover */}
                <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 mt-[-20px]">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="w-1 flex-none md:hidden" />
        </div>
        
        {/* Empty State */}
        {visibleProjects.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                <Filter className="mx-auto h-12 w-12 text-slate-600 mb-4" />
                <h3 className="text-lg font-medium text-white">No projects found</h3>
                <p className="text-slate-500">Try selecting "All" to see everything.</p>
            </div>
        )}

        {/* View More Button */}
        <div className="mt-8 md:mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}