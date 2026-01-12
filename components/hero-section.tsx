"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight as LucideArrowRight, Play as LucidePlay } from "lucide-react"

// Replaced custom SVGs with Lucide icons for consistency and better hover states in the dark theme
const ArrowRight = () => (
  <LucideArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
)

const Play = () => (
  <LucidePlay className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform fill-current" />
)

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative bg-slate-950 overflow-hidden">
      
      {/* --- HERO BACKGROUND EFFECTS --- */}
      
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

      {/* 2. Ambient Glows (Purple top-right, Blue bottom-left) - Made larger for Hero impact */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse-slow delay-1000" />

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
          Signage & Dimensional Art Studio
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading text-white">
          <span>Transforming Ideas into</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient">Digital Reality</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Transforming creativity into tangible art – one sign at a time!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-slate-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group cursor-pointer relative overflow-hidden"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Us !
            <ArrowRight />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer backdrop-blur-sm"
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Play />
            View Portfolio
          </Button>
        </div>

      </div>
    </section>
  )
}