import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Prateek Bansal
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {["About", "Experience", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-sm font-medium relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <Hero />
        </section>

        <section id="experience" className="py-24 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 pointer-events-none"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">My professional journey building software solutions</p>
            <Experience />
          </div>
        </section>

        <section id="skills" className="py-24 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Technologies and tools I've mastered along the way</p>
            <Skills />
          </div>
        </section>

        <section id="projects" className="py-24 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 pointer-events-none"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Showcasing my work and creative solutions</p>
            <Projects />
          </div>
        </section>

        <section id="achievements" className="py-24 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Achievements</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Recognition and milestones in my career</p>
            <Achievements />
          </div>
        </section>

        <section id="contact" className="py-24 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 pointer-events-none"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Contact</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Let's connect and discuss opportunities</p>
            <Contact />
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prateek Bansal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/itsprateekbansal"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/itsprateekbansal"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:prateekbansal64@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </footer>

      <Link
        href="#about"
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:bg-primary/90 z-50"
        aria-label="Scroll to top"
      >
        <ChevronDown className="h-6 w-6 rotate-180" />
      </Link>
    </div>
  )
}

