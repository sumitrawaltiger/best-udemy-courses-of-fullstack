import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture06-Array-and-Objects-in-Javascript-37943ac5cab9807f801cc8c83755decc?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture06';

const LEARNT_TODAY = [
  {
    title: 'What is an array',
    text: 'one variable for many values — marks = [30, 20, 11, 80, 70] instead of marks1, marks2…',
  },
  {
    title: 'Indexing & length',
    text: 'zero-based index — marks[2] is the third element; marks.length counts items',
  },
  {
    title: 'Heterogeneous arrays',
    text: '[10, 60, "Rohit", true] — any types mixed; update with user[1] = "Anjali"',
  },
  {
    title: 'push, pop, unshift, shift',
    text: 'add/remove from end (push/pop) or start (unshift/shift) — second.js',
  },
  {
    title: 'for & for...of',
    text: 'classic index loop or for (let x of num) when you only need values',
  },
  {
    title: 'slice vs splice',
    text: 'slice copies without changing original; splice mutates — delete and insert',
  },
  {
    title: 'Reference copy',
    text: 'arr2 = arr1 shares memory — changing arr2[2] changes arr1 too',
  },
  {
    title: '2D arrays',
    text: 'array of arrays — arr[0][2] with nested loops for rows and columns',
  },
  {
    title: 'Spread & destructuring',
    text: '[...a, ...b] merges arrays; const [first, ...rest] pulls values out',
  },
  {
    title: 'join, includes, objects',
    text: 'names.join("-"), lastIndexOf, includes — objects use { key: value } pairs',
  },
];

const ARRAY_BASICS = [
  {
    icon: '📋',
    title: 'Create & Access',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'Store 5 marks in one array. Index from 0. marks.length for count.',
    code: 'let marks = [30, 20, 11, 80, 70];\nconsole.log(marks[2]);\nconsole.log(marks.length);',
  },
  {
    icon: '🎨',
    title: 'Mixed Types',
    titleClass: 'card-title-green',
    subtitle: 'Heterogeneous',
    description: 'Numbers, strings, booleans in one array. typeof [] is "object".',
    code: 'let user = [10, 60, "Rohit", true];\nuser[1] = "Anjali";',
  },
  {
    icon: '🔁',
    title: 'Loop Arrays',
    titleClass: 'card-title-blue',
    subtitle: 'for & for...of',
    description: 'Index loop or for (let x of arr) — pick based on whether you need the index.',
    code: 'for (let i = 0; i < marks.length; i++)\n  console.log(marks[i]);\n\nfor (let x of marks)\n  console.log(x);',
  },
];

const ARRAY_METHODS = [
  {
    icon: '➕',
    title: 'push & pop',
    titleClass: 'card-title-amber',
    subtitle: 'End of array',
    description: 'push adds to end; pop removes from end.',
    code: 'let num = [10, 20, 30];\nnum.push(40);\nnum.pop();',
  },
  {
    icon: '⏪',
    title: 'unshift & shift',
    titleClass: 'card-title-pink',
    subtitle: 'Start of array',
    description: 'unshift inserts at beginning; shift removes from beginning.',
    code: 'num.unshift(5);\nnum.shift();',
  },
  {
    icon: '✂️',
    title: 'slice',
    titleClass: 'card-title-purple',
    subtitle: 'Non-mutating copy',
    description: 'marks.slice(2, 4) returns [30, 40] — original unchanged.',
    code: 'const part = marks.slice(2, 4);\nconsole.log(part, marks);',
  },
  {
    icon: '🔧',
    title: 'splice',
    titleClass: 'card-title-lime',
    subtitle: 'Mutating edit',
    description: 'splice(2, 4, 17, 19) deletes 4 items at index 2 and inserts new ones.',
    code: 'marks.splice(2, 1);\nmarks.splice(2, 0, 41, 91);',
  },
];

