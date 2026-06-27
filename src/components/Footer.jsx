import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1c1c2e',
      textAlign: 'center', padding: '1.5rem',
      color: '#6b6b90', fontSize: '0.78rem',
      fontFamily: 'Fira Code, monospace',
    }}>
      Built with <span style={{ color: '#7c6fff' }}>React.js</span> · Deployed on{' '}
      <span style={{ color: '#7c6fff' }}>Vercel</span> · © 2026{' '}
      <span style={{ color: '#7c6fff' }}>Bhakiya Lakshmi S</span>
    </footer>
  )
}
