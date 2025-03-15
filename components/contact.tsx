"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const formRef = useRef(null)
  const contactRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div
        ref={formRef}
        className={`transition-all duration-700 ${
          isFormInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <Card className="border-muted-foreground/20 hover:shadow-lg transition-all duration-300 hover:shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
            <CardDescription className="text-base">
              Fill out the form below or reach out through one of the provided channels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-input/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-input/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 border-input/50 focus-visible:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full group">
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div
        ref={contactRef}
        className={`transition-all duration-700 ${
          isContactInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <Card className="h-full border-muted-foreground/20 hover:shadow-lg transition-all duration-300 hover:shadow-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Connect With Me</CardTitle>
            <CardDescription className="text-base">
              Feel free to reach out through any of these platforms.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href="mailto:prateekbansal64@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  prateekbansal64@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <Link
                  href="https://linkedin.com/in/itsprateekbansal"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/itsprateekbansal
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <Link
                  href="https://github.com/itsprateekbansal"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/itsprateekbansal
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">Currently open to new opportunities and collaborations.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

