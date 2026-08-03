import { Link } from 'react-router-dom';

// ── Skill calendar helpers ───────────────────────────────────────────────────
const _CAL_DAY1 = new Date(2026, 7, 5); // 5 Aug 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 18 skills · 1,826 days · 5 years (5 Aug 2026 → 4 Aug 2031) ─────────────
// Skills 1–16: 100 days each (Days 1–1600)
// Skill 17: DSA & System Design sprint — 126 days (Days 1601–1726)
// Skill 18: Capstone Project — 100 days (Days 1727–1826)
// Calendar dates are intentionally NOT shown (HR-facing page).

const SKILLS = [
  // ── Python domain: Skills 1–3 ─────────────────────────────────────────────
  {
    id: 's01', arcClass: 'y1', icon: '🐍', dayStart: 1, dayEnd: 100,
    label: 'Skill 1 · Python',
    tagline: 'Days 1–100', duration: '100 days',
    blurb: 'Core Python from scratch — syntax, OOP, file I/O, database connectivity, and multithreading. The language foundation for everything that follows.',
    items: [
      { icon: '🐍', title: 'Python Core', detail: 'Syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 's02', arcClass: 'y1', icon: '⚡', dayStart: 101, dayEnd: 200,
    label: 'Skill 2 · FastAPI',
    tagline: 'Days 101–200', duration: '100 days',
    blurb: 'Build production-ready Python APIs — fundamentals, database integration, authentication, security, and deployment.',
    items: [
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 's03', arcClass: 'y1', icon: '🤖', dayStart: 201, dayEnd: 300,
    label: 'Skill 3 · Agentic AI',
    tagline: 'Days 201–300', duration: '100 days',
    blurb: 'Build AI agents using Python — LangChain, LangGraph, MCP, and n8n agentic workflows. The skills that define the next decade of software.',
    items: [
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
    ],
  },
  // ── JavaScript / TypeScript domain: Skills 4–9 ────────────────────────────
  {
    id: 's04', arcClass: 'y2', icon: '🟨', dayStart: 301, dayEnd: 400,
    label: 'Skill 4 · JavaScript',
    tagline: 'Days 301–400', duration: '100 days',
    blurb: "The web's native language — syntax, DOM, async, closures, and all the ES6+ fundamentals that power modern applications.",
    items: [
      { icon: '🟨', title: 'JavaScript', detail: 'Syntax · DOM · async · closures · ES6+ fundamentals', source: 'Thunder++', to: '/' },
    ],
  },
  {
    id: 's05', arcClass: 'y2', icon: '🔷', dayStart: 401, dayEnd: 500,
    label: 'Skill 5 · TypeScript',
    tagline: 'Days 401–500', duration: '100 days',
    blurb: 'Add static typing to JavaScript — types, interfaces, generics, enums, and classes for safer, more scalable code.',
    items: [
      { icon: '🔷', title: 'TypeScript', detail: 'Types · interfaces · generics · enums · classes', source: 'Illustrated TypeScript series', to: '/typescript' },
    ],
  },
  {
    id: 's06', arcClass: 'y2', icon: '⚛️', dayStart: 501, dayEnd: 600,
    label: 'Skill 6 · React',
    tagline: 'Days 501–600', duration: '100 days',
    blurb: 'Build interactive UIs — components, hooks, state management, routing, and data fetching.',
    items: [
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · state · routing · data fetching', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's07', arcClass: 'y2', icon: '🌐', dayStart: 601, dayEnd: 700,
    label: 'Skill 7 · Next JS',
    tagline: 'Days 601–700', duration: '100 days',
    blurb: 'Full-stack React — App Router, server components, data & server actions, and production deployment.',
    items: [
      { icon: '🌐', title: 'Next JS', detail: 'App Router · server components · data & server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's08', arcClass: 'y2', icon: '📱', dayStart: 701, dayEnd: 800,
    label: 'Skill 8 · React Native',
    tagline: 'Days 701–800', duration: '100 days',
    blurb: 'Build native mobile apps — Expo, native components, navigation, builds, and publishing to the app stores.',
    items: [
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · navigation · builds & publishing', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 's09', arcClass: 'y2', icon: '🟢', dayStart: 801, dayEnd: 900,
    label: 'Skill 9 · Express JS',
    tagline: 'Days 801–900', duration: '100 days',
    blurb: 'Node.js backends — REST APIs, middleware, Prisma ORM, JWT authentication, and deployment.',
    items: [
      { icon: '🟢', title: 'Express JS / Node JS', detail: 'REST APIs · middleware · Prisma · JWT auth & deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  // ── Java domain: Skills 10–14 ─────────────────────────────────────────────
  {
    id: 's10', arcClass: 'y3', icon: '☕', dayStart: 901, dayEnd: 1000,
    label: 'Skill 10 · J2SE',
    tagline: 'Days 901–1000', duration: '100 days',
    blurb: 'Core Java — OOP, collections, exceptions, multithreading, and the language fundamentals that underpin the entire Java ecosystem.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP · collections · exceptions · multithreading', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's11', arcClass: 'y3', icon: '🏢', dayStart: 1001, dayEnd: 1100,
    label: 'Skill 11 · J2EE',
    tagline: 'Days 1001–1100', duration: '100 days',
    blurb: 'Enterprise Java — Servlets, JSP, and the full Java EE ecosystem for building server-side applications.',
    items: [
      { icon: '🏢', title: 'J2EE', detail: 'Servlets · JSP · the Java EE ecosystem', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's12', arcClass: 'y3', icon: '🗄️', dayStart: 1101, dayEnd: 1200,
    label: 'Skill 12 · JPA',
    tagline: 'Days 1101–1200', duration: '100 days',
    blurb: 'ORM and database mapping — entities, relationships, queries, and JPA best practices for production database layers.',
    items: [
      { icon: '🗄️', title: 'JPA', detail: 'ORM · entities · relationships · database mapping', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's13', arcClass: 'y3', icon: '🍃', dayStart: 1201, dayEnd: 1300,
    label: 'Skill 13 · Spring Boot',
    tagline: 'Days 1201–1300', duration: '100 days',
    blurb: 'The premier Java framework — Spring Boot, Spring Data, REST APIs, and security for enterprise-grade applications.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · Spring Data · REST APIs · security', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's14', arcClass: 'y3', icon: '🕸️', dayStart: 1301, dayEnd: 1400,
    label: 'Skill 14 · Microservices',
    tagline: 'Days 1301–1400', duration: '100 days',
    blurb: 'Distributed systems — microservices architecture, API gateway, and service discovery with Java.',
    items: [
      { icon: '🕸️', title: 'Microservices', detail: 'Microservices architecture · API gateway · service discovery', source: 'Udemy', to: '/java' },
    ],
  },
  // ── DevOps / Cloud domain: Skills 15–16 ──────────────────────────────────
  {
    id: 's15', arcClass: 'y5', icon: '🚀', dayStart: 1401, dayEnd: 1500,
    label: 'Skill 15 · DevOps',
    tagline: 'Days 1401–1500', duration: '100 days',
    blurb: 'Ship and operate software at scale — Linux, Docker, Kubernetes, and CI/CD pipelines.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 's16', arcClass: 'y5', icon: '☁️', dayStart: 1501, dayEnd: 1600,
    label: 'Skill 16 · Cloud (AWS)',
    tagline: 'Days 1501–1600', duration: '100 days',
    blurb: '100 days of AWS — core cloud services, architecture patterns, and production-grade cloud engineering.',
    items: [
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
  // ── DSA & System Design Sprint: Skill 17 (126 days) ─────────────────────
  {
    id: 's17', arcClass: 'capstone', icon: '🧠', dayStart: 1601, dayEnd: 1726,
    label: 'Skill 17 · DSA & System Design',
    tagline: 'Days 1601–1726', duration: '126 days',
    blurb: 'A dedicated 126-day sprint to master Data Structures, Algorithms, and System Design — the skills that unlock top-tier engineering roles. LeetCode patterns, system design deep-dives, and mock interview practice.',
    items: [
      { icon: '📊', title: 'Data Structures & Algorithms', detail: 'Arrays · trees · graphs · DP · sorting — LeetCode patterns', source: 'ChaiCode / GFG', to: '/interview' },
      { icon: '🏗️', title: 'System Design', detail: 'Scalability · databases · caching · microservices architecture', source: 'ChaiCode / GFG', to: '/interview' },
      { icon: '🎤', title: 'Mock Interviews', detail: 'Behavioral · technical rounds · whiteboard practice', source: 'ChaiCode', to: '/interview' },
    ],
  },
  // ── Capstone Project: Skill 18 ────────────────────────────────────────────
  {
    id: 's18', arcClass: 'capstone', icon: '🎯', dayStart: 1727, dayEnd: 1826,
    label: 'Skill 18 · Capstone Project',
    tagline: 'Days 1727–1826', duration: '100 days',
    blurb: 'The 100-day capstone — integrate all 17 skills into production-grade projects: Python APIs, Agentic AI pipelines, TypeScript frontends, Java microservices, and full DevOps deployment on AWS.',
    items: [
      { icon: '🤖', title: 'Agentic AI Integration', detail: 'LangChain · LangGraph · MCP — agents wired to real backends', source: 'Capstone', to: '/python' },
      { icon: '⚛️', title: 'Full-Stack TypeScript', detail: 'React · Next.js · Express — the web layer, end to end', source: 'Capstone', to: '/' },
      { icon: '☕', title: 'Java Microservices', detail: 'Spring Boot · REST · Kafka · Docker — enterprise-grade backends', source: 'Capstone', to: '/java' },
      { icon: '🚀', title: 'DevOps & AWS Deployment', detail: 'Kubernetes · CI/CD · Terraform · AWS — ship and monitor at scale', source: 'Capstone', to: '/devops' },
    ],
  },
];

const STATS = [
  { value: '18', label: 'skills · one at a time' },
  { value: '1,826', label: 'days · 5 years' },
  { value: '60', label: 'months · 5,478 hours' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 18 skills · 1,826 days · 5 years</span>
        <h1 className="roadmap-hero-title">18 Skills, 1,826 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>16 skills</strong>{' '}
          at 100 days each — <strong>Python → FastAPI → Agentic AI → JavaScript → TypeScript
          → React → Next JS → React Native → Express JS → J2SE → J2EE → JPA → Spring Boot
          → Microservices → DevOps → Cloud (AWS)</strong> — followed by a{' '}
          <strong>126-day DSA &amp; System Design sprint</strong>, then a{' '}
          <strong>100-day Capstone Project</strong> integrating everything.{' '}
          <strong>5 years · 60 months · 1,826 days</strong> of focused daily practice, front to back.
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
        <h2 style={{ fontSize: '1.1rem', fontWeight: 900, textAlign: 'center', marginBottom: '14px', letterSpacing: '0.04em', color: '#fff' }}>
          📅 100-Day Skill Calendar
        </h2>
        <figure style={{ margin: '0 0 18px', textAlign: 'center' }}>
          <img
            src="/roadmap-notes/1700-day-skill-calendar.png"
            alt="1,700-Day Full Stack Journey — 17 skills at 100 days each from 5 Aug 2026 to 31 Mar 2031"
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
                const d1 = skill.dayStart;
                const d2 = skill.dayEnd;
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
          Day 1 = 5 Aug 2026 · 1,826 days · journey ends 4 Aug 2031
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
            <p className="roadmap-finish-date">16 skills · DSA sprint · Capstone · 1,826 days · 5 years</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 16 skills at 100 days each:{' '}
          <strong>Python</strong> {'->'} <strong>FastAPI</strong> {'->'} <strong>Agentic AI</strong> {'->'}
          {' '}<strong>JavaScript</strong> {'->'} <strong>TypeScript</strong> {'->'} <strong>React</strong> {'->'}
          {' '}<strong>Next JS</strong> {'->'} <strong>React Native</strong> {'->'} <strong>Express JS</strong> {'->'}
          {' '}<strong>J2SE</strong> {'->'} <strong>J2EE</strong> {'->'} <strong>JPA</strong> {'->'}
          {' '}<strong>Spring Boot</strong> {'->'} <strong>Microservices</strong> {'->'} <strong>DevOps</strong> {'->'}
          {' '}<strong>Cloud (AWS)</strong> {'->'} then a <strong>126-day DSA &amp; System Design sprint</strong>{' '}
          (LeetCode patterns, system design, mock interviews) {'->'} finally a{' '}
          <strong>100-day Capstone Project</strong> integrating all 17 skills into production systems.
          5 years · 60 months · 1,826 days end to end, finishing on <strong>4 Aug 2031</strong>.
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
