import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LTR = 'https://en.wikipedia.org/wiki/Learning_to_rank';
const RANK = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';
const MLCC = 'https://developers.google.com/machine-learning/crash-course';

const LEARNT_TODAY = [
  { title: 'Ranking vs retrieve', text: 'candidates find the pool; ranking orders the final top-K for the shelf' },
  { title: 'Learning to rank', text: 'train a model to score (user, item, context) so better items rise' },
  { title: 'Labels', text: 'clicks, completes, dwell — turn behavior into training targets' },
  { title: 'Features in', text: 'user, item, and pair features feed the ranker (Day 183 style)' },
  { title: 'Score out', text: 'one number per candidate; sort descending; apply business filters' },
  { title: 'Year-1 ranker', text: 'weighted linear score or small gradient-boosted tree beats random deep nets' },
  { title: 'Offline first', text: 'train and validate on logged data before touching live traffic' },
  { title: 'Still two-stage', text: 'ANN/popular retrieve ~100; LTR ranks those — do not score the whole catalog' },
  { title: 'Days 191–195', text: 'LTR intro → loss types → two-tower → feedback loops → ranking milestone' },
];

const CORE = [
  {
    icon: '🪜', title: 'Two-Stage Reminder', titleClass: 'card-title-cyan', subtitle: 'Pipeline',
    description: 'Retrieve cheaply, then spend compute on a richer ranker over a small set.',
    code: 'candidates (100)\n→ ranker → top 10',
  },
  {
    icon: '🎯', title: 'LTR Goal', titleClass: 'card-title-purple', subtitle: 'Order',
    description: 'Given a query/user, learn an order that puts relevant items higher.',
    code: 'score(u, i, ctx) → sort\nlabel = clicked?',
  },
  {
    icon: '🧾', title: 'Training Row', titleClass: 'card-title-amber', subtitle: 'Example',
    description: 'One row per impression: features + label + position (for bias later).',
    code: '{ user_f, item_f, pair_f,\n  label, position }',
  },
];

const PRACTICE = [
  {
    icon: '🧮', title: 'Linear MVP', titleClass: 'card-title-cyan', subtitle: 'Ship Fast',
    description: 'Hand weights or logistic regression on a few features — explainable and debuggable.',
    code: 'score = w·features\n// or sigmoid for CTR',
  },
  {
    icon: '🌳', title: 'Tree Next', titleClass: 'card-title-purple', subtitle: 'When Ready',
    description: 'Gradient-boosted trees handle nonlinear feature mixes without a GPU farm.',
    code: '// XGBoost / LightGBM\n'// rank or binary label',
  },
  {
    icon: '⚠️', title: 'Position Bias', titleClass: 'card-title-amber', subtitle: 'Trap',
    description: 'Top slots get more clicks. Do not treat raw clicks as pure relevance.',
    code: '// log position\n'// debias later',
  },
  {
    icon: '🔜', title: 'Next: Loss Types', titleClass: 'card-title-lime', subtitle: 'Day 192 Preview',
    description: 'Tomorrow: pointwise, pairwise, and listwise — how the loss shapes the order.',
    link: { href: '/day-192', label: 'Go to Day 192 →' },
  },
];

const RESOURCES = [
  {
    icon: '📚', title: 'Learning to Rank', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'Wikipedia intro to LTR methods.',
    link: { href: LTR, label: 'Read LTR overview →', external: true },
  },
  {
    icon: '🪜', title: 'Retrieve & Rank', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Candidate generation and ranking mental model.',
    link: { href: RANK, label: 'Read retrieve & rank →', external: true },
  },
  {
    icon: '📘', title: 'ML Crash Course', titleClass: 'card-title-amber', subtitle: 'Google',
    description: 'Broader ML foundations for Year-1.',
    link: { href: MLCC, label: 'Open ML crash course →', external: true },
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

export default function Day191() {
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
          <Link to="/day-190" className="day001-nav-btn day001-nav-prev">← Day 190</Link>
          <p className="day001-datetime">ML Day 191 · 14 Dec 2027</p>
          <Link to="/day-192" className="day001-nav-btn day001-nav-next">Day 192 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>LTR</span><span>Ranking</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 191 <span aria-hidden="true">🎯</span></h1>
              <p className="day001-day-theme">LEARNING TO RANK INTRO</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '52%' }} /></div>

        <p className="day001-summary">
          Day 191 opens deeper ranking. <strong>Learning to rank</strong> turns logged clicks into a
          model that <strong>orders</strong> candidates — still after a cheap retrieve stage.
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

        <CardSection icon="🎯" title="1 · THE IDEA" cards={CORE} columns={3} />
        <CardSection icon="🧮" title="2 · YEAR-1 START" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#LearningToRank</span><span>#ML</span><span>#Ranking</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
