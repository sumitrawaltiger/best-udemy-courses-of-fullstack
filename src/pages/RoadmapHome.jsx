import { Link } from 'react-router-dom';

// ── The 4-year + finale roadmap ─────────────────────────────────────────────
// A 4-year coding journey (Python → TypeScript → Java → DevOps, one year each)
// = 1461 days, plus a 39-day Gen AI & Python prerequisite, plus 100 days of
// System Design & Interview Preparation = 1,600 days total. Calendar dates
// are intentionally NOT shown (HR-facing page). Gen AI and Python fundamentals
// are PREREQUISITES, completed before Year 1; the System Design & Interview
// Prep sprint follows Year 4.

const PREREQS = [
  {
    icon: '🤖',
    title: 'Gen AI & Agentic AI',
    detail: 'LLMs · token prediction · RAG · tools · LangChain · LangGraph — in Python',
    to: '/genai',
  },
  {
    icon: '🐍',
    title: 'Python',
    detail: 'Syntax, data types, OOP fundamentals — the base for Agentic AI and Year 1',
    to: '/python',
  },
];

const PHASES = [
  {
    id: 'y1',
    arcClass: 'y1',
    icon: '🐍',
    label: 'Year 1 · Python Stack',
    tagline: 'Year 1',
    duration: '1 year',
    blurb: 'The first year of code — the Python stack, from the language to the web framework.',
    items: [
      {
        icon: '🐍',
        title: 'Python Stack',
        detail: 'Python · Django · FastAPI',
        source: 'Ashok IT',
        to: '/python',
      },
    ],
  },
  {
    id: 'y2',
    arcClass: 'y2',
    icon: '🔷',
    label: 'Year 2 · TypeScript Stack',
    tagline: 'Year 2',
    duration: '1 year',
    blurb: 'A full year of TypeScript — typed frontend, full-stack web, and mobile.',
    items: [
      {
        icon: '🔷',
        title: 'TypeScript Stack',
        detail: 'TypeScript · React · Next.js · React Native · Express JS',
        source: 'Thunder++, Udemy & ChaiCode',
        to: '/nextjs',
      },
    ],
  },
  {
    id: 'y3',
    arcClass: 'y3',
    icon: '☕',
    label: 'Year 3 · Java Stack',
    tagline: 'Year 3',
    duration: '1 year',
    blurb: 'A year of enterprise Java — Spring Boot and microservices at production scale.',
    items: [
      {
        icon: '☕',
        title: 'Java Stack',
        detail: 'Java · Spring Boot · Microservices',
        source: 'Udemy',
        to: '/java',
      },
    ],
  },
  {
    id: 'y4',
    arcClass: 'y4',
    icon: '☁️',
    label: 'Year 4 · DevOps Stack',
    tagline: 'Year 4',
    duration: '1 year',
    blurb: 'The final year — ship and scale everything: Linux, Docker, Kubernetes, CI/CD and AWS Cloud.',
    items: [
      {
        icon: '🚀',
        title: 'DevOps Stack',
        detail: 'Linux · Docker · Kubernetes · CI/CD · AWS',
        source: 'CloudFolksHub / KodeKloud',
        to: '/devops',
      },
    ],
  },
  {
    id: 'y5',
    arcClass: 'y5',
    icon: '📐',
    label: 'System Design & Interview Prep',
    tagline: '100 Days',
    duration: '100 days',
    blurb: 'The finale — 100 days entirely dedicated to System Design and Interview Preparation, after 4 years of coding.',
    items: [
      {
        icon: '📐',
        title: 'System Design & Interview Prep',
        detail: 'Advanced System Design · Mock Interviews · DSA Revision · Behavioral Prep',
        source: '100 days · after Year 4',
        to: '/interview',
        final: true,
      },
    ],
  },
];

const STATS = [
  { value: '4 years', label: '+ 139 prereq + interview-prep days' },
  { value: '1,600', label: 'days of practice' },
  { value: '5', label: 'stages, front to back' },
  { value: '30+', label: 'technologies' },
];

function ItemLink({ item, children }) {
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="roadmap-card-link">
        {children}
      </a>
    );
  }
  return (
    <Link to={item.to} className="roadmap-card-link">
      {children}
    </Link>
  );
}

