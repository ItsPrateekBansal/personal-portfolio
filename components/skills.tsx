"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

// Primary skills for the orbital visualization
const primarySkills = [
  { name: "Java", level: 95, color: "hsl(199, 89%, 48%)" },
  { name: "Python", level: 90, color: "hsl(180, 100%, 45%)" },
  { name: "GCP", level: 88, color: "hsl(199, 89%, 48%)" },
  { name: "Spring Boot", level: 92, color: "hsl(180, 100%, 45%)" },
  { name: "React", level: 85, color: "hsl(199, 89%, 48%)" },
  { name: "System Design", level: 88, color: "hsl(180, 100%, 45%)" },
]

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "React.js", "Node.js", "Flask", "FastAPI", "Flutter"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Cassandra", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Docker", "Jenkins", "Git", "GitHub Actions", "Kafka"],
  },
  {
    category: "AI & Architecture",
    skills: ["System Design", "Distributed Systems", "Microservices", "LangChain", "RAG", "Vector Databases"],
  },
]

function SkillOrbit() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const [rotation, setRotation] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      ref={ref}
      className={`relative w-full aspect-square max-w-md mx-auto transition-all duration-1000 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-8 rounded-full border border-primary/15" />
      <div className="absolute inset-16 rounded-full border border-primary/10" />

      {/* Center hub */}
      <div className="absolute inset-1/3 rounded-full bg-card border border-primary/30 flex items-center justify-center glow-border">
        <div className="text-center">
          <div className="font-mono text-xs text-primary mb-1">TECH RADAR</div>
          <div className="font-heading text-lg font-bold text-foreground">
            {activeSkill !== null ? primarySkills[activeSkill].name : "CORE"}
          </div>
          {activeSkill !== null && (
            <div className="font-mono text-xs text-accent mt-1">
              {primarySkills[activeSkill].level}% Proficiency
            </div>
          )}
        </div>
      </div>

      {/* Orbital nodes */}
      {primarySkills.map((skill, index) => {
        const angle = (index * 60 + rotation) * (Math.PI / 180)
        const radius = 42
        const x = 50 + radius * Math.cos(angle)
        const y = 50 + radius * Math.sin(angle)

        return (
          <div
            key={skill.name}
            className="absolute transition-all duration-300 cursor-pointer group"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            {/* Pulse effect */}
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ backgroundColor: skill.color, animationDuration: '2s' }}
            />
            
            {/* Node */}
            <div 
              className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                activeSkill === index ? 'scale-125' : 'scale-100'
              }`}
              style={{ 
                backgroundColor: `${skill.color}20`,
                borderColor: skill.color,
                boxShadow: activeSkill === index ? `0 0 20px ${skill.color}` : 'none'
              }}
            >
              <span className="font-mono text-xs text-foreground font-medium text-center leading-tight px-1">
                {skill.name.split(' ')[0]}
              </span>
            </div>
          </div>
        )
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {primarySkills.map((_, index) => {
          const angle = (index * 60 + rotation) * (Math.PI / 180)
          const radius = 42
          const x = 50 + radius * Math.cos(angle)
          const y = 50 + radius * Math.sin(angle)

          return (
            <line
              key={index}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="hsl(199, 89%, 48%)"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
            />
          )
        })}
      </svg>
    </div>
  )
}

function SkillCategory({ category, skills, index }: { category: string; skills: string[]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-300 group glow-border">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h3 className="font-mono text-sm text-primary uppercase tracking-wider">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm bg-secondary/50 border border-border/50 rounded-md text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left: Orbital visualization */}
      <div className="order-2 lg:order-1">
        <SkillOrbit />
      </div>

      {/* Right: Skill categories */}
      <div className="order-1 lg:order-2 space-y-4">
        <div className="mb-6">
          <p className="font-mono text-xs text-primary mb-2">{'>'} system.skills.list()</p>
          <p className="text-muted-foreground">
            Expertise spanning backend systems, cloud infrastructure, and AI integration.
          </p>
        </div>
        {skillCategories.map((cat, index) => (
          <SkillCategory key={cat.category} category={cat.category} skills={cat.skills} index={index} />
        ))}
      </div>
    </div>
  )
}
