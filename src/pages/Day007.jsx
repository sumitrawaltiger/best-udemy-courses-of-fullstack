import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_INTERFACES = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
const TS_CLASSES = 'https://www.typescriptlang.org/docs/handbook/2/classes.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep07-interfaces.jpeg';

const LEARNT_TODAY = [
  { title: 'Interfaces define shape', text: 'an interface describes the shape of an object once: `interface User { id: number; name: string }`' },
  { title: 'Why interfaces', text: 'they define object structure, are reusable, improve code readability, and are great for team projects' },
  { title: 'Optional properties (?)', text: 'a trailing `?` — `price?: number` — means the field may or may not exist' },
  { title: 'Readonly properties', text: '`readonly apiUrl: string` cannot be changed after initialization — reassigning is an error' },
  { title: 'Optional vs readonly', text: 'use optional for flexibility, use readonly for safety' },
  { title: 'Extending interfaces', text: '`interface Developer extends Person` — Developer gets all of Person’s properties plus its own' },
  { title: 'interface vs type', text: 'interfaces can be extended, merged (declaration merging) & implemented by classes; type aliases are more flexible (unions, tuples, primitives)' },
  { title: 'Declaration merging', text: 'two interfaces with the same name merge into one; two `type` aliases with the same name are a duplicate-identifier error' },
  { title: 'When to choose which', text: 'interfaces for object structures & OOP; `type` for unions, tuples & advanced types' },
  { title: 'Typed classes (bonus)', text: 'a class can `implements` an interface — TypeScript verifies the shape matches' },
];

const INTERFACES = [
  {
    icon: '📐', title: 'Creating Interfaces', titleClass: 'card-title-cyan', subtitle: 'Define The Shape',
    description: 'An interface defines the shape of an object — name the fields and their types once, then reuse that name everywhere a value of that shape is expected.',
    code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  isActive: boolean;\n}',
  },
  {
    icon: '✅', title: 'Using An Interface', titleClass: 'card-title-purple', subtitle: 'Typed Object Literal',
    description: 'Annotate a variable with the interface and the object must supply every field with the right type. Miss one, or use the wrong type, and it fails to compile.',
    code: 'const user: User = {\n  id: 1,\n  name: "Faisal",\n  email: "faisal@example.com",\n  isActive: true\n};',
  },
  {
    icon: '💡', title: 'Why Interfaces?', titleClass: 'card-title-amber', subtitle: 'The Payoff',
    description: 'Four reasons from the episode: define object structure, reusable, improve code readability, and great for team projects — interfaces are the foundation of well-structured, scalable TypeScript apps.',
    code: '// Define object structure\n// Reusable\n// Improve code readability\n// Great for team projects',
  },
];

const OPTIONAL_READONLY = [
  {
    icon: '❔', title: 'Optional Properties ( ? )', titleClass: 'card-title-cyan', subtitle: 'May Or May Not Exist',
    description: 'A trailing ? marks a property as optional — the field may or may not exist on the object. Here price and description are optional, so a Product with just id and name is still valid.',
    code: 'interface Product {\n  id: number;\n  name: string;\n  price?: number;        // optional\n  description?: string;  // optional\n}',
  },
  {
    icon: '🔐', title: 'Readonly Properties', titleClass: 'card-title-purple', subtitle: 'readonly — Set Once',
    description: 'A readonly property cannot be changed after initialization. Assign it when the object is created; any later reassignment is a compile-time error.',
    code: 'interface Config {\n  readonly apiUrl: string;\n  readonly timeout: number;\n}\nconst config: Config = {\n  apiUrl: "https://api.com",\n  timeout: 5000\n};\n// config.apiUrl = "new.com";\n// ❌ Error: Cannot assign to \'apiUrl\'\n// because it is a read-only property.',
  },
  {
    icon: '⚖️', title: 'Optional vs Readonly', titleClass: 'card-title-amber', subtitle: 'Flexibility vs Safety',
    description: 'The episode’s rule of thumb: use optional (?) for flexibility when a field is not always present, and readonly for safety when a value must never change once set.',
    code: '// ?         → flexibility\n// readonly  → safety',
  },
];

const EXTENDING = [
  {
    icon: '🧬', title: 'Extending Interfaces', titleClass: 'card-title-cyan', subtitle: 'extends',
    description: 'An interface can extend another interface. Developer extends Person, so it inherits Person’s fields and adds its own — build larger shapes from smaller ones.',
    code: 'interface Person {\n  id: number;\n  name: string;\n}\ninterface Developer extends Person {\n  skills: string[];\n  experience: number;\n}',
  },
  {
    icon: '✅', title: 'Using The Extended Type', titleClass: 'card-title-purple', subtitle: 'All + Its Own',
    description: 'A Developer value must supply every property of Person plus Developer’s own. Developer has all properties of Person, and then some.',
    code: 'const dev: Developer = {\n  id: 1,\n  name: "Faisal",\n  skills: ["TS", "JS", "Node"],\n  experience: 3\n};',
  },
  {
    icon: '⚖️', title: 'interface vs type', titleClass: 'card-title-amber', subtitle: 'How They Differ',
    description: 'Interfaces can be extended, are automatically merged (declaration merging), are best for object shapes & OOP, and can be implemented by classes. Type aliases cannot be extended or merged and cannot be implemented by classes — but are more flexible (unions, tuples, primitives).',
    code: '// interface → extend ✓  merge ✓  implements ✓\n// type      → unions/tuples/primitives ✓',
  },
  {
    icon: '🔀', title: 'Merging vs Duplicate', titleClass: 'card-title-lime', subtitle: 'The Deciding Example',
    description: 'Declare an interface twice and TypeScript merges the declarations. Declare a type alias twice and you get a duplicate-identifier error — the clearest line between the two.',
    code: 'interface ID { id: number }\ninterface ID { name: string }\n// ✅ Merged → ID has both id & name\n\ntype ID = { id: number }\ntype ID = { name: string }\n// ❌ Duplicate identifier error',
  },
];

