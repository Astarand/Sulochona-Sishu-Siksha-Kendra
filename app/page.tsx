import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import FocusAreas from "@/components/focus-areas"
import Partners from "@/components/partners"
import Resources from "@/components/resources"
import Community from "@/components/community"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <FocusAreas />
      <Partners />
      <Resources />
      <Community />
      <Contact />
      <Footer />
    </main>
  )
}
