import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture08';
const EMBED_DOCS = 'https://ai.google.dev/gemini-api/docs/embeddings';

const LEARNT_TODAY = [
  { title: 'The RAG foundation begins', text: 'to make the AI answer from your own data, it first needs to understand meaning — that starts with embeddings' },
  { title: 'What an embedding is', text: 'a piece of text turned into a vector — a long list of numbers that captures its meaning' },
  { title: 'Meaning becomes geometry', text: 'text with similar meaning maps to vectors that sit close together in space' },
  { title: 'Dimensions', text: 'each vector has hundreds of dimensions, each encoding some semantic feature of the text' },
  { title: 'Not keywords', text: 'embeddings capture meaning, so "car" and "automobile" land near each other even with no shared letters' },
  { title: 'Generate with Gemini', text: 'the SDK turns any text into an embedding with a single call — ai.models.embedContent' },
  { title: 'The building block', text: 'search, clustering, recommendations and RAG are all built on top of embeddings' },
];

const WHY = [
  {
    icon: '🧩', title: 'The Meaning Problem', titleClass: 'card-title-cyan', subtitle: 'Computers See Text',
    description:
      'A computer only sees characters, not meaning. To let the AI find information related to a question, we need a way to represent what text means as something a machine can compare.',
    code: '// "How do I reset my password?"\n// vs "I forgot my login" → same meaning, different words\n// computers need to see that they are close',
  },
  {
    icon: '🔢', title: 'Text → Vector', titleClass: 'card-title-purple', subtitle: 'The Embedding',
    description:
      'An embedding model converts a string into a vector — a fixed-length list of numbers. That vector is a coordinate in a high-dimensional "meaning space".',
    code: '"hello world"  →  [0.021, -0.44, 0.13, 0.88, ...]\n// hundreds of numbers = one point in meaning space',
  },
  {
    icon: '📍', title: 'Close = Similar', titleClass: 'card-title-amber', subtitle: 'Meaning As Geometry',
    description:
      'The key property: texts that mean similar things get vectors that are near each other. Distance between vectors becomes a measure of semantic similarity.',
    code: '// vec("king")  ≈ near vec("queen")\n// vec("car")   ≈ near vec("automobile")\n// vec("banana") ≈ far from vec("database")',
  },
];

const HOW = [
  {
    icon: '⚡', title: 'Generate An Embedding', titleClass: 'card-title-cyan', subtitle: 'ai.models.embedContent',
    description:
      'The Gemini SDK produces an embedding for any text in one call. Store the returned vector and you can compare it against others later.',
    code: 'const res = await ai.models.embedContent({\n  model: "text-embedding-004",\n  contents: "How do I reset my password?",\n});\nconst vector = res.embeddings[0].values; // number[]',
  },
  {
    icon: '📐', title: 'Fixed Length', titleClass: 'card-title-purple', subtitle: 'Same Size Always',
    description:
      'Every embedding from a given model has the same number of dimensions, no matter the input length. That uniform shape is what makes vectors comparable.',
    code: '// a word, a sentence, a paragraph →\n// all become a vector of the SAME length\n// e.g. 768 numbers each',
  },
  {
    icon: '🧱', title: 'Everything Builds On This', titleClass: 'card-title-amber', subtitle: 'The Base Layer',
    description:
      'Once text is a vector, you can search by meaning, group similar items, recommend, and — the goal of this stretch — do RAG. Embeddings are the base layer for all of it.',
    footer: 'embeddings → search → vector DB → RAG',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 08', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The embeddings lecture and its diagram in the STRIKE GenAI repo — the conceptual foundation for the RAG lectures ahead.',
    link: { href: GH_LECTURE, label: 'Open Lecture 08 →', external: true },
  },
  {
    icon: '📘', title: 'Gemini Embeddings', titleClass: 'card-title-purple', subtitle: 'Docs',
    description:
      'Google’s embeddings guide — models, dimensions, task types, and how to generate vectors from the API.',
    link: { href: EMBED_DOCS, label: 'Read embeddings docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Semantic Search', titleClass: 'card-title-amber', subtitle: 'Day 9 Preview',
    description:
      'Tomorrow uses these vectors — Lecture 09 on semantic search: embed a query and your documents, then find the closest matches by meaning.',
    link: { href: '/day-009', label: 'Go to Day 9 →' },
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

export default function Day008() {
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
          <Link to="/day-007" className="day001-nav-btn day001-nav-prev">← Day 7</Link>
          <p className="day001-datetime">Agentic AI Day 8</p>
          <Link to="/day-009" className="day001-nav-btn day001-nav-next">Day 9 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 08</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 8 <span aria-hidden="true">🔢</span></h1>
              <p className="day001-day-theme">EMBEDDINGS — MEANING AS NUMBERS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '8%' }} /></div>

        <p className="day001-summary">
          Lecture 08 starts the <strong>RAG foundation</strong>. An <strong>embedding</strong> turns text into a{' '}
          <strong>vector</strong> — a long list of numbers that captures its <strong>meaning</strong>. The magic
          property: text that means similar things maps to vectors that sit <strong>close together</strong>, so{' '}
          <code>vec("car")</code> lands near <code>vec("automobile")</code> even with no shared letters. Every
          embedding from a model has the same fixed length, which is what makes them comparable, and{' '}
          <code>ai.models.embedContent</code> generates one in a single call. <em>This is the base layer for
          search, vector DBs and RAG.</em>
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

        <CardSection icon="🧩" title="WHY EMBEDDINGS" cards={WHY} columns={3} />
        <CardSection icon="⚡" title="GENERATING & USING THEM" cards={HOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#Embeddings</span><span>#CoderArmy</span><span>#RAG</span>
        </footer>
      </div>
    </div>
  );
}
