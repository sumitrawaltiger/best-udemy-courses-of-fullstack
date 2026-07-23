import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FEATURES = 'https://developers.google.com/machine-learning/crash-course/representation';
const STORE = 'https://www.feast.dev/';
const TRAINING = 'https://developers.google.com/machine-learning/crash-course/data-prep';

const LEARNT_TODAY = [
  { title: 'What is a feature', text: 'a measurable input to a model or ranker — counts, ratios, embeddings' },
  { title: 'Why log features', text: 'training and serving must see the same numbers or models drift' },
  { title: 'Training/serving skew', text: 'offline job computes X differently than the API — predictions rot' },
  { title: 'Feature store', text: 'central place to define, store, and fetch features consistently' },
  { title: 'Online vs offline', text: 'offline for training batch; online low-latency for the request path' },
  { title: 'Entity keys', text: 'features keyed by user_id, item_id, or user_id+item_id' },
  { title: 'Year-1 without Feast', text: 'Postgres tables + clear SQL views can be your first “store”' },
  { title: 'Point-in-time', text: 'when training, join features as of the event time — no future leakage' },
  { title: 'Start few', text: '10 solid features beat 200 noisy ones you cannot debug' },
];

const CORE = [
  {
    icon: '🧬', title: 'Example Features', titleClass: 'card-title-cyan', subtitle: 'User & Item',
    description: 'user: days_active, completes_7d. item: popularity_7d, tag_vector. pair: times_seen.',
    code: 'user.completes_7d\nitem.popularity_7d\npair.clicked_before',
  },
  {
    icon: '🏪', title: 'Feature Store Idea', titleClass: 'card-title-purple', subtitle: 'Single Source',
    description: 'Define once; materialize offline for training and online for serving.',
    code: '// define: completes_7d\n'// offline: warehouse table\n'// online: Redis / PG row',
  },
  {
    icon: '⚠️', title: 'Skew Killer', titleClass: 'card-title-amber', subtitle: 'Same Logic',
    description: 'Share the SQL/code that computes a feature — do not reimplement in the API.',
    code: '// one job writes feature rows\n'// API only reads them',
  },
];

const PRACTICE = [
  {
    icon: '🗄️', title: 'PG Feature Table', titleClass: 'card-title-cyan', subtitle: 'MVP Store',
    description: 'Nightly job upserts user_features and item_features; API SELECTs by id.',
    code: 'user_features(user_id PK, completes_7d, updated_at)',
  },
  {
    icon: '⏰', title: 'No Leakage', titleClass: 'card-title-purple', subtitle: 'Training',
    description: 'When labeling “clicked next day”, only use features known before the click.',
    code: '// feature_as_of < label_time',
  },
  {
    icon: '🧪', title: 'Monitor Drift', titleClass: 'card-title-amber', subtitle: 'Ops',
    description: 'Track null rates and distribution shifts — broken jobs show up as feature nulls.',
    code: '// alert if null% > 5\n'// alert if mean jumps 3σ',
  },
  {
    icon: '🔜', title: 'Next: Serve API', titleClass: 'card-title-lime', subtitle: 'Day 184 Preview',
    description: 'Tomorrow: GET /recommendations — candidates, rank with features, cache, explain.',
    link: { href: '/day-184', label: 'Go to Day 184 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧬', title: 'Representations', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'How features represent the world for models.',
    link: { href: FEATURES, label: 'Read representation →', external: true },
  },
  {
    icon: '🏪', title: 'Feast', titleClass: 'card-title-purple', subtitle: 'Feature Store',
    description: 'Open-source feature store to explore later.',
    link: { href: STORE, label: 'Open Feast →', external: true },
  },
  {
    icon: '📝', title: 'Data Prep', titleClass: 'card-title-amber', subtitle: 'Google MLCC',
    description: 'Prepare data and features without common pitfalls.',
    link: { href: TRAINING, label: 'Read data prep →', external: true },
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

export default function Day183() {
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
          <Link to="/day-182" className="day001-nav-btn day001-nav-prev">← Day 182</Link>
          <p className="day001-datetime">ML Day 183</p>
          <Link to="/day-184" className="day001-nav-btn day001-nav-next">Day 184 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Features</span><span>Store</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 183 <span aria-hidden="true">🧬</span></h1>
              <p className="day001-day-theme">FEATURES &amp; FEATURE STORES</p>
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
          Day 183 defines inputs. Build a few solid <strong>features</strong>, avoid{' '}
          <strong>training/serving skew</strong>, and treat Postgres tables as a Year-1{' '}
          <strong>feature store</strong>.
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

        <CardSection icon="🧬" title="1 · FEATURES" cards={CORE} columns={3} />
        <CardSection icon="🗄️" title="2 · MVP STORE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#FeatureStore</span><span>#ML</span><span>#Data</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
