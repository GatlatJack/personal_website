import { useState } from 'react'
import { SectionHeading } from './About'

const mainEntry = {
  id: 'mcgill',
  title: 'Computer Science & Psychology',
  org: 'McGill University · Montréal, QC',
  year: '2024 – 2028',
  bullets: [
    'WUSC-SRP Scholarship recipient (2024).',
    'Coursework: Object-Oriented Programming, Calculus, Web Development, Software Design, Operating Systems & Computer Systems.',
  ],
}

const extraEntries = [
  {
    id: 'wusc',
    title: 'WUSC Student Refugee Programme (SRP)',
    org: 'World University Service of Canada',
    year: '2024',
    bullets: [
      'Scholarship supporting student refugees to attend Canadian universities.',
    ],
  },
  {
    id: 'windle',
    title: 'Windle International Kenya Scholarship',
    org: 'Windle International',
    year: '2019',
    bullets: [
      'Secondary education scholarship for refugees in Kenya.',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    org: '',
    year: '',
    bullets: [
      'English — Native',
      'Swahili — Fluent',
      'Arabic — Conversational',
      'Nuer — Native',
    ],
  },
]

function EntryCard({ e }: { e: typeof mainEntry }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
      <div className="entry-dot" style={{
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        border: '1.5px solid var(--color-muted)',
        backgroundColor: 'var(--color-paper)',
        flexShrink: 0,
        marginTop: '1.75rem',
      }} />
      <div className="skill-card" style={{
        flex: 1,
        border: '1px solid var(--color-line)',
        borderRadius: '0.875rem',
        padding: '2rem 2.25rem',
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.3rem' }}>
          {e.title}
        </h3>
        {e.org && (
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink)', marginBottom: '0.25rem' }}>
            {e.org}
          </p>
        )}
        {e.year && (
          <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
            {e.year}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {e.bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
              <span style={{ flexShrink: 0 }}>—</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="education"
      className="section-top section-pad"
      style={{ padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        <SectionHeading>Education</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <EntryCard e={mainEntry} />

          {/* Collapsible: Scholarships & Languages */}
          <div>
            <button
              onClick={() => setOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem 0',
                color: 'var(--color-muted)',
                fontSize: '0.85rem',
                letterSpacing: '0.03em',
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              Scholarships &amp; Languages
            </button>

            {open && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '3rem' }}>
                {extraEntries.map(e => <EntryCard key={e.id} e={e} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
