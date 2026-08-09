import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FTS = 'https://www.postgresql.org/docs/current/textsearch.html';
const TSQUERY = 'https://www.postgresql.org/docs/current/textsearch-controls.html';
const GIN = 'https://www.postgresql.org/docs/current/gin.html';

const LEARNT_TODAY = [
  { title: 'Why search ≠ LIKE', text: 'LIKE %term% cannot use normal B-tree indexes well and ranks poorly' },
  { title: 'Full-text search', text: 'tokenizeize text, match documents, and rank by relevance' },
  { title: 'tsvector / tsquery', text: 'Postgres stores searchable documents and parses user queries' },
  { title: 'GIN index', text: 'index tsvector columns so search stays fast as data grows' },
  { title: 'Ranking', text: 'ts_rank / ts_rank_cd order better matches first' },
  { title: 'Generated column', text: 'maintain a search_vector from title + body on write' },
  { title: 'Simple Year-1 path', text: 'Postgres FTS is enough before standing up Elasticsearch' },
  { title: 'Days 176–180', text: 'Postgres FTS → search API → warehouses → ETL → search/analytics milestone' },
  { title: 'Language config', text: 'english / simple dictionaries affect stemming and stop words' },
];

const CORE = [
  {
    icon: '🔎', title: 'tsvector Column', titleClass: 'card-title-cyan', subtitle: 'Document',
    description: 'Store a weighted vector from title and body. Update on insert/update.',
    code: 'ALTER TABLE tasks ADD COLUMN search_vector tsvector\n  GENERATED ALWAYS AS (\n    setweight(to_tsvector("english", coalesce(title, "")), "A") ||\n    setweight(to_tsvector("english", coalesce(body, "")), "B")\n  ) STORED;\nCREATE INDEX tasks_search_idx ON tasks USING GIN (search_vector);',
  },
  {
    icon: '🧾', title: 'Query', titleClass: 'card-title-purple', subtitle: '@@ Match',
    description: 'Convert user input with plainto_tsquery or websearch_to_tsquery and match.',
    code: 'SELECT id, title,\n  ts_rank(search_vector, q) AS rank\nFROM tasks, plainto_tsquery("english", $1) q\nWHERE search_vector @@ q\nORDER BY rank DESC\nLIMIT 20;',
  },
  {
    icon: '◇', title: 'From Prisma', titleClass: 'card-title-amber', subtitle: 'Raw / View',
    description: 'Use $queryRaw for FTS until you add a dedicated search service.',
    code: 'await prisma.$queryRaw`\n  SELECT id, title FROM tasks\n  WHERE search_vector @@ plainto_tsquery("english", ${q})\n  LIMIT 20`;',
  },
];

const PRACTICE = [
  {
    icon: '✍️', title: 'User Input', titleClass: 'card-title-cyan', subtitle: 'Safe Parse',
    description: 'Prefer plainto_tsquery / websearch_to_tsquery over string-building tsquery.',
    code: '// websearch_to_tsquery("english", input)\n'// handles quotes and OR-ish UX',
  },
  {
    icon: '⚡', title: 'When To Leave PG', titleClass: 'card-title-purple', subtitle: 'Elasticsearch',
    description: 'Fuzzy typo tolerance, heavy facets, or multi-tenant mega-indexes may need a search engine.',
    code: '// start: Postgres FTS\n'// later: OpenSearch / ES',
  },
  {
    icon: '🧪', title: 'Relevance Tweaks', titleClass: 'card-title-amber', subtitle: 'Weights',
    description: 'Weight title higher than body (A vs B) so title hits rank first.',
    code: 'setweight(…title…, "A")\nsetweight(…body…, "B")',
  },
  {
    icon: '🔜', title: 'Next: Search API', titleClass: 'card-title-lime', subtitle: 'Day 177 Preview',
    description: 'Tomorrow: wire /search on Express/Nest — pagination, filters, and empty states.',
    link: { href: '/day-177', label: 'Go to Day 177 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔎', title: 'Full Text Search', titleClass: 'card-title-cyan', subtitle: 'Postgres',
    description: 'Official FTS overview and concepts.',
    link: { href: FTS, label: 'Read FTS docs →', external: true },
  },
  {
    icon: '🧾', title: 'Controls', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Parsing queries and ranking.',
    link: { href: TSQUERY, label: 'Read textsearch controls →', external: true },
  },
  {
    icon: '📇', title: 'GIN Indexes', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Why GIN fits tsvector columns.',
    link: { href: GIN, label: 'Read GIN docs →', external: true },
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

export default function Day176() {
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
          <Link to="/day-175" className="day001-nav-btn day001-nav-prev">← Day 175</Link>
          <p className="day001-datetime">Data Day 176 · 29 Nov 2027</p>
          <Link to="/day-177" className="day001-nav-btn day001-nav-next">Day 177 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>PostgreSQL</span><span>Year 1</span><span>Full-Text</span><span>Search</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 176 <span aria-hidden="true">🔎</span></h1>
              <p className="day001-day-theme">POSTGRES FULL-TEXT SEARCH</p>
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
          Day 176 adds real search. Use <strong>tsvector</strong>, a <strong>GIN index</strong>, and{' '}
          <strong>ranking</strong> — better than <code>LIKE %q%</code> for product search.
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

        <CardSection icon="🔎" title="1 · FTS BASICS" cards={CORE} columns={3} />
        <CardSection icon="✍️" title="2 · UX & LIMITS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#PostgreSQL</span><span>#FullTextSearch</span><span>#Search</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
