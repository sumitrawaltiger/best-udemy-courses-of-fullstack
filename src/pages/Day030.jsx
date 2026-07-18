import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_TS = 'https://react.dev/learn/typescript';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'A real React app', text: 'built a typed Notes app end to end — the React capstone of the phase' },
  { title: 'Typed components', text: 'NoteList, NoteItem, NoteForm — each with a props interface' },
  { title: 'Reducer + Context', text: 'app state via a typed reducer shared through a guarded context hook' },
  { title: 'Controlled form', text: 'add/edit notes with typed events and Zod validation' },
  { title: 'Custom hook', text: 'useLocalStorage<Note[]> persists the notes, typed generically' },
  { title: 'Data fetching', text: 'seed notes with a typed useQuery from a mock endpoint' },
  { title: 'Discriminated status', text: 'loading/error/ready UI states modelled as a union' },
  { title: 'No any, strict on', text: 'the whole app compiles under strict with zero any' },
  { title: 'It all connects', text: 'props, hooks, forms, context, and fetching working together' },
  { title: '30 days of TypeScript', text: 'core → advanced → applied → React — a complete foundation' },
];

const STRUCTURE = [
  {
    icon: '🧩', title: 'Model The Domain', titleClass: 'card-title-cyan', subtitle: 'Note + Status',
    description: 'Type the data first. A Note interface and a literal status union drive the components, the reducer, and the forms — one source of truth.',
    code: 'interface Note { id: string; title: string; body: string; }\ntype Status = "idle" | "loading" | "ready" | "error";',
  },
  {
    icon: '🧾', title: 'Typed Components', titleClass: 'card-title-purple', subtitle: 'Props Interfaces',
    description: 'Break the UI into components — NoteList, NoteItem, NoteForm — each with a props interface. Callbacks and children are typed, so wiring is checked.',
    code: 'interface NoteItemProps {\n  note: Note;\n  onDelete: (id: string) => void;\n}',
  },
  {
    icon: '⚙️', title: 'Reducer + Context', titleClass: 'card-title-amber', subtitle: 'Typed Global State',
    description: 'A discriminated action union drives a pure reducer; state and dispatch flow through a context read via a guarded custom hook — no library needed.',
    code: 'type Action =\n  | { type: "add"; note: Note }\n  | { type: "delete"; id: string };',
  },
];

const FEATURES = [
  {
    icon: '📝', title: 'Controlled Form', titleClass: 'card-title-cyan', subtitle: 'Add & Edit',
    description: 'A NoteForm with controlled inputs, typed onChange/onSubmit events, and Zod validation on submit — invalid notes never reach the reducer.',
    code: 'const r = NoteSchema.safeParse(form);\nif (r.success) dispatch({ type: "add", note: r.data });',
  },
  {
    icon: '🗃️', title: 'Persist With A Hook', titleClass: 'card-title-blue', subtitle: 'useLocalStorage<Note[]>',
    description: 'The generic useLocalStorage hook from Day 28 keeps notes in the browser, fully typed — refresh the page and the notes are still there.',
    code: 'const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);',
  },
  {
    icon: '🌐', title: 'Seed With useQuery', titleClass: 'card-title-amber', subtitle: 'Typed Data',
    description: 'Fetch starter notes with a typed useQuery, validated by Zod. The status union renders a spinner, an error, or the list — exhaustively.',
    code: 'const { data, isLoading } = useQuery<Note[]>({\n  queryKey: ["notes"], queryFn: getNotes,\n});',
  },
  {
    icon: '🖼️', title: 'Render Every State', titleClass: 'card-title-lime', subtitle: 'Exhaustive UI',
    description: 'Switch over the status union so loading, error, and ready each have a UI. TypeScript guarantees no state is left unhandled.',
    code: 'if (status === "loading") return <Spinner />;\nif (status === "error") return <Err />;\nreturn <NoteList notes={notes} />;',
  },
];

const RECAP = [
  {
    icon: '⚛️', title: 'Days 21–29 Applied', titleClass: 'card-title-cyan', subtitle: 'React In TS',
    description: 'Setup, props, useState, effects & refs, events & forms, useReducer, context, custom hooks, and data fetching — all combined into one working app.',
    code: '// components + hooks + context + query',
  },
  {
    icon: '🧠', title: 'Days 1–20 Underneath', titleClass: 'card-title-purple', subtitle: 'The TS Core',
    description: 'Interfaces, generics, unions, utility types, narrowing, and Zod validation power every piece — React didn’t add a new type system, just used this one.',
    code: '// interfaces + generics + unions + Zod',
  },
  {
    icon: '🏁', title: '30 Days Of TypeScript', titleClass: 'card-title-amber', subtitle: 'Foundation Set',
    description: 'From the first annotation to a typed React app: core, advanced, applied, and React. You can now build real, type-safe front-ends.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
  },
  {
    icon: '🔜', title: 'Next: Day 31+', titleClass: 'card-title-lime', subtitle: 'Keep Building',
    description: 'Year 1 continues toward deeper React & Next.js in TypeScript. Day 31 picks up the next topic in the TypeScript stack.',
    link: { href: '/day-031', label: 'Go to Day 31 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React + TypeScript', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'Return to React’s TypeScript guide to review any pattern used in the capstone — components, hooks, context, and events.',
    link: { href: REACT_TS, label: 'Read the React TS guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Prototype The Types',
    description: 'Model Note, the action union, and the status union in the Playground first, then build the components around those solid types.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'This app is a miniature of every React project ahead — the same spine of typed components, hooks, state, and data carries through the year.',
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

export default function Day030() {
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
          <Link to="/day-029" className="day001-nav-btn day001-nav-prev">← Day 29</Link>
          <p className="day001-datetime">TypeScript Day 30 · 22 Aug 2026</p>
          <Link to="/day-031" className="day001-nav-btn day001-nav-next">Day 31 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Capstone</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 30 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">CAPSTONE — A TYPED REACT NOTES APP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Day 30 ties the React arc together into one fully typed <strong>Notes app</strong>. I built typed{' '}
          <strong>components</strong> with props interfaces, managed state with a <strong>reducer + context</strong>{' '}
          (guarded hook), added a <strong>controlled form</strong> validated by Zod, persisted with a generic{' '}
          <code>useLocalStorage</code> hook, and seeded data with a typed <code>useQuery</code> — rendering every{' '}
          status exhaustively. <code>strict</code> on, no <code>any</code>. Thirty days of TypeScript, applied.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I BUILT TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🧩" title="STRUCTURE" cards={STRUCTURE} columns={3} />
        <CardSection icon="✨" title="FEATURES" cards={FEATURES} columns={4} />
        <CardSection icon="🏁" title="30-DAY RECAP" cards={RECAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Capstone</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
