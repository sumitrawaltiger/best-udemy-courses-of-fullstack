import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'React',
    text: 'a library for building UIs from reusable components',
  },
  {
    title: 'Component',
    text: 'a function that returns UI (JSX)',
  },
  {
    title: 'JSX',
    text: 'HTML-like syntax written inside JavaScript',
  },
  {
    title: '{expressions}',
    text: 'embed any JS value or expression in JSX',
  },
  {
    title: 'One root',
    text: 'return a single parent — or a fragment <>…</>',
  },
  {
    title: 'className',
    text: 'not class — JSX uses camelCase attributes',
  },
  {
    title: 'Lists & keys',
    text: 'map over data and give each item a stable key',
  },
  {
    title: 'Conditional rendering',
    text: 'ternary or && to show UI conditionally',
  },
  {
    title: 'Declarative',
    text: 'describe the UI for a state; React updates the DOM',
  },
  {
    title: 'Virtual DOM',
    text: 'React diffs and patches only what changed',
  },
];

const BASICS = [
  {
    icon: '⚛️',
    title: 'What is React',
    titleClass: 'card-title-cyan',
    subtitle: 'component UIs',
    description: 'Build interfaces by composing small, reusable components.',
    code: '<App>\n  <Header />\n  <Feed />\n  <Footer />\n</App>',
  },
  {
    icon: '🧩',
    title: 'Components',
    titleClass: 'card-title-green',
    subtitle: 'functions → UI',
    description: 'A component is a function that returns JSX.',
    code: 'function Welcome() {\n  return <h1>Hello, Thunder!</h1>;\n}',
  },
  {
    icon: '🪄',
    title: 'Declarative & Virtual DOM',
    titleClass: 'card-title-amber',
    subtitle: 'describe, don’t poke',
    description: 'You describe the UI; React diffs and patches the real DOM.',
    code: '// you: UI = f(state)\n// React: diffs virtual DOM → minimal DOM updates',
  },
];

const JSX = [
  {
    icon: '📝',
    title: 'JSX Syntax',
    titleClass: 'card-title-cyan',
    subtitle: 'HTML in JS',
    description: 'Write markup in JavaScript; it compiles to function calls.',
    code: 'const el = <h1 className="title">Hi</h1>;\n// → React.createElement("h1", ...)',
  },
  {
    icon: '🔡',
    title: '{expressions}',
    titleClass: 'card-title-green',
    subtitle: 'embed JS',
    description: 'Curly braces drop any JavaScript value into the markup.',
    code: 'const name = "Sumit";\nreturn <p>Hello {name.toUpperCase()}</p>;',
  },
  {
    icon: '🏷️',
    title: 'Attributes',
    titleClass: 'card-title-amber',
    subtitle: 'camelCase',
    description: 'className, onClick, htmlFor — attributes are camelCased.',
    code: '<button className="btn" onClick={fn}>Go</button>\n<label htmlFor="email">Email</label>',
  },
  {
    icon: '📋',
    title: 'Lists & Conditionals',
    titleClass: 'card-title-pink',
    subtitle: 'map + keys',
    description: 'Render lists with keys; use ternary / && to branch.',
    code: '{items.map(i => <li key={i.id}>{i.text}</li>)}\n{isOpen ? <Panel /> : null}',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs',
    titleClass: 'card-title-green',
    subtitle: 'react.dev/learn',
    description: 'The official, interactive React documentation — the best starting point.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Practice React hands-on in the ChaiCode React Labs playground.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'React JS Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'React JS Crash Course by Traversy Media — supplement for Day 60.',
    link: {
      href: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
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

export default function Day060() {
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
          <Link to="/day-059" className="day001-nav-btn day001-nav-home">
            ← Day 59
          </Link>
          <p className="day001-datetime">Thunder Day 60 · 21 Sep 2026</p>
          <Link to="/day-061" className="day001-nav-btn day001-nav-next">
            Day 61 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Frontend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 60 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">REACT FUNDAMENTALS & JSX</p>
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
              <p className="day001-profile-role">REACT · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '60%' }} />
        </div>

        <p className="day001-summary">
          Day sixty — a new phase: the <strong>frontend with React</strong>. React builds UIs from
          reusable <strong>components</strong> — functions that return <strong>JSX</strong>, an
          HTML-like syntax inside JavaScript. Curly braces embed{' '}
          <strong>{'{'}expressions{'}'}</strong>, attributes are camelCased (<code>className</code>,{' '}
          <code>onClick</code>), and lists render with <strong>keys</strong>. Best of all it’s{' '}
          <strong>declarative</strong>: you describe the UI for a state and React diffs the{' '}
          <strong>virtual DOM</strong> to update only what changed. Practice at{' '}
          <a href={LABS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            ChaiCode React Labs
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

        <CardSection icon="⚛️" title="REACT BASICS" cards={BASICS} columns={3} />
        <CardSection icon="📝" title="JSX" cards={JSX} columns={4} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#JSX</span>
          <span>#Frontend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
