import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture05-37743ac5cab980fc90afeec0d60a0fda?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture05';

const LEARNT_TODAY = [
  {
    title: 'Why loops matter',
    text: 'first.js — stop copy-pasting console.log 10 times; one for loop repeats anything',
  },
  {
    title: 'Print 1 to N & N to 1',
    text: 'second.js — forward i++ and backward i-- loops replace manual number printing',
  },
  {
    title: 'Even & odd series',
    text: 'i += 2 from 2 or 1 — first 10 even numbers and first 10 odd numbers',
  },
  {
    title: 'Multiplication tables',
    text: '17 table with i += 17, or 13*i loop — homework: print 27 table',
  },
  {
    title: 'Sum with loop',
    text: 'let sum = 0; sum += i — add 1 through N one by one in third.js',
  },
  {
    title: 'Gauss formula',
    text: 'n * (n + 1) / 2 — instant sum even for 5 billion numbers, no slow loop',
  },
  {
    title: 'Nested loops',
    text: 'fourth.js — outer loop = rows, inner loop = columns, build str += "*"',
  },
  {
    title: 'Star patterns',
    text: 'pattern.js — right triangle, inverted triangle, number triangle (1, 2 2, 3 3 3)',
  },
  {
    title: 'Number grid',
    text: 'four rows of "1 2 3 4 5" — nested loop with str + i + " "',
  },
  {
    title: 'fromCharCode A–Z',
    text: 'printabc.js — ASCII 65–90 for A–Z, 97–122 for a–z',
  },
];

const LOOP_BASICS = [
  {
    icon: '🔁',
    title: 'Repeat with for',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'Replace 10 copy-pasted lines with for (let i = 1; i <= 10; i++).',
    code: 'for (let i = 1; i <= 10; i++) {\n  console.log("Hello World");\n}',
  },
  {
    icon: '🔢',
    title: '1 to 10',
    titleClass: 'card-title-green',
    subtitle: 'second.js',
    description: 'Print numbers forward: for (let i = 1; i <= 10; i++) console.log(i).',
    code: 'for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}',
  },
  {
    icon: '⏬',
    title: '10 to 1',
    titleClass: 'card-title-blue',
    subtitle: 'Countdown',
    description: 'Decrement: for (let i = 10; i >= 1; i--) prints 10 9 8 … 1.',
    code: 'for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}',
  },
];

const SERIES_TABLES = [
  {
    icon: '2️⃣',
    title: 'Even Numbers',
    titleClass: 'card-title-amber',
    subtitle: 'i += 2',
    description: 'First 10 evens: for (let i = 2; i <= 20; i += 2).',
    code: 'for (let i = 2; i <= 20; i += 2) {\n  console.log(i);\n}',
  },
  {
    icon: '1️⃣',
    title: 'Odd Numbers',
    titleClass: 'card-title-pink',
    subtitle: 'i += 2 from 1',
    description: 'First 10 odds: for (let i = 1; i <= 19; i += 2).',
    code: 'for (let i = 1; i <= 19; i += 2) {\n  console.log(i);\n}',
  },
  {
    icon: '✖️',
    title: 'Times Tables',
    titleClass: 'card-title-purple',
    subtitle: '13 & 17',
    description: '13*i or i += 17. Homework: print 27 table ten times.',
    code: 'for (let i = 1; i <= 10; i++) {\n  console.log(13 * i);\n}',
  },
  {
    icon: '➕',
    title: 'Gauss Sum',
    titleClass: 'card-title-lime',
    subtitle: 'third.js',
    description: 'n*(n+1)/2 beats looping 5 billion additions.',
    code: 'console.log((50 * 51) / 2);\nconsole.log((100 * 101) / 2);',
  },
];

