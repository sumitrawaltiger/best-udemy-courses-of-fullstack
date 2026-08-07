import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Async jobs", text: "long agent runs belong on a queue, not a single HTTP request" },
  { title: "Idempotency", text: "retries must not double-charge or double-send" },
  { title: "Backoff", text: "retry transient tool/LLM failures with jitter" },
  { title: "Dead-letter", text: "poison messages go to DLQ for humans" },
  { title: "Feature flags", text: "canary new graphs to 5% of traffic" },
  { title: "SLOs", text: "define success rate and latency targets" },
  { title: "Cost envelopes", text: "per-tenant budgets and kill switches" },
  { title: "Runbooks", text: "what on-call does when loop rate spikes" },
];

const CORE = [
  {
    icon: "📥", title: "Queue Pattern", titleClass: 'card-title-cyan', subtitle: "Async",
    description:
      "API enqueues job; worker runs graph; client polls result.",
    code: "enqueue → worker → result",
  },
  {
    icon: "🔁", title: "Idempotent Tools", titleClass: 'card-title-purple', subtitle: "Safe Retry",
    description:
      "Pass idempotency_key to write tools.",
    code: "key per business action",
  },
  {
    icon: "🚦", title: "Canary", titleClass: 'card-title-amber', subtitle: "Rollout",
    description:
      "Flag graph_version; compare metrics before 100%.",
    code: "5% → 25% → 100%",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Job API", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "POST /jobs → {id}; GET /jobs/{id} returns status/result.",
    code: "async agent jobs",
  },
  {
    icon: "📕", title: "Runbook", titleClass: 'card-title-purple', subtitle: "Ops",
    description: "One page: symptoms → checks → rollback steps.",
    code: "on-call ready",
  },
  {
    icon: "🔜", title: "Next: Capstone", titleClass: 'card-title-amber', subtitle: "Day 54",
    description: "Tomorrow — build a full agentic app capstone.",
    link: { href: '/agentic-day-54', label: 'Go to Day 54 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📖", title: "12-Factor", titleClass: 'card-title-purple', subtitle: "Apps",
    description: "Apps resource.",
    link: { href: "https://12factor.net/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Rule", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Agents in prod need queues, budgets, and kill switches.", label: 'Open →', external: true },
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

export default function AgenticDay53() {
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
          <Link to="/agentic-day-52" className="day001-nav-btn day001-nav-prev">← Day 52</Link>
          <p className="day001-datetime">Agentic AI Day 53 · 29 Sep 2026</p>
          <Link to="/agentic-day-54" className="day001-nav-btn day001-nav-next">Day 54 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Production</span><span>Day 53</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 53 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">PRODUCTION AGENTIC PIPELINES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · AGENTS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 53 runs agents like software. Design <strong>queues</strong>, retries, idempotency, SLOs, and rollout strategies for agentic systems.
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

        <CardSection icon="🏗️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day53</span><span>#Production</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
