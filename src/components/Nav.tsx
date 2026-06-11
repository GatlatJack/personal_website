import { useState, useEffect } from 'react'
import { useMode } from '../context/ModeContext'

const fullLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Updates', href: '#updates' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { mode, toggle } = useMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 nav-bottom"
      style={{
        backgroundColor: scrolled ? 'rgba(244,241,234,0.97)' : 'rgba(244,241,234,0.88)',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Left: Logo */}
        <a
          href="#"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-ink)', letterSpacing: '0.01em' }}
        >
          Gatlat
        </a>

        {/* Center: Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center" style={{ gap: 0 }}>
          {mode !== 'minimal' && fullLinks.map(({ label, href }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <span style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-line)', flexShrink: 0 }} />}
              <a
                href={href}
                style={{
                  display: 'block',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.6rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-muted)',
                  transition: 'background-color 0.15s, color 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'var(--color-ink)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-muted)' }}
              >
                {label}
              </a>
            </div>
          ))}
        </div>

        {/* Right: mode toggle + hamburger (hamburger hidden on desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggle}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-muted)',
              fontSize: '0.78rem',
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'color 0.15s',
              padding: 0,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            {mode === 'minimal' ? '← Full' : 'Minimal →'}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: 'var(--color-muted)' }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect y="0" width="18" height="1.5" rx="0.75" fill="currentColor"/>
              <rect y="6.25" width="18" height="1.5" rx="0.75" fill="currentColor"/>
              <rect y="12.5" width="18" height="1.5" rx="0.75" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && mode !== 'minimal' && (
        <div
          className="absolute left-0 right-0 md:hidden"
          style={{
            borderBottom: '1px solid var(--color-line)',
            backgroundColor: 'rgba(244,241,234,0.98)',
            backdropFilter: 'blur(14px)',
            padding: '0.5rem 1.5rem 1rem',
          }}
        >
          {fullLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ display: 'block', padding: '0.7rem 0.5rem', fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-ink)', borderBottom: '1px solid var(--color-line)' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
