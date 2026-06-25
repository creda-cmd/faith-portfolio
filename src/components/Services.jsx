import { services } from '../data'
import { iconMap } from './iconMap'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section__head">
        <span className="section__kicker">02 — What I do</span>
        <h2 className="section__title">Services I bring to the table</h2>
      </div>

      <div className="services__grid">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon]
          return (
            <Reveal key={s.title} delay={i * 80} className="service-card">
              <div className="service-card__icon">
                {Icon ? <Icon width={26} height={26} /> : null}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
