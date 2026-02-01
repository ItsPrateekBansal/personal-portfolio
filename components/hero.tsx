"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const codeSnippet = `// CodeGuardian - Autonomous On-Call Engineer
async function analyzeCommit(commit: GitCommit) {
  const vulnerabilities = await scanForVulnerabilities(commit);
  
  if (vulnerabilities.length > 0) {
    const patch = await generatePatch(vulnerabilities);
    await applyPatch(patch);
    await notifyEngineer(commit.author);
  }
  
  return { status: 'secured', commit: commit.sha };
}`

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullTitle = "Prateek Bansal"
  
  useEffect(() => {
    setIsVisible(true)
    
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedText(fullTitle.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="container relative">
      {/* Animated code background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 overflow-hidden pointer-events-none hidden lg:block">
        <pre className="font-mono text-xs text-primary leading-relaxed animate-pulse-slow">
          {codeSnippet}
        </pre>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center relative">
        <div
          className={`flex flex-col justify-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Status badge */}
          <div className="flex items-center gap-3">
            <Badge className="px-4 py-2 text-sm bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2 inline-block" />
              Open to opportunities
            </Badge>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              <MapPin className="w-3 h-3" /> San Jose, CA
            </span>
          </div>

          {/* Main heading with terminal effect */}
          <div>
            <p className="font-mono text-primary text-sm mb-2 tracking-wider">{'>'} init engineer --profile</p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold tracking-tight mb-4">
              <span className="text-gradient">{typedText}</span>
              <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
              <span className="text-foreground font-medium">Software Engineer</span> | AI & Cloud Architect
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Building robust backend services and distributed systems. GCP Professional Cloud Architect certified.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group glow hover:scale-105 transition-all">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group border-primary/30 hover:border-primary hover:bg-primary/10">
              <a
                href="https://drive.google.com/file/d/1eKIQBY5wdCngZqdY0xdxTsTLH2HSDNrk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 pt-2">
            <Link
              href="https://github.com/itsprateekbansal"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:glow-text"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/itsprateekbansal"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:glow-text"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:prateekbansal2425@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:glow-text"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="tel:+16692604916"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:glow-text"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>

        {/* Profile image with dashboard-style frame */}
        <div
          className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-500 animate-pulse-slow" />
            
            {/* Dashboard frame */}
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 glow-border">
              {/* Frame header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">profile.sys</span>
              </div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <img
                  src="/prateekimg.png"
                  alt="Prateek Bansal"
                  className="h-72 w-72 sm:h-80 sm:w-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-50" />
                </div>
              </div>
              
              {/* Frame footer */}
              <div className="mt-3 pt-2 border-t border-border/50 flex justify-between items-center">
                <span className="font-mono text-xs text-primary">STATUS: ACTIVE</span>
                <span className="font-mono text-xs text-muted-foreground">v2.0.25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
