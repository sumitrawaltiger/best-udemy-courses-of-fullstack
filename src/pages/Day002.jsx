import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture-02-Data-types-in-JS-37343ac5cab980f8b24ee3cf1ea0c8fa?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture02';

const LEARNT_TODAY = [
  {
    title: 'Primitive vs non-primitive',
    text: 'primitives (number, string, boolean, undefined, null, symbol, bigint) are immutable and copied by value — objects, arrays, and functions are reference types',
  },
  {
    title: 'Number',
    text: 'one type for integers and decimals — Thunder uses 20 and 20.7 in first.js',
  },
  {
    title: 'String',
    text: 'text with double quotes, single quotes, or backtick template literals like `Rohit ${age} is a Good Boy`',
  },
  {
    title: 'Boolean',
    text: 'true or false — the type behind every if-statement you will write later',
  },
  {
    title: 'undefined & null',
    text: 'undefined means not assigned yet; null is an intentional empty value — typeof null is the famous "object" quirk',
  },
  {
    title: 'BigInt & Symbol',
    text: 'BigInt handles huge integers with n suffix; Symbol() creates unique identifiers that never compare equal',
  },
  {
    title: 'typeof',
    text: 'your debugging superpower — run typeof on any value to see what you are working with',
  },
  {
    title: 'Objects',
    text: 'key-value pairs like { name: "Rohit", age: 30, city: "dwarka" } — the most important non-primitive type',
  },
  {
    title: 'Arrays & functions',
    text: 'arrays hold ordered lists of mixed types; functions are reusable blocks that can return values',
  },
  {
    title: 'let vs const',
    text: 'let can be reassigned; const cannot — primitives copy by value so changing b does not change a',
  },
];

const PRIMITIVE_TYPES = [
  {
    icon: '🔢',
    title: 'Number',
    titleClass: 'card-title-cyan',
    subtitle: 'Integers & Decimals',
    description:
      'JavaScript has one number type — 20 and 20.7 both work. No separate int or float like C++.',
    code: 'let firstNumber = 20;\nlet secondNumber = 20.7;\nconsole.log(typeof firstNumber);',
  },
  {
    icon: '📝',
    title: 'String',
    titleClass: 'card-title-green',
    subtitle: 'Text & Template Literals',
    description:
      'Use ", \', or backticks. Template literals embed variables: `Rohit ${age} is a Good Boy`.',
    code: 'let name = "Rohit Negi";\nlet msg = `Hello ${name}`;',
  },
  {
    icon: '✅',
    title: 'Boolean',
    titleClass: 'card-title-blue',
    subtitle: 'true / false',
    description: 'Logical values for conditions. Every decision in your code eventually comes down to booleans.',
    code: 'let active = true;\nlet done = false;',
  },
  {
    icon: '❓',
    title: 'undefined',
    titleClass: 'card-title-amber',
    subtitle: 'Not Assigned Yet',
    description: 'A variable declared with let but no value is undefined until you assign something.',
    code: 'let a;\nconsole.log(a); // undefined',
  },
  {
    icon: '⭕',
    title: 'null',
    titleClass: 'card-title-pink',
    subtitle: 'Intentional Empty',
    description: 'null means "nothing here on purpose." typeof null returns "object" — a 1995 bug never fixed.',
    code: 'let b = null;\nconsole.log(typeof b); // "object"',
  },
  {
    icon: '🔣',
    title: 'BigInt & Symbol',
    titleClass: 'card-title-purple',
    subtitle: 'Large Ints & Unique IDs',
    description:
      'BigInt: append n for huge numbers. Symbol: every Symbol("Rohit") is unique — symB == symA is false.',
    code: 'let big = 27343285947319574913n;\nlet id = Symbol("Rohit");',
  },
];

