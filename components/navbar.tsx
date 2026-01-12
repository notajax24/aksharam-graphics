"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import logo from "../public/images/logo.png"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

  // 1. IMPROVEMENT: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Scroll visibility logic
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100)

    const controlNavbar = () => {
      if (typeof window === "undefined") return

      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 10) {
          setIsVisible(false) // Hide on scroll down
        } else if (lastScrollY.current - currentScrollY > 10) {
          setIsVisible(true) // Show on scroll up
        }
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", controlNavbar, { passive: true })
    return () => {
      window.removeEventListener("scroll", controlNavbar)
      clearTimeout(timer)
    }
  }, [])

  // 2. IMPROVEMENT: Simplified Scroll Logic
  // Instead of manual math, we rely on native IDs.
  // Note: Add class `scroll-mt-32` to your Sections (About, Services, etc.) in your page code.
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav
      className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95vw] max-w-[900px] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 md:px-6 md:py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href=""
            className="flex items-center hover:scale-105 transition-transform duration-200"
            onClick={() => setIsOpen(false)}
          >
             <img src="https://aksharamarts.vercel.app/assets/logo-2EhB0iAQ.png" width={80} alt="" />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">Aksharam Graphics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="bg-white hover:bg-gray-100 text-black font-medium px-5 py-2 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group text-sm"
            >
              <span className="mr-2">Get in Touch</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button - 3. IMPROVEMENT: Added Accessibility */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:scale-110 transition-transform duration-200 relative w-6 h-6 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Menu
                size={24}
                className={`transition-all duration-300 absolute ${
                  isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`transition-all duration-300 absolute ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[70px] p-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden">
          <div className="flex flex-col space-y-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl px-4 py-3 text-lg font-medium transition-all duration-300 flex items-center justify-between group"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                }}
              >
                {item.name}
                {/* Visual arrow for mobile links */}
                <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
            
            <div className="h-px bg-white/10 my-2" />
            
            <a
               href="#contact"
               onClick={(e) => handleLinkClick(e, "#contact")}
               className="bg-white text-black font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-[100px] z-[-1]" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </nav>
  )
}