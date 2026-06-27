import React, { useState } from 'react'

const styles = {
  nav: {
    position: 'sticky', top: 0, zIndex: 99,
    background: 'rgba(6,6,15,0.9)', backdropFilter: 'blur(14px)',
    borderBottom: '1px solid #1c1c2e',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1rem 2rem',
  },
  logo: { fontFamily: 'Fira Code, monospace', fontSize: '1rem', color: '#7c6fff' },
  logoSpan: { color: '#e8e8f0' },
  navLinks: { display: 'flex', gap: '1.8rem', listStyle: 'none' },
  navLink: { color: '#6b6b90', textDecoration: 'none', fontSize: '0.85rem' },
  hireBtn: {
    background: 'linear-gradient(135deg, #7c6fff, #ff6eb4)',
    color: '#fff', border: 'none', padding: '0.5rem 1.3rem',
    borderRadius: '20px', fontSize: '0.83rem', cursor: 'pointer',
    fontFamily: 'Inter, sans-serif', fontWeight: 500,
  },
}

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        &lt;<span style={styles.logoSpan}>Bhakiya</span> /&gt;
      </div>
      <ul style={styles.navLinks}>
        {['skills', 'experience', 'projects', 'contact'].map(s => (
          <li key={s}>
            <a href={`#${s}`} style={styles.navLink}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
          </li>
        ))}
      </ul>
      <button style={styles.hireBtn}>Hire Me ✨</button>
    </nav>
  )
}
