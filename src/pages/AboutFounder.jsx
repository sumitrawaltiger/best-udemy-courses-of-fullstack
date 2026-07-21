import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutFounder.css';

const LINKEDIN = 'https://www.linkedin.com/in/lawyersumitrawal/';
const CREDLY = 'https://www.credly.com/users/sumit-rawal658/badges/credly';
const GITHUB = 'https://github.com/sumitrawaltiger';

// Photo fallback chain — drop the new photo at public/sumit-about.jpg to use it;
// otherwise it falls back to the existing headshots (never a broken image).
const PHOTOS = ['/sumit-about.jpg', '/sumit-founder.jpg', '/sumit-profile.png'];

const MARQUEE = [
  'TypeScript', 'React', 'Next.js', 'React Native', 'Node.js', 'Express',
  'Python', 'Django', 'FastAPI', 'Java', 'Spring Boot', 'Microservices',
  'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Linux',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'GraphQL', 'WebSockets',
  'Kafka', 'Gen AI', 'LangChain.js', 'LangGraph', 'DSA', 'System Design',
  'Tailwind', 'Prisma', 'Zustand', 'Vitest', 'HTML5', 'CSS3',
];

const SKILLS = [
  { label: 'Languages', items: 'JavaScript, TypeScript, Python, Java' },
  { label: 'Front-End', items: 'React, Next.js, React Native, HTML5, CSS3, Tailwind' },
  { label: 'Back-End', items: 'Node.js, Express, Django, FastAPI, Spring Boot' },
  { label: 'Gen AI & Agentic AI', items: 'LLMs, RAG, Tools, LangChain.js, LangGraph' },
  { label: 'Databases', items: 'PostgreSQL, MongoDB, MySQL, Redis, Prisma' },
  { label: 'DevOps & Cloud', items: 'Docker, Kubernetes, CI/CD, AWS, Terraform, Linux, Monitoring' },
  { label: 'APIs & Comms', items: 'REST, GraphQL, WebSockets, gRPC, Kafka' },
  { label: 'CS Foundations', items: 'Data Structures & Algorithms, System Design' },
];

const SERVICES = [
  {
    icon: '🖥️',
    title: 'Web Development',
    body: (
      <>Building fast, scalable web apps with <em className="a-kw">React</em>, <em className="a-kw">Next.js</em>,{' '}
      <em className="a-kw">TypeScript</em> and <em className="a-kw">Tailwind</em> — typed front to back, tested and production-ready.</>
    ),
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    body: (
      <>Cross-platform iOS &amp; Android apps with <em className="a-kw">React Native</em> and <em className="a-kw">Expo</em> —
      one <em className="a-kw">TypeScript</em> codebase, native experience.</>
    ),
  },
  {
    icon: '🔌',
    title: 'Backend &amp; APIs',
    body: (
      <>Robust <em className="a-kw">REST</em> &amp; <em className="a-kw">GraphQL</em> APIs with <em className="a-kw">Node/Express</em>,{' '}
      <em className="a-kw">Python/Django</em>, <em className="a-kw">FastAPI</em> and <em className="a-kw">Java/Spring Boot</em>.</>
    ),
  },
  {
    icon: '🗄️',
    title: 'Databases',
    body: (
      <>Modelling and optimising data across <em className="a-kw">PostgreSQL</em>, <em className="a-kw">MongoDB</em>,{' '}
      <em className="a-kw">MySQL</em> and <em className="a-kw">Redis</em> — the right store for each job.</>
    ),
  },
  {
    icon: '☁️',
    title: 'DevOps &amp; Cloud',
    body: (
      <>Shipping and scaling with <em className="a-kw">Docker</em>, <em className="a-kw">Kubernetes</em>,{' '}
      <em className="a-kw">CI/CD</em>, <em className="a-kw">AWS</em> and <em className="a-kw">Terraform</em>.</>
    ),
  },
  {
    icon: '🤖',
    title: 'Gen AI &amp; Agents',
    body: (
      <>Building LLM-powered, agentic apps with <em className="a-kw">LangChain.js</em>, <em className="a-kw">LangGraph</em>{' '}
      and <em className="a-kw">RAG</em> — grounded, tool-using and reliable.</>
    ),
  },
];

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9z" /></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" /></svg>
  ),
  credly: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5l2.9 1.68h3.35v3.35L21 10.4v3.35l-1.68 2.9v3.35h-3.35L12 22.5l-2.9-1.68H5.75v-3.35L4.07 13.6v-3.35l1.68-2.9V4h3.35zM12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" /></svg>
  ),
};

