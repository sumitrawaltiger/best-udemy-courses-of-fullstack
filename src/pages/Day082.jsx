import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL =
  'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment';
const KODEKLOUD_URL = 'https://kodekloud.com/';

const LEARNT_TODAY = [
  {
    title: 'CI',
    text: 'integrate and test on every push, automatically',
  },
  {
    title: 'CD',
    text: 'deliver (to staging) or deploy (to prod) automatically',
  },
  {
    title: 'Pipeline stages',
    text: 'build → test → deploy, in order',
  },
  {
    title: 'Fail fast',
    text: 'catch problems in the earliest stage',
  },
  {
    title: 'Artifacts',
    text: 'build once, promote the same artifact onward',
  },
  {
    title: 'Environments',
    text: 'dev → staging → production',
  },
  {
    title: 'Automated tests',
    text: 'the gate that must pass to proceed',
  },
  {
    title: 'Rollback',
    text: 'revert quickly when a deploy goes wrong',
  },
  {
    title: 'Secrets',
    text: 'injected at runtime, never committed',
  },
  {
    title: 'Tools',
    text: 'GitHub Actions, GitLab CI, Jenkins',
  },
];

const CI = [
  {
    icon: '🔄',
    title: 'Continuous Integration',
    titleClass: 'card-title-cyan',
    subtitle: 'merge often',
    description: 'Every push triggers an automated build and test run.',
    code: 'push → checkout → install → lint → test\n// broken build blocks the merge',
  },
  {
    icon: '🪜',
    title: 'Pipeline Stages',
    titleClass: 'card-title-green',
    subtitle: 'in sequence',
    description: 'A pipeline runs ordered stages; a failure stops it.',
    code: 'build → test → package → deploy\n// each stage gates the next',
  },
  {
    icon: '⚡',
    title: 'Fail Fast',
    titleClass: 'card-title-amber',
    subtitle: 'early feedback',
    description: 'Cheap, fast checks first so failures surface quickly.',
    code: 'lint + unit tests (seconds)\nthen slower integration/e2e',
  },
  {
    icon: '📦',
    title: 'Artifacts',
    titleClass: 'card-title-pink',
    subtitle: 'build once',
    description: 'Build a single artifact/image and promote it through envs.',
    code: 'build image :sha → test it → deploy the SAME image\n// never rebuild per environment',
  },
];

const CD = [
  {
    icon: '🚚',
    title: 'Delivery vs Deployment',
    titleClass: 'card-title-cyan',
    subtitle: 'the difference',
    description: 'Delivery = ready to release; deployment = auto to prod.',
    code: 'CDelivery : one click to prod\nCDeployment: every green build → prod',
  },
  {
    icon: '🌍',
    title: 'Environments',
    titleClass: 'card-title-green',
    subtitle: 'promote',
    description: 'Move a build through dev → staging → production.',
    code: 'merge → staging (auto)\napprove → production',
  },
  {
    icon: '↩️',
    title: 'Rollback & Secrets',
    titleClass: 'card-title-amber',
    subtitle: 'safety',
    description: 'Revert bad deploys fast; inject secrets securely.',
    code: 'redeploy previous image on failure\nsecrets from the CI vault, not git',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'CI vs CD vs CD',
    titleClass: 'card-title-green',
    subtitle: 'Atlassian guide',
    description: 'Atlassian’s clear explainer on integration, delivery, and deployment.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'KodeKloud',
    titleClass: 'card-title-purple',
    subtitle: 'Hands-on labs',
    description: 'Practice real CI/CD and DevOps pipelines in KodeKloud labs.',
    link: { href: KODEKLOUD_URL, label: 'Open KodeKloud →', external: true },
  },
  {
    icon: '▶️',
    title: 'CI/CD Explained',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'DevOps CI/CD Explained in 100 Seconds by Fireship — supplement for Day 82.',
    link: {
      href: 'https://www.youtube.com/watch?v=scEDHsr3APg',
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

export default function Day082() {
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
          <Link to="/day-081" className="day001-nav-btn day001-nav-home">
            ← Day 81
          </Link>
          <p className="day001-datetime">Thunder Day 82 · 24 Sep 2026</p>
          <Link to="/day-083" className="day001-nav-btn day001-nav-next">
            Day 83 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>CI/CD</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 82 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CI/CD PIPELINES</p>
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
          <div className="day001-progress-bar" style={{ width: '82%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-two — automate the path from commit to production.{' '}
          <strong>CI</strong> builds and tests on every push (fail fast on cheap checks);{' '}
          <strong>CD</strong> then delivers or deploys automatically. A <strong>pipeline</strong>{' '}
          runs ordered stages — build → test → deploy — producing one <strong>artifact</strong> that
          is promoted through <strong>dev → staging → prod</strong>. Add automated{' '}
          <strong>tests</strong> as the gate, fast <strong>rollback</strong>, and injected{' '}
          <strong>secrets</strong>. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            CI vs CD guide
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

        <CardSection icon="🔄" title="CONTINUOUS INTEGRATION" cards={CI} columns={4} />
        <CardSection icon="🚚" title="CONTINUOUS DELIVERY" cards={CD} columns={3} />
        <CardSection icon="📚" title="CI/CD RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#CICD</span>
          <span>#Pipelines</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
