import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REFACTORING_GURU = 'https://refactoring.guru/design-patterns/typescript';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Design patterns', text: 'reusable solutions to common design problems — clearer, more flexible code' },
  { title: 'Program to interfaces', text: 'depend on abstractions, not concrete classes — the core OOP principle' },
  { title: 'Factory', text: 'a function/class that creates objects, hiding which concrete type is built' },
  { title: 'Strategy', text: 'swap interchangeable behaviours behind one interface at runtime' },
  { title: 'Singleton', text: 'guarantee one shared instance — a typed module often does this better' },
  { title: 'Observer', text: 'notify many subscribers when state changes — events, done type-safely' },
  { title: 'Adapter', text: 'wrap a mismatched API to fit the interface your code expects' },
  { title: 'Dependency injection', text: 'pass collaborators in via constructor — testable, decoupled classes' },
  { title: 'Composition > inheritance', text: 'combine small typed pieces instead of deep class hierarchies' },
  { title: 'Generics + patterns', text: 'generics make patterns reusable across any type safely' },
];

const CREATIONAL = [
  {
    icon: '🏭', title: 'Factory', titleClass: 'card-title-cyan', subtitle: 'Hide Construction',
    description: 'A factory decides which concrete type to create behind one return type. Callers get the interface and never depend on a specific class.',
    code: 'interface Logger { log(m: string): void }\nfunction makeLogger(env: string): Logger {\n  return env === "prod" ? new FileLogger() : new ConsoleLogger();\n}',
  },
  {
    icon: '1️⃣', title: 'Singleton', titleClass: 'card-title-purple', subtitle: 'One Shared Instance',
    description: 'Ensure a single instance of something like a config or cache. In TypeScript a module-level constant is often the cleanest, typed singleton.',
    code: '// db.ts — module singleton\nexport const db = new Database();\n// every import shares the same db',
  },
  {
    icon: '🔌', title: 'Adapter', titleClass: 'card-title-amber', subtitle: 'Fit A Mismatched API',
    description: 'Wrap a third-party or legacy API so it satisfies the interface your app expects — swap implementations without touching call sites.',
    code: 'class StripeAdapter implements PaymentGateway {\n  pay(amount: number) { return stripe.charge(amount); }\n}',
  },
];

const BEHAVIOURAL = [
  {
    icon: '🎛️', title: 'Strategy', titleClass: 'card-title-cyan', subtitle: 'Swap Behaviour',
    description: 'Define a family of interchangeable behaviours behind one interface and pick at runtime — sorting orders, pricing rules, or auth methods.',
    code: 'interface Sort<T> { run(a: T[]): T[] }\nfunction sortWith<T>(data: T[], s: Sort<T>) {\n  return s.run(data);\n}',
  },
  {
    icon: '📡', title: 'Observer', titleClass: 'card-title-blue', subtitle: 'Publish / Subscribe',
    description: 'Let objects subscribe to changes and be notified when they happen — the pattern behind event emitters and reactive state, fully typed.',
    code: 'type Listener<T> = (value: T) => void;\nclass Store<T> {\n  private ls: Listener<T>[] = [];\n  subscribe(l: Listener<T>) { this.ls.push(l); }\n}',
  },
  {
    icon: '💉', title: 'Dependency Injection', titleClass: 'card-title-amber', subtitle: 'Pass Collaborators In',
    description: 'Instead of a class creating its dependencies, accept them via the constructor typed as interfaces. Instantly testable — swap in mocks with no changes.',
    code: 'class UserService {\n  constructor(private repo: UserRepo) {}\n  get(id: number) { return this.repo.find(id); }\n}',
  },
  {
    icon: '🧬', title: 'Composition > Inheritance', titleClass: 'card-title-lime', subtitle: 'Combine Small Pieces',
    description: 'Favour composing small typed capabilities (via intersections or injected collaborators) over deep class trees — more flexible and easier to change.',
    code: 'type Service = Loggable & Cacheable & Timestamped;',
  },
];

const PRINCIPLES = [
  {
    icon: '🎯', title: 'Program To Interfaces', titleClass: 'card-title-cyan', subtitle: 'Depend On Abstractions',
    description: 'The thread through every pattern: code against interfaces, not concrete classes. TypeScript’s structural typing makes this natural and safe.',
    code: 'function notify(ch: Channel) { ch.send("hi"); }\n// any Channel implementation works',
  },
  {
    icon: '🧩', title: 'Generics Make Them Reusable', titleClass: 'card-title-purple', subtitle: 'One Pattern, Any Type',
    description: 'Add a type parameter and a pattern works for every type — a generic Store<T>, Repository<T>, or Strategy<T> serves the whole app.',
    code: 'interface Repository<T> {\n  find(id: number): Promise<T | null>;\n}',
  },
  {
    icon: '⚖️', title: 'Use Them Sparingly', titleClass: 'card-title-amber', subtitle: 'Patterns Serve Code',
    description: 'Patterns are tools, not goals. Reach for one when it removes real duplication or coupling — over-engineering hurts as much as no structure.',
    code: '// simplest thing that works, then refactor to a pattern',
  },
  {
    icon: '🔜', title: 'Next: Capstone Project', titleClass: 'card-title-lime', subtitle: 'Day 20 Preview',
    description: 'Tomorrow ties Days 1–19 together: build a fully typed CLI task manager applying types, generics, validation, errors, and patterns.',
    link: { href: '/day-020', label: 'Go to Day 20 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Patterns in TypeScript', titleClass: 'card-title-cyan', subtitle: 'Refactoring Guru',
    description: 'Clear, illustrated explanations and TypeScript examples of every classic design pattern — the best reference to keep as you build.',
    link: { href: REFACTORING_GURU, label: 'Browse the patterns →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Prototype A Pattern',
    description: 'Implement a Strategy or Factory with interfaces and generics, then swap the concrete class to feel the decoupling that patterns provide.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'These OOP ideas recur in Java (Year 3) and shape how you structure React hooks and services — learn them once, reuse them everywhere.',
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

export default function Day019() {
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
          <Link to="/day-018" className="day001-nav-btn day001-nav-prev">← Day 18</Link>
          <p className="day001-datetime">TypeScript Day 19 · 4 Aug 2026</p>
          <Link to="/day-020" className="day001-nav-btn day001-nav-next">Day 20 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Patterns</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 19 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">DESIGN PATTERNS IN TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '19%' }} /></div>

        <p className="day001-summary">
          Day 19 structures code with classic <strong>design patterns</strong>, typed. I built a{' '}
          <strong>Factory</strong> and <strong>Adapter</strong>, swapped behaviour with <strong>Strategy</strong>,
          notified subscribers with <strong>Observer</strong>, and decoupled classes via{' '}
          <strong>dependency injection</strong>. The thread through all of them: <em>program to interfaces</em>,
          use <strong>generics</strong> to make patterns reusable, and prefer <strong>composition</strong> over deep
          inheritance — applied only where they remove real coupling.
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

        <CardSection icon="🏭" title="CREATIONAL & STRUCTURAL" cards={CREATIONAL} columns={3} />
        <CardSection icon="🎛️" title="BEHAVIOURAL & DECOUPLING" cards={BEHAVIOURAL} columns={4} />
        <CardSection icon="🎯" title="PRINCIPLES" cards={PRINCIPLES} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#DesignPatterns</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
