"use client"

import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Quick Links",
    links: [
      { title: "Services", href: "#services" },
      { title: "Portfolio", href: "#portfolio" },
      { title: "About", href: "#about" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Follow Us",
    links: [
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 border-t border-white/10 pt-10 pb-6 md:pt-16 md:pb-8 overflow-hidden">
      
      {/* Top Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand Column */}
          <AnimatedContainer className="lg:col-span-1 space-y-3 md:space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Aksharam <span className="text-purple-400">Art</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transforming creativity into tangible art. Your trusted partner for exceptional signage solutions in Nashik since 2015.
            </p>
          </AnimatedContainer>

          {/* Links Columns (Grid on Mobile to save space) */}
          <div className="grid grid-cols-2 gap-4 md:contents">
             {footerLinks.map((section, index) => (
               <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                 <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 md:mb-4">{section.label}</h3>
                 <ul className="space-y-2 md:space-y-3">
                   {section.links.map((link) => (
                     <li key={link.title}>
                       <a
                         href={link.href}
                         className="text-slate-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2"
                       >
                         {link.icon && <link.icon className="size-4" />}
                         {link.title}
                       </a>
                     </li>
                   ))}
                 </ul>
               </AnimatedContainer>
             ))}
          </div>

          {/* Contact Column */}
          <AnimatedContainer delay={0.3} className="lg:col-span-1 mt-2 md:mt-0">
             <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 md:mb-4">Visit Us</h3>
             <ul className="space-y-3 md:space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                   <MapPin className="size-5 text-purple-400 shrink-0 mt-0.5" />
                   <span>Shop no. 9, Pratik Arcade,<br/>Near Bytco Point, Nashik Road,<br/>Nashik - 422101</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="size-4 text-purple-400 shrink-0" />
                   <a href="tel:+919881810589" className="hover:text-white transition-colors">+91 98818 10589</a>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="size-4 text-purple-400 shrink-0" />
                   <a href="mailto:aksharamgraphics14@gmail.com" className="hover:text-white transition-colors">aksharamgraphics14@gmail.com</a>
                </li>
             </ul>
          </AnimatedContainer>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aksharam Art.</p>
          <div className="flex items-center gap-1">
             <span>Developed by</span>
             <a href="https://www.linkedin.com/in/ajay-jachak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
               Ajay Jachak
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Animation Wrapper (No change)
type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}