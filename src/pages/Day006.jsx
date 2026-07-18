import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_EVERYDAY = 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const EP_IMAGE = '/typescript-notes/ep06-advanced-types.jpeg';

const LEARNT_TODAY = [
  { title: 'Union types', text: 'a variable can hold one value out of many types: `let id: number | string`' },
  { title: 'Why unions', text: 'flexible values, useful in APIs, and handling multiple cases' },
  { title: 'Literal types', text: 'allow a variable to have only specific values: `"left" | "right" | "up" | "down"`' },
  { title: 'Why literals', text: 'they reduce bugs by restricting values to exact choices' },
  { title: 'Type aliases', text: '`type` gives a custom name to any type — `type UserId = number | string`' },
  { title: 'Why aliases', text: 'reusable, improves readability, easy to maintain' },
  { title: 'Aliases go complex', text: 'an alias can name an object type and reuse other aliases inside it' },
  { title: 'Intersection types', text: '`&` combines multiple types into one' },
  { title: 'Intersection rule', text: 'the value MUST satisfy all types combined — not just one of them' },
  { title: 'Union vs intersection', text: '`|` = one of many; `&` = all at once' },
];

const UNIONS = [
  {
    icon: '🔀', title: 'Union Types', titleClass: 'card-title-cyan', subtitle: 'One Of Many Types',
    description: 'A variable can hold one value out of many types. Assigning anything outside the union is an error — you get flexibility without giving up safety.',
    code: 'let id: number | string;\n\nid = 101;        // number ✅\nid = "Faisal";   // string ✅\n// id = true;    // ❌ Error',
  },
  {
    icon: '💡', title: 'Why Union Types?', titleClass: 'card-title-purple', subtitle: 'The Payoff',
    description: 'Three reasons from the episode: flexible values, useful in APIs (where a field may legitimately arrive as more than one type), and handling multiple cases in one place.',
    code: '// Flexible values\n// Useful in APIs\n// Handle multiple cases',
  },
  {
    icon: '🚦', title: 'Union In Action', titleClass: 'card-title-amber', subtitle: 'A Status Type',
    description: 'Combine a union with a type alias and you get a precise contract: showStatus accepts only the three listed statuses, so a typo like "done" is caught at compile time.',
    code: 'type Status = "success" | "error" | "pending";\n\nfunction showStatus(s: Status) {\n  console.log(s);\n}\n\nshowStatus("success"); // ✅\nshowStatus("error");   // ✅\nshowStatus("done");    // ❌ Error',
  },
];

const LITERALS = [
  {
    icon: '🎯', title: 'Literal Types', titleClass: 'card-title-cyan', subtitle: 'Only Specific Values',
    description: 'Literal types allow a variable to have only specific values. Instead of "any string", the type IS the exact set of strings you list.',
    code: 'let direction: "left" | "right" | "up" | "down";\n\ndirection = "left";      // ✅\ndirection = "up";        // ✅\ndirection = "forward";   // ❌ Error',
  },
  {
    icon: '🐞', title: 'Why Literals', titleClass: 'card-title-purple', subtitle: 'Fewer Bugs',
    description: 'The episode’s note says it best: they help reduce bugs by restricting values to exact choices. A whole class of typos stops compiling.',
    code: '// "forward" is not one of\n// "left" | "right" | "up" | "down"',
  },
  {
    icon: '👤', title: 'Roles Example', titleClass: 'card-title-amber', subtitle: 'Literals + Alias',
    description: 'Name the literal union with an alias and reuse it. userRole accepts only admin, editor or viewer — "boss" is rejected before it ever runs.',
    code: 'type Role = "admin" | "editor" | "viewer";\n\nlet userRole: Role = "admin";\nuserRole = "viewer";  // ✅\nuserRole = "boss";    // ❌ Error',
  },
  {
    icon: '🧠', title: 'Literal vs Union', titleClass: 'card-title-lime', subtitle: 'How They Relate',
    description: 'A literal type is a single exact value; a union joins several. Nearly every literal type you write in practice is a union of literals.',
    code: 'type A = "admin";              // one literal\ntype B = "admin" | "viewer";   // union of literals',
  },
];

