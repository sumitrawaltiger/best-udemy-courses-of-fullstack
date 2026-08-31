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

// ── Phase calendar helpers ───────────────────────────────────────────────────
const _CAL_DAY1 = new Date(2026, 8, 1); // 1 Sep 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 6 phases · 2,008 days · 66 months ────────────────────────────────────────
// Phase 1 · Agentic AI          Days    1–181  ·  6 months ·  1 Sep 2026 – 28 Feb 2027
// Phase 2 · TypeScript Stack    Days  182–669  · 16 months ·  1 Mar 2027 – 30 Jun 2028
// Phase 3 · Java Stack          Days  670–1065 · 13 months ·  1 Jul 2028 – 31 Jul 2029
// Phase 4 · Databases           Days 1066–1187 ·  4 months ·  1 Aug 2029 – 30 Nov 2029
// Phase 5 · DevOps + Cloud      Days 1188–1552 · 12 months ·  1 Dec 2029 – 30 Nov 2030
// Phase 6 · Interview Prep      Days 1553–2008 · ~15 months · 1 Dec 2030 – 29 Feb 2032
// NexusAI capstone built daily throughout all 2,008 days — no separate Capstone block.
// Calendar: Day 1 = 1 Sep 2026, Day 2,008 = 29 Feb 2032.

const PHASE_DAYS = [
  [1, 181],
  [182, 669],
  [670, 1065],
  [1066, 1187],
  [1188, 1552],
  [1553, 2008],
];

