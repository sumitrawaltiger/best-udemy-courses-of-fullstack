import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_DESIGN = 'https://github.com/Rohitnegi9/STRIKEGenAI/blob/main/Lecture23/ai-dev-team-design-v2.md';
const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture23';

const LEARNT_TODAY = [
  { title: 'Design before code', text: 'a full V2 design document lays out the whole system — 8 agents and a 30-node LangGraph flow' },
  { title: 'The tech stack', text: 'LangGraph (JS) + Gemini + Pinecone (memory) + Docker (sandbox) + Redis (checkpoints) + Git (rollback)' },
  { title: 'Fixed app stack', text: 'every project is React + Express + PostgreSQL/MongoDB, which keeps agent prompts focused' },
  { title: 'Architect in 5 steps', text: 'entities → DB schema → API endpoints → frontend pages → folder structure & package.json' },
  { title: 'Blueprint validation', text: 'a blueprintValidator cross-checks the design before any code is written — no orphan APIs or bad FKs' },
  { title: 'V2 fixes 10 loopholes', text: 'state persistence, rollback, pattern consistency, token budgets, scope-drift limits, sandbox health, and more' },
  { title: 'State is the contract', text: 'the whole 30-node flow communicates through one carefully designed shared state' },
];

const SYSTEM = [
  {
    icon: '📐', title: 'The System', titleClass: 'card-title-cyan', subtitle: '8 Agents · 30 Nodes',
    description:
      'An autonomous team that understands a requirement, plans it, writes and debugs code, tests it, takes feedback, iterates and deploys — modelled as a 30-node LangGraph flow.',
    code: '// 8 agents: PM, Architect, Planner, Coder,\n//           Reviewer, Executor, Debugger, Deploy\n// orchestrated as a 30-node LangGraph',
  },
  {
    icon: '🧰', title: 'The Tech Stack', titleClass: 'card-title-purple', subtitle: 'Production Pieces',
    description:
      'LangGraph orchestrates; Gemini is the LLM; Pinecone is long-term memory; Docker sandboxes code execution; Redis checkpoints state; Git enables rollback.',
    code: '// LangGraph · Gemini · Pinecone\n// Docker (sandbox) · Redis (checkpoints) · Git (rollback)\n// app: React + Express + PostgreSQL/MongoDB',
  },
];

const FLOW = [
  {
    icon: '📋', title: 'PM → Spec', titleClass: 'card-title-cyan', subtitle: 'Remove Ambiguity',
    description:
      'The flow starts with the PM agent: it reads the requirement, asks clarifying questions (via humanInput), and produces a precise spec everything else builds on.',
    code: '// pmAgent → { status: "needs_clarification", questions }\n//         or { status: "spec_ready", spec }',
  },
  {
    icon: '🏛️', title: 'Architect · 5 Steps', titleClass: 'card-title-purple', subtitle: 'Blueprint',
    description:
      'The Architect designs in five passes — entities and relationships, DB schema, API endpoints, frontend pages, then the folder structure and pinned dependencies.',
    code: '// step1 entities → step2 DB schema → step3 APIs\n// → step4 pages → step5 folders + package.json\n// = one complete blueprint',
  },
  {
    icon: '✅', title: 'Validate The Blueprint', titleClass: 'card-title-amber', subtitle: 'Before Any Code',
    description:
      'blueprintValidator cross-checks the design: every API maps to a DB path, every page calls a real API, every foreign key references a real table, every spec entity is covered.',
    code: '// no orphan endpoints · valid foreign keys\n// every page → real API · full spec coverage\n// catch design bugs before writing code',
  },
];

const V2 = [
  {
    icon: '💾', title: 'Survives Crashes', titleClass: 'card-title-cyan', subtitle: 'Checkpointing',
    description:
      'Every node checkpoints its state to Redis, so a crash resumes instead of losing everything. Combined with Git auto-commits, the team can also roll back bad code.',
    code: '// checkpoint after every node → resume on crash\n// git commit after every task → rollback on failure',
  },
  {
    icon: '🧮', title: 'Token Budgets', titleClass: 'card-title-purple', subtitle: 'No Token Bombs',
    description:
      'State selectors per agent and a registry compactor stop the shared state (and the token bill) from growing without bound. A token tracker enforces budget limits.',
    code: '// per-agent state selectors · stateCompactor\n// tokenTracker with budget limits',
  },
  {
    icon: '🛟', title: 'Scope & Safety', titleClass: 'card-title-amber', subtitle: '10 Loopholes Fixed',
    description:
      'V2 adds iteration limits with scope-drift detection, sandbox health checks, parallel independent tasks, and escalation instead of blindly force-approving rejected code.',
    footer: '22 → 30 nodes · robustness over cleverness',
  },
];

const RESOURCES = [
  {
    icon: '📄', title: 'The Design Doc', titleClass: 'card-title-cyan', subtitle: 'V2 Markdown',
    description:
      'The complete system design (V2) — agents, the 30-node flow, the state shape, and every loophole fix — read it in full in the repo.',
    link: { href: GH_DESIGN, label: 'Open the design doc →', external: true },
  },
  {
    icon: '💻', title: 'Lecture 23', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description:
      'The design lecture folder in the STRIKE GenAI repo — the plan for the AI Dev Team built over the next lectures.',
    link: { href: GH_LECTURE, label: 'Open Lecture 23 →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Build The Planners', titleClass: 'card-title-amber', subtitle: 'Day 24 Preview',
    description:
      'Tomorrow the build starts — Lecture 24: the LangGraph state, the PM/Architect/Planner agents, the blueprint validator, and the Docker sandbox.',
    link: { href: '/genai-day-24', label: 'Go to Day 24 →' },
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

export default function GenaiDay23() {
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
          <Link to="/genai-day-22" className="day001-nav-btn day001-nav-prev">← Day 22</Link>
          <p className="day001-datetime">Agentic AI Day 23</p>
          <Link to="/genai-day-24" className="day001-nav-btn day001-nav-next">Day 24 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 23</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 23 <span aria-hidden="true">📐</span></h1>
              <p className="day001-day-theme">AI DEV TEAM — SYSTEM DESIGN</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '23%' }} /></div>

        <p className="day001-summary">
          Lecture 23 — the <strong>system design</strong> (V2). Before a line of code, the whole thing is designed:{' '}
          <strong>8 agents</strong> orchestrated as a <strong>30-node LangGraph</strong> flow, on a stack of{' '}
          <strong>Gemini + Pinecone + Docker + Redis + Git</strong>, always building{' '}
          <strong>React + Express + PostgreSQL/MongoDB</strong>. The <strong>Architect</strong> designs in five steps,
          a <strong>blueprintValidator</strong> cross-checks it, and <strong>V2 fixes 10 loopholes</strong> —
          checkpointing, rollback, pattern consistency, token budgets, scope-drift limits and more.{' '}
          <em>Robustness first. (Design-doc lecture — read it in the repo.)</em>
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

        <CardSection icon="📐" title="THE SYSTEM & STACK" cards={SYSTEM} columns={2} />
        <CardSection icon="📋" title="THE PLANNING FLOW" cards={FLOW} columns={3} />
        <CardSection icon="🛟" title="V2 — BUILT TO SURVIVE" cards={V2} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#AIDevTeam</span><span>#LangGraph</span><span>#SystemDesign</span>
        </footer>
      </div>
    </div>
  );
}
