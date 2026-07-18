import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RN_DOCS = 'https://reactnative.dev/docs/getting-started';
const REACT_DOCS = 'https://react.dev/learn';
const VITE_DOCS = 'https://vite.dev/guide/';

const LEARNT_TODAY = [
  { title: 'Mobile phase begins', text: 'after 100 days of JavaScript, Year 1 continues with cross-platform mobile — React Native with Expo' },
  { title: 'BAAS', text: 'a Backend-As-A-Service (Firebase, Appwrite, Supabase) hands you auth, database and storage so a front-end dev can ship a full app' },
  { title: 'React vs React DOM vs React Native', text: 'React is the core library; React DOM renders to the browser; React Native renders to real native iOS/Android views' },
  { title: 'SPA', text: 'a Single Page Application swaps content with JavaScript instead of full page reloads' },
  { title: 'Vite', text: 'a fast dev server & bundler — `npm create vite@latest` scaffolds a React app in seconds' },
  { title: 'HMR', text: 'Hot Module Replacement swaps changed modules live, keeping component state instead of a full refresh' },
  { title: 'JSX', text: 'JavaScript XML — HTML-like syntax that compiles to `React.createElement()` calls' },
  { title: 'Components', text: 'reusable functions that return JSX; names must be PascalCase' },
  { title: 'Fragments', text: '`<>...</>` groups siblings without adding an extra DOM/native node' },
  { title: 'Props', text: 'read-only inputs passed parent → child; destructure them for clean code' },
];

const WHY_MOBILE = [
  {
    icon: '📱', title: 'Why Mobile Now', titleClass: 'card-title-cyan', subtitle: 'The Next Phase',
    description: 'The 100 days of JavaScript built the language foundation. Mobile is where that JavaScript reaches phones — one React skill set, two app stores. Today is a React refresher before the native APIs begin.',
    code: '// Year 1 path\n// JS → React & Next.js → React Native\n// same mental model, native output',
  },
  {
    icon: '🧰', title: 'Backend As A Service', titleClass: 'card-title-purple', subtitle: 'BAAS',
    description: 'A BAAS gives you authentication, a database, file storage and serverless functions behind an SDK — so a front-end developer can ship a complete product without running servers.',
    code: '// Firebase · Appwrite · Supabase\n// auth + db + storage + functions\n// you call an SDK, not a server',
  },
  {
    icon: '🌐', title: 'React, DOM & Native', titleClass: 'card-title-amber', subtitle: 'Three Layers',
    description: 'React is the core engine (components, state, reconciliation). React DOM paints to browser HTML. React Native maps the same components to real UIView / android.view — not a webview.',
    code: 'React        // components + state\nReactDOM     // → <div> in a browser\nReactNative  // → native iOS/Android views',
  },
];

const REACT_CORE = [
  {
    icon: '⚡', title: 'Create With Vite', titleClass: 'card-title-cyan', subtitle: 'Modern Toolchain',
    description: 'Vite scaffolds a React SPA with an instant dev server. It compiles JSX, serves modules over native ESM, and gives you HMR out of the box.',
    code: 'npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev',
  },
  {
    icon: '🔥', title: 'Hot Module Replacement', titleClass: 'card-title-purple', subtitle: 'Edit → See Instantly',
    description: 'HMR replaces only the module you changed and keeps the rest of the app — including component state — alive. No full reload, no losing your place.',
    code: '// Save Counter.jsx while count = 5\n// → HMR patches the component\n// → count stays 5, UI updates',
  },
  {
    icon: '📄', title: 'main.jsx Entry', titleClass: 'card-title-amber', subtitle: 'Where React Mounts',
    description: 'The entry file creates a root and renders <App /> into a single div. That div is the whole SPA — everything else is components inside it.',
    code: 'import { createRoot } from "react-dom/client";\nimport App from "./App.jsx";\n\ncreateRoot(document.getElementById("root"))\n  .render(<App />);',
  },
];

const JSX_COMPONENTS = [
  {
    icon: '🏷️', title: 'JSX & createElement', titleClass: 'card-title-cyan', subtitle: 'Syntax Sugar',
    description: 'JSX looks like HTML but is JavaScript. Under the hood each tag becomes a React.createElement call. Note: `className` not `class`, and every expression goes in { }.',
    code: '// JSX\nconst el = <h1 className="title">Hi {name}</h1>;\n\n// compiles to\nReact.createElement("h1", { className: "title" }, "Hi ", name);',
  },
  {
    icon: '🧩', title: 'Components', titleClass: 'card-title-purple', subtitle: 'Reusable UI',
    description: 'A component is a function that returns JSX. Its name must start with a capital letter so React treats it as a component, not an HTML tag. Compose them like Lego.',
    code: 'function Welcome() {\n  return <h2>Welcome to Mobile Dev</h2>;\n}\n// use it: <Welcome />',
  },
  {
    icon: '🔗', title: 'Fragments', titleClass: 'card-title-amber', subtitle: 'No Extra Wrapper',
    description: 'A component must return one root element. Wrap siblings in a Fragment (<>...</>) to return several without adding a pointless wrapper node.',
    code: 'function Row() {\n  return (\n    <>\n      <Label />\n      <Input />\n    </>\n  );\n}',
  },
];

