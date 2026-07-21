import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MICRO_FOWLER = 'https://martinfowler.com/articles/microservices.html';
const SAGA = 'https://microservices.io/patterns/data/saga.html';

const LEARNT_TODAY = [
  { title: 'Monolith vs microservices', text: 'one deployable vs many independent services' },
  { title: 'Start with a monolith', text: 'split only when scaling or team boundaries demand it' },
  { title: 'API gateway', text: 'one entry point: routing, auth, rate limiting, aggregation' },
  { title: 'Service discovery', text: 'services find each other dynamically as instances change' },
  { title: 'Own your data', text: 'each service has its own database — no shared tables' },
  { title: 'Saga pattern', text: 'coordinate a transaction across services with compensation' },
  { title: 'Circuit breaker', text: 'stop calling a failing service to prevent cascades' },
  { title: 'Complexity is the cost', text: 'network calls, distributed debugging, eventual consistency' },
];

const SPLIT = [
  {
    icon: '🧱', title: 'Monolith vs Microservices', titleClass: 'card-title-cyan', subtitle: 'One vs Many',
    description:
      'A monolith is one codebase and deployable — simple to build, test and run early on. Microservices split it into independently deployable services owned by different teams — flexible at scale, but distributed and complex. Start monolith; split when you must.',
    code: '// monolith: one app, one DB, one deploy\n// microservices: users-svc, orders-svc, payments-svc\n//   — each own repo, DB, deploy, scaling',
  },
  {
    icon: '🚪', title: 'API Gateway', titleClass: 'card-title-purple', subtitle: 'One Front Door',
    description:
      'Clients hit a single API gateway, not each service. It handles cross-cutting concerns — routing, auth, rate limiting, request aggregation — so services stay focused and clients see one API.',
    code: '// client → gateway → { users, orders, payments }\n// gateway does: auth · rate-limit · route · aggregate',
  },
];

const PATTERNS = [
  {
    icon: '🔎', title: 'Service Discovery', titleClass: 'card-title-cyan', subtitle: 'Find Each Other',
    description:
      'Instances come and go with auto-scaling, so services can’t hardcode addresses. A registry (or the platform, e.g. Kubernetes DNS) lets a service look up healthy instances of another by name.',
    code: '// call by logical name, not IP:\nfetch("http://orders-service/api/orders")\n// discovery resolves to a healthy instance',
  },
  {
    icon: '🔄', title: 'Saga', titleClass: 'card-title-purple', subtitle: 'Distributed Transactions',
    description:
      'You can’t run one ACID transaction across services. A saga chains local transactions; if a later step fails, earlier steps run compensating actions to undo — eventual consistency with a rollback story.',
    code: '// order → reserve stock → charge card\n// charge fails → compensate: release stock, cancel order',
  },
  {
    icon: '🔌', title: 'Circuit Breaker', titleClass: 'card-title-amber', subtitle: 'Stop Cascades',
    description:
      'When a downstream service is failing, keep calling it and the failure cascades. A circuit breaker "trips" after repeated errors — failing fast (or returning a fallback) until the service recovers.',
    footer: 'errors spike → open the circuit → fail fast / fallback',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Microservices (Fowler)', titleClass: 'card-title-cyan', subtitle: 'The Definition',
    description:
      'Martin Fowler’s foundational article — what microservices are, their characteristics, and when the trade-off is worth it.',
    link: { href: MICRO_FOWLER, label: 'Read the article →', external: true },
  },
  {
    icon: '🔄', title: 'Saga Pattern', titleClass: 'card-title-purple', subtitle: 'microservices.io',
    description:
      'Choreography vs orchestration sagas, compensating transactions, and how to keep data consistent across services.',
    link: { href: SAGA, label: 'Open the pattern →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Security & Rate Limits', titleClass: 'card-title-amber', subtitle: 'Day 53 Preview',
    description:
      'Tomorrow — securing systems: authN vs authZ, OAuth/JWT at scale, rate limiting algorithms, and defending against common attacks.',
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
          <p className="day001-datetime">TypeScript Day 52</p>
          <Link to="/day-053" className="day001-nav-btn day001-nav-next">Day 53 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 52 <span aria-hidden="true">🧱</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — MICROSERVICES &amp; GATEWAY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          Splitting a system. A <strong>monolith</strong> (one deployable) is simplest early on;{' '}
          <strong>microservices</strong> split it into independently deployable, team-owned services — flexible at
          scale but distributed and complex, so <strong>start monolith, split when you must</strong>. Clients hit one{' '}
          <strong>API gateway</strong> (routing, auth, rate limiting, aggregation), and services find each other via{' '}
          <strong>service discovery</strong>. Each service <strong>owns its data</strong>. Cross-service transactions
          use the <strong>saga</strong> pattern (compensating actions on failure), and a{' '}
          <strong>circuit breaker</strong> stops a failing dependency from cascading. The cost of it all is{' '}
          <strong>complexity</strong>. <em>Next: security &amp; rate limiting.</em>
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

        <CardSection icon="🧱" title="ARCHITECTURE" cards={SPLIT} columns={2} />
        <CardSection icon="🔄" title="DISTRIBUTED PATTERNS" cards={PATTERNS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Microservices</span>
        </footer>
      </div>
    </div>
  );
}
