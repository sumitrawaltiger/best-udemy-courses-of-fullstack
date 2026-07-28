import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'RAG is a pipeline', text: 'ingestion, chunking, embedding, indexing, retrieval, reranking, and generation all matter' },
  { title: 'Chunking is product-specific', text: 'docs, tickets, and code each need different chunk boundaries' },
  { title: 'Metadata helps', text: 'source, timestamp, tenant, and section labels improve filtering' },
  { title: 'Hybrid search wins often', text: 'keyword plus vector retrieval beats either alone on many corpora' },
  { title: 'Reranking pays off', text: 'retrieve broad, then reorder the top candidates for relevance' },
  { title: 'Freshness matters', text: 'update indexes when source docs change or answers go stale quickly' },
  { title: 'Citations build trust', text: 'show the chunks or links that grounded the answer' },
  { title: 'RAG needs eval too', text: 'measure retrieval quality separately from answer quality' },
];

const CORE = [
  {
    icon: '🗂️', title: 'Ingestion Flow', titleClass: 'card-title-cyan', subtitle: 'Data',
    description:
      'Normalize source documents, attach metadata, and create a repeatable indexing job instead of ad hoc uploads.',
    code: 'parse -> chunk -> embed',
  },
  {
    icon: '🔎', title: 'Hybrid Retrieval', titleClass: 'card-title-purple', subtitle: 'Search',
    description:
      'Combine vector search, metadata filters, and keyword matches to improve recall on real-world questions.',
    code: 'vector + keyword + filter',
  },
  {
    icon: '📚', title: 'Cited Answers', titleClass: 'card-title-amber', subtitle: 'Trust',
    description:
      'Return source snippets with the final answer so users can verify what the model actually used.',
    code: 'answer + citations',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'RAG Notebook', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Test chunk size, overlap, and top-k on the same 10 questions.',
    code: 'compare configs',
  },
  {
    icon: '🧾', title: 'Source View', titleClass: 'card-title-purple', subtitle: 'UI',
    description: 'Render the retrieved chunks below every answer in your app.',
    code: 'show grounding',
  },
  {
    icon: '🔜', title: 'Next: Multimodal', titleClass: 'card-title-amber', subtitle: 'Day 53',
    description: 'Tomorrow -> text, image, and audio workflows in Gen AI apps.',
    link: { href: '/genai-day-53', label: 'Go to Day 53 ->' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
  {
    icon: '📖', title: 'Qdrant Docs', titleClass: 'card-title-purple', subtitle: 'Vector DB',
    description: 'Vector search and filtering patterns for production retrieval.',
    link: { href: 'https://qdrant.tech/documentation/', label: 'Open ->', external: true },
  },
  {
    icon: '🧠', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Bad retrieval guarantees bad answers, no matter how good the model is.',
    footer: 'Ground first, generate second.',
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

export default function GenaiDay52() {
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
          <Link to="/genai-day-51" className="day001-nav-btn day001-nav-prev">Day 51</Link>
          <p className="day001-datetime">Gen AI Day 52 · 52 Aug 2026</p>
          <Link to="/genai-day-53" className="day001-nav-btn day001-nav-next">Day 53 {'->'}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>RAG</span><span>Day 52</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 52 <span aria-hidden="true">🗃️</span></h1>
              <p className="day001-day-theme">RAG SYSTEMS IN PRODUCTION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · RETRIEVAL</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 52 hardens <strong>retrieval-augmented generation</strong>. Focus on ingestion, chunking, metadata,
          hybrid search, reranking, and <strong>cited answers</strong> that users can trust.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🗃️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#RAG</span><span>#Day52</span><span>#VectorDB</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
