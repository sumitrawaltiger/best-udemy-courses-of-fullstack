import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OPENAPI = 'https://swagger.io/specification/';
const SWAGGER_UI = 'https://github.com/scottie1984/swagger-ui-express#readme';
const OAS_GUIDE = 'https://learn.openapis.org/';

const LEARNT_TODAY = [
  { title: 'OpenAPI', text: 'a machine-readable contract for your HTTP API — paths, schemas, auth' },
  { title: 'Why document', text: 'frontends, mobile, and teammates stop guessing request shapes' },
  { title: 'swagger-ui-express', text: 'serve interactive docs at /docs from an OpenAPI JSON/YAML file' },
  { title: 'Paths & methods', text: 'describe each route: GET /tasks, POST /tasks, parameters, responses' },
  { title: 'Components/schemas', text: 'reuse Task, Error, Pagination meta across endpoints' },
  { title: 'Security schemes', text: 'declare bearerAuth so “Authorize” works in Swagger UI' },
  { title: 'Keep in sync', text: 'update the spec when routes change — or generate from Zod/TS later' },
  { title: 'Try it out', text: 'Swagger UI lets you call the live API from the browser' },
  { title: 'Contract first optional', text: 'you can write the spec after code; the value is a shared source of truth' },
];

const CORE = [
  {
    icon: '📘', title: 'OpenAPI Spec', titleClass: 'card-title-cyan', subtitle: 'The Contract',
    description: 'A JSON or YAML file lists servers, paths, request bodies, and response codes. Tools and humans both read it.',
    code: 'openapi: 3.0.3\ninfo:\n  title: Tasks API\n  version: 1.0.0\npaths:\n  /tasks:\n    get:\n      summary: List tasks\n      responses:\n        "200":\n          description: OK',
  },
  {
    icon: '🖥️', title: 'Swagger UI', titleClass: 'card-title-purple', subtitle: '/docs',
    description: 'Mount swagger-ui-express so anyone with the URL can explore and try endpoints.',
    code: 'import swaggerUi from "swagger-ui-express";\nimport spec from "./openapi.json" assert { type: "json" };\napp.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));',
  },
  {
    icon: '🔐', title: 'Bearer In Spec', titleClass: 'card-title-amber', subtitle: 'Authorize',
    description: 'Declare http bearer security so protected routes show a lock and accept a JWT in the UI.',
    code: 'components:\n  securitySchemes:\n    bearerAuth:\n      type: http\n      scheme: bearer\n      bearerFormat: JWT\nsecurity:\n  - bearerAuth: []',
  },
];

const PRACTICE = [
  {
    icon: '🧩', title: 'Reuse Schemas', titleClass: 'card-title-cyan', subtitle: 'components',
    description: 'Define Task once under components.schemas and $ref it from requestBody and responses.',
    code: 'components:\n  schemas:\n    Task:\n      type: object\n      properties:\n        id: { type: integer }\n        title: { type: string }',
  },
  {
    icon: '🔄', title: 'Stay In Sync', titleClass: 'card-title-purple', subtitle: 'Docs = Code',
    description: 'When you add a route, update the spec in the same PR. Drift kills trust in /docs.',
    code: '// PR checklist\n// [ ] route + Zod\n// [ ] OpenAPI path\n// [ ] smoke in /docs',
  },
  {
    icon: '🧪', title: 'Generate Later', titleClass: 'card-title-amber', subtitle: 'Optional',
    description: 'Libraries can generate OpenAPI from Zod or TypeScript. Start hand-written; automate when the API stabilizes.',
    code: '// zod-to-openapi / tsoa / etc.',
  },
  {
    icon: '🔜', title: 'Next: Wire Clients', titleClass: 'card-title-lime', subtitle: 'Day 140 Preview',
    description: 'Tomorrow: point web and React Native apps at your deployed API — env URLs, auth headers, and error handling.',
    link: { href: '/day-140', label: 'Go to Day 140 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'OpenAPI Spec', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'The official OpenAPI specification reference.',
    link: { href: OPENAPI, label: 'Read OpenAPI spec →', external: true },
  },
  {
    icon: '🖥️', title: 'swagger-ui-express', titleClass: 'card-title-purple', subtitle: 'Package',
    description: 'Serve Swagger UI from an Express app.',
    link: { href: SWAGGER_UI, label: 'Read swagger-ui-express →', external: true },
  },
  {
    icon: '🎓', title: 'Learn OpenAPI', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Friendly walkthrough of OpenAPI concepts.',
    link: { href: OAS_GUIDE, label: 'Learn OpenAPI →', external: true },
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

export default function Day139() {
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
          <Link to="/day-138" className="day001-nav-btn day001-nav-prev">← Day 138</Link>
          <p className="day001-datetime">Express Day 139 · 19 May 2027</p>
          <Link to="/day-140" className="day001-nav-btn day001-nav-next">Day 140 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>OpenAPI</span><span>Docs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 139 <span aria-hidden="true">📘</span></h1>
              <p className="day001-day-theme">OPENAPI &amp; SWAGGER DOCS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '38%' }} /></div>

        <p className="day001-summary">
          Day 139 documents the contract. An <strong>OpenAPI</strong> spec plus{' '}
          <strong>Swagger UI</strong> at <code>/docs</code> — paths, schemas, and{' '}
          <strong>bearer auth</strong> — so web, mobile, and teammates share one source of truth.
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

        <CardSection icon="📘" title="1 · SPEC & UI" cards={CORE} columns={3} />
        <CardSection icon="🧩" title="2 · SCHEMAS & SYNC" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#OpenAPI</span><span>#Swagger</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
