import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGGRAPH_JS = 'https://langchain-ai.github.io/langgraphjs/';
const HITL = 'https://langchain-ai.github.io/langgraphjs/concepts/human_in_the_loop/';

const LEARNT_TODAY = [
  { title: 'Where LCEL stops', text: 'a linear .pipe() chain can’t easily loop, branch, retry or pause — complex agents need real control flow' },
  { title: 'State', text: 'a typed object that flows through the graph; each node reads it and returns updates to merge in' },
  { title: 'Nodes', text: 'functions that do one step — validate, plan, act, finalize — taking state and returning a partial update' },
  { title: 'Edges', text: 'connect nodes; conditional edges route to different nodes based on the current state' },
  { title: 'Linear flow', text: 'the simplest graph: validate → plan → act → finalize, one node after another' },
  { title: 'Branching & retries', text: 'loop back on failure, cap iterations with a max, and add error boundaries so agents don’t spin forever' },
  { title: 'Checkpointing & replay', text: 'save state at each step so a run can resume, be inspected, or replayed after a crash' },
  { title: 'Human-in-the-loop', text: 'pause at an approve node, wait for a human yes/no, then continue — safe for risky actions' },
];

const WHY = [
  {
    icon: '🚧', title: 'Why LCEL Isn’t Enough', titleClass: 'card-title-cyan', subtitle: 'Beyond A Line',
    description:
      'LCEL pipes data straight through — perfect for fixed chains. But real agents loop, branch on results, retry failures and pause for approval. That needs a graph, not a line.',
    code: '// LCEL: prompt → model → parser (one line)\n// agents need: loop, branch, retry, pause\n// → LangGraph state machine',
  },
  {
    icon: '📦', title: 'State', titleClass: 'card-title-purple', subtitle: 'The Shared Object',
    description:
      'A typed state object flows through the graph. Each node receives it and returns a partial update that LangGraph merges — a single source of truth for the whole run.',
    code: '// types.ts\ninterface State {\n  input: string; plan?: string;\n  result?: string; approved?: boolean;\n}\n// nodes return Partial<State> to merge',
  },
];

const FLOW = [
  {
    icon: '➡️', title: 'Nodes & Edges', titleClass: 'card-title-cyan', subtitle: 'Steps + Routing',
    description:
      'Nodes are single-step functions (validate, plan, act, finalize). Edges connect them; conditional edges pick the next node from the current state — the graph’s decision points.',
    code: 'graph.addNode("plan", planNode)\n     .addNode("act", actNode)\n     .addConditionalEdges("validate",\n        s => s.ok ? "plan" : "finalize");',
  },
  {
    icon: '🔁', title: 'Branch · Retry · Bound', titleClass: 'card-title-purple', subtitle: 'Robust Loops',
    description:
      'Loop back to retry a failed step, cap attempts with a max-iterations guard, and wrap nodes in error boundaries so a single failure degrades gracefully instead of hanging.',
    code: '// on error → route back to "act" (retry)\n// track state.attempts, stop at MAX\n// error boundary → route to "finalize"',
  },
  {
    icon: '⏸️', title: 'Checkpoint & HITL', titleClass: 'card-title-amber', subtitle: 'Resume · Approve',
    description:
      'Checkpointing saves state at each step so runs resume or replay after a crash. Human-in-the-loop pauses at an approve node until a person confirms — essential before risky actions.',
    code: '// checkpointer saves state per step → replay\n// interrupt before "execute" → await human\n// approved? continue : cancel',
  },
];

const RESOURCES = [
  {
    icon: '🕸️', title: 'LangGraph.js', titleClass: 'card-title-cyan', subtitle: 'State Machines',
    description:
      'The graph framework for stateful, controllable agents — nodes, edges, checkpointing and streaming.',
    link: { href: LANGGRAPH_JS, label: 'Open LangGraph.js docs →', external: true },
  },
  {
    icon: '🧑‍⚖️', title: 'Human-in-the-Loop', titleClass: 'card-title-purple', subtitle: 'Approvals',
    description:
      'Interrupt a graph, wait for human approval, then resume — the pattern that makes autonomous agents safe.',
    link: { href: HITL, label: 'Open the HITL guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Orchestration', titleClass: 'card-title-amber', subtitle: 'Day 53 Preview',
    description:
      'Tomorrow — build a real LangGraph.js graph: typed state, nodes (validate → plan → approve → execute → finalize), an HTTP route, and a Next.js inspector.',
    link: { href: '/day-053', label: 'Go to Day 53 →' },
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

export default function Day052() {
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
          <Link to="/day-051" className="day001-nav-btn day001-nav-prev">← Day 51</Link>
          <p className="day001-datetime">Agentic AI Day 52</p>
          <Link to="/day-053" className="day001-nav-btn day001-nav-next">Day 53 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangGraph.js</span><span>State Machines</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 52 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">LANGGRAPH FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          When a linear <strong>LCEL</strong> chain isn’t enough. Complex agents need to <strong>loop, branch, retry
          and pause</strong> — that’s a <strong>graph</strong>, not a line. The mental model is simple:{' '}
          <strong>state</strong> (a typed object that flows through), <strong>nodes</strong> (single steps like
          validate → plan → act → finalize), and <strong>edges</strong> (with conditional routing on the state). Add{' '}
          <strong>branching, retries and max-iterations</strong> with error boundaries so agents stay robust, then{' '}
          <strong>checkpointing</strong> for resume/replay and <strong>human-in-the-loop</strong> approvals before
          risky actions. <em>Next: build a real graph end to end.</em>
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

        <CardSection icon="🚧" title="WHY A GRAPH" cards={WHY} columns={2} />
        <CardSection icon="🕸️" title="NODES · EDGES · STATE" cards={FLOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#LangGraph</span><span>#StateMachine</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
