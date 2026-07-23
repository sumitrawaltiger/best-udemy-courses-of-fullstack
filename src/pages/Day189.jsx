import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PROD = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';
const SERVING = 'https://www.tensorflow.org/tfx/guide/serving';
const MLOPS = 'https://ml-ops.org/content/mlops-principles';

const LEARNT_TODAY = [
  { title: 'Model ≠ product', text: 'a notebook score is not a system — serving, versions, and rollouts are' },
  { title: 'Artifacts', text: 'versioned weights/rules + feature schema + config live together' },
  { title: 'Online path', text: 'API loads current model/config, reads features, returns scores fast' },
  { title: 'Offline path', text: 'batch jobs refresh embeddings, neighbors, and feature tables' },
  { title: 'Canary / shadow', text: 'send a slice of traffic to the new version before full cutover' },
  { title: 'Rollback', text: 'keep previous artifact; one flag switches back if metrics tank' },
  { title: 'Monitoring', text: 'latency, empty rates, score distribution, and business CTR' },
  { title: 'Year-1 serving', text: 'rules + embeddings in Node/Postgres can be “the model” — no GPU needed' },
  { title: 'Docs matter', text: 'write which version is live and how to revert — ops you at 2am' },
];

const CORE = [
  {
    icon: '📦', title: 'Versioned Artifact', titleClass: 'card-title-cyan', subtitle: 'Bundle',
    description: 'model_id, created_at, feature list, and weights/config path — immutable once shipped.',
    code: 'recs-v3/\n  config.json · neighbors.parquet',
  },
  {
    icon: '🚦', title: 'Traffic Split', titleClass: 'card-title-purple', subtitle: 'Rollout',
    description: '1% → 10% → 50% → 100%. Stop if guardrails fail.',
    code: 'flag: model_version\ncanary 5% of users',
  },
  {
    icon: '↩️', title: 'Rollback Plan', titleClass: 'card-title-amber', subtitle: 'Safety',
    description: 'Previous version stays hot. Flip the flag; do not retrain under pressure.',
    code: '// LIVE=v3\n'// ROLLBACK → v2',
  },
];

const PRACTICE = [
  {
    icon: '🔌', title: 'Serve in API', titleClass: 'card-title-cyan', subtitle: 'Path',
    description: 'Load config at boot or from Redis; score candidates; never retrain on the request.',
    code: 'boot → load v3\nrequest → score only',
  },
  {
    icon: '📈', title: 'Health Signals', titleClass: 'card-title-purple', subtitle: 'Observe',
    description: 'Track p95, null features, mean score drift, and CTR by model_version.',
    code: 'metrics{version="v3"}\np95 · null% · CTR',
  },
  {
    icon: '🧾', title: 'Runbook', titleClass: 'card-title-amber', subtitle: 'Ops',
    description: 'One page: how to canary, how to roll back, who owns the feature job.',
    code: '// owner + pager\n'// rollback steps',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 190 Preview',
    description: 'Tomorrow: wrap Days 186–190 — checklist for Year-1 embedding + experiment ops.',
    link: { href: '/day-190', label: 'Go to Day 190 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'How ML systems run in production.',
    link: { href: PROD, label: 'Read production ML →', external: true },
  },
  {
    icon: '🔌', title: 'TF Serving', titleClass: 'card-title-purple', subtitle: 'Guide',
    description: 'Model serving concepts (even if you stay on Node).',
    link: { href: SERVING, label: 'Read TF Serving →', external: true },
  },
  {
    icon: '🧭', title: 'MLOps Principles', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Principles for reliable ML delivery.',
    link: { href: MLOPS, label: 'Read MLOps principles →', external: true },
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

export default function Day189() {
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
          <Link to="/day-188" className="day001-nav-btn day001-nav-prev">← Day 188</Link>
          <p className="day001-datetime">ML Day 189</p>
          <Link to="/day-190" className="day001-nav-btn day001-nav-next">Day 190 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Serving</span><span>MLOps</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 189 <span aria-hidden="true">🏭</span></h1>
              <p className="day001-day-theme">PRODUCTION ML SYSTEMS</p>
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
          Day 189 treats ML like software. <strong>Version</strong> artifacts, <strong>canary</strong> traffic,
          <strong>monitor</strong> health, and keep a one-step <strong>rollback</strong>.
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

        <CardSection icon="🏭" title="1 · SHIP SAFE" cards={CORE} columns={3} />
        <CardSection icon="🔌" title="2 · RUN IT" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#MLOps</span><span>#ProductionML</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
