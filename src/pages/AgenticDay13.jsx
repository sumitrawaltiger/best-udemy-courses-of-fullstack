import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SKLEARN_TEXT = 'https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction';
const NLP_YT = 'https://www.youtube.com/watch?v=8d2jGY1w0PE';

const LEARNT_TODAY = [
  { title: 'NLP', text: 'Natural Language Processing — teach machines to work with human language (text & speech)' },
  { title: 'Tokenization', text: 'split text into words or subwords — the first step in almost every text pipeline' },
  { title: 'Stemming & lemmatization', text: 'reduce words to a base form (running → run) so “runs/ran/running” group together' },
  { title: 'Bag of Words', text: 'count how often each word appears — simple, sparse, ignores order' },
  { title: 'TF-IDF', text: 'weights rare-but-important words higher than common words like “the”' },
  { title: 'Word embeddings', text: 'Word2Vec / GloVe put similar words close in vector space — dense meaning, not counts' },
  { title: 'NER & POS', text: 'Named Entity Recognition finds people/places; POS tagging labels nouns, verbs, etc.' },
  { title: 'Phase 2 starts', text: 'Days 13–16 move from Python foundations into ML & NLP for Gen AI' },
];

const PREPROCESS = [
  {
    icon: '✂️', title: 'Tokenize & Normalize', titleClass: 'card-title-cyan', subtitle: 'Prep Text',
    description:
      'Lowercase, strip punctuation, tokenize, then stem or lemmatize. Clean input beats a fancy model on dirty text.',
    code: 'text = "Running agents solve tasks."\ntokens = text.lower().split()\n# later: stem / lemmatize each token',
  },
  {
    icon: '📦', title: 'BoW & TF-IDF', titleClass: 'card-title-purple', subtitle: 'Classic Vectors',
    description:
      'Turn documents into numeric vectors for classical ML. TF-IDF usually beats raw counts for search and classification.',
    code: 'from sklearn.feature_extraction.text import TfidfVectorizer\nvec = TfidfVectorizer()\nX = vec.fit_transform(docs)',
  },
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-amber', subtitle: 'Meaning Space',
    description:
      'Word2Vec and GloVe learn dense vectors where “king” is near “queen”. Later days reuse this idea for RAG.',
    code: '# similar words → nearby vectors\n# king - man + woman ≈ queen',
  },
];

const PRACTICE = [
  {
    icon: '🏷️', title: 'NER & POS', titleClass: 'card-title-cyan', subtitle: 'Structure',
    description:
      'Label entities (PERSON, ORG, LOC) and parts of speech so downstream agents can extract facts from sentences.',
    code: '# "Ashok IT is in Hyderabad"\n# ORG=Ashok IT · LOC=Hyderabad',
  },
  {
    icon: '🧪', title: 'Tiny Pipeline', titleClass: 'card-title-purple', subtitle: 'Hands-On',
    description:
      'Take 10 short reviews → clean → TF-IDF → train a simple classifier. Feel the full ML-for-text loop.',
    code: 'clean → vectorize → train\n→ predict sentiment',
  },
  {
    icon: '🔜', title: 'Next: Deep Learning NLP', titleClass: 'card-title-amber', subtitle: 'Day 14 Preview',
    description: 'Tomorrow — neural nets for text, training pipelines, loss, and GPU basics.',
    link: { href: '/agentic-day-14', label: 'Go to Day 14 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'ML for NLP', titleClass: 'card-title-cyan', subtitle: 'PY Module 13',
    description: 'Full lesson — tokenization, vectorization, embeddings, NER & POS.',
    link: { href: '/python/learn/machine-learning-for-nlp', label: 'Open PY Module 13 →' },
  },
  {
    icon: '📖', title: 'Text Features', titleClass: 'card-title-purple', subtitle: 'scikit-learn',
    description: 'Official guide to CountVectorizer and TfidfVectorizer.',
    link: { href: SKLEARN_TEXT, label: 'Open sklearn text docs →', external: true },
  },
  {
    icon: '🎬', title: 'NLP with Python', titleClass: 'card-title-amber', subtitle: 'Video',
    description: 'freeCodeCamp NLP overview to reinforce today’s concepts.',
    link: { href: NLP_YT, label: 'Watch NLP intro →', external: true },
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

export default function AgenticDay13() {
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
          <Link to="/agentic-day-12" className="day001-nav-btn day001-nav-prev">← Day 12</Link>
          <p className="day001-datetime">Agentic AI Day 13 · 6 Sep 2026</p>
          <Link to="/agentic-day-14" className="day001-nav-btn day001-nav-next">Day 14 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 2</span><span>NLP</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 13 <span aria-hidden="true">📝</span></h1>
              <p className="day001-day-theme">MACHINE LEARNING FOR NLP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 2</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '9%' }} /></div>

        <p className="day001-summary">
          Phase 2 begins. Turn text into numbers with <strong>tokenization</strong>,{' '}
          <strong>TF-IDF</strong>, and <strong>embeddings</strong> — the classical ML toolkit for NLP.
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

        <CardSection icon="✂️" title="TEXT → VECTORS" cards={PREPROCESS} columns={3} />
        <CardSection icon="🏷️" title="STRUCTURE &amp; PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#NLP</span><span>#Day13</span><span>#TFIDF</span><span>#Embeddings</span>
        </footer>
      </div>
    </div>
  );
}
