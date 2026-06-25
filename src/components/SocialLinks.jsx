import { social } from '../data'
import { socialIconMap } from './iconMap'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      {social.map((s) => {
        const Icon = socialIconMap[s.icon]
        return (
          <a
            key={s.label}
            href={s.href}
            className="socials__link"
            aria-label={s.label}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {Icon ? <Icon width={20} height={20} /> : null}
          </a>
        )
      })}
    </div>
  )
}
