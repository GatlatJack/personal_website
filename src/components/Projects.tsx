import { projects } from '../data/work'
import { SectionHeading } from './About'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-top"
      style={{ padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        <SectionHeading>Projects</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((p) => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>

              {/* Circle */}
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-muted)',
                backgroundColor: 'var(--color-paper)',
                flexShrink: 0,
                marginTop: '1.75rem',
              }} />

              {/* Card */}
              <div className="skill-card" style={{
                flex: 1,
                border: '1px solid var(--color-line)',
                borderRadius: '0.875rem',
                padding: '2rem 2.25rem',
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.3rem' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink)', marginBottom: '0.25rem' }}>
                  {p.role}
                </p>

                <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
                  {p.year}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.bullets.map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                      <span style={{ flexShrink: 0, marginTop: '0.05rem' }}>—</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {p.tech.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
                    {p.tech.map((t) => (
                      <span key={t} className="skill-pill" style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: '0.3rem',
                        fontSize: '0.75rem',
                        border: '1px solid var(--color-line)',
                        color: 'var(--color-muted)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.links.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    {p.links.map((link) => {
                      const isGitHub = link.label === 'GitHub'
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--color-ink)',
                            border: '1px solid var(--color-line)',
                            borderRadius: '0.4rem',
                            padding: '0.35rem 0.75rem',
                            textDecoration: 'none',
                            transition: 'border-color 0.15s, color 0.15s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--color-ink)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--color-line)'
                          }}
                        >
                          {isGitHub ? <GitHubIcon /> : <ExternalIcon />}
                          {isGitHub ? 'View Code' : 'Live Demo'}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
