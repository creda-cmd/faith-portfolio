import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </>
  )
}
