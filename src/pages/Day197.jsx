import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MULTI = 'https://en.wikipedia.org/wiki/Multi-objective_optimization';
const RANK = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';
const PROD = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';

const LEARNT_TODAY = [
  { title: 'CTR is not enough', text: 'clicks ≠ learning, retention, or revenue — pick what the product wants' },
  { title: 'Multi-objective', text: 'optimize several goals at once: relevance, quality, diversity, business' },
  { title: 'Conflicts', text: 'max CTR can hurt long-term completes or push clickbait' },
  { title: 'Weighted score', text: 'Year-1: linear blend of sub-scores with tunable weights' },
  { title: 'Constraints', text: 'hard rules (safety, caps) first; soft scores second' },
  { title: 'Stakeholder input', text: 'product/ops set weights — ML owns the pipeline, not the values alone' },
  { title: 'Pareto thinking', text: 'you rarely max all goals; you choose an acceptable trade-off curve' },
  { title: 'Log each term', text: 'store relevance, quality, diversity parts so you can debug the blend' },
  { title: 'A/B the weights', text: 'treat weight configs like model versions — experiment carefully' },
];

const CORE = [
  {
    icon: '🎯', title: 'Goal Stack', titleClass: 'card-title-cyan', subtitle: 'Examples',
    description: 'Relevance (will engage), quality (will finish), business (margin), fairness (exposure).',
    code: 'rel · quality · biz\n· diversity · fair',
  },
  {
    icon: '🧮', title: 'Blend MVP', titleClass: 'card-title-purple', subtitle: 'Formula',
    description: 'score = Σ w_k * s_k after min-max or z-score normalizing each s_k.',
    code: 'score = 0.5*rel + 0.3*qual\n     + 0.2*div',
  },
  {
    icon: '🧱', title: 'Constraints First', titleClass: 'card-title-amber', subtitle: 'Order',
    description: 'Filter blocked/unsafe; enforce caps; then sort by blended score.',
    code: 'filter → caps → blend sort',
  },
];

const PRACTICE = [
  {
    icon: '📋', title: 'Score Card', titleClass: 'card-title-cyan', subtitle: 'Design',
    description: 'Write each objective, owner, how it is computed, and default weight.',
    code: 'obj | owner | formula | w',
  },
  {
    icon: '🧪', title: 'Weight Config', titleClass: 'card-title-purple', subtitle: 'Version',
    description: 'Ship weights as config (not hardcoded). Canary a new blend like a model.',
    code: 'weights_v3.json\nflag: blend_version',
  },
  {
    icon: '📉', title: 'Guard Metrics', titleClass: 'card-title-amber', subtitle: 'Watch',
    description: 'If completes drop while CTR rises, your blend is rewarding junk engagement.',
    code: 'CTR ↑ but complete ↓\n→ rebalance weights',
  },
  {
    icon: '🔜', title: 'Next: Diversity', titleClass: 'card-title-lime', subtitle: 'Day 198 Preview',
    description: 'Tomorrow: diversity and serendipity — stop showing ten near-duplicates.',
    link: { href: '/day-198', label: 'Go to Day 198 →' },
  },
];

const RESOURCES = [
  {
    icon: '🎯', title: 'Multi-Objective', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'Background on optimizing multiple goals.',
    link: { href: MULTI, label: 'Read multi-objective →', external: true },
  },
  {
    icon: '🪜', title: 'Retrieve & Rank', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Where ranking objectives sit in the pipeline.',
    link: { href: RANK, label: 'Read retrieve & rank →', external: true },
  },
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-amber', subtitle: 'Systems',
    description: 'Shipping and monitoring multi-metric systems.',
    link: { href: PROD, label: 'Read production ML →', external: true },
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

export default function Day197() {
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
          <Link to="/day-196" className="day001-nav-btn day001-nav-prev">← Day 196</Link>
          <p className="day001-datetime">ML Day 197</p>
          <Link to="/day-198" className="day001-nav-btn day001-nav-next">Day 198 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Multi-Obj</span><span>Product</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 197 <span aria-hidden="true">🎯</span></h1>
              <p className="day001-day-theme">MULTI-OBJECTIVE RANKING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '54%' }} /></div>

        <p className="day001-summary">
          Day 197 ranks for more than clicks. Blend <strong>relevance</strong>, <strong>quality</strong>,
          and business goals — with constraints first and weights you can A/B.
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

        <CardSection icon="🎯" title="1 · MANY GOALS" cards={CORE} columns={3} />
        <CardSection icon="📋" title="2 · SHIP THE BLEND" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#MultiObjective</span><span>#Ranking</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
