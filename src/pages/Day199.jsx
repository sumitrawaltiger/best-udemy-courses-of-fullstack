import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EVAL = 'https://developers.google.com/machine-learning/recommendation/overview/candidate';
const AB = 'https://en.wikipedia.org/wiki/A/B_testing';
const OFFLINE = 'https://en.wikipedia.org/wiki/Learning_to_rank#Evaluation_measures';

const LEARNT_TODAY = [
  { title: 'Offline metrics', text: 'AUC, NDCG, Precision@K on logged data — fast, cheap, biased' },
  { title: 'Online metrics', text: 'CTR, completes, retention on live traffic — slow, truthful for product' },
  { title: 'The gap', text: 'offline win ≠ online win — position bias and policy mismatch cause lies' },
  { title: 'Selection bias', text: 'you only see labels for items the old model showed' },
  { title: 'Use both', text: 'offline to filter bad ideas; online A/B to decide what ships' },
  { title: 'Holdout traffic', text: 'keep a control slice to calibrate offline ↔ online over time' },
  { title: 'Primary metric', text: 'one online north star; offline proxies must correlate with it' },
  { title: 'Debug mismatches', text: 'if NDCG↑ but CTR↓, check diversity, latency, or UI changes' },
  { title: 'Year-1 rule', text: 'never fully automate promotion on offline alone' },
];

const CORE = [
  {
    icon: '📉', title: 'Offline', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Replay logs, score candidates, compute ranking metrics. Great for iteration speed.',
    code: 'NDCG@10 · AUC\nPrecision@K',
  },
  {
    icon: '🟢', title: 'Online', titleClass: 'card-title-purple', subtitle: 'Prod',
    description: 'A/B on real users. Measures what product actually cares about.',
    code: 'CTR · complete@7\nreturn@7',
  },
  {
    icon: '🕳️', title: 'Why Gap Exists', titleClass: 'card-title-amber', subtitle: 'Bias',
    description: 'Logged data reflects old policy; users behave differently under new lists.',
    code: 'old policy logs\n≠ new policy world',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Gate Process', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description: 'Offline must not regress proxies → canary A/B → full ship or rollback.',
    code: 'offline OK → canary\n→ A/B → promote',
  },
  {
    icon: '🔗', title: 'Correlate', titleClass: 'card-title-purple', subtitle: 'Calibrate',
    description: 'Plot past offline deltas vs online wins. Drop proxies that do not track.',
    code: 'ΔNDCG vs ΔCTR\nkeep if correlated',
  },
  {
    icon: '📝', title: 'Decision Log', titleClass: 'card-title-amber', subtitle: 'Culture',
    description: 'Write why you shipped or killed — builds institutional memory.',
    code: 'exp_id · offline · online\n· decision · notes',
  },
  {
    icon: '🔜', title: 'Next: Day 200', titleClass: 'card-title-lime', subtitle: 'Milestone Preview',
    description: 'Tomorrow: wrap Days 196–200 — Year-1 personalization milestone at Day 200.',
    link: { href: '/day-200', label: 'Go to Day 200 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪜', title: 'Retrieve & Rank', titleClass: 'card-title-cyan', subtitle: 'Google',
    description: 'Pipeline context for evaluation stages.',
    link: { href: EVAL, label: 'Read candidate gen →', external: true },
  },
  {
    icon: '📏', title: 'LTR Metrics', titleClass: 'card-title-purple', subtitle: 'Wiki',
    description: 'Common offline ranking evaluation measures.',
    link: { href: OFFLINE, label: 'Read eval measures →', external: true },
  },
  {
    icon: '🧪', title: 'A/B Testing', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Online experiment background.',
    link: { href: AB, label: 'Read A/B testing →', external: true },
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

export default function Day199() {
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
          <Link to="/day-198" className="day001-nav-btn day001-nav-prev">← Day 198</Link>
          <p className="day001-datetime">ML Day 199 · 18 Jul 2027</p>
          <Link to="/day-200" className="day001-nav-btn day001-nav-next">Day 200 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Eval</span><span>A/B</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 199 <span aria-hidden="true">🕳️</span></h1>
              <p className="day001-day-theme">OFFLINE VS ONLINE EVAL GAP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '55%' }} /></div>

        <p className="day001-summary">
          Day 199 trusts numbers carefully. Use <strong>offline</strong> to iterate and{' '}
          <strong>online A/B</strong> to ship — never promote on lab metrics alone.
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

        <CardSection icon="🕳️" title="1 · TWO WORLDS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · SHIP PROCESS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Evaluation</span><span>#ABTesting</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
