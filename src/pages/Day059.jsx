import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL =
  'https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions';
const DOCS_URL = 'https://github.com/donnemartin/system-design-primer#appendix';

const LEARNT_TODAY = [
  {
    title: 'Building-block toolbox',
    text: 'LB, cache, queue, DB, CDN, gateway — reuse them',
  },
  {
    title: 'Repeatable framework',
    text: 'the same 5 steps for every problem',
  },
  {
    title: 'Common problems',
    text: 'shortener, feed, chat, rate limiter, e-commerce',
  },
  {
    title: 'Numbers to know',
    text: 'latency ladder and rough capacity figures',
  },
  {
    title: 'Estimation shortcuts',
    text: 'powers of 2, ~86,400 seconds/day',
  },
  {
    title: 'Draw clearly',
    text: 'components + the data flow between them',
  },
  {
    title: 'Justify choices',
    text: 'SQL vs NoSQL, sync vs async, cache or not',
  },
  {
    title: 'Start simple',
    text: 'a basic design first, then scale it',
  },
  {
    title: 'Trade-offs everywhere',
    text: 'name what each decision costs',
  },
  {
    title: 'Mock & repeat',
    text: 'practice under time until it’s automatic',
  },
];

const TOOLBOX = [
  {
    icon: '🧰',
    title: 'Building Blocks',
    titleClass: 'card-title-cyan',
    subtitle: 'the toolbox',
    description: 'A small set of components solves most designs.',
    code: 'LB · cache · queue · CDN · gateway\nSQL · NoSQL · object store · search',
  },
  {
    icon: '🔢',
    title: 'Numbers to Know',
    titleClass: 'card-title-green',
    subtitle: 'the latency ladder',
    description: 'Memorize the orders of magnitude to reason about designs.',
    code: 'memory ~100ns · SSD ~100µs\nnetwork RT ~0.5ms (DC) · disk seek ~10ms',
  },
  {
    icon: '🧮',
    title: 'Estimation Shortcuts',
    titleClass: 'card-title-amber',
    subtitle: 'fast math',
    description: 'A few constants make back-of-envelope quick.',
    code: '~86,400 s/day ≈ 10^5\n2^10 ≈ 1K · 2^20 ≈ 1M · 2^30 ≈ 1B',
  },
  {
    icon: '🗃️',
    title: 'SQL vs NoSQL',
    titleClass: 'card-title-pink',
    subtitle: 'pick storage',
    description: 'Relations + transactions vs scale + flexible schema.',
    code: 'SQL   : joins, ACID, strong consistency\nNoSQL : horizontal scale, flexible, eventual',
  },
];

const PRACTICE = [
  {
    icon: '🧭',
    title: 'The Framework',
    titleClass: 'card-title-cyan',
    subtitle: '5 steps',
    description: 'Requirements → estimate → API/HLD → deep dive → scale.',
    code: '1 clarify → 2 estimate → 3 API + HLD\n4 deep dive → 5 scale + trade-offs',
  },
  {
    icon: '📚',
    title: 'Common Problems',
    titleClass: 'card-title-green',
    subtitle: 'the classics',
    description: 'Rehearse the recurring designs until they’re muscle memory.',
    code: 'URL shortener · news feed · chat\nrate limiter · e-commerce · typeahead',
  },
  {
    icon: '🔁',
    title: 'Mock & Iterate',
    titleClass: 'card-title-amber',
    subtitle: 'practice',
    description: 'Time yourself, start simple, then iterate to scale.',
    code: 'simple design → find the bottleneck →\nscale that part → repeat',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'The primer’s question bank with full worked solutions.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Primer Appendix',
    titleClass: 'card-title-green',
    subtitle: 'Numbers & latencies',
    description: 'Powers of two and latency numbers every engineer should know.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'How to Answer SD',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How to Answer System Design Interview Questions by Exponent — for Day 59.',
    link: {
      href: 'https://www.youtube.com/watch?v=L9TfZdODuFQ',
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

export default function Day059() {
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
          <Link to="/day-058" className="day001-nav-btn day001-nav-home">
            ← Day 58
          </Link>
          <p className="day001-datetime">Thunder Day 59 · 4 Aug 2027</p>
          <Link to="/day-060" className="day001-nav-btn day001-nav-next">
            Day 60 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>Practice</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 59 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">SYSTEM DESIGN PRACTICE & FRAMEWORK</p>
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
          <div className="day001-progress-bar" style={{ width: '59%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-nine — the system-design phase finale: a reusable <strong>toolbox</strong>. Most
          designs are assembled from the same <strong>building blocks</strong> (LB, cache, queue, DB,
          CDN, gateway), a handful of <strong>numbers</strong> (the latency ladder), and{' '}
          <strong>estimation shortcuts</strong>. Pair that with the repeatable{' '}
          <strong>5-step framework</strong> and rehearse the <strong>common problems</strong> —
          shortener, feed, chat, rate limiter — starting simple and iterating to scale. Reference:{' '}
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

        <CardSection icon="🧰" title="THE TOOLBOX" cards={TOOLBOX} columns={4} />
        <CardSection icon="🎯" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#Practice</span>
          <span>#Interview</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
