import { SectionHeading } from './About'

const links = [
  { label: 'Email', href: 'mailto:jackgatlat@gmail.com', display: 'jackgatlat@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gatlatdengbum2028', display: 'linkedin.com/in/gatlatdengbum2028' },
  { label: 'GitHub', href: 'https://github.com/gatlatjack', display: 'github.com/gatlatjack' },
  { label: 'X / Twitter', href: 'https://x.com/GatlatJack82151', display: 'x.com/GatlatJack82151' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--color-line)' }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        <SectionHeading>Contact</SectionHeading>

        <p className="text-center text-base mb-10" style={{ color: 'var(--color-muted)' }}>
          Based in Montréal, QC. Open to freelance projects and collaborations.
        </p>

        <div className="space-y-3 mb-10">
          {links.map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-6 py-4 transition-all hover:bg-black/[0.04] group"
              style={{ border: '1px solid var(--color-line)' }}
            >
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase block mb-0.5" style={{ color: 'var(--color-muted)' }}>
                  {label}
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                  {display}
                </span>
              </div>
              <span className="text-lg transition-transform group-hover:translate-x-0.5" style={{ color: 'var(--color-muted)' }}>
                →
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:jackgatlat@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
          >
            Get In Touch ↗
          </a>
        </div>
      </div>
    </section>
  )
}
