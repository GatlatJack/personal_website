import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Updates from './components/Updates'
import Footer from './components/Footer'
import MinimalView from './components/MinimalView'
import { ModeProvider, useMode } from './context/ModeContext'

function AppContent() {
  const { mode } = useMode()
  return (
    <>
      <Nav />
      {mode === 'minimal' ? (
        <MinimalView />
      ) : (
        <main>
          <Hero />
          <Work />
          <Projects />
          <Skills />
          <Education />
          <Updates />
        </main>
      )}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  )
}
