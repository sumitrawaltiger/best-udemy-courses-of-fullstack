import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NOTION_URL =
  'https://app.notion.com/p/Lecture03-Operator-and-Data-type-in-JS-37543ac5cab9805bb338dc7e6c3ab515?source=copy_link';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture03';

const LEARNT_TODAY = [
  {
    title: 'Arithmetic operators',
    text: '+, -, *, /, %, ** — second.js walks through every math operator with real examples',
  },
  {
    title: 'Assignment & increment',
    text: '+=, -=, *=, /= shorthand — post-increment a++ returns old value first; ++a increments before returning',
  },
  {
    title: 'Comparison operators',
    text: '>, >=, <, <= return booleans that power every if-statement in later lectures',
  },
  {
    title: '== vs ===',
    text: 'loose == coerces types ("10" == 10 is true) — strict === checks type and value; always prefer ===',
  },
  {
    title: 'Type coercion',
    text: 'Number("10") + Number("20") for calculators; String(30) + "7" gives "307" when strings win',
  },
  {
    title: 'null & undefined quirks',
    text: 'null == undefined is true, but null == 0 is false — another reason to use ===',
  },
  {
    title: 'Logical && and ||',
    text: 'short-circuit evaluation — true && "Rohit" returns "Rohit"; false || "Guest" picks the fallback',
  },
  {
    title: 'Operator precedence',
    text: '* and / before + and - — use parentheses when grouping matters',
  },
  {
    title: 'Primitive vs reference',
    text: 'numbers copy by value; objects share references — obj2 = obj1 means changing one changes both',
  },
  {
    title: 'var vs let vs const',
    text: 'var is hoisted and function-scoped; let is block-scoped; const cannot reassign but object properties can mutate',
  },
];

const ARITHMETIC_OPS = [
  {
    icon: '➕',
    title: 'Addition & Subtraction',
    titleClass: 'card-title-cyan',
    subtitle: '+ and -',
    description: 'Basic math on numbers. Watch the string trap: "5" + 3 is "53", but "5" - 3 is 2.',
    code: 'console.log(3 + 4);\nconsole.log(3 - 4);\nconsole.log("5" + 3);\nconsole.log("5" - 3);',
  },
  {
    icon: '✖️',
    title: 'Multiply & Divide',
    titleClass: 'card-title-green',
    subtitle: '* and /',
    description: 'Standard multiplication and division. Thunder second.js uses 3*4 and 10/4.',
    code: 'console.log(3 * 4);\nconsole.log(10 / 4);',
  },
  {
    icon: '％',
    title: 'Modulus & Power',
    titleClass: 'card-title-blue',
    subtitle: '% and **',
    description: '% gives remainder (10 % 4 = 2). ** is exponent — 10 ** 4 = 10000.',
    code: 'console.log(10 % 4);\nconsole.log(10 ** 4);',
  },
];

const COMPARISON_LOGIC = [
  {
    icon: '⚖️',
    title: '== vs ===',
    titleClass: 'card-title-amber',
    subtitle: 'Loose vs Strict',
    description:
      '"10" == 10 is true (coercion). "10" === 10 is false. Thunder says: use === in real code.',
    code: 'console.log("10" == 10);\nconsole.log("10" === 10);\nconsole.log(0 === false);',
  },
  {
    icon: '📊',
    title: 'Comparisons',
    titleClass: 'card-title-pink',
    subtitle: '> >= < <=',
    description: 'Return true or false. age >= 18 checks adulthood; powers every conditional.',
    code: 'console.log(10 > 5);\nconsole.log(10 >= 5);\nconsole.log(10 < 5);',
  },
  {
    icon: '🔗',
    title: '&& and ||',
    titleClass: 'card-title-purple',
    subtitle: 'Logical Operators',
    description:
      'AND needs both truthy. OR returns first truthy value. false || "Guest" is a common fallback pattern.',
    code: 'console.log(true && "Rohit");\nconsole.log(false || "Guest");',
  },
];

