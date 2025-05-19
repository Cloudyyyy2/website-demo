"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hi, I'm <span className="text-primary">Alison Pastera</span>
              <br />
              Web Developer
            </h1>
            <p className="text-muted-foreground md:text-xl">
              I build modern, responsive web experiences using Next.js, React, and Tailwind CSS. Focused on creating
              clean, performant frontend code that delivers exceptional user interfaces and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="#frameworks">
                  View My Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <Link href="https://github.com/Cloudyyyy2" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link
                  href="https://www.linkedin.com/in/alison-pastera-265207254"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <Link href="mailto:pasteralison@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fadeIn animation-delay-300">
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20">
              <Image src="/professional-developer-portrait.png" alt="Alison Pastera" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
