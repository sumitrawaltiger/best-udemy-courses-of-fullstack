import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_FUNCTIONS = 'https://www.typescriptlang.org/docs/handbook/2/functions.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  {
    title: 'Typed parameters',
    text: 'annotate each parameter — `function add(a: number, b: number)` rejects any non-number argument',
  },
  {
    title: 'Return types',
    text: 'declare what a function gives back with `): number` — TS also infers it if you omit it',
  },
  {
    title: 'Optional params',
    text: 'a trailing `?` makes a parameter optional: `greet(name?: string)` — its type becomes string | undefined',
  },
  {
    title: 'Default params',
    text: 'give a default value: `function pow(n: number, e = 2)` — the type is inferred from the default',
  },
  {
    title: 'Rest params',
    text: 'gather extra args into a typed array: `(...nums: number[])` — variadic and type-safe',
  },
  {
    title: 'Function types',
    text: 'describe a function’s signature as a type: `type Op = (a: number, b: number) => number`',
  },
  {
    title: 'void returns',
    text: 'a function that returns nothing is typed `: void` — like a logger or event handler',
  },
  {
    title: 'Call signatures',
    text: 'arrow functions can be typed inline — great for callbacks passed to map, filter, and event listeners',
  },
  {
    title: 'Overloads',
    text: 'give one function several typed signatures when its return depends on the arguments',
  },
  {
    title: 'this typing',
    text: 'you can type the `this` a function expects — TypeScript catches wrong-context bugs',
  },
];

const SIGNATURES = [
  {
    icon: '➕',
    title: 'Params & Returns',
    titleClass: 'card-title-cyan',
    subtitle: 'Type Both Ends',
    description:
      'Annotate every parameter and, optionally, the return. Now the compiler guarantees callers pass the right arguments and use the result correctly.',
    code: 'function add(a: number, b: number): number {\n  return a + b;\n}\nadd(2, 3);       // ✅ 5\nadd("2", 3);     // ❌ string not allowed',
  },
  {
    icon: '🔍',
    title: 'Inferred Returns',
    titleClass: 'card-title-green',
    subtitle: 'Let TS Do It',
    description:
      'If you skip the return annotation, TypeScript infers it from what you return. Explicit returns are still useful as documentation and to catch mistakes early.',
    code: 'function double(n: number) {\n  return n * 2;   // return type inferred: number\n}',
  },
  {
    icon: '🕳️',
    title: 'void Functions',
    titleClass: 'card-title-purple',
    subtitle: 'Returns Nothing',
    description:
      'Handlers, loggers, and side-effect functions return void. TypeScript makes sure you don’t accidentally rely on a value they never produce.',
    code: 'function log(msg: string): void {\n  console.log(`[LOG] ${msg}`);\n}',
  },
];

const PARAMS = [
  {
    icon: '❔',
    title: 'Optional Params',
    titleClass: 'card-title-cyan',
    subtitle: 'The ? Marker',
    description:
      'A parameter with ? may be omitted. Inside the function its type includes undefined, so TypeScript forces you to handle the missing case.',
    code: 'function greet(name?: string) {\n  return `Hi ${name ?? "there"}`;\n}\ngreet();        // "Hi there"\ngreet("Sumit"); // "Hi Sumit"',
  },
  {
    icon: '🎚️',
    title: 'Default Params',
    titleClass: 'card-title-blue',
    subtitle: 'Fallback Values',
    description:
      'Give a parameter a default and TypeScript infers its type from that value. Callers can skip it; you always get a defined value.',
    code: 'function power(base: number, exp = 2) {\n  return base ** exp;\n}\npower(5);    // 25\npower(5, 3); // 125',
  },
  {
    icon: '📎',
    title: 'Rest Params',
    titleClass: 'card-title-amber',
    subtitle: 'Variadic & Typed',
    description:
      'Collect any number of trailing arguments into a typed array. Perfect for sum, max, or logging helpers that take an arbitrary list.',
    code: 'function sum(...nums: number[]): number {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3, 4); // 10',
  },
  {
    icon: '🧾',
    title: 'Function Types',
    titleClass: 'card-title-lime',
    subtitle: 'Describe A Signature',
    description:
      'Name a function shape with a type alias, then require it as a parameter — the pattern behind every typed callback in React and Node.',
    code: 'type Op = (a: number, b: number) => number;\nconst multiply: Op = (a, b) => a * b;\nfunction run(op: Op) { return op(2, 4); }',
  },
];

