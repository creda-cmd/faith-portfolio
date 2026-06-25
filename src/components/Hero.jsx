import { useEffect, useState } from 'react'
import { profile, stats } from '../data'
import { MailIcon, PinIcon } from './Icons'
import SocialLinks from './SocialLinks'

function useRotatingTitle(titles) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [titles.length])
  return titles[index]
}

export default function Hero() {
  const title = useRotatingTitle(profile.titles)
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="dot" /> Available for new opportunities
          </span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            <span key={title} className="hero__role-text">
              {title}
            </span>
          </p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__meta">
            <span>
              <PinIcon width={18} height={18} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>
              <MailIcon width={18} height={18} /> {profile.email}
            </a>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact me
            </a>
            <SocialLinks />
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__avatar" aria-hidden="true">
              {initials}
            </div>
            <div className="hero__stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
