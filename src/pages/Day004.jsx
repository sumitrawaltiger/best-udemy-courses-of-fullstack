import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture04-Loop-Number-math-and-String-37643ac5cab9802ba80ffca6c7e961d6?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture04';

const LEARNT_TODAY = [
  {
    title: 'if / else if / else',
    text: 'conditionals before loops — age checks with multiple branches in second.js',
  },
  {
    title: 'for loop',
    text: 'for (let i = 1; i <= 10; i++) prints 1 to 10 — init, condition, update',
  },
  {
    title: 'while & do-while',
    text: 'while checks first; do-while runs the body at least once then checks',
  },
  {
    title: 'parseInt & parseFloat',
    text: 'parseInt("100px") → 100 — NaN when conversion fails like Number("10av")',
  },
  {
    title: 'Number precision',
    text: '0.1 + 0.2 is not 0.3 — store money as paise/cents integers, divide for display',
  },
  {
    title: 'toFixed & toPrecision',
    text: 'format decimals for display — num.toFixed(2) and num.toPrecision(5)',
  },
  {
    title: 'Math object',
    text: 'Math.abs, floor, ceil, random — avoid new Number(); use Math not constructors',
  },
  {
    title: 'Random OTP pattern',
    text: 'Math.floor(Math.random() * (max - min + 1) + min) — 4-digit OTP homework 1000–9999',
  },
  {
    title: 'String methods',
    text: 'slice, trim, split, replaceAll, includes, lastIndexOf — loop characters with str[i]',
  },
  {
    title: 'Bitwise preview',
    text: '8 >> 2 = 2 — fintech stores paise not floats; same idea for BTC sats',
  },
];

const LOOPS = [
  {
    icon: '🔀',
    title: 'if / else if / else',
    titleClass: 'card-title-cyan',
    subtitle: 'Conditionals',
    description: 'Run code only when conditions match. Thunder checks age: child, adult, or old.',
    code: 'if (age < 18) {\n  console.log("child");\n} else if (age < 60) {\n  console.log("adult");\n} else {\n  console.log("old");\n}',
  },
  {
    icon: '🔁',
    title: 'for Loop',
    titleClass: 'card-title-green',
    subtitle: 'Fixed Repetition',
    description: 'Print 1 to 10 with for (let i = 1; i <= 10; i++). Best when you know how many times.',
    code: 'for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}',
  },
  {
    icon: '♾️',
    title: 'while & do-while',
    titleClass: 'card-title-blue',
    subtitle: 'Condition-Driven',
    description: 'while checks first. do-while always runs once — useful for menus and retries.',
    code: 'let i = 1;\nwhile (i <= 10) {\n  console.log(i);\n  i++;\n}',
  },
];

const NUMBERS_MATH = [
  {
    icon: '🔢',
    title: 'parseInt / parseFloat',
    titleClass: 'card-title-amber',
    subtitle: 'String → Number',
    description: 'parseInt("100px") → 100. NaN when it fails. Watch for 0/0 and Infinity.',
    code: 'console.log(parseInt("100px"));\nconsole.log(Number("10av")); // NaN',
  },
  {
    icon: '💰',
    title: 'Paise Not Floats',
    titleClass: 'card-title-pink',
    subtitle: 'Financial Precision',
    description: '0.1 + 0.2 ≠ 0.3. Banks store 12001 paise + 13002 paise, divide by 100 for rupees.',
    code: 'let p1 = 12001, p2 = 13002;\nconsole.log((p1 + p2) / 100);',
  },
  {
    icon: '📐',
    title: 'Math.floor / ceil',
    titleClass: 'card-title-purple',
    subtitle: 'Round Down / Up',
    description: 'Math.floor(2.3) → 2. Math.ceil(-5.3) → -5. Math.abs(-23) → 23.',
    code: 'console.log(Math.floor(2.3));\nconsole.log(Math.ceil(-5.3));',
  },
  {
    icon: '🎲',
    title: 'Math.random & OTP',
    titleClass: 'card-title-lime',
    subtitle: 'Random Ranges',
    description:
      'Math.random() is [0,1). Formula: Math.floor(Math.random()*(max-min+1)+min). Homework: 4-digit OTP.',
    code: 'let otp = Math.floor(\n  Math.random() * (9999 - 1000) + 1000\n);\nconsole.log(otp);',
  },
];