const PHASES = [
  {
    id: 'p1', arcClass: 'y1', icon: '🤖',
    label: 'Phase 1 · Agentic AI',
    tagline: 'Days 1–181',
    duration: '181 days · 6 months',
    blurb: 'Python foundations + GenAI engineering. LangChain, LangGraph, RAG, MCP, CrewAI, n8n. Build the first NexusAI agent while learning the language from scratch.',
    items: [
      { icon: '🐍', title: 'Python + FastAPI', detail: 'Syntax · OOP · file I/O · DB connectivity · multithreading · REST API foundations', source: 'Ashok IT', to: '/python' },
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · RAG · MCP · CrewAI · n8n agentic workflows · NexusAI v1', source: 'Ashok IT / Coder Army', to: '/python' },
    ],
  },
  {
    id: 'p2', arcClass: 'y2', icon: '🔷',
    label: 'Phase 2 · TypeScript Full Stack',
    tagline: 'Days 182–669',
    duration: '488 days · 16 months',
    blurb: 'JavaScript → TypeScript → React JS → Next JS → React Native → Express JS. End-to-end web and mobile with full TypeScript coverage.',
    items: [
      { icon: '🟨', title: 'JavaScript + TypeScript', detail: 'Syntax · DOM · async · closures · ES6+ · types · interfaces · generics · enums', source: 'Thunder++ / Illustrated TS', to: '/' },
      { icon: '⚛️', title: 'React JS + Next JS', detail: 'Components · hooks · state management · App Router · server components · server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
      { icon: '📱', title: 'React Native + Express JS', detail: 'Expo · native components · navigation · builds & publishing · REST APIs · Prisma · JWT auth', source: 'ChaiCode', to: '/mobile' },
      { icon: '🎭', title: 'Playwright · E2E Testing', detail: 'End-to-end tests · page object model · API mocking · CI integration · Vitest + React Testing Library for unit tests', source: 'Playwright.dev', to: '/nextjs' },
    ],
  },
  {
    id: 'p3', arcClass: 'y3', icon: '☕',
    label: 'Phase 3 · Java Stack',
    tagline: 'Days 670–1065',
    duration: '396 days · 13 months',
    blurb: 'J2SE → Spring Boot → Kafka → Microservices → Automation Testing. Enterprise-grade backend and event-driven architecture.',
    items: [
      { icon: '☕', title: 'J2SE + Spring Boot', detail: 'Core Java · OOP · collections · exceptions · multithreading · Spring Boot · REST APIs · Spring Data JPA · Spring Security · Spring Cloud', source: 'Udemy', to: '/java' },
      { icon: '📨', title: 'Kafka + Microservices', detail: 'Apache Kafka · topics · partitions · consumer groups · delivery guarantees · CQRS · event sourcing · service mesh', source: 'Udemy', to: '/java' },
      { icon: '🧪', title: 'Automation Testing', detail: 'JUnit 5 · Mockito · Testcontainers · REST-assured · Pact contract tests · JMeter / Gatling performance', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p4', arcClass: 'y3', icon: '🗄️',
    label: 'Phase 4 · Databases',
    tagline: 'Days 1066–1187',
    duration: '122 days · 4 months',
    blurb: 'SQL and NoSQL depth — PostgreSQL, MySQL, MongoDB, Redis, pgvector. Deep data-layer knowledge before DevOps and interview prep.',
    items: [
      { icon: '🐘', title: 'SQL Databases', detail: 'PostgreSQL · MySQL · joins · indexes · transactions · query optimisation · stored procedures', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'NoSQL + Vector DB', detail: 'MongoDB · Redis caching · pub/sub · session management · pgvector for AI semantic search', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p5', arcClass: 'y5', icon: '🚀',
    label: 'Phase 5 · DevOps + Cloud',
    tagline: 'Days 1188–1552',
    duration: '365 days · 12 months',
    blurb: 'Docker → Kubernetes (CKA) → CI/CD → AWS → SRE. Deploy NexusAI to production with full observability and reliability engineering.',
    items: [
      { icon: '🐳', title: 'Docker + Kubernetes', detail: 'Containers · images · volumes · Compose · K8s core · CKA prep · Helm · Istio service mesh · EKS', source: 'KodeKloud', to: '/devops' },
      { icon: '☁️', title: 'AWS + CI/CD', detail: 'Core AWS services · architecture patterns · GitHub Actions · Jenkins · Terraform · infrastructure as code', source: 'KodeKloud / CloudFolks', to: '/aws' },
      { icon: '☸️', title: 'SRE', detail: 'GitOps · ArgoCD · Flux · Prometheus / Grafana observability · SLO / SLA / SLI · incident response · on-call', source: 'KodeKloud', to: '/k8s' },
    ],
  },
  {
    id: 'p6', arcClass: 'y5', icon: '🧠',
    label: 'Phase 6 · Interview Prep',
    tagline: 'Days 1553–2008',
    duration: '456 days · ~15 months',
    blurb: "DSA (Striver A2Z + NeetCode 150) + System Design (HLD/LLD) + 200+ mock interviews. NexusAI as your portfolio centrepiece. Journey ends Day 2,008.",
    items: [
      { icon: '📋', title: "DSA — Striver's A2Z + NeetCode 150", detail: 'Arrays · linked lists · binary search · trees · graphs · dynamic programming · backtracking · bit manipulation', source: 'takeUforward / NeetCode.io', to: '/interview' },
      { icon: '🏗️', title: 'System Design', detail: 'HLD / LLD · CAP theorem · distributed systems · scalability · caching · message queues · case studies: Twitter, Uber, Netflix', source: 'ChaiCode + GfG', to: '/interview' },
      { icon: '🎤', title: 'Mock Interviews + Portfolio', detail: '200+ mock interviews · salary negotiation · offer evaluation · NexusAI portfolio showcase', source: 'ChaiCode Interview Bundle', to: '/interview' },
    ],
  },
];

const STATS = [
  { value: '6', label: 'phases · first principles' },
  { value: '2,008', label: 'days · 66 months' },
  { value: '40+', label: 'technologies' },
  { value: '1', label: 'project · NexusAI daily' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 6 phases · 2,008 days · 66 months</span>
        <h1 className="roadmap-hero-title">6 Phases, 66 Months</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>6 phases</strong>{' '}
          mastered end to end —{' '}
          <strong>Phase 1 · Agentic AI</strong> (6 months) {'→'}{' '}
          <strong>Phase 2 · TypeScript Full Stack</strong> (14 months: JS → TS → React → Next → React Native → Express) {'→'}{' '}
          <strong>Phase 3 · Java Stack</strong> (12 months: J2SE → Spring Boot → Kafka → Microservices → Testing) {'→'}{' '}
          <strong>Phase 4 · Databases</strong> (4 months: SQL, NoSQL, Redis, pgvector) {'→'}{' '}
          <strong>Phase 5 · DevOps + Cloud</strong> (12 months: Docker → K8s → AWS → SRE) {'→'}{' '}
          <strong>Phase 6 · Interview Prep</strong> (~18 months: DSA + System Design + 200+ mocks) —{' '}
          <strong>66 months (2,008 days)</strong> of focused daily practice, front to back.
          NexusAI capstone built daily throughout all 2,008 days.
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
          src="/roadmap-notes/2008_days.png"
          alt="6 Phases. 2,000 Days. One Journey. — Full Lifecycle Engineer roadmap: Agentic AI → TypeScript Full Stack → Java Stack → Databases → DevOps + Cloud → Interview Prep. Day 1: 31 Aug 2026 · Day 2,000: 20 Feb 2032."
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

      {/* ── Phase Calendar ──────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: '780px', margin: '16px auto 8px', padding: '0 12px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 900, textAlign: 'center', marginBottom: '14px', letterSpacing: '0.04em', color: '#fff' }}>
          📅 Phase Calendar
        </h2>
        <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.06)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', lineHeight: 1.5 }}>
            <thead>
              <tr style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(255,255,255,0.07)', color: '#c8d0de' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>#</th>
                <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Phase</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Days</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>Start</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', fontWeight: 800 }}>End</th>
              </tr>
            </thead>
            <tbody>
              {PHASES.map((phase, i) => {
                const [d1, d2] = PHASE_DAYS[i];
                return (
                  <tr key={phase.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
                    <td style={{ padding: '9px 12px', color: '#8a95a3', fontVariantNumeric: 'tabular-nums', fontSize: '0.8rem', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</td>
                    <td style={{ padding: '9px 12px', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>{phase.icon} {phase.label}</td>
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
          Day 1 = 1 Sep 2026 · 6 phases · 2,008 days · journey ends 29 Feb 2032
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
            <p className="roadmap-finish-date">6 phases · 2,008 days · front to back · 29 Feb 2032</p>
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
              Target: 20 Feb 2032 · Day 2,000
            </p>
            <p style={{ color: 'rgba(200,212,224,0.82)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '12px' }}>
              1 LeetCode daily challenge every single day — Day 1 (1 Sep 2026) through Day 2,000 (21 Feb 2032).
              2,000 consecutive submissions earns the badge 8 days before the journey ends on 29 Feb 2032.
              The discipline badge that proves the entire 66-month journey.
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
          Day 0 setup, then 6 focused phases:{' '}
          <strong>Phase 1 · Agentic AI</strong> (Python + FastAPI + LangChain + LangGraph + MCP, 6 months) {'→'}{' '}
          <strong>Phase 2 · TypeScript Full Stack</strong> (JS → TS → React → Next.js → React Native → Express, 14 months) {'→'}{' '}
          <strong>Phase 3 · Java Stack</strong> (J2SE → Spring Boot → Kafka → Microservices → Automation Testing, 12 months) {'→'}{' '}
          <strong>Phase 4 · Databases</strong> (PostgreSQL · MongoDB · Redis · pgvector, 4 months) {'→'}{' '}
          <strong>Phase 5 · DevOps + Cloud</strong> (Docker → K8s CKA → AWS → SRE + GitOps, 12 months) {'→'}{' '}
          <strong>Phase 6 · Interview Prep</strong> (DSA Striver A2Z + NeetCode 150 · System Design · 200+ mocks, ~18 months).
          1 LeetCode daily throughout all 2,000 days.
          NexusAI capstone built daily throughout — grows with every phase.
          66 months (2,008 days) end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Start Phase 1 · Agentic AI
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
