import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture09';

const LEARNT_TODAY = [
  { title: 'Keyword search breaks', text: 'matching exact words misses meaning — a search for "automobile" would skip a doc that says "car"' },
  { title: 'Brute force is slow', text: 'scanning every document word by word does not scale as data grows' },
  { title: 'Search by meaning', text: 'embed the query and the documents, then compare vectors instead of matching text' },
  { title: 'Cosine similarity', text: 'measure the angle between two vectors — closer angle means more similar meaning' },
  { title: 'Nearest neighbour', text: 'rank documents by similarity and take the top-K closest to the query' },
  { title: 'This is retrieval', text: 'semantic search is the "R" in RAG — it fetches the most relevant chunks to feed the model' },
  { title: 'Query and data share a space', text: 'because both are embedded by the same model, their vectors live in the same meaning space' },
];

const PROBLEM = [
  {
    icon: '🔎', title: 'Keyword Search Fails', titleClass: 'card-title-cyan', subtitle: 'Exact Words Only',
    description:
      'Classic search matches literal words. Ask for "how to fix a login error" and it can miss a doc titled "resolving authentication issues" — same meaning, zero shared keywords.',
    code: '// query:   "fix login error"\n// keyword: misses "resolve authentication problem"\n// → relevant answer never surfaces',
  },
  {
    icon: '🐌', title: 'And It Does Not Scale', titleClass: 'card-title-purple', subtitle: 'Brute Force',
    description:
      'Scanning every document for matches gets slower as your data grows. We need a way to find the most relevant items by meaning, quickly.',
    code: '// checking every document, one by one\n// fine for 10 docs, hopeless for 10 million',
  },
];

const SEMANTIC = [
  {
    icon: '🧭', title: 'Embed Both Sides', titleClass: 'card-title-cyan', subtitle: 'Same Meaning Space',
    description:
      'Turn the documents into vectors ahead of time, and embed the user’s query the same way. Now finding relevant text is a geometry problem, not a text-matching one.',
    code: '// once: embed every document → store the vectors\nconst docVecs = docs.map(embed);\n// per query: embed the question\nconst qVec = embed("fix login error");',
  },
  {
    icon: '📐', title: 'Cosine Similarity', titleClass: 'card-title-purple', subtitle: 'How Close?',
    description:
      'Compare two vectors by the cosine of the angle between them: 1 means identical direction (very similar), 0 means unrelated. It is the standard similarity score for embeddings.',
    code: 'function cosine(a, b) {\n  const dot = a.reduce((s, v, i) => s + v * b[i], 0);\n  const mag = v => Math.hypot(...v);\n  return dot / (mag(a) * mag(b)); // 1 = same, 0 = unrelated\n}',
  },
  {
    icon: '🏆', title: 'Top-K Retrieval', titleClass: 'card-title-amber', subtitle: 'The R In RAG',
    description:
      'Score the query against every document vector, sort by similarity, and take the best few. Those top-K chunks are exactly what a RAG system feeds back to the model.',
    code: 'const ranked = docs\n  .map((d, i) => ({ d, score: cosine(qVec, docVecs[i]) }))\n  .sort((a, b) => b.score - a.score);\nconst topK = ranked.slice(0, 3); // most relevant chunks',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 09', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The semantic search lecture and diagram in the STRIKE GenAI repo — embeddings put to work as retrieval.',
    link: { href: GH_LECTURE, label: 'Open Lecture 09 →', external: true },
  },
  {
    icon: '🧠', title: 'Why It Matters', titleClass: 'card-title-purple', subtitle: 'Retrieval',
    description:
      'Semantic search is the retrieval half of RAG. Get this right and the model can answer from your own documents, not just its training data.',
    footer: 'query → embed → similarity → top-K chunks',
  },
  {
    icon: '🔜', title: 'Next: Vector Databases', titleClass: 'card-title-amber', subtitle: 'Day 10 Preview',
    description:
      'Tomorrow scales this up — Lecture 10 on vector databases: store millions of embeddings and query the nearest neighbours fast, instead of looping in memory.',
    link: { href: '/genai-day-10', label: 'Go to Day 10 →' },
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

export default function GenaiDay09() {
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
          <Link to="/genai-day-8" className="day001-nav-btn day001-nav-prev">← Day 8</Link>
          <p className="day001-datetime">Agentic AI Day 9</p>
          <Link to="/genai-day-10" className="day001-nav-btn day001-nav-next">Day 10 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 09</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 9 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">SEMANTIC SEARCH — FINDING BY MEANING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '9%' }} /></div>

        <p className="day001-summary">
          Lecture 09 puts embeddings to work. <strong>Keyword search</strong> matches exact words, so it misses
          meaning and does not scale. <strong>Semantic search</strong> fixes both: embed the <strong>query</strong>{' '}
          and the <strong>documents</strong> with the same model, then compare vectors with{' '}
          <strong>cosine similarity</strong> (1 = same meaning, 0 = unrelated). Rank every document by score and take
          the <strong>top-K</strong> closest — those most-relevant chunks are the <strong>retrieval</strong> step,
          the <strong>R in RAG</strong>. <em>Finding information becomes geometry.</em>
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

        <CardSection icon="🔎" title="WHY KEYWORD SEARCH BREAKS" cards={PROBLEM} columns={2} />
        <CardSection icon="🧭" title="SEARCH BY MEANING" cards={SEMANTIC} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#SemanticSearch</span><span>#CoderArmy</span><span>#RAG</span>
        </footer>
      </div>
    </div>
  );
}
