import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGSMITH = 'https://docs.smith.langchain.com/';
const LANGGRAPH_CLOUD = 'https://langchain-ai.github.io/langgraphjs/cloud/';

const LEARNT_TODAY = [
  { title: 'Observability is mandatory', text: 'in production you can’t debug what you can’t see — tracing is not optional for agents' },
  { title: 'What LangSmith captures', text: 'every run as spans: prompts, model calls, tool inputs/outputs, latency, tokens and errors' },
  { title: 'Wire it in with env', text: 'a couple of env vars turn tracing on for your JS agents — no code rewrite needed' },
  { title: 'Debug real failures', text: 'replay a failed run, see exactly which node and prompt broke, and fix the actual cause' },
  { title: 'Cost & latency visibility', text: 'per-run token and time metrics show where the money and the slowness actually go' },
  { title: 'Deploy to LangGraph Cloud', text: 'push a LangGraph graph to managed infra so it runs as a real service, not a laptop script' },
  { title: 'Test via API', text: 'hit the deployed graph over HTTP; kick off runs and read results programmatically' },
  { title: 'HITL in production', text: 'the approve/deny gate works over the API too — pause, notify a human, resume on approval' },
];

const OBSERVE = [
  {
    icon: '🔭', title: 'Why Tracing', titleClass: 'card-title-cyan', subtitle: 'See Every Step',
    description:
      'Agents are multi-step and non-deterministic — when one fails, logs aren’t enough. Tracing records the whole run so you can see exactly what happened and why.',
    footer: 'no observability → no real debugging in prod',
  },
  {
    icon: '🧵', title: 'LangSmith', titleClass: 'card-title-purple', subtitle: 'Spans & Prompts',
    description:
      'Connect your JS agents to LangSmith and every run becomes a trace of spans: prompts, model calls, tool I/O, tokens, latency and errors — searchable and replayable.',
    code: '// .env\nLANGCHAIN_TRACING_V2=true\nLANGCHAIN_API_KEY=ls_...\nLANGCHAIN_PROJECT="agent-platform"\n// runs now show up as traces automatically',
  },
];

const DEPLOY = [
  {
    icon: '☁️', title: 'LangGraph Cloud', titleClass: 'card-title-cyan', subtitle: 'Managed Runtime',
    description:
      'Deploy your LangGraph graph to managed infrastructure. It runs as a durable service with persistence and checkpointing, not a process that dies when your laptop sleeps.',
    code: '// define graph → deploy to LangGraph Cloud\n// get a hosted endpoint + persistence\n// checkpoints & replay come built in',
  },
  {
    icon: '🔌', title: 'Test Via API', titleClass: 'card-title-purple', subtitle: 'HTTP Runs',
    description:
      'The deployed graph is reachable over HTTP. Start runs, poll or stream results, and inspect state — the same graph you built locally, now callable from anywhere.',
    code: '// POST /runs { input }\n// → runId; stream / poll for output\n// same typed state, now hosted',
  },
  {
    icon: '🧑‍⚖️', title: 'HITL Over The API', titleClass: 'card-title-amber', subtitle: 'Approve / Deny',
    description:
      'Human-in-the-loop survives deployment: the graph interrupts at the approve node, your app notifies a human, and the run resumes on approve or cancels on deny.',
    code: '// run interrupts at "approve"\n// app surfaces the plan → human decides\n// POST /runs/:id/resume { approved }',
  },
];

const RESOURCES = [
  {
    icon: '🧵', title: 'LangSmith', titleClass: 'card-title-cyan', subtitle: 'Tracing',
    description:
      'Observability for LLM apps — traces, prompts, token/latency metrics, datasets and evals. The debugging surface for every agent you ship.',
    link: { href: LANGSMITH, label: 'Open LangSmith docs →', external: true },
  },
  {
    icon: '☁️', title: 'LangGraph Cloud', titleClass: 'card-title-purple', subtitle: 'Deploy',
    description:
      'Managed hosting for LangGraph graphs — persistence, checkpointing, streaming and HITL over an API.',
    link: { href: LANGGRAPH_CLOUD, label: 'Open the deploy guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Agentic RAG', titleClass: 'card-title-amber', subtitle: 'Day 55 Preview',
    description:
      'Tomorrow — the finale: production-ish Agentic RAG with a real vector DB, tools, cite-if-used policies, and a Next.js UI.',
    link: { href: '/day-055', label: 'Go to Day 55 →' },
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

export default function Day054() {
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
          <Link to="/day-053" className="day001-nav-btn day001-nav-prev">← Day 53</Link>
          <p className="day001-datetime">Agentic AI Day 54</p>
          <Link to="/day-055" className="day001-nav-btn day001-nav-next">Day 55 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>LangSmith</span><span>Deploy</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 54 <span aria-hidden="true">🔭</span></h1>
              <p className="day001-day-theme">DEPLOYING &amp; OBSERVING AGENTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '54%' }} /></div>

        <p className="day001-summary">
          Ship it and see inside it. <strong>Observability is mandatory</strong> — agents are multi-step and
          non-deterministic, so you can’t debug what you can’t trace. <strong>LangSmith</strong> turns every run into{' '}
          <strong>spans</strong>: prompts, model calls, tool I/O, tokens, latency and errors — switched on with a
          couple of <strong>env vars</strong>, no rewrite. Then <strong>deploy</strong> the LangGraph graph to{' '}
          <strong>LangGraph Cloud</strong> so it runs as a durable service with persistence and checkpointing.{' '}
          <strong>Test via API</strong>, and keep <strong>human-in-the-loop</strong> alive in production — the graph
          pauses at approve, notifies a human, and resumes on <code>{'{ approved }'}</code>.{' '}
          <em>Next: the Agentic RAG finale.</em>
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

        <CardSection icon="🔭" title="OBSERVABILITY" cards={OBSERVE} columns={2} />
        <CardSection icon="☁️" title="DEPLOY & TEST" cards={DEPLOY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#LangSmith</span><span>#LangGraph</span><span>#Observability</span>
        </footer>
      </div>
    </div>
  );
}