const RECAP = [
  {
    icon: '📝', title: 'Quick Recap', titleClass: 'card-title-cyan', subtitle: 'The Episode In Four Lines',
    description: 'Interfaces define the shape of objects. Use ? for optional properties and readonly for immutability. Extend interfaces to reuse and build larger structures. Choose interfaces for objects and type for flexibility.',
    footer: 'Well-defined types today, bug-free code tomorrow.',
  },
  {
    icon: '⭐', title: 'Pro Tip', titleClass: 'card-title-purple', subtitle: 'Interface Or Type?',
    description: 'Use interfaces for object structures and OOP; use type for unions, tuples and advanced types. When a class will implement the shape, reach for an interface.',
    code: '// object shapes / OOP → interface\n// unions / tuples / advanced → type',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Object Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter on object & interface types — optional and readonly properties, extending interfaces, and how they compare to type aliases.',
    link: { href: TS_INTERFACES, label: 'Read Object Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Break It On Purpose',
    description: 'Paste today’s Config interface in, then try to reassign a readonly field, or declare interface ID twice to watch declaration merging work. Seeing the error is how the rule sticks.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '📗', title: 'Classes (Bonus)', titleClass: 'card-title-amber', subtitle: 'Where Interfaces Land',
    description: 'A class can implement an interface. The classes chapter shows modifiers, parameter properties, accessors and inheritance — the OOP that builds on today’s shapes.',
    link: { href: TS_CLASSES, label: 'Read the Classes chapter →', external: true },
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
    <>
      <div className="day001-page">
        <div className="day001-scale-wrap" ref={scaleRef}>
          <header className="day001-topbar">
            <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
            <Link to="/day-006" className="day001-nav-btn day001-nav-prev">← Day 6</Link>
            <p className="day001-datetime">TypeScript Day 7</p>
            <Link to="/day-008" className="day001-nav-btn day001-nav-next">Day 8 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Interfaces</span><span>Episode 7</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 7 <span aria-hidden="true">📐</span></h1>
                <p className="day001-day-theme">INTERFACES — SHAPE, OPTIONAL &amp; READONLY, EXTENDS, INTERFACE vs TYPE</p>
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
            Day 7 follows <strong>Episode 7</strong>: interfaces, the foundation of well-structured, scalable
            TypeScript. An <strong>interface</strong> defines the <strong>shape</strong> of an object — reusable,
            readable, and great for team projects. I marked fields <strong>optional</strong> with{' '}
            <code>?</code> and locked them with <code>readonly</code> (optional for flexibility, readonly for safety),
            used <code>extends</code> so one interface inherits another’s properties, and compared{' '}
            <strong>interface vs type</strong>: interfaces extend, merge (declaration merging) and are implemented by
            classes, while <code>type</code> is more flexible for unions, tuples and advanced types.
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

          <CardSection icon="📐" title="1 · CREATING INTERFACES" cards={INTERFACES} columns={3} />
          <CardSection icon="🔐" title="2 · OPTIONAL & READONLY PROPERTIES" cards={OPTIONAL_READONLY} columns={3} />
          <CardSection icon="🧬" title="3 · EXTENDING INTERFACES & INTERFACE vs TYPE" cards={EXTENDING} columns={4} />
          <CardSection icon="📝" title="RECAP & PRO TIP" cards={RECAP} columns={2} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode7</span><span>#Interfaces</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 7 Notes — Interfaces: Shape, Optional &amp; Readonly, Extending &amp; Interface vs Type
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 7 — Interfaces. Creating interfaces: interfaces define the shape of an object, shown with interface User having id number, name string, email string and isActive boolean, used as const user of type User with id 1, name Faisal, email faisal@example.com and isActive true; why interfaces — define object structure, reusable, improve code readability, great for team projects — the foundation of well-structured and scalable TypeScript apps. Optional and readonly properties: optional properties marked with a question mark may or may not exist, shown with interface Product where price and description are optional; readonly properties cannot be changed after initialization, shown with interface Config having readonly apiUrl string and readonly timeout number, where reassigning config.apiUrl gives an error because it is a read-only property; use optional for flexibility and readonly for safety. Extending interfaces: interfaces can extend other interfaces, shown with interface Developer extends Person adding skills string array and experience number, used as const dev with id, name, skills TS JS Node and experience 3, so Developer has all properties of Person plus its own. Interface vs type: interfaces can be extended, are automatically merged via declaration merging, are best for object shapes and OOP, and can be implemented by classes, whereas type aliases cannot be extended, do not merge, are more flexible for unions tuples and primitives, and cannot be implemented by classes; declaring interface ID twice merges into one with both id and name, while declaring type ID twice is a duplicate identifier error. Quick recap: interfaces define the shape of objects, use question mark for optional and readonly for immutability, extend interfaces to reuse and build larger structures, and choose interfaces for objects and type for flexibility."
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 7 notes — creating interfaces, optional &amp; readonly properties, extending
            interfaces, and interface vs type. Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
