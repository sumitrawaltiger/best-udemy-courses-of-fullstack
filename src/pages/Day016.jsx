import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Types are compile-time', text: 'annotations vanish at runtime — they cannot check real data by themselves' },
  { title: 'Runtime validation', text: 'a schema library checks actual values and throws or returns errors on bad data' },
  { title: 'Zod schemas', text: '`z.object({...})` describes a shape you can both validate and infer a type from' },
  { title: 'z.infer', text: 'derive the static TypeScript type straight from a schema — one source of truth' },
  { title: 'parse vs safeParse', text: 'parse throws on failure; safeParse returns a typed success/error result' },
  { title: 'Validate at the boundary', text: 'run schemas on API responses, form input, and env vars — the app’s edges' },
  { title: 'Rich rules', text: 'min, max, email, url, regex, refine — validation and typing together' },
  { title: 'Transforms', text: 'schemas can coerce and reshape data (string → Date) as they validate' },
  { title: 'Composability', text: 'build big schemas from small ones, just like types' },
  { title: 'Types + reality agree', text: 'validation guarantees the data actually matches the inferred type' },
];

const WHY = [
  {
    icon: '⚠️', title: 'The Trust Gap', titleClass: 'card-title-cyan', subtitle: 'Types Don’t Run',
    description: 'getJSON<User> tells the compiler what to expect, but the server could send anything. Since types are erased, bad data slips through until it crashes.',
    code: 'const user = await getJSON<User>("/api/user");\n// if the server lies, user.name may be undefined',
  },
  {
    icon: '🛡️', title: 'Runtime Validation', titleClass: 'card-title-purple', subtitle: 'Check Real Values',
    description: 'A schema validates actual data at runtime and reports exactly what’s wrong. Pair it with types and your app never processes malformed input.',
    code: 'const result = UserSchema.safeParse(raw);\nif (!result.success) handle(result.error);',
  },
  {
    icon: '🔗', title: 'One Source Of Truth', titleClass: 'card-title-amber', subtitle: 'z.infer',
    description: 'Define the schema once; derive the TypeScript type from it with z.infer. The static type and the runtime check can never drift apart.',
    code: 'const UserSchema = z.object({ id: z.number(), name: z.string() });\ntype User = z.infer<typeof UserSchema>;',
  },
];

const ZOD_CARDS = [
  {
    icon: '🧱', title: 'Define A Schema', titleClass: 'card-title-cyan', subtitle: 'z.object',
    description: 'Describe a shape with z.object and field schemas. It reads like an interface but is a real value you can run against data.',
    code: 'import { z } from "zod";\nconst Post = z.object({\n  id: z.number(),\n  title: z.string().min(1),\n});',
  },
  {
    icon: '🎯', title: 'parse vs safeParse', titleClass: 'card-title-blue', subtitle: 'Throw or Return',
    description: 'parse throws a detailed error on invalid data; safeParse returns { success, data | error }. Use safeParse to handle failures without try/catch.',
    code: 'const ok = Post.parse(raw);          // throws if invalid\nconst r = Post.safeParse(raw);       // { success, data? }',
  },
  {
    icon: '✨', title: 'Rich Rules', titleClass: 'card-title-amber', subtitle: 'email · min · regex',
    description: 'Schemas carry validation rules — email, url, min/max, regex, refine — so a valid parse means the data is genuinely correct, not just the right type.',
    code: 'const Signup = z.object({\n  email: z.string().email(),\n  age: z.number().min(18),\n});',
  },
  {
    icon: '🔄', title: 'Transforms', titleClass: 'card-title-lime', subtitle: 'Validate + Reshape',
    description: 'A schema can coerce and transform as it validates — turn an ISO string into a Date, trim whitespace, or map a DTO into your model in one step.',
    code: 'const WithDate = z.object({\n  createdAt: z.string().transform((s) => new Date(s)),\n});',
  },
];

const APPLY = [
  {
    icon: '🌐', title: 'Validate API Data', titleClass: 'card-title-cyan', subtitle: 'The Real Win',
    description: 'Wrap getJSON to parse the response with a schema. Now the type isn’t a hopeful annotation — it’s guaranteed by a runtime check.',
    code: 'async function get<T>(url: string, schema: z.ZodType<T>) {\n  const raw = await (await fetch(url)).json();\n  return schema.parse(raw);\n}',
  },
  {
    icon: '📝', title: 'Validate Forms', titleClass: 'card-title-purple', subtitle: 'Input You Don’t Control',
    description: 'Form input is untrusted too. The same schema validates it and gives field-level error messages — reused across client and server.',
    code: 'const r = Signup.safeParse(formData);',
  },
  {
    icon: '🧬', title: 'Compose Schemas', titleClass: 'card-title-amber', subtitle: 'Small → Big',
    description: 'Extend and merge schemas just like types — .extend, .merge, .partial, .pick. Your validation stays as modular as your type definitions.',
    code: 'const Admin = User.extend({ role: z.literal("admin") });',
  },
  {
    icon: '🔜', title: 'Next: Error Handling', titleClass: 'card-title-lime', subtitle: 'Day 17 Preview',
    description: 'Tomorrow: robust error handling in TypeScript — custom error classes, the unknown catch, and a typed Result pattern.',
    link: { href: '/day-017', label: 'Go to Day 17 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Zod Docs', titleClass: 'card-title-cyan', subtitle: 'Schema Validation',
    description: 'The official Zod documentation — schemas, refinements, transforms, and the z.infer type helper. The de-facto standard for TS validation.',
    link: { href: ZOD, label: 'Open zod.dev →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type ↔ Schema',
    description: 'Model the same shape as an interface and a schema, then use z.infer to prove they match. Feel how a schema is both a type and a check.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Validation guards the edges of every app — API, forms, env. You’ll pair Zod with typed fetch and React forms throughout the year.',
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

export default function Day016() {
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
          <Link to="/day-015" className="day001-nav-btn day001-nav-prev">← Day 15</Link>
          <p className="day001-datetime">TypeScript Day 16 · 8 Aug 2026</p>
          <Link to="/day-017" className="day001-nav-btn day001-nav-next">Day 17 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Validation</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 16 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">RUNTIME VALIDATION WITH ZOD</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '16%' }} /></div>

        <p className="day001-summary">
          Day 16 closes the trust gap. Because types are erased at runtime, I learned to <strong>validate</strong>{' '}
          real data with <strong>Zod</strong> schemas — <code>z.object</code> to describe a shape,{' '}
          <code>z.infer</code> to derive the type from it (one source of truth), and <code>parse</code>/
          <code>safeParse</code> to check values. Validating at the app’s <strong>boundaries</strong> — APIs,
          forms, env — means the inferred type and reality finally always agree.
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

        <CardSection icon="⚠️" title="WHY VALIDATE" cards={WHY} columns={3} />
        <CardSection icon="🧱" title="ZOD SCHEMAS" cards={ZOD_CARDS} columns={4} />
        <CardSection icon="🛠️" title="APPLYING IT" cards={APPLY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Zod</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
