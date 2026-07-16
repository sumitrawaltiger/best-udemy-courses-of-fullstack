import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_UTILITY = 'https://www.typescriptlang.org/docs/handbook/utility-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Utility types', text: 'built-in generics that transform a type into a new one — no manual retyping' },
  { title: 'Partial<T>', text: 'makes every property optional — perfect for update/patch functions' },
  { title: 'Required<T>', text: 'the opposite — makes every property required, stripping the ?' },
  { title: 'Readonly<T>', text: 'freezes every property so it can’t be reassigned' },
  { title: 'Pick<T, K>', text: 'keep only the listed keys — a smaller type from a bigger one' },
  { title: 'Omit<T, K>', text: 'drop the listed keys — the inverse of Pick' },
  { title: 'Record<K, V>', text: 'build a map type: `Record<string, number>` — keys of K, values of V' },
  { title: 'Return/Parameters', text: 'ReturnType<F> and Parameters<F> read types straight out of a function' },
  { title: 'NonNullable<T>', text: 'removes null and undefined from a type' },
  { title: 'They compose', text: 'combine them: `Readonly<Partial<User>>` — powerful, declarative type maths' },
];

const SHAPE_MODS = [
  {
    icon: '🧩', title: 'Partial<T>', titleClass: 'card-title-cyan', subtitle: 'All Optional',
    description: 'Partial makes every field optional — exactly what an update function needs, so callers can pass only the fields they want to change.',
    code: 'interface User { name: string; age: number }\nfunction update(id: number, patch: Partial<User>) {}\nupdate(1, { age: 27 }); // ✅ name omitted',
  },
  {
    icon: '❗', title: 'Required<T>', titleClass: 'card-title-purple', subtitle: 'All Required',
    description: 'Required strips every ? and demands all properties — useful when you’ve finished building an object and want to guarantee it’s complete.',
    code: 'interface Opts { a?: number; b?: number }\nconst full: Required<Opts> = { a: 1, b: 2 };',
  },
  {
    icon: '🧊', title: 'Readonly<T>', titleClass: 'card-title-amber', subtitle: 'All Frozen',
    description: 'Readonly makes every property immutable at the type level — the same idea as Episode 5’s readonly, applied to a whole type at once.',
    code: 'const cfg: Readonly<{ url: string }> = { url: "/api" };\ncfg.url = "/x"; // ❌ read-only',
  },
];

const SELECT = [
  {
    icon: '🎯', title: 'Pick<T, K>', titleClass: 'card-title-cyan', subtitle: 'Keep Some Keys',
    description: 'Pick builds a new type with only the keys you name — carve a small, focused type (like component props) out of a larger model.',
    code: 'interface User { id: number; name: string; email: string }\ntype Card = Pick<User, "id" | "name">;',
  },
  {
    icon: '✂️', title: 'Omit<T, K>', titleClass: 'card-title-blue', subtitle: 'Drop Some Keys',
    description: 'Omit is Pick’s inverse — remove the keys you don’t want. Ideal for a "create" type that excludes a server-generated id.',
    code: 'type NewUser = Omit<User, "id">;\nfunction create(u: NewUser) {}',
  },
  {
    icon: '🗺️', title: 'Record<K, V>', titleClass: 'card-title-amber', subtitle: 'Typed Maps',
    description: 'Record constructs an object type with keys of K and values of V — the clean way to type dictionaries, lookups, and config maps.',
    code: 'type Roles = Record<"admin" | "user", boolean>;\nconst r: Roles = { admin: true, user: false };',
  },
  {
    icon: '🚫', title: 'NonNullable<T>', titleClass: 'card-title-lime', subtitle: 'Strip null | undefined',
    description: 'NonNullable removes null and undefined from a union — pairs well with narrowing to represent "definitely present" values.',
    code: 'type Maybe = string | null | undefined;\ntype Sure = NonNullable<Maybe>; // string',
  },
];

const FROM_FN = [
  {
    icon: '↩️', title: 'ReturnType<F>', titleClass: 'card-title-cyan', subtitle: 'Read A Return Type',
    description: 'Extract the return type of a function type without running it — keep a derived type in sync with its source automatically.',
    code: 'function makeUser() { return { id: 1, name: "S" }; }\ntype User = ReturnType<typeof makeUser>;',
  },
  {
    icon: '📥', title: 'Parameters<F>', titleClass: 'card-title-purple', subtitle: 'Read Argument Types',
    description: 'Parameters gives a tuple of a function’s argument types — handy for wrappers, decorators, and forwarding calls type-safely.',
    code: 'function log(msg: string, level: number) {}\ntype Args = Parameters<typeof log>; // [string, number]',
  },
  {
    icon: '🔗', title: 'They Compose', titleClass: 'card-title-amber', subtitle: 'Stack Them Up',
    description: 'Utility types are just generics, so they nest. Combine them to express precise intent declaratively instead of hand-writing variants.',
    code: 'type DraftUser = Readonly<Partial<Omit<User, "id">>>;',
  },
  {
    icon: '🔜', title: 'Next: Modules', titleClass: 'card-title-lime', subtitle: 'Day 11 Preview',
    description: 'Tomorrow: ES modules in TypeScript — import/export, default vs named, type-only imports, and declaration files (.d.ts).',
    link: { href: '/day-011', label: 'Go to Day 11 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Utility Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The complete reference of built-in utility types — every one from today plus Exclude, Extract, and Awaited.',
    link: { href: TS_UTILITY, label: 'Read Utility Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Transform Types Live',
    description: 'Apply Partial, Pick, and Omit to a type and hover the result to see the transformed shape. Utility types make sense instantly this way.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Partial for form state, Pick/Omit for props and DTOs, Record for lookups — these appear on nearly every React/Next.js screen.',
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

export default function Day010() {
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
          <Link to="/day-009" className="day001-nav-btn day001-nav-prev">← Day 9</Link>
          <p className="day001-datetime">TypeScript Day 10 · 26 Jul 2026</p>
          <Link to="/day-011" className="day001-nav-btn day001-nav-next">Day 11 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Utility Types</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 10 <span aria-hidden="true">🧰</span></h1>
              <p className="day001-day-theme">UTILITY TYPES — TRANSFORM TYPES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '10%' }} /></div>

        <p className="day001-summary">
          Day 10 is type maths with the built-in <strong>utility types</strong>. I reshaped types with{' '}
          <code>Partial</code>, <code>Required</code>, and <code>Readonly</code>; selected keys with{' '}
          <code>Pick</code> and <code>Omit</code>; built maps with <code>Record</code>; and read types straight
          out of functions with <code>ReturnType</code> and <code>Parameters</code>. Because they’re generics,
          they <strong>compose</strong> — declarative, reusable, and everywhere in real code.
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

        <CardSection icon="🔧" title="RESHAPE PROPERTIES" cards={SHAPE_MODS} columns={3} />
        <CardSection icon="🎯" title="SELECT & MAP KEYS" cards={SELECT} columns={4} />
        <CardSection icon="🧠" title="FROM FUNCTIONS & COMPOSITION" cards={FROM_FN} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#UtilityTypes</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
