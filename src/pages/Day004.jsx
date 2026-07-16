import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_OBJECTS = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'interface basics', text: 'name an object shape once: `interface User { name: string; age: number }` and reuse it everywhere' },
  { title: 'Optional properties', text: 'a trailing `?` makes a field optional: `email?: string` — absent is allowed, wrong type is not' },
  { title: 'readonly properties', text: '`readonly id: number` can be set once and never reassigned — great for IDs and config' },
  { title: 'Method signatures', text: 'interfaces can declare methods: `greet(): string` — implementers must provide them' },
  { title: 'Index signatures', text: '`[key: string]: number` describes an object with arbitrary string keys of one value type' },
  { title: 'Extending interfaces', text: '`interface Admin extends User` inherits fields and adds more — composition of shapes' },
  { title: 'implements', text: 'a class can `implements User` — the compiler checks it actually has the shape' },
  { title: 'Declaration merging', text: 'two interfaces with the same name merge into one — a TS-only superpower for extending types' },
  { title: 'interface vs type', text: 'both name shapes; interfaces extend/merge, type aliases do unions & mapped types' },
  { title: 'Function interfaces', text: 'an interface can describe a callable: `interface Op { (a: number, b: number): number }`' },
];

const DEFINING = [
  {
    icon: '📐', title: 'Interface Basics', titleClass: 'card-title-cyan', subtitle: 'Name A Shape',
    description: 'An interface describes the fields an object must have. Declare it once, then use it as a type anywhere — cleaner than repeating inline object types.',
    code: 'interface User {\n  name: string;\n  age: number;\n}\nconst u: User = { name: "Sumit", age: 26 };',
  },
  {
    icon: '❔', title: 'Optional Properties', titleClass: 'card-title-purple', subtitle: 'The ? Marker',
    description: 'Mark a field optional with ?. The object is valid with or without it, and TypeScript makes you handle the "maybe missing" case when you read it.',
    code: 'interface User {\n  name: string;\n  email?: string;   // optional\n}\nconst a: User = { name: "Sumit" }; // ✅',
  },
  {
    icon: '🔒', title: 'readonly', titleClass: 'card-title-amber', subtitle: 'Set Once',
    description: 'readonly fields can be assigned at creation but never changed afterward — perfect for IDs, timestamps, and configuration you must not mutate.',
    code: 'interface Account {\n  readonly id: number;\n  balance: number;\n}\nacc.id = 5; // ❌ cannot reassign',
  },
];

const SHAPES = [
  {
    icon: '🧮', title: 'Methods', titleClass: 'card-title-cyan', subtitle: 'Behaviour In The Shape',
    description: 'Interfaces can require methods, not just data. Any object or class that satisfies the interface must implement them with matching types.',
    code: 'interface Logger {\n  log(msg: string): void;\n}\nconst c: Logger = { log: (m) => console.log(m) };',
  },
  {
    icon: '🗂️', title: 'Index Signatures', titleClass: 'card-title-blue', subtitle: 'Arbitrary Keys',
    description: 'When you don’t know the keys ahead of time, an index signature types them all at once — like a dictionary of scores or a config map.',
    code: 'interface Scores {\n  [player: string]: number;\n}\nconst s: Scores = { alice: 10, bob: 7 };',
  },
  {
    icon: '📞', title: 'Callable Interfaces', titleClass: 'card-title-amber', subtitle: 'Describe A Function',
    description: 'An interface can describe a function’s call signature — an alternative to a function type alias, and it can carry extra properties too.',
    code: 'interface Op {\n  (a: number, b: number): number;\n}\nconst add: Op = (a, b) => a + b;',
  },
  {
    icon: '🔗', title: 'Merging', titleClass: 'card-title-lime', subtitle: 'Same Name = One Type',
    description: 'Declare an interface twice and TypeScript merges them. Libraries use this to let you augment their types — something type aliases cannot do.',
    code: 'interface Box { w: number; }\ninterface Box { h: number; }\n// Box now has w and h',
  },
];

const REUSE = [
  {
    icon: '🧬', title: 'Extending', titleClass: 'card-title-cyan', subtitle: 'Inherit & Add',
    description: 'One interface can extend another (or several), inheriting all fields and adding new ones — build complex shapes from simple, reusable pieces.',
    code: 'interface User { name: string; }\ninterface Admin extends User {\n  role: "admin";\n}',
  },
  {
    icon: '🏗️', title: 'implements', titleClass: 'card-title-purple', subtitle: 'Classes Honour Shapes',
    description: 'A class can implement an interface. TypeScript then verifies the class truly provides every property and method the interface demands.',
    code: 'class AppUser implements User {\n  name = "Sumit";\n}',
  },
  {
    icon: '⚖️', title: 'interface vs type', titleClass: 'card-title-amber', subtitle: 'When To Use Which',
    description: 'Use interface for object shapes you may extend or that a class implements. Use type for unions, tuples, and mapped types. They overlap a lot — pick one and stay consistent.',
    code: 'interface A { x: number }   // extendable\ntype B = A | { y: number } // unions',
  },
  {
    icon: '🔜', title: 'Next: Classes', titleClass: 'card-title-lime', subtitle: 'Day 5 Preview',
    description: 'Tomorrow we build classes in TypeScript — access modifiers, readonly fields, parameter properties, implements, and abstract classes.',
    link: { href: '/day-005', label: 'Go to Day 5 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Object Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter on interfaces and object types — optional/readonly properties, index signatures, and extending. Everything from today.',
    link: { href: TS_OBJECTS, label: 'Read Object Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Try It Live',
    description: 'Define an interface, build objects that satisfy it, and break them on purpose to see the exact error messages TypeScript produces.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Interfaces are how you model props, API responses, and state — the backbone of typed React & Next.js later this year.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
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
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-003" className="day001-nav-btn day001-nav-prev">← Day 3</Link>
          <p className="day001-datetime">TypeScript Day 4 · 20 Jul 2026</p>
          <Link to="/day-005" className="day001-nav-btn day001-nav-next">Day 5 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Interfaces</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 4 <span aria-hidden="true">📐</span></h1>
              <p className="day001-day-theme">INTERFACES — MODELLING OBJECT SHAPES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '4%' }} /></div>

        <p className="day001-summary">
          Day 4 is about naming shapes. I used <strong>interfaces</strong> to describe objects once and reuse them,
          with <strong>optional</strong> and <strong>readonly</strong> properties, <strong>method</strong> and{' '}
          <strong>index</strong> signatures. I learned to <strong>extend</strong> interfaces, have classes{' '}
          <code>implements</code> them, saw <strong>declaration merging</strong>, and settled the{' '}
          <code>interface</code> vs <code>type</code> question. This is how I’ll model props and API data all year.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="📐" title="DEFINING INTERFACES" cards={DEFINING} columns={3} />
        <CardSection icon="🧩" title="SHAPES & SIGNATURES" cards={SHAPES} columns={4} />
        <CardSection icon="🧬" title="EXTEND & IMPLEMENT" cards={REUSE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Interfaces</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
