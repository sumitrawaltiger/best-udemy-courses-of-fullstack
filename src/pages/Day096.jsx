import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BIGO_URL = 'https://www.bigocheatsheet.com/';
const YT_URL = 'https://www.youtube.com/watch?v=8hly31xKli0';

const LEARNT_TODAY = [
  {
    title: 'Arrays & strings',
    text: 'two pointers, sliding window, prefix patterns for interviews',
  },
  {
    title: 'Hash maps',
    text: 'O(1) lookups — frequency counts, complements, grouping',
  },
  {
    title: 'Trees intro',
    text: 'BFS / DFS — binary trees, recursion on left and right',
  },
  {
    title: 'Graphs intro',
    text: 'adjacency list, BFS shortest path, DFS connectivity',
  },
  {
    title: 'Big O basics',
    text: 'time & space — O(1), O(n), O(n log n), O(n²) in plain English',
  },
  {
    title: 'Stacks & queues',
    text: 'LIFO / FIFO — parentheses, BFS levels, monotonic stacks',
  },
  {
    title: 'Practice strategy',
    text: 'pattern first, then variants — quality over random grinding',
  },
  {
    title: 'Talk while coding',
    text: 'state complexity and edge cases out loud in interviews',
  },
  {
    title: 'Web-dev overlap',
    text: 'maps = caches; trees = DOM; graphs = dependency / social graphs',
  },
  {
    title: 'Spaced review',
    text: 'revisit weak patterns weekly — retention beats cramming',
  },
];

const DSA_CORE = [
  {
    icon: '📑',
    title: 'Arrays & Strings',
    titleClass: 'card-title-cyan',
    subtitle: 'foundation',
    description: 'Two pointers and sliding windows solve a huge share of easy/mediums.',
    code: 'left / right pointers\nwindow grow & shrink\nprefix sums for ranges',
  },
  {
    icon: '🗂️',
    title: 'Hash Maps',
    titleClass: 'card-title-green',
    subtitle: 'O(1) lookup',
    description: 'Trade space for speed — counts, seen sets, and complements.',
    code: 'const map = new Map();\n// two-sum, anagrams, group by key',
  },
  {
    icon: '🌳',
    title: 'Trees & Graphs',
    titleClass: 'card-title-amber',
    subtitle: 'BFS · DFS',
    description: 'Traverse with recursion or queues; model real dependency graphs.',
    code: 'DFS: recurse left/right\nBFS: queue level by level',
  },
  {
    icon: '📐',
    title: 'Big O Basics',
    titleClass: 'card-title-pink',
    subtitle: 'complexity',
    description: 'Name the cost of loops, nested loops, and log factors.',
    code: 'O(1) · O(log n) · O(n)\nO(n log n) · O(n²)',
  },
];

const PRACTICE = [
  {
    icon: '🎯',
    title: 'Practice Strategy',
    titleClass: 'card-title-cyan',
    subtitle: 'patterns > grind',
    description: 'Learn a pattern, then solve 3–5 variants before moving on.',
    code: 'two pointers → 5 problems\nhash map → 5 problems\nthen mixed timed set',
  },
  {
    icon: '🗣️',
    title: 'Interview Habits',
    titleClass: 'card-title-green',
    subtitle: 'communicate',
    description: 'Clarify input, edge cases, then code; state Big O at the end.',
    code: 'clarify → examples → plan\n→ code → test → complexity',
  },
  {
    icon: '🌐',
    title: 'Web-Dev Overlap',
    titleClass: 'card-title-amber',
    subtitle: 'why it matters',
    description: 'Same structures power caches, the DOM, and service graphs.',
    code: 'Map = cache / dict\ntree = DOM / JSON\ngraph = deps / network',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'Big-O Cheat Sheet',
    titleClass: 'card-title-purple',
    subtitle: 'bigocheatsheet.com',
    description: 'Quick reference for common data structure complexities.',
    link: { href: BIGO_URL, label: 'Open cheat sheet →', external: true },
  },
  {
    icon: '▶️',
    title: 'Data Structures Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Data Structures Easy to Advanced — freeCodeCamp — Day 96.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 96 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/dsa-for-web-developers',
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

export default function Day096() {
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
          <Link to="/day-095" className="day001-nav-btn day001-nav-home">
            ← Day 95
          </Link>
          <p className="day001-datetime">Thunder Day 96</p>
          <Link to="/day-097" className="day001-nav-btn day001-nav-next">
            Day 97 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>DSA</span>
              <span>Interviews</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 96 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DSA FOR WEB DEVELOPERS</p>
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
              <p className="day001-profile-role">DSA</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '96%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-six — the DSA toolkit web developers actually need:{' '}
          <strong>arrays & strings</strong>, <strong>hash maps</strong>,{' '}
          <strong>trees & graphs</strong>, and <strong>Big O</strong>. Practice by pattern, talk
          through complexity, and connect structures to real app work. Reference:{' '}
          <a href={BIGO_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Big-O Cheat Sheet
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

        <CardSection icon="🧠" title="DSA CORE" cards={DSA_CORE} columns={4} />
        <CardSection icon="🎯" title="PRACTICE & HABITS" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="DSA RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#DSA</span>
          <span>#Algorithms</span>
          <span>#InterviewPrep</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
