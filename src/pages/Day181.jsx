import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RECSYS = 'https://developers.google.com/machine-learning/recommendation';
const TYPES = 'https://en.wikipedia.org/wiki/Recommender_system';
const EVAL = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';

const LEARNT_TODAY = [
  { title: 'What recommendations are', text: 'suggest items a user is likely to want next — courses, tasks, products' },
  { title: 'Why they matter', text: 'discovery without forcing users to search everything' },
  { title: 'Signals', text: 'views, clicks, completes, ratings, follows — explicit and implicit feedback' },
  { title: 'Cold start', text: 'new users/items have little history — need popular or content fallbacks' },
  { title: 'Candidate → rank', text: 'retrieve a pool, then score/order for the final list' },
  { title: 'Offline vs online', text: 'train/evaluate offline; serve low-latency lists online' },
  { title: 'Year-1 start', text: 'popular + similar-items rules beat a half-trained neural net' },
  { title: 'Ethics', text: 'filter unsafe content; avoid amplifying harmful engagement loops' },
  { title: 'Days 181–185', text: 'recsys intro → CF vs content → features → serve API → ML milestone' },
];

const CORE = [
  {
    icon: '🎯', title: 'Problem Shape', titleClass: 'card-title-cyan', subtitle: 'User → Items',
    description: 'Given user u and context, return top-K item ids with scores.',
    code: 'GET /recommendations?limit=10\n→ [{ id, score, reason }]',
  },
  {
    icon: '📡', title: 'Feedback Types', titleClass: 'card-title-purple', subtitle: 'Signals',
    description: 'Explicit: stars, likes. Implicit: clicks, dwell, completes — noisier but plentiful.',
    code: '// explicit: rating 1–5\n// implicit: opened, finished',
  },
  {
    icon: '🧊', title: 'Cold Start', titleClass: 'card-title-amber', subtitle: 'Fallback',
    description: 'New user → trending / editorial. New item → content tags until interactions exist.',
    code: '// if interactions < N → popular\n'// else → personalized',
  },
];

const PRACTICE = [
  {
    icon: '🪜', title: 'Two Stages', titleClass: 'card-title-cyan', subtitle: 'Retrieve + Rank',
    description: 'Cheap retrieval (similar, popular) then a ranker that uses more features.',
    code: 'candidates (100) → rank → top 10',
  },
  {
    icon: '📏', title: 'Simple Metrics', titleClass: 'card-title-purple', subtitle: 'Eval',
    description: 'Precision@K, recall@K, and “did they click the first screen?” for Year-1.',
    code: '// Precision@10\n'// CTR on rec shelf',
  },
  {
    icon: '⚖️', title: 'Business Rules', titleClass: 'card-title-amber', subtitle: 'Guards',
    description: 'Deduplicate, exclude owned items, apply age/region policy before return.',
    code: '// filter seen · filter blocked\n'// boost new if needed',
  },
  {
    icon: '🔜', title: 'Next: CF vs Content', titleClass: 'card-title-lime', subtitle: 'Day 182 Preview',
    description: 'Tomorrow: collaborative filtering vs content-based — when to use each.',
    link: { href: '/day-182', label: 'Go to Day 182 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Google Recsys', titleClass: 'card-title-cyan', subtitle: 'Course',
    description: 'Recommendation systems crash course.',
    link: { href: RECSYS, label: 'Read Google recsys →', external: true },
  },
  {
    icon: '📚', title: 'Recommender Systems', titleClass: 'card-title-purple', subtitle: 'Overview',
    description: 'Types and history of recommenders.',
    link: { href: TYPES, label: 'Read Wikipedia overview →', external: true },
  },
  {
    icon: '🪜', title: 'Candidate Generation', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Retrieve then rank mental model.',
    link: { href: EVAL, label: 'Read candidate gen →', external: true },
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

export default function Day181() {
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
          <Link to="/day-180" className="day001-nav-btn day001-nav-prev">← Day 180</Link>
          <p className="day001-datetime">ML Day 181</p>
          <Link to="/day-182" className="day001-nav-btn day001-nav-next">Day 182 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Recommendations</span><span>Product</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 181 <span aria-hidden="true">🎯</span></h1>
              <p className="day001-day-theme">RECOMMENDATION SYSTEMS INTRO</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Day 181 opens personalization. Learn <strong>signals</strong>, <strong>cold start</strong>, and
          the <strong>retrieve → rank</strong> pattern — start simple before deep models.
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

        <CardSection icon="🎯" title="1 · THE PROBLEM" cards={CORE} columns={3} />
        <CardSection icon="🪜" title="2 · PIPELINE & EVAL" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#RecSys</span><span>#ML</span><span>#Product</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
