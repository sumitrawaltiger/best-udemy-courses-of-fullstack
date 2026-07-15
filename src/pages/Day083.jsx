import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://docs.github.com/en/actions';
const MARKET_URL = 'https://github.com/marketplace?type=actions';

const LEARNT_TODAY = [
  {
    title: 'Workflow',
    text: 'a YAML file in .github/workflows',
  },
  {
    title: 'Events',
    text: 'on: push / pull_request / schedule / manual',
  },
  {
    title: 'Jobs',
    text: 'run on a fresh runner (Ubuntu, etc.)',
  },
  {
    title: 'Steps',
    text: 'run shell commands or use an action',
  },
  {
    title: 'Actions',
    text: 'reusable building blocks from the marketplace',
  },
  {
    title: 'Matrix',
    text: 'run across Node versions or OSes in parallel',
  },
  {
    title: 'Secrets',
    text: '${{ secrets.NAME }} injected securely',
  },
  {
    title: 'Cache & artifacts',
    text: 'speed builds and pass outputs between jobs',
  },
  {
    title: 'Reusable workflows',
    text: 'call one workflow from another (DRY)',
  },
  {
    title: 'Deploy job',
    text: 'build, then deploy on success',
  },
];

const WORKFLOWS = [
  {
    icon: '📄',
    title: 'Anatomy',
    titleClass: 'card-title-cyan',
    subtitle: 'the YAML',
    description: 'A workflow has a name, triggers, and one or more jobs.',
    code: 'name: CI\non: [push]\njobs:\n  build: { runs-on: ubuntu-latest, steps: [...] }',
  },
  {
    icon: '⚡',
    title: 'Events',
    titleClass: 'card-title-green',
    subtitle: 'triggers',
    description: 'Run on pushes, PRs, schedules, or manual dispatch.',
    code: 'on:\n  push: { branches: [main] }\n  pull_request:\n  schedule: [{ cron: "0 2 * * *" }]',
  },
  {
    icon: '🧱',
    title: 'Jobs & Steps',
    titleClass: 'card-title-amber',
    subtitle: 'the work',
    description: 'Jobs run on runners; steps run commands or actions.',
    code: 'steps:\n  - run: npm ci\n  - run: npm test',
  },
  {
    icon: '🧩',
    title: 'Actions',
    titleClass: 'card-title-pink',
    subtitle: 'reuse',
    description: 'Pull prebuilt steps from the marketplace with uses.',
    code: '- uses: actions/checkout@v4\n- uses: actions/setup-node@v4\n  with: { node-version: 20 }',
  },
];

const POWER = [
  {
    icon: '🔢',
    title: 'Matrix',
    titleClass: 'card-title-cyan',
    subtitle: 'parallel',
    description: 'Test many versions/OSes at once from one job.',
    code: 'strategy:\n  matrix: { node: [18, 20, 22] }',
  },
  {
    icon: '🔐',
    title: 'Secrets & Cache',
    titleClass: 'card-title-green',
    subtitle: 'secure + fast',
    description: 'Inject secrets; cache deps to speed up runs.',
    code: 'env: { TOKEN: ${{ secrets.TOKEN }} }\n- uses: actions/cache@v4',
  },
  {
    icon: '🚀',
    title: 'Reusable + Deploy',
    titleClass: 'card-title-amber',
    subtitle: 'ship it',
    description: 'Share workflows, then deploy on a successful build.',
    code: 'deploy:\n  needs: build\n  if: github.ref == "refs/heads/main"',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'GitHub Actions Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The complete GitHub Actions reference — workflows, jobs, and actions.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🛒',
    title: 'Actions Marketplace',
    titleClass: 'card-title-purple',
    subtitle: 'Reusable actions',
    description: 'Thousands of prebuilt actions to drop into your workflows.',
    link: { href: MARKET_URL, label: 'Browse the marketplace →', external: true },
  },
  {
    icon: '▶️',
    title: 'GitHub Actions Tutorial',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'GitHub Actions Tutorial — basic concepts & CI by TechWorld with Nana — for Day 83.',
    link: {
      href: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
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

export default function Day083() {
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
          <Link to="/day-082" className="day001-nav-btn day001-nav-home">
            ← Day 82
          </Link>
          <p className="day001-datetime">Thunder Day 83 · 7 Oct 2026</p>
          <Link to="/day-084" className="day001-nav-btn day001-nav-next">
            Day 84 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>GitHub Actions</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 83 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">GITHUB ACTIONS DEEP DIVE</p>
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
          <div className="day001-progress-bar" style={{ width: '83%' }} />
        </div>

        <p className="day001-summary">
          Day eighty-three — implementing CI/CD with <strong>GitHub Actions</strong>. A{' '}
          <strong>workflow</strong> (YAML in <code>.github/workflows</code>) runs on{' '}
          <strong>events</strong> (push, PR, schedule); each <strong>job</strong> runs on a runner
          with <strong>steps</strong> that call reusable <strong>actions</strong>. Go deeper with a{' '}
          <strong>matrix</strong> to test many versions, <strong>secrets</strong> and{' '}
          <strong>cache</strong>, <strong>reusable workflows</strong>, and a gated{' '}
          <strong>deploy</strong> job. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            GitHub Actions docs
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

        <CardSection icon="📄" title="WORKFLOWS" cards={WORKFLOWS} columns={4} />
        <CardSection icon="⚡" title="POWER FEATURES" cards={POWER} columns={3} />
        <CardSection icon="📚" title="GITHUB ACTIONS RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#GitHubActions</span>
          <span>#CICD</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
