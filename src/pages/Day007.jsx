import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture-07-Objects-and-Date-37b43ac5cab980cfa8d3db0bf87411b2?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture07';

const LEARNT_TODAY = [
  {
    title: 'Why objects',
    text: 'named keys beat numeric indexes — { name, age, city } instead of arr[0], arr[1]',
  },
  {
    title: 'Array of objects',
    text: 'users = [{ name: "Rohit" }, { name: "Mohit" }] — how apps store lists of records',
  },
  {
    title: 'Display function',
    text: 'one function Display(food) works for any object — loop with for...of',
  },
  {
    title: 'sort & reverse',
    text: 'default sort treats numbers as strings — use (a,b) => a-b for real numeric order',
  },
  {
    title: 'Dot vs bracket',
    text: 'user.name or user["name"] — bracket when key is dynamic',
  },
  {
    title: 'Add, update, delete',
    text: 'user.adhar = 21030, user.age = 29, delete user.email',
  },
  {
    title: 'Nested & methods',
    text: 'user.address.city, user.greet() — objects inside objects, functions as methods',
  },
  {
    title: 'keys, values, entries',
    text: 'Object.keys(), Object.values(), Object.entries() — loop pairs with for...of',
  },
  {
    title: 'Reference copy',
    text: 'obj2 = obj1 — changing obj2.name changes obj1 too',
  },
  {
    title: 'Destructuring & clone',
    text: '{...obj} shallow copy; structuredClone(obj) deep copy — spread still shares nested data',
  },
];

const OBJECT_BASICS = [
  {
    icon: '📦',
    title: 'Object Literals',
    titleClass: 'card-title-cyan',
    subtitle: 'objects.js',
    description: 'Store related data with named keys — name, age, city, email, amount.',
    code: 'const user = {\n  name: "Rohit",\n  age: 20,\n  city: "kotdwar"\n};\nconsole.log(user.name);',
  },
  {
    icon: '📋',
    title: 'Array of Objects',
    titleClass: 'card-title-green',
    subtitle: 'Real data lists',
    description: 'Many records in one array — users, menu items, products.',
    code: 'const users = [\n  { name: "Rohit", age: 20 },\n  { name: "Mohit", age: 10 }\n];',
  },
  {
    icon: '🔄',
    title: 'Display Pattern',
    titleClass: 'card-title-blue',
    subtitle: 'Reusable function',
    description: 'Pass any food object to Display() — loop arr with for...of.',
    code: 'for (let food of arr)\n  Display(food);',
  },
];

const SORT_METHODS = [
  {
    icon: '🔤',
    title: 'String sort',
    titleClass: 'card-title-amber',
    subtitle: 'array.js',
    description: 'names.sort() — ASCII order, "R" before "r" (65 vs 97).',
    code: 'names.sort();\nnames.reverse();',
  },
  {
    icon: '🔢',
    title: 'Number sort',
    titleClass: 'card-title-pink',
    subtitle: 'Compare function',
    description: 'Default sort fails on numbers — use (a,b) => a-b ascending.',
    code: 'num.sort((a, b) => a - b);\n// descending: b - a',
  },
  {
    icon: '⚠️',
    title: 'Mixed arrays',
    titleClass: 'card-title-purple',
    subtitle: 'Coerced to string',
    description: '[10, "Rohit", true] — sort converts each item to string first.',
    code: 'arr.sort();\n// ["10","Rohit","true",...]',
  },
];

const OBJECT_OPS = [
  {
    icon: '🔑',
    title: 'Access Properties',
    titleClass: 'card-title-cyan',
    subtitle: 'object1.js',
    description: 'Dot or bracket notation — user.amount, user["name"].',
    code: 'console.log(user.name);\nconsole.log(user["age"]);',
  },
  {
    icon: '✏️',
    title: 'CRUD Keys',
    titleClass: 'card-title-green',
    subtitle: 'Mutable objects',
    description: 'Add user.adhar, update user.age, delete user.email.',
    code: 'user.adhar = 21030;\nuser.age = 29;\ndelete user.email;',
  },
  {
    icon: '🏠',
    title: 'Nested Objects',
    titleClass: 'card-title-blue',
    subtitle: 'address.city',
    description: 'Objects hold arrays, nested objects, and methods like greet().',
    code: 'user.greet();\nconsole.log(user.address.city);',
  },
  {
    icon: '🔍',
    title: 'keys & entries',
    titleClass: 'card-title-amber',
    subtitle: 'Object methods',
    description: 'Object.keys, values, entries — loop with for...of destructuring.',
    code: 'for (const [k, v] of Object.entries(customer))\n  console.log(k, v);',
  },
];

const ADVANCED_OBJECTS = [
  {
    icon: '🔗',
    title: 'Reference Copy',
    titleClass: 'card-title-purple',
    subtitle: 'Like arrays',
    description: 'obj2 = obj1 — both point to same object in memory.',
    code: 'const obj2 = obj1;\nobj2.name = "mohit";',
  },
  {
    icon: '📤',
    title: 'Destructuring',
    titleClass: 'card-title-pink',
    subtitle: 'object2.js',
    description: 'Pull values out — rename with { age: ageName }.',
    code: 'const { age: ageName, value } = customer;',
  },
  {
    icon: '📋',
    title: 'Shallow Clone',
    titleClass: 'card-title-lime',
    subtitle: 'Spread operator',
    description: '{...customer} — top level new, nested still shared.',
    code: 'const copy = { ...customer };\ncopy.arr.push(54); // mutates original!',
  },
  {
    icon: '🧬',
    title: 'Deep Clone',
    titleClass: 'card-title-cyan',
    subtitle: 'structuredClone',
    description: 'Fully independent copy — safe for nested arrays and objects.',
    code: 'const deep = structuredClone(customer);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 07 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Objects & Date — properties, sorting, keys/entries, cloning.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture07 Code',
    description: 'objects.js, array.js, object1.js, object2.js — full object deep dive.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Objects — Ania',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'JavaScript Objects by Code with Ania — supplement for Thunder Lecture 07.',
    link: {
      href: 'https://www.youtube.com/watch?v=lo7o91qLzxc',
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

export default function Day007() {
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
          <Link to="/day-006" className="day001-nav-btn day001-nav-home">
            ← Day 6
          </Link>
          <p className="day001-datetime">📅 11th July 2026 · Thunder Day 7 · 93 days left</p>
          <Link to="/day-008" className="day001-nav-btn day001-nav-next">
            Day 8 →
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
                DAY 7 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">OBJECTS & DATE</p>
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
          <div className="day001-progress-bar" style={{ width: '7%' }} />
        </div>

        <p className="day001-summary">
          Day seven — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 07
          </a>
          . I went deep on objects: named keys, arrays of objects, sort with compare functions,
          Object.keys/entries, nested data, destructuring, and shallow vs deep cloning in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture07 on GitHub
          </a>
          . Objects are how real apps model users, menus, and products.
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

        <CardSection icon="📦" title="OBJECT BASICS" cards={OBJECT_BASICS} columns={3} />
        <CardSection icon="🔢" title="ARRAY SORT" cards={SORT_METHODS} columns={3} />
        <CardSection icon="🛠️" title="OBJECT OPERATIONS" cards={OBJECT_OPS} columns={4} />
        <CardSection icon="🚀" title="ADVANCED OBJECTS" cards={ADVANCED_OBJECTS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 07" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Objects</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
