import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const h = String(time.getHours()).padStart(2, '0')
  const m = String(time.getMinutes()).padStart(2, '0')
  const s = String(time.getSeconds()).padStart(2, '0')

  return (
    <div style={{
      background: '#080404',
      borderRadius: '1.25rem',
      padding: '2.5rem 3rem',
      border: '1px solid rgba(220,30,10,0.18)',
      boxShadow: '0 0 60px rgba(200,20,0,0.12), inset 0 0 40px rgba(0,0,0,0.6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      {/* Main digits */}
      <div style={{
        fontFamily: '"Courier New", monospace',
        fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
        fontWeight: 700,
        letterSpacing: '0.12em',
        color: '#ff2200',
        textShadow: '0 0 8px #ff2200, 0 0 18px #ff4400, 0 0 35px rgba(255,60,0,0.5)',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {h}<Colon />{m}
      </div>

      {/* Seconds */}
      <div style={{
        fontFamily: '"Courier New", monospace',
        fontSize: '1.4rem',
        fontWeight: 600,
        letterSpacing: '0.2em',
        color: 'rgba(255,34,0,0.65)',
        textShadow: '0 0 6px rgba(255,34,0,0.4)',
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {s}
      </div>

      {/* Label */}
      <div style={{
        marginTop: '0.6rem',
        fontSize: '0.7rem',
        letterSpacing: '0.22em',
        color: 'rgba(255,80,40,0.4)',
        textTransform: 'uppercase',
        fontFamily: '"Courier New", monospace',
      }}>
        local time
      </div>
    </div>
  )
}

function Colon() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn(v => !v), 500)
    return () => clearInterval(id)
  }, [])
  return (
    <span style={{ opacity: on ? 1 : 0.15, transition: 'opacity 0.1s', display: 'inline-block', width: '0.45em', textAlign: 'center' }}>
      :
    </span>
  )
}
