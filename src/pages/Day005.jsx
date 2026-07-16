import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_OBJECTS = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep05-data-types.jpeg';

const LEARNT_TODAY = [
  { title: 'Arrays', text: 'store multiple values of the same type: `let numbers: number[] = [1, 2, 3]`' },
  { title: 'Array rules', text: 'use Type[] to define the array type — all elements must be the same type' },
  { title: 'Array methods', text: 'push() add at end · pop() remove last · shift() remove first · unshift() add at first · length' },
  { title: 'Tuples', text: 'an array with fixed length and known types: `[string, number, boolean]`' },
  { title: 'Why tuples', text: 'when you know the exact number of elements and their specific order' },
  { title: 'Objects', text: 'store key-value pairs — define the shape, all properties required by default' },
  { title: 'Optional properties', text: 'use ? to make a property optional: `age?: number`' },
  { title: 'readonly', text: 'makes data immutable — it cannot be changed after it is set' },
  { title: 'Why readonly', text: 'prevent accidental changes, improve code safety, great for constants and configs' },
  { title: 'as const', text: 'makes all properties readonly and literal — freezes an entire object' },
];

const ARRAYS = [
  {
    icon: '📚', title: 'Arrays', titleClass: 'card-title-cyan', subtitle: 'Same Type, Many Values',
    description:
      'An array stores multiple values of the same type. Use Type[] to declare it — every element is checked, so a list of numbers can never hold a string.',
    code: '// number array\nlet numbers: number[] = [1, 2, 3, 4, 5];\nnumbers.push(6);   // [1,2,3,4,5,6]\n\n// string array\nlet names: string[] = ["Faisal", "Ahmad"];\nnames.push("Developer");',
  },
  {
    icon: '🔧', title: 'Common Methods', titleClass: 'card-title-purple', subtitle: 'Typed Operations',
    description:
      'All the familiar array methods are fully typed — push adds at the end, pop removes the last, shift removes the first, unshift adds at the front, length gives the size.',
    code: 'push()    → add at end\npop()     → remove last\nshift()   → remove first\nunshift() → add at first\nlength    → get size',
  },
  {
    icon: '📦', title: 'Tuples', titleClass: 'card-title-amber', subtitle: 'Fixed Length & Order',
    description:
      'A tuple is an array with a fixed length and a known type at each position — use it when you know the exact number of elements and their specific order.',
    code: 'let user: [string, number, boolean] = ["Faisal", 21, true];\nconsole.log(user[0]);  // Faisal\nconsole.log(user[1]);  // 21\n// user.push("extra"); ❌ Tuple type of length 3\n\nlet rgb: [number, number, number] = [255, 0, 128];',
  },
];

const OBJECTS = [
  {
    icon: '🧩', title: 'Objects', titleClass: 'card-title-cyan', subtitle: 'Key-Value Pairs',
    description:
      'Objects store key-value pairs. Define the shape of the object up front — all properties are required by default, so nothing can be silently missing.',
    code: 'let user: {\n  name: string;\n  age: number;\n  isStudent: boolean;\n} = {\n  name: "Faisal",\n  age: 21,\n  isStudent: true,\n};',
  },
  {
    icon: '❔', title: 'Optional Properties', titleClass: 'card-title-blue', subtitle: 'Use a ?',
    description:
      'Mark a property optional with ? so it can be omitted. Objects with or without it are both valid — but a wrong type still isn’t.',
    code: 'type User = {\n  name: string;\n  age?: number;    // optional\n  email?: string;  // optional\n};\nconst user1: User = { name: "Faisal" };          // ✅\nconst user2: User = { name: "Faisal", age: 21 }; // ✅',
  },
  {
    icon: '🌍', title: 'Model Real Entities', titleClass: 'card-title-amber', subtitle: 'Why It Matters',
    description:
      'Objects let you represent real-world entities cleanly — a user, a product, an API response. Define the shape once and every usage is checked against it.',
    footer: '+ Objects help us represent real world entities cleanly.',
  },
  {
    icon: '🔜', title: 'Next: Interfaces', titleClass: 'card-title-lime', subtitle: 'Day 6 Preview',
    description:
      'Tomorrow: interfaces — giving these object shapes a reusable name, with extending, implementing, and interface vs type.',
    link: { href: '/day-006', label: 'Go to Day 6 →' },
  },
];

