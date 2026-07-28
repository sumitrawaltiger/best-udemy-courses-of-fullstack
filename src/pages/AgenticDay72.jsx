import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Retries need rules', text: 'retry only transient failures; add jitter and caps' },
  { title: 'Idempotency keys', text: 'safe retries for writes prevent double actions' },
  { title: 'Timeout budgets', text: 'set tool timeouts and propagate cancellation' },
  { title: 'Rate limits', text: 'protect upstream APIs and avoid cascading failures' },
  { title: 'Fallback behavior', text: 'when tools fail, degrade gracefully or ask for help' },
  { title: 'Input validation', text: 'validate tool args before calling anything' },
  { title: 'Observability', text: 'log tool name, latency, status, and decision' },
  { title: 'Safe defaults', text: 'deny risky tools unless explicitly allowed' },
];

const CORE = [
  {
    icon: '🔁', title: 'Reliable Tools', titleClass: 'card-title-cyan', subtitle: 'Retry',
    description:
      'Add bounded retries with backoff + jitter, and classify errors as retryable vs permanent.',
    code: 'retry <= 3',
  },
  {
    icon: '🧾', title: 'Idempotency', titleClass: 'card-title-purple', subtitle: 'Safe Writes',
    description:
      'Pass an idempotency_key for write tools so the same business action is not executed twice.',
    code: 'key per action',
  },
  {
    icon: '🚦', title: 'Rate Limits', titleClass: 'card-title-amber', subtitle: 'Protect',
    description:
      'Throttle tool calls per user/tenant, and enforce concurrency limits to prevent overload.',
    code: 'limits + queues',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Tool Wrapper', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Wrap every tool call with timeout, retries, and structured logs.',
    code: 'timeout + retry',
  },
  {
    icon: '📉', title: 'Failure Drill', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Simulate tool outages and confirm the agent degrades safely.',
    code: 'fail -> recover',
  },
  {
    icon: '🔜', title: 'Next: Memory', titleClass: 'card-title-amber', subtitle: 'Day 73',
    description: 'Tomorrow → long-term memory patterns for production agents.',
    link: { href: '/agentic-day-73', label: 'Go to Day 73 →' },
  },
];

const RESOURCES = [
  {
    icon: '📖', title: '12-Factor', titleClass: 'card-title-cyan', subtitle: 'Ops',
    description: 'Operational principles that apply to agent services too.',
    link: { href: 'https://12factor.net/', label: 'Open →', external: true },
  },
  {
    icon: '📖', title: 'AWS Retry Guidance', titleClass: 'card-title-purple', subtitle: 'Retries',
    description: 'Backoff and retry strategies to avoid thundering herds.',
    link: { href: 'https://docs.aws.amazon.com/general/latest/gr/api-retries.html', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Most agent failures are tool failures. Make tools boring and reliable.',
    footer: 'Reliability beats cleverness.',
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

export default function AgenticDay72() {
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
          <Link to="/agentic-day-71" className="day001-nav-btn day001-nav-prev">← Day 71</Link>
          <p className="day001-datetime">Agentic AI Day 72 · 13 Sep 2026</p>
          <Link to="/agentic-day-73" className="day001-nav-btn day001-nav-next">Day 73 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Tools</span><span>Day 72</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 72 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">TOOL RELIABILITY & RESILIENCE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · TOOLS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Day 72 makes tools reliable: bounded retries, idempotency for writes, timeouts, and rate limits.
          Agentic systems fail at the tool boundary first, so harden that boundary.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🔁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Tools</span><span>#Day72</span><span>#Reliability</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

