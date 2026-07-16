import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_DOM = 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'lib "DOM"', text: 'the tsconfig lib that makes document, window, and every element type available' },
  { title: 'DOM types', text: 'document, window, elements, and events are all fully typed out of the box' },
  { title: 'Typed elements', text: 'querySelector<HTMLInputElement> returns the exact element type' },
  { title: 'Element vs specific', text: 'a plain Element lacks .value — pass the specific type to get it' },
  { title: 'Possibly null', text: 'querySelector can return null — narrow before using the element' },
  { title: 'Typed events', text: 'addEventListener gives a typed event — MouseEvent, KeyboardEvent, and more' },
  { title: 'currentTarget', text: 'typed to the element the handler is bound to — safer than target' },
  { title: 'Non-null assertion', text: 'the `!` postfix says "this is not null" — use only when you truly know' },
  { title: 'classList & dataset', text: 'typed helpers for classes and data-* attributes' },
  { title: 'Forms', text: 'HTMLFormElement and HTMLInputElement expose exactly the right properties' },
];

const BASICS = [
  {
    icon: '📚', title: 'lib "DOM"', titleClass: 'card-title-cyan', subtitle: 'Turn On The Browser',
    description: 'The lib option chooses which built-in type declarations load. Include "DOM" and TypeScript knows the whole browser API — document, window, and every element.',
    code: '"lib": ["ES2022", "DOM", "DOM.Iterable"]',
  },
  {
    icon: '🌐', title: 'DOM Types', titleClass: 'card-title-purple', subtitle: 'document & window',
    description: 'With the DOM lib on, browser globals are fully typed. You get autocomplete for every property and method, and mistakes are caught immediately.',
    code: 'const title = document.title; // string\nwindow.addEventListener("load", () => {});',
  },
  {
    icon: '🎯', title: 'Typed Elements', titleClass: 'card-title-amber', subtitle: 'The Right Element Type',
    description: 'querySelector returns a general Element by default — which has no .value. Pass the specific type so you get the properties that element actually has.',
    code: 'const input = document.querySelector<HTMLInputElement>("#name");\ninput?.value; // string, only exists on inputs',
  },
];

const SAFETY = [
  {
    icon: '🚧', title: 'Possibly null', titleClass: 'card-title-cyan', subtitle: 'Narrow First',
    description: 'querySelector returns T | null because the element might not exist. TypeScript forces you to handle that — optional chaining or a guard.',
    code: 'const el = document.getElementById("app");\nif (el) el.textContent = "Hi";\n// or: el?.textContent',
  },
  {
    icon: '❗', title: 'Non-null Assertion', titleClass: 'card-title-blue', subtitle: 'The ! Operator',
    description: 'When you’re certain an element exists, a trailing ! removes null from its type. Use sparingly — a wrong ! reintroduces the crash TS was preventing.',
    code: 'const root = document.getElementById("app")!;\nroot.innerHTML = "Hi";',
  },
  {
    icon: '🖱️', title: 'Typed Events', titleClass: 'card-title-amber', subtitle: 'Know The Event',
    description: 'Event listeners hand you a typed event object. TypeScript knows a "click" gives a MouseEvent and "keydown" a KeyboardEvent — with all their properties.',
    code: 'btn.addEventListener("click", (e: MouseEvent) => {\n  console.log(e.clientX);\n});',
  },
  {
    icon: '🎪', title: 'currentTarget', titleClass: 'card-title-lime', subtitle: 'Safer Than target',
    description: 'currentTarget is typed to the element the handler is attached to; target is where the event originated and is broader. Prefer currentTarget.',
    code: 'input.addEventListener("input", (e) => {\n  console.log(e.currentTarget.value);\n});',
  },
];

const PRACTICAL = [
  {
    icon: '📝', title: 'Forms & Inputs', titleClass: 'card-title-cyan', subtitle: 'Exactly The Right Props',
    description: 'HTMLFormElement, HTMLInputElement, and HTMLSelectElement each expose their real properties — value, checked, and the form’s elements collection.',
    code: 'const form = document.querySelector<HTMLFormElement>("#f")!;\nform.addEventListener("submit", (e) => e.preventDefault());',
  },
  {
    icon: '🎨', title: 'classList & dataset', titleClass: 'card-title-purple', subtitle: 'Typed Helpers',
    description: 'classList gives typed add/remove/toggle, and dataset exposes data-* attributes as a typed record — no string fiddling required.',
    code: 'el.classList.toggle("dark");\nconst id = el.dataset.userId; // string | undefined',
  },
  {
    icon: '🧾', title: 'Creating Elements', titleClass: 'card-title-amber', subtitle: 'Inferred By Tag',
    description: 'createElement infers the element type from the tag name — createElement("input") gives an HTMLInputElement, with .value available immediately.',
    code: 'const input = document.createElement("input");\ninput.value = "typed!"; // ✅ knows it’s an input',
  },
  {
    icon: '🔜', title: 'Next: Advanced Types', titleClass: 'card-title-lime', subtitle: 'Day 13 Preview',
    description: 'Tomorrow: advanced types — intersections, mapped types, conditional types with infer, and template literal types.',
    link: { href: '/day-013', label: 'Go to Day 13 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'The DOM (MDN)', titleClass: 'card-title-cyan', subtitle: 'The Reference',
    description: 'MDN’s Document Object Model reference — the elements, events, and APIs that TypeScript’s DOM lib types for you.',
    link: { href: MDN_DOM, label: 'Read the DOM docs →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type An Element',
    description: 'Call querySelector with and without a type argument and hover the result — the difference between Element and HTMLInputElement is instantly clear.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'React abstracts the DOM, but its event and element types are these same ones — this knowledge carries straight into typed React.',
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

export default function Day012() {
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
          <Link to="/day-011" className="day001-nav-btn day001-nav-prev">← Day 11</Link>
          <p className="day001-datetime">TypeScript Day 12 · 28 Jul 2026</p>
          <Link to="/day-013" className="day001-nav-btn day001-nav-next">Day 13 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DOM</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 12 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">TYPING THE DOM</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '12%' }} /></div>

        <p className="day001-summary">
          Day 12 wires TypeScript to the browser. With <code>lib: ["DOM"]</code> from my tsconfig (Episode 2),
          <code>document</code> and <code>window</code> are fully typed. I got exact element types from{' '}
          <code>querySelector&lt;HTMLInputElement&gt;</code>, narrowed the possibly-<code>null</code> result, and
          handled <strong>typed events</strong> (<code>MouseEvent</code>, <code>KeyboardEvent</code>) preferring{' '}
          <code>currentTarget</code>. Plus <code>classList</code>, <code>dataset</code>, and the{' '}
          <code>!</code> non-null assertion — used sparingly.
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

        <CardSection icon="🌐" title="DOM TYPES" cards={BASICS} columns={3} />
        <CardSection icon="🛡️" title="NULL SAFETY & EVENTS" cards={SAFETY} columns={4} />
        <CardSection icon="🧰" title="IN PRACTICE" cards={PRACTICAL} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#DOM</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
