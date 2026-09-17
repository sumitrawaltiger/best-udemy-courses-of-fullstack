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
const _CAL_DAY1 = new Date(2026, 8, 17); // 17 Sep 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 5-year plan · 1,827 days ───────────────────────────────────────────
// Year 1 · Python Stack       Days    1–365  · 17 Sep 2026 – 16 Sep 2027
//   └ Agentic AI (LangChain · LangGraph · RAG · MCP · CrewAI · n8n)
//   └ FastAPI (Pydantic · async endpoints · OAuth2 · Docker · NexusAI API)
// Year 2 · JavaScript Stack    Days  366–731  · 17 Sep 2027 – 16 Sep 2028
//   └ JavaScript · TypeScript · React JS · Next JS · React Native · Express JS
// Year 3 · Java Stack          Days  732–1096 · 17 Sep 2028 – 16 Sep 2029
//   └ Databases · NestJS · J2SE · Spring Boot · Microservices
// Year 4 · DevOps Stack        Days 1097–1461 · 17 Sep 2029 – 16 Sep 2030
//   └ Quality Engineering · AWS · DevOps · DevSecOps · SRE
// Year 5 · DSA & System Design Days 1462–1827 · 17 Sep 2030 – 17 Sep 2031
//   └ DSA (Striver A2Z · NeetCode 150) · System Design (HLD/LLD · 50+ case studies)
// NexusAI capstone built daily throughout all 1,827 days.
// Calendar: Day 0 = 16 Sep 2026, Day 1 = 17 Sep 2026, journey ends 17 Sep 2031.

const PHASE_DAYS = [
  [1, 365],
  [366, 731],
  [732, 1096],
  [1097, 1461],
  [1462, 1827],
];