const ALIASES = [
  {
    icon: '🏷️', title: 'Type Aliases', titleClass: 'card-title-cyan', subtitle: 'A Custom Name',
    description: 'Type aliases give a custom name to any type. Declare the shape once with the `type` keyword, then use that name wherever the type is needed.',
    code: 'type UserId = number | string;\ntype UserName = string;\n\nlet id: UserId = 123;\nid = "U-101";  // ✅',
  },
  {
    icon: '♻️', title: 'Why Type Aliases?', titleClass: 'card-title-purple', subtitle: 'The Payoff',
    description: 'Three reasons from the episode: reusable, improves readability, and easy to maintain — change the alias in one place and every usage follows.',
    code: '// Reusable\n// Improves readability\n// Easy to maintain',
  },
  {
    icon: '🧱', title: 'Aliases Get Complex', titleClass: 'card-title-amber', subtitle: 'Compose Them',
    description: 'Aliases can be used with complex types too. An alias can name an object type and reuse your other aliases inside it — types built from types.',
    code: 'type User = {\n  id: UserId;\n  name: UserName;\n  isActive: boolean;\n};\n\nlet user: User = { id: "U-1", name: "Faisal", isActive: true };',
  },
  {
    icon: '🔜', title: 'Next: Interfaces', titleClass: 'card-title-lime', subtitle: 'Day 7 Preview',
    description: 'Tomorrow: interfaces and classes — naming object shapes, optional and readonly fields, extends, implements, and how interfaces differ from the aliases you met today.',
    link: { href: '/day-007', label: 'Go to Day 7 →' },
  },
];

