import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://www.typescriptlang.org/docs/handbook/intro.html';
const PLAY_URL = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  {
    title: 'TypeScript',
    text: 'a typed superset of JavaScript that compiles to JS',
  },
  {
    title: 'Static typing',
    text: 'catch type errors at compile time, not runtime',
  },
  {
    title: 'Basic types',
    text: 'string, number, boolean, array, any, unknown',
  },
  {
    title: 'Inference',
    text: 'TS figures out the type when it can',
  },
  {
    title: 'Interfaces & types',
    text: 'describe the shape of objects',
  },
  {
    title: 'Union & literal',
    text: 'string | number, "on" | "off"',
  },
  {
    title: 'Optional & readonly',
    text: 'name?: string, readonly id',
  },
  {
    title: 'Typed functions',
    text: 'annotate params and the return type',
  },
  {
    title: 'Generics',
    text: 'reusable, type-safe code with <T>',
  },
  {
    title: 'tsc',
    text: 'the compiler that emits plain JavaScript',
  },
];

const BASICS = [
  {
    icon: '🛡️',
    title: 'Why TypeScript',
    titleClass: 'card-title-cyan',
    subtitle: 'safety',
    description: 'Types catch bugs early and power great editor tooling.',
    code: 'let n: number = 5;\nn = "hi"; // ❌ compile error, not a runtime surprise',
  },
  {
    icon: '🔤',
    title: 'Basic Types',
    titleClass: 'card-title-green',
    subtitle: 'the primitives',
    description: 'Annotate values, arrays, and more.',
    code: 'let name: string;\nlet ok: boolean;\nlet nums: number[] = [1, 2, 3];',
  },
  {
    icon: '🔎',
    title: 'Inference',
    titleClass: 'card-title-amber',
    subtitle: 'less typing',
    description: 'TS infers types from values, so you annotate less.',
    code: 'let count = 0;        // inferred: number\nconst tags = ["a"];   // inferred: string[]',
  },
  {
    icon: 'ƒ',
    title: 'Typed Functions',
    titleClass: 'card-title-pink',
    subtitle: 'params + return',
    description: 'Type inputs and outputs; TS checks callers.',
    code: 'function add(a: number, b: number): number {\n  return a + b;\n}',
  },
];

const SHAPES = [
  {
    icon: '📐',
    title: 'Interfaces & Types',
    titleClass: 'card-title-cyan',
    subtitle: 'object shapes',
    description: 'Describe the structure objects must have.',
    code: 'interface User {\n  id: number;\n  name: string;\n  email?: string; // optional\n}',
  },
  {
    icon: '🔀',
    title: 'Union & Literal',
    titleClass: 'card-title-green',
    subtitle: 'either / exact',
    description: 'A value that is one of several types or exact strings.',
    code: 'type Id = string | number;\ntype Status = "idle" | "loading" | "done";',
  },
  {
    icon: '📦',
    title: 'Generics',
    titleClass: 'card-title-amber',
    subtitle: 'reusable types',
    description: 'Write once, keep full type safety for any type.',
    code: 'function first<T>(arr: T[]): T { return arr[0]; }\nfirst([1, 2, 3]); // T = number',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'TypeScript Handbook',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official TypeScript handbook — the complete language reference.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'TypeScript Playground',
    titleClass: 'card-title-purple',
    subtitle: 'Try it live',
    description: 'Write TS and see the compiled JS + type errors instantly.',
    link: { href: PLAY_URL, label: 'Open the playground →', external: true },
  },
  {
    icon: '▶️',
    title: 'TypeScript for Beginners',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'TypeScript Tutorial for Beginners by Programming with Mosh — for Day 65.',
    link: {
      href: 'https://www.youtube.com/watch?v=d56mG7DezGs',
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

export default function Day065() {
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
          <Link to="/day-064" className="day001-nav-btn day001-nav-home">
            ← Day 64
          </Link>
          <p className="day001-datetime">Thunder Day 65 · 7 Sep 2026</p>
          <Link
            to="/learn/typescript-with-react"
            className="day001-nav-btn day001-nav-next"
          >
            Day 66 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>TypeScript</span>
              <span>Frontend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 65 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">TYPESCRIPT ESSENTIALS</p>
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
              <p className="day001-profile-role">TYPESCRIPT · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '65%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-five — <strong>TypeScript</strong>, a typed superset of JavaScript that catches
          errors at <strong>compile time</strong>. I learned the <strong>basic types</strong>,{' '}
          leaned on <strong>inference</strong> to write less, typed <strong>functions</strong>, and
          modeled object shapes with <strong>interfaces / types</strong>.{' '}
          <strong>Union & literal</strong> types express “either/exact,” and <strong>generics</strong>{' '}
          keep reusable code fully type-safe. <code>tsc</code> compiles it all down to plain JS — the
          foundation for typing React tomorrow. Docs:{' '}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            TypeScript Handbook
          </a>
          .
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

        <CardSection icon="🔤" title="THE BASICS" cards={BASICS} columns={4} />
        <CardSection icon="📐" title="SHAPES & MORE" cards={SHAPES} columns={3} />
        <CardSection icon="📚" title="TYPESCRIPT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#TypeScript</span>
          <span>#Types</span>
          <span>#Frontend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
