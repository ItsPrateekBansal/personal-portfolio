"use client"

import { ExternalLink, Github, Bot, Utensils, Code, ShieldCheck, MessageSquare, Smartphone, FileText } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  tagline: string
  badge: string
  badgeColor: string
  icon: typeof Bot
  description: string
  details: string[]
  stack: string[]
  github: string | null
  demo: string | null
  architecture: string
}

const projects: Project[] = [
  {
    title: "CodeGuardian",
    tagline: "Autonomous On-Call Engineer",
    badge: "Autonomous Systems",
    badgeColor: "bg-accent/20 text-accent border-accent/30",
    icon: Bot,
    description:
      "An orchestrated AI agent that analyzes every GitHub commit, tests for vulnerabilities, and applies probable patches. It informs the status via phone call.",
    details: [
      "Integrated OpenAI GPT APIs and Daytona Sandbox for code analysis",
      "Connected Sentry Dashboard and CodeRabbit for code review analysis",
      "Implemented autonomous flow with real-time notifications",
    ],
    stack: ["FastAPI", "Python", "GitHub Actions", "OpenAI", "Daytona"],
    github: "https://github.com/itsprateekbansal",
    demo: null,
    architecture: "AI Agent → Code Analysis → Vulnerability Scan → Patch Generation → Notification",
  },
  {
    title: "Thunder Food",
    tagline: "Campus Food Delivery Platform",
    badge: "Full-Stack + ML",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    icon: Utensils,
    description:
      "A food delivery application following industrial Software Engineering practices with incremental model. Serves the campus food delivery ecosystem, boosting local economy.",
    details: [
      "Implemented secure authentication with real-time order tracking dashboard",
      "Integrated payment gateway with personalized ML recommendations",
      "Maintained proper project structure and documentation for scalability",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React.js", "TailwindCSS", "ML"],
    github: "https://github.com/itsprateekbansal",
    demo: null,
    architecture: "React UI → Node API → MongoDB → ML Recommendations",
  },
  {
    title: "Credit Card Fraud System",
    tagline: "AI-Powered Fraud Detection",
    badge: "Award Winner",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    icon: ShieldCheck,
    description:
      "Won 3rd Prize at American Express CODESTREET 2020. An ML-based credit card fraud detection system using techniques from highly cited research papers.",
    details: [
      "Improved both security and transaction speed simultaneously",
      "Implemented novel techniques from cutting-edge research papers",
      "Thoroughly validated system with comprehensive testing",
    ],
    stack: ["Python", "Machine Learning", "Data Science", "Fraud Detection"],
    github: null,
    demo: null,
    architecture: "Transaction Data → Feature Engineering → ML Model → Fraud Prediction",
  },
  {
    title: "ChatKarloFrands",
    tagline: "Real-Time Chat Application",
    badge: "WebSocket",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: MessageSquare,
    description:
      "Basic real-time text-based communication web app with instant messaging capabilities.",
    details: [
      "Implementation based on Socket.io for real-time bidirectional communication",
      "Built instant messaging with room-based chat features",
      "Lightweight and responsive design",
    ],
    stack: ["Node.js", "Socket.io", "JavaScript", "HTML/CSS"],
    github: "https://github.com/itsprateekbansal",
    demo: null,
    architecture: "Client → Socket.io → Server → Broadcast to Room",
  },
  {
    title: "FUNFONE",
    tagline: "Interactive Musical Dialer",
    badge: "Mobile App",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    icon: Smartphone,
    description:
      "A fun Flutter-based replica of toy phones from carnivals. Each dialer key is mapped to a particular song for instant playback.",
    details: [
      "Built with Flutter for cross-platform mobile experience",
      "Each key triggers corresponding audio playback",
      "Instant song switching on button tap",
    ],
    stack: ["Flutter", "Dart", "Audio API", "Mobile UI"],
    github: "https://github.com/itsprateekbansal/FUNFONE",
    demo: null,
    architecture: "UI Dialer → Key Mapping → Audio Controller → Playback",
  },
  {
    title: "ML Bone Implant Research",
    tagline: "Academic Publication",
    badge: "Research Paper",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: FileText,
    description:
      "Published research on integrating ML for predicting biomechanical properties of layered manufactured bone implants using XGBoost and Adaboost.",
    details: [
      "Evaluated various ML models including XGBoost and Adaboost",
      "Dataset of 100 data points analyzing printing parameters",
      "Guides biomedical engineers for enhanced orthopedic implants",
    ],
    stack: ["Python", "XGBoost", "Adaboost", "Machine Learning", "Data Science"],
    github: null,
    demo: "https://www.sciencedirect.com",
    architecture: "Data Collection → Feature Analysis → ML Training → Prediction",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div 
        className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 glow-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header with glow effect */}
        <div className="relative p-6 pb-4">
          {/* Background glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'border-primary/50 glow' : ''
              }`}>
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <Badge className={`mb-2 ${project.badgeColor}`}>{project.badge}</Badge>
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Architecture diagram on hover */}
          <div className={`overflow-hidden transition-all duration-500 ${
            isHovered ? 'max-h-20 opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="font-mono text-xs text-primary/80 bg-card/80 border border-border/50 rounded p-3">
              <span className="text-muted-foreground">Architecture:</span> {project.architecture}
            </div>
          </div>

          {/* Details */}
          <ul className="space-y-2 mb-4">
            {project.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Code className="w-3 h-3 mt-1.5 text-primary shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-secondary/50 border border-border/50 rounded text-foreground font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/50 flex items-center gap-3">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="group/btn border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href={project.github} target="_blank">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                View Code
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild className="glow">
              <Link href={project.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {!project.github && !project.demo && (
            <span className="text-sm text-muted-foreground font-mono">Private / Internal Project</span>
          )}
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
          <div className={`absolute -top-10 -right-10 w-20 h-20 rotate-45 transition-colors duration-300 ${
            isHovered ? 'bg-primary/20' : 'bg-transparent'
          }`} />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <div className="mb-8">
        <p className="font-mono text-xs text-primary mb-2">{'>'} projects.showcase(featured=true)</p>
        <p className="text-muted-foreground">
          Showcasing innovative solutions in AI automation and full-stack development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
