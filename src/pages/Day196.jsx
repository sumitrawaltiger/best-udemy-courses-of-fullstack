import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FAIR = 'https://developers.google.com/machine-learning/recommendation/overview/fairness';
const BIAS = 'https://developers.google.com/machine-learning/crash-course/fairness/video-lecture';
const RESP = 'https://pair.withgoogle.com/guidebook';

const LEARNT_TODAY = [
  { title: 'Why fairness', text: 'recs shape opportunity — who gets seen, hired-prep paths, or paid slots' },
  { title: 'Harms to watch', text: 'under-representation, stereotypes, unsafe content, filter bubbles' },
  { title: 'Provider vs consumer', text: 'fair to creators (exposure) and fair to users (useful, not harmful)' },
  { title: 'Measure first', text: 'slice CTR/exposure by group before “fixing” with vibes' },
  { title: 'Data bias', text: 'historical clicks encode past inequity — models copy it unless you intervene' },
  { title: 'Product levers', text: 'caps, quotas, blocked lists, editorial shelves beat opaque math alone' },
  { title: 'Year-1 bar', text: 'document groups you care about; dashboard exposure; add simple constraints' },
  { title: 'Trade-offs', text: 'fairness can lower raw CTR — say the goal out loud to stakeholders' },
  { title: 'Days 196–200', text: 'fairness → multi-obj → diversity → eval gap → Day 200 ML milestone' },
];

const CORE = [
  {
    icon: '⚖️', title: 'Two Sides', titleClass: 'card-title-cyan', subtitle: 'Stakeholders',
    description: 'Users deserve safe, useful lists. Providers deserve a chance to be discovered.',
    code: 'consumer fairness\nprovider exposure',
  },
  {
    icon: '📊', title: 'Slice Metrics', titleClass: 'card-title-purple', subtitle: 'Measure',
    description: 'Track impression share and CTR by cohort (locale, category, creator size).',
    code: 'exposure% by group\nCTR by group',
  },
  {
    icon: '🛡️', title: 'Hard Guards', titleClass: 'card-title-amber', subtitle: 'Policy',
    description: 'Block unsafe items; enforce age/region rules before any model score.',
    code: '// filter blocked\n'// then rank',
  },
];

const PRACTICE = [
  {
    icon: '📝', title: 'Fairness Spec', titleClass: 'card-title-cyan', subtitle: 'Doc',
    description: 'One page: protected attributes you will not use, groups you monitor, kill criteria.',
    code: 'do_not_use: …\nmonitor: …\nescalate: …',
  },
  {
    icon: '🎚️', title: 'Exposure Caps', titleClass: 'card-title-purple', subtitle: 'Constraint',
    description: 'Limit how often one creator/category can own the top slots per day.',
    code: 'max_share(creator) ≤ X%\nmax_share(cat) ≤ Y%',
  },
  {
    icon: '👁️', title: 'Human Review', titleClass: 'card-title-amber', subtitle: 'QA',
    description: 'Weekly sample shelves for stereotype and safety issues metrics miss.',
    code: '// 20 random users\n'// flag weird lists',
  },
  {
    icon: '🔜', title: 'Next: Multi-Obj', titleClass: 'card-title-lime', subtitle: 'Day 197 Preview',
    description: 'Tomorrow: optimize more than CTR — quality, diversity, and business goals together.',
    link: { href: '/day-197', label: 'Go to Day 197 →' },
  },
];

const RESOURCES = [
  {
    icon: '⚖️', title: 'Recsys Fairness', titleClass: 'card-title-cyan', subtitle: 'Google',
    description: 'Fairness overview for recommenders.',
    link: { href: FAIR, label: 'Read recsys fairness →', external: true },
  },
  {
    icon: '📘', title: 'ML Fairness', titleClass: 'card-title-purple', subtitle: 'MLCC',
    description: 'Crash course fairness module.',
    link: { href: BIAS, label: 'Open fairness lecture →', external: true },
  },
  {
    icon: '🧭', title: 'PAIR Guidebook', titleClass: 'card-title-amber', subtitle: 'People + AI',
    description: 'Practical people-centered AI guidance.',
    link: { href: RESP, label: 'Open PAIR guidebook →', external: true },
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

export default function Day196() {
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
          <Link to="/day-195" className="day001-nav-btn day001-nav-prev">← Day 195</Link>
          <p className="day001-datetime">ML Day 196</p>
          <Link to="/day-197" className="day001-nav-btn day001-nav-next">Day 197 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Fairness</span><span>Ethics</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 196 <span aria-hidden="true">⚖️</span></h1>
              <p className="day001-day-theme">FAIRNESS IN RECOMMENDATIONS</p>
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
          Day 196 opens the ethics stretch. Treat <strong>fairness</strong> as product work — measure
          exposure by group, add <strong>guards</strong>, and document what you will not optimize.
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

        <CardSection icon="⚖️" title="1 · FAIRNESS BASICS" cards={CORE} columns={3} />
        <CardSection icon="📝" title="2 · YEAR-1 ACTIONS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Fairness</span><span>#RecSys</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
