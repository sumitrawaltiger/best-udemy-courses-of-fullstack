import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RAG = 'https://js.langchain.com/docs/tutorials/rag/';
const EMBEDDINGS = 'https://js.langchain.com/docs/concepts/embedding_models/';

const LEARNT_TODAY = [
  { title: 'A real (small) RAG system', text: 'build the whole loop in JS with no heavy infra — a docs helper you can actually run' },
  { title: 'Character chunker', text: 'split pasted docs into overlapping character windows — simple, predictable, good enough' },
  { title: 'In-memory vector store', text: 'keep chunk vectors in an array; search by cosine similarity — no database to learn RAG' },
  { title: 'Pluggable embeddings', text: 'the store takes any embedder (OpenAI or Gemini) behind one interface, swappable by config' },
  { title: '/kb/ingest', text: 'accept documents, chunk, embed and store them — the ingestion endpoint' },
  { title: '/kb/ask', text: 'embed the question, retrieve top-k, answer grounded in those chunks with citations' },
  { title: '/kb/reset', text: 'clear the store to start a fresh knowledge base' },
  { title: 'Cited answers + confidence', text: 'return the sources used and a confidence score, then show them in a Next.js tab' },
];

const STORE = [
  {
    icon: '✂️', title: 'Character Chunker', titleClass: 'card-title-cyan', subtitle: 'Overlapping Windows',
    description:
      'A tiny splitter walks the text in fixed-size windows with a small overlap so no idea is cut in half. No dependencies — just enough to retrieve precisely.',
    code: 'function chunk(text, size = 800, overlap = 100) {\n  const out = [];\n  for (let i = 0; i < text.length; i += size - overlap)\n    out.push(text.slice(i, i + size));\n  return out;\n}',
  },
  {
    icon: '🗃️', title: 'In-Memory Vector Store', titleClass: 'card-title-purple', subtitle: 'Cosine Search',
    description:
      'Store each chunk with its vector and metadata in an array. To retrieve, embed the query and rank by cosine similarity. Pluggable embeddings mean OpenAI or Gemini, swapped by config.',
    code: '// store: [{ text, vec, meta }]\n// search(q): rank by cosine(qVec, vec)\n// embeddings = getEmbedder("openai" | "gemini")',
  },
];

const API = [
  {
    icon: '📥', title: '/kb/ingest', titleClass: 'card-title-cyan', subtitle: 'Add Documents',
    description:
      'POST documents; the endpoint chunks, embeds and stores them. Paste a policy, a README, a spec — it becomes searchable knowledge.',
    code: '// POST /kb/ingest { text, source }\n// → chunk → embed → push to store\n// → { added: n }',
  },
  {
    icon: '❓', title: '/kb/ask', titleClass: 'card-title-purple', subtitle: 'Grounded Answers',
    description:
      'Embed the question, pull the top-k chunks, and answer strictly from them. Return the answer, the sources cited, and a confidence score — all schema-validated.',
    code: '// POST /kb/ask { question }\n// → retrieve top-k → answer from chunks\n// → { answer, sources[], confidence }',
  },
  {
    icon: '🧹', title: '/kb/reset + UI', titleClass: 'card-title-amber', subtitle: 'Fresh Start · Next.js',
    description:
      '/kb/reset clears the store for a new knowledge base. A Next.js tab ties it together: paste docs, ask questions, and see grounded answers with their sources.',
    code: '// POST /kb/reset → store = []\n// Next.js tab: paste → ingest → ask\n// → answer + source chips + confidence',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'RAG Tutorial', titleClass: 'card-title-cyan', subtitle: 'LangChain.js',
    description:
      'The end-to-end RAG walkthrough — loaders, splitters, vector stores and retrievers you can graduate to after this light build.',
    link: { href: RAG, label: 'Open the RAG tutorial →', external: true },
  },
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-purple', subtitle: 'Pluggable',
    description:
      'Swap OpenAI and Gemini embedders behind one interface — the same idea that makes the store provider-agnostic.',
    link: { href: EMBEDDINGS, label: 'Open the embeddings guide →', external: true },
  },
  {
    icon: '🔜', title: 'Next: LangGraph', titleClass: 'card-title-amber', subtitle: 'Day 52 Preview',
    description:
      'Tomorrow — LangGraph fundamentals: why LCEL alone isn’t enough, and state / nodes / edges as a mental model for complex agents.',
    link: { href: '/day-052', label: 'Go to Day 52 →' },
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

export default function Day051() {
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
          <Link to="/day-050" className="day001-nav-btn day001-nav-prev">← Day 50</Link>
          <p className="day001-datetime">Agentic AI Day 51</p>
          <Link to="/day-052" className="day001-nav-btn day001-nav-next">Day 52 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>RAG</span><span>Project</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 51 <span aria-hidden="true">🗃️</span></h1>
              <p className="day001-day-theme">LIGHT RAG — DOCS HELPER PROJECT</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Build a real RAG system — small, in JS, no heavy infra. A <strong>character chunker</strong> splits pasted
          docs into overlapping windows; an <strong>in-memory vector store</strong> keeps the chunk vectors and
          searches by <strong>cosine similarity</strong>, with <strong>pluggable embeddings</strong> (OpenAI/Gemini).
          Three endpoints run it: <strong>/kb/ingest</strong> (chunk → embed → store),{' '}
          <strong>/kb/ask</strong> (retrieve top-k → grounded answer with <strong>citations + confidence</strong>),
          and <strong>/kb/reset</strong>. A <strong>Next.js</strong> tab wires it up: paste docs, ask, and see
          answers with their sources. <em>Next: LangGraph for real control flow.</em>
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

        <CardSection icon="🗃️" title="CHUNKER & STORE" cards={STORE} columns={2} />
        <CardSection icon="🔌" title="THE /kb APIs" cards={API} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#AgenticAI</span><span>#RAG</span><span>#VectorStore</span><span>#TypeScript</span>
        </footer>
      </div>
    </div>
  );
}
