import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL =
  'https://github.com/donnemartin/system-design-primer#performance-vs-scalability';

const LEARNT_TODAY = [
  {
    title: 'Scalability',
    text: 'handle more load by adding resources',
  },
  {
    title: 'Vertical vs horizontal',
    text: 'a bigger machine vs more machines',
  },
  {
    title: 'Availability',
    text: 'percent uptime — measured in "nines"',
  },
  {
    title: 'Reliability',
    text: 'keeps working correctly even when parts fail',
  },
  {
    title: 'Latency vs throughput',
    text: 'time per request vs requests per second',
  },
  {
    title: 'Estimation',
    text: 'back-of-the-envelope QPS, storage, bandwidth',
  },
  {
    title: 'SLA / SLO / SLI',
    text: 'the promise, the target, and the measurement',
  },
  {
    title: 'Bottlenecks',
    text: 'the single constraint that limits the whole system',
  },
  {
    title: 'Trade-offs',
    text: 'no free lunch — CAP, cost, and complexity',
  },
  {
    title: 'Requirements first',
    text: 'nail functional + non-functional before designing',
  },
];

const METRICS = [
  {
    icon: '📈',
    title: 'Scalability',
    titleClass: 'card-title-cyan',
    subtitle: 'up vs out',
    description: 'Vertical scaling hits a ceiling; horizontal scaling adds nodes.',
    code: 'vertical  : 8 → 64 cores (limited)\nhorizontal: 1 → N servers (the real path)',
  },
  {
    icon: '🟢',
    title: 'Availability & Reliability',
    titleClass: 'card-title-green',
    subtitle: 'the nines',
    description: 'Uptime percentage; and correct behaviour under failure.',
    code: '99.9%   → 8.7h down/year\n99.99%  → 52m down/year\n99.999% → 5m down/year',
  },
  {
    icon: '⚡',
    title: 'Latency vs Throughput',
    titleClass: 'card-title-amber',
    subtitle: 'speed vs volume',
    description: 'Latency is one request’s time; throughput is total per second.',
    code: 'latency    : 50ms per request\nthroughput : 10,000 requests / second',
  },
];

const PROCESS = [
  {
    icon: '📋',
    title: 'Requirements',
    titleClass: 'card-title-cyan',
    subtitle: 'functional + not',
    description: 'What it must do, plus scale, latency, and availability targets.',
    code: 'functional     : shorten URL, redirect\nnon-functional : 100M/day, <100ms, 99.99%',
  },
  {
    icon: '🧮',
    title: 'Estimation',
    titleClass: 'card-title-green',
    subtitle: 'back-of-envelope',
    description: 'Rough QPS, storage, and bandwidth guide the whole design.',
    code: '100M writes/day ÷ 86400 ≈ 1,160 QPS\n100M × 500B × 5yr ≈ ~90 TB',
  },
  {
    icon: '🎯',
    title: 'SLA / SLO / SLI',
    titleClass: 'card-title-amber',
    subtitle: 'promise → measure',
    description: 'SLA is the promise, SLO the internal target, SLI the metric.',
    code: 'SLI: p99 latency\nSLO: p99 < 200ms\nSLA: 99.9% or credits back',
  },
  {
    icon: '🔍',
    title: 'Bottlenecks & Trade-offs',
    titleClass: 'card-title-pink',
    subtitle: 'no free lunch',
    description: 'Find the constraint; every choice trades something away.',
    code: '// CAP, cost, consistency vs latency\n// optimize the actual bottleneck first',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The canonical system-design-primer — the fundamentals in one place.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Performance vs Scalability',
    titleClass: 'card-title-green',
    subtitle: 'Primer section',
    description: 'The primer’s notes on latency, throughput, and scalability.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Scalability Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Scalability Simply Explained in 10 Minutes by ByteByteGo — for Day 47.',
    link: {
      href: 'https://www.youtube.com/watch?v=EWS_CIxttVw',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day047() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-046" className="day001-nav-btn day001-nav-home">
            ← Day 46
          </Link>
          <p className="day001-datetime">Thunder Day 47 · 1 Sep 2026</p>
          <Link to="/day-048" className="day001-nav-btn day001-nav-next">
            Day 48 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Fundamentals</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 47 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">SYSTEM DESIGN FUNDAMENTALS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">SYSTEM DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '47%' }} />
        </div>

        <p className="day001-summary">
          Day forty-seven — the vocabulary of system design. Every design balances{' '}
          <strong>scalability</strong> (up vs out), <strong>availability</strong> (the nines),{' '}
          <strong>reliability</strong>, and <strong>latency vs throughput</strong>. The process is
          always the same: gather <strong>requirements</strong> (functional + non-functional), do{' '}
          <strong>back-of-the-envelope estimation</strong>, set <strong>SLA/SLO/SLI</strong> targets,
          find the <strong>bottleneck</strong>, and accept the <strong>trade-offs</strong>. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            system-design-primer
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📐" title="CORE METRICS" cards={METRICS} columns={3} />
        <CardSection icon="🧭" title="THE DESIGN PROCESS" cards={PROCESS} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Scalability</span>
          <span>#Fundamentals</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
