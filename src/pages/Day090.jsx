import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const ROADMAP_URL = 'https://roadmap.sh/full-stack';

const LEARNT_TODAY = [
  {
    title: 'The full stack',
    text: 'frontend, backend, data, and infra as one system',
  },
  {
    title: 'Frontend',
    text: 'React SPA — components, state, routing',
  },
  {
    title: 'Backend',
    text: 'REST/GraphQL API, auth, business logic',
  },
  {
    title: 'Data layer',
    text: 'SQL + NoSQL, caching, indexing',
  },
  {
    title: 'Infra / DevOps',
    text: 'containers, CI/CD, cloud, monitoring',
  },
  {
    title: 'Security',
    text: 'authn/authz, HTTPS, validation, secrets',
  },
  {
    title: 'Scale',
    text: 'load balancing, caching, horizontal scaling',
  },
  {
    title: 'Observability',
    text: 'logs, metrics, and traces across tiers',
  },
  {
    title: 'Trade-offs',
    text: 'every choice has a cost — reason about them',
  },
  {
    title: 'Lifecycle',
    text: 'design → build → ship → operate → iterate',
  },
];

const STACK = [
  {
    icon: '🎨',
    title: 'Frontend',
    titleClass: 'card-title-cyan',
    subtitle: 'the client',
    description: 'A React SPA — components, state, routing, and API calls.',
    code: 'React + Router + fetch/axios\nbuilt with Vite → static assets on a CDN',
  },
  {
    icon: '⚙️',
    title: 'Backend',
    titleClass: 'card-title-green',
    subtitle: 'the server',
    description: 'An API layer with auth and the business logic.',
    code: 'REST / GraphQL · JWT auth\nNode/Express · Spring · FastAPI',
  },
  {
    icon: '🗄️',
    title: 'Data Layer',
    titleClass: 'card-title-amber',
    subtitle: 'persistence',
    description: 'Relational + NoSQL, with caching and indexes.',
    code: 'Postgres (source of truth)\nRedis cache · indexes on hot queries',
  },
  {
    icon: '☸️',
    title: 'Infra / DevOps',
    titleClass: 'card-title-pink',
    subtitle: 'run it',
    description: 'Containers, CI/CD, cloud, and monitoring tie it together.',
    code: 'Docker → K8s · GitHub Actions\nTerraform · Prometheus + Grafana',
  },
];

const ARCHITECT = [
  {
    icon: '🔐',
    title: 'Security & Scale',
    titleClass: 'card-title-cyan',
    subtitle: 'non-negotiables',
    description: 'Secure every tier; scale with LBs, caches, and replicas.',
    code: 'HTTPS · authz · validate input · secrets\nload balancer · cache · horizontal scale',
  },
  {
    icon: '📊',
    title: 'Observability',
    titleClass: 'card-title-green',
    subtitle: 'see the system',
    description: 'Logs, metrics, and traces across every tier.',
    code: 'structured logs · RED/USE metrics\ndistributed traces end-to-end',
  },
  {
    icon: '⚖️',
    title: 'Trade-offs & Lifecycle',
    titleClass: 'card-title-amber',
    subtitle: 'think in costs',
    description: 'Every choice trades something; iterate over the lifecycle.',
    code: 'SQL vs NoSQL · monolith vs microservices\ndesign → build → ship → operate → iterate',
  },
];

const RESOURCES = [
  {
    icon: '📐',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub',
    description: 'The system design primer — how to architect scalable systems.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Full-Stack Roadmap',
    titleClass: 'card-title-green',
    subtitle: 'roadmap.sh',
    description: 'The full-stack roadmap — a map of the whole stack you’ve built.',
    link: { href: ROADMAP_URL, label: 'Open the roadmap →', external: true },
  },
  {
    icon: '▶️',
    title: 'Full-Stack Architecture',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How a modern full-stack web app is architected end to end — for Day 90.',
    link: {
      href: 'https://www.youtube.com/watch?v=sDlCSIDwpDs',
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

export default function Day090() {
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
          <Link to="/day-089" className="day001-nav-btn day001-nav-home">
            ← Day 89
          </Link>
          <p className="day001-datetime">Thunder Day 90 · 21 Oct 2026</p>
          <Link to="/day-091" className="day001-nav-btn day001-nav-next">
            Day 91 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Architecture</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 90 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FULL-STACK ARCHITECTURE REVIEW</p>
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
              <p className="day001-profile-role">FULL-STACK</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '90%' }} />
        </div>

        <p className="day001-summary">
          Day ninety — step back and see the whole <strong>stack</strong> as one system: a React{' '}
          <strong>frontend</strong>, an API <strong>backend</strong>, a <strong>data layer</strong>{' '}
          (SQL + NoSQL, cache, indexes), and the <strong>infra/DevOps</strong> that runs it. Think
          like an architect — bake in <strong>security</strong> and <strong>scale</strong>, wire up{' '}
          <strong>observability</strong>, and reason about the <strong>trade-offs</strong> at every
          layer across the whole <strong>lifecycle</strong>. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            the system design primer
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

        <CardSection icon="🧱" title="THE STACK" cards={STACK} columns={4} />
        <CardSection icon="🧠" title="THINK LIKE AN ARCHITECT" cards={ARCHITECT} columns={3} />
        <CardSection icon="📚" title="ARCHITECTURE RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FullStack</span>
          <span>#Architecture</span>
          <span>#SystemDesign</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
