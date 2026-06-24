import { useTheme } from "./hooks/useTheme"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Experience from "./components/Experience"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
