"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, Phone, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "prateekbansal2425@gmail.com",
    href: "mailto:prateekbansal2425@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1-669-260-4916",
    href: "tel:+16692604916",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/itsprateekbansal",
    href: "https://www.linkedin.com/in/itsprateekbansal",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/itsprateekbansal",
    href: "https://github.com/itsprateekbansal",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const formRef = useRef(null)
  const contactRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <div className="mb-8">
        <p className="font-mono text-xs text-primary mb-2">{'>'} contact.init()</p>
        <p className="text-muted-foreground text-lg">
          {"Let's build something amazing together."}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact form */}
        <div
          ref={formRef}
          className={`transition-all duration-700 ${
            isFormInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden glow-border">
            {/* Form header */}
            <div className="px-6 py-4 border-b border-border/50 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">message.compose()</span>
            </div>

            {/* Form content */}
            <div className="p-6">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                      {"// Your name"}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-border/50 focus:border-primary focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                      {"// Your email"}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-border/50 focus:border-primary focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                      {"// Your message"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-32 bg-card/50 border-border/50 focus:border-primary focus-visible:ring-primary/30 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full glow group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div
          ref={contactRef}
          className={`transition-all duration-700 ${
            isContactInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="space-y-4">
            {/* Location card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 glow-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-muted-foreground">San Jose, California, United States</p>
                </div>
              </div>
            </div>

            {/* Contact links */}
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className={`block bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group glow-border`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{link.label}</h3>
                        <p className="text-muted-foreground text-sm">{link.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              )
            })}

            {/* Status card */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-sm text-accent">CURRENTLY AVAILABLE</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to new opportunities, collaborations, and interesting projects. 
                {"Let's connect and discuss how we can work together."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
