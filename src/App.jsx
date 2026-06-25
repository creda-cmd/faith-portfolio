import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import './App.css'

export default function App() {
  const [active, setActive] = useState('home')

  return (
    <>
      <Navbar active={active} onSelect={setActive} />
      <main>
        {active === 'home' && (
          <section className="section">
            <div className="section__head">
              <h2 className="section__title">Home</h2>
            </div>
          </section>
        )}
        {active === 'about' && <About />}
        {active === 'skills' && <Skills />}
        {active === 'experience' && <Experience />}
        {active === 'contact' && (
          <section className="section">
            <div className="section__head">
              <h2 className="section__title">Contact Me</h2>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
