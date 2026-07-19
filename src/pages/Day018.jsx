import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture18';

const LEARNT_TODAY = [
  { title: 'Parse the PDF', text: 'upload the document to Gemini (1M-token context) and extract from it directly, or use pdf-parse' },
  { title: 'LLM entity extraction', text: 'prompt Gemini to output structured JSON — movie, director, actors, genres, themes — per record' },
  { title: 'Batch + retry', text: 'process in batches (e.g. 50 movies per request) with retries on rate limits and errors' },
  { title: 'Build the Neo4j graph', text: 'turn each entity into a node and each connection into a typed relationship' },
  { title: 'MERGE not CREATE', text: 'MERGE finds-or-creates, so "Zendaya" is one shared node instead of a duplicate per movie' },
  { title: 'Index for speed', text: 'index node keys so MERGE uses a lookup instead of scanning every node' },
  { title: 'Also store vectors', text: 'embed the content and upsert into Pinecone for the similarity side of Graph RAG' },
];

const EXTRACT = [
  {
    icon: '📄', title: 'PDF → Structured JSON', titleClass: 'card-title-cyan', subtitle: 'Gemini Extraction',
    description:
      'Upload the PDF once and ask Gemini to extract entities in a strict JSON shape. Its large context window reads the whole document, so a handful of batched calls covers thousands of records.',
    code: 'const EXTRACTION_PROMPT = `From the attached PDF, extract movies\n{START}–{END}. For EACH, output EXACT JSON:\n{ "movie": {"title","year"}, "director": {"name"},\n  "actors": [...], "genres": [...], "themes": [...] }`;',
  },
  {
    icon: '🔁', title: 'Batch & Retry', titleClass: 'card-title-purple', subtitle: 'Reliable Ingestion',
    description:
      'Extract in batches (50 at a time) and give each batch retries — wait longer on 429 rate limits, shorter on parse/network errors — then retry any failed batches once more.',
    code: '// 1000 movies ÷ 50 = 20 calls\n// 429 → wait 30s/60s/90s · other → 10s/20s/30s\n// final pass retries whatever failed',
  },
];

const GRAPH = [
  {
    icon: '🔗', title: 'Entities → Neo4j', titleClass: 'card-title-cyan', subtitle: 'Nodes & Relationships',
    description:
      'Each entity becomes a node and each connection a typed relationship, inserted inside a transaction so it is all-or-nothing.',
    code: 'await session.executeWrite(async (tx) => {\n  // MERGE (m:Movie {title})\n  // MERGE (d:Director {name})\n  // MERGE (d)-[:DIRECTED]->(m)\n});',
  },
  {
    icon: '🧲', title: 'MERGE vs CREATE', titleClass: 'card-title-purple', subtitle: 'No Duplicates',
    description:
      'CREATE always makes a new node, so "Zendaya" would appear once per movie. MERGE checks first and reuses the existing node — one Zendaya, connected to everything.',
    code: '// CREATE (:Actor {name:"Zendaya"}) ×2 → two nodes ❌\n// MERGE  (:Actor {name:"Zendaya"}) ×2 → one node  ✅\n// + create an index so MERGE stays fast',
  },
  {
    icon: '📦', title: '+ Pinecone Vectors', titleClass: 'card-title-amber', subtitle: 'The Similarity Side',
    description:
      'The graph handles relationships; for "similar to" questions we also embed the content and upsert it into Pinecone. Indexing builds both stores in one run.',
    code: '// graph  → Neo4j (relationships)\n// vectors → Pinecone (similarity)\n// npm run index → build both, once',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 18', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The full indexing pipeline — pdfParser, entityExtractor, graphBuilder, vectorStore and runIndexing — in the graph-rag-movie project.',
    link: { href: GH_LECTURE, label: 'Open Lecture 18 →', external: true },
  },
  {
    icon: '🧰', title: 'The Stack', titleClass: 'card-title-purple', subtitle: 'Graph RAG',
    description:
      'Neo4j (neo4j-driver) + Pinecone + Gemini (@google/genai) + LangChain.js — the toolset that powers the indexing step.',
    footer: 'Neo4j · Pinecone · Gemini · LangChain.js',
  },
  {
    icon: '🔜', title: 'Next: Querying', titleClass: 'card-title-amber', subtitle: 'Day 19 Preview',
    description:
      'Tomorrow is the query side — Lecture 19: classify each question and route it to the graph or the vectors for a hybrid answer.',
    link: { href: '/day-019', label: 'Go to Day 19 →' },
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

export default function Day018() {
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
          <Link to="/day-017" className="day001-nav-btn day001-nav-prev">← Day 17</Link>
          <p className="day001-datetime">Agentic AI Day 18</p>
          <Link to="/day-019" className="day001-nav-btn day001-nav-next">Day 19 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 18</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 18 <span aria-hidden="true">🔗</span></h1>
              <p className="day001-day-theme">GRAPH RAG — BUILDING THE KNOWLEDGE GRAPH</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '18%' }} /></div>

        <p className="day001-summary">
          Lecture 18 — the <strong>indexing</strong> pipeline. I parse the PDF and have <strong>Gemini</strong>{' '}
          extract <strong>structured JSON entities</strong> (movie, director, actors, genres) in{' '}
          <strong>batches</strong> with retries. Each entity becomes a <strong>Neo4j node</strong> and each
          connection a typed <strong>relationship</strong>, built with <strong>MERGE</strong> (not CREATE) so there
          are no duplicate nodes, plus an <strong>index</strong> to keep MERGE fast. The same content is embedded
          into <strong>Pinecone</strong> for similarity. One <code>npm run index</code> builds the whole knowledge
          base. <em>Tomorrow I query it.</em>
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

        <CardSection icon="📄" title="PDF → ENTITIES" cards={EXTRACT} columns={2} />
        <CardSection icon="🔗" title="ENTITIES → GRAPH + VECTORS" cards={GRAPH} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#GraphRAG</span><span>#Neo4j</span><span>#Pinecone</span>
        </footer>
      </div>
    </div>
  );
}
