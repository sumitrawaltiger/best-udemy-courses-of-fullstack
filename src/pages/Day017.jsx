import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture-17-Prototype-classes-and-Eventloop-in-JS-38c43ac5cab9805f9b60eaf160aa057e?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture17';

const LEARNT_TODAY = [
  {
    title: 'Prototype chain',
    text: 'every object links to a __proto__ — JS looks up missing keys along that chain',
  },
  {
    title: 'Manual __proto__',
    text: 'obj2.__proto__ = obj1 makes obj2 borrow obj1.greet() even though it never defined it',
  },
  {
    title: 'Built-ins are prototypes',
    text: 'hasOwnProperty, toString, and array.push all come from the prototype',
  },
  {
    title: 'Why classes',
    text: 'stop copy-pasting the same object shape + method into user1, user2, user3',
  },
  {
    title: 'class & constructor',
    text: 'constructor runs on new, assigning this.name, this.age for each instance',
  },
  {
    title: 'Shared methods',
    text: 'greet() and increase() live once on Person.prototype, shared by all instances',
  },
  {
    title: 'the new keyword',
    text: 'new Person("Rohit", 20) builds a fresh object wired to the class prototype',
  },
  {
    title: 'Inheritance',
    text: 'class Customer extends Person reuses all of Person and adds more',
  },
  {
    title: 'super()',
    text: 'super(name, age) runs the parent constructor before the child adds its fields',
  },
  {
    title: 'Event loop',
    text: 'setInterval callbacks wait in a queue; the event loop runs them when the stack is clear',
  },
];

const PROTOTYPES = [
  {
    icon: '🔗',
    title: 'The Prototype Chain',
    titleClass: 'card-title-cyan',
    subtitle: 'index.js',
    description: 'Point one object at another — it inherits methods it never defined.',
    code: 'const obj1 = { name: "Rohit", greet() { console.log(`Hello ${this.name}`); } };\nconst obj2 = { balance: 70 };\nobj2.__proto__ = obj1;\nobj2.greet(); // "Hello Rohit"',
  },
  {
    icon: '🧰',
    title: 'Built-ins Live There',
    titleClass: 'card-title-green',
    subtitle: 'Inherited methods',
    description: 'hasOwnProperty, toString, array.push — all from the prototype.',
    code: 'obj1.hasOwnProperty("name"); // true\nobj1.toString();\n[10, 20].push(30); // Array.prototype.push',
  },
  {
    icon: '❓',
    title: 'Why This Matters',
    titleClass: 'card-title-amber',
    subtitle: 'The problem',
    description: 'Repeating the same shape + method per object is wasteful — classes fix it.',
    code: '// user1, user2, user3 each repeat\n// increase() — same code, 3 copies',
  },
];

const CLASSES = [
  {
    icon: '🏛️',
    title: 'class & constructor',
    titleClass: 'card-title-cyan',
    subtitle: 'second.js',
    description: 'A blueprint — constructor sets each instance up on new.',
    code: 'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() { console.log(`Hi ${this.name}`); }\n}',
  },
  {
    icon: '✨',
    title: 'the new keyword',
    titleClass: 'card-title-green',
    subtitle: 'Make instances',
    description: 'new builds a fresh object wired to Person.prototype.',
    code: 'const user1 = new Person("Rohit", 20);\nconst user2 = new Person("Sohan", 10);\nuser1.greet(); // Hi Rohit',
  },
  {
    icon: '♻️',
    title: 'Shared Methods',
    titleClass: 'card-title-amber',
    subtitle: 'classes.js',
    description: 'increase() defined once, shared by every instance via the prototype.',
    code: 'increase() { this.age++; }\n// one method, all users share it',
  },
  {
    icon: '🧬',
    title: 'extends & super',
    titleClass: 'card-title-pink',
    subtitle: 'third.js',
    description: 'Customer inherits Person, then super() runs the parent constructor.',
    code: 'class Customer extends Person {\n  constructor(name, age, balance, city) {\n    super(name, age);\n    this.balance = balance;\n  }\n}',
  },
];

const EVENT_LOOP = [
  {
    icon: '🧵',
    title: 'Single-Threaded JS',
    titleClass: 'card-title-cyan',
    subtitle: 'One call stack',
    description: 'JS does one thing at a time — async work is offloaded, not parallel.',
    code: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nconsole.log("3");\n// Output: 1, 3, 2',
  },
  {
    icon: '🔁',
    title: 'setInterval & the Queue',
    titleClass: 'card-title-green',
    subtitle: 'project01',
    description: 'The timer callback waits in a queue; the loop runs it when the stack is free.',
    code: 'setInterval(() => {\n  console.log("Hello");\n}, 2000);',
  },
  {
    icon: '⚙️',
    title: 'The Event Loop',
    titleClass: 'card-title-amber',
    subtitle: 'Stack → queue',
    description: 'When the call stack empties, the loop pushes the next queued callback onto it.',
    code: '// stack runs sync code\n// timers/promises wait in queues\n// event loop feeds them back in',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 17 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Prototypes, classes & event loop — inheritance and async execution.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture17 Code',
    description: 'index.js proto, second/classes.js classes, third.js extends, project01 loop.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'The Event Loop',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'What the heck is the event loop anyway? by Philip Roberts — must-watch for Lecture 17.',
    link: {
      href: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
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

export default function Day017() {
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
          <Link to="/day-016" className="day001-nav-btn day001-nav-home">
            ← Day 16
          </Link>
          <p className="day001-datetime">📅 21st July 2026 · Thunder Day 17 · 83 days left</p>
          <Link to="/learn/promises-and-async" className="day001-nav-btn day001-nav-next">
            Day 18 →
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
                DAY 17 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">PROTOTYPES, CLASSES & EVENT LOOP</p>
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
          <div className="day001-progress-bar" style={{ width: '17%' }} />
        </div>

        <p className="day001-summary">
          Day seventeen — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 17
          </a>
          . The OOP core of JavaScript: every object inherits through a prototype chain, and{' '}
          <code>class</code> is clean syntax over it — constructor, shared methods, and inheritance
          with <code>extends</code>/<code>super</code>. Then the event loop showed how setInterval
          callbacks get queued and run, traced through{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Lecture17 on GitHub
          </a>
          . Prototypes explain why JS objects just work.
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

        <CardSection icon="🔗" title="PROTOTYPES" cards={PROTOTYPES} columns={3} />
        <CardSection icon="🏛️" title="CLASSES & INHERITANCE" cards={CLASSES} columns={4} />
        <CardSection icon="🔁" title="THE EVENT LOOP" cards={EVENT_LOOP} columns={3} />
        <CardSection icon="📚" title="THUNDER LECTURE 17" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Prototypes</span>
          <span>#Classes</span>
          <span>#EventLoop</span>
        </footer>
      </div>
    </div>
  );
}
