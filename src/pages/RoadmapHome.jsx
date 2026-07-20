import { Link } from 'react-router-dom';

// ── The 1500-day roadmap ───────────────────────────────────────────────────
// Day 1 = Mon 20 Jul 2026. 39 days of Gen AI with JavaScript, then a 4-year
// coding journey (TypeScript → Python → Java → DevOps, one year each), landing
// on 27 Aug 2030 = 1500 study days. Dates are the plan's explicit windows.

const PHASES = [
  {
    id: 'p1',
    arcClass: 'y3',
    icon: '🤖',
    label: 'Gen AI with JavaScript',
    tagline: 'Phase 1',
    duration: '39 days',
    dates: '20 Jul → 27 Aug 2026',
    blurb:
      'The journey opens with 39 days of Generative & Agentic AI in JavaScript — from how LLMs actually work to building, evaluating and shipping autonomous agents with the Gemini SDK, LangChain.js and LangGraph.',
    items: [
      {
        icon: '🧠',
        title: 'GenAI & Agentic AI',
        detail: 'LLMs · token prediction · RAG · tools · LangChain.js · LangGraph',
        dates: '20 Jul → 27 Aug 2026',
        source: 'Coder Army · STRIKE GenAI + TypeScript agent course',
        to: '/genai',
      },
    ],
  },
  {
    id: 'y1',
    arcClass: 'y1',
    icon: '🔷',
    label: 'Year 1 · TypeScript Stack',
    tagline: '4-Year Coding Journey',
    duration: '1 year',
    dates: '28 Aug 2026 → 27 Aug 2027',
    blurb: 'The first year of code — the TypeScript stack, front to back.',
    items: [
      {
        icon: '🔷',
        title: 'TypeScript Stack',
        detail: 'TypeScript · React · React Native · Next.js · Express / Node.js',
        dates: '28 Aug 2026 → 27 Aug 2027',
        source: 'Thunder++, Udemy & ChaiCode',
        to: '/nextjs',
      },
    ],
  },
  {
    id: 'y2',
    arcClass: 'y2',
    icon: '🐍',
    label: 'Year 2 · Python Stack',
    tagline: '4-Year Coding Journey',
    duration: '1 year',
    dates: '28 Aug 2027 → 27 Aug 2028',
    blurb: 'A full year of Python — the language, the web framework, and modern APIs.',
    items: [
      {
        icon: '🐍',
        title: 'Python Stack',
        detail: 'Python · Django · FastAPI',
        dates: '28 Aug 2027 → 27 Aug 2028',
        source: 'Ashok IT',
        to: '/python',
      },
    ],
  },
  {
    id: 'y3',
    arcClass: 'y3',
    icon: '☕',
    label: 'Year 3 · Java Stack',
    tagline: '4-Year Coding Journey',
    duration: '1 year',
    dates: '28 Aug 2028 → 27 Aug 2029',
    blurb: 'A year of enterprise Java — Spring Boot and microservices at production scale.',
    items: [
      {
        icon: '☕',
        title: 'Java Stack',
        detail: 'Java · Spring Boot · Microservices',
        dates: '28 Aug 2028 → 27 Aug 2029',
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
    tagline: '4-Year Coding Journey',
    duration: '1 year',
    dates: '28 Aug 2029 → 27 Aug 2030',
    blurb: 'The final year — ship and scale everything: Linux, Docker, Kubernetes, CI/CD and AWS Cloud.',
    items: [
      {
        icon: '🚀',
        title: 'DevOps Stack',
        detail: 'Linux · Docker · Kubernetes · CI/CD · AWS',
        dates: '28 Aug 2029 → 27 Aug 2030',
        source: 'CloudFolksHub / KodeKloud',
        to: '/devops',
        final: true,
      },
    ],
  },
];

const STATS = [
  { value: '1,500', label: 'study days' },
  { value: '≈4,500', label: 'study hours' },
  { value: '3 hrs', label: 'daily · 5:00–8:00 AM' },
  { value: '39 + 4 yr', label: 'GenAI + 4-year code' },
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
        <span className="roadmap-hero-badge">📍 20 Jul 2026 → 27 Aug 2030 · 1500 days</span>
        <h1 className="roadmap-hero-title">The 1500-Day Roadmap</h1>
        <p className="roadmap-hero-sub">
          <strong>39 days</strong> of Gen AI with JavaScript, then a <strong>4-year coding journey</strong> —{' '}
          <strong>TypeScript → Python → Java → DevOps</strong>, one year each. One morning at a time,{' '}
          <strong>5:00–8:00 AM</strong> (Indian Standard Time, UTC+5:30). Day 1 is <strong>20 Jul 2026</strong> and day
          1500 lands on <strong>27 Aug 2030</strong>.
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
        style={{ margin: '0 auto 4px', textAlign: 'center', maxWidth: '780px' }}
      >
        <img
          src="/roadmap-notes/1500-day-roadmap.jpg"
          alt="The 1500-Day Roadmap to Full-Stack & DevOps — 39 days of Gen AI with JavaScript plus a 4-year coding journey (TypeScript, Python, Java, DevOps)"
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
                  <span className="roadmap-arc-dates">{phase.dates}</span>
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
                      <p className="roadmap-card-window">{item.dates}</p>
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
            <p className="roadmap-finish-date">27 Aug 2030 · 1,500 days complete</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Gen AI with JavaScript (39 days) → then a 4-year coding journey: Year 1 TypeScript stack (TypeScript,
          React, React Native, Next.js, Express/Node) → Year 2 Python stack (Python, Django, FastAPI) → Year 3
          Java stack (Java, Spring Boot, Microservices) → Year 4 DevOps stack (Linux, Docker, Kubernetes, CI/CD,
          AWS). 1500 days, 20 Jul 2026 → 27 Aug 2030.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/day-001" className="btn btn-lg roadmap-btn-primary">
            Start at Day 1
          </Link>
          <Link to="/genai" className="btn btn-lg roadmap-btn-outline">
            Phase 1 · GenAI track
          </Link>
          <Link to="/best-udemy-courses" className="btn btn-lg roadmap-btn-outline">
            All course picks
          </Link>
        </div>
      </section>
    </div>
  );
}
