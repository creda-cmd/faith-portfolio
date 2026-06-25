import { useState, useEffect, useRef } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact Me' },
]

export default function Navbar({ active, onSelect }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__brand" onClick={(e) => { e.preventDefault(); onSelect('home') }}>
          FM<span>.</span>
        </a>

        <div className="nav__dropdown" ref={menuRef}>
          <button
            className="nav__hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          {open && (
            <nav className="nav__dropdown-menu">
              {links.map((l) => (
                <a
                  key={l.id}
                  href="#"
                  className={active === l.id ? 'nav__dropdown-active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    onSelect(l.id)
                    setOpen(false)
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
