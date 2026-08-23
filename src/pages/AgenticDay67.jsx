import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OTEL_DOCS = 'https://opentelemetry.io/docs/';
const GRAFANA_DOCS = 'https://grafana.com/docs/grafana/latest/';

const LEARNT_TODAY = [
  { title: 'Three pillars', text: 'logs, metrics, and traces each answer a different debugging question — don\'t rely on just one' },
  { title: 'Structured logging', text: 'log JSON with a request id, model, prompt version, and latency — not free-text strings you have to grep' },
  { title: 'Golden signals', text: 'latency, error rate, throughput, and cost per request are the four numbers to watch first' },
  { title: 'Tracing a request', text: 'follow one call through retrieval → prompt building → LLM call → tool calls → response, end to end' },
  { title: 'Alerting that matters', text: 'page a human only on symptoms that actually matter — an error-rate spike or an SLO breach, not every anomaly' },
  { title: 'Dashboards vs drill-down', text: 'one glance should show overall health; a separate drill-down view answers "why" once something\'s wrong' },
  { title: 'Sampling', text: 'log 100% of errors but only a percentage of successful requests, to keep storage cost under control' },
  { title: 'What\'s next', text: 'once you can see problems clearly, scaling the system to handle more traffic is the natural next step' },
];

const CORE = [
  {
    icon: '📜', title: 'Logs, Metrics, Traces', titleClass: 'card-title-cyan', subtitle: 'The Three Pillars',
    description:
      'Logs tell you what happened at one point in time, metrics tell you the trend over time, and traces tell you the full path one request took.',
    code: 'log.info({request_id, model, prompt_v, latency_ms})',
  },
  {
    icon: '🚦', title: 'Golden Signals', titleClass: 'card-title-purple', subtitle: 'Watch These First',
    description:
      'Latency, error rate, throughput, and cost per request — track these four and you\'ll catch most production problems early.',
    code: 'p95_latency · error_rate\nrequests_per_min · cost_per_request',
  },
  {
    icon: '🔔', title: 'Alerting That Doesn\'t Cry Wolf', titleClass: 'card-title-amber', subtitle: 'Symptoms, Not Noise',
    description:
      'Alert on symptoms users actually feel — latency SLO breach, error spike — not on every internal metric wobble.',
    code: 'alert: p95_latency > 3s for 5m\nalert: error_rate > 2% for 5m',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Instrument a Request', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add a trace id to one endpoint and log every stage it passes through — retrieval, prompt, model call, response.',
    code: 'trace_id = uuid4()\nlog.info({trace_id, stage: "retrieval"})',
  },
  {
    icon: '📊', title: 'Build a Dashboard', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Put the four golden signals on one screen so health is visible at a glance, without opening a single log file.',
  },
  {
    icon: '🔜', title: 'Next: Scaling', titleClass: 'card-title-amber', subtitle: 'Day 68 Preview',
    description: 'Tomorrow — caching, request queuing, and autoscaling for LLM-heavy services.',
    link: { href: '/agentic-day-68', label: 'Go to Day 68 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📖', title: 'OpenTelemetry', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'The open standard for logs, metrics, and traces across languages and platforms.',
    link: { href: OTEL_DOCS, label: 'Open OpenTelemetry docs →', external: true },
  },
  {
    icon: '📈', title: 'Grafana Docs', titleClass: 'card-title-amber', subtitle: 'Dashboards',
    description: 'Reference for building the dashboards that make golden signals visible at a glance.',
    link: { href: GRAFANA_DOCS, label: 'Open Grafana docs →', external: true },
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

export default function AgenticDay67() {
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
          <Link to="/agentic-day-66" className="day001-nav-btn day001-nav-prev">← Day 66</Link>
          <p className="day001-datetime">Agentic AI Day 67 · 29 Oct 2026</p>
          <Link to="/agentic-day-68" className="day001-nav-btn day001-nav-next">Day 68 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Observability</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 67 <span aria-hidden="true">📊</span></h1>
              <p className="day001-day-theme">MONITORING &amp; OBSERVABILITY AT SCALE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LLMOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          Day 67 makes production visible. <strong>Logs, metrics, and traces</strong> together, the four{' '}
          <strong>golden signals</strong> worth watching first, and <strong>alerting</strong> tuned to page a
          human only when something users actually feel goes wrong.
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

        <CardSection icon="📊" title="SEEING PRODUCTION" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LLMOps</span><span>#Day67</span><span>#Observability</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
