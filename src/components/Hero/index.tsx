import Clock from './Clock'
import chalkboardGif from '../../assets/Cwgf.gif'
import personGif from '../../assets/5TMy.gif'
import jackPhoto from '../../assets/photo.jpeg'

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

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '88vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Chalkboard background spanning full hero */}
      <img
        src={chalkboardGif}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />

      {/* Person gif — centered, faded into background */}
      <img
        src={personGif}
        alt=""
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '85%',
          width: 'auto',
          opacity: 0.72,
          maskImage: 'radial-gradient(ellipse 55% 65% at center, black 40%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 55% 65% at center, black 40%, transparent 82%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dark overlay so left-side text stays readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(8,6,4,0.62) 0%, rgba(8,6,4,0.44) 42%, rgba(8,6,4,0.12) 70%, rgba(8,6,4,0.02) 100%)',
      }} />

      {/* Top: section line then full fade to transparent */}
      <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(211,205,190,0.55) 25%, rgba(211,205,190,0.55) 75%, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px',  background: 'linear-gradient(to bottom, rgba(244,241,234,1), rgba(244,241,234,0.55) 50%, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, rgba(244,241,234,0.3), transparent)', pointerEvents: 'none' }} />

      {/* Bottom: full fade to page color then section line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, rgba(244,241,234,0.3), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px',  background: 'linear-gradient(to top, rgba(244,241,234,1), rgba(244,241,234,0.55) 50%, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '8%', right: '8%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(211,205,190,0.55) 25%, rgba(211,205,190,0.55) 75%, transparent)', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        padding: '5rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>

        {/* Left: text */}
        <div style={{ flex: 1, maxWidth: '540px' }}>
          {/* Profile photo */}
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.18)',
            marginBottom: '1.25rem',
          }}>
            <img src={jackPhoto} alt="Gatlat" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '0.6rem',
              letterSpacing: '-0.02em',
            }}
          >
            I'm <span style={{ color: 'var(--color-accent)' }}>Gatlat</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.88)',
            marginBottom: '1.1rem',
            letterSpacing: '0.01em',
            textShadow: '0 1px 8px rgba(0,0,0,0.55)',
          }}>
            Computer Science &amp; Psychology at McGill
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.76)',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '440px',
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
          }}>
            I build web apps and tools for startups, researchers, and small businesses.
            2 RI-MUHC internships · Top 5/16 MDN Hackathon.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.55rem', marginBottom: '2rem' }}>
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
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="#work"
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right: clock */}
        <div
          style={{ flexShrink: 0, opacity: 0.92 }}
          className="hidden md:block"
        >
          <Clock />
        </div>
      </div>
    </section>
  )
}
