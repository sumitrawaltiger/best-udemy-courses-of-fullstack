import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_INTERFACES = 'https://www.typescriptlang.org/docs/handbook/2/objects.html';
const TS_ALIASES = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces';

const LEARNT_TODAY = [
  { title: 'interface', text: 'a named contract for an object’s shape: interface User { name: string }' },
  { title: 'extends', text: 'one interface can build on another — Admin extends User adds fields on top' },
  { title: 'Declaration merging', text: 'two interfaces with the same name merge into one — unique to interfaces' },
  { title: 'interface vs type', text: 'both describe shapes; interfaces excel at objects/classes, type aliases at unions & primitives' },
  { title: 'implements', text: 'a class can promise to satisfy an interface, and TS checks it does' },
  { title: 'Optional & readonly', text: 'the same ? and readonly modifiers work inside interfaces' },
  { title: 'Method signatures', text: 'interfaces can describe methods and call signatures, not just data fields' },
  { title: 'React props', text: 'component props are almost always typed with an interface or a type alias' },
];

const INTERFACE = [
  {
    icon: '📄', title: 'interface', titleClass: 'card-title-cyan', subtitle: 'A Named Contract',
    description:
      'An interface names the shape an object must have. Anything assigned to it is checked field-by-field — the go-to way to describe records, props and API responses.',
    code: 'interface User {\n  readonly id: number;\n  name: string;\n  email?: string;\n}\nconst u: User = { id: 1, name: "Sumit" };',
  },
  {
    icon: '🧬', title: 'extends & implements', titleClass: 'card-title-purple', subtitle: 'Compose Shapes',
    description:
      'Interfaces compose: extend one to add fields, and have a class implement one to guarantee it matches. This is how larger type hierarchies stay DRY.',
    code: 'interface Admin extends User {\n  role: "admin";\n}\nclass Account implements User {\n  id = 1; name = "Sumit";\n}',
  },
];

const VERSUS = [
  {
    icon: '⚖️', title: 'interface vs type', titleClass: 'card-title-cyan', subtitle: 'Which To Reach For',
    description:
      'Both describe shapes. Interfaces shine for objects and classes and can be reopened; type aliases can also express unions, intersections, tuples and primitives. Pick per job.',
    code: '// object shape → interface\ninterface Point { x: number; y: number }\n// union / primitive → type\ntype Id = string | number;',
  },
  {
    icon: '➕', title: 'Declaration Merging', titleClass: 'card-title-purple', subtitle: 'Interfaces Only',
    description:
      'Declare an interface twice and TypeScript merges the members — handy for augmenting library types. Type aliases can’t do this; a duplicate name is an error.',
    code: 'interface Win { title: string }\ninterface Win { width: number }\n// merged → { title; width }',
  },
  {
    icon: '⚛️', title: 'Typing Props', titleClass: 'card-title-amber', subtitle: 'The React Payoff',
    description:
      'Interfaces (or type aliases) describe a component’s props, so JSX usage is checked and autocompleted. This is where Year-1 TypeScript starts paying off in React.',
    code: 'interface ButtonProps {\n  label: string;\n  onClick: () => void;\n}\nfunction Button({ label, onClick }: ButtonProps) {}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Interfaces', titleClass: 'card-title-cyan', subtitle: 'Handbook',
    description:
      'Object types & interfaces — extending, optional and readonly members, method signatures and index signatures, with runnable examples.',
    link: { href: TS_INTERFACES, label: 'Open the Interfaces docs →', external: true },
  },
  {
    icon: '🔬', title: 'interface vs type', titleClass: 'card-title-purple', subtitle: 'The Difference',
    description:
      'The handbook’s side-by-side on when to use an interface and when a type alias — the exact trade-offs, so you can choose with confidence.',
    link: { href: TS_ALIASES, label: 'Open the comparison →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Advanced Types', titleClass: 'card-title-amber', subtitle: 'Day 7 Preview',
    description:
      'Tomorrow — unions & intersections, literal narrowing, type guards, and the utility types (Partial, Pick, Record) that reshape existing types.',
    link: { href: '/day-007', label: 'Go to Day 7 →' },
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

export default function Day006() {
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
          <Link to="/day-005" className="day001-nav-btn day001-nav-prev">← Day 5</Link>
          <p className="day001-datetime">TypeScript Day 6 · 12 Jun 2027</p>
          <Link to="/day-007" className="day001-nav-btn day001-nav-next">Day 7 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Interfaces</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 6 <span aria-hidden="true">📄</span></h1>
              <p className="day001-day-theme">INTERFACES &amp; TYPE ALIASES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '6%' }} /></div>

        <p className="day001-summary">
          An <strong>interface</strong> is a named contract for an object’s shape — the go-to for records, API
          responses and, above all, <strong>React props</strong>. Interfaces <strong>compose</strong>:{' '}
          <code>extends</code> builds one on another, a class can <code>implements</code> one, and two interfaces of
          the same name <strong>merge</strong> (something type aliases can’t do). So when do you use{' '}
          <strong>interface vs type</strong>? Reach for an <em>interface</em> for object and class shapes; reach for a{' '}
          <em>type alias</em> when you also need unions, intersections, tuples or primitives. Both check field-by-field
          — pick the one that fits the shape. <em>Next: advanced types.</em>
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

        <CardSection icon="📄" title="INTERFACES" cards={INTERFACE} columns={2} />
        <CardSection icon="⚖️" title="INTERFACE vs TYPE" cards={VERSUS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Interfaces</span><span>#React</span>
        </footer>
      </div>
    </div>
  );
}
