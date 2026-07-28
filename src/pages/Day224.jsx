import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OPENAPI = 'https://swagger.io/specification/';
const OPENAPI_TS = 'https://github.com/openapi-ts/openapi-typescript';

const LEARNT_TODAY = [
  { title: 'Spec first', text: 'OpenAPI describes HTTP contracts — codegen turns them into TS types/clients' },
  { title: 'openapi-typescript', text: 'generates types from a YAML/JSON spec without hand-written DTOs' },
  { title: 'Regenerate', text: 'spec change → CI codegen → type errors show call-site breakage' },
  { title: 'Do not edit output', text: 'treat generated files as build artifacts' },
  { title: 'Validate runtime', text: 'pair codegen types with Zod/runtime checks at the edge when needed' },
  { title: 'Bridge to backend', text: 'Day 225+ Express routes should match the same spec' },
  { title: 'What’s next', text: 'Node & Express with TypeScript — implement the server side' },
];

const CORE = [
  {
    icon: '⚙️',
    title: 'From Spec',
    titleClass: 'card-title-cyan',
    subtitle: 'Generate',
    description: 'Point a generator at openapi.yaml; commit or CI-produce api.d.ts.',
    code: 'npx openapi-typescript openapi.yaml -o src/api/schema.d.ts',
  },
  {
    icon: '🧾',
    title: 'Use Paths',
    titleClass: 'card-title-purple',
    subtitle: 'Types',
    description: 'Import operations and component schemas — no duplicated interfaces.',
    code: 'import type { paths } from \'./schema\';\ntype User = paths[\'/users/{id}\'][\'get\'][\'responses\'][200][\'content\'][\'application/json\'];',
  },
  {
    icon: '🔁',
    title: 'CI Regen',
    titleClass: 'card-title-amber',
    subtitle: 'Gate',
    description: 'Fail the build if generated output is stale vs the spec.',
    code: 'openapi-typescript ...\ngit diff --exit-code src/api/schema.d.ts',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Mini Spec',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write a tiny OpenAPI for GET /health and GET /users/{id}. Generate types.',
    code: 'openapi: 3.0.3\npaths:\n  /health:\n    get: ...',
  },
  {
    icon: '🔍',
    title: 'Break on Purpose',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Rename a response field in the spec, regen, and fix one call site error.',
    code: 'email → emailAddress\n→ tsc errors',
  },
  {
    icon: '📝',
    title: 'Codegen README',
    titleClass: 'card-title-amber',
    subtitle: 'Docs',
    description: 'Document the command and “do not hand-edit generated files”.',
    code: 'npm run codegen\n# never edit schema.d.ts',
  },
  {
    icon: '🔜',
    title: 'Next: Express',
    titleClass: 'card-title-lime',
    subtitle: 'Day 225',
    description: 'Tomorrow — Node & Express with TypeScript (backend arc starts).',
    link: { href: '/day-225', label: 'Go to Day 225 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'OpenAPI Spec',
    titleClass: 'card-title-cyan',
    subtitle: 'Standard',
    description: 'OpenAPI specification overview.',
    link: { href: OPENAPI, label: 'Open Swagger/OpenAPI →', external: true },
  },
  {
    icon: '⚙️',
    title: 'openapi-typescript',
    titleClass: 'card-title-purple',
    subtitle: 'Tool',
    description: 'Generate TypeScript types from OpenAPI.',
    link: { href: OPENAPI_TS, label: 'Open GitHub →', external: true },
  },
  {
    icon: '📤',
    title: 'Day 223',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Publishing packages that may wrap generated clients.',
    link: { href: '/day-223', label: 'Open Day 223 →' },
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

export default function Day224() {
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
          <Link to="/day-223" className="day001-nav-btn day001-nav-prev">← Day 223</Link>
          <p className="day001-datetime">TypeScript Day 224 · 12 Aug 2027</p>
          <Link to="/day-225" className="day001-nav-btn day001-nav-next">Day 225 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Codegen</span><span>Day 224</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 224 <span aria-hidden="true">⚙️</span></h1>
              <p className="day001-day-theme">OPENAPI CODEGEN → TYPESCRIPT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '64%' }} /></div>

        <p className="day001-summary">
          Day 224 generates contracts. Turn <strong>OpenAPI</strong> into TypeScript types, regenerate in CI, and never hand-edit the output.
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

        <CardSection icon="⚙️" title="1 · CODEGEN" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day224</span><span>#OpenAPI</span><span>#Codegen</span>
        </footer>
      </div>
    </div>
  );
}
