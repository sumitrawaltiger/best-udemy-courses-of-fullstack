import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RAG = 'https://js.langchain.com/docs/concepts/rag/';
const EMBEDDINGS = 'https://js.langchain.com/docs/concepts/embedding_models/';

const LEARNT_TODAY = [
  { title: 'RAG, no buzzwords', text: 'retrieve relevant text, then let the model answer using it — grounding replies in your data, not its memory' },
  { title: 'Why RAG', text: 'it fixes stale knowledge and hallucination by giving the model the exact context at answer time' },
  { title: 'Two phases', text: 'ingestion (prepare & store your docs once) and query (fetch + answer per question) — keep them separate' },
  { title: 'Chunking', text: 'split docs into passages small enough to embed and retrieve precisely, with a little overlap' },
  { title: 'Embeddings', text: 'turn each chunk into a vector so similar meanings sit close together in space' },
  { title: 'Similarity search', text: 'embed the question, find the nearest chunks by cosine similarity — that’s retrieval' },
  { title: 'Metadata & top-k', text: 'attach source/section metadata; return the top-k closest chunks to build the context' },
  { title: 'Light vs heavy RAG', text: 'a small in-memory store is plenty to learn; reach for a real vector DB when scale or persistence demands it' },
];

const WHAT = [
  {
    icon: '📚', title: 'What RAG Is', titleClass: 'card-title-cyan', subtitle: 'Retrieve → Answer',
    description:
      'Retrieval-Augmented Generation: find the most relevant passages from your own documents, hand them to the model, and let it answer grounded in that context — instead of guessing from training memory.',
    code: '// question → retrieve top chunks\n// → model answers USING those chunks\n// → grounded, cite-able reply',
  },
  {
    icon: '🔁', title: 'Two Phases', titleClass: 'card-title-purple', subtitle: 'Ingest vs Query',
    description:
      'Ingestion runs once: load, chunk, embed and store. Query runs per question: embed the question, retrieve nearby chunks, answer. Keeping them separate keeps the system clear and cheap.',
    code: '// INGEST (once): load → chunk → embed → store\n// QUERY (each ask): embed q → search → answer',
  },
];

const HOW = [
  {
    icon: '✂️', title: 'Chunking', titleClass: 'card-title-cyan', subtitle: 'Right-Sized Passages',
    description:
      'Big documents don’t retrieve precisely. Split them into passages with a little overlap so each chunk is self-contained and a query matches the right one.',
    code: '// split ~500–1000 chars, overlap ~100\n// too big → noisy matches\n// too small → lost context',
  },
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-purple', subtitle: 'Meaning As Vectors',
    description:
      'An embedding model maps each chunk to a vector. Similar meanings land near each other, so “refund policy” and “getting money back” sit close — the basis of semantic retrieval.',
    code: 'const emb = await embeddings.embedQuery(text);\n// [0.02, -0.41, ...] — one vector per chunk\n// similar meaning → small distance',
  },
  {
    icon: '🎯', title: 'Search · Metadata · top-k', titleClass: 'card-title-amber', subtitle: 'Retrieve The Best',
    description:
      'Embed the question, rank chunks by cosine similarity, and return the top-k. Metadata (source, section) lets you filter and cite. That set becomes the model’s context.',
    code: '// score = cosine(q_vec, chunk_vec)\n// keep top-k (e.g. 4) + their metadata\n// → context for the answer + citations',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'RAG Concepts', titleClass: 'card-title-cyan', subtitle: 'LangChain.js',
    description:
      'The retrieve-then-generate pattern in LangChain.js — loaders, splitters, vector stores and retrievers.',
    link: { href: RAG, label: 'Open the RAG guide →', external: true },
  },
  {
    icon: '🧭', title: 'Embedding Models', titleClass: 'card-title-purple', subtitle: 'Vectors',
    description:
      'How embeddings work in LangChain.js and how to plug in OpenAI or Gemini embeddings behind one interface.',
    link: { href: EMBEDDINGS, label: 'Open the embeddings guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Light RAG', titleClass: 'card-title-amber', subtitle: 'Day 51 Preview',
    description:
      'Tomorrow — build a small RAG system in JS: a character chunker, an in-memory vector store, /kb APIs, and cited answers with confidence.',
    link: { href: '/day-051', label: 'Go to Day 51 →' },
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

export default function Day050() {
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
          <Link to="/day-049" className="day001-nav-btn day001-nav-prev">← Day 49</Link>
          <p className="day001-datetime">Agentic AI Day 50</p>
          <Link to="/day-051" className="day001-nav-btn day001-nav-next">Day 51 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>RAG</span><span>Embeddings</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 50 <span aria-hidden="true">📚</span></h1>
              <p className="day001-day-theme">RAG FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Halfway. <strong>RAG</strong>, plainly: <strong>retrieve</strong> the relevant passages from your own docs,
          then let the model <strong>answer using them</strong> — grounding replies in your data and killing
          hallucination. It splits into two phases: <strong>ingestion</strong> (load → chunk → embed → store, once)
          and <strong>query</strong> (embed the question → similarity search → answer). The pieces:{' '}
          <strong>chunking</strong> for right-sized passages, <strong>embeddings</strong> that place meaning as
          vectors, and <strong>similarity search</strong> returning the <strong>top-k</strong> chunks plus their
          metadata for citations. <strong>Light RAG</strong> (in-memory) is enough to learn; heavy infra is for scale.{' '}
          <em>Next: build one.</em>
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

        <CardSection icon="📚" title="WHAT RAG IS" cards={WHAT} columns={2} />
        <CardSection icon="🧭" title="THE MOVING PARTS" cards={HOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#RAG</span><span>#Embeddings</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
