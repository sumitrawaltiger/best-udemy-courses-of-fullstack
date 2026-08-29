import { Link } from 'react-router-dom';

function LeetCode2000Badge({ size = 120 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, display: 'block', flexShrink: 0 }}
      aria-label="LeetCode 2000 Days Badge"
    >
      <defs>
        <linearGradient id="lc-gold-rm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2c048" />
          <stop offset="50%" stopColor="#f8e88a" />
          <stop offset="100%" stopColor="#8a6210" />
        </linearGradient>
        <clipPath id="lc-clip-rm">
          <polygon points="100,16 180,60 180,140 100,184 20,140 20,60" />
        </clipPath>
      </defs>
      <polygon points="100,4 192,52 192,148 100,196 8,148 8,52" fill="url(#lc-gold-rm)" />
      <g clipPath="url(#lc-clip-rm)">
        <rect x="20" y="16" width="160" height="168" fill="#111" />
        <polygon points="20,60 100,16 162,16 100,88 20,110" fill="#d97316" />
        <polygon points="100,112 180,90 180,140 100,184 62,162" fill="#be3222" />
        <polygon points="100,88 162,16 180,16 180,52 132,88 118,112 62,162 20,162 20,140 92,112" fill="#111" />
      </g>
      <text x="100" y="172" textAnchor="middle" fill="url(#lc-gold-rm)"
            fontSize="11" fontWeight="bold" letterSpacing="4" fontFamily="Georgia,serif">DAYS</text>
    </svg>
  );
}

// ── Skill calendar helpers ───────────────────────────────────────────────────
const _CAL_DAY1 = new Date(2026, 7, 31); // 31 Aug 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 6 phases · 20 skills · 2,009 days ─────────────────────────────────────
// Phase 1 · Agentic AI (Days 1–182 · 6 months · ends 28 Feb 2027)
// Phase 2 · TypeScript stack (Days 183–548 · 1 year · ends 29 Feb 2028)
//   JS (183–235) → TS (236–287) → React (288–339) → Next (340–391)
//   → RN (392–443) → Express (444–495) → Databases (496–548)
// Phase 3 · Java stack (Days 549–913 · 1 year · ends 28 Feb 2029)
//   J2SE (549–621) → Spring Boot (622–694) → Kafka (695–767)
//   → Microservices (768–840) → Automation Testing (841–913)
// Phase 4 · Python stack (Days 914–1278 · 1 year · ends 28 Feb 2030)
//   Python (914–1095) → FastAPI (1096–1278)
// Phase 5 · DevOps stack (Days 1279–1643 · 1 year · ends 28 Feb 2031)
//   DevOps (1279–1400) → Cloud/AWS (1401–1522) → SRE (1523–1643)
// Phase 6 · Interview Prep (Days 1644–2009 · 1 year · ends 29 Feb 2032)
//   System Design (1644–1826) → DSA (1827–2009)
// Calendar dates are intentionally NOT shown (HR-facing page).

const SKILL_DAYS = [
  [1, 182],       // AgenticAI
  [183, 235],     // JavaScript
  [236, 287],     // TypeScript
  [288, 339],     // React JS
  [340, 391],     // Next JS
  [392, 443],     // React Native
  [444, 495],     // Express JS
  [496, 548],     // Databases
  [549, 621],     // J2SE
  [622, 694],     // Spring Boot
  [695, 767],     // Kafka
  [768, 840],     // Microservices
  [841, 913],     // Automation Testing
  [914, 1095],    // Python
  [1096, 1278],   // FastAPI
  [1279, 1400],   // DevOps
  [1401, 1522],   // Cloud/AWS
  [1523, 1643],   // SRE
  [1644, 1826],   // System Design
  [1827, 2009],   // DSA
];

