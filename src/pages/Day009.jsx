import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_CLASSES = 'https://www.typescriptlang.org/docs/handbook/2/classes.html';
const MDN_CLASSES = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes';

const LEARNT_TODAY = [
  { title: 'class & constructor', text: 'a blueprint for objects; the constructor sets up each instance’s fields' },
  { title: 'Typed fields', text: 'class properties are annotated just like variables — the compiler checks every assignment' },
  { title: 'Access modifiers', text: 'public (default), private and protected control who can touch a member' },
  { title: 'Parameter properties', text: 'a modifier in the constructor args declares and assigns a field in one line' },
  { title: 'readonly fields', text: 'set once in the constructor, never reassigned — great for ids and config' },
  { title: 'Inheritance', text: 'extends reuses a base class; super() calls the parent constructor' },
  { title: 'abstract classes', text: 'define a shape with some methods unimplemented — subclasses must fill them in' },
  { title: 'implements an interface', text: 'a class can promise to satisfy an interface, and TS verifies it does' },
];

const CLASSES = [
  {
    icon: '🏛️', title: 'class & constructor', titleClass: 'card-title-cyan', subtitle: 'Blueprints',
    description:
      'A class bundles data and behaviour. Fields are typed like variables and the constructor initialises each instance. TypeScript checks every field is set and used correctly.',
    code: 'class Point {\n  x: number;\n  y: number;\n  constructor(x: number, y: number) {\n    this.x = x; this.y = y;\n  }\n}',
  },
  {
    icon: '🔐', title: 'Access Modifiers', titleClass: 'card-title-purple', subtitle: 'public · private · protected',
    description:
      'Modifiers control visibility. private hides a member from outside, protected shares it with subclasses, readonly locks it. Put them in the constructor args to declare and assign at once.',
    code: 'class User {\n  constructor(\n    public readonly id: number,\n    private token: string,\n  ) {}\n}\n// id/token declared + assigned in one line',
  },
];

const OOP = [
  {
    icon: '🧬', title: 'Inheritance', titleClass: 'card-title-cyan', subtitle: 'extends & super',
    description:
      'A subclass extends a base class, reusing its fields and methods and calling super() to run the parent constructor. Override methods to specialise behaviour while keeping the shared parts.',
    code: 'class Animal { move() { return "..."; } }\nclass Dog extends Animal {\n  move() { return "run"; } // override\n}',
  },
  {
    icon: '🧩', title: 'abstract Classes', titleClass: 'card-title-purple', subtitle: 'Enforce A Contract',
    description:
      'An abstract class can’t be instantiated directly — it defines shared logic plus abstract methods every subclass must implement. It’s a base with a promise attached.',
    code: 'abstract class Shape {\n  abstract area(): number;    // must implement\n  describe() { return `area=${this.area()}`; }\n}',
  },
  {
    icon: '📜', title: 'implements', titleClass: 'card-title-amber', subtitle: 'Satisfy An Interface',
    description:
      'A class can implement one or more interfaces, and the compiler checks it provides every required member. This links the interface world (Day 45) to real runtime classes.',
    code: 'interface Logger { log(m: string): void }\nclass ConsoleLogger implements Logger {\n  log(m: string) { console.log(m); }\n}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Classes', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'The TypeScript classes chapter — fields, methods, access modifiers, parameter properties, inheritance, abstract classes and implements, all with examples.',
    link: { href: TS_CLASSES, label: 'Open the Classes docs →', external: true },
  },
  {
    icon: '📗', title: 'JS Classes (MDN)', titleClass: 'card-title-purple', subtitle: 'Foundation',
    description:
      'The underlying JavaScript class semantics TypeScript builds on — the runtime behaviour behind the types.',
    link: { href: MDN_CLASSES, label: 'Open MDN Classes →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Modules & Tooling', titleClass: 'card-title-amber', subtitle: 'Day 10 Preview',
    description:
      'Tomorrow — ES modules and type-only imports, plus the everyday tooling: ESLint, Prettier and running TS with tsx.',
    link: { href: '/day-010', label: 'Go to Day 10 →' },
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
          <Link to="/day-008" className="day001-nav-btn day001-nav-prev">← Day 8</Link>
          <p className="day001-datetime">TypeScript Day 9</p>
          <Link to="/day-010" className="day001-nav-btn day001-nav-next">Day 10 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Classes &amp; OOP</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 9 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">CLASSES &amp; OBJECT-ORIENTED TS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '9%' }} /></div>

        <p className="day001-summary">
          TypeScript makes JavaScript classes safe and expressive. A <strong>class</strong> bundles typed fields with a{' '}
          <strong>constructor</strong>, and <strong>access modifiers</strong> — <code>public</code>,{' '}
          <code>private</code>, <code>protected</code>, <code>readonly</code> — control visibility (drop them into the
          constructor args as <strong>parameter properties</strong> to declare and assign in one line).{' '}
          <strong>Inheritance</strong> with <code>extends</code>/<code>super</code> reuses a base class,{' '}
          <strong>abstract</strong> classes force subclasses to implement required methods, and{' '}
          <code>implements</code> ties a class to an <em>interface</em> the compiler verifies. <em>Next: modules &amp;
          tooling.</em>
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

        <CardSection icon="🏛️" title="CLASSES" cards={CLASSES} columns={2} />
        <CardSection icon="🧬" title="INHERITANCE & ABSTRACTION" cards={OOP} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#OOP</span><span>#Classes</span>
        </footer>
      </div>
    </div>
  );
}
