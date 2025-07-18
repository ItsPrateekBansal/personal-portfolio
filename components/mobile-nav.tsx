"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden bg-transparent">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-8">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="https://github.com/itsprateekbansal"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/itsprateekbansal"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:prateekbansal2425@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              Email
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
