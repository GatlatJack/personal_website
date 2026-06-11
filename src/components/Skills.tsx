import { SectionHeading } from './About'

const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'HTML/CSS', 'SQL', 'Bash', 'C'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Angular', 'TailwindCSS', 'RDKit', 'Pandas', 'scikit-learn'],
  },
  {
    label: 'Infrastructure & DevOps',
    skills: ['MySQL', 'SQLite', 'Git', 'Linux', 'Cloudflare Tunnel', 'XAMPP', 'Vercel'],
  },
  {
    label: 'Tools',
    skills: ['GitHub', 'VS Code', 'Vim'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 section-top section-pad"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <SectionHeading>Skills</SectionHeading>

        <div className="skills-grid">
          {groups.map(({ label, skills }) => (
            <div
              key={label}
              className="skill-card"
              style={{
                border: '1px solid var(--color-line)',
                borderRadius: '1rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.4)',
              }}
            >
              <p
                className="font-display font-semibold"
                style={{ fontSize: '1.05rem', color: 'var(--color-ink)', marginBottom: '1.25rem' }}
              >
                {label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    className="skill-pill"
                    style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: '0.4rem',
                      fontSize: '0.8rem',
                      border: '1px solid var(--color-line)',
                      color: 'var(--color-ink)',
                      backgroundColor: 'rgba(32, 32, 29, 0.035)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
