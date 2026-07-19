import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── The dated 3-phase roadmap ──────────────────────────────────────────────
// Day 1 = Mon 20 Jul 2026. 100 (Agentic AI) + 1000 (Code) + 365 (DevOps) = 1465
// days, landing exactly on 23 Jul 2030. Dates are computed from the anchor so
// they always reconcile — no hardcoded strings to drift.
const START = new Date(2026, 6, 20); // 20 Jul 2026
const ROADMAP_POSTER = '/roadmap-notes/1465-day-roadmap.jpg';

function dayToDate(n) {
  const d = new Date(START);
  d.setDate(d.getDate() + (n - 1));
  return d;
}
function fmt(d) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
function rangeLabel(startDay, endDay) {
  return `${fmt(dayToDate(startDay))} → ${fmt(dayToDate(endDay))}`;
}
const days = (a, b) => b - a + 1;

const PHASES = [
  {
    id: 'p1',
    arcClass: 'y3',
    icon: '🤖',
    label: 'Phase 1 · Agentic AI',
    tagline: 'in JavaScript',
    startDay: 1,
    endDay: 100,
    blurb:
      'The journey opens with Generative & Agentic AI in JavaScript — from how LLMs actually work to building, evaluating and shipping autonomous agents with the Gemini SDK, LangChain.js and LangGraph.',
    items: [
      {
        icon: '🧠',
        title: 'GenAI & Agentic AI',
        startDay: 1,
        endDay: 100,
        source: 'Coder Army · STRIKE GenAI (Rohit Negi)',
        to: '/genai',
      },
    ],
  },
  {
    id: 'p2',
    arcClass: 'y1',
    icon: '⌨️',
    label: 'Phase 2 · 1000 Days of Code',
    tagline: 'TypeScript · Python · Java',
    startDay: 101,
    endDay: 1100,
    blurb:
      'The core build phase — 1000 days across three stacks: the TypeScript stack (TypeScript, React, Next.js, React Native, Express), then Python & Django, then Java, Spring Boot & Microservices. DSA & System Design are practiced in each stack’s language.',
    items: [
      {
        icon: '🔷',
        title: 'TypeScript Stack',
        detail: 'TypeScript · React · Next.js · React Native · Express',
        startDay: 101,
        endDay: 600,
        source: 'Thunder++, Udemy & ChaiCode',
        to: '/nextjs',
      },
      {
        icon: '🐍',
        title: 'Python Stack',
        detail: 'Python · Django · FastAPI',
        startDay: 601,
        endDay: 800,
        source: 'Ashok IT',
        to: '/python',
      },
      {
        icon: '☕',
        title: 'Java Stack',
        detail: 'Java · Spring Boot · Microservices',
        startDay: 801,
        endDay: 1100,
        source: 'Udemy',
        to: '/java',
      },
    ],
  },
  {
    id: 'p3',
    arcClass: 'y4',
    icon: '☁️',
    label: 'Phase 3 · DevOps',
    tagline: 'ship & scale',
    startDay: 1101,
    endDay: 1465,
    blurb:
      'Ship and scale everything built so far — Linux, Docker, Kubernetes, CI/CD and AWS Cloud across a full year of DevOps.',
    items: [
      {
        icon: '🚀',
        title: 'DevOps & Cloud',
        detail: 'Linux · Docker · Kubernetes · CI/CD · AWS',
        startDay: 1101,
        endDay: 1465,
        source: 'CloudFolksHub / KodeKloud',
        to: '/devops',
        final: true,
      },
    ],
  },
];

const STATS = [
  { value: '1,465', label: 'days · 3 phases' },
  { value: '≈4,395', label: 'study hours' },
  { value: '3 hrs', label: 'daily · 5:00–8:00 AM' },
  { value: '100+1000+365', label: 'Agentic AI · Code · DevOps' },
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
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <div className="roadmap-page">
      <section className="roadmap-hero">
        <span className="roadmap-hero-badge">📍 20 Jul 2026 → 23 Jul 2030 · 1465 days</span>
        <h1 className="roadmap-hero-title">The 3-Phase Roadmap</h1>
        <p className="roadmap-hero-sub">
          <strong>100 days</strong> of Agentic AI, <strong>1000 Days of Code</strong>, then{' '}
          <strong>365 days</strong> of DevOps — one morning at a time, <strong>5:00–8:00 AM</strong>{' '}
          (Bangkok, UTC+7). Day 1 is <strong>20 Jul 2026</strong> and day 1465 lands exactly on{' '}
          <strong>23 Jul 2030</strong>.
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

      <section className="roadmap-poster-section">
        <h2 className="roadmap-poster-heading">The plan at a glance</h2>
        <figure className="roadmap-poster">
          <button
            type="button"
            className="roadmap-poster-btn"
            onClick={() => setPosterOpen(true)}
            aria-label="Open the full study-plan poster"
          >
            <img
              src={ROADMAP_POSTER}
              alt="Road to Full Lifecycle Engineer — the 1465-day, 3-phase study plan: 100 days of Agentic AI in JavaScript, 1000 Days of Code (TypeScript, Python, Java), and 365 days of DevOps, from 20 Jul 2026 to 23 Jul 2030, studied 3 hours every morning 5:00–8:00 AM."
              loading="lazy"
            />
            <span className="roadmap-poster-zoom">🔍 Click to zoom</span>
          </button>
          <figcaption className="roadmap-poster-cap">
            1465 Days · 3 Phases — the complete study plan (20 Jul 2026 → 23 Jul 2030).
          </figcaption>
        </figure>
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
                  <span className="roadmap-arc-range">
                    {days(phase.startDay, phase.endDay)} days · Days {phase.startDay}–{phase.endDay}
                  </span>
                  <span className="roadmap-arc-dates">{rangeLabel(phase.startDay, phase.endDay)}</span>
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
                      <p className="roadmap-card-window">{rangeLabel(item.startDay, item.endDay)}</p>
                      {item.detail && <p className="roadmap-card-detail">{item.detail}</p>}
                      <div className="roadmap-card-foot">
                        <span className="roadmap-card-days">{days(item.startDay, item.endDay)} days</span>
                        <span className="roadmap-card-range">Days {item.startDay}–{item.endDay}</span>
                      </div>
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
            <p className="roadmap-finish-date">23 Jul 2030 · 1,465 days complete</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Phase 1 — Agentic AI in JavaScript (100 days) → Phase 2 — 1000 Days of Code: TypeScript stack
          (TypeScript, React, Next.js, React Native, Express) → Python stack (Python, Django, FastAPI) → Java
          stack (Java, Spring Boot, Microservices), with DSA &amp; System Design in each language → Phase 3 —
          DevOps (Linux, Docker, Kubernetes, CI/CD, AWS) for a full year. 1465 days, 20 Jul 2026 → 23 Jul 2030.
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

      {posterOpen && (
        <div
          className="roadmap-lightbox"
          onClick={() => setPosterOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Study plan poster, full size"
        >
          <button
            type="button"
            className="roadmap-lightbox-close"
            onClick={() => setPosterOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={ROADMAP_POSTER}
            alt="1465 Days · 3 Phases — the complete study plan"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
