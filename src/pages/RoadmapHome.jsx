import { Link } from 'react-router-dom';

// ── The 5-phase, 1,700-day roadmap ──────────────────────────────────────────
// 4 sequential stacks + a 239-day Capstone — Python Stack (starts with
// Agentic AI using Python, then core Python + FastAPI), TypeScript Stack,
// Java Stack, DevOps Stack, and a Capstone Project that integrates all four.
// No separate prerequisite and no separate finale — Day 1 starts directly
// with Agentic AI, and Data Structures & System Design are practiced
// throughout every stack rather than as a single dedicated block at the end.
// Calendar dates are intentionally NOT shown (HR-facing page).

const PHASES = [
  {
    id: 'p1',
    arcClass: 'y1',
    icon: '🐍',
    label: 'Phase 1 · Python Stack',
    tagline: 'Days 1–365',
    duration: '365 days',
    blurb: 'The current focus — starts with building AI agents (LangChain, LangGraph, MCP, agentic workflows), then continues into core Python and FastAPI for a full Python-first stretch.',
    items: [
      { icon: '🤖', title: 'Agentic AI using Python', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
      { icon: '🐍', title: 'Python', detail: 'Core syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p2',
    arcClass: 'y2',
    icon: '🔷',
    label: 'Phase 2 · TypeScript Stack',
    tagline: 'Days 366–731',
    duration: '366 days',
    blurb: '46 days of JavaScript → 20 days of TypeScript → 300 days of React, React Native, Next.js, and Express.js — the full JS/TS web ecosystem in one calendar year.',
    items: [
      { icon: '🟨', title: 'JavaScript', detail: '46 days — syntax, DOM, async, and fundamentals', source: 'Thunder++', to: '/' },
      { icon: '🔷', title: 'TypeScript', detail: '20 days — types, interfaces, generics, enums, and classes', source: 'Illustrated TypeScript series', to: '/typescript' },
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · state · routing · data fetching', source: 'ChaiCode', to: '/nextjs' },
      { icon: '🌐', title: 'Next JS', detail: 'App Router · server components · data & server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · navigation · builds & publishing', source: 'ChaiCode', to: '/mobile' },
      { icon: '🟢', title: 'Express JS / Node JS', detail: 'REST APIs · middleware · Prisma · JWT auth & deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p3',
    arcClass: 'y3',
    icon: '☕',
    label: 'Phase 3 · Java Stack',
    tagline: 'Days 732–1096',
    duration: '365 days',
    blurb: 'The full enterprise Java path in one stack — core Java through Spring Boot and microservices.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP, collections, exceptions, multithreading', source: 'Udemy', to: '/java' },
      { icon: '🏢', title: 'J2EE', detail: 'Servlets · JSP · the Java EE ecosystem', source: 'Udemy', to: '/java' },
      { icon: '🗄️', title: 'JPA', detail: 'ORM · entities · database mapping', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · Spring Data · REST APIs · security', source: 'Udemy', to: '/java' },
      { icon: '🕸️', title: 'Microservices using Java', detail: 'Microservices architecture · API gateway · service discovery', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p4',
    arcClass: 'y5',
    icon: '🚀',
    label: 'Phase 4 · DevOps Stack',
    tagline: 'Days 1097–1461',
    duration: '365 days',
    blurb: 'The fourth stack — ship and scale everything with Linux, Docker, Kubernetes, CI/CD, and core AWS services.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
  {
    id: 'p5',
    arcClass: 'capstone',
    icon: '🎯',
    label: 'Phase 5 · Capstone Project',
    tagline: 'Days 1462–1700',
    duration: '239 days',
    blurb: 'The 239-day capstone — bring all four stacks together in production-grade projects: Agentic AI pipelines, TypeScript frontends, Java microservices backends, and full DevOps deployment.',
    items: [
      { icon: '🤖', title: 'Agentic AI Integration', detail: 'LangChain · LangGraph · MCP — agents wired to real backends', source: 'Capstone', to: '/python' },
      { icon: '⚛️', title: 'Full-Stack TypeScript', detail: 'React · Next.js · Express — the web layer, end to end', source: 'Capstone', to: '/' },
      { icon: '☕', title: 'Java Microservices', detail: 'Spring Boot · REST · Kafka · Docker — enterprise-grade backends', source: 'Capstone', to: '/java' },
      { icon: '🚀', title: 'DevOps Deployment', detail: 'Kubernetes · CI/CD · Terraform · AWS — ship and monitor at scale', source: 'Capstone', to: '/devops' },
    ],
  },
];

const STATS = [
  { value: '5', label: 'phases · 4 stacks + capstone' },
  { value: '55', label: 'months · 1,700 days' },
  { value: '~1 yr', label: 'per phase (239 d capstone)' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 5 phases · 55-month learning journey · 1,700 days</span>
        <h1 className="roadmap-hero-title">The 55-Month Learning Journey</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>5 phases</strong> —{' '}
          <strong>Python Stack (Agentic AI → Python → FastAPI) → TypeScript Stack → Java Stack → DevOps
          Stack → Capstone Project</strong> — <strong>55 months (1,700 days)</strong> of focused, daily practice, front to back. Data
          Structures &amp; System Design are practiced throughout, not a separate add-on.
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
        style={{ margin: '8px auto 4px', textAlign: 'center', maxWidth: '820px' }}
      >
        <img
          src="/roadmap-notes/1700-days-learning-journey-2026-2031.png"
          alt="Road to Full Lifecycle Engineer — 1,700 Days · 55 Months · 5 Phases (5 Aug 2026 – 31 Mar 2031). Phase 1: Python Stack (Agentic AI) · 5 Aug 2026 – 4 Aug 2027 · 365 days — LangChain, LangGraph, MCP, Python, FastAPI, Agentic Workflows. Phase 2: TypeScript Stack · 5 Aug 2027 – 4 Aug 2028 · 366 days — JavaScript, TypeScript, React JS, Next.js, React Native, Express.js. Phase 3: Java Stack · 5 Aug 2028 – 4 Aug 2029 · 365 days — J2SE, J2EE, JPA, Spring Boot, Microservices. Phase 4: DevOps Stack · 5 Aug 2029 – 4 Aug 2030 · 365 days — Linux, Docker, Kubernetes, CI/CD, Terraform, AWS Cloud. Phase 5: Capstone Project · 5 Aug 2030 – 31 Mar 2031 · 239 days — Full Integration: Agentic AI + TypeScript + Java + DevOps, Production-grade Projects. DSA & System Design practiced throughout every stack. One Goal: Build, Deploy, Automate, Scale."
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
            marginBottom: '4px',
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
                <li key={item.title} className="roadmap-item">
                  <span className="roadmap-node" aria-hidden="true">
                    <span className="roadmap-node-num">{i + 1}</span>
                  </span>
                  <ItemLink item={item}>
                    <article className="roadmap-card">
                      <div className="roadmap-card-top">
                        <span className="roadmap-card-icon" aria-hidden="true">{item.icon}</span>
                        <h3 className="roadmap-card-title">{item.title}</h3>
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
            <p className="roadmap-finish-date">5 phases · 55 months · 1,700 days, front to back</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 5 phases: <strong>Python Stack</strong> (Agentic AI using Python →
          Python → FastAPI) → <strong>TypeScript Stack</strong> (JavaScript, TypeScript, React JS, Next JS,
          React Native, Express/Node JS) → <strong>Java Stack</strong> (J2SE, J2EE, JPA, Spring Boot,
          Microservices) → <strong>DevOps Stack</strong> (DevOps, AWS Cloud) → <strong>Capstone Project</strong> (all
          four stacks integrated). Data Structures &amp; System Design are practiced throughout every stack, not saved
          for one dedicated block. 55 months (1,700 days) end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Explore Phase 1 · Python Stack
          </Link>
          <Link to="/interview" className="btn btn-lg roadmap-btn-outline">
            DSA &amp; System Design
          </Link>
          <Link to="/best-udemy-courses" className="btn btn-lg roadmap-btn-outline">
            All course picks
          </Link>
        </div>
      </section>
    </div>
  );
}
