import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VERSIONING = 'https://restfulapi.net/versioning/';
const DEPRECATION = 'https://datatracker.ietf.org/doc/html/rfc8594';
const CHECKLIST = 'https://expressjs.com/en/advanced/best-practice-security.html';

const LEARNT_TODAY = [
  { title: 'Why version APIs', text: 'clients break when you change contracts — versions let you evolve safely' },
  { title: 'URL versioning', text: '/api/v1/... is simple and explicit for Year-1 APIs' },
  { title: 'Header versioning', text: 'Accept: application/vnd.myapp.v2+json — flexible, less visible' },
  { title: 'Deprecation', text: 'warn with headers before removing a field or endpoint' },
  { title: 'Additive first', text: 'prefer adding fields over renaming/removing when possible' },
  { title: 'Sunset plan', text: 'document when v1 dies; give clients time to migrate' },
  { title: 'OpenAPI per version', text: 'keep Swagger specs aligned with each major version' },
  { title: 'Production checklist', text: 'env, security, tests, logs, health, backups — ship with a list' },
  { title: 'Express Year-1 arc', text: 'Days 126–145 covered a solid API stack from hello to ops' },
];

const CORE = [
  {
    icon: '📌', title: 'Mount /api/v1', titleClass: 'card-title-cyan', subtitle: 'URL Version',
    description: 'Mount routers under /api/v1. When a breaking change lands, add /api/v2 alongside — do not break v1 overnight.',
    code: 'app.use("/api/v1", v1Router);\n// later:\napp.use("/api/v2", v2Router);',
  },
  {
    icon: '⚠️', title: 'Deprecate Kindly', titleClass: 'card-title-purple', subtitle: 'Headers',
    description: 'Signal sunset with Deprecation / Sunset headers so clients can migrate before 410.',
    code: 'res.setHeader("Deprecation", "true");\nres.setHeader("Sunset", "Sat, 1 Aug 2027 00:00:00 GMT");\nres.setHeader("Link", \'</api/v2/tasks>; rel="successor-version"\');',
  },
  {
    icon: '➕', title: 'Additive Changes', titleClass: 'card-title-amber', subtitle: 'Safer Evolution',
    description: 'New optional fields rarely break clients. Renames and removals need a version bump.',
    code: '// v1: { id, title }\n'// v1 additive: { id, title, tags?: string[] }\n'// breaking rename → v2',
  },
];

const WRAP = [
  {
    icon: '✅', title: 'Ship Checklist', titleClass: 'card-title-cyan', subtitle: 'Before Prod',
    description: 'Env secrets, Helmet/CORS/rate limit, Zod, tests, OpenAPI, logs, /health, backups, deploy rollback.',
    code: '// security · validation · auth\n'// tests · swagger · logs · health\n'// redis/jobs if needed · backups',
  },
  {
    icon: '🗺️', title: 'Days 126–145', titleClass: 'card-title-purple', subtitle: 'What You Built',
    description: 'Express → TS → Zod → security → deploy → lists → uploads → tests → OpenAPI → clients → sockets → jobs → Redis → logs → versions.',
    code: 'REST + JWT + DB\nTS + Zod + security\nScale + realtime + ops',
  },
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 146 Preview',
    description: 'Tomorrow: GraphQL basics — schema, queries, mutations, and resolvers on top of the API skills you already have.',
    link: { href: '/day-146', label: 'Go to Day 146 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks, TypeScript notes, and the full 1600-day journey map.',
    link: { href: '/', label: 'Go to Home →' },
  },
];

const RESOURCES = [
  {
    icon: '📌', title: 'API Versioning', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Common strategies: URI, header, and media type versioning.',
    link: { href: VERSIONING, label: 'Read versioning guide →', external: true },
  },
  {
    icon: '🌇', title: 'Sunset Header', titleClass: 'card-title-purple', subtitle: 'RFC 8594',
    description: 'How to advertise when a resource will be removed.',
    link: { href: DEPRECATION, label: 'Read RFC 8594 →', external: true },
  },
  {
    icon: '🛡️', title: 'Express Security', titleClass: 'card-title-amber', subtitle: 'Best Practices',
    description: 'Official Express security checklist to revisit before every ship.',
    link: { href: CHECKLIST, label: 'Read security practices →', external: true },
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

export default function Day145() {
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
          <Link to="/day-144" className="day001-nav-btn day001-nav-prev">← Day 144</Link>
          <p className="day001-datetime">Express Day 145 · 25 May 2027</p>
          <Link to="/day-146" className="day001-nav-btn day001-nav-next">Day 146 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Versioning</span><span>Ship</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 145 <span aria-hidden="true">📌</span></h1>
              <p className="day001-day-theme">API VERSIONING &amp; SHIP CHECKLIST</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '40%' }} /></div>

        <p className="day001-summary">
          Day 145 closes this Express ops arc. <strong>Version</strong> with{' '}
          <strong>/api/v1</strong>, <strong>deprecate</strong> before breaking, prefer{' '}
          <strong>additive</strong> changes, and ship with a <strong>production checklist</strong>.
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

        <CardSection icon="📌" title="1 · VERSIONING" cards={CORE} columns={3} />
        <CardSection icon="✅" title="2 · CHECKLIST & ARC" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#APIDesign</span><span>#Year1</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
