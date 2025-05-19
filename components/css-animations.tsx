"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CSSAnimations() {
  return (
    <section id="css-animations" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">CSS Animations</h2>
          <p className="text-muted-foreground text-center max-w-[800px]">
            A showcase of animations created with pure CSS. Hover over each card to see the animation in action.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Dots Animation */}
          <Card className="hover-animation-card">
            <CardHeader>
              <CardTitle>Pulse Animation</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-40">
              <div className="flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-primary animation-paused hover-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Text Animation */}
          <Card className="hover-animation-card">
            <CardHeader>
              <CardTitle>Text Fade-in</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-40">
              <div className="text-3xl font-bold">
                {Array.from("CSS Animations").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block animation-paused hover-fade-in"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shapes Animation */}
          <Card className="hover-animation-card">
            <CardHeader>
              <CardTitle>Floating Shapes</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-40 relative overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full animation-paused hover-float"></div>
                <div
                  className="absolute top-1/2 left-1/2 w-10 h-10 bg-green-500 rounded-md animation-paused hover-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-12 h-6 bg-red-500 rounded-lg animation-paused hover-float"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/3 w-6 h-6 bg-yellow-500 transform rotate-45 animation-paused hover-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
