import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ZOD = 'https://zod.dev/';
const OPENAPI = 'https://docs.nestjs.com/openapi/introduction';
const UX = 'https://www.nngroup.com/articles/search-results-ux/';

const LEARNT_TODAY = [
  { title: 'Search endpoint', text: 'GET /search?q=…&page=1 — dedicated route, not overloaded list filters only' },
  { title: 'Validate q', text: 'trim, min/max length, reject empty after trim' },
  { title: 'Pagination', text: 'limit results; return total or hasMore like Day 136 lists' },
  { title: 'Filters', text: 'optional status, owner, date range — AND with the text query' },
  { title: 'Authz', text: 'never return rows the user cannot see — apply tenant/user scope in SQL' },
  { title: 'Empty states', text: '0 hits is 200 with [] — not 404; suggest clearer queries' },
  { title: 'Latency budget', text: 'log slow searches; EXPLAIN in staging when q patterns hurt' },
  { title: 'Highlight later', text: 'ts_headline can show snippets — nice UX, extra cost' },
  { title: 'Document it', text: 'OpenAPI: q, page, filters, and example responses' },
];

const CORE = [
  {
    icon: '🔍', title: 'Route Shape', titleClass: 'card-title-cyan', subtitle: 'GET /search',
    description: 'Validate query params, run FTS, return items + meta.',
    code: 'GET /search?q=docker&page=1&limit=20\n→ { items, page, limit, total }',
  },
  {
    icon: '✅', title: 'Zod Query', titleClass: 'card-title-purple', subtitle: 'Safe Input',
    description: 'Coerce page/limit and require a non-empty q.',
    code: 'z.object({\n  q: z.string().trim().min(1).max(100),\n  page: z.coerce.number().int().min(1).default(1),\n  limit: z.coerce.number().int().min(1).max(50).default(20),\n})',
  },
  {
    icon: '🔐', title: 'Scope In SQL', titleClass: 'card-title-amber', subtitle: 'Authz',
    description: 'Always AND user_id / org_id so search cannot leak other tenants.',
    code: 'WHERE search_vector @@ q\n  AND user_id = $userId',
  },
];

const PRACTICE = [
  {
    icon: '📭', title: 'Empty Results', titleClass: 'card-title-cyan', subtitle: 'UX',
    description: 'Return 200 with empty items. Optionally include a “try” hint in meta.',
    code: '{ items: [], total: 0, hint: "Try fewer words" }',
  },
  {
    icon: '⏱️', title: 'Timeouts', titleClass: 'card-title-purple', subtitle: 'Protect',
    description: 'Cap statement time for pathological queries so one search cannot stall the pool.',
    code: '// SET LOCAL statement_timeout = "2s"',
  },
  {
    icon: '📘', title: 'Swagger It', titleClass: 'card-title-amber', subtitle: 'Contract',
    description: 'Document q and filters so web and mobile share one contract.',
    code: '// ApiQuery q, page, limit\n'// example 200 body',
  },
  {
    icon: '🔜', title: 'Next: Warehouses', titleClass: 'card-title-lime', subtitle: 'Day 178 Preview',
    description: 'Tomorrow: analytics warehouses — OLTP vs OLAP and why dashboards leave Postgres.',
    link: { href: '/day-178', label: 'Go to Day 178 →' },
  },
];

const RESOURCES = [
  {
    icon: '✅', title: 'Zod', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Validate and coerce search query params.',
    link: { href: ZOD, label: 'Read Zod docs →', external: true },
  },
  {
    icon: '📘', title: 'Nest OpenAPI', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Document the search endpoint for clients.',
    link: { href: OPENAPI, label: 'Read Nest OpenAPI →', external: true },
  },
  {
    icon: '🎨', title: 'Search UX', titleClass: 'card-title-amber', subtitle: 'NN/g',
    description: 'How humans expect search results to behave.',
    link: { href: UX, label: 'Read search UX →', external: true },
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

export default function Day177() {
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
          <Link to="/day-176" className="day001-nav-btn day001-nav-prev">← Day 176</Link>
          <p className="day001-datetime">Data Day 177 · 30 Nov 2027</p>
          <Link to="/day-178" className="day001-nav-btn day001-nav-next">Day 178 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>API</span><span>Year 1</span><span>Search</span><span>UX</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 177 <span aria-hidden="true">🔍</span></h1>
              <p className="day001-day-theme">SEARCH API ENDPOINT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">DATA · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Day 177 exposes search. Build <strong>GET /search</strong> with validated{' '}
          <strong>q</strong>, <strong>pagination</strong>, <strong>authz-scoped SQL</strong>, and clean
          empty results.
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

        <CardSection icon="🔍" title="1 · ENDPOINT DESIGN" cards={CORE} columns={3} />
        <CardSection icon="📭" title="2 · UX & DOCS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Search</span><span>#API</span><span>#Zod</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
