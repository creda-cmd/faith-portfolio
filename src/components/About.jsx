import { profile, education, highlights } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__kicker">01 — About Me</span>
        <h2 className="section__title">Secure by design, full-stack by craft</h2>
      </div>

      <div className="about__grid">
        <p className="about__lead">{profile.summary}</p>

        <div className="about__edu">
          <h3>Education</h3>
          {education.map((e) => (
            <div key={e.degree} className="about__edu-item">
              <p className="about__edu-degree">{e.degree}</p>
              <p className="about__edu-school">{e.school}</p>
              <span className="about__edu-period">{e.period}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about__highlights">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 70} className="highlight-card">
            <h4>{h.title}</h4>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
