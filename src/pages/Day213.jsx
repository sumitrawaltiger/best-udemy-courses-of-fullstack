import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_TS = 'https://react-typescript-cheatsheet.netlify.app/';
const HOOKS = 'https://react.dev/reference/react/hooks';

const LEARNT_TODAY = [
  { title: 'Props type', text: 'type Props = { ... } or interface — prefer type for unions and PropsWithChildren' },
  { title: 'FC optional', text: 'many teams type props on the function arg and skip React.FC' },
  { title: 'Event types', text: 'React.ChangeEvent<HTMLInputElement> and FormEvent beat any' },
  { title: 'useState generic', text: 'useState<User | null>(null) when initial value is not enough to infer' },
  { title: 'useRef', text: 'useRef<HTMLDivElement>(null) for DOM; useRef<number>() for mutable boxes' },
  { title: 'Custom hooks', text: 'return tuples with as const so callers get named narrow types' },
  { title: 'What’s next', text: 'pair React types with Zod at the boundary' },
];

const CORE = [
  {
    icon: '⚛️',
    title: 'Props First',
    titleClass: 'card-title-cyan',
    subtitle: 'Components',
    description: 'Declare Props next to the component. Destructure with defaults for optional fields.',
    code: 'type ButtonProps = {\n  label: string;\n  onClick: () => void;\n  disabled?: boolean;\n};\n\nfunction Button({ label, onClick, disabled = false }: ButtonProps) {\n  return <button disabled={disabled} onClick={onClick}>{label}</button>;\n}',
  },
  {
    icon: '🪝',
    title: 'Hook Generics',
    titleClass: 'card-title-purple',
    subtitle: 'State',
    description: 'Help inference when null or empty initials hide the real type.',
    code: 'const [user, setUser] =\n  useState<User | null>(null);\n\nconst ref =\n  useRef<HTMLInputElement>(null);',
  },
  {
    icon: '📦',
    title: 'Hook Returns',
    titleClass: 'card-title-amber',
    subtitle: 'Tuples',
    description: 'Return [value, api] as const so indexes stay typed and readonly.',
    code: 'function useToggle(init = false) {\n  const [on, setOn] = useState(init);\n  return [on, () => setOn(v => !v)] as const;\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Typed Form',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Build an input + submit with ChangeEvent and FormEvent — no any.',
    code: 'onChange={(e: React.ChangeEvent<HTMLInputElement>) => ...}\nonSubmit={(e: React.FormEvent) => ...}',
  },
  {
    icon: '🔍',
    title: 'useFetch Shape',
    titleClass: 'card-title-purple',
    subtitle: 'Hook',
    description: 'Custom hook returning a Remote discriminated union from Day 212.',
    code: 'return { status: \'success\', data } as const;',
  },
  {
    icon: '📝',
    title: 'Children Props',
    titleClass: 'card-title-amber',
    subtitle: 'API',
    description: 'Type a Card with children: React.ReactNode and an optional title.',
    code: 'type CardProps = {\n  title?: string;\n  children: React.ReactNode;\n};',
  },
  {
    icon: '🔜',
    title: 'Next: Zod',
    titleClass: 'card-title-lime',
    subtitle: 'Day 214',
    description: 'Tomorrow — Zod schemas to TypeScript types.',
    link: { href: '/day-214', label: 'Go to Day 214 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'React TS Cheatsheet',
    titleClass: 'card-title-cyan',
    subtitle: 'Guide',
    description: 'Community cheatsheet for React + TypeScript.',
    link: { href: REACT_TS, label: 'Open cheatsheet →', external: true },
  },
  {
    icon: '⚛️',
    title: 'React Hooks',
    titleClass: 'card-title-purple',
    subtitle: 'Docs',
    description: 'Official hooks reference.',
    link: { href: HOOKS, label: 'Open hooks →', external: true },
  },
  {
    icon: '🧬',
    title: 'Day 212',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Unions that power loading UI state.',
    link: { href: '/day-212', label: 'Open Day 212 →' },
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

export default function Day213() {
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
          <Link to="/day-212" className="day001-nav-btn day001-nav-prev">← Day 212</Link>
          <p className="day001-datetime">TypeScript Day 213 · 1 Aug 2027</p>
          <Link to="/day-214" className="day001-nav-btn day001-nav-next">Day 214 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React</span><span>Day 213</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 213 <span aria-hidden="true">⚛️</span></h1>
              <p className="day001-day-theme">TYPING REACT PROPS & HOOKS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '59%' }} /></div>

        <p className="day001-summary">
          Day 213 brings TypeScript into UI. Type <strong>props</strong>, events, and hooks — and return <strong>as const</strong> tuples from custom hooks.
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

        <CardSection icon="⚛️" title="1 · REACT + TYPESCRIPT" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day213</span><span>#React</span><span>#Hooks</span>
        </footer>
      </div>
    </div>
  );
}
