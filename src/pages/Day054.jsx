import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SRE_BOOK = 'https://sre.google/sre-book/table-of-contents/';
const OTEL = 'https://opentelemetry.io/docs/';

const LEARNT_TODAY = [
  { title: 'Observability = 3 pillars', text: 'logs, metrics and traces answer "what’s happening?"' },
  { title: 'Logs', text: 'structured, searchable events — the detail of what happened' },
  { title: 'Metrics', text: 'numbers over time — latency, error rate, throughput, saturation' },
  { title: 'Traces', text: 'follow one request across services to find the slow hop' },
  { title: 'SLI / SLO / SLA', text: 'measure, target, and promise reliability' },
  { title: 'Alert on symptoms', text: 'page on user-facing problems, not every blip' },
  { title: 'Error budget', text: 'the allowed unreliability that balances speed vs stability' },
  { title: 'Design for failure', text: 'retries, timeouts, graceful degradation, redundancy' },
];

const PILLARS = [
  {
    icon: '🔭', title: 'The Three Pillars', titleClass: 'card-title-cyan', subtitle: 'Logs · Metrics · Traces',
    description:
      'Logs are structured events (the detail), metrics are numbers over time (the trend), and traces follow a single request across services (the path). Together they let you answer "what broke, where, and why".',
    code: '// logs:    { level, msg, requestId, userId, ... }\n// metrics: http_request_duration_ms, error_rate\n// traces:  gateway → orders → payments (spans + timing)',
  },
  {
    icon: '📊', title: 'The Golden Signals', titleClass: 'card-title-purple', subtitle: 'What To Watch',
    description:
      'Track latency (how slow), traffic (how much), errors (how often it fails) and saturation (how full). These four "golden signals" catch most problems before users complain.',
    code: '// latency (p95/p99) · traffic (RPS) ·\n// errors (%) · saturation (CPU/mem/queue depth)',
  },
];

const RELIABILITY = [
  {
    icon: '🎯', title: 'SLI / SLO / SLA', titleClass: 'card-title-cyan', subtitle: 'Measure → Target → Promise',
    description:
      'An SLI is a measured signal (e.g. % of requests < 300ms), an SLO is the internal target (99.9%), and an SLA is the customer promise (with penalties). They turn "reliable" into numbers you can act on.',
    code: '// SLI: fraction of good requests\n// SLO: 99.9% good over 30 days (internal goal)\n// SLA: contractual promise (external)',
  },
  {
    icon: '💰', title: 'Error Budget', titleClass: 'card-title-purple', subtitle: 'Speed vs Stability',
    description:
      'If the SLO is 99.9%, you have a 0.1% "error budget" to spend. Plenty left → ship faster. Budget burned → freeze features and fix reliability. It aligns product speed with stability.',
    code: '// SLO 99.9% → 0.1% budget (~43 min/month)\n// budget healthy → ship · budget spent → stabilise',
  },
  {
    icon: '🛡️', title: 'Design For Failure', titleClass: 'card-title-amber', subtitle: 'It Will Break',
    description:
      'Assume everything fails. Add timeouts and retries (with backoff + jitter), circuit breakers, graceful degradation (serve stale/partial data), redundancy and health checks — so a component failure isn’t an outage.',
    footer: 'timeouts · retries+backoff · degrade gracefully · redundancy',
  },
];

const RESOURCES = [
  {
    icon: '📕', title: 'Google SRE Book', titleClass: 'card-title-cyan', subtitle: 'Free',
    description:
      'The canonical guide to reliability engineering — SLOs, error budgets, on-call, and running systems at scale.',
    link: { href: SRE_BOOK, label: 'Open the SRE book →', external: true },
  },
  {
    icon: '🔭', title: 'OpenTelemetry', titleClass: 'card-title-purple', subtitle: 'Instrumentation',
    description:
      'The vendor-neutral standard for logs, metrics and traces — instrument your Node/TypeScript services once, export anywhere.',
    link: { href: OTEL, label: 'Open OpenTelemetry →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Year 1 Complete', titleClass: 'card-title-amber', subtitle: 'Day 55 Preview',
    description:
      'Tomorrow — the Year-1 capstone: the full TypeScript stack (frontend, mobile, backend, DSA & System Design) reviewed, and what Year 2 (Python) holds.',
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
          <p className="day001-datetime">TypeScript Day 54 · 23 Feb 2027</p>
          <Link to="/day-055" className="day001-nav-btn day001-nav-next">Day 55 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 54 <span aria-hidden="true">🔭</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — OBSERVABILITY &amp; RELIABILITY</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '54%' }} /></div>

        <p className="day001-summary">
          You can’t fix what you can’t see. <strong>Observability</strong> stands on three pillars —{' '}
          <strong>logs</strong> (structured events), <strong>metrics</strong> (numbers over time) and{' '}
          <strong>traces</strong> (one request across services). Watch the <strong>golden signals</strong> (latency,
          traffic, errors, saturation). Turn "reliable" into numbers with <strong>SLI → SLO → SLA</strong>, and use the{' '}
          <strong>error budget</strong> to balance shipping speed against stability. Above all,{' '}
          <strong>design for failure</strong>: timeouts, retries with backoff, circuit breakers, graceful degradation
          and redundancy — so a component failing isn’t an outage. <em>Next: the Year-1 capstone.</em>
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

        <CardSection icon="🔭" title="OBSERVABILITY" cards={PILLARS} columns={2} />
        <CardSection icon="🎯" title="RELIABILITY" cards={RELIABILITY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#SRE</span>
        </footer>
      </div>
    </div>
  );
}
