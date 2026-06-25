import { profile } from '../data'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
      </p>
      <SocialLinks />
      <a href="#top" className="footer__top">
        Back to top ↑
      </a>
    </footer>
  )
}
