import { skillGroups, competencies } from '../data'
import { iconMap } from './iconMap'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__kicker">04 — Skills</span>
        <h2 className="section__title">A toolkit across the IT stack</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon]
          return (
            <Reveal key={group.title} delay={i * 80} className="skill-card">
              <div className="skill-card__head">
                <div className="skill-card__icon">
                  {Icon ? <Icon width={26} height={26} /> : null}
                </div>
                <h3>{group.title}</h3>
              </div>

              {typeof group.level === 'number' && (
                <div className="skill-card__meter" aria-hidden="true">
                  <div className="skill-card__bar">
                    <span style={{ width: `${group.level}%` }} />
                  </div>
                  <span className="skill-card__pct">{group.level}%</span>
                </div>
              )}

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>

      <div className="competencies">
        <h3>Core competencies</h3>
        <div className="competencies__tags">
          {competencies.map((c) => (
            <span key={c} className="tag">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
