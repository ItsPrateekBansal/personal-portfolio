"use client"

import { Award, Trophy, Users, Cloud } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

const achievements = [
  {
    title: "GCP Professional Cloud Architect",
    subtitle: "Google Cloud Certification",
    icon: Cloud,
    description: "Validated expertise in designing, developing, and managing robust, secure, scalable, and dynamic solutions on Google Cloud Platform.",
    date: "Feb 2025",
    link: "https://www.credential.net/your-credential-link",
    color: "primary",
  },
  {
    title: "National Winner",
    subtitle: "American Express CodeStreet 2020",
    icon: Trophy,
    description: "Recognized for innovative solution development at American Express's national coding competition, competing against top engineering talent.",
    date: "2020",
    link: null,
    color: "accent",
  },
  {
    title: "400+ Engineers Mentored",
    subtitle: "American Express",
    icon: Users,
    description: "Mentored and onboarded over 400 engineers and interns, fostering growth and knowledge sharing across teams.",
    date: "2023-2025",
    link: null,
    color: "primary",
  },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const Icon = achievement.icon
  const colorClasses = achievement.color === "accent" 
    ? "border-accent/30 hover:border-accent/50" 
    : "border-primary/30 hover:border-primary/50"
  const iconBg = achievement.color === "accent" ? "bg-accent/10" : "bg-primary/10"
  const iconColor = achievement.color === "accent" ? "text-accent" : "text-primary"

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`group relative h-full bg-card/50 backdrop-blur-sm border ${colorClasses} rounded-xl p-6 transition-all duration-500 glow-border overflow-hidden`}>
        {/* Background decoration */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${iconBg} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

        <div className="relative">
          {/* Icon and date */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
              <Icon className={`w-7 h-7 ${iconColor}`} />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{achievement.date}</span>
          </div>

          {/* Content */}
          <div className="mb-4">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-1 group-hover:text-gradient transition-all">
              {achievement.title}
            </h3>
            <p className={`text-sm ${iconColor} font-medium`}>{achievement.subtitle}</p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {achievement.description}
          </p>

          {/* View certificate link */}
          {achievement.link && (
            <a 
              href={achievement.link}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 mt-4 text-sm ${iconColor} hover:underline font-mono`}
            >
              View Certificate →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <div className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl">
        <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
          <AnimatedCounter target={value} suffix={suffix} />
        </div>
        <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{label}</div>
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <div>
      <div className="mb-8">
        <p className="font-mono text-xs text-primary mb-2">{'>'} achievements.display()</p>
        <p className="text-muted-foreground">
          Recognition and milestones in my engineering career.
        </p>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatCard value={400} label="Engineers Mentored" suffix="+" />
        <StatCard value={35} label="Latency Reduced" suffix="%" />
        <StatCard value={10} label="Quarterly Savings" suffix="K+" />
        <StatCard value={100} label="Data Consistency" suffix="%" />
      </div>

      {/* Achievement cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  )
}
