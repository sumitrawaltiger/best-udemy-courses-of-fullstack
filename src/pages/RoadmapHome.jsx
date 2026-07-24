import { Link } from 'react-router-dom';

// ── The 16-phase, 1,600-day roadmap ─────────────────────────────────────────
// 16 sequential phases, 100 days each = 1,600 days total. No separate
// prerequisite and no separate finale — Day 1 starts directly with Python,
// Agentic AI is its own counted phase (not a prereq), and Data Structures &
// System Design are practiced throughout every phase rather than as a single
// dedicated block at the end. Calendar dates are intentionally NOT shown
// (HR-facing page).

const PHASES = [
  {
    id: 'p1',
    arcClass: 'y1',
    icon: '🐍',
    label: 'Phase 1 · Python',
    tagline: 'Days 1–100',
    duration: '100 days',
    blurb: 'The language itself — syntax, OOP, file handling, database connectivity, and multithreading.',
    items: [
      { icon: '🐍', title: 'Python', detail: 'Core syntax · OOP · file handling · DB connectivity · multithreading', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p2',
    arcClass: 'y1',
    icon: '⚡',
    label: 'Phase 2 · FastAPI',
    tagline: 'Days 101–200',
    duration: '100 days',
    blurb: 'Modern async Python APIs — from fundamentals to production deployment.',
    items: [
      { icon: '⚡', title: 'FastAPI', detail: 'Fundamentals · databases · auth & security · production deployment', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p3',
    arcClass: 'y1',
    icon: '🤖',
    label: 'Phase 3 · Agentic AI using Python',
    tagline: 'Days 201–300',
    duration: '100 days',
    blurb: 'Building AI agents — LangChain, LangGraph, MCP, and automation workflows, in Python.',
    items: [
      { icon: '🤖', title: 'Agentic AI using Python', detail: 'LangChain · LangGraph · MCP · n8n agentic workflows', source: 'Ashok IT', to: '/python' },
    ],
  },
  {
    id: 'p4',
    arcClass: 'y2',
    icon: '🟨',
    label: 'Phase 4 · JavaScript',
    tagline: 'Days 301–400',
    duration: '100 days',
    blurb: 'Core JavaScript — the foundation for everything in the web phases that follow.',
    items: [
      { icon: '🟨', title: 'JavaScript', detail: '100 Days of JavaScript — syntax, DOM, async, and fundamentals', source: 'Thunder++', to: '/' },
    ],
  },
  {
    id: 'p5',
    arcClass: 'y2',
    icon: '🔷',
    label: 'Phase 5 · TypeScript',
    tagline: 'Days 401–500',
    duration: '100 days',
    blurb: 'Typed JavaScript — interfaces, generics, and type-safe patterns.',
    items: [
      { icon: '🔷', title: 'TypeScript', detail: 'Types, interfaces, generics, enums, and classes', source: 'Illustrated TypeScript series', to: '/typescript' },
    ],
  },
  {
    id: 'p6',
    arcClass: 'y2',
    icon: '⚛️',
    label: 'Phase 6 · React JS',
    tagline: 'Days 501–600',
    duration: '100 days',
    blurb: 'Components, hooks, state management, and the React ecosystem.',
    items: [
      { icon: '⚛️', title: 'React JS', detail: 'Components · hooks · state · routing · data fetching', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p7',
    arcClass: 'y2',
    icon: '🌐',
    label: 'Phase 7 · Next JS',
    tagline: 'Days 601–700',
    duration: '100 days',
    blurb: 'Full-stack React — App Router, server components, data & server actions, deployment.',
    items: [
      { icon: '🌐', title: 'Next JS', detail: 'App Router · server components · data & server actions · deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p8',
    arcClass: 'y2',
    icon: '📱',
    label: 'Phase 8 · React Native',
    tagline: 'Days 701–800',
    duration: '100 days',
    blurb: 'Mobile apps with React — Expo, native components, navigation, and publishing.',
    items: [
      { icon: '📱', title: 'React Native', detail: 'Expo · native components · navigation · builds & publishing', source: 'ChaiCode', to: '/mobile' },
    ],
  },
  {
    id: 'p9',
    arcClass: 'y2',
    icon: '🟢',
    label: 'Phase 9 · Express JS / Node JS',
    tagline: 'Days 801–900',
    duration: '100 days',
    blurb: 'The backend for the TypeScript web stack — REST APIs, middleware, and databases.',
    items: [
      { icon: '🟢', title: 'Express JS / Node JS', detail: 'REST APIs · middleware · Prisma · JWT auth & deployment', source: 'ChaiCode', to: '/nextjs' },
    ],
  },
  {
    id: 'p10',
    arcClass: 'y3',
    icon: '☕',
    label: 'Phase 10 · J2SE',
    tagline: 'Days 901–1000',
    duration: '100 days',
    blurb: 'Core Java — the foundation for the enterprise Java phases that follow.',
    items: [
      { icon: '☕', title: 'J2SE', detail: 'Core Java — OOP, collections, exceptions, multithreading', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p11',
    arcClass: 'y3',
    icon: '🏢',
    label: 'Phase 11 · J2EE',
    tagline: 'Days 1001–1100',
    duration: '100 days',
    blurb: 'Enterprise Java — the Java EE ecosystem for large-scale applications.',
    items: [
      { icon: '🏢', title: 'J2EE', detail: 'Servlets · JSP · the Java EE ecosystem', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p12',
    arcClass: 'y3',
    icon: '🗄️',
    label: 'Phase 12 · JPA',
    tagline: 'Days 1101–1200',
    duration: '100 days',
    blurb: 'Java Persistence API — ORM, entities, and database mapping.',
    items: [
      { icon: '🗄️', title: 'JPA', detail: 'ORM · entities · database mapping', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p13',
    arcClass: 'y3',
    icon: '🍃',
    label: 'Phase 13 · Spring Boot',
    tagline: 'Days 1201–1300',
    duration: '100 days',
    blurb: 'Production-grade Java web apps — Spring Boot, Spring Data, REST APIs, and security.',
    items: [
      { icon: '🍃', title: 'Spring Boot', detail: 'Spring Boot · Spring Data · REST APIs · security', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p14',
    arcClass: 'y3',
    icon: '🕸️',
    label: 'Phase 14 · Microservices using Java',
    tagline: 'Days 1301–1400',
    duration: '100 days',
    blurb: 'Microservices architecture — API gateway, service discovery, and distributed systems in Java.',
    items: [
      { icon: '🕸️', title: 'Microservices using Java', detail: 'Microservices architecture · API gateway · service discovery', source: 'Udemy', to: '/java' },
    ],
  },
  {
    id: 'p15',
    arcClass: 'y4',
    icon: '🚀',
    label: 'Phase 15 · DevOps',
    tagline: 'Days 1401–1500',
    duration: '100 days',
    blurb: 'Ship and scale everything — Linux, Docker, Kubernetes, and CI/CD pipelines.',
    items: [
      { icon: '🚀', title: 'DevOps', detail: 'Linux · Docker · Kubernetes · CI/CD pipelines', source: 'KodeKloud', to: '/devops' },
    ],
  },
  {
    id: 'p16',
    arcClass: 'y4',
    icon: '☁️',
    label: 'Phase 16 · AWS Cloud',
    tagline: 'Days 1501–1600',
    duration: '100 days',
    blurb: 'The final phase — core AWS services and cloud architecture, end to end.',
    items: [
      { icon: '☁️', title: 'AWS Cloud', detail: '100 Days of AWS — core services and cloud architecture', source: 'KodeKloud', to: '/aws' },
    ],
  },
];

const STATS = [
  { value: '16', label: 'sequential phases' },
  { value: '1,600', label: 'days of practice' },
  { value: '100', label: 'days per phase' },
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
        <span className="roadmap-hero-badge">📍 Day 0 setup · 16 phases · 1,600 days of practice</span>
        <h1 className="roadmap-hero-title">The 1,600-Day Roadmap</h1>
        <p className="roadmap-hero-sub">
          Starts with <strong>Day 0 — environment setup</strong>, then <strong>16 sequential phases</strong>{' '}
          of <strong>100 days</strong> each — <strong>Python → FastAPI → Agentic AI → JavaScript → TypeScript
          → React JS → Next JS → React Native → Express/Node JS → J2SE → J2EE → JPA → Spring Boot →
          Microservices → DevOps → AWS Cloud</strong> — <strong>1,600 days</strong> of focused, daily
          practice, front to back. Data Structures &amp; System Design are practiced throughout, not a
          separate add-on.
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
        style={{ margin: '8px auto 4px', textAlign: 'center', maxWidth: '620px' }}
      >
        <img
          src="/roadmap-notes/roadmap-1600-days-16-phases.jpg"
          alt="1,600 Days of Code — 16 sequential 100-day phases: Python, FastAPI, Agentic AI, JavaScript, TypeScript, React JS, Next JS, React Native, Express/Node JS, J2SE, J2EE, JPA, Spring Boot, Microservices, DevOps, and AWS Cloud, with Data Structures & System Design practiced throughout."
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
            <p className="roadmap-finish-date">16 phases · 1,600 days, front to back</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">
          Day 0 setup, then 16 sequential 100-day phases: <strong>Python</strong> → <strong>FastAPI</strong> →{' '}
          <strong>Agentic AI using Python</strong> → <strong>JavaScript</strong> → <strong>TypeScript</strong> →{' '}
          <strong>React JS</strong> → <strong>Next JS</strong> → <strong>React Native</strong> →{' '}
          <strong>Express JS / Node JS</strong> → <strong>J2SE</strong> → <strong>J2EE</strong> →{' '}
          <strong>JPA</strong> → <strong>Spring Boot</strong> → <strong>Microservices using Java</strong> →{' '}
          <strong>DevOps</strong> → <strong>AWS Cloud</strong>. Data Structures &amp; System Design are
          practiced throughout every phase, not saved for one dedicated block. 1,600 days end to end
          (16 × 100).
        </p>
        <div className="roadmap-flow-actions">
          <Link to="/python" className="btn btn-lg roadmap-btn-primary">
            Explore Phase 1 · Python
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
