import { Link } from 'react-router-dom';

// ── The 5-stack, 1,621-day roadmap ──────────────────────────────────────────
// 5 sequential stacks — Agentic AI using Python, then TypeScript Stack, Java
// Stack, Python Stack, and DevOps Stack — bundling the underlying tracks on
// this site. No separate prerequisite and no separate finale — Day 1 starts
// directly with Agentic AI, and Data Structures & System Design are practiced
// throughout every stack rather than as a single dedicated block at the end.
// Calendar dates are intentionally NOT shown (HR-facing page).

const PHASES = [
  {
    id: 'p1',
    arcClass: 'y1',
    icon: '🤖',
    label: 'Phase 1 · Agentic AI using Python',
    tagline: 'Days 1–160',
    duration: '160 days',
    blurb: 'The current focus — building AI agents with LangChain, LangGraph, MCP, and automation workflows, in Python.',
    items: [
      { icon: '🤖', title: 'Agentic AI using Python', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p2',
    arcClass: 'y2',
    icon: '🔷',
    label: 'Phase 2 · TypeScript Stack',
    tagline: 'Days 161–525',
    duration: '365 days',
    blurb: 'The entire JavaScript/TypeScript web ecosystem in one stack — core JS through React, Next.js, React Native, and the Express/Node backend.',
    items: [
      { icon: '🟨', title: 'JavaScript', detail: '100 Days of JavaScript — syntax, DOM, async, and fundamentals', source: 'Thunder++', to: '/' },
      { icon: '🔷', title: 'TypeScript', detail: 'Types, interfaces, generics, enums, and classes', source: 'Illustrated TypeScript series', to: '/typescript' },
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
    tagline: 'Days 526–891',
    duration: '366 days',
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
    arcClass: 'y4',
    icon: '🐍',
    label: 'Phase 4 · Python Stack',
    tagline: 'Days 892–1256',
    duration: '365 days',
    blurb: 'The Python language and modern async APIs, from fundamentals to production deployment.',
    items: [
      { icon: '🐍', title: 'Python', detail: 'Core syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p5',
    arcClass: 'y5',
    icon: '🚀',
    label: 'Phase 5 · DevOps Stack',
    tagline: 'Days 1257–1621',
    duration: '365 days',
    blurb: 'The final stack — ship and scale everything with Linux, Docker, Kubernetes, CI/CD, and core AWS services.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
];

const STATS = [
  { value: '5', label: 'sequential stacks' },
  { value: '1,621', label: 'days of practice' },
  { value: '~1 yr', label: 'per stack' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 5 stacks · 1,621 days of practice</span>
        <h1 className="roadmap-hero-title">The 1,621-Day Roadmap</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>5 sequential stacks</strong> —{' '}
          <strong>Agentic AI using Python → TypeScript Stack → Java Stack → Python Stack → DevOps
          Stack</strong> — <strong>1,621 days</strong> of focused, daily practice, front to back. Data
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
            <p className="roadmap-finish-date">5 stacks · 1,621 days, front to back</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 5 sequential stacks: <strong>Agentic AI using Python</strong> →{' '}
          <strong>TypeScript Stack</strong> (JavaScript, TypeScript, React JS, Next JS, React Native,
          Express/Node JS) → <strong>Java Stack</strong> (J2SE, J2EE, JPA, Spring Boot, Microservices) →{' '}
          <strong>Python Stack</strong> (Python, FastAPI) → <strong>DevOps Stack</strong> (DevOps, AWS
          Cloud). Data Structures &amp; System Design are practiced throughout every stack, not saved for
          one dedicated block. 1,621 days end to end.
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Explore Phase 1 · Agentic AI
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
