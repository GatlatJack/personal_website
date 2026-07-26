import { jobs, projects } from '../data/work'

const socials = [
  { label: 'Resume', href: '/assets/Bum_Gatlat_Resume[6856066].pdf' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gatlatdengbum2028' },
  { label: 'GitHub', href: 'https://github.com/gatlatjack' },
  { label: 'Email', href: 'mailto:jackgatlat@gmail.com' },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-muted)',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--color-line)',
        paddingBottom: '0.5rem',
      }}>
        {title}
      </p>
      {children}
    </div>
  )
}

export default function MinimalView() {
  return (
    <div style={{ maxWidth: '660px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.3rem' }}>
          Gatlat Deng Bum
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
          Computer Science &amp; Psychology · McGill University · Montréal
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--color-muted)',
                border: '1px solid var(--color-line)',
                borderRadius: '0.35rem',
                padding: '0.25rem 0.65rem',
                textDecoration: 'none',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-ink)'; e.currentTarget.style.borderColor = 'var(--color-ink)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-line)' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Work */}
      <Section title="Work">
        {jobs.map(job => (
          <div key={job.id} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-ink)' }}>{job.title}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', flexShrink: 0 }}>{job.year}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', margin: '0.15rem 0 0.6rem' }}>{job.role}</p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              {job.tech.map(t => (
                <span key={t} style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.55rem',
                  border: '1px solid var(--color-line)',
                  borderRadius: '0.3rem',
                  color: 'var(--color-muted)',
                  backgroundColor: 'rgba(32,32,29,0.035)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {job.links.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--color-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                >
                  {link.label === 'GitHub' ? <GitHubIcon /> : <ExternalIcon />}
                  {link.label === 'GitHub' ? 'View Code' : link.label === 'Live' ? 'Live Demo' : link.label === 'Site' ? 'Visit Site' : link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {projects.map(p => (
          <div key={p.id} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-ink)' }}>{p.title}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', flexShrink: 0 }}>{p.year}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', margin: '0.15rem 0 0.6rem' }}>{p.role}</p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.55rem',
                  border: '1px solid var(--color-line)',
                  borderRadius: '0.3rem',
                  color: 'var(--color-muted)',
                  backgroundColor: 'rgba(32,32,29,0.035)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.links.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--color-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                >
                  {link.label === 'GitHub' ? <GitHubIcon /> : <ExternalIcon />}
                  {link.label === 'GitHub' ? 'View Code' : link.label === 'Live' ? 'Live Demo' : link.label === 'Site' ? 'Visit Site' : link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Section>

    </div>
  )
}
