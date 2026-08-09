import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const USESTATE_TS = 'https://react.dev/learn/typescript#typing-usestate';
const REACT_STATE = 'https://react.dev/learn/state-a-components-memory';

const LEARNT_TODAY = [
  { title: 'useState<T>', text: 'state is typed — const [n, setN] = useState<number>(0), or inferred from the initial value' },
  { title: 'Inference', text: 'useState(0) infers number; pass the generic only when the initial value is null or ambiguous' },
  { title: 'Union state', text: 'useState<User | null>(null) models "loading then loaded" safely' },
  { title: 'Updater functions', text: 'setN(prev => prev + 1) keeps the previous-value type intact' },
  { title: 'Controlled inputs', text: 'value + onChange with a typed ChangeEvent keeps form state and UI in sync' },
  { title: 'Lifting state up', text: 'move shared state to a parent and pass typed props down — one source of truth' },
  { title: 'Object & array state', text: 'type the shape once, then update immutably with spreads' },
  { title: 'setState is stable', text: 'the setter identity never changes, so it’s safe in effect dependency arrays' },
];

const STATE = [
  {
    icon: '🔢', title: 'useState<T>', titleClass: 'card-title-cyan', subtitle: 'Typed State',
    description:
      'useState infers its type from the initial value, so useState(0) is number. Pass the generic explicitly only when the initial value doesn’t reveal the type — like null.',
    code: 'const [count, setCount] = useState(0);        // number\nconst [user, setUser] = useState<User | null>(null);\nsetCount(prev => prev + 1); // typed updater',
  },
  {
    icon: '⌨️', title: 'Controlled Inputs', titleClass: 'card-title-purple', subtitle: 'value + onChange',
    description:
      'A controlled input binds value to state and updates it through a typed onChange. State is the single source of truth, and the ChangeEvent gives you a correctly-typed target.',
    code: 'const [name, setName] = useState("");\n<input value={name}\n  onChange={e => setName(e.target.value)} />',
  },
];

const PATTERNS = [
  {
    icon: '⬆️', title: 'Lifting State Up', titleClass: 'card-title-cyan', subtitle: 'One Source Of Truth',
    description:
      'When two components need the same data, move it to their nearest parent and pass it down as typed props with a typed setter. The types make the data-flow contract explicit.',
    code: 'function Parent() {\n  const [q, setQ] = useState("");\n  return <Child q={q} onChange={setQ} />;\n}\n// Child props: { q: string; onChange: (v: string) => void }',
  },
  {
    icon: '🧩', title: 'Object & Array State', titleClass: 'card-title-purple', subtitle: 'Shape It Once',
    description:
      'Type the state’s shape, then update it immutably with spreads so React detects the change. The type guards against forgetting a field or setting the wrong one.',
    code: 'const [form, setForm] = useState({ name: "", age: 0 });\nsetForm(f => ({ ...f, age: 27 })); // typed, immutable',
  },
  {
    icon: '🔗', title: 'Stable Setters', titleClass: 'card-title-amber', subtitle: 'Safe In Deps',
    description:
      'React guarantees the setter from useState keeps the same identity across renders, so it’s safe to list in an effect’s dependency array without causing loops.',
    code: 'useEffect(() => {\n  setUser(fetchedUser);\n}, [setUser]); // setUser never changes',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Typing useState', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description:
      'The official note on typing state — inference, explicit generics, and union types for loading/loaded states.',
    link: { href: USESTATE_TS, label: 'Open the useState guide →', external: true },
  },
  {
    icon: '🧠', title: 'State: A Memory', titleClass: 'card-title-purple', subtitle: 'react.dev',
    description:
      'React’s mental model for state — why it triggers re-renders, and how to structure it — the concepts behind the types.',
    link: { href: REACT_STATE, label: 'Open the State guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Hooks', titleClass: 'card-title-amber', subtitle: 'Day 14 Preview',
    description:
      'Tomorrow — typing the other hooks: useEffect, useRef<T>, useContext and building your own typed custom hooks.',
    link: { href: '/day-014', label: 'Go to Day 14 →' },
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

export default function Day013() {
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
          <Link to="/day-012" className="day001-nav-btn day001-nav-prev">← Day 12</Link>
          <p className="day001-datetime">TypeScript Day 13 · 19 Jun 2027</p>
          <Link to="/day-014" className="day001-nav-btn day001-nav-next">Day 14 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React State</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 13 <span aria-hidden="true">🔢</span></h1>
              <p className="day001-day-theme">TYPED STATE &amp; CONTROLLED INPUTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '13%' }} /></div>

        <p className="day001-summary">
          State, fully typed. <strong>useState</strong> infers its type from the initial value — <code>useState(0)</code>{' '}
          is <code>number</code> — and you pass a generic (<code>useState&lt;User | null&gt;(null)</code>) only when
          the value is ambiguous, which neatly models <em>loading → loaded</em>. Updater functions{' '}
          (<code>setN(p =&gt; p + 1)</code>) keep the previous-value type. <strong>Controlled inputs</strong> bind{' '}
          <code>value</code> + a typed <code>onChange</code>, and <strong>lifting state up</strong> passes typed props
          to a shared parent. Update objects and arrays <strong>immutably</strong> with spreads — the types stop you
          dropping a field. <em>Next: the rest of the hooks.</em>
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

        <CardSection icon="🔢" title="useState & INPUTS" cards={STATE} columns={2} />
        <CardSection icon="⬆️" title="STATE PATTERNS" cards={PATTERNS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#React</span><span>#useState</span>
        </footer>
      </div>
    </div>
  );
}