const MEMORY_MODEL = [
  {
    icon: '📋',
    title: 'Copy by Value',
    titleClass: 'card-title-lime',
    subtitle: 'Primitives',
    description:
      'let b = a; b = 20 does not change a. Primitives are independent copies in first.js.',
    code: 'let a = 10;\nlet b = a;\nb = 20;\nconsole.log(a, b); // 10 20',
  },
  {
    icon: '🔗',
    title: 'Copy by Reference',
    titleClass: 'card-title-cyan',
    subtitle: 'Objects',
    description:
      'obj2 = obj1 shares one object. obj2.name = "Mohan" changes obj1.name too.',
    code: 'let obj1 = { name: "Rohit" };\nlet obj2 = obj1;\nobj2.name = "Mohan";',
  },
  {
    icon: '🔒',
    title: 'const Rules',
    titleClass: 'card-title-green',
    subtitle: 'Mutate vs Reassign',
    description:
      'const person = {} — can change properties. Cannot reassign person = {} — TypeError.',
    code: 'const person = { age: 20 };\nperson.age = 10; // OK',
  },
  {
    icon: '📦',
    title: 'let Block Scope',
    titleClass: 'card-title-blue',
    subtitle: 'vs var',
    description:
      'let inside if { } is not visible outside. var is function-scoped and hoisted — avoid in modern JS.',
    code: 'if (true) {\n  let x = 10;\n}\n// x is not defined here',
  },
];

const PRACTICE_TOOLS = [
  {
    icon: '🔢',
    title: 'Number() Coercion',
    titleClass: 'card-title-amber',
    subtitle: 'Calculator Pattern',
    description:
      'Form inputs are strings. Number("10") + Number("20") = 30. The mini-calculator pattern from second.js.',
    code: 'let first = "10", second = "20";\nconsole.log(Number(first) + Number(second));',
  },
  {
    icon: '⬆️',
    title: 'Pre vs Post ++',
    titleClass: 'card-title-pink',
    subtitle: '++a vs a++',
    description:
      'Pre: increment first, then return. Post: return original, then increment. let k = ++a updates both.',
    code: 'let a = 10;\nconsole.log(a++); // 10\nconsole.log(++a); // 12',
  },
  {
    icon: '❓',
    title: 'null Quirks',
    titleClass: 'card-title-purple',
    subtitle: '== Edge Cases',
    description:
      'null == undefined is true. null == 0 is false. null >= 0 is true — use === for sanity.',
    code: 'console.log(null == undefined);\nconsole.log(null === undefined);',
  },
  {
    icon: '🧮',
    title: 'Precedence',
    titleClass: 'card-title-lime',
    subtitle: 'Parentheses Win',
    description:
      '10*2+5*64+78/2 follows math rules. When unsure, wrap in parentheses.',
    code: 'console.log(2 + 3 * 4);\nconsole.log((2 + 3) * 4);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 03 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description:
      'Operators & data types — arithmetic, comparison, logical ops, coercion, primitive vs reference, var/let/const.',
    link: { href: NOTION_URL, label: 'Open Notion notes →', external: true },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture03 Code',
    description:
      'first.js — reference vs value deep dive. second.js — every operator uncommented block by block.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '▶️',
    title: 'Code with Ania — Logical Ops',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description:
      'JavaScript Logical Operators — free supplement while you follow Thunder Lecture 03 and Notion notes.',
    link: {
      href: 'https://www.youtube.com/watch?v=ovWYhDVQiR8',
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

export default function Day003() {
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
          <Link to="/day-002" className="day001-nav-btn day001-nav-home">
            ← Day 2
          </Link>
          <p className="day001-datetime">📅 5th July 2026 · Thunder Day 3 · 97 days left</p>
          <Link to="/day-004" className="day001-nav-btn day001-nav-next">
            Day 4 →
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
                DAY 3 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">OPERATORS & DATA TYPES</p>
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
          <div className="day001-progress-bar" style={{ width: '3%' }} />
        </div>

        <p className="day001-summary">
          Day three of my 100-day journey — following{' '}
          <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder Lecture 03
          </a>
          . I learned arithmetic, assignment, increment, comparison, and logical operators. I
          practiced <code>===</code> over <code>==</code>, used <code>Number()</code> for
          calculator inputs, and proved primitive vs reference in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            first.js & second.js
          </a>
          . Operators are how JavaScript thinks.
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

        <CardSection icon="🔢" title="ARITHMETIC OPERATORS" cards={ARITHMETIC_OPS} columns={3} />
        <CardSection icon="⚖️" title="COMPARISON & LOGIC" cards={COMPARISON_LOGIC} columns={3} />
        <CardSection icon="🧠" title="MEMORY MODEL" cards={MEMORY_MODEL} columns={4} />
        <CardSection icon="🛠️" title="PRACTICE & PRECEDENCE" cards={PRACTICE_TOOLS} columns={4} />
        <CardSection icon="📚" title="THUNDER LECTURE 03" cards={THUNDER_RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#JavaScript</span>
          <span>#Operators</span>
          <span>#Thunder</span>
          <span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
