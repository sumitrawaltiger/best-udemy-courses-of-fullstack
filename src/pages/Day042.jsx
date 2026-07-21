import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture26';

const LEARNT_TODAY = [
  { title: 'From CLI to web app', text: 'wrap the multi-agent LangGraph in a full-stack app so you can watch it work in a browser' },
  { title: 'Real-time with WebSockets', text: 'the server streams graph-execution events to the client as they happen — no polling' },
  { title: 'Server → client events', text: 'node_complete, human_input_needed, token_update and run_complete drive the live UI' },
  { title: 'Client → server events', text: 'human_response and cancel let the user answer questions and stop a run from the UI' },
  { title: 'The dashboard', text: 'a PipelineVisualizer, LogStream, HumanInputPanel, TokenBudgetBar and OutputPanel in React' },
  { title: 'graphRunner service', text: 'the Express server runs the LangGraph and emits events; multiple tabs can watch one project' },
  { title: 'It feels like a product', text: 'React (Vite) frontend + Express backend + WebSocket turn the agent team into a real tool' },
];

const STACK = [
  {
    icon: '🖥️', title: 'CLI → Full-Stack', titleClass: 'card-title-cyan', subtitle: 'Server + Dashboard',
    description:
      'The agent team ran in a terminal; now an Express server runs the graph and a React (Vite) dashboard shows it. A WebSocket ties the two together in real time.',
    code: '// server → runs the LangGraph, emits events\n// dashboard → React UI, subscribes over WebSocket\n// ws://server/ws?projectId=xxx',
  },
  {
    icon: '🔌', title: 'The WebSocket', titleClass: 'card-title-purple', subtitle: 'Live, Two-Way',
    description:
      'Each connection is tied to a project. The server pushes events as the graph runs; the client sends back the user’s answers. Multiple tabs can watch the same run.',
    code: '// server → client\n{ type: "node_complete", node: "pmAgent", data }\n{ type: "human_input_needed", questions }\n{ type: "token_update", usage }\n{ type: "run_complete", finalState }',
  },
];

const UI = [
  {
    icon: '🧭', title: 'See The Pipeline', titleClass: 'card-title-cyan', subtitle: 'PipelineVisualizer',
    description:
      'As each node finishes, the visualizer lights up the current agent — PM, Architect, Coder, Reviewer — so you can literally watch the team move through the build.',
    code: '// node_complete → highlight that agent\n// the graph animates as work progresses',
  },
  {
    icon: '💬', title: 'Answer & Control', titleClass: 'card-title-purple', subtitle: 'HumanInputPanel',
    description:
      'When the PM needs clarification or the team escalates, a panel pops up. Your reply is sent back over the socket and the graph resumes — human-in-the-loop, in a UI.',
    code: '// client → server\n{ type: "human_response", inputType, data }\n{ type: "cancel" }',
  },
  {
    icon: '📊', title: 'Logs & Budget', titleClass: 'card-title-amber', subtitle: 'LogStream · TokenBudgetBar',
    description:
      'A live log stream shows what each agent is doing, and a token-budget bar tracks spend against the limit in real time — observability for an autonomous system.',
    code: '// token_update → grow the budget bar\n// every log line streams into the UI',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 26', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The AIDevFinal project — the React dashboard, the Express server, the WebSocket handler and the graphRunner over the full agent team.',
    link: { href: GH_LECTURE, label: 'Open Lecture 26 →', external: true },
  },
  {
    icon: '👀', title: 'Observability', titleClass: 'card-title-purple', subtitle: 'Watch The Agents',
    description:
      'A live UI over an autonomous system is huge for trust and debugging — you can see exactly what each agent did, what it cost, and step in when needed.',
    footer: 'pipeline · logs · human input · token budget',
  },
  {
    icon: '🔜', title: 'Next: Under The Hood', titleClass: 'card-title-amber', subtitle: 'Prereq 27 Preview',
    description:
      'Tomorrow goes to the metal — Lecture 27: build a neural network from scratch in C++ to see exactly how the "magic" underneath every LLM actually works.',
    link: { href: '/day-043', label: 'Go to Prereq 27 →' },
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

export default function Day042() {
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
          <Link to="/day-041" className="day001-nav-btn day001-nav-prev">← Prereq 25</Link>
          <p className="day001-datetime">Prerequisite · Gen AI 26</p>
          <Link to="/day-043" className="day001-nav-btn day001-nav-next">Prereq 27 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Prerequisite</span><span>Gen AI</span><span>Lecture 26</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">PREREQ 26 <span aria-hidden="true">📊</span></h1>
              <p className="day001-day-theme">AI DEV TEAM — THE LIVE DASHBOARD</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '26%' }} /></div>

        <p className="day001-summary">
          Lecture 26 — a <strong>live dashboard</strong> over the AI Dev Team. An <strong>Express server</strong> runs
          the LangGraph while a <strong>React</strong> dashboard watches it over a <strong>WebSocket</strong>. The
          server streams events — <code>node_complete</code>, <code>human_input_needed</code>,{' '}
          <code>token_update</code>, <code>run_complete</code> — and the client sends back{' '}
          <code>human_response</code> and <code>cancel</code>. A <strong>PipelineVisualizer</strong> shows the current
          agent, a <strong>LogStream</strong> shows the work, and a <strong>TokenBudgetBar</strong> tracks spend. The
          autonomous team finally feels like a real product. <em>Next: how it all works underneath.</em>
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

        <CardSection icon="🖥️" title="CLI → FULL-STACK APP" cards={STACK} columns={2} />
        <CardSection icon="📊" title="THE DASHBOARD" cards={UI} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#AIDevTeam</span><span>#WebSocket</span><span>#React</span>
        </footer>
      </div>
    </div>
  );
}
