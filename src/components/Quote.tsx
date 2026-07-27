export default function Quote() {
  return (
    <section
      className="section-top section-pad"
      style={{ padding: '6rem 1.5rem' }}
      aria-label="Quotation"
    >
      <figure style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          width: '2rem',
          height: '1px',
          backgroundColor: 'var(--color-accent)',
          opacity: 0.5,
          margin: '0 auto 2rem',
        }} />

        <blockquote style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          lineHeight: 1.95,
          color: 'var(--color-ink)',
          letterSpacing: '-0.01em',
          margin: 0,
        }}>
          “There are more things in heaven and earth, Horatio,
          <span style={{ color: 'var(--color-accent)' }}>
          {' '}than are dreamt of in your book.</span>”
        </blockquote>

        <figcaption style={{
          marginTop: '1.75rem',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}>
          William Shakespeare · <span style={{ textTransform: 'none', letterSpacing: '0.04em' }}>
          Hamlet</span>
        </figcaption>
      </figure>
    </section>
  )
}
