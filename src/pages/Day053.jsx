import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGGRAPH_JS = 'https://langchain-ai.github.io/langgraphjs/';
const TOOLS = 'https://js.langchain.com/docs/concepts/tools/';

const LEARNT_TODAY = [
  { title: 'A real graph, end to end', text: 'turn yesterday’s theory into a running LangGraph.js graph with typed state and five nodes' },
  { title: 'Typed state in types.ts', text: 'one interface defines the whole run — input, plan, approval, result — so every node is type-safe' },
  { title: 'validate node', text: 'check and normalise the input first; a bad request routes straight to finalize' },
  { title: 'plan node', text: 'the model drafts a plan of what to do before doing anything' },
  { title: 'approve node', text: 'a human-in-the-loop gate — pause until a person approves the plan' },
  { title: 'execute node', text: 'run the approved plan, calling LangChain tools that plug in cleanly as node steps' },
  { title: 'finalize node', text: 'assemble the result into strict JSON, whether the run succeeded, was denied, or failed' },
  { title: 'HTTP + inspector', text: 'an HTTP route runs the graph; a Next.js UI inspects each node’s state and outcome' },
];

const GRAPH = [
  {
    icon: '📄', title: 'Typed State', titleClass: 'card-title-cyan', subtitle: 'types.ts',
    description:
      'A single interface is the contract for the entire run. Every node receives it and returns a partial update — no loose objects, full autocomplete, and a clear picture of what each step changes.',
    code: '// types.ts\ninterface State {\n  input: string; plan?: string;\n  approved?: boolean; result?: string;\n  error?: string;\n}',
  },
  {
    icon: '🔧', title: 'Tools As Node Steps', titleClass: 'card-title-purple', subtitle: 'Clean Plug-In',
    description:
      'LangChain tools drop straight into the execute node. The node calls a tool the same way an agent would, but inside the graph’s controlled, inspectable flow.',
    code: '// inside execute node\nconst out = await searchTool.invoke({ query });\nreturn { result: summarise(out) };\n// tools = reusable node capabilities',
  },
];

const NODES = [
  {
    icon: '🧱', title: 'The Five Nodes', titleClass: 'card-title-cyan', subtitle: 'Validate → Finalize',
    description:
      'validate → plan → approve → execute → finalize. Each is a small function of state. Conditional edges route around them — bad input skips to finalize, a denied plan cancels.',
    code: 'graph.addNode("validate", validate)\n     .addNode("plan", plan)\n     .addNode("approve", approve)\n     .addNode("execute", execute)\n     .addNode("finalize", finalize);',
  },
  {
    icon: '🧑‍⚖️', title: 'Approve Gate (HITL)', titleClass: 'card-title-purple', subtitle: 'Pause For A Human',
    description:
      'The approve node interrupts the run and waits. A human sees the plan and says yes or no; only then does execute run. Safe autonomy for anything with real-world side effects.',
    code: '// interrupt before execute\n// human reviews state.plan\n// approved ? → execute : → finalize (cancelled)',
  },
  {
    icon: '🖥️', title: 'HTTP + Inspector', titleClass: 'card-title-amber', subtitle: 'Run & Observe',
    description:
      'An HTTP route kicks off the graph and streams progress. A Next.js inspector shows each node’s state transition and the final JSON outcome — you can watch the agent think.',
    code: '// POST /graph/run { input }\n// → streams node updates\n// Next.js UI: per-node state + final result',
  },
];

const RESOURCES = [
  {
    icon: '🕸️', title: 'LangGraph.js', titleClass: 'card-title-cyan', subtitle: 'Build The Graph',
    description:
      'StateGraph, nodes, conditional edges, interrupts and streaming — everything this project is built from.',
    link: { href: LANGGRAPH_JS, label: 'Open LangGraph.js docs →', external: true },
  },
  {
    icon: '🔧', title: 'LangChain Tools', titleClass: 'card-title-purple', subtitle: 'Node Capabilities',
    description:
      'The tools that plug into the execute node — defined once with Zod schemas, reused across chains and graphs.',
    link: { href: TOOLS, label: 'Open the tools guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Deploy & Observe', titleClass: 'card-title-amber', subtitle: 'Day 54 Preview',
    description:
      'Tomorrow — tracing with LangSmith, deploying the graph to LangGraph Cloud, and testing via API + human approve/deny flows.',
    link: { href: '/day-054', label: 'Go to Day 54 →' },
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

export default function Day053() {
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
          <Link to="/day-052" className="day001-nav-btn day001-nav-prev">← Day 52</Link>
          <p className="day001-datetime">Agentic AI Day 53</p>
          <Link to="/day-054" className="day001-nav-btn day001-nav-next">Day 54 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangGraph.js</span><span>Project</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 53 <span aria-hidden="true">🕸️</span></h1>
              <p className="day001-day-theme">LANGGRAPH ORCHESTRATION PROJECT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Theory into a running graph. A single <strong>typed state</strong> in <code>types.ts</code> is the contract
          for the whole run, and five <strong>nodes</strong> move it along:{' '}
          <strong>validate → plan → approve → execute → finalize</strong>. The <strong>approve</strong> node is a{' '}
          <strong>human-in-the-loop</strong> gate — the run pauses until a person okays the plan — and{' '}
          <strong>LangChain tools</strong> plug straight into <strong>execute</strong> as node capabilities.{' '}
          <strong>finalize</strong> always returns strict JSON, whether the run succeeded, was denied, or errored. An{' '}
          <strong>HTTP route</strong> runs it and a <strong>Next.js inspector</strong> shows each node’s state — you can
          watch the agent think. <em>Next: ship it and trace it.</em>
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

        <CardSection icon="📄" title="STATE & TOOLS" cards={GRAPH} columns={2} />
        <CardSection icon="🧱" title="NODES · HITL · UI" cards={NODES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#LangGraph</span><span>#HITL</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
