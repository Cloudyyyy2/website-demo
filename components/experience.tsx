import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Self-Taught Front-End Development",
      company: "Independent Learning",
      period: "2022 - Present",
      description: [
        "Dedicated 20+ hours weekly to learning modern web development through online courses and documentation",
        "Mastered React fundamentals and built several small projects to apply theoretical knowledge",
        "Learned responsive design principles and implemented them using Tailwind CSS",
        "Explored Next.js for creating optimized, server-rendered React applications",
      ],
    },
    {
      title: "Personal Portfolio Website",
      company: "Self-Directed Project",
      period: "2023",
      description: [
        "Designed and developed a personal portfolio website using React and Tailwind CSS",
        "Implemented responsive layouts that work seamlessly across all device sizes",
        "Added dark/light mode toggle and animations to enhance user experience",
        "Deployed the site to Vercel and set up continuous deployment from GitHub",
      ],
    },
    {
      title: "Collaborative Open Source Contribution",
      company: "GitHub Community",
      period: "2023",
      description: [
        "Contributed to small open-source projects by fixing UI bugs and improving accessibility",
        "Participated in code reviews and learned from feedback provided by experienced developers",
        "Gained practical experience with Git workflow and collaborative development",
        "Improved documentation for React components to help other developers",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Experience</h2>
          <p className="text-muted-foreground text-center max-w-[800px]">
            My journey as a self-taught Front-End developer, showcasing my learning path and the projects I've worked
            on.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {experience.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
