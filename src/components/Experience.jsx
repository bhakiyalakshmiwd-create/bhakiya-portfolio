import React from 'react'

const experiences = [
  {
    date: 'APR 2025 – JUN 2026',
    company: 'CloudTree Technologies',
    role: 'Jr. Software Engineer',
    bullets: [
      'Built CRM, e-commerce, GRC & website management modules with React.js + MUI',
      'Created interactive workflow diagrams & dashboards using React Flow and Chart.js',
      'Integrated REST APIs for production-grade CRUD across all modules',
      'Optimized UI performance with lazy loading, code splitting & memoization',
    ],
  },
  {
    date: 'OCT 2023 – APR 2025',
    company: 'Krisha TecBees Services',
    role: 'Software Developer',
    bullets: [
      'Architected CRM features from scratch — lead pipelines, conversion workflows',
      'Built quote & invoice generation modules with dynamic templating',
      'Integrated WhatsApp Business API for in-app CRM messaging',
      'Created reusable UI component library cutting dev time on new modules',
    ],
  },
  {
    date: 'DEC 2019 – JAN 2021',
    company: 'HDFC Bank',
    role: 'Senior Relationship Executive',
    bullets: [
      'Managed customer relationships and lead pipelines using CRM tools',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '4rem 2rem', maxWidth: 1050, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'Fira Code, monospace', fontSize: '0.72rem',
        color: '#7c6fff', letterSpacing: 3, marginBottom: '0.5rem',
      }}>// EXPERIENCE</p>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2.5rem' }}>
        Where I've worked
      </h2>

      <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid #1c1c2e' }}>
        {experiences.map(({ date, company, role, bullets }) => (
          <div key={company} style={{ position: 'relative', marginBottom: '2.5rem' }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: '-1.6rem', top: '0.35rem',
              width: 12, height: 12, background: '#6b6b90',
              borderRadius: '50%', border: '2px solid #06060f',
            }} />

            <div style={{
              fontFamily: 'Fira Code, monospace', fontSize: '0.72rem',
              color: '#7c6fff', marginBottom: '0.3rem', display: 'flex',
              alignItems: 'center', gap: '0.5rem',
            }}>
              {date}
              <span style={{
                background: 'rgba(107,107,144,0.15)',
                border: '1px solid rgba(107,107,144,0.3)',
                color: '#6b6b90', fontSize: '0.7rem',
                padding: '0.15rem 0.55rem', borderRadius: 10,
              }}>PREVIOUS</span>
            </div>

            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.15rem' }}>
              {company}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#6b6b90', marginBottom: '0.7rem' }}>
              {role}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {bullets.map((b, i) => (
                <li key={i} style={{
                  fontSize: '0.83rem', color: '#9090b0',
                  paddingLeft: '1rem', position: 'relative', lineHeight: 1.6,
                }}>
                  <span style={{
                    position: 'absolute', left: 0, color: '#7c6fff', fontSize: '0.75rem',
                  }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
