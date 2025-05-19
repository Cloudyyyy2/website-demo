"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Personal Blog",
      description:
        "A simple, responsive blog website built with HTML, CSS, and JavaScript. Features a clean design with dark mode support.",
      image: "/project-1.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application that fetches and displays current weather data based on user location or search. Built with React and styled with CSS.",
      image: "/project-2.jpg",
      tags: ["React", "CSS", "API Integration", "Hooks"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Landing Page",
      description:
        "A responsive landing page for a fictional product. Features smooth scrolling, animations, and a mobile-first design approach.",
      image: "/project-3.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Interactive Gallery",
      description:
        "An interactive gallery showcasing various CSS animations and transitions. Includes hover effects, transitions, and interactive elements.",
      image: "/project-4.jpg",
      tags: ["HTML", "CSS", "JavaScript", "CSS Animations"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ])

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Projects</h2>
          <p className="text-muted-foreground text-center max-w-[800px]">
            Here are some of my front-end web projects. Each one represents a step in my learning journey and showcases
            different skills I've developed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
