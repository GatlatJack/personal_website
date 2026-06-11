import { useState, useEffect } from 'react'

interface Photo {
  id: string
  src: string
}

interface Book {
  title: string
  author: string
  isbn: string
  note: string
}

const BOOKS: Book[] = [
  {
    title: 'The Doors of Perception',
    author: 'Aldous Huxley',
    isbn: '006080171X',
    note: "Huxley's mescaline account cracked open how I think about consciousness — what the mind filters out is as interesting as what it lets in.",
  },
  {
    title: 'Limitless',
    author: 'Jim Kwik',
    isbn: '1401957781',
    note: 'Rewired how I approach learning. The brain is trainable; most people just never got the manual.',
  },
  {
    title: 'The Rational Male',
    author: 'Rollo Tomassi',
    isbn: '1492777862',
    note: 'A framework for understanding social dynamics that most people navigate blindly.',
  },
  {
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    isbn: '0671027034',
    note: "Still the sharpest book on human connection ever written. I come back to it regularly.",
  },
  {
    title: 'How to Solve It by Computer',
    author: 'R.G. Dromey',
    isbn: '0134340019',
    note: "Dromey's algorithmic thinking shaped how I decompose problems before touching code.",
  },
  {
    title: 'Plato: A Complete Introduction',
    author: 'Roy Jackson',
    isbn: '9781473600850',
    note: 'My entry point into Western philosophy. Plato asks the questions that don\'t go away.',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    isbn: '0062457713',
    note: 'Stripped away the self-help fluff and gave permission to care about fewer things, more deeply.',
  },
]

const STATIC_PHOTOS: Photo[] = [
  { id: 'soccer',  src: '/assets/soccer.png'  },
  { id: 'soccer2', src: '/assets/soccer2.png' },
  { id: 'story',   src: '/assets/story.png'   },
  { id: 'story1',  src: '/assets/story1.png'  },
  { id: 'me',      src: '/assets/me.png'      },
  { id: '1sem',    src: '/assets/1sem.png'    },
]

function PhotoCard({ src }: { src: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        breakInside: 'avoid',
        marginBottom: '1rem',
        borderRadius: '0.875rem',
        overflow: 'hidden',
        border: '1px solid var(--color-line)',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(v => !v)}
    >
      <div style={{
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: open ? 'rgba(0,0,0,0.03)' : 'transparent',
        transition: 'background-color 0.15s',
      }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Photo
        </span>
        <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', transition: 'transform 0.2s', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ↓
        </span>
      </div>
      {open && (
        <img
          src={src}
          alt=""
          style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          onError={e => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none' }}
        />
      )}
    </div>
  )
}

function BookCard({ book }: { book: Book }) {
  const coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1.1rem',
      border: '1px solid var(--color-line)',
      borderRadius: '0.875rem',
      backgroundColor: 'rgba(32,32,29,0.02)',
      alignItems: 'flex-start',
    }}>
      {/* Cover */}
      <div style={{
        flexShrink: 0,
        width: '62px',
        height: '90px',
        borderRadius: '0.3rem',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.06)',
        border: '1px solid var(--color-line)',
      }}>
        <img
          src={coverUrl}
          alt={book.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => {
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.display = 'flex'
              parent.style.alignItems = 'center'
              parent.style.justifyContent = 'center'
              parent.innerHTML = `<span style="font-size:0.6rem;color:var(--color-muted);text-align:center;padding:0.25rem">${book.title}</span>`
            }
          }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '0.15rem', lineHeight: 1.3 }}>
          {book.title}
        </p>
        <p style={{ fontSize: '0.73rem', color: 'var(--color-muted)', marginBottom: '0.55rem', letterSpacing: '0.02em' }}>
          {book.author}
        </p>
        <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
          {book.note}
        </p>
      </div>
    </div>
  )
}

export default function Updates() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'photos' | 'books'>('photos')
  const [extras, setExtras] = useState<Photo[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('quickPosts')
      const posts = raw ? JSON.parse(raw) : []
      const dynamic: Photo[] = posts
        .filter((p: { image?: string }) => p.image)
        .map((p: { id: number; image: string }) => ({ id: String(p.id), src: p.image }))
      setExtras(dynamic)
    } catch {
      setExtras([])
    }
  }, [])

  const photos = [...extras, ...STATIC_PHOTOS]

  return (
    <section
      id="updates"
      className="section-top"
      style={{ padding: '6rem 1.5rem' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>

        {/* Clickable heading row */}
        <button
          onClick={() => setOpen(v => !v)}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: open ? '1.75rem' : '3rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            color: 'var(--color-ink)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}>
            Updates
          </h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--color-line)', margin: '0 auto 0.75rem' }} />
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: 'var(--color-muted)', textTransform: 'uppercase' }}>
            {open ? 'hide ↑' : 'show ↓'}
          </span>
        </button>

        {open && (
          <>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
              {(['photos', 'books'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    padding: '0.35rem 1.1rem',
                    borderRadius: '2rem',
                    border: `1px solid ${tab === t ? 'var(--color-muted)' : 'var(--color-line)'}`,
                    background: 'transparent',
                    color: tab === t ? 'var(--color-ink)' : 'var(--color-muted)',
                    fontSize: '0.78rem',
                    fontWeight: tab === t ? 600 : 400,
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                    textTransform: 'capitalize',
                    transition: 'all 0.15s',
                  }}
                >
                  {t === 'books' ? 'Top Books' : 'Photos'}
                </button>
              ))}
            </div>

            {/* Photos */}
            {tab === 'photos' && (
              <div style={{ columns: 2, columnGap: '1rem' }}>
                {photos.map((p) => (
                  <PhotoCard key={p.id} src={p.src} />
                ))}
              </div>
            )}

            {/* Books */}
            {tab === 'books' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {BOOKS.map(book => (
                  <BookCard key={book.isbn} book={book} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
