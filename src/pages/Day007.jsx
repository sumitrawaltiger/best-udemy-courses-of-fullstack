import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_CLASSES = 'https://www.typescriptlang.org/docs/handbook/2/classes.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'interface basics', text: 'name an object shape once: `interface User { name: string; age: number }` and reuse it everywhere' },
  { title: 'Optional & readonly', text: '`email?: string` is optional; `readonly id: number` is set once and never reassigned' },
  { title: 'Declaration merging', text: 'two interfaces with the same name merge into one — a TS-only superpower aliases lack' },
  { title: 'interface vs type', text: 'interfaces extend/merge; type aliases do unions & mapped types' },
  { title: 'Typed classes', text: 'fields and methods carry types — `class Point { x: number; y: number }`' },
  { title: 'Constructors', text: 'initialize typed fields; strict mode ensures every field is assigned' },
  { title: 'public / private / protected', text: 'access modifiers control who can touch a member' },
  { title: 'Parameter properties', text: '`constructor(private id: number)` declares and assigns in one line' },
  { title: 'readonly fields', text: '`private readonly key: string` — assigned once in the constructor' },
  { title: 'Getters & setters', text: 'accessors expose controlled access to private state' },
  { title: 'implements', text: 'a class can implement an interface — TS verifies the shape matches' },
  { title: 'Inheritance', text: '`extends` a base class, call `super()`, override methods with correct types' },
  { title: 'abstract classes', text: 'a base you cannot instantiate; abstract methods must be implemented' },
  { title: 'static members', text: 'belong to the class itself — shared counters, factories, constants' },
];

const INTERFACES = [
  {
    icon: '📐', title: 'Interface Basics', titleClass: 'card-title-cyan', subtitle: 'Name A Shape',
    description: 'An interface names an object shape once so you can reuse it everywhere. Day 6 named types with `type`; `interface` is the other way — and the one classes are built to honour.',
    code: 'interface User {\n  name: string;\n  age: number;\n}\nconst u: User = { name: "Sumit", age: 26 };',
  },
  {
    icon: '❔', title: 'Optional & readonly', titleClass: 'card-title-purple', subtitle: '? and readonly',
    description: 'A trailing ? makes a field optional, and readonly fields are set once at creation and never reassigned — perfect for IDs and timestamps.',
    code: 'interface Account {\n  readonly id: number;\n  email?: string;   // optional\n  balance: number;\n}\nacc.id = 5; // ❌ cannot reassign',
  },
  {
    icon: '🧮', title: 'Methods & Index Signatures', titleClass: 'card-title-amber', subtitle: 'Behaviour & Dynamic Keys',
    description: 'Interfaces can require methods, not just data. An index signature types keys you do not know ahead of time — a dictionary or config map.',
    code: 'interface Logger {\n  log(msg: string): void;\n}\ninterface Scores {\n  [player: string]: number;\n}',
  },
  {
    icon: '⚖️', title: 'interface vs type', titleClass: 'card-title-lime', subtitle: 'When To Use Which',
    description: 'Interfaces extend and merge — declare one twice and TypeScript merges them, which libraries use for augmentation. Type aliases (Day 6) do unions, tuples and mapped types. Use interface for object shapes a class implements.',
    code: 'interface Box { w: number; }\ninterface Box { h: number; }\n// Box now has w and h — aliases cannot do this',
  },
];

const BASICS = [
  {
    icon: '🏛️', title: 'Typed Class', titleClass: 'card-title-cyan', subtitle: 'Fields + Constructor',
    description: 'Declare typed fields and initialize them in the constructor. Under strict mode, TypeScript ensures every field ends up assigned before use.',
    code: 'class Point {\n  x: number;\n  y: number;\n  constructor(x: number, y: number) {\n    this.x = x; this.y = y;\n  }\n}',
  },
  {
    icon: '🎯', title: 'Parameter Properties', titleClass: 'card-title-purple', subtitle: 'Declare + Assign',
    description: 'Prefix a constructor parameter with an access modifier and TypeScript declares and assigns the field for you — the same class in a fraction of the code.',
    code: 'class Point {\n  constructor(public x: number, public y: number) {}\n}\n// x and y are created and set automatically',
  },
  {
    icon: '🔒', title: 'Access Modifiers', titleClass: 'card-title-amber', subtitle: 'public · private · protected',
    description: 'public is the default; private hides a member from outside the class; protected allows subclasses but not the outside world. Encapsulation, enforced at compile time.',
    code: 'class Account {\n  private balance = 0;\n  deposit(n: number) { this.balance += n; }\n}\nacc.balance; // ❌ private',
  },
];

