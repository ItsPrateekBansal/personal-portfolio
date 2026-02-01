"use client"

import Link from "next/link"
import { ChevronUp, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"

const navItems = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.toLowerCase())
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}>
        <div className="container flex h-16 items-center justify-between">
          <Link href="#about" className="font-heading font-bold text-xl text-gradient">
            PB
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 border-b border-border/50" : "max-h-0"
        }`}>
          <nav className="container py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center py-32 relative">
          <Hero />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
          <div className="container relative">
            <SectionHeader 
              title="Experience" 
              subtitle="My professional journey building software solutions"
            />
            <Experience />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative">
          <div className="container relative">
            <SectionHeader 
              title="Tech Stack" 
              subtitle="Technologies and tools I've mastered"
            />
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
          <div className="container relative">
            <SectionHeader 
              title="Projects" 
              subtitle="Showcasing my work and creative solutions"
            />
            <Projects />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 relative">
          <div className="container relative">
            <SectionHeader 
              title="Achievements" 
              subtitle="Recognition and milestones in my career"
            />
            <Achievements />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
          <div className="container relative">
            <SectionHeader 
              title="Contact" 
              subtitle="Let's connect and discuss opportunities"
            />
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 relative">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Prateek Bansal. Built with precision.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/itsprateekbansal"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/itsprateekbansal"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:prateekbansal2425@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              Email
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Link
        href="#about"
        className={`fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 glow z-50 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Link>
    </div>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-2 text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
    </div>
  )
}
