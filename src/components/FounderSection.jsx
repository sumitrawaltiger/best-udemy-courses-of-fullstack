import { useState } from 'react';

const SKILLS = [
  { label: 'JavaScript', emoji: '💪', color: '#2563eb' },
  { label: 'TypeScript', emoji: '🦋', color: '#e0982e' },
  { label: 'React', emoji: '💪', color: '#2563eb' },
  { label: 'React Native', emoji: '📱', color: '#38bdf8' },
  { label: 'Next JS', emoji: '🚀', color: '#111827' },
  { label: 'J2SE', emoji: '☕', color: '#7c3aed' },
  { label: 'J2EE', emoji: '🏭', color: '#3b82f6' },
  { label: 'JPA', emoji: '🗄️', color: '#22c55e' },
  { label: 'Spring Boot', emoji: '🍃', color: '#4caf50' },
  { label: 'Microservices', emoji: '🔗', color: '#14b8a6' },
  { label: 'Python', emoji: '🐍', color: '#2563eb' },
  { label: 'DevOps', emoji: '⚙️', color: '#f97316' },
  { label: 'Agentic AI', emoji: '🤖', color: '#ec4899' },
  { label: 'Data Structures', emoji: '📊', color: '#eab308' },
  { label: 'System Design', emoji: '📐', color: '#14b8a6' },
];

export default function FounderSection() {
  const [imgSrc, setImgSrc] = useState('/sumit-founder.jpg');

  return (
    <section className="founder-section" id="about-founder">
      <div className="founder-inner">
        <div className="founder-photo-wrap">
          <img
            src={imgSrc}
            alt="Sumit Rawal — founder"
            className="founder-photo"
            loading="lazy"
            onError={() => setImgSrc('/sumit-profile.png')}
          />
        </div>

        <div className="founder-body">
          <span className="founder-eyebrow">About the Founder</span>
          <h2 className="founder-name">Sumit Rawal</h2>
          <p className="founder-bio">
            Full-stack web developer expert in <strong>Java, Python and TypeScript</strong>. When not
            coding I like to do swimming, play badminton, or just enjoy the sun at the beach.
          </p>

          <div className="founder-skills">
            {SKILLS.map((skill) => (
              <span
                key={skill.label}
                className="founder-skill"
                style={{ backgroundColor: skill.color }}
              >
                {skill.label} <span aria-hidden="true">{skill.emoji}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
