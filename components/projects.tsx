"use client"

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Thunder",
    description:
      "A food delivery web application with AI-powered recommendations and voice command support for campus restaurants.",
    details: [
      "Implemented secure authentication with bcrypt password hashing and integrated Razorpay for payments.",
      "Designed and built a real-time order tracking dashboard for a seamless user experience.",
    ],
    skills: ["Node.js", "MongoDB", "Express.js", "Tailwind CSS", "AI/ML", "Authentication", "Payments"],
    github: "https://github.com/itsprateekbansal",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "FaceMash",
    description:
      "A face detection and recognition system capable of recognizing and swapping multiple faces in real-time.",
    details: [
      "Implemented K-Nearest Neighbors (KNN) for recognition and utilized Haar-Cascade Classifier for detection.",
    ],
    skills: ["Python", "OpenCV", "KNN", "Computer Vision", "Image Processing"],
    github: "https://github.com/itsprateekbansal",
    demo: null,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Projects() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full flex flex-col overflow-hidden group border-muted-foreground/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
            {project.details.map((detail, i) => (
              <li key={i} className="leading-relaxed">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/50">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 pt-4">
          <Button variant="outline" size="sm" asChild className="group/btn">
            <Link href={project.github} target="_blank">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" /> GitHub
            </Link>
          </Button>
          {project.demo && (
            <Button size="sm" asChild className="group/btn">
              <Link href={project.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" /> Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

