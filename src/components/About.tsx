const CENTERED = { maxWidth: '680px', margin: '0 auto', width: '100%' }

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2
        className="font-display font-bold"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--color-ink)', letterSpacing: '-0.01em' }}
      >
        {children}
      </h2>
      <div style={{ width: '48px', height: '1px', backgroundColor: 'var(--color-ink)', opacity: 0.18, margin: '1rem auto 0' }} />
    </div>
  )
}

export { SectionHeading, CENTERED }

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 section-top"
    >
      <div style={CENTERED}>
        <SectionHeading>About</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center', color: 'var(--color-muted)', lineHeight: 1.75 }}>
          <p>
            I build web apps and tools for startups, researchers, and small businesses.
            Whether you need a landing page, a data dashboard, a REST API, or a full-stack
            web application — I can take it from idea to live deployment.
          </p>
          <p>
            For two consecutive summers I've worked as a web developer at the{' '}
            <span style={{ color: 'var(--color-ink)', fontWeight: 500 }}>
              Research Institute of the McGill University Health Centre (RI-MUHC)
            </span>
            , Dr. Brian Chen's lab, under Canada Summer Jobs — first on Genedig's
            PHP/JavaScript platform, currently building{' '}
            <a
              href="https://enzygent.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-ink)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Enzygent
            </a>
            , a live biochemistry tool in Next.js and FastAPI.
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '2rem', color: 'var(--color-muted)' }}>
          2+ years building&nbsp;·&nbsp;5+ shipped projects&nbsp;·&nbsp;7+ technologies
        </p>
      </div>
    </section>
  )
}
