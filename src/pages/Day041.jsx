import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL = 'https://microservices.io/patterns/microservices.html';

const LEARNT_TODAY = [
  {
    title: 'Monolith',
    text: 'one codebase, one deployable — everything in a single process',
  },
  {
    title: 'Microservices',
    text: 'many small services, each deployed and scaled on its own',
  },
  {
    title: 'Monolith wins early',
    text: 'simple to build, test and run — perfect to start',
  },
  {
    title: 'Monolith pain',
    text: 'scales as one unit; one bad module can take it all down',
  },
  {
    title: 'Microservice wins',
    text: 'independent scaling & deploys, and team autonomy',
  },
  {
    title: 'Microservice cost',
    text: 'network calls, distributed data, and heavy ops overhead',
  },
  {
    title: 'Service boundaries',
    text: 'split by business capability, not by technical layer',
  },
  {
    title: 'Communication',
    text: 'REST/gRPC for sync, message queues for async',
  },
  {
    title: 'Data per service',
    text: 'each service owns its own database — no shared tables',
  },
  {
    title: 'Start monolith',
    text: 'extract services only when the pain is real',
  },
];

const ARCHITECTURES = [
  {
    icon: '🧱',
    title: 'Monolith',
    titleClass: 'card-title-cyan',
    subtitle: 'one unit',
    description: 'All features live in one codebase and deploy together.',
    code: '[ UI · Auth · Orders · Payments · Email ]\n        one process, one deploy',
  },
  {
    icon: '🧩',
    title: 'Microservices',
    titleClass: 'card-title-green',
    subtitle: 'many units',
    description: 'Each capability is its own service, deployed independently.',
    code: '[Auth] [Orders] [Payments] [Email]\n each: own code · own DB · own deploy',
  },
  {
    icon: '✂️',
    title: 'Service Boundaries',
    titleClass: 'card-title-amber',
    subtitle: 'split smart',
    description: 'Draw lines around business capabilities, not tech layers.',
    code: '// good: Orders, Payments, Inventory\n// bad:  Controllers, Models, Views',
  },
];

const TRADEOFFS = [
  {
    icon: '✅',
    title: 'When Monolith Wins',
    titleClass: 'card-title-cyan',
    subtitle: 'most of the time',
    description: 'Small team, early product, one deploy, simple local dev.',
    code: '// fewer moving parts\n// one repo, one pipeline, one DB',
  },
  {
    icon: '📈',
    title: 'When Microservices Win',
    titleClass: 'card-title-green',
    subtitle: 'scale & teams',
    description: 'Independent scaling and many teams shipping in parallel.',
    code: '// scale Payments x10 without touching Auth\n// teams deploy on their own schedule',
  },
  {
    icon: '🔌',
    title: 'Communication',
    titleClass: 'card-title-amber',
    subtitle: 'sync + async',
    description: 'Direct calls for requests; queues for background work.',
    code: 'sync : REST / gRPC\nasync: Kafka / RabbitMQ events',
  },
  {
    icon: '🗄️',
    title: 'Data per Service',
    titleClass: 'card-title-pink',
    subtitle: 'no shared DB',
    description: 'Each service owns its data; share via APIs or events.',
    code: '// Orders never queries the Users table\n// it asks the Users service (or listens)',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The classic system-design-primer — architecture patterns and trade-offs.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'microservices.io',
    titleClass: 'card-title-green',
    subtitle: 'Pattern docs',
    description: 'Chris Richardson’s microservices pattern language — when and how.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Monolith vs Microservice',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Monolithic vs Microservice Architecture — which to use — by Alex Hyett.',
    link: {
      href: 'https://www.youtube.com/watch?v=NdeTGlZ__Do',
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

export default function Day041() {
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
          <Link to="/day-040" className="day001-nav-btn day001-nav-home">
            ← Day 40
          </Link>
          <p className="day001-datetime">Thunder Day 41 · 2 Sep 2026</p>
          <Link to="/day-042" className="day001-nav-btn day001-nav-next">
            Day 42 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Architecture</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 41 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MONOLITH vs MICROSERVICES</p>
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
          <div className="day001-progress-bar" style={{ width: '41%' }} />
        </div>

        <p className="day001-summary">
          Day forty-one — the backend works, now how should it be <strong>shaped</strong>? A{' '}
          <strong>monolith</strong> is one codebase that deploys as a unit — simple and fast to
          start. <strong>Microservices</strong> split it into small, independently deployable
          services, buying independent scaling and team autonomy at the cost of network complexity
          and distributed data. Split by <strong>business capability</strong>, give each service its
          own <strong>database</strong>, and start monolith — extract only when it hurts. Reference:{' '}
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

        <CardSection icon="🏛️" title="TWO ARCHITECTURES" cards={ARCHITECTURES} columns={3} />
        <CardSection icon="⚖️" title="THE TRADE-OFFS" cards={TRADEOFFS} columns={4} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Microservices</span>
          <span>#Architecture</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
