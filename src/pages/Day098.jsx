import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FIRST_PR_URL = 'https://github.com/firstcontributions/first-contributions';
const YT_URL = 'https://www.youtube.com/watch?v=v2X51AVgl3o';

const LEARNT_TODAY = [
  {
    title: 'Why open source',
    text: 'real code review, public proof of work, and network growth',
  },
  {
    title: 'Finding projects',
    text: 'tools you already use — libs in your stack beat random repos',
  },
  {
    title: 'Good first issues',
    text: 'labels like good-first-issue / help-wanted — start small',
  },
  {
    title: 'Read CONTRIBUTING',
    text: 'conventions, CLA, branch names, commit style — follow the repo',
  },
  {
    title: 'PR workflow',
    text: 'fork → branch → commit → PR → respond to review → merge',
  },
  {
    title: 'Small PRs win',
    text: 'docs, typos, tests, tiny bugs — ship value without boiling the ocean',
  },
  {
    title: 'Community etiquette',
    text: 'be patient, polite, and specific — maintainers are volunteers',
  },
  {
    title: 'Ask before big changes',
    text: 'open an issue or discussion before a large refactor PR',
  },
  {
    title: 'Credit & licenses',
    text: 'respect LICENSE; never paste proprietary code into OSS',
  },
  {
    title: 'Grow in public',
    text: 'share merged PRs on LinkedIn/GitHub — compound signal over time',
  },
];

const OSS_START = [
  {
    icon: '🌍',
    title: 'Why Open Source',
    titleClass: 'card-title-cyan',
    subtitle: 'career + craft',
    description: 'Get reviewed by strangers, learn real workflows, show public impact.',
    code: 'portfolio signal\ncode review practice\ncommunity network',
  },
  {
    icon: '🔎',
    title: 'Finding Projects',
    titleClass: 'card-title-green',
    subtitle: 'use what you use',
    description: 'Contribute to libraries and tools already in your daily stack.',
    code: 'React · Vite · Express\ndocs you wish existed',
  },
  {
    icon: '🏷️',
    title: 'Good First Issues',
    titleClass: 'card-title-amber',
    subtitle: 'start here',
    description: 'Filter by beginner-friendly labels; read the issue fully first.',
    code: 'label:good-first-issue\nlabel:help-wanted',
  },
  {
    icon: '🔀',
    title: 'PR Workflow',
    titleClass: 'card-title-pink',
    subtitle: 'fork → merge',
    description: 'Branch, small commits, clear PR description, address review feedback.',
    code: 'fork → branch → push\nopen PR → iterate → merge',
  },
];

const ETIQUETTE = [
  {
    icon: '🤝',
    title: 'Community Etiquette',
    titleClass: 'card-title-cyan',
    subtitle: 'be a good citizen',
    description: 'Thank reviewers, stay kind under feedback, don’t ping spam.',
    code: 'assume good intent\nreply with specifics\nclose or update stale PRs',
  },
  {
    icon: '💬',
    title: 'Ask Before Big PRs',
    titleClass: 'card-title-green',
    subtitle: 'align early',
    description: 'Propose the change in an issue so maintainers can guide scope.',
    code: 'issue → design OK?\nthen PR with link back',
  },
  {
    icon: '📣',
    title: 'Grow in Public',
    titleClass: 'card-title-amber',
    subtitle: 'share wins',
    description: 'Document merged PRs — recruiters and peers notice consistency.',
    code: 'PR link + what you learned\npin the repo if proud',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'First Contributions',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub',
    description: 'A friendly guided first PR for absolute beginners.',
    link: { href: FIRST_PR_URL, label: 'Open First Contributions →', external: true },
  },
  {
    icon: '▶️',
    title: 'Open Source Guide',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Contributing to Open Source Will Change Your Life — Day 98.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 98 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/open-source-contribution',
      label: 'Open lesson →',
      external: false,
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

export default function Day098() {
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
          <Link to="/day-097" className="day001-nav-btn day001-nav-home">
            ← Day 97
          </Link>
          <p className="day001-datetime">Thunder Day 98</p>
          <Link to="/day-099" className="day001-nav-btn day001-nav-next">
            Day 99 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Open Source</span>
              <span>GitHub</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 98 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">OPEN SOURCE CONTRIBUTION</p>
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
              <p className="day001-profile-role">OPEN SOURCE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '98%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-eight — contribute for real: find projects, pick{' '}
          <strong>good first issues</strong>, follow the <strong>PR workflow</strong>, and practice{' '}
          <strong>community etiquette</strong>. Small merged PRs compound into a public track
          record. Reference:{' '}
          <a
            href={FIRST_PR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-inline-link"
          >
            First Contributions
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

        <CardSection icon="🌍" title="GET STARTED" cards={OSS_START} columns={4} />
        <CardSection icon="🤝" title="ETIQUETTE & GROWTH" cards={ETIQUETTE} columns={3} />
        <CardSection icon="📚" title="OSS RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#OpenSource</span>
          <span>#GitHub</span>
          <span>#FirstPR</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
