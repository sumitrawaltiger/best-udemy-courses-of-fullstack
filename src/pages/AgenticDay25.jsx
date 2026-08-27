import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EMBED_YT = 'https://www.youtube.com/watch?v=5MaWmzuwx4g';
const OPENAI_EMBED = 'https://platform.openai.com/docs/guides/embeddings';

const LEARNT_TODAY = [
  { title: 'Clean before embed', text: 'strip noise, normalize text, chunk sensibly — garbage in becomes garbage vectors' },
  { title: 'What embeddings are', text: 'dense vectors that put similar meaning close together in space' },
  { title: 'Embedding models', text: 'specialized encoders (or LLM APIs) map text → fixed-length float vectors' },
  { title: 'Chunking', text: 'split long docs so each vector covers a coherent unit for retrieval later' },
  { title: 'Similarity', text: 'cosine / dot product ranks which chunks match a query embedding' },
  { title: 'Gen AI pipeline', text: 'ingest → clean → chunk → embed → store → retrieve → prompt LLM → answer' },
  { title: 'Best practices', text: 'stable chunk size, overlap, metadata (source, page), version your embed model' },
  { title: 'What’s next', text: 'LLMs deeper (Day 26) and vector databases (Day 27) complete the RAG stack' },
];

const CORE = [
  {
    icon: '🧹', title: 'Preprocess', titleClass: 'card-title-cyan', subtitle: 'Hygiene',
    description:
      'Lowercase when useful, fix encoding, remove boilerplate, keep useful structure (headings). Decide language and PII rules up front.',
    code: 'raw → normalize\n→ remove junk → chunk',
  },
  {
    icon: '🧭', title: 'Embed Text', titleClass: 'card-title-purple', subtitle: 'Vectors',
    description:
      'Call an embedding model on each chunk. Store vector + original text + metadata together for later search.',
    code: 'vec = embed(chunk_text)\n# store {vec, text, meta}',
  },
  {
    icon: '🔗', title: 'End-To-End Pipeline', titleClass: 'card-title-amber', subtitle: 'Gen AI Flow',
    description:
      'At query time: embed the question, retrieve top-K chunks, stuff them into the prompt, generate grounded answers.',
    code: 'q → embed → top-K\n→ prompt + context → LLM',
  },
];

const PRACTICE = [
  {
    icon: '📐', title: 'Chunk Strategy', titleClass: 'card-title-cyan', subtitle: 'Tuning',
    description:
      'Too small = lost context. Too big = dilute relevance. Start ~300–800 tokens with slight overlap; measure retrieval quality.',
    code: 'size ≈ 500 tokens\noverlap ≈ 50–100',
  },
  {
    icon: '🧪', title: 'Mini Lab', titleClass: 'card-title-purple', subtitle: 'Hands-On',
    description:
      'Embed 5 FAQ answers and a question; print cosine similarities. See which FAQ wins — that is retrieval in one screen.',
    code: 'sims = cosine(q, faqs)\nprint(argsort(sims)[-3:])',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Day 26 Preview',
    description: 'Next curriculum day — Large Language Models deep dive. Vector DBs follow on Day 27.',
    link: { href: '/agentic-day-26', label: 'Go to Day 26 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Data Preprocessing & Embeddings', titleClass: 'card-title-cyan', subtitle: 'PY Module 25',
    description: 'Full lesson — cleaning, embeddings, models, Gen AI pipeline, best practices.',
    link: { href: '/python/learn/data-preprocessing-and-embeddings', label: 'Open PY Module 25 →' },
  },
  {
    icon: '🎬', title: 'Word Embeddings', titleClass: 'card-title-purple', subtitle: 'StatQuest',
    description: 'Intuition for embedding spaces and similarity.',
    link: { href: EMBED_YT, label: 'Watch embeddings →', external: true },
  },
  {
    icon: '📖', title: 'OpenAI Embeddings Guide', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Practical API guide for creating and using text embeddings.',
    link: { href: OPENAI_EMBED, label: 'Open embeddings guide →', external: true },
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

export default function AgenticDay25() {
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
          <Link to="/agentic-day-24" className="day001-nav-btn day001-nav-prev">← Day 24</Link>
          <p className="day001-datetime">Agentic AI Day 25 · 21 Sep 2026</p>
          <Link to="/agentic-day-26" className="day001-nav-btn day001-nav-next">Day 26 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Gen AI</span><span>Embeddings</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 25 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">DATA PREPROCESSING &amp; EMBEDDINGS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '17%' }} /></div>

        <p className="day001-summary">
          Day 25 prepares RAG. <strong>Clean</strong> and <strong>chunk</strong> text, turn it into{' '}
          <strong>embeddings</strong>, and see the full Gen AI retrieve → generate pipeline.
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

        <CardSection icon="🧭" title="PREP &amp; EMBED" cards={CORE} columns={3} />
        <CardSection icon="📐" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Embeddings</span><span>#Day25</span><span>#GenAI</span><span>#RAG</span>
        </footer>
      </div>
    </div>
  );
}
