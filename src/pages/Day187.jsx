import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ANN = 'https://en.wikipedia.org/wiki/Nearest_neighbor_search';
const PGVEC = 'https://github.com/pgvector/pgvector';
const FAISS = 'https://faiss.ai/';

const LEARNT_TODAY = [
  { title: 'Nearest neighbors', text: 'given a query vector, return the K closest item vectors' },
  { title: 'Brute force', text: 'score all items — fine for thousands, too slow for millions' },
  { title: 'ANN', text: 'approximate nearest neighbor — fast, nearly correct top-K' },
  { title: 'pgvector', text: 'Postgres extension for vector columns + IVFFlat/HNSW indexes' },
  { title: 'Candidate use', text: 'ANN retrieves ~100; a ranker with features picks the final 10' },
  { title: 'Recall vs speed', text: 'tune index params — higher recall costs more latency' },
  { title: 'Year-1 path', text: 'small catalog → SQL ORDER BY distance; grow into pgvector/FAISS' },
  { title: 'Rebuild indexes', text: 'after big catalog changes, reindex or the ANN quality drifts' },
  { title: 'Fallback', text: 'if ANN fails, fall back to popular / tag overlap — never empty' },
];

const CORE = [
  {
    icon: '🎯', title: 'Query Shape', titleClass: 'card-title-cyan', subtitle: 'K-NN',
    description: 'Input: user or item vector. Output: nearest item ids with distances.',
    code: 'knn(user_vec, k=100)\n→ [{ id, distance }]',
  },
  {
    icon: '🐢', title: 'Exact Scan', titleClass: 'card-title-purple', subtitle: 'MVP',
    description: 'For < ~10k items, load vectors and sort by cosine in memory or SQL.',
    code: 'ORDER BY embedding <=> $1\nLIMIT 100',
  },
  {
    icon: '⚡', title: 'ANN Index', titleClass: 'card-title-amber', subtitle: 'Scale',
    description: 'HNSW / IVFFlat trade a little accuracy for big speed gains at catalog size.',
    code: '// CREATE INDEX … USING hnsw\n'// (embedding vector_cosine_ops)',
  },
];

const PRACTICE = [
  {
    icon: '🐘', title: 'pgvector MVP', titleClass: 'card-title-cyan', subtitle: 'Postgres',
    description: 'Add vector column, insert embeddings, query with <=> / cosine ops.',
    code: 'CREATE EXTENSION vector;\nALTER … ADD embedding vector(384)',
  },
  {
    icon: '🪜', title: 'Two-Stage Again', titleClass: 'card-title-purple', subtitle: 'Pipeline',
    description: 'ANN for candidates; hybrid score (CF + content + pop) for final order.',
    code: 'ANN 100 → features → top 10',
  },
  {
    icon: '📏', title: 'Measure Recall', titleClass: 'card-title-amber', subtitle: 'Quality',
    description: 'Compare ANN top-K to exact top-K on a sample — know what you sacrifice.',
    code: '// recall@100 vs exact\n'// target ≥ 0.9 for MVP',
  },
  {
    icon: '🔜', title: 'Next: A/B Tests', titleClass: 'card-title-lime', subtitle: 'Day 188 Preview',
    description: 'Tomorrow: prove the shelf helps — experiment design, metrics, and assignment.',
    link: { href: '/day-188', label: 'Go to Day 188 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Nearest Neighbor', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'Exact and approximate search background.',
    link: { href: ANN, label: 'Read NN search →', external: true },
  },
  {
    icon: '🐘', title: 'pgvector', titleClass: 'card-title-purple', subtitle: 'GitHub',
    description: 'Vector similarity search in Postgres.',
    link: { href: PGVEC, label: 'Open pgvector →', external: true },
  },
  {
    icon: '⚡', title: 'FAISS', titleClass: 'card-title-amber', subtitle: 'Library',
    description: 'Facebook AI similarity search at scale.',
    link: { href: FAISS, label: 'Open FAISS →', external: true },
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

export default function Day187() {
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
          <Link to="/day-186" className="day001-nav-btn day001-nav-prev">← Day 186</Link>
          <p className="day001-datetime">ML Day 187 · 10 Dec 2027</p>
          <Link to="/day-188" className="day001-nav-btn day001-nav-next">Day 188 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>ANN</span><span>pgvector</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 187 <span aria-hidden="true">⚡</span></h1>
              <p className="day001-day-theme">SIMILARITY SEARCH / ANN</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">ML · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          Day 187 makes vectors useful. Find <strong>nearest neighbors</strong> fast — brute force for
          small catalogs, <strong>ANN / pgvector</strong> when the catalog grows.
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

        <CardSection icon="🎯" title="1 · SEARCH" cards={CORE} columns={3} />
        <CardSection icon="🐘" title="2 · BUILD PATH" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ANN</span><span>#pgvector</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