const NON_PRIMITIVE = [
  {
    icon: '📦',
    title: 'Object',
    titleClass: 'card-title-lime',
    subtitle: 'Key-Value Pairs',
    description:
      'The most important non-primitive. Store real-world entities: { name: "Rohit", age: 30, city: "dwarka" }.',
    code: 'let person = {\n  name: "Rohit",\n  age: 30\n};\nconsole.log(person.name);',
  },
  {
    icon: '📋',
    title: 'Array',
    titleClass: 'card-title-cyan',
    subtitle: 'Ordered Lists',
    description:
      'Mixed types in one list: [10, 20, 30, "Rohit", 9.3, true]. Order matters; index starts at 0.',
    code: 'let arr = [10, 20, "Rohit", true];\nconsole.log(arr[2]);',
  },
  {
    icon: '⚙️',
    title: 'Function',
    titleClass: 'card-title-amber',
    subtitle: 'Reusable Logic',
    description:
      'Blocks of code you can call again and again. Can return a value or just run side effects.',
    code: 'let greet = function () {\n  return 10;\n};\nconsole.log(greet());',
  },
];

const TYPE_TOOLS = [
  {
    icon: '🔍',
    title: 'typeof Operator',
    titleClass: 'card-title-green',
    subtitle: 'Check Any Value',
    description:
      'Run typeof on every value while learning. Thunder homework in first.js: typeof on string, number, object, and more.',
    code: 'console.log(typeof "Rohit");\nconsole.log(typeof 42);\nconsole.log(typeof {});',
  },
  {
    icon: '🔄',
    title: 'Copy by Value',
    titleClass: 'card-title-blue',
    subtitle: 'Primitives',
    description:
      'let a = 30; let b = a; b = 70 — a stays 30 because primitives copy by value, not reference.',
    code: 'let a = 30;\nlet b = a;\nb = 70;\nconsole.log(a, b); // 30 70',
  },
  {
    icon: '🔒',
    title: 'const Rules',
    titleClass: 'card-title-pink',
    subtitle: 'Cannot Reassign',
    description:
      'const a = 10; a = 7 throws TypeError. Use const by default; let only when the value must change.',
    code: 'const course = "Thunder";\nlet day = 2;\nday = 3;',
  },
  {
    icon: '🧪',
    title: 'first.js Homework',
    titleClass: 'card-title-lime',
    subtitle: 'Thunder Lecture02',
    description:
      'Uncomment each block in first.js one at a time. Build your own person object and run typeof on everything.',
    code: 'let a = "Rohit";\nconsole.log(typeof a);\n\nlet obj = { name: "Rohit", age: 20 };\nconsole.log(typeof obj);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 02 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Data types in JS — primitives, non-primitives, typeof, objects, arrays, functions, let vs const, and homework.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture02 Code',
    description:
      'first.js walks every data type with commented examples. rohit.cpp is a tiny C++ demo — peek under the hood.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Code with Ania — Data Types',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description:
      'Data Types in JavaScript — a free supplement video while you follow Thunder Lecture 02 and Notion notes.',
    link: {
      href: 'https://www.youtube.com/watch?v=nCwQY8inRvU',
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

export default function Day002() {
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
          <Link to="/day-001" className="day001-nav-btn day001-nav-home">
            ← Day 1
          </Link>
          <p className="day001-datetime">📅 5th July 2026 · Thunder Day 2 · 98 days left</p>
          <Link to="/day-003" className="day001-nav-btn day001-nav-next">
            Day 3 →
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
                DAY 2 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DATA TYPES IN JAVASCRIPT</p>
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
          <div className="day001-progress-bar" style={{ width: '2%' }} />
        </div>

        <p className="day001-summary">
          Day two of my 100-day journey — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 02
          </a>
          . I learned the 7 primitive types and 3 non-primitive types, ran <code>typeof</code> on
          everything, built objects and arrays, and worked through{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            first.js on GitHub
          </a>
          . Primitives copy by value; objects live by reference. Now I know what kind of data I am
          holding before I write logic.
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

        <CardSection icon="🧱" title="PRIMITIVE TYPES" cards={PRIMITIVE_TYPES} columns={3} />
        <CardSection icon="🔗" title="NON-PRIMITIVE TYPES" cards={NON_PRIMITIVE} columns={3} />
        <CardSection icon="🛠️" title="TYPE TOOLS & PRACTICE" cards={TYPE_TOOLS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 02" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#DataTypes</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