const SKILLS = [
  // ── Phase 1 · Agentic AI (Days 1–182 · 6 months) ─────────────────────────
  {
    id: 's01', arcClass: 'y1', icon: '🤖',
    label: 'Skill 1 · Agentic AI',
    tagline: 'Days 1–182', duration: '182 days',
    blurb: 'Build AI agents using Python — LangChain, LangGraph, MCP, and n8n agentic workflows. The skills that define the next decade of software. First 6 months of the journey.',
    items: [
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
    ],
  },
  // ── Phase 2 · TypeScript stack (Days 183–548 · 1 year) ───────────────────
  {
    id: 's02', arcClass: 'y2', icon: '🟨',
    label: 'Skill 2 · JavaScript',
    tagline: 'Days 183–235', duration: '53 days',
    blurb: "The web's native language — syntax, DOM, async, closures, and all the ES6+ fundamentals that power modern applications.",
    items: [
      { icon: '🟨', title: 'JavaScript', detail: 'Syntax · DOM · async · closures · ES6+ fundamentals', source: 'Thunder++', to: '/' },
    ],
  },
  {
    id: 's03', arcClass: 'y2', icon: '🔷',
    label: 'Skill 3 · TypeScript',
    tagline: 'Days 236–287', duration: '52 days',
    blurb: 'Add static typing to JavaScript — types, interfaces, generics, enums, and classes for safer, more scalable code.',
    items: [
      { icon: '🔷', title: 'TypeScript', detail: 'Types · interfaces · generics · enums · classes', source: 'Illustrated TypeScript series', to: '/typescript' },
    ],
  },
  {
    id: 's04', arcClass: 'y2', icon: '⚛️',
    label: 'Skill 4 · React JS',
    tagline: 'Days 288–339', duration: '52 days',
    blurb: 'Build interactive UIs — components, hooks, state management, routing, and data fetching.',
    items: [
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · state · routing · data fetching', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's05', arcClass: 'y2', icon: '🌐',
    label: 'Skill 5 · Next JS',
    tagline: 'Days 340–391', duration: '52 days',
    blurb: 'Full-stack React — App Router, server components, data & server actions, and production deployment.',
    items: [
      { icon: '🌐', title: 'Next JS', detail: 'App Router · server components · data & server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's06', arcClass: 'y2', icon: '📱',
    label: 'Skill 6 · React Native',
    tagline: 'Days 392–443', duration: '52 days',
    blurb: 'Build native mobile apps — Expo, native components, navigation, builds, and publishing to the app stores.',
    items: [
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · navigation · builds & publishing', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 's07', arcClass: 'y2', icon: '🟢',
    label: 'Skill 7 · Express JS',
    tagline: 'Days 444–495', duration: '52 days',
    blurb: 'Node.js backends — REST APIs, middleware, Prisma ORM, JWT authentication, and deployment.',
    items: [
      { icon: '🟢', title: 'Express JS / Node JS', detail: 'REST APIs · middleware · Prisma · JWT auth & deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 's08', arcClass: 'y2', icon: '🗄️',
    label: 'Skill 8 · Databases',
    tagline: 'Days 496–548', duration: '53 days',
    blurb: 'SQL and NoSQL depth — PostgreSQL, MySQL, MongoDB, Redis. The data layer that connects the TypeScript stack to the Java backend.',
    items: [
      { icon: '🐘', title: 'SQL Databases', detail: 'PostgreSQL · MySQL · joins · indexes · transactions · query optimisation', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'NoSQL & Caching', detail: 'MongoDB · Redis caching · pub/sub · session management', source: 'Udemy', to: '/java' },
    ],
  },
  // ── Phase 3 · Java stack (Days 549–913 · 1 year) ─────────────────────────
  {
    id: 's09', arcClass: 'y3', icon: '☕',
    label: 'Skill 9 · J2SE',
    tagline: 'Days 549–621', duration: '73 days',
    blurb: 'Core Java — OOP, collections, exceptions, multithreading, and the language fundamentals that underpin the entire Java ecosystem.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP · collections · exceptions · multithreading', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's10', arcClass: 'y3', icon: '🍃',
    label: 'Skill 10 · Spring Boot',
    tagline: 'Days 622–694', duration: '73 days',
    blurb: 'The premier Java framework — Spring Boot, REST APIs, Spring Data JPA, Hibernate, Spring Security, Spring Cloud, and enterprise-grade application patterns.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · REST APIs · Spring Data JPA · Hibernate · Spring Security · Spring Cloud', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's11', arcClass: 'y3', icon: '📨',
    label: 'Skill 11 · Kafka',
    tagline: 'Days 695–767', duration: '73 days',
    blurb: 'Event-driven architecture — Apache Kafka, topics, partitions, consumer groups, delivery guarantees, Kafka Streams, Spring Kafka, and CQRS/event sourcing patterns.',
    items: [
      { icon: '📨', title: 'Apache Kafka', detail: 'Topics · partitions · consumer groups · delivery guarantees · Kafka Streams · Spring Kafka · CQRS', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's12', arcClass: 'y3', icon: '🕸️',
    label: 'Skill 12 · Microservices',
    tagline: 'Days 768–840', duration: '73 days',
    blurb: 'Distributed systems — microservices architecture, API gateway, service discovery, and event-driven patterns with Java.',
    items: [
      { icon: '🕸️', title: 'Microservices', detail: 'Microservices architecture · API gateway · service discovery · event-driven · CQRS', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 's13', arcClass: 'y3', icon: '🧪',
    label: 'Skill 13 · Automation Testing',
    tagline: 'Days 841–913', duration: '73 days',
    blurb: 'End-to-end test automation after the full Java stack — JUnit 5, Mockito, Testcontainers, REST-assured, Pact contract tests, and JMeter/Gatling for performance.',
    items: [
      { icon: '🧪', title: 'Automation Testing', detail: 'JUnit · Mockito · Testcontainers · REST-assured · Pact · JMeter', source: 'Udemy', to: '/java' },
    ],
  },
  // ── Phase 4 · Python stack (Days 914–1278 · 1 year) ──────────────────────
  {
    id: 's14', arcClass: 'y1', icon: '🐍',
    label: 'Skill 14 · Python',
    tagline: 'Days 914–1095', duration: '182 days',
    blurb: 'Core Python from scratch — syntax, OOP, file I/O, database connectivity, and multithreading. Deep-dive Python after hands-on AI experience.',
    items: [
      { icon: '🐍', title: 'Python Core', detail: 'Syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 's15', arcClass: 'y1', icon: '⚡',
    label: 'Skill 15 · FastAPI',
    tagline: 'Days 1096–1278', duration: '183 days',
    blurb: 'Build production-ready Python APIs — fundamentals, database integration, authentication, security, and deployment.',
    items: [
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  // ── Phase 5 · DevOps stack (Days 1279–1643 · 1 year) ─────────────────────
  {
    id: 's16', arcClass: 'y5', icon: '🚀',
    label: 'Skill 16 · DevOps',
    tagline: 'Days 1279–1400', duration: '122 days',
    blurb: 'Starts with 30 days of Docker as the non-negotiable foundation — containers, images, volumes, Compose. Then Linux, CI/CD pipelines, and the full KodeKloud DevOps path.',
    items: [
      { icon: '🐳', title: 'Docker Foundation', detail: 'Containers · images · volumes · Compose · registries', source: 'KodeKloud', to: '/devops' },
      { icon: '🚀', title: 'DevOps & CI/CD', detail: 'Linux · CI/CD pipelines · GitHub Actions · Jenkins · monitoring', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 's17', arcClass: 'y5', icon: '☁️',
    label: 'Skill 17 · Cloud (AWS)',
    tagline: 'Days 1401–1522', duration: '122 days',
    blurb: 'Cloud engineering — core AWS services, architecture patterns, and production-grade cloud infrastructure.',
    items: [
      { icon: '☁️', title: 'AWS Cloud', detail: 'Core services · cloud architecture · EC2 · S3 · RDS · Lambda · EKS', source: 'KodeKloud', to: '/aws' },
    ],
  },
  {
    id: 's18', arcClass: 'y5', icon: '☸️',
    label: 'Skill 18 · SRE',
    tagline: 'Days 1523–1643', duration: '121 days',
    blurb: 'Site Reliability Engineering — Kubernetes (CKA prep), Helm, Istio, EKS, GitOps with ArgoCD/Flux, Prometheus/Grafana observability, SLO/SLA/SLI, incident response.',
    items: [
      { icon: '☸️', title: 'SRE', detail: 'Kubernetes · CKA prep · Helm · Istio · EKS · GitOps · Prometheus/Grafana · SLO/SLA/SLI', source: 'KodeKloud', to: '/k8s' },
    ],
  },
  // ── Phase 6 · Interview Prep (Days 1644–2009 · 1 year) ───────────────────
  {
    id: 's19', arcClass: 'y5', icon: '🏗️',
    label: 'Skill 19 · System Design',
    tagline: 'Days 1644–1826', duration: '183 days',
    blurb: 'The art of building at scale — HLD/LLD, CAP theorem, distributed systems, database design, caching, message queues, and case studies (design Twitter, Uber, Netflix).',
    items: [
      { icon: '🏗️', title: 'System Design', detail: 'HLD/LLD · scalability · distributed systems · case studies · mock interviews', source: 'ChaiCode + GfG', to: '/interview' },
    ],
  },
  {
    id: 's20', arcClass: 'y5', icon: '🧠',
    label: 'Skill 20 · DSA',
    tagline: 'Days 1827–2009', duration: '183 days',
    blurb: "The final interview-prep sprint — Striver's A2Z Sheet + NeetCode 150. Pattern-based problem solving: arrays, strings, two pointers, sliding window, binary search, trees, graphs, dynamic programming, and backtracking. The journey ends here on Day 2,009.",
    items: [
      { icon: '📋', title: "Striver's A2Z Sheet", detail: 'Step-by-step pattern coverage — arrays → linked lists → binary search → trees → graphs → DP', source: 'takeUforward', to: '/interview' },
      { icon: '🎯', title: 'NeetCode 150', detail: 'Curated 150-problem set — most common patterns asked in FAANG & product-company interviews', source: 'NeetCode.io', to: '/interview' },
    ],
  },
];

const STATS = [
  { value: '20', label: 'skills · one at a time' },
  { value: '6', label: 'phases · Agentic AI first' },
  { value: '66', label: 'months · 2,009 days' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 6 phases · 20 skills · 2,009 days · 66 months</span>
        <h1 className="roadmap-hero-title">6 Phases, 20 Skills, 2,009 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>6 phases</strong>{' '}
          mastered one at a time — <strong>Phase 1 · Agentic AI (6 months) → Phase 2 · TypeScript Stack (1 year)
          → Phase 3 · Java Stack (1 year) → Phase 4 · Python Stack (1 year)
          → Phase 5 · DevOps Stack (1 year) → Phase 6 · Interview Prep (1 year)</strong> —{' '}
          <strong>20 skills mastered to depth — 66 months (2,009 days)</strong> of focused daily practice,
          front to back. NexusAI capstone built daily throughout all 2,009 days.
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
          src="/roadmap-notes/2009_days.png"
          alt="20 Skills. 2,009 Days. One Journey. — Full Lifecycle Engineer roadmap: Python → FastAPI → Agentic AI → JavaScript → TypeScript → React JS → Next JS → React Native → Databases → Express JS → J2SE → Spring Boot → Kafka → Microservices → Automation Testing → DevOps → Cloud (AWS) → SRE → System Design → DSA. Day 1: 31 Aug 2026 · Day 2,009: 29 Feb 2032."
          loading="eager"
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

      {/* ── Skill Calendar ──────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: '780px', margin: '16px auto 8px', padding: '0 12px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 900, textAlign: 'center', marginBottom: '14px', letterSpacing: '0.04em', color: '#fff' }}>
          📅 Skill Calendar
        </h2>
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
                const [d1, d2] = SKILL_DAYS[i];
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
          Day 1 = 31 Aug 2026 · 6 phases · 20 skills · 2,009 days · ends 29 Feb 2032
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
            <p className="roadmap-finish-date">6 phases · 20 skills · 2,009 days, front to back</p>
          </div>
        </div>
      </div>

      {/* ── LeetCode Badge Goal ──────────────────────────────────────────── */}
      <div style={{ maxWidth: '780px', margin: '28px auto 8px', padding: '0 12px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '28px',
          background: 'rgba(212,168,67,0.07)',
          border: '1.5px solid rgba(212,168,67,0.38)',
          borderRadius: '18px', padding: '24px 28px',
        }}>
          <img
            src="/roadmap-notes/2000-days-of-leetcode.jpeg"
            alt="LeetCode 2000 Days Badge"
            style={{ width: 110, height: 110, objectFit: 'contain', borderRadius: '12px', flexShrink: 0 }}
          />
          <div>
            <p style={{ color: '#f5e070', fontWeight: 900, fontSize: '1.1rem', marginBottom: '4px', letterSpacing: '0.04em' }}>
              LeetCode 2,000 Days Badge
            </p>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', marginBottom: '10px' }}>
              Target: 29 Feb 2032 · Day 2,009
            </p>
            <p style={{ color: 'rgba(200,212,224,0.82)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '12px' }}>
              1 LeetCode daily challenge every single day — Day 1 (31 Aug 2026) through Day 2,009 (29 Feb 2032).
              2,009 consecutive submissions earns this badge the exact same day the LeetCode milestone lands.
              The discipline badge that proves the entire journey.
            </p>
            <a
              href="https://leetcode.com/problemset/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', color: '#f5e070', fontWeight: 700,
                fontSize: '0.82rem', textDecoration: 'none',
                border: '1px solid rgba(245,224,112,0.45)', borderRadius: '8px',
                padding: '6px 14px',
              }}
            >
              Start the streak on LeetCode →
            </a>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 6 phases — 20 skills mastered to depth:{' '}
          <strong>Phase 1 · Agentic AI</strong> (6 months · LangChain · LangGraph · MCP · n8n) {'->'}
          {' '}<strong>Phase 2 · TypeScript Stack</strong> (1 year · JavaScript → TypeScript → React JS → Next JS → React Native → Express JS → Databases) {'->'}
          {' '}<strong>Phase 3 · Java Stack</strong> (1 year · J2SE → Spring Boot → Kafka → Microservices → Automation Testing) {'->'}
          {' '}<strong>Phase 4 · Python Stack</strong> (1 year · Python → FastAPI) {'->'}
          {' '}<strong>Phase 5 · DevOps Stack</strong> (1 year · DevOps → Cloud AWS → SRE) {'->'}
          {' '}<strong>Phase 6 · Interview Prep</strong> (1 year · System Design → DSA). One phase at a time, fully focused.
          1 LeetCode daily challenge throughout all 2,009 days.
          NexusAI capstone built daily throughout. 66 months (2,009 days) end to end.
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
