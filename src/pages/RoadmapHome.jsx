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
const _CAL_DAY1 = new Date(2026, 8, 9); // 9 Sep 2026
function _calDate(dayN) {
  const d = new Date(_CAL_DAY1);
  d.setDate(d.getDate() + dayN - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── 20 skills · 100 days each · 2,000 days ───────────────────────────────────
// Skill  1 · Python + FastAPI    Days    1–100  · 9 Sep 2026 – 17 Dec 2026
// Skill  2 · Agentic AI          Days  101–200  · 18 Dec 2026 – 27 Mar 2027
// Skill  3 · JavaScript          Days  201–300  · 28 Mar 2027 – 5 Jul 2027
// Skill  4 · TypeScript          Days  301–400  · 6 Jul 2027 – 13 Oct 2027
// Skill  5 · React JS            Days  401–500  · 14 Oct 2027 – 21 Jan 2028
// Skill  6 · Next JS             Days  501–600  · 22 Jan 2028 – 30 Apr 2028
// Skill  7 · React Native        Days  601–700  · 1 May 2028 – 8 Aug 2028
// Skill  8 · Express JS          Days  701–800  · 9 Aug 2028 – 16 Nov 2028
// Skill  9 · Databases           Days  801–900  · 17 Nov 2028 – 24 Feb 2029
// Skill 10 · NestJS              Days  901–1000 · 25 Feb 2029 – 4 Jun 2029
// Skill 11 · J2SE                Days 1001–1100 · 5 Jun 2029 – 12 Sep 2029
// Skill 12 · Spring Boot         Days 1101–1200 · 13 Sep 2029 – 21 Dec 2029
// Skill 13 · Kafka               Days 1201–1300 · 22 Dec 2029 – 31 Mar 2030
// Skill 14 · Microservices       Days 1301–1400 · 1 Apr 2030 – 9 Jul 2030
// Skill 15 · Automation Testing  Days 1401–1500 · 10 Jul 2030 – 17 Oct 2030
// Skill 16 · DevOps              Days 1501–1600 · 18 Oct 2030 – 25 Jan 2031
// Skill 17 · AWS                 Days 1601–1700 · 26 Jan 2031 – 5 May 2031
// Skill 18 · SRE                 Days 1701–1800 · 6 May 2031 – 13 Aug 2031
// Skill 19 · System Design       Days 1801–1900 · 14 Aug 2031 – 21 Nov 2031
// Skill 20 · DSA                 Days 1901–2000 · 22 Nov 2031 – 29 Feb 2032
// NexusAI capstone built daily throughout all 2,000 days — no separate Capstone block.
// Calendar: Day 0 = 8 Sep 2026, Day 1 = 9 Sep 2026, Day 2,000 = 29 Feb 2032.

const PHASE_DAYS = [
  [1, 100],
  [101, 200],
  [201, 300],
  [301, 400],
  [401, 500],
  [501, 600],
  [601, 700],
  [701, 800],
  [801, 900],
  [901, 1000],
  [1001, 1100],
  [1101, 1200],
  [1201, 1300],
  [1301, 1400],
  [1401, 1500],
  [1501, 1600],
  [1601, 1700],
  [1701, 1800],
  [1801, 1900],
  [1901, 2000],
];

const PHASES = [
  {
    id: 'p1', arcClass: 'y1', icon: '🐍',
    label: 'Skill 01 · Python + FastAPI',
    tagline: 'Days 1–100',
    duration: '100 days · ~3.3 months',
    blurb: 'Python foundations and FastAPI REST APIs. OOP, file I/O, DB connectivity, async/await, multithreading. The bedrock for Agentic AI and the NexusAI agent-api.',
    items: [
      { icon: '🐍', title: 'Python + FastAPI', detail: 'Syntax · OOP · file I/O · DB connectivity · multithreading · async/await · FastAPI · REST API foundations', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p2', arcClass: 'y1', icon: '🤖',
    label: 'Skill 02 · Agentic AI',
    tagline: 'Days 101–200',
    duration: '100 days · ~3.3 months',
    blurb: 'GenAI engineering from scratch. LangChain, LangGraph, RAG, MCP, CrewAI, n8n. Build the first NexusAI multi-agent pipeline.',
    items: [
      { icon: '🤖', title: 'Agentic AI', detail: 'LangChain · LangGraph · RAG · MCP · CrewAI · n8n agentic workflows · NexusAI v1', source: 'Ashok IT / Coder Army', to: '/python' },
    ],
  },
  {
    id: 'p3', arcClass: 'y2', icon: '🟨',
    label: 'Skill 03 · JavaScript',
    tagline: 'Days 201–300',
    duration: '100 days · ~3.3 months',
    blurb: 'Core JavaScript from scratch — DOM, async/await, closures, ES6+, event loop, and daily LeetCode in JS.',
    items: [
      { icon: '🟨', title: 'JavaScript', detail: 'Syntax · DOM · async · closures · prototypes · ES6+ · event loop · fetch API · modules · npm', source: 'Thunder++ by Hitesh', to: '/' },
    ],
  },
  {
    id: 'p4', arcClass: 'y2', icon: '🔷',
    label: 'Skill 04 · TypeScript',
    tagline: 'Days 301–400',
    duration: '100 days · ~3.3 months',
    blurb: 'TypeScript from first principles — types, interfaces, generics, enums, decorators, and the illustrated episode series.',
    items: [
      { icon: '🔷', title: 'TypeScript', detail: 'Types · interfaces · generics · enums · decorators · utility types · strict mode · tsconfig · TS with Node', source: 'Illustrated TS series', to: '/typescript' },
    ],
  },
  {
    id: 'p5', arcClass: 'y2', icon: '⚛️',
    label: 'Skill 05 · React JS',
    tagline: 'Days 401–500',
    duration: '100 days · ~3.3 months',
    blurb: 'React from components to production — hooks, state management, React Router, and React Testing Library.',
    items: [
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · context · React Router · Redux Toolkit · React Testing Library · Vite build', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p6', arcClass: 'y2', icon: '▲',
    label: 'Skill 06 · Next JS',
    tagline: 'Days 501–600',
    duration: '100 days · ~3.3 months',
    blurb: 'Full-stack React with Next.js — App Router, server components, server actions, middleware, and Vercel deployment.',
    items: [
      { icon: '▲', title: 'Next JS', detail: 'App Router · server components · server actions · middleware · ISR · streaming · Vercel · Prisma ORM', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p7', arcClass: 'y2', icon: '📱',
    label: 'Skill 07 · React Native',
    tagline: 'Days 601–700',
    duration: '100 days · ~3.3 months',
    blurb: 'Cross-platform iOS and Android with Expo — native components, navigation, camera, push notifications, and EAS builds.',
    items: [
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · React Navigation · Reanimated · camera · push notifications · EAS builds', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 'p8', arcClass: 'y2', icon: '🚂',
    label: 'Skill 08 · Express JS',
    tagline: 'Days 701–800',
    duration: '100 days · ~3.3 months',
    blurb: 'Backend REST APIs with Express.js — middleware, JWT auth, Prisma ORM, file uploads, rate limiting, and WebSockets.',
    items: [
      { icon: '🚂', title: 'Express JS', detail: 'Middleware · routing · JWT auth · Prisma ORM · file uploads · rate limiting · WebSockets · REST best practices', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 'p9', arcClass: 'y2', icon: '🗄️',
    label: 'Skill 09 · Databases',
    tagline: 'Days 801–900',
    duration: '100 days · ~3.3 months',
    blurb: 'SQL and NoSQL depth — PostgreSQL, MySQL, MongoDB, Redis, pgvector. Production data-layer knowledge that powers every ORM and cache layer in the skills that follow.',
    items: [
      { icon: '🐘', title: 'SQL Databases', detail: 'PostgreSQL · MySQL · joins · indexes · transactions · query optimisation · stored procedures · EXPLAIN', source: 'Udemy', to: '/java' },
      { icon: '🍃', title: 'NoSQL + Vector DB', detail: 'MongoDB · Redis caching · pub/sub · session management · pgvector for AI semantic search', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p10', arcClass: 'y3', icon: '🪺',
    label: 'Skill 10 · NestJS',
    tagline: 'Days 901–1000',
    duration: '100 days · ~3.3 months',
    blurb: 'Enterprise Node.js with NestJS — modules, controllers, guards, interceptors, GraphQL (code-first), WebSockets, Kafka transport, microservices patterns, and Jest + Supertest API testing. Database knowledge from Skill 09 makes TypeORM and Prisma click from day one.',
    items: [
      { icon: '🪺', title: 'NestJS', detail: 'Modules · controllers · providers · guards · interceptors · pipes · GraphQL code-first · WebSockets · Kafka transport · Prisma ORM · CQRS · Jest + Supertest', source: 'Udemy / NestJS Docs', to: '/nextjs' },
    ],
  },
  {
    id: 'p11', arcClass: 'y3', icon: '☕',
    label: 'Skill 11 · J2SE',
    tagline: 'Days 1001–1100',
    duration: '100 days · ~3.3 months',
    blurb: 'Core Java fundamentals — OOP, collections, exceptions, multithreading, streams, and Java 8/17 modern features.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java · OOP · collections · exceptions · multithreading · streams · lambdas · Java 8/9/17 features · JDBC', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p12', arcClass: 'y3', icon: '🍃',
    label: 'Skill 12 · Spring Boot',
    tagline: 'Days 1101–1200',
    duration: '100 days · ~3.3 months',
    blurb: 'Enterprise Spring Boot — REST APIs, Spring Data JPA, Hibernate, Spring Security, Spring Cloud, and microservice foundations.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'REST APIs · Spring Data JPA · Hibernate · Spring Security · Spring Cloud · Actuator · Config Server · testing', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p13', arcClass: 'y3', icon: '📨',
    label: 'Skill 13 · Kafka',
    tagline: 'Days 1201–1300',
    duration: '100 days · ~3.3 months',
    blurb: 'Event-driven architecture with Apache Kafka — topics, partitions, consumer groups, delivery guarantees, and Spring Kafka.',
    items: [
      { icon: '📨', title: 'Kafka', detail: 'Topics · partitions · consumer groups · delivery guarantees · Spring Kafka · schema registry · Kafka Streams', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p14', arcClass: 'y3', icon: '🔗',
    label: 'Skill 14 · Microservices',
    tagline: 'Days 1301–1400',
    duration: '100 days · ~3.3 months',
    blurb: 'Production microservices — CQRS, event sourcing, Saga pattern, service mesh, and distributed system patterns built on Kafka.',
    items: [
      { icon: '🔗', title: 'Microservices', detail: 'CQRS · event sourcing · Saga pattern · API gateway · service mesh · distributed tracing · circuit breakers', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p15', arcClass: 'y3', icon: '🧪',
    label: 'Skill 15 · Automation Testing',
    tagline: 'Days 1401–1500',
    duration: '100 days · ~3.3 months',
    blurb: 'Full Java test suite — JUnit 5, Mockito, Testcontainers, REST-assured, Pact contract tests, and JMeter performance testing.',
    items: [
      { icon: '🧪', title: 'Automation Testing', detail: 'JUnit 5 · Mockito · Testcontainers · REST-assured · Pact contract tests · JMeter / Gatling performance testing', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p16', arcClass: 'y5', icon: '🐳',
    label: 'Skill 16 · DevOps',
    tagline: 'Days 1501–1600',
    duration: '100 days · ~3.3 months',
    blurb: 'Docker, Kubernetes, and CI/CD — containerisation, Helm charts, GitHub Actions, Terraform, and GitOps with ArgoCD.',
    items: [
      { icon: '🐳', title: 'DevOps', detail: 'Docker · Kubernetes core · Helm · ArgoCD · Flux · GitHub Actions · Jenkins · Terraform IaC · GitOps', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 'p17', arcClass: 'y5', icon: '☁️',
    label: 'Skill 17 · AWS',
    tagline: 'Days 1601–1700',
    duration: '100 days · ~3.3 months',
    blurb: 'AWS Solutions Architect Associate + Kubernetes CKA — EKS, RDS, CloudFront, Route 53, and production cloud deployment.',
    items: [
      { icon: '☁️', title: 'AWS + CKA', detail: 'AWS SAA · EKS · RDS · ElastiCache · MSK · CloudFront · Route 53 · Kubernetes CKA certification prep', source: 'KodeKloud / CloudFolks', to: '/aws' },
    ],
  },
  {
    id: 'p18', arcClass: 'y5', icon: '☸️',
    label: 'Skill 18 · SRE',
    tagline: 'Days 1701–1800',
    duration: '100 days · ~3.3 months',
    blurb: 'Site Reliability Engineering — Prometheus, Grafana, SLO/SLA/SLI, incident response, on-call discipline, and NexusAI production observability.',
    items: [
      { icon: '☸️', title: 'SRE', detail: 'Prometheus · Grafana · SLO / SLA / SLI · incident response · on-call · capacity planning · chaos engineering', source: 'KodeKloud', to: '/k8s' },
    ],
  },
  {
    id: 'p19', arcClass: 'y5', icon: '🏗️',
    label: 'Skill 19 · System Design',
    tagline: 'Days 1801–1900',
    duration: '100 days · ~3.3 months',
    blurb: 'HLD and LLD at depth — CAP theorem, distributed systems, scalability patterns, and 50+ case studies: Twitter, Uber, Netflix, WhatsApp.',
    items: [
      { icon: '🏗️', title: 'System Design', detail: 'HLD / LLD · CAP theorem · distributed systems · scalability · caching · message queues · 50+ case studies', source: 'ChaiCode + GfG + ByteByteGo', to: '/interview' },
    ],
  },
  {
    id: 'p20', arcClass: 'y5', icon: '📋',
    label: 'Skill 20 · DSA',
    tagline: 'Days 1901–2000',
    duration: '100 days · ~3.3 months',
    blurb: "Striver A2Z + NeetCode 150 — arrays to DP. 200+ mock interviews, salary negotiation, and NexusAI as your portfolio centrepiece. Journey ends Day 2,000.",
    items: [
      { icon: '📋', title: "DSA — Striver's A2Z + NeetCode 150", detail: 'Arrays · linked lists · binary search · trees · graphs · dynamic programming · backtracking · bit manipulation', source: 'takeUforward / NeetCode.io', to: '/interview' },
      { icon: '🎤', title: 'Mock Interviews + Portfolio', detail: '200+ mock interviews · salary negotiation · offer evaluation · NexusAI portfolio showcase', source: 'ChaiCode Interview Bundle', to: '/interview' },
    ],
  },
];

const STATS = [
  { value: '20', label: 'skills · 100 days each' },
  { value: '2,000', label: 'days · ~66 months' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 20 skills · 2,000 days · ~66 months</span>
        <h1 className="roadmap-hero-title">20 Skills, 2,000 Days</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>20 skills · 100 days each</strong>{' '}
          mastered end to end —{' '}
          <strong>Python + FastAPI</strong> {'→'} <strong>Agentic AI</strong> {'→'} <strong>JavaScript</strong> {'→'} <strong>TypeScript</strong> {'→'}{' '}
          <strong>React JS</strong> {'→'} <strong>Next JS</strong> {'→'} <strong>React Native</strong> {'→'} <strong>Express JS</strong> {'→'}{' '}
          <strong>Databases</strong> {'→'} <strong>NestJS</strong> {'→'} <strong>J2SE</strong> {'→'} <strong>Spring Boot</strong> {'→'}{' '}
          <strong>Kafka</strong> {'→'} <strong>Microservices</strong> {'→'} <strong>Automation Testing</strong> {'→'} <strong>DevOps</strong> {'→'}{' '}
          <strong>AWS</strong> {'→'} <strong>SRE</strong> {'→'} <strong>System Design</strong> {'→'} <strong>DSA</strong> —{' '}
          <strong>2,000 days (~66 months)</strong> of focused daily practice, front to back.
          NexusAI capstone built daily throughout all 2,000 days.
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
          alt="20 Skills. 2,000 Days. One Journey. — Full Lifecycle Engineer roadmap: Python → Agentic AI → JS → TS → React → Next → React Native → Express → Databases → NestJS → J2SE → Spring Boot → Kafka → Microservices → AutoTest → DevOps → AWS → SRE → System Design → DSA. Day 1: 9 Sep 2026 · Day 2,000: 29 Feb 2032."
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
          Day 0 = 8 Sep 2026 · Day 1 = 9 Sep 2026 · 20 skills · 2,000 days · journey ends 29 Feb 2032
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
            <p className="roadmap-finish-date">20 skills · 2,000 days · front to back · 29 Feb 2032</p>
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
              Target: 29 Feb 2032 · Day 2,000
            </p>
            <p style={{ color: 'rgba(200,212,224,0.82)', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '12px' }}>
              1 LeetCode daily challenge every single day — Day 1 (9 Sep 2026) through Day 2,000 (29 Feb 2032).
              2,000 consecutive submissions earns the badge on the final day of the journey.
              The discipline badge that proves the entire 2,000-day journey.
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
          Day 0 setup, then 20 skills at 100 days each:{' '}
          <strong>Python + FastAPI</strong> {'→'} <strong>Agentic AI</strong> {'→'} <strong>JavaScript</strong> {'→'} <strong>TypeScript</strong> {'→'}{' '}
          <strong>React JS</strong> {'→'} <strong>Next JS</strong> {'→'} <strong>React Native</strong> {'→'} <strong>Express JS</strong> {'→'}{' '}
          <strong>Databases</strong> {'→'} <strong>NestJS</strong> {'→'} <strong>J2SE</strong> {'→'} <strong>Spring Boot</strong> {'→'}{' '}
          <strong>Kafka</strong> {'→'} <strong>Microservices</strong> {'→'} <strong>Automation Testing</strong> {'→'} <strong>DevOps</strong> {'→'}{' '}
          <strong>AWS</strong> {'→'} <strong>SRE</strong> {'→'} <strong>System Design</strong> {'→'} <strong>DSA</strong>.{' '}
          1 LeetCode daily throughout all 2,000 days.
          NexusAI capstone built daily throughout — grows with every skill.
          ~66 months (2,000 days) end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Start Skill 01 · Python + FastAPI
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
