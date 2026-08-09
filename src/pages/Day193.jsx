import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TWOTOWER = 'https://research.google/pubs/pub48840/';
const RETRIEVAL = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';
const EMBED = 'https://developers.google.com/machine-learning/crash-course/embeddings';

const LEARNT_TODAY = [
  { title: 'Two towers', text: 'one network embeds users; another embeds items — score ≈ dot product' },
  { title: 'Why split', text: 'item vectors can be precomputed; user vector computed at request time' },
  { title: 'Retrieval fit', text: 'precompute item embeddings → ANN index → nearest to user vector' },
  { title: 'Training signal', text: 'pull user close to items they engaged; push away negatives' },
  { title: 'Vs single tower', text: 'crossing all user×item features every time does not scale for retrieve' },
  { title: 'Year-1 bridge', text: 'mean of liked item embeds is a “user tower”; learn a real one later' },
  { title: 'Freshness', text: 're-index item tower outputs when catalog or model version changes' },
  { title: 'Still rank after', text: 'two-tower often retrieves; a richer ranker can reorder the top-K' },
  { title: 'Serve cost', text: 'user tower must be fast online; item tower is mostly offline' },
];

const CORE = [
  {
    icon: '🏛️', title: 'Architecture', titleClass: 'card-title-cyan', subtitle: 'Split',
    description: 'User tower(features_u) → u. Item tower(features_i) → i. Similarity = u · i.',
    code: 'u = UserTower(xu)\ni = ItemTower(xi)\nscore = u · i',
  },
  {
    icon: '📦', title: 'Offline Items', titleClass: 'card-title-purple', subtitle: 'Batch',
    description: 'Run item tower over the catalog nightly; store vectors for ANN.',
    code: 'for item in catalog:\n  write embed(item)',
  },
  {
    icon: '⚡', title: 'Online User', titleClass: 'card-title-amber', subtitle: 'Request',
    description: 'Compute user vector from recent history + profile; query ANN.',
    code: 'u = tower(user)\nknn(u, k=100)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Contrastive Idea', titleClass: 'card-title-cyan', subtitle: 'Train',
    description: 'Positive = clicked/completed item; negatives = random or in-batch hard negatives.',
    code: '// maximize u·i+\n'// minimize u·i-',
  },
  {
    icon: '🪜', title: 'Retrieve Then Rank', titleClass: 'card-title-purple', subtitle: 'Stack',
    description: 'Two-tower for candidates; LTR model with more features for final order.',
    code: 'tower ANN → LTR top 10',
  },
  {
    icon: '🔄', title: 'Version Lock', titleClass: 'card-title-amber', subtitle: 'Ops',
    description: 'User and item towers must be the same trained version or spaces misalign.',
    code: 'model_id = towers-v4\nboth sides same id',
  },
  {
    icon: '🔜', title: 'Next: Feedback', titleClass: 'card-title-lime', subtitle: 'Day 194 Preview',
    description: 'Tomorrow: feedback loops — how live clicks retrain and can reinforce bias.',
    link: { href: '/day-194', label: 'Go to Day 194 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏛️', title: 'Two-Tower Paper', titleClass: 'card-title-cyan', subtitle: 'Google',
    description: 'Sampling-bias-corrected neural retrieval (two-tower style).',
    link: { href: TWOTOWER, label: 'Open research pub →', external: true },
  },
  {
    icon: '🪜', title: 'Candidate Gen', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Retrieval stage in recommendation systems.',
    link: { href: RETRIEVAL, label: 'Read candidate gen →', external: true },
  },
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-amber', subtitle: 'MLCC',
    description: 'Vector foundations behind towers.',
    link: { href: EMBED, label: 'Read embeddings →', external: true },
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

export default function Day193() {
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
          <Link to="/day-192" className="day001-nav-btn day001-nav-prev">← Day 192</Link>
          <p className="day001-datetime">ML Day 193 · 16 Dec 2027</p>
          <Link to="/day-194" className="day001-nav-btn day001-nav-next">Day 194 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Two-Tower</span><span>Retrieval</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 193 <span aria-hidden="true">🏛️</span></h1>
              <p className="day001-day-theme">TWO-TOWER MODELS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Day 193 scales retrieval. <strong>Two-tower</strong> models embed users and items apart so
          you can <strong>precompute</strong> items and query with ANN at request time.
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

        <CardSection icon="🏛️" title="1 · TWO TOWERS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · TRAIN & SERVE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TwoTower</span><span>#Retrieval</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