const PHASES = [
  {
    id: 'p1', arcClass: 'y1', icon: '🐍',
    label: 'Year 1 · Python Stack',
    tagline: 'Days 1–365',
    duration: '365 days · 17 Sep 2026 – 16 Sep 2027',
    blurb: 'Build the AI foundation. Agentic AI with LangChain, LangGraph, RAG, MCP and CrewAI. Then FastAPI to deploy NexusAI as a production API. Python studied daily throughout the year.',
    items: [
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · RAG · MCP · CrewAI · n8n · NexusAI v1', source: 'Ashok IT / Coder Army', to: '/python' },
      { icon: '⚡', title: 'FastAPI', detail: 'Pydantic · async endpoints · OAuth2 · background tasks · Docker · NexusAI API', source: 'Udemy', to: '/python' },
    ],
  },
  {
    id: 'p2', arcClass: 'y2', icon: '🟨',
    label: 'Year 2 · JavaScript Stack',
    tagline: 'Days 366–731',
    duration: '366 days · 17 Sep 2027 – 16 Sep 2028',
    blurb: 'Full-stack JavaScript from DOM to mobile. JavaScript, TypeScript, React, Next.js, React Native and Express — end-to-end JS/TS mastery.',
    items: [
      { icon: '🟨', title: 'JavaScript', detail: 'Syntax · DOM · async · closures · ES6+ · event loop · fetch API · modules', source: 'Thunder++ by Hitesh', to: '/' },
      { icon: '🔷', title: 'TypeScript', detail: 'Types · interfaces · generics · enums · decorators · strict mode · tsconfig', source: 'Illustrated TS series', to: '/typescript' },
      { icon: '⚛️', title: 'React JS', detail: 'Hooks · context · React Router · Redux Toolkit · React Testing Library', source: 'ChaiCode', to: '/nextjs' },
      { icon: '▲', title: 'Next JS', detail: 'App Router · server components · server actions · middleware · Vercel', source: 'ChaiCode', to: '/nextjs' },
      { icon: '📱', title: 'React Native', detail: 'Expo · React Navigation · Reanimated · camera · push notifications · EAS builds', source: 'ChaiCode', to: '/mobile' },
      { icon: '🚂', title: 'Express JS', detail: 'Middleware · JWT auth · Prisma ORM · WebSockets · REST APIs', source: 'Udemy', to: '/' },
    ],
  },
  {
    id: 'p3', arcClass: 'y3', icon: '☕',
    label: 'Year 3 · Java Stack',
    tagline: 'Days 732–1096',
    duration: '365 days · 17 Sep 2028 – 16 Sep 2029',
    blurb: 'Backend engineering at depth. Databases, NestJS, Core Java, Spring Boot and Microservices with Kafka, CQRS and Saga patterns.',
    items: [
      { icon: '🗄️', title: 'Databases', detail: 'PostgreSQL · MySQL · MongoDB · Redis · pgvector', source: 'Udemy', to: '/' },
      { icon: '🪹', title: 'NestJS', detail: 'Modules · guards · interceptors · GraphQL · Kafka transport · CQRS', source: 'Udemy', to: '/' },
      { icon: '☕', title: 'J2SE', detail: 'Core Java · OOP · collections · streams · Java 17 · concurrency', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Data JPA · Hibernate · Spring Security · Spring Cloud', source: 'Udemy', to: '/java' },
      { icon: '🔗', title: 'Microservices', detail: 'Kafka · CQRS · Saga pattern · event sourcing · service mesh · Kafka Streams', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p4', arcClass: 'y4', icon: '🐳',
    label: 'Year 4 · DevOps Stack',
    tagline: 'Days 1097–1461',
    duration: '365 days · 17 Sep 2029 – 16 Sep 2030',
    blurb: 'Ship with confidence. Quality Engineering, AWS, DevOps, DevSecOps and SRE — all the practices that keep production healthy.',
    items: [
      { icon: '🧪', title: 'Quality Engineering', detail: 'JUnit 5 · Mockito · Testcontainers · Playwright · Vitest · Pact · REST-assured', source: 'Udemy', to: '/' },
      { icon: '☁️', title: 'AWS', detail: 'AWS SAA · RDS · CloudFront · Route 53 · VPC · IAM · Lambda', source: 'KodeKloud', to: '/aws' },
      { icon: '🐳', title: 'DevOps', detail: 'Docker · Kubernetes · EKS · Helm · ArgoCD · Terraform · GitHub Actions · CKA', source: 'KodeKloud', to: '/devops' },
      { icon: '🔐', title: 'DevSecOps', detail: 'OWASP Top 10 · OAuth2/OIDC · JWT hardening · Vault · K8s RBAC · SAST/DAST/SCA', source: 'Udemy', to: '/' },
      { icon: '☸️', title: 'SRE', detail: 'Prometheus · Grafana · SLO/SLA/SLI · incident response · chaos engineering', source: 'KodeKloud', to: '/' },
    ],
  },
  {
    id: 'p5', arcClass: 'y5', icon: '📋',
    label: 'Year 5 · DSA & System Design',
    tagline: 'Days 1462–1827',
    duration: '366 days · 17 Sep 2030 – 17 Sep 2031',
    blurb: 'Master algorithms and system architecture. Striver A2Z + NeetCode 150 for DSA, then deep HLD/LLD and 50+ real-world system design case studies.',
    items: [
      { icon: '📋', title: 'DSA', detail: "Striver’s A2Z · NeetCode 150 · DP · graphs · trees · Python+TS+Java", source: 'ChaiCode Interview Bundle', to: '/interview' },
      { icon: '🏗️', title: 'System Design', detail: 'HLD/LLD · CAP theorem · distributed systems · scalability · 50+ case studies · 200+ mock interviews', source: 'ChaiCode + GfG + ByteByteGo', to: '/interview' },
    ],
  },
];

const STATS = [
  { value: '5', label: 'years · Python → JS → Java → DevOps → DSA' },
  { value: '1,827', label: 'days · ~60 months' },
  { value: '17', label: 'technologies across 5 years' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 5 years · 1,827 days · ~60 months</span>
        <h1 className="roadmap-hero-title">5 Years, 1,827 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then{' '}
          <strong>5 years of focused daily practice</strong> —{' '}
          <strong>Year 1 Python</strong> {'→'} <strong>Year 2 JavaScript</strong> {'→'} <strong>Year 3 Java</strong> {'→'}
          <strong>Year 4 DevOps</strong> {'→'} <strong>Year 5 DSA &amp; System Design</strong>.{' '}
          <strong>1,827 days (~60 months)</strong> of focused daily practice, front to back.
          NexusAI capstone built daily throughout all 1,827 days.
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
          src="/roadmap-notes/2000_days.png"
          alt="20 Skills. 2,000 Days. One Journey. — Full Lifecycle Engineer roadmap: Agentic AI → FastAPI → JS → TS → React → Next → React Native → Express JS → Databases → NestJS → J2SE → DSA → Spring Boot → Microservices → Quality Engineering → AWS → DevOps → DevSecOps → SRE → System Design. Day 1: 31 Dec 2026 · Day 2,000: 21 Jun 2032."
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
          Day 0 = 16 Sep 2026 · Day 1 = 17 Sep 2026 · 5 years · 1,827 days · journey ends 17 Sep 2031
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
            <p className="roadmap-finish-date">5 years · 1,827 days · front to back · 17 Sep 2031</p>
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
              Target: 17 Sep 2031 · Day 1,827
            </p>
            <p style={{ color: 'rgba(200,212,224,0.82)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '12px' }}>
              1 LeetCode daily challenge every single day — Day 1 (17 Sep 2026) through Day 1,827 (17 Sep 2031).
              Consistent daily submissions earn the streak badge on the final day of the journey.
              The discipline badge that proves the entire 1,827-day journey.
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
          Day 0 setup, then 5 years —{' '}
          <strong>Year 1 Python</strong> (Agentic AI + FastAPI){' '}{'→'}{' '}
          <strong>Year 2 JavaScript</strong> (JS + TS + React + Next + RN + Express){' '}{'→'}{' '}
          <strong>Year 3 Java</strong> (Databases + NestJS + J2SE + Spring Boot + Microservices){' '}{'→'}{' '}
          <strong>Year 4 DevOps</strong> (Quality Engg + AWS + DevOps + DevSecOps + SRE){' '}{'→'}{' '}
          <strong>Year 5 DSA &amp; System Design</strong> (Striver A2Z + NeetCode 150 + HLD/LLD).{' '}
          1 LeetCode daily throughout all 1,827 days.
          NexusAI capstone built daily throughout — grows with every year.
          ~60 months (1,827 days) end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Start Skill 01 · Agentic AI
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
