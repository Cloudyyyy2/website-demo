import Hero from "@/components/hero"
import Frameworks from "@/components/frameworks"
import Skills from "@/components/skills"
import CSSAnimations from "../components/css-animations"
import Experience from "../components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Frameworks />
      <Skills />
      <CSSAnimations />
      <Experience />
      <Contact />
    </main>
  )
}
