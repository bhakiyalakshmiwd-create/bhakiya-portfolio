import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="sec" style={{ padding: '4rem 2rem', maxWidth: 1050, margin: '0 auto' }}>
      <p style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.72rem', color: '#7c6fff', letterSpacing: 3, marginBottom: '0.5rem' }}>// CONTACT</p>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2.5rem' }}>Let's work together</h2>
      <div className="contact-grid" style={{ background: '#0f0f1a', border: '1px solid #1c1c2e', borderRadius: 16, padding: '2.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.6rem' }}>Open to new opportunities 🚀</h3>
          <p style={{ color: '#6b6b90', fontSize: '0.88rem', lineHeight: 1.7 }}>Available from July 2026 for freelance React projects or full-time roles. 2.8 years of real-world experience in CRM, e-commerce & GRC platforms.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {[
            { icon: '📧', bg: '#1a1a3e', label: 'bhakiyalakshmiwd@gmail.com', href: 'mailto:bhakiyalakshmiwd@gmail.com' },
            { icon: '💼', bg: '#1a2a3e', label: 'linkedin.com/in/bhakiya2517', href: 'https://linkedin.com/in/bhakiya2517' },
            { icon: '🐙', bg: '#1a1a2e', label: 'GitHub Profile', href: 'https://github.com/bhakiyalakshmiwd-create' },
          ].map(({ icon, bg, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#1a1a2e', border: '1px solid #1c1c2e', borderRadius: 8, padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#e8e8f0', textDecoration: 'none', transition: 'border-color 0.2s', wordBreak: 'break-all' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#7c6fff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c2e'}>
              <div style={{ width: 30, height: 30, borderRadius: 6, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
