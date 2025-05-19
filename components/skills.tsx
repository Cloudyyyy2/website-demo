import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Palette, PenToolIcon as Tool } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "CSS Animations",
        "Framer Motion",
      ],
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "UI Frameworks",
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Chakra UI",
        "Bootstrap",
        "Styled Components",
        "CSS Modules",
        "SASS/SCSS",
      ],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design & UX",
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "UI/UX Principles",
        "Accessibility",
        "Animation",
        "Wireframing",
      ],
    },
    {
      icon: <Tool className="h-8 w-8 text-primary" />,
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Webpack",
        "Vite",
        "Jest",
        "React Testing Library",
        "ESLint",
        "Prettier",
        "Vercel",
        "Netlify",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Skills</h2>
          <p className="text-muted-foreground text-center max-w-[800px]">
            I've worked with a variety of technologies in the web development world. Here's a quick overview of my
            technical skills and tools I use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-2 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
