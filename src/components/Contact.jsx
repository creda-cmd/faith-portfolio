import { profile, references } from '../data'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__head">
        <span className="section__kicker">06 — Contact</span>
        <h2 className="section__title">Let's build something secure</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__panel">
          <p className="contact__lead">
            Have a project, role, or challenge in mind? I'm open to opportunities
            in cybersecurity, IT support, and web development — let's talk.
          </p>
          <ul className="contact__list">
            <li>
              <a href={`mailto:${profile.email}`}>
                <MailIcon width={20} height={20} /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <PhoneIcon width={20} height={20} /> {profile.phone}
              </a>
            </li>
            <li>
              <span>
                <PinIcon width={20} height={20} /> {profile.location}
              </span>
            </li>
          </ul>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Send me an email
          </a>
        </div>

        <div className="contact__refs">
          <h3>References</h3>
          {references.map((r) => (
            <div key={r.name} className="ref-card">
              <p className="ref-card__name">{r.name}</p>
              <p className="ref-card__role">{r.role}</p>
              <a href={`tel:${r.phone.replace(/\s/g, '')}`} className="ref-card__phone">
                <PhoneIcon width={16} height={16} /> {r.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
