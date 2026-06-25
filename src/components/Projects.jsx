import { projects } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__kicker">05 — Projects</span>
        <h2 className="section__title">Selected work & highlights</h2>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} as="article" delay={i * 80} className="project-card">
            <div className="project-card__bar" aria-hidden="true" />
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <div className="project-card__tags">
              {p.tags.map((t) => (
                <span key={t} className="tag tag--soft">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
