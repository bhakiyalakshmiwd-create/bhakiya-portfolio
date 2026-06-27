import React, { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = {
    color: '#6b6b90', textDecoration: 'none', fontSize: '0.85rem',
    transition: 'color 0.2s',
  }

  const links = ['skills', 'experience', 'projects', 'contact']

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 99,
      background: 'rgba(6,6,15,0.9)', backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #1c1c2e',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 2rem',
    }}>
      <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '1rem', color: '#7c6fff' }}>
        &lt;<span style={{ color: '#e8e8f0' }}>Bhakiya</span> /&gt;
      </div>

      {/* Desktop links */}
      <ul className="nav-links-desktop" style={{ display: 'flex', gap: '1.8rem', listStyle: 'none' }}>
        {links.map(s => (
          <li key={s}>
            <a href={`#${s}`} style={linkStyle}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop hire button */}
      <button className="nav-links-desktop" style={{
        background: 'linear-gradient(135deg, #7c6fff, #ff6eb4)',
        color: '#fff', border: 'none', padding: '0.5rem 1.3rem',
        borderRadius: 20, fontSize: '0.83rem', cursor: 'pointer',
        fontFamily: 'Inter, sans-serif', fontWeight: 500,
      }}>Hire Me ✨</button>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none',
        color: '#e8e8f0', fontSize: '1.5rem', cursor: 'pointer',
      }} className="nav-links-mobile">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '60px', left: 0, right: 0,
          background: '#0f0f1a', borderBottom: '1px solid #1c1c2e',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          zIndex: 98,
        }}>
          {links.map(s => (
            <a key={s} href={`#${s}`} style={{ ...linkStyle, fontSize: '1rem' }}
              onClick={() => setMenuOpen(false)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <button style={{
            background: 'linear-gradient(135deg, #7c6fff, #ff6eb4)',
            color: '#fff', border: 'none', padding: '0.5rem 1.3rem',
            borderRadius: 20, fontSize: '0.83rem', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontWeight: 500, width: 'fit-content',
          }}>Hire Me ✨</button>
        </div>
      )}
    </nav>
  )
}