export default function RoadmapHome() {
  return (
    <div className="roadmap-page">
      <section className="roadmap-hero">
        <span className="roadmap-hero-badge">📍 Day 0 setup · 4 years (+139 days) · 1,600 days of practice</span>
        <h1 className="roadmap-hero-title">The 4-Year Roadmap</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then a <strong>4-year coding journey</strong> —{' '}
          <strong>Python → TypeScript → Java → DevOps</strong>, one year each (<strong>1,461 days</strong>) — plus a{' '}
          <strong>39-day Agentic AI &amp; Python</strong> prerequisite and{' '}
          <strong>100 days of System Design &amp; Interview Preparation</strong> to finish, for{' '}
          <strong>1,600 days</strong> of focused, daily practice in total.
        </p>
        <div className="roadmap-stats">
          {STATS.map((s) => (
            <div key={s.label} className="roadmap-stat">
              <span className="roadmap-stat-value">{s.value}</span>
              <span className="roadmap-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <figure
        className="roadmap-poster"
        style={{ margin: '8px auto 4px', textAlign: 'center', maxWidth: '620px' }}
      >
        <img
          src="/roadmap-notes/roadmap-1600-days-python-first.jpg"
          alt="1600 Days of Code — 39 days + 1,461 days + 100 days = one complete journey. A glowing vertical timeline: a 39-day Python with Agentic AI prerequisite, then Year 1 Python, Year 2 TypeScript, Year 3 Java and Year 4 DevOps (4 years · 1,461 days), finishing with 100 days of System Design & Interview Preparation at Full Lifecycle Engineer."
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 14px 44px rgba(0,0,0,0.45)',
          }}
          onError={(e) => {
            const fig = e.currentTarget.closest('.roadmap-poster');
            if (fig) fig.style.display = 'none';
          }}
        />
        <figcaption style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.6 }}>
          The full journey at a glance
        </figcaption>
      </figure>

      <section
        className="roadmap-prereq"
        style={{ maxWidth: '780px', margin: '4px auto 8px' }}
      >
        <h2 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 4px', textAlign: 'center' }}>
          🛠️ Day 0 — before everything else
        </h2>
        <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem', margin: '0 0 14px' }}>
          Environment setup first — Node, Git, VS Code, accounts, and the daily routine.
        </p>
        <Link
          to="/day-000"
          style={{
            display: 'block',
            padding: '14px 16px',
            borderRadius: '14px',
            border: '1px solid rgba(0, 255, 136, 0.35)',
            background: 'rgba(0, 255, 136, 0.06)',
            textDecoration: 'none',
            color: 'inherit',
            marginBottom: '22px',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '1rem' }}>
            <span aria-hidden="true">🛠️</span> Day 0 · Environment Setup
            <span style={{ opacity: 0.55, fontWeight: 600, fontSize: '0.75rem' }}> · start here</span>
          </div>
          <div style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '4px' }}>
            Node.js · Git · VS Code · Chrome DevTools · GitHub · Netlify · study routine
          </div>
        </Link>

        <h2 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 4px', textAlign: 'center' }}>
          🎒 Prerequisites — before Year 1 Day 1
        </h2>
        <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem', margin: '0 0 14px' }}>
          Complete these next — the 4-year journey assumes you already know them.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          {PREREQS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              style={{
                display: 'block',
                padding: '14px 16px',
                borderRadius: '14px',
                border: '1px dashed rgba(255,255,255,0.22)',
                background: 'rgba(255,255,255,0.03)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>
                <span aria-hidden="true">{p.icon}</span> {p.title}
                <span style={{ opacity: 0.55, fontWeight: 600, fontSize: '0.75rem' }}> · prerequisite</span>
              </div>
              <div style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '4px' }}>{p.detail}</div>
            </Link>
          ))}
        </div>
      </section>

      <div className="roadmap-timeline">
        {PHASES.map((phase) => (
          <section key={phase.id} className={`roadmap-arc roadmap-arc-${phase.arcClass}`}>
            <div className="roadmap-arc-header">
              <span className="roadmap-arc-dot" aria-hidden="true" />
              <div className="roadmap-arc-heading">
                <h2 className="roadmap-arc-title">
                  {phase.icon} {phase.label} <span className="roadmap-arc-tagline">· {phase.tagline}</span>
                </h2>
                <p className="roadmap-arc-meta">
                  <span className="roadmap-arc-range">{phase.duration}</span>
                </p>
                <p className="roadmap-arc-blurb">{phase.blurb}</p>
              </div>
            </div>

            <ol className="roadmap-list">
              {phase.items.map((item, i) => (
                <li key={item.title} className={`roadmap-item ${item.final ? 'roadmap-item-final' : ''}`}>
                  <span className="roadmap-node" aria-hidden="true">
                    <span className="roadmap-node-num">{i + 1}</span>
                  </span>
                  <ItemLink item={item}>
                    <article className="roadmap-card">
                      <div className="roadmap-card-top">
                        <span className="roadmap-card-icon" aria-hidden="true">{item.icon}</span>
                        <h3 className="roadmap-card-title">{item.title}</h3>
                        {item.final && <span className="roadmap-card-final">Final</span>}
                      </div>
                      {item.detail && <p className="roadmap-card-detail">{item.detail}</p>}
                      <p className="roadmap-card-source">{item.source}</p>
                    </article>
                  </ItemLink>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="roadmap-finish">
          <span className="roadmap-finish-flag" aria-hidden="true">🏁</span>
          <div>
            <p className="roadmap-finish-title">Full Lifecycle Engineer</p>
            <p className="roadmap-finish-date">4 years + 100 days of System Design &amp; Interview Prep · 1,600 days</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          A 39-day prerequisite — Generative AI &amp; Agentic AI (in Python) → then a 4-year coding journey:
          Year 1 Python stack (Python, Django, FastAPI) → Year 2 TypeScript stack (TypeScript, React, Next.js,
          React Native, Express JS) → Year 3 Java stack (Java, Spring Boot, Microservices) → Year 4 DevOps stack
          (Linux, Docker, Kubernetes, CI/CD, AWS) → 100 days of System Design &amp; Interview Preparation.
          1,600 days end to end (1,461 + 39 + 100).
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Explore Year 1 · Python
          </Link>
          <Link to="/genai" className="btn btn-lg roadmap-btn-outline">
            Prerequisites · Gen AI
          </Link>
          <Link to="/interview" className="btn btn-lg roadmap-btn-outline">
            System Design &amp; Interview Prep
          </Link>
          <Link to="/best-udemy-courses" className="btn btn-lg roadmap-btn-outline">
            All course picks
          </Link>
        </div>
      </section>
    </div>
  );
}
