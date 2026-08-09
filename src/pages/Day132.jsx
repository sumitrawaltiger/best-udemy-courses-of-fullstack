import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD_DOCS = 'https://zod.dev/';
const ZOD_PARSE = 'https://zod.dev/api#parse';
const HTTP_422 = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422';

const LEARNT_TODAY = [
  { title: 'Why validate', text: 'clients lie — never trust req.body or query without a schema' },
  { title: 'Zod schemas', text: 'describe the shape once; parse() returns typed data or throws' },
  { title: 'safeParse', text: 'returns { success, data } / { success: false, error } without throwing' },
  { title: 'Validate middleware', text: 'parse body/query/params before the route handler runs' },
  { title: '400 / 422', text: 'return a clear error payload when validation fails — do not hit the DB' },
  { title: 'Infer types', text: 'z.infer<typeof schema> gives you the TypeScript type for free' },
  { title: 'Coercion', text: 'z.coerce.number() turns query string "42" into a number' },
  { title: 'Reuse schemas', text: 'share CreateTaskSchema between POST body and unit tests' },
  { title: 'Boundary safety', text: 'validation + JWT + DB is the trust boundary of the API' },
];

const CORE = [
  {
    icon: '🧪', title: 'Define A Schema', titleClass: 'card-title-cyan', subtitle: 'z.object',
    description: 'Describe required fields, types, and refinements. Invalid input never reaches your business logic.',
    code: 'import { z } from "zod";\n\nconst CreateTask = z.object({\n  title: z.string().min(1).max(120),\n  done: z.boolean().default(false),\n});',
  },
  {
    icon: '✅', title: 'parse vs safeParse', titleClass: 'card-title-purple', subtitle: 'Fail Or Result',
    description: 'parse throws ZodError. safeParse returns a result object — better inside Express middleware where you map failures to HTTP.',
    code: 'const result = CreateTask.safeParse(req.body);\nif (!result.success) {\n  return res.status(400).json({ error: result.error.flatten() });\n}\nconst data = result.data; // typed',
  },
  {
    icon: '🧬', title: 'z.infer', titleClass: 'card-title-amber', subtitle: 'Types From Schema',
    description: 'One source of truth: the schema defines runtime checks and the TypeScript type.',
    code: 'type CreateTaskInput = z.infer<typeof CreateTask>;\n// { title: string; done: boolean }',
  },
];

const MW = [
  {
    icon: '⛓️', title: 'Validate Middleware', titleClass: 'card-title-cyan', subtitle: 'Before The Handler',
    description: 'A small helper takes a schema and which part of the request to check — body, query, or params.',
    code: 'const validate =\n  (schema, key = "body") => (req, res, next) => {\n    const r = schema.safeParse(req[key]);\n    if (!r.success) return res.status(400).json({ error: r.error.flatten() });\n    req[key] = r.data;\n    next();\n  };',
  },
  {
    icon: '🔢', title: 'Coerce Query', titleClass: 'card-title-purple', subtitle: 'Strings → Numbers',
    description: 'Query params are always strings. Use z.coerce.number() or z.string().transform(Number) for page and limit.',
    code: 'const ListQuery = z.object({\n  page: z.coerce.number().int().min(1).default(1),\n  limit: z.coerce.number().int().max(100).default(20),\n});',
  },
  {
    icon: '📤', title: 'Clear Error Shape', titleClass: 'card-title-amber', subtitle: 'Client-Friendly',
    description: 'Return flatten() or a simple { fieldErrors } object so the frontend can highlight inputs.',
    code: 'res.status(400).json({\n  error: "validation_failed",\n  details: result.error.flatten(),\n});',
  },
  {
    icon: '🔜', title: 'Next: Error Handling', titleClass: 'card-title-lime', subtitle: 'Day 133 Preview',
    description: 'Tomorrow: central error middleware, async wrappers, and consistent 4xx/5xx responses.',
    link: { href: '/day-133', label: 'Go to Day 133 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧪', title: 'Zod Docs', titleClass: 'card-title-cyan', subtitle: 'Schemas',
    description: 'Objects, refinements, transforms, and TypeScript inference.',
    link: { href: ZOD_DOCS, label: 'Read Zod docs →', external: true },
  },
  {
    icon: '✅', title: 'parse API', titleClass: 'card-title-purple', subtitle: 'Runtime',
    description: 'parse, safeParse, and error formatting helpers.',
    link: { href: ZOD_PARSE, label: 'Read parse API →', external: true },
  },
  {
    icon: '🔢', title: 'HTTP 422', titleClass: 'card-title-amber', subtitle: 'Status',
    description: 'Some APIs use 422 for semantic validation failures — know when teams pick it over 400.',
    link: { href: HTTP_422, label: 'Read 422 docs →', external: true },
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

export default function Day132() {
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
          <Link to="/day-131" className="day001-nav-btn day001-nav-prev">← Day 131</Link>
          <p className="day001-datetime">Express Day 132 · 16 Oct 2027</p>
          <Link to="/day-133" className="day001-nav-btn day001-nav-next">Day 133 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Zod</span><span>Validation</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 132 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">ZOD VALIDATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '37%' }} /></div>

        <p className="day001-summary">
          Day 132 guards the door. <strong>Zod</strong> schemas validate <code>req.body</code>, query,
          and params; <strong>safeParse</strong> maps failures to <strong>400</strong>;{' '}
          <strong>z.infer</strong> keeps TypeScript in sync. Bad input never reaches the database.
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

        <CardSection icon="🧪" title="1 · SCHEMAS & TYPES" cards={CORE} columns={3} />
        <CardSection icon="⛓️" title="2 · MIDDLEWARE & ERRORS" cards={MW} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#Zod</span><span>#Validation</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
