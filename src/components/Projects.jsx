import React from 'react'

const projects = [
  {
    icon: '🏢',
    iconBg: '#1a1a3e',
    title: 'Big Five CRM Platform',
    desc: 'Full-scale CRM with lead management, e-commerce, GRC, and website management modules. Built end-to-end at CloudTree Technologies.',
    tags: ['React.js', 'Material-UI', 'React Flow', 'REST API'],
    live: true,
    link: 'https://sql.bigfivecrm.com',
  },
  {
    icon: '📊',
    iconBg: '#1a3a1e',
    title: 'CRM Workflow Diagrams',
    desc: 'Interactive workflow and process diagrams for non-technical users. Visual lead pipeline management with drag-and-drop nodes.',
    tags: ['React Flow', 'Chart.js', 'React.js'],
    live: false,
  },
  {
    icon: '📄',
    iconBg: '#2a1a3a',
    title: 'Quote & Invoice Generator',
    desc: 'Dynamic quote and invoice generation module with custom templating, replacing manual processes for multiple clients.',
    tags: ['React.js', 'JavaScript', 'REST API'],
    live: false,
  },
  {
    icon: '💬',
    iconBg: '#3a2a1a',
    title: 'WhatsApp CRM Integration',
    desc: 'In-app WhatsApp Business API integration enabling real-time messaging workflows for sales teams inside the CRM.',
    tags: ['React.js', 'WhatsApp API', 'MUI'],
    live: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 2rem', maxWidth: 1050, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'Fira Code, monospace', fontSize: '0.72rem',
        color: '#7c6fff', letterSpacing: 3, marginBottom: '0.5rem',
      }}>// PROJECTS</p>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2.5rem' }}>
        Things I've shipped
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.2rem',
      }}>
        {projects.map(({ icon, iconBg, title, desc, tags, live, link }) => (
          <div key={title} style={{
            background: '#0f0f1a', border: '1px solid #1c1c2e',
            borderRadius: 12, padding: '1.4rem',
            transition: 'border-color 0.2s, transform 0.2s',
            cursor: 'default',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#7c6fff'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#1c1c2e'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, background: iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}>{icon}</div>
              {live && (
                <a href={link} target="_blank" rel="noreferrer" style={{
                  background: 'rgba(67,233,123,0.1)',
                  border: '1px solid rgba(67,233,123,0.25)',
                  color: '#43e97b', fontSize: '0.7rem',
                  padding: '0.2rem 0.6rem', borderRadius: 10,
                  fontFamily: 'Fira Code, monospace', textDecoration: 'none',
                }}>● LIVE</a>
              )}
            </div>

            <div style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem' }}>{title}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b6b90', lineHeight: 1.6, marginBottom: '0.9rem' }}>{desc}</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  background: '#1a1a2e', color: '#7c6fff',
                  fontSize: '0.7rem', padding: '0.2rem 0.55rem',
                  borderRadius: 4, fontFamily: 'Fira Code, monospace',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
