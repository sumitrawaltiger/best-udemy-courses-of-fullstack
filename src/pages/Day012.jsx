import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_TS = 'https://react.dev/learn/typescript';
const VITE_TS = 'https://vite.dev/guide/';

const LEARNT_TODAY = [
  { title: 'React + TS project', text: 'npm create vite@latest with the react-ts template gives typed React in seconds' },
  { title: '.tsx files', text: 'components live in .tsx — TypeScript files that can contain JSX' },
  { title: 'JSX is typed', text: 'attributes, children and event handlers are all type-checked against the DOM' },
  { title: 'Function components', text: 'a component is just a function returning JSX — annotate its props, that’s it' },
  { title: 'JSX.Element / ReactNode', text: 'return types and children have real types you rarely need to write by hand' },
  { title: 'Typed events', text: 'onClick gets React.MouseEvent, onChange gets React.ChangeEvent — autocompleted' },
  { title: 'No PropTypes needed', text: 'TypeScript replaces runtime PropTypes with compile-time checks' },
  { title: 'Editor superpowers', text: 'autocomplete on props and hooks is where React + TS really pays off' },
];

const SETUP = [
  {
    icon: '⚡', title: 'Vite react-ts', titleClass: 'card-title-cyan', subtitle: 'Zero-Config Start',
    description:
      'Scaffold a typed React app in one command. Vite wires up TypeScript, JSX and fast HMR, so you write .tsx components immediately with full type-checking.',
    code: 'npm create vite@latest my-app -- \\\n  --template react-ts\ncd my-app && npm i && npm run dev',
  },
  {
    icon: '🧱', title: 'A Typed Component', titleClass: 'card-title-purple', subtitle: '.tsx + JSX',
    description:
      'A component is a function returning JSX. In a .tsx file, JSX attributes and children are type-checked — a typo in a prop or a wrong element becomes a compile error.',
    code: 'function Hello() {\n  return <h1>Hello, TypeScript!</h1>;\n}\n// JSX attributes are checked against the DOM',
  },
];

const TYPING = [
  {
    icon: '📨', title: 'Typing Props', titleClass: 'card-title-cyan', subtitle: 'interface Props',
    description:
      'Describe a component’s inputs with an interface (or type) and destructure them in the signature. JSX usage is then checked and autocompleted at every call site.',
    code: 'interface GreetProps { name: string; excited?: boolean }\nfunction Greet({ name, excited }: GreetProps) {\n  return <p>Hi {name}{excited ? "!" : ""}</p>;\n}',
  },
  {
    icon: '🖱️', title: 'Typed Events', titleClass: 'card-title-purple', subtitle: 'React.*Event',
    description:
      'Event handlers receive typed events — React.MouseEvent for clicks, React.ChangeEvent for inputs — so e.target and its value autocomplete correctly.',
    code: 'function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n  console.log(e.target.value);\n}\n<input onChange={onChange} />',
  },
  {
    icon: '👶', title: 'children & ReactNode', titleClass: 'card-title-amber', subtitle: 'Composition',
    description:
      'When a component wraps others, type its children as React.ReactNode — the catch-all for anything renderable, from strings to elements to arrays.',
    code: 'interface CardProps { children: React.ReactNode }\nfunction Card({ children }: CardProps) {\n  return <div className="card">{children}</div>;\n}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React + TypeScript', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description:
      'The official React guide to using TypeScript — typing props, hooks, events and children, straight from the React team.',
    link: { href: REACT_TS, label: 'Open React + TS docs →', external: true },
  },
  {
    icon: '⚡', title: 'Vite Guide', titleClass: 'card-title-purple', subtitle: 'Tooling',
    description:
      'How Vite scaffolds and serves a React + TypeScript app — templates, HMR and the build pipeline for Year-1 projects.',
    link: { href: VITE_TS, label: 'Open the Vite guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Props & State', titleClass: 'card-title-amber', subtitle: 'Day 13 Preview',
    description:
      'Tomorrow — typed state with useState<T>, lifting state up, and controlled inputs with fully-typed change handlers.',
    link: { href: '/day-013', label: 'Go to Day 13 →' },
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
          <p className="day001-datetime">TypeScript Day 12</p>
          <Link to="/day-013" className="day001-nav-btn day001-nav-next">Day 13 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 12 <span aria-hidden="true">⚛️</span></h1>
              <p className="day001-day-theme">REACT WITH TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '12%' }} /></div>

        <p className="day001-summary">
          TypeScript meets React — the heart of Year 1. Scaffold with <strong>Vite’s react-ts</strong> template and
          write components in <strong>.tsx</strong> files, where <strong>JSX is type-checked</strong>: attributes,
          children and handlers all validated against the DOM. A component is just a function returning JSX; you{' '}
          <strong>type its props</strong> with an <code>interface</code> and destructure them. Events come typed
          (<code>React.ChangeEvent</code>, <code>React.MouseEvent</code>), and <code>children</code> use{' '}
          <strong>React.ReactNode</strong>. No more runtime PropTypes — the compiler and editor autocomplete every prop
          and hook. <em>Next: typed state.</em>
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

        <CardSection icon="⚡" title="PROJECT & COMPONENTS" cards={SETUP} columns={2} />
        <CardSection icon="📨" title="TYPING PROPS & EVENTS" cards={TYPING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#React</span><span>#Vite</span>
        </footer>
      </div>
    </div>
  );
}
