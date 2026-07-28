import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL =
  'https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/introduction.html';
const KODEKLOUD_URL = 'https://kodekloud.com/';

const LEARNT_TODAY = [
  {
    title: 'Recreate',
    text: 'stop the old version, start the new — brief downtime',
  },
  {
    title: 'Rolling',
    text: 'replace instances gradually, a few at a time',
  },
  {
    title: 'Blue/Green',
    text: 'two full environments; switch traffic instantly',
  },
  {
    title: 'Canary',
    text: 'release to a small % first, then ramp up',
  },
  {
    title: 'Feature flags',
    text: 'decouple deploying code from releasing a feature',
  },
  {
    title: 'Health checks',
    text: 'gate the rollout on healthy instances',
  },
  {
    title: 'Rollback',
    text: 'blue/green flips back instantly',
  },
  {
    title: 'Zero downtime',
    text: 'the goal for user-facing services',
  },
  {
    title: 'Traffic shifting',
    text: 'the load balancer or mesh moves users over',
  },
  {
    title: 'Observability',
    text: 'watch metrics/errors during the rollout',
  },
];

const STRATEGIES = [
  {
    icon: '♻️',
    title: 'Recreate',
    titleClass: 'card-title-cyan',
    subtitle: 'simplest',
    description: 'Tear down the old, bring up the new — expect downtime.',
    code: 'stop v1 → start v2\n// simple, but a gap of unavailability',
  },
  {
    icon: '🔃',
    title: 'Rolling',
    titleClass: 'card-title-green',
    subtitle: 'gradual',
    description: 'Swap instances in batches so the app stays up.',
    code: 'replace 1/4 at a time\nold + new run side by side briefly',
  },
  {
    icon: '🔵',
    title: 'Blue/Green',
    titleClass: 'card-title-amber',
    subtitle: 'instant switch',
    description: 'Two identical envs; flip the router to the new one.',
    code: 'blue = live, green = new\ntest green → switch traffic → keep blue for rollback',
  },
  {
    icon: '🐤',
    title: 'Canary',
    titleClass: 'card-title-pink',
    subtitle: 'test in prod',
    description: 'Send 5% of traffic to the new version; watch, then ramp.',
    code: '5% → 25% → 50% → 100%\n// halt and roll back if errors spike',
  },
];

const SAFE = [
  {
    icon: '🚩',
    title: 'Feature Flags',
    titleClass: 'card-title-cyan',
    subtitle: 'decouple',
    description: 'Ship code dark; turn the feature on independently.',
    code: 'if (flags.newCheckout) renderNew();\n// deploy != release',
  },
  {
    icon: '❤️',
    title: 'Health & Rollback',
    titleClass: 'card-title-green',
    subtitle: 'safety net',
    description: 'Gate on health checks; revert instantly on trouble.',
    code: 'readiness/liveness probes\nblue/green: flip back in seconds',
  },
  {
    icon: '📊',
    title: 'Observe',
    titleClass: 'card-title-amber',
    subtitle: 'watch it',
    description: 'Monitor errors, latency, and traffic during rollout.',
    code: 'error rate ↑ → auto-halt\ndashboards + alerts on the new version',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'AWS Deployment Options',
    titleClass: 'card-title-green',
    subtitle: 'Whitepaper',
    description: 'AWS’ overview of deployment strategies and their trade-offs.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'KodeKloud',
    titleClass: 'card-title-purple',
    subtitle: 'Hands-on labs',
    description: 'Practice rolling, blue/green, and canary deploys in KodeKloud.',
    link: { href: KODEKLOUD_URL, label: 'Open KodeKloud →', external: true },
  },
  {
    icon: '▶️',
    title: 'Top 5 Strategies',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Top 5 Most-Used Deployment Strategies by ByteByteGo — supplement for Day 85.',
    link: {
      href: 'https://www.youtube.com/watch?v=AWVTKBUnoIg',
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

export default function Day085() {
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
          <Link to="/day-084" className="day001-nav-btn day001-nav-home">
            ← Day 84
          </Link>
          <p className="day001-datetime">Thunder Day 85 · 26 Mar 2027</p>
          <Link to="/day-086" className="day001-nav-btn day001-nav-next">
            Day 86 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Deployment</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 85 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DEPLOYMENT STRATEGIES</p>
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
              <p className="day001-profile-role">DEVOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '85%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-five — how to ship without breaking users. <strong>Recreate</strong> is simple
          but has downtime; <strong>rolling</strong> replaces instances gradually;{' '}
          <strong>blue/green</strong> keeps two environments and flips traffic (instant rollback);
          and <strong>canary</strong> sends a small % to the new version first. Make it safe with{' '}
          <strong>feature flags</strong>, <strong>health checks</strong>, fast{' '}
          <strong>rollback</strong>, and <strong>observability</strong> during the rollout — all
          aiming for <strong>zero downtime</strong>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            AWS deployment options
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

        <CardSection icon="🚀" title="STRATEGIES" cards={STRATEGIES} columns={4} />
        <CardSection icon="🛡️" title="SAFE RELEASES" cards={SAFE} columns={3} />
        <CardSection icon="📚" title="DEPLOYMENT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Deployment</span>
          <span>#BlueGreen</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
