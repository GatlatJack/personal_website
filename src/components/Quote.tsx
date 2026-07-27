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
          “And what is more enthralling to the human mind than this splendid,
          boundless, coloured mutability!—life in the making? How strange it is,
          then, that we should be contented to take such small parts of it as we
          can grasp, and to say, <span style={{ color: 'var(--color-accent)' }}>
          ‘This is the true explanation.’</span>”
        </blockquote>

        <figcaption style={{
          marginTop: '1.75rem',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
        }}>
          David Grayson · <span style={{ textTransform: 'none', letterSpacing: '0.04em' }}>
          Adventures in Contentment</span>
        </figcaption>
      </figure>
    </section>
  )
}
