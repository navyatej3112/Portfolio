import { Nav } from './components/Nav'
import { HeroAbout } from './components/HeroAbout'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Resume } from './components/Resume'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen gradient-bg noise">
        <Nav />
        <main>
          <HeroAbout />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Resume />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
