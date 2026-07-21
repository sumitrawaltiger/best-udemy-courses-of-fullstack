import { Link } from 'react-router-dom';

// ── The 4-year roadmap ──────────────────────────────────────────────────────
// Day 1 = 1 Sep 2026. A 4-year coding journey (TypeScript → Python → Java →
// DevOps, one year each), landing on 31 Aug 2030 = 1461 study days.
// Gen AI and JavaScript are PREREQUISITES, completed before Day 1.

const PREREQS = [
  {
    icon: '🤖',
    title: 'Gen AI & Agentic AI',
    detail: 'LLMs · token prediction · RAG · tools · LangChain.js · LangGraph',
    to: '/genai',
  },
  {
    icon: '🟨',
    title: 'JavaScript',
    detail: 'ES6+, the DOM, async — with HTML5 & CSS3 fundamentals',
    to: '/prerequisites',
  },
];

const PHASES = [
  {
    id: 'y1',
    arcClass: 'y1',
    icon: '🔷',
    label: 'Year 1 · TypeScript Stack',
    tagline: 'Year 1',
    duration: '1 year',
    dates: '1 Sep 2026 → 31 Aug 2027',
    blurb: 'The first year of code — the TypeScript stack, front to back.',
    items: [
      {
        icon: '🔷',
        title: 'TypeScript Stack',
        detail: 'TypeScript · React · Next.js · React Native · Express JS',
        dates: '1 Sep 2026 → 31 Aug 2027',
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
    tagline: 'Year 2',
    duration: '1 year',
    dates: '1 Sep 2027 → 31 Aug 2028',
    blurb: 'A full year of Python — the language, the web framework, and modern APIs.',
    items: [
      {
        icon: '🐍',
        title: 'Python Stack',
        detail: 'Python · Django · FastAPI',
        dates: '1 Sep 2027 → 31 Aug 2028',
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
    tagline: 'Year 3',
    duration: '1 year',
    dates: '1 Sep 2028 → 31 Aug 2029',
    blurb: 'A year of enterprise Java — Spring Boot and microservices at production scale.',
    items: [
      {
        icon: '☕',
        title: 'Java Stack',
        detail: 'Java · Spring Boot · Microservices',
        dates: '1 Sep 2028 → 31 Aug 2029',
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
    dates: '1 Sep 2029 → 31 Aug 2030',
    blurb: 'The final year — ship and scale everything: Linux, Docker, Kubernetes, CI/CD and AWS Cloud.',
    items: [
      {
        icon: '🚀',
        title: 'DevOps Stack',
        detail: 'Linux · Docker · Kubernetes · CI/CD · AWS',
        dates: '1 Sep 2029 → 31 Aug 2030',
        source: 'CloudFolksHub / KodeKloud',
        to: '/devops',
        final: true,
      },
    ],
  },
];

const STATS = [
  { value: '1,461', label: 'study days' },
  { value: '≈4,400', label: 'study hours' },
  { value: '3 hrs', label: 'daily · 5:00–8:00 AM' },
  { value: '4 years', label: 'TS · Python · Java · DevOps' },
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
        <span className="roadmap-hero-badge">📍 1 Sep 2026 → 31 Aug 2030 · 1461 days</span>
        <h1 className="roadmap-hero-title">The 4-Year Roadmap</h1>
        <p className="roadmap-hero-sub">
          A <strong>4-year coding journey</strong> — <strong>TypeScript → Python → Java → DevOps</strong>,
          one year each. One morning at a time, <strong>5:00–8:00 AM</strong> (Indian Standard Time, UTC+5:30).
          Day 1 is <strong>1 Sep 2026</strong> and day 1461 lands on <strong>31 Aug 2030</strong>.{' '}
          <strong>Gen AI</strong> and <strong>JavaScript</strong> are prerequisites, completed before Day 1.
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
          src="/roadmap-notes/four-year-roadmap.jpg"
          alt="The 4-Year Roadmap to Full-Stack & DevOps — TypeScript, Python, Java and DevOps, one year each, with Gen AI and JavaScript as prerequisites."
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
          🎒 Prerequisites — before Day 1
        </h2>
        <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem', margin: '0 0 14px' }}>
          Complete these first — the 4-year journey assumes you already know them.
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
            <p className="roadmap-finish-date">31 Aug 2030 · 1,461 days complete</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Prerequisites (Gen AI &amp; JavaScript) → then a 4-year coding journey: Year 1 TypeScript stack
          (TypeScript, React, Next.js, React Native, Express JS) → Year 2 Python stack (Python, Django, FastAPI) →
          Year 3 Java stack (Java, Spring Boot, Microservices) → Year 4 DevOps stack (Linux, Docker, Kubernetes,
          CI/CD, AWS). 1461 days, 1 Sep 2026 → 31 Aug 2030.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/nextjs" className="btn btn-lg roadmap-btn-primary">
            Start Year 1 · TypeScript
          </Link>
          <Link to="/genai" className="btn btn-lg roadmap-btn-outline">
            Prerequisite · GenAI
          </Link>
          <Link to="/best-udemy-courses" className="btn btn-lg roadmap-btn-outline">
            All course picks
          </Link>
        </div>
      </section>
    </div>
  );
}
