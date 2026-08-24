import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGSMITH = 'https://docs.smith.langchain.com/';
const LANGFUSE = 'https://langfuse.com/docs';

const LEARNT_TODAY = [
  { title: 'AgentOps idea', text: 'operate agents like products — traces, evals, cost, and releases in one loop' },
  { title: 'Trace every hop', text: 'LLM, tool, retrieve, and human-approval spans with redacted payloads' },
  { title: 'Platforms', text: 'LangSmith, Langfuse, Opik, AgentOps — pick one and instrument deeply' },
  { title: 'Online + offline', text: 'production metrics plus golden datasets on every graph change' },
  { title: 'Cost attribution', text: 'tag runs by tenant, feature, and prompt/graph version' },
  { title: 'Session replay', text: 'rebuild a failed user journey from the trace for debugging' },
  { title: 'Alert hooks', text: 'wire quality/cost burns to Slack/Pager — same as Day 64, now with spans' },
  { title: 'Privacy', text: 'PII scrubbers before traces leave your VPC' },
];

const CORE = [
  {
    icon: '🔭', title: 'Span Model', titleClass: 'card-title-cyan', subtitle: 'Trace',
    description:
      'Root = user task. Children = llm, tool, retrieve. Attach version tags on the root.',
    code: 'task\n ├─ retrieve\n ├─ llm\n └─ tool',
  },
  {
    icon: '📊', title: 'Eval Hooks', titleClass: 'card-title-purple', subtitle: 'Quality',
    description:
      'On finish, score faithfulness/relevance asynchronously. Store scores next to the trace id.',
    code: 'run → score async\nattach to trace_id',
  },
  {
    icon: '💰', title: 'Cost Tags', titleClass: 'card-title-amber', subtitle: 'Money',
    description:
      'Every span records tokens and $. Roll up by customer and release version for chargebacks.',
    code: 'tags: tenant, ver\n$sum / success',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Instrument One Graph', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Add tracing to a 3-node LangGraph. Confirm you can open a failed run and name the bad node.',
    code: '3 nodes · traced\nfail → find span',
  },
  {
    icon: '📒', title: 'Ops Checklist', titleClass: 'card-title-purple', subtitle: 'Process',
    description:
      'Write: what you log, what you redact, who gets paged, and the weekly eval ritual.',
    code: 'log · redact\npage · weekly eval',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 85 Preview',
    description: 'Tomorrow — multi-framework agents and a Phase 12 portfolio milestone.',
    link: { href: '/agentic-day-85', label: 'Go to Day 85 →' },
  },
];

const RESOURCES = [
  {
    icon: '📏', title: 'Eval Day 50', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Offline eval and ship gates — the quality half of AgentOps.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🔭', title: 'LangSmith', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Tracing and datasets for LangChain / LangGraph apps.',
    link: { href: LANGSMITH, label: 'Open LangSmith →', external: true },
  },
  {
    icon: '📡', title: 'Langfuse', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Open-source LLM engineering platform — traces, prompts, evals.',
    link: { href: LANGFUSE, label: 'Open Langfuse →', external: true },
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

export default function AgenticDay84() {
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
          <Link to="/agentic-day-83" className="day001-nav-btn day001-nav-prev">← Day 83</Link>
          <p className="day001-datetime">Agentic AI Day 84 · 16 Nov 2026</p>
          <Link to="/agentic-day-85" className="day001-nav-btn day001-nav-next">Day 85 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>AgentOps</span><span>Observability</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 84 <span aria-hidden="true">🔭</span></h1>
              <p className="day001-day-theme">AGENTOPS & OBSERVABILITY PLATFORMS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · AGENTOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '56%' }} /></div>

        <p className="day001-summary">
          Day 84 operationalizes agents. Instrument <strong>traces</strong>, hook <strong>evals</strong>, and attribute{' '}
          <strong>cost</strong> with platforms like LangSmith or Langfuse.
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

        <CardSection icon="🔭" title="AGENTOPS LOOP" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgentOps</span><span>#Observability</span><span>#Day84</span><span>#LangSmith</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
