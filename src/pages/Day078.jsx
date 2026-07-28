import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://git-scm.com/book/en/v2';
const ACTIONS_URL = 'https://docs.github.com/en/actions';

const LEARNT_TODAY = [
  {
    title: 'Branching strategies',
    text: 'GitFlow vs trunk-based development',
  },
  {
    title: 'Merge vs rebase',
    text: 'a merge commit vs a linear history',
  },
  {
    title: 'Interactive rebase',
    text: 'squash, reorder, edit, and drop commits',
  },
  {
    title: 'Cherry-pick',
    text: 'grab a single commit onto another branch',
  },
  {
    title: 'Stash',
    text: 'shelve work-in-progress and come back',
  },
  {
    title: 'Resolve conflicts',
    text: 'read the markers and pick the right hunks',
  },
  {
    title: 'PR workflow',
    text: 'fork/branch → review → merge',
  },
  {
    title: 'GitHub Actions',
    text: 'run CI on every push and pull request',
  },
  {
    title: 'Tags & releases',
    text: 'semantic versioning and release notes',
  },
  {
    title: 'Keep it clean',
    text: '.gitignore and pre-commit hooks',
  },
];

const BRANCHING = [
  {
    icon: '🌳',
    title: 'Strategies',
    titleClass: 'card-title-cyan',
    subtitle: 'how to branch',
    description: 'Pick a model that fits the team and release cadence.',
    code: 'trunk-based : short-lived branches, merge fast\nGitFlow     : main/develop/feature/release',
  },
  {
    icon: '🔀',
    title: 'Merge vs Rebase',
    titleClass: 'card-title-green',
    subtitle: 'history shape',
    description: 'Merge preserves context; rebase gives a clean line.',
    code: 'git merge feature   // merge commit, true history\ngit rebase main     // linear, rewritten history',
  },
  {
    icon: '✏️',
    title: 'Interactive Rebase',
    titleClass: 'card-title-amber',
    subtitle: 'tidy commits',
    description: 'Squash and reword before opening a PR.',
    code: 'git rebase -i HEAD~3\n// pick / squash / reword / drop',
  },
  {
    icon: '🍒',
    title: 'Cherry-pick & Stash',
    titleClass: 'card-title-pink',
    subtitle: 'targeted moves',
    description: 'Apply one commit elsewhere; shelve WIP safely.',
    code: 'git cherry-pick <sha>\ngit stash · git stash pop',
  },
];

const COLLAB = [
  {
    icon: '🔁',
    title: 'PR Workflow',
    titleClass: 'card-title-cyan',
    subtitle: 'collaborate',
    description: 'Branch, push, open a PR, review, then merge.',
    code: 'git switch -c feat/x → push → open PR\nreview → squash-merge',
  },
  {
    icon: '⚙️',
    title: 'Actions (CI)',
    titleClass: 'card-title-green',
    subtitle: 'automate',
    description: 'Run tests/lint/build automatically on every push.',
    code: '# .github/workflows/ci.yml\non: [push, pull_request]\nrun: npm ci && npm test',
  },
  {
    icon: '🏷️',
    title: 'Tags & Releases',
    titleClass: 'card-title-amber',
    subtitle: 'version it',
    description: 'Tag semver releases with notes and artifacts.',
    code: 'git tag -a v1.2.0 -m "release"\ngit push --tags → GitHub Release',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'Pro Git Book',
    titleClass: 'card-title-green',
    subtitle: 'Official book',
    description: 'The free Pro Git book — branching, rebasing, and internals.',
    link: { href: DOCS_URL, label: 'Open the book →', external: true },
  },
  {
    icon: '📘',
    title: 'GitHub Actions Docs',
    titleClass: 'card-title-purple',
    subtitle: 'CI/CD',
    description: 'The official GitHub Actions docs — workflows and CI.',
    link: { href: ACTIONS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Merge vs Rebase',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Git Merge vs Rebase — everything you need to know — by ByteByteGo — for Day 78.',
    link: {
      href: 'https://www.youtube.com/watch?v=0chZFIZLR_0',
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

export default function Day078() {
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
          <Link to="/day-077" className="day001-nav-btn day001-nav-home">
            ← Day 77
          </Link>
          <p className="day001-datetime">Thunder Day 78 · 19 Mar 2027</p>
          <Link to="/day-079" className="day001-nav-btn day001-nav-next">
            Day 79 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DevOps</span>
              <span>Git</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 78 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">GIT & GITHUB ADVANCED WORKFLOWS</p>
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
          <div className="day001-progress-bar" style={{ width: '78%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-eight — a new phase: <strong>DevOps</strong>, starting with advanced Git. I
          learned <strong>branching strategies</strong> (trunk-based vs GitFlow), when to{' '}
          <strong>merge vs rebase</strong>, and how to tidy history with an{' '}
          <strong>interactive rebase</strong>, <strong>cherry-pick</strong>, and <strong>stash</strong>.
          On the collaboration side: the <strong>PR workflow</strong>, running CI with{' '}
          <strong>GitHub Actions</strong>, and cutting <strong>tags &amp; releases</strong> with
          semantic versioning. Reference:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            the Pro Git book
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

        <CardSection icon="🌳" title="BRANCHING" cards={BRANCHING} columns={4} />
        <CardSection icon="🤝" title="COLLABORATE" cards={COLLAB} columns={3} />
        <CardSection icon="📚" title="GIT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DevOps</span>
          <span>#Git</span>
          <span>#GitHub</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