const STRING_TOOLS = [
  {
    icon: '📝',
    title: 'Length & Index',
    titleClass: 'card-title-cyan',
    subtitle: 'str[i]',
    description: 'str[1] gets character at index. Loop: for (let i = 0; i < str.length; i++).',
    code: 'let str = "Hello";\nconsole.log(str[1], str.length);',
  },
  {
    icon: '✂️',
    title: 'slice & trim',
    titleClass: 'card-title-green',
    subtitle: 'Extract & Clean',
    description: 'slice(2, 8) extracts. trim() removes whitespace. slice supports negative indices.',
    code: 'console.log(str.slice(2, 8));\nconsole.log("  hi  ".trim());',
  },
  {
    icon: '🔍',
    title: 'split & replaceAll',
    titleClass: 'card-title-blue',
    subtitle: 'Transform',
    description: '"Amir Rohit Anuj".split(" ") → array. replaceAll swaps every match.',
    code: 'let data = "Amir Rohit Anuj";\nconsole.log(data.split(" "));',
  },
  {
    icon: '🔎',
    title: 'includes & lastIndexOf',
    titleClass: 'card-title-amber',
    subtitle: 'Search',
    description: 'includes checks if substring exists. lastIndexOf finds the last occurrence.',
    code: 'console.log(str.includes("oht"));\nconsole.log(str.lastIndexOf("Negi"));',
  },
];

const PRACTICE_TOOLS = [
  {
    icon: '📓',
    title: 'second.js',
    titleClass: 'card-title-purple',
    subtitle: 'Loops & if/else',
    description: 'Uncomment if/else, for, while, and do-while blocks one at a time.',
    code: 'for (let i = 1; i <= 5; i++) {\n  console.log("Day", i);\n}',
  },
  {
    icon: '📜',
    title: 'strings.js',
    titleClass: 'card-title-pink',
    subtitle: 'Every String Method',
    description: 'replaceAll, slice, trim, split — walk the full file on GitHub.',
    code: 'let s = "Rohit Negi";\nconsole.log(s.replaceAll("Negi", "JS"));',
  },
  {
    icon: '🧮',
    title: 'third.js',
    titleClass: 'card-title-lime',
    subtitle: 'Math & Numbers',
    description: 'toFixed, toPrecision, Math.random ranges — OTP generation pattern.',
    code: 'console.log((0.1 + 0.2).toFixed(2));',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 04 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Loops, Number, Math & String — if/else, for/while, parseInt, Math.random, string methods, precision.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture04 Code',
    description:
      'first.js, second.js, strings.js, third.js — four files covering the full lecture.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Loops — Mosh',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description:
      'JavaScript Loops by Programming with Mosh — plus Code with Ania string methods supplement.',
    link: {
      href: 'https://www.youtube.com/watch?v=s9wW2PpJsmQ',
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

export default function Day004() {
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
          <Link to="/day-003" className="day001-nav-btn day001-nav-home">
            ← Day 3
          </Link>
          <p className="day001-datetime">Thunder Day 4 · 8 Jul 2026</p>
          <Link to="/day-005" className="day001-nav-btn day001-nav-next">
            Day 5 →
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
                DAY 4 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">LOOPS, NUMBERS, MATH & STRINGS</p>
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
          <div className="day001-progress-bar" style={{ width: '4%' }} />
        </div>

        <p className="day001-summary">
          Day four of my 100-day journey — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 04
          </a>
          . I learned if/else, for, while, and do-while loops. I explored{' '}
          <code>Math.random()</code> for OTP generation, fixed float precision with paise storage,
          and mastered string methods in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture04 on GitHub
          </a>
          . Loops repeat; strings and numbers power real apps.
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

        <CardSection icon="🔁" title="LOOPS & CONDITIONALS" cards={LOOPS} columns={3} />
        <CardSection icon="🔢" title="NUMBERS & MATH" cards={NUMBERS_MATH} columns={4} />
        <CardSection icon="📝" title="STRING METHODS" cards={STRING_TOOLS} columns={4} />
        <CardSection icon="🛠️" title="GITHUB PRACTICE FILES" cards={PRACTICE_TOOLS} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 04" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Loops</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
