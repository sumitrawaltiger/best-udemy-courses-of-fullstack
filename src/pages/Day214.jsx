import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev/';
const INFER = 'https://zod.dev/?id=type-inference';

const LEARNT_TODAY = [
  { title: 'Single source', text: 'define a Zod schema once; infer the TypeScript type with z.infer' },
  { title: 'Runtime truth', text: 'types erase — Zod still validates API and form payloads at runtime' },
  { title: 'safeParse', text: 'prefer safeParse over parse when you want Result-style handling' },
  { title: 'Transforms', text: 'coerce strings to numbers/dates at the boundary' },
  { title: 'Compose', text: 'object, array, union, and discriminatedUnion mirror TS shapes' },
  { title: 'Keep sync', text: 'change the schema, the type follows — no double maintenance' },
  { title: 'What’s next', text: 'milestone: ship an app patterns checklist' },
];

const CORE = [
  {
    icon: '🛡️',
    title: 'Schema First',
    titleClass: 'card-title-cyan',
    subtitle: 'Define',
    description: 'Write the schema for external data. Export both schema and inferred type.',
    code: 'import { z } from \'zod\';\n\nconst UserSchema = z.object({\n  id: z.string().uuid(),\n  email: z.string().email(),\n});\ntype User = z.infer<typeof UserSchema>;',
  },
  {
    icon: '📥',
    title: 'safeParse',
    titleClass: 'card-title-purple',
    subtitle: 'Boundary',
    description: 'Validate JSON before it enters the app. Branch on success.',
    code: 'const result = UserSchema.safeParse(json);\nif (!result.success) {\n  return { status: "error", error: result.error.message };\n}\nconst user = result.data;',
  },
  {
    icon: '🔗',
    title: 'Match Unions',
    titleClass: 'card-title-amber',
    subtitle: 'Sync',
    description: 'z.discriminatedUnion keeps runtime tags aligned with Day 212 unions.',
    code: 'z.discriminatedUnion(\'status\', [\n  z.object({ status: z.literal(\'ok\'), data: UserSchema }),\n  z.object({ status: z.literal(\'err\'), message: z.string() }),\n]);',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Signup Schema',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'email, password min 8, optional name. Infer Signup type and parse a sample.',
    code: 'const SignupSchema = z.object({ ... });\ntype Signup = z.infer<typeof SignupSchema>;',
  },
  {
    icon: '🔍',
    title: 'API Guard',
    titleClass: 'card-title-purple',
    subtitle: 'Fetch',
    description: 'Wrap fetch JSON in safeParse; return a Remote union for the UI.',
    code: 'const parsed = UserSchema.safeParse(await res.json());',
  },
  {
    icon: '📝',
    title: 'Drop Duplicate Type',
    titleClass: 'card-title-amber',
    subtitle: 'Refactor',
    description: 'Delete a hand-written interface that duplicates a Zod schema; use z.infer only.',
    code: '// type User = { ... }  ← delete\n// type User = z.infer<typeof UserSchema>',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-lime',
    subtitle: 'Day 215',
    description: 'Tomorrow — TypeScript app patterns milestone.',
    link: { href: '/day-215', label: 'Go to Day 215 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Zod Docs',
    titleClass: 'card-title-cyan',
    subtitle: 'Library',
    description: 'Schema declaration and validation.',
    link: { href: ZOD, label: 'Open zod.dev →', external: true },
  },
  {
    icon: '🧲',
    title: 'z.infer',
    titleClass: 'card-title-purple',
    subtitle: 'Inference',
    description: 'Derive TypeScript types from schemas.',
    link: { href: INFER, label: 'Read inference →', external: true },
  },
  {
    icon: '⚛️',
    title: 'Day 213',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'React types that consume parsed data.',
    link: { href: '/day-213', label: 'Open Day 213 →' },
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

export default function Day214() {
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
          <Link to="/day-213" className="day001-nav-btn day001-nav-prev">← Day 213</Link>
          <p className="day001-datetime">TypeScript Day 214 · 2 Aug 2027</p>
          <Link to="/day-215" className="day001-nav-btn day001-nav-next">Day 215 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Validation</span><span>Day 214</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 214 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">ZOD SCHEMAS → TYPES</p>
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
          Day 214 closes the type/runtime gap. Define <strong>Zod schemas</strong>, <strong>z.infer</strong> the types, and <strong>safeParse</strong> at every boundary.
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

        <CardSection icon="🛡️" title="1 · ZOD + TYPESCRIPT" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day214</span><span>#Zod</span><span>#Validation</span>
        </footer>
      </div>
    </div>
  );
}
