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
        <section id="home" className="section">
          <div className="section__head">
            <h2 className="section__title">Home</h2>
          </div>
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <section id="contact" className="section">
          <div className="section__head">
            <h2 className="section__title">Contact Me</h2>
          </div>
        </section>
      </main>
    </>
  )
}