const PATTERNS = [
  {
    icon: '⭐',
    title: 'Right Triangle',
    titleClass: 'card-title-cyan',
    subtitle: 'pattern.js',
    description: 'Inner loop runs col <= row. Each row adds one more star.',
    code: 'for (let row = 1; row <= 5; row++) {\n  let str = "";\n  for (let col = 1; col <= row; col++)\n    str += "*";\n  console.log(str);\n}',
  },
  {
    icon: '🔻',
    title: 'Inverted Triangle',
    titleClass: 'card-title-green',
    subtitle: 'j counts down',
    description: 'for (let j = 5; j >= 1; j--) — stars decrease each row.',
    code: 'for (let j = 5; j >= 1; j--) {\n  let str = "";\n  for (let i = 1; i <= j; i++) str += "*";\n  console.log(str);\n}',
  },
  {
    icon: '🔢',
    title: 'Number Triangle',
    titleClass: 'card-title-blue',
    subtitle: '1, 2 2, 3 3 3',
    description: 'str + j + " " repeats the row number j times.',
    code: 'for (let j = 1; j <= 5; j++) {\n  let str = "";\n  for (let i = 1; i <= j; i++)\n    str += j + " ";\n  console.log(str);\n}',
  },
  {
    icon: '▦',
    title: 'Star Rectangle',
    titleClass: 'card-title-amber',
    subtitle: 'fourth.js',
    description: '6 rows × 5 stars — fixed inner loop, outer loop for rows.',
    code: 'for (let j = 1; j <= 6; j++) {\n  let str = "";\n  for (let i = 1; i <= 5; i++) str += "*";\n  console.log(str);\n}',
  },
];

const PRACTICE_FILES = [
  {
    icon: '📜',
    title: 'printabc.js',
    titleClass: 'card-title-purple',
    subtitle: 'A to Z',
    description: 'String.fromCharCode(65) → "A". Loop 65–90 uppercase, 97–122 lowercase.',
    code: 'for (let i = 65; i <= 90; i++)\n  console.log(String.fromCharCode(i));',
  },
  {
    icon: '📐',
    title: 'pattern.js',
    titleClass: 'card-title-pink',
    subtitle: 'All Patterns',
    description: 'Right triangle, inverted, number triangle — run each block separately.',
    code: 'for (let row = 1; row <= 5; row++)\n  console.log("*".repeat(row));',
  },
  {
    icon: '🧮',
    title: 'third.js',
    titleClass: 'card-title-lime',
    subtitle: 'Sum Formula',
    description: 'Compare loop sum vs n*(n+1)/2 for N = 50 and N = 5 billion.',
    code: 'let sum = 0;\nfor (let i = 1; i <= 50; i++) sum += i;\nconsole.log(sum);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 05 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Control flow & patterns — number series, tables, Gauss sum, nested loops, star patterns.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture05 Code',
    description:
      'first.js through printabc.js — six files covering loops, sums, patterns, and alphabet.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Star Patterns — YouTube',
    titleClass: 'card-title-amber',
    subtitle: 'Code Step By Step',
    description:
      'Star Pattern Programs with Loops — free supplement for Thunder Lecture 05.',
    link: {
      href: 'https://www.youtube.com/watch?v=VjGYVG9oyPY',
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

export default function Day005() {
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
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-004" className="day001-nav-btn day001-nav-home">
            ← Day 4
          </Link>
          <p className="day001-datetime">Thunder Day 5 · 9 Jul 2026</p>
          <Link to="/day-006" className="day001-nav-btn day001-nav-next">
            Day 6 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>JavaScript</span>
              <span>Thunder</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 5 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CONTROL FLOW & PATTERNS</p>
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
              <p className="day001-profile-role">JS · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '5%' }} />
        </div>

        <p className="day001-summary">
          Day five of my 100-day journey — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 05
          </a>
          . I printed number series, multiplication tables, and used the Gauss formula{' '}
          <code>n*(n+1)/2</code>. I built star and number patterns with nested loops and printed
          A–Z with <code>fromCharCode</code> in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture05 on GitHub
          </a>
          . Patterns train your loop thinking.
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

        <CardSection icon="🔁" title="LOOP BASICS" cards={LOOP_BASICS} columns={3} />
        <CardSection icon="🔢" title="SERIES & TABLES" cards={SERIES_TABLES} columns={4} />
        <CardSection icon="⭐" title="NESTED PATTERNS" cards={PATTERNS} columns={4} />
        <CardSection icon="🛠️" title="GITHUB PRACTICE FILES" cards={PRACTICE_FILES} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 05" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Patterns</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
