import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const POINT = 'https://en.wikipedia.org/wiki/Learning_to_rank#Pointwise_approach';
const PAIR = 'https://en.wikipedia.org/wiki/Learning_to_rank#Pairwise_approach';
const LIST = 'https://en.wikipedia.org/wiki/Learning_to_rank#Listwise_approach';

const LEARNT_TODAY = [
  { title: 'Pointwise', text: 'predict a score/label per item alone — like CTR classification' },
  { title: 'Pairwise', text: 'learn that A should rank above B when A was preferred' },
  { title: 'Listwise', text: 'optimize a metric over the whole list (NDCG-style) — harder, powerful' },
  { title: 'Year-1 pick', text: 'pointwise logistic or simple pairwise is enough to start' },
  { title: 'What loss teaches', text: 'pointwise cares about absolute score; pairwise cares about order' },
  { title: 'Imbalance', text: 'many non-clicks — downsample negatives or weight positives carefully' },
  { title: 'Same features', text: 'loss type changes training; serving still sorts by score' },
  { title: 'Eval match', text: 'if you care about list quality, track NDCG/MAP offline too' },
  { title: 'Do not overclaim', text: 'fancy listwise loss will not fix bad candidates or broken labels' },
];

const CORE = [
  {
    icon: '1️⃣', title: 'Pointwise', titleClass: 'card-title-cyan', subtitle: 'Per Item',
    description: 'Treat each (user, item) as a binary or regression example. Sort by predicted score.',
    code: 'label = clicked ? 1 : 0\nloss = BCE(score, label)',
  },
  {
    icon: '2️⃣', title: 'Pairwise', titleClass: 'card-title-purple', subtitle: 'Order Pairs',
    description: 'Prefer clicked over skipped in the same list. Teaches relative order.',
    code: 'want score(A) > score(B)\n// hinge / RankNet style',
  },
  {
    icon: '📋', title: 'Listwise', titleClass: 'card-title-amber', subtitle: 'Whole List',
    description: 'Optimize a list metric directly. Strong for search; heavier to implement.',
    code: '// LambdaMART / ListNet\n'// optimize NDCG-ish',
  },
];

const PRACTICE = [
  {
    icon: '✅', title: 'Start Pointwise', titleClass: 'card-title-cyan', subtitle: 'MVP',
    description: 'Logistic regression on features → score → sort. Ship, then try pairwise.',
    code: 'train BCE → serve sort\n// measure Precision@K',
  },
  {
    icon: '⚖️', title: 'Negatives', titleClass: 'card-title-purple', subtitle: 'Sampling',
    description: 'Sample unclicked impressions from the same request as negatives.',
    code: '// 1 positive : N negatives\n'// same user/session',
  },
  {
    icon: '📏', title: 'Offline Metrics', titleClass: 'card-title-amber', subtitle: 'Check',
    description: 'AUC for pointwise; pairwise accuracy; NDCG@10 for list feel.',
    code: 'AUC · pair_acc · NDCG@10',
  },
  {
    icon: '🔜', title: 'Next: Two-Tower', titleClass: 'card-title-lime', subtitle: 'Day 193 Preview',
    description: 'Tomorrow: two-tower models — separate user and item encoders for retrieval + rank.',
    link: { href: '/day-193', label: 'Go to Day 193 →' },
  },
];

const RESOURCES = [
  {
    icon: '1️⃣', title: 'Pointwise', titleClass: 'card-title-cyan', subtitle: 'Wiki',
    description: 'Pointwise LTR approach.',
    link: { href: POINT, label: 'Read pointwise →', external: true },
  },
  {
    icon: '2️⃣', title: 'Pairwise', titleClass: 'card-title-purple', subtitle: 'Wiki',
    description: 'Pairwise LTR approach.',
    link: { href: PAIR, label: 'Read pairwise →', external: true },
  },
  {
    icon: '📋', title: 'Listwise', titleClass: 'card-title-amber', subtitle: 'Wiki',
    description: 'Listwise LTR approach.',
    link: { href: LIST, label: 'Read listwise →', external: true },
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

export default function Day192() {
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
          <Link to="/day-191" className="day001-nav-btn day001-nav-prev">← Day 191</Link>
          <p className="day001-datetime">ML Day 192 · 11 Jul 2027</p>
          <Link to="/day-193" className="day001-nav-btn day001-nav-next">Day 193 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Loss</span><span>LTR</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 192 <span aria-hidden="true">⚖️</span></h1>
              <p className="day001-day-theme">POINTWISE · PAIRWISE · LISTWISE</p>
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
          Day 192 picks a loss. <strong>Pointwise</strong>, <strong>pairwise</strong>, and{' '}
          <strong>listwise</strong> teach different notions of “good order” — start simple.
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

        <CardSection icon="⚖️" title="1 · THREE FAMILIES" cards={CORE} columns={3} />
        <CardSection icon="✅" title="2 · PRACTICAL PICKS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#LTR</span><span>#LossFunctions</span><span>#ML</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