const ADVANCED_ARRAYS = [
  {
    icon: '▦',
    title: '2D Arrays',
    titleClass: 'card-title-cyan',
    subtitle: 'third.js',
    description: '[[10,20,30],[40,50,69]] — arr[row][col] with nested loops.',
    code: 'const grid = [[10, 20], [30, 40]];\nconsole.log(grid[1][0]);',
  },
  {
    icon: '⋯',
    title: 'Spread Operator',
    titleClass: 'card-title-green',
    subtitle: '...arr',
    description: 'Merge arrays: const all = [...a, ...b, ...c]',
    code: 'const merged = [...[1, 2], ...[3, 4]];\nconsole.log(merged);',
  },
  {
    icon: '📦',
    title: 'Destructuring',
    titleClass: 'card-title-blue',
    subtitle: 'Rest operator',
    description: 'const [first, second, ...rest] = arr — rest collects leftovers.',
    code: 'const [a, b, ...rest] = [10, 20, 30, 40];\nconsole.log(a, rest);',
  },
  {
    icon: '🔗',
    title: 'join & search',
    titleClass: 'card-title-amber',
    subtitle: 'fourth.js',
    description: 'join("-") to string. includes() and lastIndexOf() to search.',
    code: 'names.join("-");\nnames.includes("Mohit");',
  },
];

const OBJECTS_PRACTICE = [
  {
    icon: '📦',
    title: 'Object Basics',
    titleClass: 'card-title-purple',
    subtitle: 'Key-Value',
    description: '{ name: "Rohit", age: 20 } — access with obj.name or obj["age"].',
    code: 'const user = { name: "Rohit", age: 20 };\nconsole.log(user.name);',
  },
  {
    icon: '🍗',
    title: 'Real Data Model',
    titleClass: 'card-title-pink',
    subtitle: 'food object',
    description: 'Model products: name, price, rating — like a Zomato item.',
    code: 'const food = {\n  name: "Chicken Bucket",\n  price: 798,\n  rating: 4.1\n};',
  },
  {
    icon: '🔗',
    title: 'Reference Copy',
    titleClass: 'card-title-lime',
    subtitle: 'Like objects',
    description: 'arr2 = arr1 — both point to same array. arr2[2] = 84 changes arr1.',
    code: 'const arr2 = arr1;\narr2[2] = 84;\nconsole.log(arr1);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 06 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Arrays & objects — indexing, methods, slice/splice, 2D arrays, spread, destructuring.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture06 Code',
    description: 'first.js through fourth.js — full array journey from basics to spread/rest.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Arrays — Ania',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JavaScript Arrays by Code with Ania — supplement for Thunder Lecture 06.',
    link: {
      href: 'https://www.youtube.com/watch?v=yQ1fz8LY354',
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

export default function Day006() {
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
          <Link to="/day-005" className="day001-nav-btn day001-nav-home">
            ← Day 5
          </Link>
          <p className="day001-datetime">Thunder Day 6 · 94 days left</p>
          <Link to="/day-007" className="day001-nav-btn day001-nav-next">
            Day 7 →
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
                DAY 6 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">ARRAYS & OBJECTS</p>
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
          <div className="day001-progress-bar" style={{ width: '6%' }} />
        </div>

        <p className="day001-summary">
          Day six of my 100-day journey — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 06
          </a>
          . I learned arrays from scratch: indexing, push/pop, slice vs splice, 2D arrays, spread,
          and destructuring. I built objects with key-value pairs and saw how arrays copy by
          reference in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture06 on GitHub
          </a>
          . Data structures are how apps remember things.
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

        <CardSection icon="📋" title="ARRAY BASICS" cards={ARRAY_BASICS} columns={3} />
        <CardSection icon="🛠️" title="ARRAY METHODS" cards={ARRAY_METHODS} columns={4} />
        <CardSection icon="🚀" title="ADVANCED ARRAYS" cards={ADVANCED_ARRAYS} columns={4} />
        <CardSection icon="📦" title="OBJECTS & REFERENCES" cards={OBJECTS_PRACTICE} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 06" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Arrays</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
