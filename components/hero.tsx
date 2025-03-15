"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div
          className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Software Engineer @ American Express
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Prateek Bansal
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-md leading-relaxed">
              Building robust backend services and modern web applications with passion and precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild className="group">
              <Link href="#contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <a
                href="https://drive.google.com/file/d/18XZO6bqSCPRszjQ_FLo9nw_LZKDEuZeR/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <Link
              href="https://github.com/itsprateekbansal"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/itsprateekbansal"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:prateekbansal64@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div
          className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse-slow"></div>
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-full border-2 border-background">
              <img
                src="prateekimg.png"
                alt="Prateek Bansal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

