import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_TS_CHEAT = 'https://react-typescript-cheatsheet.netlify.app/';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Props interface', text: 'describe every prop a component accepts with an interface or type' },
  { title: 'Optional & default', text: 'a `?` prop plus a default value in destructuring gives an optional prop' },
  { title: 'children', text: 'type children as React.ReactNode to accept any renderable content' },
  { title: 'Function props', text: 'callbacks are typed like any function: `onSelect: (id: number) => void`' },
  { title: 'Event handler props', text: 'reuse React’s handler types for onClick, onChange, etc.' },
  { title: 'Spreading DOM props', text: 'extend ComponentProps to forward native attributes to an element' },
  { title: 'Discriminated props', text: 'a union of prop shapes models mutually-exclusive component modes' },
  { title: 'readonly props', text: 'props are read-only by contract — never mutate them' },
  { title: 'Generic components', text: 'a `<T,>` component works for any item type (typed lists)' },
  { title: 'No React.FC needed', text: 'plain typed functions are the modern, recommended style' },
];

const BASICS = [
  {
    icon: '🧾', title: 'Props Interface', titleClass: 'card-title-cyan', subtitle: 'Describe The API',
    description: 'An interface lists every prop with its type. It’s the component’s public contract — callers get autocomplete and errors for wrong or missing props.',
    code: 'interface ButtonProps {\n  label: string;\n  variant: "primary" | "ghost";\n}\nfunction Button({ label, variant }: ButtonProps) { /* ... */ }',
  },
  {
    icon: '❔', title: 'Optional & Default', titleClass: 'card-title-purple', subtitle: '? + Default Value',
    description: 'Mark a prop optional with ? and supply a default in destructuring. Callers may omit it; inside, it’s always defined.',
    code: 'interface Props { size?: "sm" | "lg" }\nfunction Tag({ size = "sm" }: Props) { /* size is defined */ }',
  },
  {
    icon: '👶', title: 'children', titleClass: 'card-title-amber', subtitle: 'React.ReactNode',
    description: 'To wrap content, accept children typed as React.ReactNode — the catch-all for elements, strings, numbers, arrays, and null.',
    code: 'interface CardProps { children: React.ReactNode }\nfunction Card({ children }: CardProps) {\n  return <div className="card">{children}</div>;\n}',
  },
];

const CALLBACKS = [
  {
    icon: '📞', title: 'Function Props', titleClass: 'card-title-cyan', subtitle: 'Typed Callbacks',
    description: 'A callback prop is just a function type. Declare its parameters and return so parents pass a compatible handler and get help writing it.',
    code: 'interface ListProps {\n  onSelect: (id: number) => void;\n}\n<List onSelect={(id) => open(id)} />',
  },
  {
    icon: '🖱️', title: 'Event Handler Props', titleClass: 'card-title-blue', subtitle: 'Reuse React Types',
    description: 'For native events, reuse React’s handler types so your prop matches exactly what onClick or onChange expect.',
    code: 'interface Props {\n  onClick: React.MouseEventHandler<HTMLButtonElement>;\n}',
  },
  {
    icon: '🔗', title: 'Extend DOM Props', titleClass: 'card-title-amber', subtitle: 'ComponentProps',
    description: 'Forward all native attributes by extending ComponentProps of an element — your Button accepts everything a real <button> does, plus your own props.',
    code: 'type Props = React.ComponentProps<"button"> & {\n  variant: "primary" | "ghost";\n};',
  },
  {
    icon: '🚫', title: 'No React.FC', titleClass: 'card-title-lime', subtitle: 'Modern Style',
    description: 'The React.FC helper is no longer recommended (it complicates children and generics). A plain typed function is cleaner and the current best practice.',
    code: '// prefer: function C(props: Props) {}\n// over:   const C: React.FC<Props> = ...',
  },
];

const ADVANCED = [
  {
    icon: '🎫', title: 'Discriminated Props', titleClass: 'card-title-cyan', subtitle: 'Exclusive Modes',
    description: 'A union of prop shapes models modes that can’t mix — e.g. a link that has href OR an onClick, never both. The compiler enforces it.',
    code: 'type Props =\n  | { as: "link"; href: string }\n  | { as: "button"; onClick: () => void };',
  },
  {
    icon: '🧩', title: 'Generic Components', titleClass: 'card-title-purple', subtitle: 'Typed Lists',
    description: 'A generic component adapts to any item type — a <List<T>> that types its items and its onSelect handler from the data you pass.',
    code: 'function List<T>({ items, render }: {\n  items: T[]; render: (item: T) => React.ReactNode;\n}) { return <>{items.map(render)}</>; }',
  },
  {
    icon: '🔒', title: 'Props Are Read-Only', titleClass: 'card-title-amber', subtitle: 'Never Mutate',
    description: 'Props flow one way and must not be mutated. TypeScript models them as read-only by contract — change state instead, never the incoming props.',
    code: '// ❌ props.label = "x";\n// ✅ derive local state or lift state up',
  },
  {
    icon: '🔜', title: 'Next: useState', titleClass: 'card-title-lime', subtitle: 'Day 23 Preview',
    description: 'Tomorrow: typing component state with useState — inference, explicit generics, union state, and lazy initial values.',
    link: { href: '/day-023', label: 'Go to Day 23 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React TS Cheatsheet', titleClass: 'card-title-cyan', subtitle: 'The Community Bible',
    description: 'The React + TypeScript cheatsheet — the definitive, practical reference for typing props, children, events, and hooks.',
    link: { href: REACT_TS_CHEAT, label: 'Open the cheatsheet →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Component',
    description: 'Build a component with a props interface, then pass wrong props to see the errors. Try a discriminated prop union to feel it enforce modes.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed props are the interface between every component. Get them right and whole features refactor safely.',
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

export default function Day022() {
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
          <Link to="/day-021" className="day001-nav-btn day001-nav-prev">← Day 21</Link>
          <p className="day001-datetime">TypeScript Day 22</p>
          <Link to="/day-023" className="day001-nav-btn day001-nav-next">Day 23 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Props</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 22 <span aria-hidden="true">🧾</span></h1>
              <p className="day001-day-theme">TYPING PROPS & CHILDREN</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '22%' }} /></div>

        <p className="day001-summary">
          Day 22 types the interface between components: <strong>props</strong>. I described props with{' '}
          <strong>interfaces</strong>, made them <strong>optional with defaults</strong>, typed{' '}
          <strong>children</strong> as <code>React.ReactNode</code>, and typed <strong>function</strong> and{' '}
          <strong>event-handler</strong> props. I extended <code>ComponentProps</code> to forward native
          attributes, modelled exclusive modes with <strong>discriminated props</strong>, and wrote a{' '}
          <strong>generic</strong> list component — all without the outdated <code>React.FC</code>.
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

        <CardSection icon="🧾" title="PROPS BASICS" cards={BASICS} columns={3} />
        <CardSection icon="📞" title="CALLBACKS & DOM PROPS" cards={CALLBACKS} columns={4} />
        <CardSection icon="🎫" title="ADVANCED PROPS" cards={ADVANCED} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
