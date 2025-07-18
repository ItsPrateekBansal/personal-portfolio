"use client"

import { GraduationCap } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type EducationItem = {
  degree: string
  school: string
  location: string
  period: string
  gpa?: string
  status?: string
}

const education: EducationItem[] = [
  {
    degree: "Masters of Science in Computer Science",
    school: "San Jose State University",
    location: "San Jose, California, United States",
    period: "August 2025 - Present",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Thapar Institute of Engineering and Technology",
    location: "Patiala, India",
    period: "August 2019 – June 2023",
    gpa: "3.70/4.0",
  },
]

export default function Education() {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-[27px] top-[60px] bottom-8 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent"></div>

      {education.map((edu, index) => (
        <EducationCard key={index} education={edu} index={index} />
      ))}
    </div>
  )
}

type EducationCardProps = {
  education: EducationItem
  index: number
}

function EducationCard({ education, index }: EducationCardProps) {
  const ref = useRef<HTMLDivElement>(null)
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
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        <Card className="flex-1 group hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 border-muted-foreground/20">
          <CardHeader className="pb-2">
            <div className="flex justify-between flex-wrap gap-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{education.degree}</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="font-normal">
                  {education.period}
                </Badge>
                {education.status && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {education.status}
                  </Badge>
                )}
              </div>
            </div>
            <CardDescription className="text-base">
              {education.school} | {education.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {education.gpa && (
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-background">
                  GPA: {education.gpa}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
