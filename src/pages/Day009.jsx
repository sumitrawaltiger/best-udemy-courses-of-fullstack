import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture09-Callback-forEach-map-filter-reduce-37d43ac5cab980e0a44ef39a89b81143?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture09';

const LEARNT_TODAY = [
  {
    title: 'Callback recap',
    text: 'calculator(10, 20, mul) — the caller passes the operation as a function',
  },
  {
    title: 'Anonymous & arrow callbacks',
    text: 'calculator(15, 3, (a, b) => a / b) — no named function needed',
  },
  {
    title: 'Bubble sort',
    text: 'built sorting by hand with nested loops before trusting sort()',
  },
  {
    title: 'Sort with a callback',
    text: 'Callback(arr[j], arr[j+1]) decides the swap — (a, b) => a > b for ascending',
  },
  {
    title: 'Array.prototype',
    text: 'attach your own methods — sorting, forLoop, filtered — to every array',
  },
  {
    title: 'forEach',
    text: 'callback receives (value, index, array) — extra params are just ignored',
  },
  {
    title: 'map',
    text: 'arr.map(num => num * 5) — new transformed array, same length',
  },
  {
    title: 'filter & this',
    text: 'built filtered() with for...of over this — then used the real filter',
  },
  {
    title: 'reduce',
    text: 'accumulator pattern — sum with initial 0, product with initial 1',
  },
  {
    title: 'Sets',
    text: 'unique values only — add/has, dedupe emails with [...new Set(email)]',
  },
];

const CALLBACK_PATTERNS = [
  {
    icon: '🧮',
    title: 'Calculator Callback',
    titleClass: 'card-title-cyan',
    subtitle: 'first.js',
    description: 'One calculator, any operation — add, sub, mul, or an inline arrow.',
    code: 'function calculator(num1, num2, caller) {\n  const result = caller(num1, num2);\n  console.log(`Your result ${result}`);\n}\ncalculator(10, 20, mul);\ncalculator(15, 3, (a, b) => a / b);',
  },
  {
    icon: '🫧',
    title: 'Build Your Own Sort',
    titleClass: 'card-title-green',
    subtitle: 'customize.js → callback.js',
    description: 'Bubble sort by hand — then let a callback decide when to swap.',
    code: 'Array.prototype.sorting = function (Callback) {\n  // bubble sort\n  if (Callback(arr[j], arr[j + 1])) {\n    /* swap */\n  }\n};\narr.sorting((a, b) => a > b);',
  },
  {
    icon: '🔁',
    title: 'Custom forLoop',
    titleClass: 'card-title-blue',
    subtitle: 'forEach.js',
    description: 'Rebuild forEach yourself — call the callback with (value, index, array).',
    code: 'Array.prototype.forLoop = function (Callback) {\n  for (let i = 0; i < arr.length; i++) {\n    Callback(arr[i], i, arr);\n  }\n};',
  },
];

const CORE_METHODS = [
  {
    icon: '📢',
    title: 'forEach',
    titleClass: 'card-title-cyan',
    subtitle: '(value, index, array)',
    description: 'Runs the callback for every element — extra params come as undefined.',
    code: 'const arr = [10, 20, 8];\narr.forEach((i, j, k) => {\n  console.log(i, j, k);\n});',
  },
  {
    icon: '🗺️',
    title: 'map',
    titleClass: 'card-title-green',
    subtitle: 'map.js',
    description: 'Transform every element — returns a new array of the same length.',
    code: 'const arr = [10, 20, 40, 73, 18];\nconst newArr = arr.map((num) => num * 5);\nconsole.log(newArr);',
  },
  {
    icon: '🚰',
    title: 'filter',
    titleClass: 'card-title-amber',
    subtitle: 'filter.js',
    description: 'Keep elements that pass the test — built filtered() with this first.',
    code: 'Array.prototype.filtered = function (Callback) {\n  const answer = [];\n  for (let num of this)\n    if (Callback(num)) answer.push(num);\n  return answer;\n};\narr.filtered((num) => num > 10);',
  },
  {
    icon: '🧮',
    title: 'reduce',
    titleClass: 'card-title-pink',
    subtitle: 'reducer.js',
    description: 'Boil an array down to one value — accumulator plus initial value.',
    code: 'const sum = arr.reduce((acc, num) => {\n  return acc + num;\n}, 0);\nconst product = arr.reduce((acc, num) => acc * num, 1);',
  },
];

const REAL_WORLD_AND_SETS = [
  {
    icon: '🛒',
    title: 'Filter + Map Chain',
    titleClass: 'card-title-cyan',
    subtitle: 'realworld.js',
    description: '20 products → 15 in stock → clean {name, category, price} objects.',
    code: 'const pro = products\n  .filter((goods) => goods.inStock)\n  .map((goods) => ({\n    name: goods.name,\n    price: goods.price,\n  }));',
  },
  {
    icon: '🎯',
    title: 'Set — Unique Values',
    titleClass: 'card-title-green',
    subtitle: 'sets.js',
    description: 'Duplicates vanish — but two identical-looking objects stay separate.',
    code: 'const arr = [10, 20, 30, 20, 10, "Rohit", "Rohit"];\nconst s1 = new Set(arr);\nconsole.log(s1);',
  },
  {
    icon: '➕',
    title: 'add & has',
    titleClass: 'card-title-amber',
    subtitle: 'Set methods',
    description: 'add() ignores repeats; has() answers membership in O(1).',
    code: 'const s1 = new Set();\ns1.add(10);\ns1.add(43);\ns1.add(43); // ignored\nconsole.log(s1.has(20));',
  },
  {
    icon: '📧',
    title: 'Dedupe Emails',
    titleClass: 'card-title-purple',
    subtitle: 'Set → spread → array',
    description: 'Classic interview one-liner — unique list back as a real array.',
    code: "const email = ['rohit@gmail', 'mohit@gmail.com', 'rohit@gmail'];\nconst arr = [...new Set(email)];\nconsole.log(arr);",
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 09 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Callback, forEach, map, filter, reduce — plus Sets and real-world chains.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture09 Code',
    description: 'first.js, callback.js, forEach.js, map.js, filter.js, reducer.js, sets.js.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'map/filter/reduce — Ania',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'map(), filter() & reduce() by Code with Ania — supplement for Lecture 09.',
    link: {
      href: 'https://www.youtube.com/watch?v=PojpwEbOQJg',
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

export default function Day009() {
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
          <Link to="/day-008" className="day001-nav-btn day001-nav-home">
            ← Day 8
          </Link>
          <p className="day001-datetime">Thunder Day 9 · 25 Jul 2026</p>
          <Link to="/day-010" className="day001-nav-btn day001-nav-next">
            Day 10 →
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
                DAY 9 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CALLBACKS & ARRAY METHODS</p>
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
          <div className="day001-progress-bar" style={{ width: '9%' }} />
        </div>

        <p className="day001-summary">
          Day nine — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 09
          </a>
          . I rebuilt sort, forEach, and filter by hand on Array.prototype to understand callbacks,
          then used the real forEach, map, filter, and reduce — chained filter + map on a 20-product
          catalog and deduped data with Sets in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture09 on GitHub
          </a>
          . Building the method yourself is the fastest way to stop fearing it.
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

        <CardSection icon="🔁" title="CALLBACK PATTERNS" cards={CALLBACK_PATTERNS} columns={3} />
        <CardSection icon="🧰" title="CORE ARRAY METHODS" cards={CORE_METHODS} columns={4} />
        <CardSection icon="🛒" title="REAL WORLD & SETS" cards={REAL_WORLD_AND_SETS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 09" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#ArrayMethods</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
