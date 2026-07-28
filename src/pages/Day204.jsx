import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HANDBOOK = 'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html';
const BRANDS = 'https://egghead.io/blog/using-branded-types-in-typescript';

const LEARNT_TODAY = [
  { title: 'Template literal types', text: '`hello ${World}` at the type level builds string unions' },
  { title: 'Intrinsic helpers', text: 'Uppercase, Lowercase, Capitalize, Uncapitalize transform string types' },
  { title: 'Event maps', text: 'on${Capitalize<Event>} patterns type DOM-like APIs' },
  { title: 'Parse strings', text: 'combine template patterns with infer to split routes or CSS units' },
  { title: 'Branded types', text: 'intersect with a unique tag so UserId ≠ OrderId at compile time' },
  { title: 'Opaque IDs', text: 'brands stop mixing identifiers that share the same underlying string/number' },
  { title: 'Runtime still JS', text: 'brands erase — validate at boundaries, trust inside' },
  { title: 'What’s next', text: 'milestone day packages the advanced toolkit' },
];

const CORE = [
  {
    icon: '🔤',
    title: 'Template Types',
    titleClass: 'card-title-cyan',
    subtitle: 'Strings',
    description: 'Build precise string unions from parts — routes, CSS, event names.',
    code: 'type Ev = "click" | "scroll";\ntype Handler = `on${Capitalize<Ev>}`;\n// onClick | onScroll',
  },
  {
    icon: '🏷️',
    title: 'Brand Pattern',
    titleClass: 'card-title-purple',
    subtitle: 'Opaque',
    description: 'Add a phantom brand field so identical primitives stay distinct types.',
    code: 'type UserId = string & { __brand: "UserId" };\ntype OrderId = string & { __brand: "OrderId" };',
  },
  {
    icon: '🛡️',
    title: 'Boundary Parse',
    titleClass: 'card-title-amber',
    subtitle: 'Safe',
    description: 'Parse/validate at I/O; return branded values so the core stays honest.',
    code: 'function asUserId(s: string): UserId {\n  /* validate */\n  return s as UserId;\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Route Params',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'From "/users/:id/posts/:postId", extract a param name union with templates + infer.',
    code: 'type ParamNames<S> = ...\n// "id" | "postId"',
  },
  {
    icon: '🔍',
    title: 'Brand IDs',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Create UserId and OrderId brands; prove assigning one to the other errors.',
    code: 'let u: UserId;\nlet o: OrderId;\n// u = o  // error',
  },
  {
    icon: '📝',
    title: 'Event Map',
    titleClass: 'card-title-amber',
    subtitle: 'API',
    description: 'Map event name union to handler prop names with Capitalize.',
    code: 'type Handlers<E extends string> =\n  { [K in E as `on${Capitalize<K>}`]?: () => void };',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-lime',
    subtitle: 'Day 205',
    description: 'Tomorrow — Advanced TypeScript milestone (Days 201–205).',
    link: { href: '/day-205', label: 'Go to Day 205 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Template Literals',
    titleClass: 'card-title-cyan',
    subtitle: 'Handbook',
    description: 'Official template literal types chapter.',
    link: { href: HANDBOOK, label: 'Open handbook →', external: true },
  },
  {
    icon: '🏷️',
    title: 'Branded Types',
    titleClass: 'card-title-purple',
    subtitle: 'Pattern',
    description: 'Why brands beat plain string IDs.',
    link: { href: BRANDS, label: 'Read brands →', external: true },
  },
  {
    icon: '🗺️',
    title: 'Day 203',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Mapped types that pair with templates.',
    link: { href: '/day-203', label: 'Open Day 203 →' },
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

export default function Day204() {
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
          <Link to="/day-203" className="day001-nav-btn day001-nav-prev">← Day 203</Link>
          <p className="day001-datetime">TypeScript Day 204 · 23 Jul 2027</p>
          <Link to="/day-205" className="day001-nav-btn day001-nav-next">Day 205 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced</span><span>Day 204</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 204 <span aria-hidden="true">🔤</span></h1>
              <p className="day001-day-theme">TEMPLATE LITERALS & BRANDS</p>
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
          Day 204 types strings and IDs precisely. Use <strong>template literal types</strong> for APIs and <strong>brands</strong> so UserId never silently becomes OrderId.
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

        <CardSection icon="🔤" title="1 · STRINGS & BRANDS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day204</span><span>#TemplateLiterals</span><span>#Brands</span>
        </footer>
      </div>
    </div>
  );
}
