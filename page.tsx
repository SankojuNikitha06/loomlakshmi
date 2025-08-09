import Header from "./components/header"
import Hero from "./components/hero"
import AISection from "./components/ai-section"
import Features from "./components/features"
import AboutSection from "./components/about-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <Hero />
      <AISection />
      <AboutSection />
      <Features />
      <Footer />
    </div>
  )
}
