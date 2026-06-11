const socials = [
  {
    label: 'Resume',
    href: '/assets/Bum_Gatlat_Resume[6856066].pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gatlatdengbum2028',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gatlatjack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/GatlatJack82151',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:jackgatlat@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="section-top" style={{ padding: '3rem 1.5rem 2.5rem' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        {/* Social icons */}
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid var(--color-line)',
                color: 'var(--color-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.018)',
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} Gatlat Deng Bum · Montréal, QC
        </p>
      </div>
    </footer>
  )
}
