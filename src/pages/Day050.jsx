import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#design-the-twitter-timeline-and-search';
const DOCS_URL = 'https://github.com/donnemartin/system-design-primer';

const LEARNT_TODAY = [
  {
    title: 'Requirements',
    text: 'post, follow, and read a personalized feed',
  },
  {
    title: 'Fan-out on write',
    text: 'push a new post into every follower’s feed',
  },
  {
    title: 'Fan-out on read',
    text: 'build the feed by pulling posts at read time',
  },
  {
    title: 'Hybrid',
    text: 'push for normal users, pull for celebrities',
  },
  {
    title: 'Feed store',
    text: 'a precomputed timeline per user for fast reads',
  },
  {
    title: 'Ranking',
    text: 'chronological, or relevance-scored',
  },
  {
    title: 'Pagination',
    text: 'cursor-based infinite scroll',
  },
  {
    title: 'Caching',
    text: 'keep hot, active feeds in memory',
  },
  {
    title: 'Celebrity problem',
    text: 'millions of followers make write fan-out explode',
  },
  {
    title: 'Eventual consistency',
    text: 'a feed can lag a little — that’s fine',
  },
];

const GENERATION = [
  {
    icon: '📋',
    title: 'Requirements',
    titleClass: 'card-title-cyan',
    subtitle: 'read-heavy',
    description: 'Post, follow, and read a feed fast — reads dominate.',
    code: 'functional  : post · follow · feed\nnon-func    : <200ms feed, read >> write',
  },
  {
    icon: '📤',
    title: 'Fan-out on Write',
    titleClass: 'card-title-green',
    subtitle: 'push model',
    description: 'On post, write it into each follower’s feed. Fast reads.',
    code: 'onPost(u): for f in followers(u):\n  feed[f].push(post)\n// heavy writes, instant reads',
  },
  {
    icon: '📥',
    title: 'Fan-out on Read',
    titleClass: 'card-title-amber',
    subtitle: 'pull model',
    description: 'Build the feed on request by pulling followees’ posts.',
    code: 'getFeed(u): merge(posts of followees(u))\n// light writes, heavier reads',
  },
  {
    icon: '⚖️',
    title: 'Hybrid',
    titleClass: 'card-title-pink',
    subtitle: 'best of both',
    description: 'Push for most users; pull celebrities’ posts at read time.',
    code: '// normal users  → fan-out on write\n// celebrities    → fan-out on read',
  },
];

const AT_SCALE = [
  {
    icon: '🗂️',
    title: 'Feed Store & Ranking',
    titleClass: 'card-title-cyan',
    subtitle: 'precomputed',
    description: 'Store a per-user timeline; rank chronologically or by score.',
    code: 'feed:userId → [postIds...]\nrank: recency + engagement signals',
  },
  {
    icon: '📜',
    title: 'Pagination & Caching',
    titleClass: 'card-title-green',
    subtitle: 'infinite scroll',
    description: 'Cursor pagination for scroll; cache active users’ feeds.',
    code: 'GET /feed?after=<lastId>\ncache hot feeds in Redis',
  },
  {
    icon: '🌟',
    title: 'Celebrity Problem',
    titleClass: 'card-title-amber',
    subtitle: 'the hard case',
    description: 'One post to 50M followers can’t fan out on write.',
    code: '// don’t push to 50M feeds\n// merge celebrity posts at read time',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The Twitter timeline design in system-design-primer — the same pattern.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Primer Solutions',
    titleClass: 'card-title-green',
    subtitle: 'Worked designs',
    description: 'More worked HLD solutions to model your own answers on.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Design a News Feed',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Design Facebook News Feed — system design interview — by Hello Interview.',
    link: {
      href: 'https://www.youtube.com/watch?v=Qj4-GruzyDU',
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

export default function Day050() {
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
          <Link to="/day-049" className="day001-nav-btn day001-nav-home">
            ← Day 49
          </Link>
          <p className="day001-datetime">Thunder Day 50 · 11 Sep 2026</p>
          <Link to="/day-051" className="day001-nav-btn day001-nav-next">
            Day 51 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>HLD Case Study</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 50 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN A NEWS FEED</p>
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
          <div className="day001-progress-bar" style={{ width: '50%' }} />
        </div>

        <p className="day001-summary">
          Day fifty — halfway! The classic <strong>news feed</strong> HLD. The core choice is{' '}
          <strong>fan-out on write</strong> (push each post into followers’ feeds — instant reads) vs{' '}
          <strong>fan-out on read</strong> (build the feed on request — light writes). The real
          answer is <strong>hybrid</strong>: push for normal users, pull for <strong>celebrities</strong>{' '}
          to avoid an exploding write. Add a precomputed <strong>feed store</strong>,{' '}
          <strong>ranking</strong>, cursor <strong>pagination</strong>, and caching — eventual
          consistency is fine. Reference:{' '}
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

        <CardSection icon="📰" title="FEED GENERATION" cards={GENERATION} columns={4} />
        <CardSection icon="📈" title="AT SCALE" cards={AT_SCALE} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#NewsFeed</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