const ADVANCED = [
  {
    icon: '🔁',
    title: 'Typed Callbacks',
    titleClass: 'card-title-cyan',
    subtitle: 'map / filter / events',
    description:
      'Array methods and event listeners take functions. TypeScript already knows the callback’s parameter types, so you get autocomplete and safety for free.',
    code: 'const nums = [1, 2, 3];\nconst doubled = nums.map((n): number => n * 2);\n// n is number automatically',
  },
  {
    icon: '🧬',
    title: 'Overloads',
    titleClass: 'card-title-purple',
    subtitle: 'Many Shapes, One Fn',
    description:
      'When a function’s return type depends on its input, declare multiple signatures above one implementation so callers get the exact right type back.',
    code: 'function len(x: string): number;\nfunction len(x: any[]): number;\nfunction len(x: any) { return x.length; }',
  },
  {
    icon: '🎯',
    title: 'this Parameter',
    titleClass: 'card-title-amber',
    subtitle: 'Catch Context Bugs',
    description:
      'You can declare the type of this a function expects as a first "fake" parameter. TypeScript then flags calls made in the wrong context.',
    code: 'function reset(this: { count: number }) {\n  this.count = 0;\n}',
  },
  {
    icon: '🔜',
    title: 'Next: Interfaces',
    titleClass: 'card-title-lime',
    subtitle: 'Day 4 Preview',
    description:
      'Tomorrow we name object shapes with interfaces — optional and readonly properties, extending, and interface vs type.',
    link: { href: '/day-004', label: 'Go to Day 4 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Functions',
    titleClass: 'card-title-cyan',
    subtitle: 'TS Handbook',
    description:
      'The handbook’s deep dive on function types — parameters, returns, rest args, overloads, and typing this. Everything from today, in reference form.',
    link: { href: TS_FUNCTIONS, label: 'Read the Functions chapter →', external: true },
  },
  {
    icon: '🎮',
    title: 'TS Playground',
    titleClass: 'card-title-purple',
    subtitle: 'Experiment Live',
    description:
      'Write a function, call it wrong, and watch the error appear instantly. Hover the parameters to confirm the types you expect.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Where This Fits',
    titleClass: 'card-title-amber',
    subtitle: 'Year 1 · TypeScript',
    description:
      'Days 1–3 build the TypeScript core: types, then functions. Next comes interfaces, generics, and then React & Next.js in TypeScript.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
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
        <Link to="/" className="day001-nav-btn day001-nav-home">
          Home
        </Link>
        <Link to="/day-002" className="day001-nav-btn day001-nav-prev">
          ← Day 2
        </Link>
        <p className="day001-datetime">TypeScript Day 3 · 19 Jul 2026</p>
        <Link to="/day-004" className="day001-nav-btn day001-nav-next">
          Day 4 →
        </Link>
      </header>

      <div className="day001-hero">
        <div className="day001-hero-left">
          <div className="day001-tags">
            <span>TypeScript</span>
            <span>Year 1</span>
            <span>Functions</span>
          </div>
          <div className="day001-title-block">
            <h1 className="day001-day-num">
              DAY 3 <span aria-hidden="true">⚙️</span>
            </h1>
            <p className="day001-day-theme">FUNCTIONS IN TYPESCRIPT</p>
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
            <p className="day001-profile-role">TS · TYPESCRIPT</p>
          </div>
        </div>
      </div>

      <div className="day001-progress-wrap">
        <div className="day001-progress-bar" style={{ width: '3%' }} />
      </div>

      <p className="day001-summary">
        Day 3 makes functions type-safe. I annotated <strong>parameters</strong> and{' '}
        <strong>return types</strong>, used <strong>optional</strong> and <strong>default</strong> parameters,
        gathered arguments with <strong>rest params</strong>, and described whole signatures with{' '}
        <strong>function types</strong>. I also met typed <strong>callbacks</strong>, function{' '}
        <strong>overloads</strong>, and typing <code>this</code>. Functions are where types earn their keep —
        every wrong argument is now caught before the code runs.
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

      <CardSection icon="🧾" title="SIGNATURES" cards={SIGNATURES} columns={3} />
      <CardSection icon="🎛️" title="PARAMETERS" cards={PARAMS} columns={4} />
      <CardSection icon="🚀" title="GOING FURTHER" cards={ADVANCED} columns={4} />
      <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

      <footer className="day001-hashtags">
        <span>#100DaysOfCode</span>
        <span>#TypeScript</span>
        <span>#Functions</span>
        <span>#WebDev</span>
        <span>#JSLearnHub</span>
      </footer>
      </div>
    </div>
  );
}