const PROPS = [
  {
    icon: '📨', title: 'Props', titleClass: 'card-title-cyan', subtitle: 'Inputs To A Component',
    description: 'Props pass data from a parent into a child. They are read-only — a child never mutates its props. This one-way flow keeps UI predictable.',
    code: 'function Greeting(props) {\n  return <p>Hello, {props.name}!</p>;\n}\n<Greeting name="Sumit" />',
  },
  {
    icon: '📦', title: 'Destructuring Props', titleClass: 'card-title-purple', subtitle: 'Cleaner Signatures',
    description: 'Destructure props in the parameter list so you use `name` instead of `props.name`. It reads better and documents exactly what a component expects.',
    code: 'function Greeting({ name, role }) {\n  return <p>{name} — {role}</p>;\n}\n<Greeting name="Sumit" role="Engineer" />',
  },
  {
    icon: '⬇️', title: 'Data Flow: Parent → Child', titleClass: 'card-title-amber', subtitle: 'One Direction',
    description: 'Data always flows down. A parent owns the state and passes values (and callbacks) to children as props. Children report up by calling those callbacks.',
    code: 'function Parent() {\n  const user = "Faisal";\n  return <Card name={user} />;   // down\n}',
  },
  {
    icon: '🔜', title: 'Next: Expo', titleClass: 'card-title-lime', subtitle: 'Day 102 Preview',
    description: 'Tomorrow we leave the browser: what React Native really is, Expo vs the bare workflow, environment setup, and building & running your first mobile app.',
    link: { href: '/day-102', label: 'Go to Day 102 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React — Learn', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description: 'The modern React docs cover components, JSX, props and one-way data flow — everything today refreshed, straight from the source.',
    link: { href: REACT_DOCS, label: 'Read React docs →', external: true },
  },
  {
    icon: '⚡', title: 'Vite Guide', titleClass: 'card-title-purple', subtitle: 'Tooling',
    description: 'How Vite serves modules, compiles JSX and powers HMR. Scaffold an app and watch the dev server start in milliseconds.',
    link: { href: VITE_DOCS, label: 'Open the Vite guide →', external: true },
  },
  {
    icon: '📱', title: 'React Native Track', titleClass: 'card-title-amber', subtitle: 'The Full Cohort',
    description: 'These journal days follow the ChaiCode Mobile Development cohort. Explore the full 25-lesson React Native syllabus on the site.',
    link: { href: '/mobile', label: 'Explore the RN track →' },
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

export default function Day101() {
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
          <Link to="/day-100" className="day001-nav-btn day001-nav-prev">← Day 100</Link>
          <p className="day001-datetime">React Native Day 101</p>
          <Link to="/day-102" className="day001-nav-btn day001-nav-next">Day 102 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Mobile</span><span>RN Day 1</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 101 <span aria-hidden="true">📱</span></h1>
              <p className="day001-day-theme">WELCOME TO MOBILE DEVELOPMENT — REACT REFRESHER</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '28%' }} /></div>

        <p className="day001-summary">
          Day 101 opens the <strong>React Native</strong> phase of Year 1. Before touching native APIs I refreshed the
          foundation: what a <strong>BAAS</strong> gives a front-end developer, how <strong>React</strong>,{' '}
          <strong>React DOM</strong> and <strong>React Native</strong> differ, scaffolding a{' '}
          <strong>Vite</strong> app with <strong>HMR</strong>, and the core ideas — <strong>JSX</strong>,{' '}
          <strong>components</strong>, <strong>fragments</strong>, and <strong>props</strong> flowing one way from
          parent to child. Same React mental model; next it renders to real phones.
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

        <CardSection icon="📱" title="1 · WHY MOBILE & BAAS" cards={WHY_MOBILE} columns={3} />
        <CardSection icon="⚛️" title="2 · REACT FUNDAMENTALS" cards={REACT_CORE} columns={3} />
        <CardSection icon="🏷️" title="3 · JSX & COMPONENTS" cards={JSX_COMPONENTS} columns={3} />
        <CardSection icon="📨" title="4 · PROPS & DATA FLOW" cards={PROPS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#MobileDev</span><span>#React</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
