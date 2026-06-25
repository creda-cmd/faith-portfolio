const skillGroups = [
  {
    title: 'Cybersecurity',
    items: [
      'Threat & Vulnerability Analysis',
      'Risk Assessment & Mitigation',
      'Security Monitoring & Log Analysis',
      'Secure System Configuration',
    ],
  },
  {
    title: 'Networking',
    items: [
      'TCP/IP, OSI Model & Subnetting',
      'Routing, Switching & Configuration',
      'Network Troubleshooting & Analysis',
      'LAN/WAN Infrastructure Support',
    ],
  },
  {
    title: 'IT Support',
    items: [
      'Hardware & Software Troubleshooting',
      'Help Desk & End-User Support',
      'Windows & Linux Administration',
      'System Maintenance & Documentation',
    ],
  },
  {
    title: 'Software Development',
    items: [
      'JavaScript & React Development',
      'REST API Integration',
      'Responsive Web Design',
      'Database Fundamentals & Secure Coding',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__kicker">03 — Skills</span>
        <h2 className="section__title">Skills</h2>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3 className="skill-card__title">{group.title}</h3>
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item} className="skill-card__item">
                  <span className="skill-card__arrow">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
