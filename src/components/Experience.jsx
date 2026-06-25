import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__kicker">02 — Experience</span>
        <h2 className="section__title">Where I've made an impact</h2>
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.org} as="article" delay={i * 80} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__body">
              <div className="timeline__top">
                <h3>{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__org">
                {job.org} <span>•</span> {job.location}
              </p>
              <ul>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
