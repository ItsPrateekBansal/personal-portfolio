"use client"

import { ChevronDown, TrendingUp } from "lucide-react"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineer 2",
    company: "American Express",
    location: "Gurgaon, India",
    period: "Mar 2025 - Aug 2025",
    level: "SE2",
    achievements: [
      {
        text: "Led refactoring of legacy backend services to modernize codebases, enforce design best practices, and improve maintainability across distributed systems.",
        metric: null,
      },
      {
        text: "Optimized SQL queries, reducing average latency through improved pooling and batching.",
        metric: "35% latency reduction",
      },
      {
        text: "Integrated Redis caching for balance-check and transaction validation workflows, reducing database load.",
        metric: null,
      },
      {
        text: "Enhanced system reliability via distributed tracing, proactive alerting, and self-healing recovery.",
        metric: "Reduced downtime",
      },
    ],
    skills: ["Java", "Spring Boot", "Redis", "SQL", "Distributed Systems"],
  },
  {
    title: "Software Engineer 1",
    company: "American Express",
    location: "Gurgaon, India",
    period: "Aug 2023 - Mar 2025",
    level: "SE1",
    achievements: [
      {
        text: "Developed a backend service to monitor and reconcile downstream API requests, ensuring accurate balance verification.",
        metric: "100% data consistency",
      },
      {
        text: "Automated global data deletion operations, replacing two manual sprints with a fully self-serve workflow.",
        metric: "$10K+ savings/quarter",
      },
      {
        text: "Created APIs and business logic for ingestion reporting.",
        metric: "30% user adoption increase",
      },
    ],
    skills: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React"],
  },
  {
    title: "Software Engineer Intern",
    company: "American Express",
    location: "Gurgaon, India",
    period: "Jan 2023 - Jun 2023",
    level: "Intern",
    achievements: [
      {
        text: "Built a Chrome extension for NiFi job operations, reducing manual effort.",
        metric: "$700/day savings",
      },
      {
        text: "Automated compliance processes, enabling engineers to reallocate hours to higher-value work.",
        metric: "30min → 3min execution",
      },
      {
        text: "Developed a proof-of-concept to explore Cassandra as a time-series database for performance analytics.",
        metric: null,
      },
    ],
    skills: ["JavaScript", "Python", "Apache NiFi", "Cassandra"],
  },
]

function ExperienceCard({ experience, index, isExpanded, onToggle }: { 
  experience: typeof experiences[0]; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const levelColors: Record<string, string> = {
    SE2: "bg-primary text-primary-foreground",
    SE1: "bg-accent/20 text-accent border-accent/30",
    Intern: "bg-secondary text-secondary-foreground",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline line */}
        {index < experiences.length - 1 && (
          <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        )}

        {/* Timeline node */}
        <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center glow">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Card */}
        <div 
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 glow-border cursor-pointer"
          onClick={onToggle}
        >
          {/* Header */}
          <div className="p-4 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Badge className={levelColors[experience.level]}>{experience.level}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">{experience.period}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{experience.title}</h3>
                <p className="text-muted-foreground">{experience.company} | {experience.location}</p>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Key metrics preview */}
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.achievements
                .filter(a => a.metric)
                .slice(0, 2)
                .map((achievement, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {achievement.metric}
                  </div>
                ))}
            </div>
          </div>

          {/* Expandable content */}
          <div className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border/50 pt-4">
              <ul className="space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.text}
                      {achievement.metric && (
                        <span className="ml-2 text-accent font-medium">({achievement.metric})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-secondary/50 border border-border/50 rounded text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="font-mono text-xs text-primary mb-2">{'>'} career.timeline.render()</p>
        <p className="text-muted-foreground">
          An ascending journey at American Express: Intern → SE1 → SE2
        </p>
      </div>

      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}
