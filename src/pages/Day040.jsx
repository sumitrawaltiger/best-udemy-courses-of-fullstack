import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture24';

const LEARNT_TODAY = [
  { title: 'State is the whole contract', text: 'in LangGraph, nodes communicate ONLY through a shared state — Node A writes, Node B reads' },
  { title: 'Annotation.Root', text: 'the AgentState defines every field up front so checkpoints stay compatible as the graph grows' },
  { title: 'Reducers', text: 'simple fields use last-write-wins; accumulating arrays use a merge reducer to combine old + new' },
  { title: 'PM Agent', text: 'turns a raw requirement into a clear spec, asking clarifying questions via a humanInput node' },
  { title: 'Architect in 5 steps', text: 'entities → DB schema → API endpoints → frontend pages → folder structure' },
  { title: 'blueprintValidator', text: 'cross-checks the whole blueprint before planning — a router sends it back if it fails' },
  { title: 'Sandbox + health check', text: 'spin up a Docker sandbox, then verify DB, node_modules and ports before building' },
  { title: 'Checkpoint everything', text: 'MemorySaver persists state after each node, so a crash resumes instead of restarting' },
];

const STATE = [
  {
    icon: '📦', title: 'The Shared State', titleClass: 'card-title-cyan', subtitle: 'Annotation.Root',
    description:
      'Define the full state shape once with Annotation.Root. Each field notes which node owns it. Nodes never call each other — they only read and write this object.',
    code: 'import { Annotation } from "@langchain/langgraph";\n\nexport const AgentState = Annotation.Root({\n  userRequirement: Annotation({ reducer: (_, y) => y ?? "", default: () => "" }),\n  spec: Annotation({ reducer: (_, y) => y, default: () => null }),\n  // ...all 30 nodes’ fields\n});',
  },
  {
    icon: '➕', title: 'Reducers', titleClass: 'card-title-purple', subtitle: 'How Updates Merge',
    description:
      'A reducer decides how a node’s output updates the state. Simple values overwrite (last write wins); lists that grow use a merge reducer so nothing is lost.',
    code: '// simple field:  reducer: (_, y) => y        (overwrite)\n// growing list:  reducer: (x, y) => [...x, ...y] (merge)',
  },
];

const PLAN = [
  {
    icon: '📋', title: 'PM → Architect → Planner', titleClass: 'card-title-cyan', subtitle: 'Design The Work',
    description:
      'The PM clarifies the requirement into a spec (looping through humanInput for answers). The Architect designs the blueprint in five steps. The Planner turns it into an ordered task list.',
    code: '// pmAgent → spec (needs_clarification → humanInput)\n// architectStep1..5 → blueprint\n// plannerAgent → phased, dependency-ordered tasks',
  },
  {
    icon: '✅', title: 'Validate, Then Proceed', titleClass: 'card-title-purple', subtitle: 'A Router',
    description:
      'blueprintValidator checks the design and a router decides the next edge — proceed to planning if valid, or loop back to the Architect to fix it. Conditional edges in action.',
    code: 'graph.addConditionalEdges("blueprintValidator", blueprintValidatorRouter, {\n  valid: "plannerAgent",\n  invalid: "architectStep1", // redesign\n});',
  },
  {
    icon: '🐳', title: 'Sandbox & Health Check', titleClass: 'card-title-amber', subtitle: 'Ready To Build',
    description:
      'setupSandbox creates a Docker environment; sandboxHealthCheck then verifies the database, node_modules and ports are actually up before any code is written into it.',
    code: '// setupSandbox → Docker sandbox\n// sandboxHealthCheck → verify DB, deps, ports\n// (router: healthy → build · unhealthy → retry)',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 24', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The ai-dev-team phase-3 project — the state, graph, PM/Architect/Planner agents, blueprint validator and sandbox nodes.',
    link: { href: GH_LECTURE, label: 'Open Lecture 24 →', external: true },
  },
  {
    icon: '🧩', title: 'It’s A LangGraph', titleClass: 'card-title-purple', subtitle: 'Everything Applies',
    description:
      'This uses Day 20’s LangGraph directly — state, nodes, conditional edges, routers and MemorySaver checkpoints — now for a real multi-agent build.',
    footer: 'state · nodes · routers · checkpoints',
  },
  {
    icon: '🔜', title: 'Next: The Full Team', titleClass: 'card-title-amber', subtitle: 'Prereq 25 Preview',
    description:
      'Tomorrow completes it — Lecture 25: the Coder, Reviewer, Executor and Debugger agents, the dev loop, snapshots/rollback and escalation.',
    link: { href: '/day-041', label: 'Go to Prereq 25 →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function Day040() {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-039" className="day001-nav-btn day001-nav-prev">← Prereq 23</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 24</p>
          <Link to="/day-041" className="day001-nav-btn day001-nav-next">Prereq 25 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 24</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 24 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">AI DEV TEAM — PLANNING AGENTS &amp; SANDBOX</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">PREREQUISITE · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '24%' }} /></div>

        <p className="day001-summary">
          Lecture 24 — the build begins. The heart of it is the <strong>LangGraph state</strong>: defined once with{' '}
          <code>Annotation.Root</code>, it is the <strong>only</strong> way nodes talk, with{' '}
          <strong>reducers</strong> that overwrite simple fields and merge growing lists. The{' '}
          <strong>planning agents</strong> run — <strong>PM</strong> (spec, via humanInput),{' '}
          <strong>Architect</strong> (5-step blueprint), <strong>blueprintValidator</strong> (with a router), and{' '}
          <strong>Planner</strong> — then a <strong>Docker sandbox</strong> is set up and{' '}
          <strong>health-checked</strong>. Every node <strong>checkpoints</strong> so a crash resumes.{' '}
          <em>Next: the coding agents.</em>
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📦" title="THE LANGGRAPH STATE" cards={STATE} columns={2} />
        <CardSection icon="📋" title="PLANNING & SANDBOX" cards={PLAN} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#AIDevTeam</span><span>#LangGraph</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
