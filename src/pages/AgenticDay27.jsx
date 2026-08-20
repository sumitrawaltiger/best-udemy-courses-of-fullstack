import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PINECONE_YT = 'https://www.youtube.com/watch?v=kl6KZE6kQcQ';
const CHROMA_DOCS = 'https://docs.trychroma.com/';

const LEARNT_TODAY = [
  { title: 'Vector database', text: 'a database purpose-built to store and search high-dimensional embedding vectors at scale' },
  { title: 'Index vs database', text: 'a bare index (like FAISS) is just an in-memory search structure; a vector database adds persistence, metadata, and scaling on top' },
  { title: 'Similarity search', text: 'approximate nearest neighbor (ANN) search finds the closest vectors to a query fast, even across millions of rows' },
  { title: 'Distance metrics', text: 'cosine similarity, dot product, and Euclidean distance are the three common ways to measure "closeness"' },
  { title: 'Popular options', text: 'Pinecone (managed), Chroma (lightweight/local), Weaviate, Qdrant, and pgvector (a Postgres extension)' },
  { title: 'Metadata filtering', text: 'combine vector similarity with structured filters — date, source, category — for far more precise retrieval' },
  { title: 'Indexing strategies', text: 'HNSW and IVF trade off search speed, accuracy, and memory differently — worth knowing which your DB uses' },
  { title: 'Why RAG needs this', text: 'a vector database is the "retrieval" half of Retrieval-Augmented Generation, holding every embedded chunk you\'ll search' },
];

const CORE = [
  {
    icon: '📚', title: 'Index vs Database', titleClass: 'card-title-cyan', subtitle: 'A Key Distinction',
    description:
      'FAISS gives you fast vector search but no persistence or metadata out of the box. A vector database wraps that same search with storage, filtering, and scaling.',
    code: '# index: search only\n# vector DB: search + store + filter + scale',
  },
  {
    icon: '🎯', title: 'Similarity Search (ANN)', titleClass: 'card-title-purple', subtitle: 'Approximate Nearest Neighbor',
    description:
      'Exact nearest-neighbor search doesn\'t scale to millions of vectors, so vector databases use approximate algorithms that are nearly as accurate but far faster.',
    code: 'results = collection.query(\n  query_embeddings=[query_vec], n_results=5\n)',
  },
  {
    icon: '🏷️', title: 'Metadata Filtering', titleClass: 'card-title-amber', subtitle: 'Precision Retrieval',
    description:
      'Pair a similarity search with a structured filter — only chunks from a given document, after a given date — for retrieval that\'s both relevant and precise.',
    code: 'collection.query(\n  query_embeddings=[q], where={"source": "handbook"}\n)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Chroma Quickstart', titleClass: 'card-title-cyan', subtitle: 'Hands-On',
    description: 'Spin up a local Chroma collection, add a handful of embedded chunks, and query it — no server or account needed.',
    code: 'client = chromadb.Client()\ncol = client.create_collection("docs")',
  },
  {
    icon: '⚖️', title: 'Pinecone vs Chroma', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Compare a managed cloud option (Pinecone) against a local, embeddable one (Chroma) for a small personal project.',
  },
  {
    icon: '🔜', title: 'Next: OpenAI', titleClass: 'card-title-amber', subtitle: 'Day 28 Preview',
    description: 'Tomorrow — the OpenAI API in full: chat completions, function calling, Whisper, and DALL-E.',
    link: { href: '/agentic-day-28', label: 'Go to Day 28 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Vector Databases', titleClass: 'card-title-cyan', subtitle: 'PY Module 27',
    description: 'Full lesson — index vs database, similarity search, Pinecone/Chroma, and a hands-on practicum.',
    link: { href: '/python/learn/vector-databases', label: 'Open PY Module 27 →' },
  },
  {
    icon: '🎬', title: 'Vector Databases Explained', titleClass: 'card-title-purple', subtitle: 'Pinecone',
    description: 'A clear introduction to what vector databases are and why RAG needs them.',
    link: { href: PINECONE_YT, label: 'Watch vector DB intro →', external: true },
  },
  {
    icon: '📖', title: 'Chroma Docs', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official docs for Chroma — the lightweight, embeddable vector database for local projects.',
    link: { href: CHROMA_DOCS, label: 'Open Chroma docs →', external: true },
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

export default function AgenticDay27() {
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
          <Link to="/agentic-day-26" className="day001-nav-btn day001-nav-prev">← Day 26</Link>
          <p className="day001-datetime">Agentic AI Day 27 · 16 Sep 2026</p>
          <Link to="/agentic-day-28" className="day001-nav-btn day001-nav-next">Day 28 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Gen AI</span><span>Vector DBs</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 27 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">VECTOR DATABASES</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · GEN AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '18%' }} /></div>

        <p className="day001-summary">
          Day 27 completes the RAG stack's storage half. How a <strong>vector database</strong> differs from
          a bare <strong>index</strong>, how <strong>similarity search</strong> stays fast at scale, and how{' '}
          <strong>metadata filtering</strong> makes retrieval precise, not just relevant.
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

        <CardSection icon="📚" title="HOW VECTOR SEARCH WORKS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day27</span><span>#VectorDB</span><span>#RAG</span>
        </footer>
      </div>
    </div>
  );
}
