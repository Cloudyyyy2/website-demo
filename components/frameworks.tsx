import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Frameworks() {
  const frameworks = [
    {
      name: "React",
      logo: "/react-logo.png",
      description:
        "Proficient in building interactive UIs with React, using functional components, hooks, and state management. Experienced in creating reusable component libraries and optimizing performance.",
      skills: [
        "Functional Components",
        "React Hooks",
        "Context API",
        "Custom Hooks",
        "React Router",
        "State Management",
        "Component Lifecycle",
        "Performance Optimization",
      ],
    },
    {
      name: "Next.js",
      logo: "/nextjs-logo.png",
      description:
        "Experienced in developing with Next.js for server-side rendering, static site generation, and creating fast, SEO-friendly web applications. Familiar with both Pages and App Router.",
      skills: [
        "App Router",
        "Pages Router",
        "Server Components",
        "Client Components",
        "API Routes",
        "Static Site Generation",
        "Server-Side Rendering",
        "Image Optimization",
      ],
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind-css-logo.png",
      description:
        "Skilled in using Tailwind CSS to create responsive, custom designs without leaving HTML. Experienced in creating consistent UI components and optimizing for production.",
      skills: [
        "Responsive Design",
        "Custom Theming",
        "Dark Mode",
        "Component Styling",
        "Utility-First Approach",
        "JIT Compiler",
        "Tailwind Config",
        "Plugin Ecosystem",
      ],
    },
  ]

  return (
    <section id="frameworks" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Framework Expertise</h2>
          <p className="text-muted-foreground text-center max-w-[800px]">
            I specialize in modern JavaScript frameworks and libraries, with particular expertise in React, Next.js, and
            Tailwind CSS.
          </p>
        </div>

        <div className="space-y-12">
          {frameworks.map((framework, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center p-6 bg-muted/50 md:col-span-1">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={framework.logo || "/placeholder.svg"}
                      alt={`${framework.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{framework.name}</h3>
                </div>
                <div className="p-6 md:col-span-2">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl">About my {framework.name} experience</CardTitle>
                    <CardDescription className="text-base mt-2">{framework.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <h4 className="font-medium mb-3">Key Skills:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {framework.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
