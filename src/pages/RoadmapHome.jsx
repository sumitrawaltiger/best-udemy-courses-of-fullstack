import { Link } from 'react-router-dom';

// ── Skill calendar helpers ───────────────────────────────────────────────────
const _CAL_DAY1 = new Date(2026, 7, 5); // 5 Aug 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 17 skills · 100 days each · 1,700 days ──────────────────────────────────
// Python (1–100) → FastAPI (101–200) → Agentic AI (201–300) →
// JavaScript (301–400) → TypeScript (401–500) → React (501–600) →
// Next JS (601–700) → React Native (701–800) → Express JS (801–900) →
// J2SE (901–1000) → J2EE (1001–1100) → JPA (1101–1200) →
// Spring Boot (1201–1300) → Microservices (1301–1400) →
// DevOps (1401–1500) → Cloud / AWS (1501–1600) → Capstone (1601–1700).
// Calendar dates are intentionally NOT shown (HR-facing page).

const SKILLS = [
  // ── Python domain: Skills 1–3 ─────────────────────────────────────────────
  {
    id: 's01', arcClass: 'y1', icon: '🐍',
    label: 'Skill 1 · Python',
    tagline: 'Days 1–100', duration: '100 days',
    blurb: 'Core Python from scratch — syntax, OOP, file I/O, database connectivity, and multithreading. The language foundation for everything that follows.',
    items: [
      { icon: '🐍', title: 'Python Core', detail: 'Syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 's02', arcClass: 'y1', icon: '⚡',
    label: 'Skill 2 · FastAPI',
    tagline: 'Days 101–200', duration: '100 days',
    blurb: 'Build production-ready Python APIs — fundamentals, database integration, authentication, security, and deployment.',
    items: [
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 's03', arcClass: 'y1', icon: '🤖',
    label: 'Skill 3 · Agentic AI',
    tagline: 'Days 201–300', duration: '100 days',
    blurb: 'Build AI agents using Python — LangChain, LangGraph, MCP, and n8n agentic workflows. The skills that define the next decade of software.',
    items: [
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
    ],
  },
  // ── JavaScript / TypeScript domain: Skills 4–9 ────────────────────────────
  {
    id: 's04', arcClass: 'y2', icon: '🟨',
    label: 'Skill 4 · JavaScript',
    tagline: 'Days 301–400', duration: '100 days',
    blurb: "The web's native language — syntax, DOM, async, closures, and all the ES6+ fundamentals that power modern applications.",
    items: [
      { icon: '🟨', title: 'JavaScript', detail: 'Syntax · DOM · async · closures · ES6+ fundamentals', source: 'Thunder++', to: '/' },
    ],
  },
  {
    id: 's05', arcClass: 'y2', icon: '🔷',
    label: 'Skill 5 · TypeScript',
    tagline: 'Days 401–500', duration: '100 days',
    blurb: 'Add static typing to JavaScript — types, interfaces, generics, enums, and classes for safer, more scalable code.',
    items: [
      { icon: '🔷', title: 'TypeScript', detail: 'Types · interfaces · generics · enums · classes', source: 'Illustrated TypeScript series', to: '/typescript' },
    ],
  },
  {
    id: 's06', arcClass: 'y2', icon: '⚛️',
    label: 'Skill 6 · React',
    tagline: 'Days 501–600', duration: '100 days',
    blurb: 'Build interactive UIs — components, hooks, state management, routing, and data fetching.',
    items: [
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · state · routing · data fetching', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's07', arcClass: 'y2', icon: '🌐',
    label: 'Skill 7 · Next JS',
    tagline: 'Days 601–700', duration: '100 days',
    blurb: 'Full-stack React — App Router, server components, data & server actions, and production deployment.',
    items: [
      { icon: '🌐', title: 'Next JS', detail: 'App Router · server components · data & server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's08', arcClass: 'y2', icon: '📱',
    label: 'Skill 8 · React Native',
    tagline: 'Days 701–800', duration: '100 days',
    blurb: 'Build native mobile apps — Expo, native components, navigation, builds, and publishing to the app stores.',
    items: [
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · navigation · builds & publishing', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 's09', arcClass: 'y2', icon: '🟢',
    label: 'Skill 9 · Express JS',
    tagline: 'Days 801–900', duration: '100 days',
    blurb: 'Node.js backends — REST APIs, middleware, Prisma ORM, JWT authentication, and deployment.',
    items: [
      { icon: '🟢', title: 'Express JS / Node JS', detail: 'REST APIs · middleware · Prisma · JWT auth & deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  // ── Java domain: Skills 10–14 ─────────────────────────────────────────────
  {
    id: 's10', arcClass: 'y3', icon: '☕',
    label: 'Skill 10 · J2SE',
    tagline: 'Days 901–1000', duration: '100 days',
    blurb: 'Core Java — OOP, collections, exceptions, multithreading, and the language fundamentals that underpin the entire Java ecosystem.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP · collections · exceptions · multithreading', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's11', arcClass: 'y3', icon: '🏢',
    label: 'Skill 11 · J2EE',
    tagline: 'Days 1001–1100', duration: '100 days',
    blurb: 'Enterprise Java — Servlets, JSP, and the full Java EE ecosystem for building server-side applications.',
    items: [
      { icon: '🏢', title: 'J2EE', detail: 'Servlets · JSP · the Java EE ecosystem', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's12', arcClass: 'y3', icon: '🗄️',
    label: 'Skill 12 · JPA',
    tagline: 'Days 1101–1200', duration: '100 days',
    blurb: 'ORM and database mapping — entities, relationships, queries, and JPA best practices for production database layers.',
    items: [
      { icon: '🗄️', title: 'JPA', detail: 'ORM · entities · relationships · database mapping', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's13', arcClass: 'y3', icon: '🍃',
    label: 'Skill 13 · Spring Boot',
    tagline: 'Days 1201–1300', duration: '100 days',
    blurb: 'The premier Java framework — Spring Boot, Spring Data, REST APIs, and security for enterprise-grade applications.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · Spring Data · REST APIs · security', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's14', arcClass: 'y3', icon: '🕸️',
    label: 'Skill 14 · Microservices',
    tagline: 'Days 1301–1400', duration: '100 days',
    blurb: 'Distributed systems — microservices architecture, API gateway, and service discovery with Java.',
    items: [
      { icon: '🕸️', title: 'Microservices', detail: 'Microservices architecture · API gateway · service discovery', source: 'Udemy', to: '/java' },
    ],
  },
  // ── DevOps / Cloud domain: Skills 15–16 ──────────────────────────────────
  {
    id: 's15', arcClass: 'y5', icon: '🚀',
    label: 'Skill 15 · DevOps',
    tagline: 'Days 1401–1500', duration: '100 days',
    blurb: 'Ship and operate software at scale — Linux, Docker, Kubernetes, and CI/CD pipelines.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 's16', arcClass: 'y5', icon: '☁️',
    label: 'Skill 16 · Cloud (AWS)',
    tagline: 'Days 1501–1600', duration: '100 days',
    blurb: '100 days of AWS — core cloud services, architecture patterns, and production-grade cloud engineering.',
    items: [
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
  // ── Capstone: Skill 17 ────────────────────────────────────────────────────
  {
    id: 's17', arcClass: 'capstone', icon: '🎯',
    label: 'Skill 17 · Capstone Project',
    tagline: 'Days 1601–1700', duration: '100 days',
    blurb: 'The 100-day capstone — integrate all 16 skills into production-grade projects: Python APIs, Agentic AI pipelines, TypeScript frontends, Java microservices backends, and full DevOps deployment on AWS.',
    items: [
      { icon: '🤖', title: 'Agentic AI Integration', detail: 'LangChain · LangGraph · MCP — agents wired to real backends', source: 'Capstone', to: '/python' },
      { icon: '⚛️', title: 'Full-Stack TypeScript', detail: 'React · Next.js · Express — the web layer, end to end', source: 'Capstone', to: '/' },
      { icon: '☕', title: 'Java Microservices', detail: 'Spring Boot · REST · Kafka · Docker — enterprise-grade backends', source: 'Capstone', to: '/java' },
      { icon: '🚀', title: 'DevOps & AWS Deployment', detail: 'Kubernetes · CI/CD · Terraform · AWS — ship and monitor at scale', source: 'Capstone', to: '/devops' },
    ],
  },
];

const STATS = [
  { value: '17', label: 'skills · one at a time' },
  { value: '100', label: 'days per skill' },
  { value: '55', label: 'months · 1,700 days' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 17 skills · 100 days each · 1,700 days</span>
        <h1 className="roadmap-hero-title">17 Skills, 1,700 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>17 skills</strong>{' '}
          mastered one at a time — <strong>Python → FastAPI → Agentic AI → JavaScript → TypeScript
          → React → Next JS → React Native → Express JS → J2SE → J2EE → JPA → Spring Boot
          → Microservices → DevOps → Cloud → Capstone</strong> —{' '}
          <strong>100 days each, 55 months (1,700 days)</strong> of focused daily practice,
          front to back. Data Structures &amp; System Design are practiced throughout,
          not a separate add-on.
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
          alt="Road to Full Lifecycle Engineer — 1,700 Days · 55 Months · 17 Skills (5 Aug 2026 – 31 Mar 2031). 17 skills at 100 days each: Python, FastAPI, Agentic AI, JavaScript, TypeScript, React, Next JS, React Native, Express JS, J2SE, J2EE, JPA, Spring Boot, Microservices, DevOps, Cloud (AWS), Capstone Project. DSA & System Design practiced throughout. One Goal: Build, Deploy, Automate, Scale."
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

      {/* ── 100-Day Skill Calendar ─────────────────────────────────────────────── */}
      <section style={{ maxWidth: '780px', margin: '16px auto 8px', padding: '0 12px' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 800, textAlign: 'center', marginBottom: '12px', letterSpacing: '0.03em', opacity: 0.9 }}>
          📅 100-Day Skill Calendar
        </h2>
        <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', lineHeight: 1.4 }}>
            <thead>
              <tr style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.5 }}>
                <th style={{ padding: '8px 10px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>#</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>Skill</th>
                <th style={{ padding: '8px 10px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>Days</th>
                <th style={{ padding: '8px 10px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>Start</th>
                <th style={{ padding: '8px 10px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>End</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS.map((skill, i) => {
                const d1 = i * 100 + 1;
                const d2 = (i + 1) * 100;
                return (
                  <tr key={skill.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '7px 10px', opacity: 0.45, fontVariantNumeric: 'tabular-nums', fontSize: '0.78rem' }}>{String(i + 1).padStart(2, '0')}</td>
                    <td style={{ padding: '7px 10px', fontWeight: 700 }}>{skill.icon} {skill.label}</td>
                    <td style={{ padding: '7px 10px', textAlign: 'center', opacity: 0.65, fontVariantNumeric: 'tabular-nums', fontSize: '0.8rem' }}>
                      {d1}–{d2}
                    </td>
                    <td style={{ padding: '7px 10px', textAlign: 'center', opacity: 0.85, fontVariantNumeric: 'tabular-nums' }}>{_calDate(d1)}</td>
                    <td style={{ padding: '7px 10px', textAlign: 'center', opacity: 0.85, fontVariantNumeric: 'tabular-nums' }}>{_calDate(d2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', opacity: 0.4, fontSize: '0.72rem', marginTop: '8px' }}>
          Day 1 = 5 Aug 2026 · 100 days per skill · journey ends 31 Mar 2031
        </p>
      </section>

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
        {SKILLS.map((skill) => (
          <section key={skill.id} className={`roadmap-arc roadmap-arc-${skill.arcClass}`}>
            <div className="roadmap-arc-header">
              <span className="roadmap-arc-dot" aria-hidden="true" />
              <div className="roadmap-arc-heading">
                <h2 className="roadmap-arc-title">
                  {skill.icon} {skill.label} <span className="roadmap-arc-tagline">· {skill.tagline}</span>
                </h2>
                <p className="roadmap-arc-meta">
                  <span className="roadmap-arc-range">{skill.duration}</span>
                </p>
                <p className="roadmap-arc-blurb">{skill.blurb}</p>
              </div>
            </div>

            <ol className="roadmap-list">
              {skill.items.map((item, i) => (
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
            <p className="roadmap-finish-date">17 skills · 100 days each · 1,700 days, front to back</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 17 skills at 100 days each:{' '}
          <strong>Python</strong> (core language) {'->'} <strong>FastAPI</strong> (Python APIs) {'->'}
          {' '}<strong>Agentic AI</strong> (LangChain, LangGraph, MCP) {'->'} <strong>JavaScript</strong> {'->'}
          {' '}<strong>TypeScript</strong> {'->'} <strong>React</strong> {'->'} <strong>Next JS</strong> {'->'}
          {' '}<strong>React Native</strong> {'->'} <strong>Express JS</strong> {'->'} <strong>J2SE</strong> {'->'}
          {' '}<strong>J2EE</strong> {'->'} <strong>JPA</strong> {'->'} <strong>Spring Boot</strong> {'->'}
          {' '}<strong>Microservices</strong> {'->'} <strong>DevOps</strong> {'->'} <strong>Cloud (AWS)</strong> {'->'}
          {' '}<strong>Capstone Project</strong> (all 16 skills integrated). One skill at a time, fully focused.
          Data Structures &amp; System Design practiced throughout every skill, not saved for one dedicated block.
          55 months (1,700 days) end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Start Skill 1 · Python
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
