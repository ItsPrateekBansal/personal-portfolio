"use client"

import type React from "react"

import { Award, Medal } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Achievement = {
  title: string
  icon: React.ElementType
  description: string
  link?: string
}

const achievements: Achievement[] = [
  {
    title: "Google Cloud Professional Cloud Architect Certification",
    icon: Award,
    description:
      "Validated expertise in designing, developing, and managing robust, secure, scalable, and dynamic solutions on Google Cloud.",
    link: "https://www.credly.com/badges/69f1959a-4999-446d-8941-95698429959b", // Replace with actual certificate link
  },
  {
    title: "3rd Prize Winner – National Level Hackathon (Codestreet 2020)",
    icon: Medal,
    description: "Recognized for innovative solution development at American Express's national coding competition.",
  },
]

export default function Achievements() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {achievements.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} index={index} />
      ))}
    </div>
  )
}

type AchievementCardProps = {
  achievement: Achievement
  index: number
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:shadow-primary/5 border-muted-foreground/20">
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <div className="mt-1 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
            <achievement.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{achievement.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
          {achievement.link && (
            <div className="mt-4">
              <Button variant="outline" size="sm" asChild>
                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