const STATE = [
  {
    icon: '🔐', title: 'readonly Fields', titleClass: 'card-title-cyan', subtitle: 'Set Once In Constructor',
    description: 'readonly members can only be assigned where they’re declared or in the constructor. Combine with private for immutable, hidden state.',
    code: 'class User {\n  constructor(private readonly id: number) {}\n}',
  },
  {
    icon: '🎚️', title: 'Getters & Setters', titleClass: 'card-title-blue', subtitle: 'Controlled Access',
    description: 'Expose private state through get/set accessors — validate on write, compute on read, all while looking like a plain property to callers.',
    code: 'class Temp {\n  private _c = 0;\n  get f() { return this._c * 1.8 + 32; }\n  set c(v: number) { this._c = v; }\n}',
  },
  {
    icon: '⚙️', title: 'static Members', titleClass: 'card-title-amber', subtitle: 'On The Class Itself',
    description: 'static fields and methods belong to the class, not instances — ideal for counters, constants, and factory helpers shared across all objects.',
    code: 'class Id {\n  static next = 1;\n  static make() { return Id.next++; }\n}\nId.make(); // 1',
  },
  {
    icon: '📜', title: 'implements', titleClass: 'card-title-lime', subtitle: 'Honour An Interface',
    description: 'A class can implement one or more of yesterday’s interfaces. TypeScript checks that it provides every required property and method.',
    code: 'interface Named { name: string; }\nclass Dog implements Named {\n  name = "Rex";\n}',
  },
];

const INHERIT = [
  {
    icon: '🧬', title: 'Inheritance', titleClass: 'card-title-cyan', subtitle: 'extends & super',
    description: 'Extend a base class to inherit its members, call super() in the constructor, and override methods — TypeScript checks the overrides stay compatible.',
    code: 'class Animal {\n  constructor(public name: string) {}\n  speak() { return "..."; }\n}\nclass Dog extends Animal {\n  speak() { return "Woof"; }\n}',
  },
  {
    icon: '🚫', title: 'abstract Classes', titleClass: 'card-title-purple', subtitle: 'Blueprints',
    description: 'An abstract class can’t be instantiated directly. It defines shared code plus abstract methods that every subclass must implement.',
    code: 'abstract class Shape {\n  abstract area(): number;\n}\nclass Square extends Shape {\n  constructor(private s: number) { super(); }\n  area() { return this.s ** 2; }\n}',
  },
  {
    icon: '🧩', title: 'Classes + Generics', titleClass: 'card-title-amber', subtitle: 'A Taste Of Day 8',
    description: 'Classes can be generic too — a Box<T> holds any type safely. That’s the bridge to tomorrow’s topic: generics.',
    code: 'class Box<T> {\n  constructor(public value: T) {}\n}\nconst b = new Box<string>("hi");',
  },
  {
    icon: '🔜', title: 'Next: Generics', titleClass: 'card-title-lime', subtitle: 'Day 8 Preview',
    description: 'Tomorrow we make types reusable with generics — generic functions, constraints, and generic interfaces & classes.',
    link: { href: '/day-008', label: 'Go to Day 8 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Classes', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The full reference on TypeScript classes — modifiers, parameter properties, accessors, inheritance, and abstract classes.',
    link: { href: TS_CLASSES, label: 'Read the Classes chapter →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Build A Class',
    description: 'Write a class, mark a field private, and try to access it from outside to see the compiler stop you. Fast, hands-on reinforcement.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Classes power services, models, and stores. Later years reuse the same OOP ideas in Python and Java — the concepts transfer.',
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
          <Link to="/day-006" className="day001-nav-btn day001-nav-prev">← Day 6</Link>
          <p className="day001-datetime">TypeScript Day 7 · 23 Jul 2026</p>
          <Link to="/day-008" className="day001-nav-btn day001-nav-next">Day 8 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Interfaces</span><span>Classes</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 7 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">INTERFACES, CLASSES &amp; OOP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '7%' }} /></div>

        <p className="day001-summary">
          Day 7 brings object-oriented TypeScript. I wrote <strong>typed classes</strong> with constructors,
          used <strong>access modifiers</strong> (public/private/protected) and <strong>parameter properties</strong>,
          added <strong>readonly</strong> fields, <strong>getters/setters</strong>, and <strong>static</strong> members.
          Then <strong>inheritance</strong> with <code>extends</code>/<code>super</code>, <code>implements</code> for
          yesterday’s interfaces, and <strong>abstract</strong> base classes. Real encapsulation, checked at compile time.
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

        <CardSection icon="📐" title="INTERFACES — MODELLING OBJECT SHAPES" cards={INTERFACES} columns={4} />
        <CardSection icon="🏛️" title="CLASS BASICS" cards={BASICS} columns={3} />
        <CardSection icon="🔐" title="STATE & ACCESS" cards={STATE} columns={4} />
        <CardSection icon="🧬" title="INHERITANCE & ABSTRACTION" cards={INHERIT} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#OOP</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
