import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GRAPHQL = 'https://graphql.org/learn/';
const GRPC = 'https://grpc.io/docs/what-is-grpc/introduction/';

const LEARNT_TODAY = [
  { title: 'REST', text: 'resources + HTTP verbs; simple, cacheable, universal' },
  { title: 'GraphQL', text: 'one endpoint, client picks exactly the fields it needs' },
  { title: 'gRPC', text: 'binary Protobuf over HTTP/2 — fast service-to-service calls' },
  { title: 'WebSockets', text: 'a persistent two-way channel for real-time updates' },
  { title: 'Idempotency', text: 'safe retries — the same request applied twice has one effect' },
  { title: 'Pagination', text: 'cursor-based scales better than offset for large lists' },
  { title: 'Versioning', text: 'evolve APIs without breaking clients (/v1, headers)' },
  { title: 'Pick per need', text: 'public API → REST/GraphQL; internal → gRPC; live → WebSockets' },
];

const STYLES = [
  {
    icon: '🔌', title: 'REST vs GraphQL', titleClass: 'card-title-cyan', subtitle: 'Two Public APIs',
    description:
      'REST is resources + verbs — simple, cacheable, everywhere, but can over- or under-fetch. GraphQL exposes one endpoint where the client requests exactly the fields it needs, at the cost of caching and complexity.',
    code: '// REST: GET /users/7  → the whole user\n// GraphQL: query { user(id:7){ name posts{ title } } }\n//          → exactly those fields, one round trip',
  },
  {
    icon: '⚡', title: 'gRPC & WebSockets', titleClass: 'card-title-purple', subtitle: 'Internal & Real-Time',
    description:
      'gRPC uses binary Protobuf over HTTP/2 — compact and fast for service-to-service calls with generated typed clients. WebSockets hold a persistent two-way connection for chat, notifications and live feeds.',
    code: '// gRPC: define .proto → generate typed client/server\n// WebSocket: ws.send / ws.onmessage — push both ways',
  },
];

const CONTRACT = [
  {
    icon: '♻️', title: 'Idempotency', titleClass: 'card-title-cyan', subtitle: 'Safe Retries',
    description:
      'Networks fail and clients retry. GET/PUT/DELETE are naturally idempotent; make POST idempotent with an idempotency key, so a double-submit charges the card once, not twice.',
    code: 'POST /payments\nIdempotency-Key: 7f3c...        // server dedupes\n// same key → return the first result, don’t re-run',
  },
  {
    icon: '📄', title: 'Pagination', titleClass: 'card-title-purple', subtitle: 'Cursor > Offset',
    description:
      'Offset pagination (LIMIT/OFFSET) gets slow and skips/repeats rows as data shifts. Cursor pagination ("after this id") is stable and fast at scale.',
    code: '// cursor: GET /feed?after=eyJpZCI6MTAwfQ&limit=20\n// stable ordering, O(1)-ish page fetch',
  },
  {
    icon: '🏷️', title: 'Versioning', titleClass: 'card-title-amber', subtitle: 'Don’t Break Clients',
    description:
      'APIs evolve. Version them (/v1, /v2 or a header) and add fields rather than removing them, so old clients keep working while new ones adopt changes.',
    footer: 'add, don’t remove · version breaking changes',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'GraphQL', titleClass: 'card-title-cyan', subtitle: 'Learn',
    description:
      'Schemas, queries, mutations, resolvers and the trade-offs vs REST — when a flexible query language pays off.',
    link: { href: GRAPHQL, label: 'Open GraphQL →', external: true },
  },
  {
    icon: '⚡', title: 'gRPC', titleClass: 'card-title-purple', subtitle: 'Intro',
    description:
      'What gRPC is, Protobuf, streaming, and why it’s the default for high-performance internal microservice calls.',
    link: { href: GRPC, label: 'Open gRPC →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Databases', titleClass: 'card-title-amber', subtitle: 'Day 47 Preview',
    description:
      'Tomorrow — data at scale: SQL vs NoSQL, indexing, sharding & partitioning, and read replicas for the storage layer.',
    link: { href: '/day-047', label: 'Go to Day 47 →' },
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

export default function Day046() {
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
          <Link to="/day-045" className="day001-nav-btn day001-nav-prev">← Day 45</Link>
          <p className="day001-datetime">TypeScript Day 46</p>
          <Link to="/day-047" className="day001-nav-btn day001-nav-next">Day 47 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 46 <span aria-hidden="true">🔌</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — APIs &amp; COMMUNICATION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          How systems talk. <strong>REST</strong> (resources + verbs) is simple and cacheable but can over/under-fetch;{' '}
          <strong>GraphQL</strong> lets the client request exactly the fields it needs; <strong>gRPC</strong> (binary
          Protobuf over HTTP/2) is fast for internal service calls; <strong>WebSockets</strong> hold a two-way channel
          for real-time. Beyond the style, the contract details decide reliability: make writes{' '}
          <strong>idempotent</strong> (safe retries via an idempotency key), prefer <strong>cursor pagination</strong>{' '}
          over offset at scale, and <strong>version</strong> APIs (add, don’t remove) so clients don’t break. Pick per
          need — public → REST/GraphQL, internal → gRPC, live → WebSockets. <em>Next: databases &amp; storage.</em>
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

        <CardSection icon="🔌" title="API STYLES" cards={STYLES} columns={2} />
        <CardSection icon="📄" title="THE CONTRACT" cards={CONTRACT} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#APIs</span>
        </footer>
      </div>
    </div>
  );
}