export default function AboutFounder() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const marquee = [...MARQUEE, ...MARQUEE];

  return (
    <div className="about-page">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="a-hero">
        <div className="a-hero-photo">
          <img
            src={PHOTOS[photoIdx]}
            alt="Sumit Rawal"
            loading="lazy"
            onError={() => setPhotoIdx((i) => Math.min(i + 1, PHOTOS.length - 1))}
          />
          <span className="a-photo-badge" aria-hidden="true">&lt;/&gt;</span>
        </div>

        <div className="a-hero-text">
          <p className="a-greeting">
            <span className="a-tag">&lt;span&gt;</span>Hey, I&rsquo;m Sumit Rawal<span className="a-tag">&lt;/span&gt;</span>
          </p>
          <h1 className="a-title">
            <span className="a-brace">{'{'}Full Lifecycle{'}'}</span>Web · App · Cloud Engineer
          </h1>
          <p className="a-bio">
            <span className="a-tag">&lt;p&gt;</span>I&rsquo;m on a disciplined <em className="a-kw">4-year journey</em> to become a{' '}
            <em className="a-kw">Full Lifecycle Engineer</em> — mastering the stack front to back. From typed apps with{' '}
            <em className="a-kw">TypeScript</em>, <em className="a-kw">React</em>, <em className="a-kw">Next.js</em> and{' '}
            <em className="a-kw">React Native</em>, to backends with <em className="a-kw">Node</em>,{' '}
            <em className="a-kw">Python/Django</em> and <em className="a-kw">Java/Spring Boot</em>, to shipping and scaling
            with <em className="a-kw">Docker</em>, <em className="a-kw">Kubernetes</em>, <em className="a-kw">CI/CD</em> and{' '}
            <em className="a-kw">AWS</em> — grounded in <em className="a-kw">Gen AI</em>, <em className="a-kw">DSA</em> and{' '}
            <em className="a-kw">System Design</em>.<span className="a-tag">&lt;/p&gt;</span>
          </p>

          <div className="a-hero-actions">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="a-btn a-btn-primary">
              <span className="a-btn-ic">{ICONS.linkedin}</span> LinkedIn
            </a>
            <a href={CREDLY} target="_blank" rel="noopener noreferrer" className="a-btn a-btn-outline">
              <span className="a-btn-ic">{ICONS.credly}</span> Credly Badges
            </a>
            <Link to="/roadmap" className="a-btn a-btn-ghost">The 4-Year Roadmap →</Link>
          </div>
        </div>
      </section>

      {/* ── Skills marquee ───────────────────────────────── */}
      <div className="a-marquee" aria-label="Technologies">
        <div className="a-marquee-track">
          {marquee.map((tech, i) => (
            <span key={i} className="a-chip">{tech}</span>
          ))}
        </div>
      </div>

      {/* ── Skills ───────────────────────────────────────── */}
      <section className="a-section">
        <p className="a-eyebrow"><span className="a-dot" /> Technologies</p>
        <h2 className="a-h2">My Skills</h2>
        <div className="a-skills-grid">
          {SKILLS.map((cat) => (
            <div key={cat.label} className="a-skill-row">
              <span className="a-skill-label">{cat.label}</span>
              <span className="a-skill-items">{cat.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="a-section">
        <p className="a-eyebrow"><span className="a-dot" /> What I&rsquo;m building toward</p>
        <h2 className="a-h2">Services</h2>
        <div className="a-services-grid">
          {SERVICES.map((svc) => (
            <article key={svc.title} className="a-service">
              <span className="a-service-ic" aria-hidden="true">{svc.icon}</span>
              <h3 className="a-service-title" dangerouslySetInnerHTML={{ __html: svc.title }} />
              <p className="a-service-body">{svc.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="a-section a-contact">
        <p className="a-eyebrow"><span className="a-dot" /> Get in touch</p>
        <h2 className="a-h2">Let&rsquo;s connect</h2>
        <p className="a-contact-sub">
          Open to new opportunities — connect on LinkedIn, verify my credentials, or explore my work.
        </p>
        <div className="a-links">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="a-link-card">
            <span className="a-link-ic">{ICONS.linkedin}</span>
            <span><strong>LinkedIn</strong><em>lawyersumitrawal</em></span>
          </a>
          <a href={CREDLY} target="_blank" rel="noopener noreferrer" className="a-link-card">
            <span className="a-link-ic">{ICONS.credly}</span>
            <span><strong>Credly</strong><em>Verified badges</em></span>
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="a-link-card">
            <span className="a-link-ic">{ICONS.github}</span>
            <span><strong>GitHub</strong><em>Code &amp; projects</em></span>
          </a>
        </div>
        <p className="a-location">🇮🇳 Based in India · Indian Standard Time (IST, UTC+5:30)</p>
        <Link to="/" className="a-back">← Back to Home</Link>
      </section>
    </div>
  );
}
