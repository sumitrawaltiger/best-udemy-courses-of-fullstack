import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LOOP = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';
const BIAS = 'https://developers.google.com/machine-learning/recommendation/overview/fairness';
const ONLINE = 'https://en.wikipedia.org/wiki/Online_machine_learning';

const LEARNT_TODAY = [
  { title: 'Feedback loop', text: 'model ranks → users click what they see → new data → model learns again' },
  { title: 'Amplification', text: 'popular items get more impressions → look even more “relevant”' },
  { title: 'Exploration', text: 'sometimes show lower-score items so the system can discover new winners' },
  { title: 'Position bias', text: 'top slots win clicks even if relevance is equal — log position always' },
  { title: 'Online learning', text: 'update often on fresh events; do not wait months between trains' },
  { title: 'Cadence', text: 'Year-1: nightly retrain + weekly A/B beats continuous chaos' },
  { title: 'Guardrails', text: 'diversity floors, max share per item, editorial injects' },
  { title: 'Counterfactual care', text: 'logged data is biased by the old policy — naive train repeats it' },
  { title: 'Human review', text: 'spot-check shelves; metrics alone miss creepy or unsafe patterns' },
];

const CORE = [
  {
    icon: '🔁', title: 'The Loop', titleClass: 'card-title-cyan', subtitle: 'Cycle',
    description: 'Serve → log → train → serve. Each step can reinforce yesterday’s mistakes.',
    code: 'serve → log clicks\n→ train → redeploy',
  },
  {
    icon: '🎲', title: 'Explore', titleClass: 'card-title-purple', subtitle: 'Discover',
    description: 'ε-greedy or bandit-style: mostly exploit the ranker, sometimes explore.',
    code: '// 90% model order\n'// 10% random eligible',
  },
  {
    icon: '🛡️', title: 'Break Popularity', titleClass: 'card-title-amber', subtitle: 'Policy',
    description: 'Cap how often one item can dominate; boost new/long-tail with a budget.',
    code: 'max_share = 5%\nnew_item_boost',
  },
];

const PRACTICE = [
  {
    icon: '📅', title: 'Retrain Cadence', titleClass: 'card-title-cyan', subtitle: 'Ops',
    description: 'Nightly batch on last 30d logs; freeze if data volume or null rates look wrong.',
    code: 'cron: train nightly\nfreeze on anomaly',
  },
  {
    icon: '📍', title: 'Log Position', titleClass: 'card-title-purple', subtitle: 'Debias',
    description: 'Store position with every impression so you can IPS/debias later.',
    code: 'impression +\nposition + model_id',
  },
  {
    icon: '🧪', title: 'Holdout Policy', titleClass: 'card-title-amber', subtitle: 'Eval',
    description: 'Keep a random traffic slice on an older policy to measure true lift.',
    code: '// 5% holdout control\n'// compare weekly',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 195 Preview',
    description: 'Tomorrow: wrap Days 191–195 — ranking checklist and what to ship next.',
    link: { href: '/day-195', label: 'Go to Day 195 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'Systems view including feedback realities.',
    link: { href: LOOP, label: 'Read production ML →', external: true },
  },
  {
    icon: '⚖️', title: 'Fairness in Recs', titleClass: 'card-title-purple', subtitle: 'Google',
    description: 'Fairness considerations for recommenders.',
    link: { href: BIAS, label: 'Read fairness notes →', external: true },
  },
  {
    icon: '📡', title: 'Online Learning', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Updating models from streaming data.',
    link: { href: ONLINE, label: 'Read online learning →', external: true },
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

export default function Day194() {
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
          <Link to="/day-193" className="day001-nav-btn day001-nav-prev">← Day 193</Link>
          <p className="day001-datetime">ML Day 194 · 13 Jul 2027</p>
          <Link to="/day-195" className="day001-nav-btn day001-nav-next">Day 195 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Feedback</span><span>Bias</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 194 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">FEEDBACK LOOPS &amp; ONLINE UPDATES</p>
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
          Day 194 closes the loop carefully. Live clicks <strong>retrain</strong> the system — add{' '}
          <strong>exploration</strong>, fight <strong>popularity bias</strong>, and retrain on a sane cadence.
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

        <CardSection icon="🔁" title="1 · THE LOOP" cards={CORE} columns={3} />
        <CardSection icon="📅" title="2 · STAY HEALTHY" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#FeedbackLoops</span><span>#OnlineLearning</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
