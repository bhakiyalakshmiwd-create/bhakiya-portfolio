import React from 'react'

const skillGroups = [
  {
    title: 'CORE LANGUAGES & FRAMEWORKS',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    title: 'UI & COMPONENT LIBRARIES',
    skills: ['Material-UI', 'React Flow', 'Chart.js'],
  },
  {
    title: 'BACKEND & DATA',
    skills: ['REST APIs', 'MySQL', 'CRUD Operations', 'JSON'],
  },
  {
    title: 'TOOLS & DOMAINS',
    skills: ['Git', 'GitHub', 'CRM', 'E-commerce', 'GRC Systems'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 2rem', maxWidth: 1050, margin: '0 auto' }}>
      <p style={{
        fontFamily: 'Fira Code, monospace', fontSize: '0.72rem',
        color: '#7c6fff', letterSpacing: 3, marginBottom: '0.5rem',
      }}>// SKILLS</p>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2.5rem' }}>
        What I build with
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
      }}>
        {skillGroups.map(({ title, skills }) => (
          <div key={title} style={{
            background: '#0f0f1a', border: '1px solid #1c1c2e',
            borderRadius: 12, padding: '1.2rem',
          }}>
            <div style={{
              fontSize: '0.78rem', color: '#7c6fff',
              fontFamily: 'Fira Code, monospace', letterSpacing: 1,
              marginBottom: '0.8rem',
            }}>{title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  background: '#1a1a2e', border: '1px solid #2a2a40',
                  color: '#c0c0e0', fontSize: '0.78rem',
                  padding: '0.3rem 0.7rem', borderRadius: 5,
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
