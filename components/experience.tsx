"use client"

import { BriefcaseIcon } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineer",
    company: "American Express",
    location: "Gurugram, India",
    period: "August 2023 – Present",
    description: [
      "Engineered a backend service to monitor and track downstream API requests, building a reconciliation system to ensure data consistency.",
      "Spearheading the modernization of a deletion utility tool, ensuring compliance with data retention policies and regulatory requirements.",
    ],
    skills: ["Java", "Spring Boot", "Kafka", "React", "PostgreSQL", "Docker", "System Design", "API Development"],
  },
  {
    title: "Software Engineer Intern",
    company: "American Express",
    location: "Gurugram, India",
    period: "January 2023 – June 2023",
    description: [
      "Automated compliance regulatory tasks, reducing manual effort and saving 30 minutes per execution.",
      "Developed scripts to eliminate repetitive tasks and modernized legacy applications, improving operational efficiency.",
    ],
    skills: ["Python", "Bash", "Automation", "Compliance", "API Development"],
  },
  {
    title: "Software Engineer Intern",
    company: "American Express",
    location: "Gurugram, India",
    period: "June 2022 – July 2022",
    description: [
      "Developed and migrated 10+ Key Risk Indicators (KRIs) from Teradata to Cornerstone, leading to direct cost reductions.",
      "Created real-time alerting mechanisms for a smart monitoring platform, enhancing risk mitigation.",
    ],
    skills: ["SQL", "Teradata", "Cornerstone", "Data Migration", "Monitoring Systems"],
  },
  {
    title: "Software Engineer Intern",
    company: "American Express",
    location: "Gurugram, India",
    period: "June 2021 – July 2021",
    description: [
      "Built a Chrome extension for NiFi job operations, saving ~$700 per day in operational costs.",
      "Designed a Proof of Concept for using Cassandra DB as a Time Series Database, implementing aggregation functions for time-series analytics.",
    ],
    skills: ["JavaScript", "Chrome Extensions", "Apache NiFi", "Cassandra", "Time-Series Data"],
  },
]

export default function Experience() {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-[27px] top-[60px] bottom-8 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent"></div>

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
    </div>
  )
}

function ExperienceCard({ experience, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-6">
        <div className="relative z-10">
          <div className="mt-1.5 rounded-full bg-primary p-3 shadow-lg shadow-primary/20">
            <BriefcaseIcon className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        <Card className="flex-1 group hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 border-muted-foreground/20">
          <CardHeader className="pb-2">
            <div className="flex justify-between flex-wrap gap-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{experience.title}</CardTitle>
              <Badge variant="outline" className="font-normal">
                {experience.period}
              </Badge>
            </div>
            <CardDescription className="text-base">
              {experience.company} | {experience.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              {experience.description.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

