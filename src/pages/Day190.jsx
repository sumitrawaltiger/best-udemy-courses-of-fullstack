import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EMBED = 'https://developers.google.com/machine-learning/crash-course/embeddings';
const PROD = 'https://developers.google.com/machine-learning/crash-course/production-ml-systems';
const PGVEC = 'https://github.com/pgvector/pgvector';

const LEARNT_TODAY = [
  { title: 'Arc complete', text: 'Days 186–190: embeddings → ANN → A/B → production serving → milestone' },
  { title: 'Vectors ship', text: 'item embeddings + user mean profile is a real Year-1 upgrade' },
  { title: 'Search path', text: 'small catalog exact KNN; grow into pgvector / ANN indexes' },
  { title: 'Prove with A/B', text: 'sticky assignment, one metric, guardrails — then promote' },
  { title: 'Ops mindset', text: 'version, canary, monitor, rollback — notebooks are not prod' },
  { title: 'Two stages stay', text: 'ANN candidates + feature ranker still beats end-to-end magic' },
  { title: 'Log everything', text: 'impressions with model_version and experiment variant' },
  { title: 'Keep fallbacks', text: 'trending/editorial when vectors or indexes fail' },
  { title: 'What is next', text: 'learning to rank next — Day 191 opens deeper ranking models' },
];

const CORE = [
  {
    icon: '✅', title: 'Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description: 'Embeddings table, knn/ANN path, A/B logging, versioned config, rollback flag.',
    code: 'embeddings · knn · A/B\nversion · canary · rollback',
  },
  {
    icon: '🧪', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove Value',
    description: 'Embedding shelf beats hybrid baseline on primary metric without hurting latency.',
    code: '// A/B winner → 100%\n// else keep baseline',
  },
  {
    icon: '🗺️', title: 'Roadmap', titleClass: 'card-title-amber', subtitle: 'Later',
    description: 'Two-tower models, online learning, and dedicated feature stores after this base.',
    code: 'MVP vectors → ANN → A/B → towers',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Demo Story', titleClass: 'card-title-cyan', subtitle: 'Portfolio',
    description: 'Show similar courses by embedding, then an A/B chart where B wins CTR.',
    code: 'embed → neighbors\nexperiment → ship v2',
  },
  {
    icon: '🔍', title: 'Debug Habit', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Weekly: sample one user — neighbors look sane? null features? variant sticky?',
    code: '// dump knn + scores\n// check variant hash',
  },
  {
    icon: '🧭', title: 'Keep Building', titleClass: 'card-title-amber', subtitle: 'Mindset',
    description: 'Measure before you complicate. Simple vectors + clean experiments compound.',
    code: '// ship · measure\n// then add complexity',
  },
  {
    icon: '🔜', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 191',
    description: 'Next: learning to rank — train a model to order candidates for the shelf.',
    link: { href: '/day-191', label: 'Go to Day 191 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧭', title: 'Embeddings', titleClass: 'card-title-cyan', subtitle: 'Google MLCC',
    description: 'Revisit the embeddings foundation.',
    link: { href: EMBED, label: 'Open embeddings →', external: true },
  },
  {
    icon: '🏭', title: 'Production ML', titleClass: 'card-title-purple', subtitle: 'Google MLCC',
    description: 'Production ML systems module.',
    link: { href: PROD, label: 'Open production ML →', external: true },
  },
  {
    icon: '🐘', title: 'pgvector', titleClass: 'card-title-amber', subtitle: 'GitHub',
    description: 'Vector search in Postgres for Year-1 scale.',
    link: { href: PGVEC, label: 'Open pgvector →', external: true },
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

export default function Day190() {
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
          <Link to="/day-189" className="day001-nav-btn day001-nav-prev">← Day 189</Link>
          <p className="day001-datetime">ML Day 190 · 9 Jul 2027</p>
          <Link to="/day-191" className="day001-nav-btn day001-nav-next">Day 191 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Milestone</span><span>Prod</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 190 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">EMBEDDINGS &amp; ML PROD MILESTONE</p>
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
          Day 190 closes the stretch. You can ship <strong>embeddings</strong>, search with{' '}
          <strong>ANN</strong>, prove value with <strong>A/B</strong>, and run a safe{' '}
          <strong>production</strong> rollout.
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

        <CardSection icon="🏁" title="1 · MILESTONE" cards={CORE} columns={3} />
        <CardSection icon="📦" title="2 · SHIP & NEXT" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Milestone</span><span>#Embeddings</span><span>#MLOps</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
