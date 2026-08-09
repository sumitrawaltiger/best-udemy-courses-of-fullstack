import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGSMITH = 'https://docs.smith.langchain.com/';

const LEARNT_TODAY = [
  { title: 'Offline eval sets', text: 'golden tasks with expected final answers or scoring rubrics' },
  { title: 'Online metrics', text: 'success rate, retries, and human takeovers in production' },
  { title: 'Tool metrics', text: 'wrong-tool rate and argument-error rate tell you where graphs break' },
  { title: 'Tracing', text: 'span every LLM and tool call with redacted inputs/outputs' },
  { title: 'Latency & cost', text: 'track p95 latency and $ per successful task — not just accuracy' },
  { title: 'Regression suites', text: 're-run evals on every prompt or graph change before promote' },
  { title: 'Failure taxonomies', text: 'hallucination, loop, tool fail, policy block — label every miss' },
  { title: 'Ship gate', text: 'don’t promote agents that only “feel” better — require numbers' },
];

const CORE = [
  {
    icon: '📋', title: 'Eval Set', titleClass: 'card-title-cyan', subtitle: 'Offline',
    description:
      '30–100 tasks covering happy path and nasty edge cases. Store expected outcomes or judge rubrics.',
    code: 'task_id · input\nexpected · rubric\npass / fail / score',
  },
  {
    icon: '🔭', title: 'Traces', titleClass: 'card-title-purple', subtitle: 'Debug',
    description:
      'OpenTelemetry-style spans or LangSmith (or equivalent). One failed run should be reconstructable from the trace.',
    code: 'span: llm\nspan: tool\nspan: retrieve',
  },
  {
    icon: '📈', title: 'Dashboards', titleClass: 'card-title-amber', subtitle: 'Online',
    description:
      'success%, cost/task, p95 latency, loop rate. Treat agents like services with SLOs.',
    code: 'success% · $/task\np95 · loop_rate',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Scorecard', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Run 10 golden tasks; score pass/fail + notes; compare prompt/graph v1 vs v2 side by side.',
    code: 'v1 vs v2\n10 tasks · scorecard',
  },
  {
    icon: '🔍', title: 'Trace One Fail', titleClass: 'card-title-purple', subtitle: 'Debug',
    description:
      'Pick a failed run; walk the spans; name the failing node (router, tool, merge, or stop rule).',
    code: 'find failing span\n→ fix that node',
  },
  {
    icon: '🔜', title: 'Next: MCP Hands-On', titleClass: 'card-title-amber', subtitle: 'Day 51 Preview',
    description: 'Tomorrow — build and consume MCP servers in a real agent setup.',
    link: { href: '/agentic-day-51', label: 'Go to Day 51 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Agentic Intro', titleClass: 'card-title-cyan', subtitle: 'PY Module 45',
    description: 'Architecture context for what you are measuring — loops, memory, multi-agent.',
    link: { href: '/python/learn/introduction-to-agentic-ai', label: 'Open PY Module 45 →' },
  },
  {
    icon: '📖', title: 'LangSmith Docs', titleClass: 'card-title-purple', subtitle: 'Observability',
    description: 'Tracing, datasets, and evaluation workflows for LangChain / LangGraph apps.',
    link: { href: LANGSMITH, label: 'Open LangSmith docs →', external: true },
  },
  {
    icon: '🕸️', title: 'LangGraph Docs', titleClass: 'card-title-amber', subtitle: 'Graphs',
    description: 'Stateful graphs you instrument — nodes are natural span boundaries.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open LangGraph →', external: true },
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

export default function AgenticDay50() {
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
          <Link to="/agentic-day-49" className="day001-nav-btn day001-nav-prev">← Day 49</Link>
          <p className="day001-datetime">Agentic AI Day 50 · 29 Sep 2026</p>
          <Link to="/agentic-day-51" className="day001-nav-btn day001-nav-next">Day 51 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Eval</span><span>Phase 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 50 <span aria-hidden="true">📏</span></h1>
              <p className="day001-day-theme">AGENT EVALUATION & OBSERVABILITY</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · EVAL</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Day 50 measures agents. Track <strong>task success</strong>, <strong>tool accuracy</strong>, latency/cost, and add
          traces you can debug.
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

        <CardSection icon="📏" title="MEASURE & TRACE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Eval</span><span>#Observability</span><span>#Day50</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
