import { Link } from 'react-router-dom';

// ── Skill calendar helpers ───────────────────────────────────────────────────
const _CAL_DAY1 = new Date(2026, 7, 11); // 11 Aug 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 20 skills · 19×100 days each + Capstone 100 days · 2,000 days ───────────
// Python (1–100) → FastAPI (101–200) → Agentic AI (201–300) →
// JavaScript (301–400) → TypeScript (401–500) → React (501–600) →
// Next JS (601–700) → React Native (701–800) → Express JS (801–900) →
// Databases (901–1000) → J2SE (1001–1100) → J2EE (1101–1200) → JPA (1201–1300) →
// Spring Boot (1301–1400) → Microservices (1401–1500) →
// DevOps (1501–1600) → Cloud / AWS (1601–1700) → Kubernetes (1701–1800) →
// System Design (1801–1900) → Capstone (1901–2000, 100 days).
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
  // ── JavaScript / TypeScript domain: Skills 4–9 ───────────────────────────
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
    label: 'Skill 6 · React JS',
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
  // ── Databases: Skill 10 — bridge between JS and Java stacks ─────────────
  {
    id: 's10', arcClass: 'y3', icon: '🗄️',
    label: 'Skill 10 · Databases',
    tagline: 'Days 901–1000', duration: '100 days',
    blurb: 'Master the data layer — PostgreSQL, MySQL, MongoDB, Redis, and SQLAlchemy. SQL and NoSQL depth that feeds directly into JPA, Spring Boot, and every Capstone service.',
    items: [
      { icon: '🐘', title: 'SQL Databases', detail: 'PostgreSQL · MySQL · joins · indexes · transactions · query optimisation', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'NoSQL & Caching', detail: 'MongoDB · Redis caching · pub/sub · session management', source: 'Udemy', to: '/java' },
    ],
  },
  // ── Java domain: Skills 11–15 ─────────────────────────────────────────────
  {
    id: 's11', arcClass: 'y3', icon: '☕',
    label: 'Skill 11 · J2SE',
    tagline: 'Days 1001–1100', duration: '100 days',
    blurb: 'Core Java — OOP, collections, exceptions, multithreading, and the language fundamentals that underpin the entire Java ecosystem.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP · collections · exceptions · multithreading', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's12', arcClass: 'y3', icon: '🏢',
    label: 'Skill 12 · J2EE',
    tagline: 'Days 1101–1200', duration: '100 days',
    blurb: 'Enterprise Java — Servlets, JSP, and the full Java EE ecosystem for building server-side applications.',
    items: [
      { icon: '🏢', title: 'J2EE', detail: 'Servlets · JSP · the Java EE ecosystem', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's13', arcClass: 'y3', icon: '🗄️',
    label: 'Skill 13 · JPA',
    tagline: 'Days 1201–1300', duration: '100 days',
    blurb: 'ORM and database mapping — entities, relationships, queries, and JPA best practices for production database layers.',
    items: [
      { icon: '🗄️', title: 'JPA', detail: 'ORM · entities · relationships · database mapping', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's14', arcClass: 'y3', icon: '🍃',
    label: 'Skill 14 · Spring Boot',
    tagline: 'Days 1301–1400', duration: '100 days',
    blurb: 'The premier Java framework — Spring Boot, Spring Data, REST APIs, and security for enterprise-grade applications.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · Spring Data · REST APIs · security', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's15', arcClass: 'y3', icon: '🕸️',
    label: 'Skill 15 · Microservices',
    tagline: 'Days 1401–1500', duration: '100 days',
    blurb: 'Distributed systems — microservices architecture, API gateway, and service discovery with Java.',
    items: [
      { icon: '🕸️', title: 'Microservices', detail: 'Microservices architecture · API gateway · service discovery', source: 'Udemy', to: '/java' },
    ],
  },
  // ── DevOps / Cloud domain: Skills 16–17 ──────────────────────────────────
  {
    id: 's16', arcClass: 'y5', icon: '🚀',
    label: 'Skill 16 · DevOps',
    tagline: 'Days 1501–1600', duration: '100 days',
    blurb: 'Ship and operate software at scale — Linux, Docker, Kubernetes, and CI/CD pipelines.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 's17', arcClass: 'y5', icon: '☁️',
    label: 'Skill 17 · Cloud (AWS)',
    tagline: 'Days 1601–1700', duration: '100 days',
    blurb: '100 days of AWS — core cloud services, architecture patterns, and production-grade cloud engineering.',
    items: [
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
  // ── Kubernetes: Skill 18 ─────────────────────────────────────────────────
  {
    id: 's18', arcClass: 'y5', icon: '☸️',
    label: 'Skill 18 · Kubernetes',
    tagline: 'Days 1701–1800', duration: '100 days',
    blurb: 'Production-grade container orchestration — CKA certification prep, Helm, Istio, EKS, GitOps with ArgoCD/Flux, and Prometheus/Grafana observability at scale.',
    items: [
      { icon: '☸️', title: 'Kubernetes', detail: 'CKA prep · Helm · Istio · EKS · GitOps (ArgoCD/Flux) · Prometheus/Grafana', source: 'KodeKloud', to: '/k8s' },
    ],
  },
  // ── System Design: Skill 19 ──────────────────────────────────────────────
  {
    id: 's19', arcClass: 'y5', icon: '🏗️',
    label: 'Skill 19 · System Design',
    tagline: 'Days 1801–1900', duration: '100 days',
    blurb: 'The art of building at scale — HLD/LLD, CAP theorem, distributed systems, database design, caching, message queues, and case studies (design Twitter, Uber, Netflix).',
    items: [
      { icon: '🏗️', title: 'System Design', detail: 'HLD/LLD · scalability · distributed systems · case studies · mock interviews', source: 'ChaiCode + GfG', to: '/interview' },
    ],
  },
  // ── Capstone: Skill 20 ────────────────────────────────────────────────────
  {
    id: 's20', arcClass: 'capstone', icon: '🎯',
    label: 'Skill 20 · Capstone Project',
    tagline: 'Days 1901–2000', duration: '100 days',
    blurb: 'The 100-day capstone — integrate all 19 skills into one production-grade system: Python APIs, Agentic AI, TypeScript frontends, Java microservices, Kubernetes deployment, and full AWS infrastructure.',
    items: [
      { icon: '🤖', title: 'Agentic AI + Python APIs', detail: 'LangChain · LangGraph · FastAPI — AI-powered backend services', source: 'Capstone', to: '/python' },
      { icon: '🗄️', title: 'Data Layer', detail: 'PostgreSQL · MongoDB · Redis — multi-database architecture', source: 'Capstone', to: '/java' },
      { icon: '⚛️', title: 'Full-Stack TypeScript', detail: 'React · Next.js · Express — the web layer, end to end', source: 'Capstone', to: '/' },
      { icon: '☕', title: 'Java Microservices', detail: 'Spring Boot · REST · Kafka · Docker — enterprise-grade backends', source: 'Capstone', to: '/java' },
      { icon: '☸️', title: 'Kubernetes & AWS Deployment', detail: 'K8s · CKA · CI/CD · Terraform · AWS — ship and monitor at scale', source: 'Capstone', to: '/k8s' },
    ],
  },
];

const STATS = [
  { value: '20', label: 'skills · one at a time' },
  { value: '100', label: 'days per skill (+ 100 capstone)' },
  { value: '66', label: 'months · 2,000 days' },
  { value: '40+', label: 'technologies' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 20 skills · 19×100 days + Capstone 100 · 2,000 days</span>
        <h1 className="roadmap-hero-title">20 Skills, 2,000 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>20 skills</strong>{' '}
          mastered one at a time — <strong>Python → FastAPI → Agentic AI → JavaScript → TypeScript
          → React JS → Next JS → React Native → Express JS → Databases → J2SE → J2EE → JPA → Spring Boot
          → Microservices → DevOps → Cloud (AWS) → Kubernetes → System Design → Capstone</strong> —{' '}
          <strong>19 skills at 100 days each + 100-day Capstone, 66 months (2,000 days)</strong> of focused daily practice,
          front to back. DSA practiced 30 min daily (1 LeetCode/day) throughout all 20 skills.
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
          src="/roadmap-notes/2000days.png"
          alt="5 Years. 2,000 Days. One Journey. — Full Lifecycle Engineer roadmap: Python (2026) → FastAPI → JavaScript → TypeScript → React → Java → Spring Boot → Microservices → Kubernetes (2030) → System Design (2031) → Capstone 2032. Day 0: 10 Aug 2026 · Day 2,000: 31 Jan 2032."
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
        <h2 style={{ fontSize: '1.1rem', fontWeight: 900, textAlign: 'center', marginBottom: '14px', letterSpacing: '0.04em', color: '#fff' }}>
          📅 100-Day Skill Calendar
        </h2>
        <figure style={{ margin: '0 0 18px', textAlign: 'center' }}>
          <img
            src="/roadmap-notes/1850-day-skill-calendar.png"
            alt="2,000-Day Full Stack Journey — 20 skills (19×100 days + Capstone 100) from 11 Aug 2026 to 31 Jan 2032"
            loading="lazy"
            style={{
              width: '100%',
              maxWidth: '480px',
              height: 'auto',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </figure>
        <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.06)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', lineHeight: 1.5 }}>
            <thead>
              <tr style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.07)', color: '#c8d0de' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>#</th>
                <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Skill</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Days</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Start</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>End</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS.map((skill, i) => {
                const d1 = i * 100 + 1;
                const d2 = (i + 1) * 100;
                return (
                  <tr key={skill.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
                    <td style={{ padding: '9px 12px', color: '#8a95a3', fontVariantNumeric: 'tabular-nums', fontSize: '0.8rem', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</td>
                    <td style={{ padding: '9px 12px', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>{skill.icon} {skill.label}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'center', color: '#9ba8b8', fontVariantNumeric: 'tabular-nums', fontSize: '0.83rem', fontWeight: 600 }}>
                      {d1}–{d2}
                    </td>
                    <td style={{ padding: '9px 12px', textAlign: 'center', color: '#00e5a0', fontVariantNumeric: 'tabular-nums', fontWeight: 700, fontSize: '0.88rem' }}>{_calDate(d1)}</td>
                    <td style={{ padding: '9px 12px', textAlign: 'center', color: '#ff9f43', fontVariantNumeric: 'tabular-nums', fontWeight: 700, fontSize: '0.88rem' }}>{_calDate(d2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: 'center', color: '#6b7b8e', fontSize: '0.75rem', marginTop: '10px' }}>
          Day 1 = 11 Aug 2026 · 19 skills × 100 days + Capstone 100 days · journey ends 31 Jan 2032
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
            <p className="roadmap-finish-date">20 skills · 19×100 days + Capstone 100 · 2,000 days, front to back</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 20 skills — 19 at 100 days each + Capstone 100 days:{' '}
          <strong>Python</strong> {'->'} <strong>FastAPI</strong> {'->'} <strong>Agentic AI</strong> (LangChain, LangGraph, MCP) {'->'}
          {' '}<strong>JavaScript</strong> {'->'} <strong>TypeScript</strong> {'->'}
          {' '}<strong>React JS</strong> {'->'} <strong>Next JS</strong> {'->'} <strong>React Native</strong> {'->'}
          {' '}<strong>Express JS</strong> {'->'} <strong>Databases</strong> (PostgreSQL · MongoDB · Redis) {'->'} <strong>J2SE</strong> {'->'} <strong>J2EE</strong> {'->'} <strong>JPA</strong> {'->'}
          {' '}<strong>Spring Boot</strong> {'->'} <strong>Microservices</strong> {'->'} <strong>DevOps</strong> {'->'} <strong>Cloud (AWS)</strong> {'->'}
          {' '}<strong>Kubernetes</strong> {'->'} <strong>System Design</strong> {'->'}
          {' '}<strong>Capstone Project</strong> (all 19 skills integrated, 100 days). One skill at a time, fully focused.
          DSA practiced 30 min daily (1 LeetCode/day) throughout all 20 skills.
          66 months (2,000 days) end to end.
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
