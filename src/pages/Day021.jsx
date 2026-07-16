import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_TS = 'https://react.dev/learn/typescript';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'React + TS project', text: 'scaffold with Vite: `npm create vite@latest -- --template react-ts`' },
  { title: '.tsx files', text: 'components live in .tsx — TypeScript plus JSX in one file' },
  { title: 'JSX is typed', text: 'React.JSX.Element / ReactNode describe what a component returns' },
  { title: 'Function components', text: 'a component is just a function returning JSX — type its props, infer the rest' },
  { title: '@types/react', text: 'the type definitions that make hooks, events, and JSX fully typed' },
  { title: 'tsconfig for React', text: '"jsx": "react-jsx" and DOM lib — Vite sets this up for you' },
  { title: 'Return types', text: 'usually inferred; annotate as React.ReactNode when helpful' },
  { title: 'Strict mode on', text: 'strict TypeScript + React StrictMode catch bugs early' },
  { title: 'No PropTypes', text: 'TypeScript replaces runtime PropTypes with compile-time checks' },
  { title: 'Type-check script', text: 'tsc --noEmit gates the build; Vite handles the actual bundling' },
];

const SETUP = [
  {
    icon: '⚡', title: 'Scaffold The App', titleClass: 'card-title-cyan', subtitle: 'Vite react-ts',
    description: 'The fastest way to a typed React app. Vite’s react-ts template wires up TypeScript, JSX, and a working tsconfig out of the box.',
    code: 'npm create vite@latest my-app -- --template react-ts\ncd my-app && npm i && npm run dev',
  },
  {
    icon: '📄', title: '.tsx Files', titleClass: 'card-title-purple', subtitle: 'TypeScript + JSX',
    description: 'Components go in .tsx files, which allow both TypeScript syntax and JSX. Plain logic can stay in .ts; anything with JSX must be .tsx.',
    code: '// App.tsx\nexport default function App() {\n  return <h1>Hello, TypeScript React</h1>;\n}',
  },
  {
    icon: '🧩', title: '@types/react', titleClass: 'card-title-amber', subtitle: 'The Type Defs',
    description: 'The @types/react and @types/react-dom packages type every hook, event, and JSX element. The template installs them for you.',
    code: 'npm i -D @types/react @types/react-dom',
  },
];

const COMPONENTS = [
  {
    icon: '🔤', title: 'Typed Component', titleClass: 'card-title-cyan', subtitle: 'A Function + Props Type',
    description: 'A component is a function that returns JSX. Describe its props with an interface or type — that’s the one place you usually annotate.',
    code: 'interface GreetingProps { name: string }\nfunction Greeting({ name }: GreetingProps) {\n  return <p>Hi, {name}</p>;\n}',
  },
  {
    icon: '↩️', title: 'Return Types', titleClass: 'card-title-blue', subtitle: 'ReactNode',
    description: 'TypeScript infers the return type, but React.ReactNode is useful when a component may return strings, elements, null, or arrays.',
    code: 'function Maybe(): React.ReactNode {\n  return Math.random() > 0.5 ? <p>Yes</p> : null;\n}',
  },
  {
    icon: '🚫', title: 'Bye PropTypes', titleClass: 'card-title-amber', subtitle: 'Compile-Time Checks',
    description: 'TypeScript replaces the old PropTypes runtime checks with static ones. Pass a wrong prop and it’s an error in your editor, not a console warning.',
    code: '<Greeting name={42} /> // ❌ number not assignable to string',
  },
  {
    icon: '⚙️', title: 'tsconfig & jsx', titleClass: 'card-title-lime', subtitle: 'react-jsx',
    description: 'The jsx: "react-jsx" transform means you don’t import React just to use JSX. Vite’s tsconfig already sets this and the DOM lib.',
    code: '"jsx": "react-jsx",\n"lib": ["ES2022", "DOM", "DOM.Iterable"]',
  },
];

const WORKFLOW = [
  {
    icon: '🔍', title: 'Type-Check Separately', titleClass: 'card-title-cyan', subtitle: 'tsc --noEmit',
    description: 'Vite transpiles fast but doesn’t type-check. Run tsc --noEmit (or in CI) to catch type errors the dev server won’t stop for.',
    code: '"scripts": { "typecheck": "tsc --noEmit" }',
  },
  {
    icon: '🛡️', title: 'Strict Everything', titleClass: 'card-title-purple', subtitle: 'TS + StrictMode',
    description: 'Keep strict on in tsconfig and wrap the app in React.StrictMode. Together they surface null bugs and effect mistakes during development.',
    code: '<React.StrictMode><App /></React.StrictMode>',
  },
  {
    icon: '🧠', title: 'Everything You Learned Applies', titleClass: 'card-title-amber', subtitle: 'Days 1–20',
    description: 'Interfaces, generics, unions, and utility types all show up in React — props are interfaces, state is typed, events are unions. No new type system.',
    code: 'type Props = Pick<User, "id" | "name">;',
  },
  {
    icon: '🔜', title: 'Next: Props & Children', titleClass: 'card-title-lime', subtitle: 'Day 22 Preview',
    description: 'Tomorrow: typing props in depth — children, optional/default props, function props, and discriminated prop unions.',
    link: { href: '/day-022', label: 'Go to Day 22 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React + TypeScript', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'React’s official TypeScript guide — setup, typing components and hooks, and the common patterns you’ll use every day this year.',
    link: { href: REACT_TS, label: 'Read the React TS guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'JSX Mode',
    description: 'The Playground supports .tsx — write a small typed component and pass a wrong prop to watch the compiler catch it instantly.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'This begins the React-in-TypeScript arc inside the TypeScript phase — the exact stack you carry into the React & Next.js phase.',
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-prev">← Day 20</Link>
          <p className="day001-datetime">TypeScript Day 21 · 6 Aug 2026</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">Day 22 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 21 <span aria-hidden="true">⚛️</span></h1>
              <p className="day001-day-theme">REACT + TYPESCRIPT SETUP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · REACT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '21%' }} /></div>

        <p className="day001-summary">
          Day 21 starts React <em>in</em> TypeScript. I scaffolded a typed app with the Vite{' '}
          <strong>react-ts</strong> template, learned that components live in <strong>.tsx</strong> files, and that{' '}
          <code>@types/react</code> makes JSX, hooks, and events fully typed. I wrote my first typed function
          component with an <strong>interface</strong> for its props, saw TypeScript replace <strong>PropTypes</strong>{' '}
          with compile-time checks, and set up <code>tsc --noEmit</code> as the type gate.
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

        <CardSection icon="⚡" title="PROJECT SETUP" cards={SETUP} columns={3} />
        <CardSection icon="🔤" title="TYPED COMPONENTS" cards={COMPONENTS} columns={4} />
        <CardSection icon="🧭" title="WORKFLOW" cards={WORKFLOW} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
