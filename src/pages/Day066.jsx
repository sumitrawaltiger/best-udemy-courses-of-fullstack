import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn/typescript';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Typed props',
    text: 'an interface describes what a component accepts',
  },
  {
    title: 'No FC needed',
    text: 'annotate the props param directly',
  },
  {
    title: 'useState<T>',
    text: 'give state an explicit type when inference is not enough',
  },
  {
    title: 'Event types',
    text: 'React.ChangeEvent<HTMLInputElement> and friends',
  },
  {
    title: 'children',
    text: 'typed as React.ReactNode',
  },
  {
    title: 'useRef<T>',
    text: 'typed DOM and value refs',
  },
  {
    title: 'Typed hooks',
    text: 'custom hooks get inferred or explicit return types',
  },
  {
    title: 'Variant props',
    text: 'discriminated unions model component variants',
  },
  {
    title: 'Generic components',
    text: 'reusable, type-safe components with <T,>',
  },
  {
    title: 'Setup',
    text: '.tsx files + a Vite React-TS template',
  },
];

const TYPING = [
  {
    icon: '📐',
    title: 'Props Interface',
    titleClass: 'card-title-cyan',
    subtitle: 'the contract',
    description: 'Describe accepted props; TS checks every usage.',
    code: 'interface CardProps { title: string; price?: number }\nfunction Card({ title, price }: CardProps) { ... }',
  },
  {
    icon: '🎛️',
    title: 'Typed State',
    titleClass: 'card-title-green',
    subtitle: 'useState<T>',
    description: 'Annotate when the initial value isn’t enough.',
    code: 'const [user, setUser] = useState<User | null>(null);',
  },
  {
    icon: '🖱️',
    title: 'Events',
    titleClass: 'card-title-amber',
    subtitle: 'typed handlers',
    description: 'Event objects have precise React types.',
    code: 'const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>\n  setText(e.target.value);',
  },
  {
    icon: '👶',
    title: 'children',
    titleClass: 'card-title-pink',
    subtitle: 'ReactNode',
    description: 'Anything renderable — elements, strings, arrays.',
    code: 'interface Props { children: React.ReactNode }',
  },
];

const PATTERNS = [
  {
    icon: '📌',
    title: 'Typed Refs & Hooks',
    titleClass: 'card-title-cyan',
    subtitle: 'useRef<T>',
    description: 'Type DOM refs and your own custom hooks.',
    code: 'const inputRef = useRef<HTMLInputElement>(null);\nfunction useToggle(): [boolean, () => void] { ... }',
  },
  {
    icon: '🔀',
    title: 'Variant Props',
    titleClass: 'card-title-green',
    subtitle: 'discriminated unions',
    description: 'Model mutually-exclusive prop shapes safely.',
    code: 'type Btn =\n | { variant: "link"; href: string }\n | { variant: "button"; onClick: () => void };',
  },
  {
    icon: '⚙️',
    title: 'Setup',
    titleClass: 'card-title-amber',
    subtitle: '.tsx + Vite',
    description: 'Use the React-TS template; components live in .tsx.',
    code: 'npm create vite@latest app -- --template react-ts',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React + TypeScript',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official React guide to using TypeScript with components.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Practice typed React components hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'TypeScript in React',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'TypeScript in React — Full Tutorial by freeCodeCamp — for Day 66.',
    link: {
      href: 'https://www.youtube.com/watch?v=aJP1AbZSqz8',
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

export default function Day066() {
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
          <Link to="/day-065" className="day001-nav-btn day001-nav-home">
            ← Day 65
          </Link>
          <p className="day001-datetime">Thunder Day 66 · 11 Aug 2027</p>
          <Link to="/day-067" className="day001-nav-btn day001-nav-next">
            Day 67 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 66 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">TYPESCRIPT WITH REACT</p>
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
              <p className="day001-profile-role">REACT · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '66%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-six — combining yesterday’s TypeScript with React. Components get a{' '}
          <strong>props interface</strong>, state uses <code>useState&lt;T&gt;</code>, and event
          handlers take precise types like{' '}
          <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code>. <code>children</code> is{' '}
          <code>React.ReactNode</code>, refs use <code>useRef&lt;T&gt;</code>, and{' '}
          <strong>discriminated unions</strong> model component variants. Scaffold with the Vite{' '}
          <strong>react-ts</strong> template and write everything in <code>.tsx</code>. Practice at{' '}
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

        <CardSection icon="📐" title="TYPING COMPONENTS" cards={TYPING} columns={4} />
        <CardSection icon="🧩" title="PATTERNS" cards={PATTERNS} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#TypeScript</span>
          <span>#Frontend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