const READONLY = [
  {
    icon: '🔒', title: 'readonly Types', titleClass: 'card-title-cyan', subtitle: 'Immutable Data',
    description:
      'readonly makes data immutable — once set, it cannot be changed. Try to reassign or push and the compiler stops you.',
    code: '// readonly array\nlet readonlyNumbers: readonly number[] = [1, 2, 3];\n// readonlyNumbers.push(4); ❌ Error\n\n// readonly tuple\nlet point: readonly [number, number] = [10, 20];\n// point[0] = 100; ❌ Error',
  },
  {
    icon: '🛡️', title: 'Why readonly?', titleClass: 'card-title-purple', subtitle: 'Safety By Default',
    description:
      'Prevent accidental changes, improve code safety, and make intent obvious. It’s especially valuable for constants and configuration you must not mutate.',
    footer: '+ Prevent accidental changes · Improve code safety · Great for constants and configs',
  },
  {
    icon: '🧊', title: 'as const', titleClass: 'card-title-amber', subtitle: 'Freeze Everything',
    description:
      'Another way: as const makes all properties readonly and literal at once — the entire object becomes immutable and precisely typed.',
    code: 'const config = {\n  apiUrl: "https://api.com",\n  timeout: 5000,\n} as const; // entire object is readonly',
  },
  {
    icon: '🏆', title: 'Key Takeaway', titleClass: 'card-title-lime', subtitle: 'The Payoff',
    description:
      'Strongly typed data structures mean fewer bugs, better code, and happy developers. Arrays, tuples, objects, and readonly are the shapes real data lives in.',
    footer: '+ Strongly typed data structures = Fewer bugs + Better code + Happy Developers!',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Object Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description:
      'The handbook chapter on object types — optional and readonly properties, index signatures, and how shapes are checked.',
    link: { href: TS_OBJECTS, label: 'Read Object Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Break It On Purpose',
    description:
      'Build an array, a tuple, and a readonly object — then try to push to the tuple or reassign a readonly field and read the exact errors.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description:
      'Arrays, tuples, and object shapes are how you model props, API data, and state — the vocabulary for everything ahead this year.',
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

export default function Day005() {
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
            <Link to="/day-004" className="day001-nav-btn day001-nav-prev">← Day 4</Link>
            <p className="day001-datetime">TypeScript Day 5 · 21 Jul 2026</p>
            <Link to="/day-006" className="day001-nav-btn day001-nav-next">Day 6 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Episode 5</span><span>Data Types</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 5 <span aria-hidden="true">📦</span></h1>
                <p className="day001-day-theme">DATA TYPES — ARRAYS, TUPLES, OBJECTS & READONLY</p>
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

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '5%' }} /></div>

          <p className="day001-summary">
            <strong>Episode 5</strong> — structuring real data. <strong>Arrays</strong> hold many values of the same
            type (<code>Type[]</code>), <strong>tuples</strong> fix both the length and the type at each position,
            and <strong>objects</strong> store key-value pairs with a defined shape (properties required by default,{' '}
            <code>?</code> to make one optional). Then <strong>readonly</strong> makes data immutable — with{' '}
            <code>as const</code> to freeze a whole object. TypeScript helps me structure data better and avoid bugs
            early. <em>Strongly typed data structures = fewer bugs + better code.</em>
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

          <CardSection icon="📚" title="ARRAYS & TUPLES" cards={ARRAYS} columns={3} />
          <CardSection icon="🧩" title="OBJECTS" cards={OBJECTS} columns={4} />
          <CardSection icon="🔒" title="READONLY TYPES" cards={READONLY} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode5</span><span>#DataTypes</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 5 Notes — Data Types: Arrays, Tuples, Objects &amp; Readonly
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 5 — Data Types: arrays storing multiple values of the same type using Type[] with number and string array examples and common methods (push, pop, shift, unshift, length), tuples as arrays with fixed length and known types such as [string, number, boolean] and an rgb example, objects storing key-value pairs with a defined shape and optional properties using a question mark, and readonly types making data immutable including readonly arrays and tuples, why readonly prevents accidental changes and improves code safety, and using as const to make an entire object readonly and literal"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 5 notes — arrays &amp; methods, tuples, object shapes, and readonly / as const.
            Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
