import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CF = 'https://developers.google.com/machine-learning/recommendation/collaborative/basics';
const CONTENT = 'https://developers.google.com/machine-learning/recommendation/content-based/basics';
const HYBRID = 'https://en.wikipedia.org/wiki/Recommender_system#Hybrid_recommender_systems';

const LEARNT_TODAY = [
  { title: 'Collaborative filtering', text: 'people like you also liked X — uses interaction matrix, not item text' },
  { title: 'Content-based', text: 'items similar to what you liked — tags, embeddings, categories' },
  { title: 'User-user / item-item', text: 'CF flavors: similar users vs similar items (item-item often stabler)' },
  { title: 'Pros of CF', text: 'discovers surprising taste matches without hand-built features' },
  { title: 'Cons of CF', text: 'cold start and popularity bias — hits the same viral items' },
  { title: 'Pros of content', text: 'works for new items with metadata; explainable (“because React”)' },
  { title: 'Cons of content', text: 'filter bubble — only more of the same tags' },
  { title: 'Hybrid', text: 'blend popular + content + CF scores for production shelves' },
  { title: 'Year-1 build', text: 'item-item on co-views + tag overlap is a strong MVP' },
];

const CORE = [
  {
    icon: '👥', title: 'Collaborative', titleClass: 'card-title-cyan', subtitle: 'Interactions',
    description: 'If A and B both completed courses X and Y, recommend Y to someone who finished X.',
    code: '// co-occurrence(item_i, item_j)\n'// score = shared users / norms',
  },
  {
    icon: '🏷️', title: 'Content-Based', titleClass: 'card-title-purple', subtitle: 'Metadata',
    description: 'Vectorize tags/topics; nearest neighbors to the user’s liked items.',
    code: '// user profile = avg(liked item vectors)\n'// recommend nearest unseen',
  },
  {
    icon: '🔀', title: 'Hybrid Score', titleClass: 'card-title-amber', subtitle: 'Blend',
    description: 'Weighted sum or cascade: content for new items, CF when history is rich.',
    code: 'score = 0.4*cf + 0.4*content + 0.2*popular',
  },
];

const PRACTICE = [
  {
    icon: '📊', title: 'Item-Item MVP', titleClass: 'card-title-cyan', subtitle: 'SQL-Friendly',
    description: 'Nightly job: count pairs of items completed by the same user; store top neighbors.',
    code: '// table item_sim(item_id, other_id, score)\n'// serve: neighbors of last completed',
  },
  {
    icon: '🆕', title: 'New Item Path', titleClass: 'card-title-purple', subtitle: 'Content First',
    description: 'Until enough interactions, rely on tags/category similarity.',
    code: '// if events < 50 → content only',
  },
  {
    icon: '📉', title: 'Popularity Bias', titleClass: 'card-title-amber', subtitle: 'Diversity',
    description: 'Down-rank ultra-popular items slightly so long-tail courses still surface.',
    code: '// score /= log(1 + popularity)',
  },
  {
    icon: '🔜', title: 'Next: Features', titleClass: 'card-title-lime', subtitle: 'Day 183 Preview',
    description: 'Tomorrow: features for ranking — what to log and how a feature store helps.',
    link: { href: '/day-183', label: 'Go to Day 183 →' },
  },
];

const RESOURCES = [
  {
    icon: '👥', title: 'Collaborative Filtering', titleClass: 'card-title-cyan', subtitle: 'Google',
    description: 'CF basics for recommenders.',
    link: { href: CF, label: 'Read CF basics →', external: true },
  },
  {
    icon: '🏷️', title: 'Content-Based', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Content-based recommendation basics.',
    link: { href: CONTENT, label: 'Read content-based →', external: true },
  },
  {
    icon: '🔀', title: 'Hybrid Systems', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Combining multiple recommenders.',
    link: { href: HYBRID, label: 'Read hybrid overview →', external: true },
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

export default function Day182() {
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
          <Link to="/day-181" className="day001-nav-btn day001-nav-prev">← Day 181</Link>
          <p className="day001-datetime">ML Day 182</p>
          <Link to="/day-183" className="day001-nav-btn day001-nav-next">Day 183 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>CF</span><span>Content</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 182 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">COLLABORATIVE VS CONTENT-BASED</p>
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
          Day 182 compares approaches. <strong>Collaborative filtering</strong> uses people like you;{' '}
          <strong>content-based</strong> uses item metadata — <strong>hybrid</strong> blends both for
          an MVP shelf.
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

        <CardSection icon="🔀" title="1 · TWO FAMILIES" cards={CORE} columns={3} />
        <CardSection icon="📊" title="2 · MVP TACTICS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#CollaborativeFiltering</span><span>#RecSys</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
