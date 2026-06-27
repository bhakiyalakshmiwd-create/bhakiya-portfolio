import React from 'react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '88vh', display: 'flex', alignItems: 'center',
      padding: '2rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,111,255,0.1), transparent 70%)',
        top: -80, left: -80, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,110,180,0.07), transparent 70%)',
        bottom: 0, right: 0, pointerEvents: 'none',
      }} />

      <div className="hero-grid">
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#1a1a2e', border: '1px solid #1c1c2e',
            borderRadius: 20, padding: '0.35rem 1rem',
            fontSize: '0.78rem', color: '#7c6fff', marginBottom: '1.2rem',
          }}>
            <span style={{
              width: 7, height: 7, background: '#43e97b',
              borderRadius: '50%', display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Open to new opportunities
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.6rem' }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c6fff, #ff6eb4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Bhakiya</span>
            <br />Lakshmi S
          </h1>

          <div style={{
            fontFamily: 'Fira Code, monospace', fontSize: '1rem',
            color: '#6b6b90', marginBottom: '1rem',
          }}>
            // <span style={{ color: '#43e97b' }}>Frontend Developer</span> · React.js
          </div>

          <p style={{
            color: '#9090b0', fontSize: '0.92rem', lineHeight: 1.75,
            marginBottom: '1.8rem', maxWidth: 420,
          }}>
            2.8 years building scalable CRM, e-commerce & GRC platforms with
            React.js, Material-UI, and REST APIs. I turn business requirements
            into clean, performant frontends.
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              background: '#7c6fff', color: '#fff', border: 'none',
              padding: '0.7rem 1.6rem', borderRadius: 8, fontSize: '0.88rem',
              cursor: 'pointer', fontWeight: 500, textDecoration: 'none',
              display: 'inline-block',
            }}>
              View Projects ↓
            </a>
            <a
              href="/BhakiyaLakshmi_Resume_.pdf"
              download="BhakiyaLakshmi_Resume_.pdf"
              style={{
                background: 'transparent', color: '#e8e8f0',
                border: '1px solid #1c1c2e', padding: '0.7rem 1.6rem',
                borderRadius: 8, fontSize: '0.88rem', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right — Info Card */}
        <div style={{
          background: '#0f0f1a', border: '1px solid #1c1c2e',
          borderRadius: 14, padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.1rem',
        }}>
          {[
            { icon: '📍', bg: '#1a1a3e', label: 'Location', val: 'Madurai, Tamil Nadu', color: '#e8e8f0' },
            { icon: '🔍', bg: '#2a1a1a', label: 'Status', val: 'Available from July 2026', color: '#43e97b' },
            { icon: '🌐', bg: '#1a3a1e', label: 'Live Project', val: 'sql.bigfivecrm.com', color: '#7c6fff' },
            { icon: '📧', bg: '#2a1a3a', label: 'Email', val: 'bhakiyalakshmiwd@gmail.com', color: '#e8e8f0' },
          ].map(({ icon, bg, label, val, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ color: '#6b6b90', fontSize: '0.75rem', marginBottom: 2 }}>{label}</div>
                <div style={{ color, fontWeight: 500, fontSize: '0.85rem', wordBreak: 'break-all' }}>{val}</div>
              </div>
            </div>
          ))}

          <div style={{
            background: 'linear-gradient(135deg, rgba(124,111,255,0.2), rgba(255,110,180,0.1))',
            border: '1px solid rgba(124,111,255,0.3)',
            borderRadius: 8, padding: '0.8rem 1rem', textAlign: 'center',
          }}>
            <div style={{
              fontSize: '2rem', fontWeight: 700,
              fontFamily: 'Fira Code, monospace', color: '#7c6fff',
            }}>2.8</div>
            <div style={{ fontSize: '0.72rem', color: '#6b6b90', letterSpacing: 1 }}>
              YEARS OF EXPERIENCE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