const INTERSECTIONS = [
  {
    icon: '➕', title: 'Intersection Types', titleClass: 'card-title-cyan', subtitle: 'Combine Into One',
    description: 'Intersection types combine multiple types into one using &. Start with two independent building blocks — a Person and a Developer.',
    code: 'type Person = {\n  name: string;\n  age: number;\n};\n\ntype Developer = {\n  skills: string[];\n  experience: number;\n};',
  },
  {
    icon: '🧬', title: 'Combine Them', titleClass: 'card-title-purple', subtitle: 'Person & Developer',
    description: 'DevPerson is Person & Developer, so a value must supply every field from both. Miss one and it does not compile.',
    code: 'type DevPerson = Person & Developer;\n\nlet dev: DevPerson = {\n  name: "Faisal",\n  age: 21,\n  skills: ["TS", "JS", "Node"],\n  experience: 2\n};  // ✅',
  },
  {
    icon: '⚠️', title: 'The Rule', titleClass: 'card-title-amber', subtitle: 'ALL, Not One Of',
    description: 'The episode is emphatic: intersection means the value MUST satisfy all types combined. This is the exact opposite of a union.',
    code: '// & → must satisfy ALL types\n// | → may be ANY ONE type',
  },
  {
    icon: '📋', title: 'Quick Recap', titleClass: 'card-title-lime', subtitle: 'All Four, One Line Each',
    description: 'Union Types (|) → one of many types. Literal Types → exact set of allowed values. Type Aliases (type) → give a name to any type. Intersection Types (&) → combine multiple types.',
    footer: 'Master these and your TypeScript journey gets even more powerful.',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Everyday Types', titleClass: 'card-title-cyan', subtitle: 'TS Handbook',
    description: 'The handbook chapter covering union types, literal types and type aliases — the official version of everything on today’s episode.',
    link: { href: TS_EVERYDAY, label: 'Read Everyday Types →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Break It On Purpose',
    description: 'Paste today’s Status and Role aliases in, then assign "done" or "boss" and read the error. Seeing the exact message is how the rule sticks.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Literal unions become your React prop variants and API status fields; intersections compose props. Day 9 narrows these unions, Day 13 builds mapped & conditional types on top.',
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
    <>
      <div className="day001-page">
        <div className="day001-scale-wrap" ref={scaleRef}>
          <header className="day001-topbar">
            <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
            <Link to="/day-005" className="day001-nav-btn day001-nav-prev">← Day 5</Link>
            <p className="day001-datetime">TypeScript Day 6</p>
            <Link to="/day-007" className="day001-nav-btn day001-nav-next">Day 7 →</Link>
          </header>

          <div className="day001-hero">
            <div className="day001-hero-left">
              <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Advanced Types</span></div>
              <div className="day001-title-block">
                <h1 className="day001-day-num">DAY 6 <span aria-hidden="true">🔀</span></h1>
                <p className="day001-day-theme">ADVANCED TYPES — UNIONS, LITERALS, ALIASES &amp; INTERSECTIONS</p>
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

          <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '6%' }} /></div>

          <p className="day001-summary">
            Day 6 follows <strong>Episode 6</strong>: advanced types that let me model real-world scenarios more
            precisely. <strong>Union types</strong> (<code>number | string</code>) hold one value out of many.{' '}
            <strong>Literal types</strong> (<code>"left" | "right"</code>) restrict a variable to an exact set of
            allowed values. <strong>Type aliases</strong> give a custom name to any type — reusable, readable and
            easy to maintain, and they compose into complex object types. And <strong>intersection types</strong>{' '}
            (<code>Person &amp; Developer</code>) combine multiple types into one, where the value{' '}
            <strong>must satisfy all</strong> of them.
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

          <CardSection icon="🔀" title="1 · UNION TYPES" cards={UNIONS} columns={3} />
          <CardSection icon="🎯" title="2 · LITERAL TYPES" cards={LITERALS} columns={4} />
          <CardSection icon="🏷️" title="3 · TYPE ALIASES" cards={ALIASES} columns={4} />
          <CardSection icon="➕" title="4 · INTERSECTION TYPES" cards={INTERSECTIONS} columns={4} />
          <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

          <footer className="day001-hashtags">
            <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Episode6</span><span>#AdvancedTypes</span><span>#JSLearnHub</span>
          </footer>
        </div>
      </div>

      <section style={{ background: '#0d1117', padding: '8px 16px 56px', display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: '860px', width: '100%', margin: 0 }}>
          <h2 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px', textAlign: 'center' }}>
            <span aria-hidden="true">📌</span> Episode 6 Notes — Advanced Types: Union, Literal, Aliases &amp; Intersection
          </h2>
          <a href={EP_IMAGE} target="_blank" rel="noopener noreferrer">
            <img
              src={EP_IMAGE}
              alt="TypeScript Series Episode 6 — Advanced Types: union types letting a variable hold one value out of many such as let id: number | string with 101 and Faisal valid but true an error, why union types give flexible values useful in APIs and handle multiple cases, a Status alias of success, error and pending passed to showStatus where done is an error; literal types allowing only specific values such as direction typed left, right, up or down where forward is an error, and a Role alias of admin, editor and viewer where boss is an error, noting literals reduce bugs by restricting values to exact choices; type aliases giving a custom name to any type with UserId as number or string and UserName as string, why aliases are reusable, improve readability and are easy to maintain, and a complex User alias combining UserId, UserName and a boolean; and intersection types combining multiple types into one with Person and Developer merged into DevPerson using the ampersand, where intersection means the value must satisfy all types combined; plus a quick recap of all four"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #2a3441' }}
            />
          </a>
          <figcaption style={{ color: '#8fb6c2', fontSize: '0.82rem', textAlign: 'center', marginTop: '10px' }}>
            My handwritten Episode 6 notes — union types, literal types, type aliases and intersection types.
            Click to open full size.
          </figcaption>
        </figure>
      </section>
    </>
  );
}
