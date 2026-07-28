import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EMBED = 'https://developers.google.com/machine-learning/crash-course/embeddings';
const WORD2VEC = 'https://en.wikipedia.org/wiki/Word_embedding';
const USE = 'https://www.tensorflow.org/hub/tutorials/semantic_similarity_with_tf_hub_universal_encoder';

const LEARNT_TODAY = [
  { title: 'What embeddings are', text: 'dense vectors that put similar things close in space' },
  { title: 'Why they help', text: 'tags and co-views struggle; vectors capture soft similarity' },
  { title: 'Items as vectors', text: 'courses, tasks, products → fixed-length float arrays' },
  { title: 'Users as vectors', text: 'average of liked items, or a trained user tower later' },
  { title: 'Distance = taste', text: 'cosine similarity ranks nearest neighbors for candidates' },
  { title: 'Year-1 sources', text: 'pretrained text models, or simple bag-of-tags hashed to vectors' },
  { title: 'Store them', text: 'item_embeddings(item_id, vector[], updated_at) — refresh on publish' },
  { title: 'Not magic', text: 'bad text or tiny catalogs still need rules and popularity' },
  { title: 'Days 186–190', text: 'embeddings → ANN search → A/B → serve models → ML prod milestone' },
];

const CORE = [
  {
    icon: '🧭', title: 'Vector Space', titleClass: 'card-title-cyan', subtitle: 'Geometry',
    description: 'Each item is a point. Nearby points are “alike” for retrieval and ranking.',
    code: 'item → [0.12, -0.4, …]\ndim ≈ 64–768',
  },
  {
    icon: '📝', title: 'From Text', titleClass: 'card-title-purple', subtitle: 'Content',
    description: 'Embed title + description + tags. Same model for all items keeps the space consistent.',
    code: 'text = title + " " + tags\nvec = embed(text)',
  },
  {
    icon: '👤', title: 'User Profile', titleClass: 'card-title-amber', subtitle: 'Simple',
    description: 'Mean of last N completed item vectors is a solid Year-1 user embedding.',
    code: 'user_vec = mean(liked_item_vecs)\nrecommend nearest unseen',
  },
];

const PRACTICE = [
  {
    icon: '🗄️', title: 'Table Shape', titleClass: 'card-title-cyan', subtitle: 'Postgres',
    description: 'Store vectors as float[] or JSON for MVP; specialized indexes come next day.',
    code: 'item_embeddings(\n  item_id PK, dims float[]\n)',
  },
  {
    icon: '🔄', title: 'Refresh Job', titleClass: 'card-title-purple', subtitle: 'Batch',
    description: 'Re-embed on create/update; nightly backfill for catalog drift.',
    code: '// on publish → embed\n'// nightly → catch misses',
  },
  {
    icon: '⚠️', title: 'Normalize', titleClass: 'card-title-amber', subtitle: 'Cosine',
    description: 'L2-normalize vectors so dot product equals cosine — simpler scoring.',
    code: 'v = v / ||v||\nscore = user · item',
  },
  {
    icon: '🔜', title: 'Next: ANN Search', titleClass: 'card-title-lime', subtitle: 'Day 187 Preview',
    description: 'Tomorrow: find nearest neighbors fast — brute force vs approximate indexes.',
    link: { href: '/day-187', label: 'Go to Day 187 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'Crash course module on embeddings.',
    link: { href: EMBED, label: 'Read embeddings →', external: true },
  },
  {
    icon: '📚', title: 'Word Embeddings', titleClass: 'card-title-purple', subtitle: 'Overview',
    description: 'Background on vector representations.',
    link: { href: WORD2VEC, label: 'Read Wikipedia overview →', external: true },
  },
  {
    icon: '🔗', title: 'Semantic Similarity', titleClass: 'card-title-amber', subtitle: 'Tutorial',
    description: 'Hands-on similarity with sentence encoders.',
    link: { href: USE, label: 'Open TF Hub tutorial →', external: true },
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

export default function Day186() {
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
          <Link to="/day-185" className="day001-nav-btn day001-nav-prev">← Day 185</Link>
          <p className="day001-datetime">ML Day 186 · 5 Jul 2027</p>
          <Link to="/day-187" className="day001-nav-btn day001-nav-next">Day 187 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Embeddings</span><span>Vectors</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 186 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">EMBEDDINGS BASICS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">ML · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 186 opens the next ML stretch. Learn <strong>embeddings</strong> — dense vectors that put
          similar items close so you can retrieve by <strong>similarity</strong>, not only tags.
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

        <CardSection icon="🧭" title="1 · VECTORS" cards={CORE} columns={3} />
        <CardSection icon="🗄️" title="2 · YEAR-1 STORE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Embeddings</span><span>#ML</span><span>#Vectors</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
