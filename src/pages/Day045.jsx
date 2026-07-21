import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SD_PRIMER = 'https://github.com/donnemartin/system-design-primer';
const LATENCY = 'https://gist.github.com/jboner/2841832';

const LEARNT_TODAY = [
  { title: 'System design in TS', text: 'reason about scale for the TypeScript/Node stack you just built' },
  { title: 'Scalability', text: 'vertical (bigger box) vs horizontal (more boxes) — favour horizontal' },
  { title: 'Latency vs throughput', text: 'time per request vs requests per second — optimise the one that hurts' },
  { title: 'Availability', text: 'uptime as “nines”; redundancy removes single points of failure' },
  { title: 'The napkin math', text: 'estimate QPS, storage and bandwidth before designing' },
  { title: 'Bottlenecks move', text: 'fix one (CPU) and the next appears (DB, network) — measure' },
  { title: 'Trade-offs, not answers', text: 'every choice costs something; state the trade-off out loud' },
  { title: 'A method', text: 'requirements → estimate → high-level → deep-dive → bottlenecks' },
];

const CORE = [
  {
    icon: '📈', title: 'Scale Up vs Out', titleClass: 'card-title-cyan', subtitle: 'Vertical vs Horizontal',
    description:
      'Vertical scaling buys a bigger machine — simple but capped and a single point of failure. Horizontal scaling adds machines behind a load balancer — the path to real scale, but you must go stateless.',
    code: '// vertical: 4 → 16 CPUs (limited, SPOF)\n// horizontal: 1 → N stateless servers + a load balancer\n// prefer horizontal for availability + scale',
  },
  {
    icon: '⏱️', title: 'Latency & Throughput', titleClass: 'card-title-purple', subtitle: 'Two Different Goals',
    description:
      'Latency is how long one request takes; throughput is how many per second. They’re distinct — batching can raise throughput while hurting latency. Know your key metric (p99 latency, peak QPS).',
    code: '// track p50 / p95 / p99 latency, not just the average\n// a slow p99 = a bad experience for 1 in 100 users',
  },
];

const METHOD = [
  {
    icon: '🟢', title: 'Availability', titleClass: 'card-title-cyan', subtitle: 'Nines & Redundancy',
    description:
      'Availability is uptime — 99.9% (“three nines”) is ~8.8h/year down. You buy it with redundancy: no single point of failure, multiple instances, and failover across zones.',
    code: '// 99%   → ~3.65 days/year down\n// 99.9% → ~8.8 hours/year\n// 99.99% → ~52 minutes/year',
  },
  {
    icon: '🧮', title: 'Back-of-Envelope', titleClass: 'card-title-purple', subtitle: 'Estimate First',
    description:
      'Before drawing boxes, estimate scale: users → QPS, data per record → storage, response size → bandwidth. Rough numbers tell you whether one server or a fleet is needed.',
    code: '// 10M daily users, 10 req each → ~1.1k QPS avg,\n// ~5k peak → decide LB, caching, DB scale from there',
  },
  {
    icon: '🧭', title: 'A Repeatable Method', titleClass: 'card-title-amber', subtitle: 'The Framework',
    description:
      'Clarify requirements (functional + non-functional) → estimate scale → sketch the high-level design → deep-dive the hard parts → find and address bottlenecks. State every trade-off.',
    footer: 'requirements → estimate → high-level → deep-dive → bottlenecks',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'System Design Primer', titleClass: 'card-title-cyan', subtitle: 'The Canonical Guide',
    description:
      'The most-referenced free resource — concepts, trade-offs, and worked designs for common systems. Bookmark it for the whole System Design stretch.',
    link: { href: SD_PRIMER, label: 'Open the primer →', external: true },
  },
  {
    icon: '⏱️', title: 'Latency Numbers', titleClass: 'card-title-purple', subtitle: 'Every Dev Should Know',
    description:
      'The classic table — memory vs SSD vs network vs cross-region — that grounds every "is this fast enough?" decision.',
    link: { href: LATENCY, label: 'Open the numbers →', external: true },
  },
  {
    icon: '🔜', title: 'Next: APIs', titleClass: 'card-title-amber', subtitle: 'Day 46 Preview',
    description:
      'Tomorrow — how services talk: REST vs GraphQL vs gRPC, WebSockets for real-time, versioning, pagination and idempotency.',
    link: { href: '/day-046', label: 'Go to Day 46 →' },
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

export default function Day045() {
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
          <Link to="/day-044" className="day001-nav-btn day001-nav-prev">← Day 44</Link>
          <p className="day001-datetime">TypeScript Day 45</p>
          <Link to="/day-046" className="day001-nav-btn day001-nav-next">Day 46 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>System Design</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 45 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">SYSTEM DESIGN — FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '45%' }} /></div>

        <p className="day001-summary">
          Designing for scale, on the stack you built. <strong>Scalability</strong> is vertical (bigger box, capped +
          SPOF) vs <strong>horizontal</strong> (more boxes behind a load balancer — the real answer, requires going
          stateless). Separate <strong>latency</strong> (time per request; track p95/p99) from{' '}
          <strong>throughput</strong> (requests/sec). <strong>Availability</strong> is uptime in “nines”, bought with
          redundancy and no single point of failure. Start every design with <strong>back-of-envelope</strong> math
          (users → QPS → storage → bandwidth), then follow a method:{' '}
          <em>requirements → estimate → high-level → deep-dive → bottlenecks</em> — and name the trade-offs.{' '}
          <em>Next: APIs &amp; communication.</em>
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

        <CardSection icon="📈" title="THE CORE METRICS" cards={CORE} columns={2} />
        <CardSection icon="🧭" title="AVAILABILITY & METHOD" cards={METHOD} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#SystemDesign</span><span>#Scalability</span>
        </footer>
      </div>
    </div>
  );
}
