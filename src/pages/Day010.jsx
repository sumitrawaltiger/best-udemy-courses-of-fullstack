import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture10';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'Regular DBs fall short', text: 'SQL and NoSQL are built for exact matches and filters, not for "find the nearest vectors" at scale' },
  { title: 'What a vector DB is', text: 'a database purpose-built to store embeddings and query them by similarity, fast' },
  { title: 'Store vector + metadata', text: 'each record holds the embedding plus the original text and any metadata to return with it' },
  { title: 'ANN indexes', text: 'Approximate Nearest Neighbour indexes make similarity search fast, trading a little accuracy for big speed' },
  { title: 'The options', text: 'Pinecone, Qdrant, Chroma and PGVector are common choices in the JavaScript ecosystem' },
  { title: 'The pipeline', text: 'embed your documents once, upsert them into the DB, then query with an embedded question for top-K matches' },
  { title: 'This completes retrieval', text: 'a vector DB is the storage layer that makes production RAG possible — next comes RAG itself' },
];

const WHY = [
  {
    icon: '🗄️', title: 'Why Not A Normal DB?', titleClass: 'card-title-cyan', subtitle: 'Wrong Tool',
    description:
      'A normal database finds rows by exact value or range. It has no efficient way to answer "which of these million vectors point in a similar direction to this one?" — that is a different problem.',
    code: '// SQL: WHERE city = "Delhi"        ✅ exact match\n// SQL: nearest vector to [0.2, ...]  ❌ not built for it',
  },
  {
    icon: '📦', title: 'A Vector Database', titleClass: 'card-title-purple', subtitle: 'Built For Similarity',
    description:
      'A vector DB stores each embedding alongside its source text and metadata, and indexes the vectors so it can return the closest matches to a query vector in milliseconds.',
    code: '// record = { vector: [...], text: "...", metadata: {...} }\n// query(vector, k) → the k most similar records',
  },
  {
    icon: '⚡', title: 'ANN Indexes', titleClass: 'card-title-amber', subtitle: 'Fast At Scale',
    description:
      'Exact nearest-neighbour search over millions of vectors is slow. Approximate Nearest Neighbour indexes (like HNSW) give near-perfect results far faster — the trick behind real-time search.',
    code: '// exact search: check every vector → slow\n// ANN (HNSW): smart index → fast, ~as accurate',
  },
];

const USE = [
  {
    icon: '🧰', title: 'The Options', titleClass: 'card-title-cyan', subtitle: 'JS Ecosystem',
    description:
      'Popular choices: Pinecone (managed), Qdrant and Chroma (open source), and PGVector (a Postgres extension). All expose the same idea — upsert vectors, then query by similarity.',
    code: '// Pinecone · Qdrant · Chroma · PGVector\n// same mental model: upsert(vectors) → query(vector, topK)',
  },
  {
    icon: '⬆️', title: 'Ingest & Query', titleClass: 'card-title-purple', subtitle: 'The Pipeline',
    description:
      'Embed each document once and upsert it. At query time, embed the question and ask the DB for the top-K nearest records — the retrieval you built by hand yesterday, now at scale.',
    code: '// ingest (once)\nawait index.upsert(docs.map(d => ({ id: d.id, values: embed(d.text), metadata: { text: d.text } })));\n// query\nconst { matches } = await index.query({ vector: embed(question), topK: 3 });',
  },
  {
    icon: '🔗', title: 'Retrieval, Solved', titleClass: 'card-title-amber', subtitle: 'Ready For RAG',
    description:
      'Embeddings, semantic search, and now a vector DB together form a complete retrieval system. The final piece is feeding those retrieved chunks to the model — that is RAG.',
    footer: 'embed → store → retrieve → (next) generate = RAG',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 10', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The vector databases lecture and diagram in the STRIKE GenAI repo — the storage layer for retrieval.',
    link: { href: GH_LECTURE, label: 'Open Lecture 10 →', external: true },
  },
  {
    icon: '🧠', title: 'RAG Comes Next', titleClass: 'card-title-purple', subtitle: 'Lecture 12',
    description:
      'With retrieval complete, the course builds a full RAG System (Lecture 12): retrieve relevant chunks, then have the model answer using them. Explore the site’s GenAI track for the same path.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
  },
  {
    icon: '💾', title: 'STRIKE GenAI Repo', titleClass: 'card-title-amber', subtitle: 'All Lectures',
    description:
      'The complete Coder Army course code — every lecture from here through RAG, multi-agent systems, LangGraph and the final projects.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
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
          <p className="day001-datetime">Agentic AI Day 10</p>
          <Link to="/day-011" className="day001-nav-btn day001-nav-next">Day 11 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 10 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">VECTOR DATABASES — RETRIEVAL AT SCALE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '10%' }} /></div>

        <p className="day001-summary">
          Lecture 10 — <strong>vector databases</strong>. Regular SQL/NoSQL databases are built for exact matches,
          not for "find the nearest vectors", so yesterday’s in-memory search does not scale. A{' '}
          <strong>vector DB</strong> stores each <strong>embedding</strong> with its text and metadata and uses{' '}
          <strong>ANN indexes</strong> (like HNSW) to return the closest matches in milliseconds. The workflow:{' '}
          <strong>embed once, upsert, then query</strong> with an embedded question — using{' '}
          <strong>Pinecone, Qdrant, Chroma</strong> or <strong>PGVector</strong>. That completes retrieval; the last
          piece is generation. <em>Next stop: RAG.</em>
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

        <CardSection icon="🗄️" title="WHY A VECTOR DATABASE" cards={WHY} columns={3} />
        <CardSection icon="🔗" title="USING ONE" cards={USE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#VectorDB</span><span>#CoderArmy</span><span>#RAG</span>
        </footer>
      </div>
    </div>
  );
}
