import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DIV = 'https://en.wikipedia.org/wiki/Diversity_(business)#In_recommendation_systems';
const MMR = 'https://en.wikipedia.org/wiki/Maximal_marginal_relevance';
const SEREN = 'https://en.wikipedia.org/wiki/Serendipity';

const LEARNT_TODAY = [
  { title: 'Diversity', text: 'the list covers different topics/creators — not ten clones of one course' },
  { title: 'Serendipity', text: 'pleasant surprise — relevant but not obvious from last click' },
  { title: 'Why it matters', text: 'filter bubbles bore users; long-tail supply never gets a chance' },
  { title: 'MMR idea', text: 'pick next item high on relevance and low on similarity to already chosen' },
  { title: 'Category quotas', text: 'simple rule: at most N items from the same tag in top-K' },
  { title: 'Intra-list distance', text: 'average pairwise distance of embeddings in the shelf — monitor it' },
  { title: 'Trade-off', text: 'more diversity can lower short-term CTR — measure retention too' },
  { title: 'Year-1 tactic', text: 'MMR or quota post-processor on top of your existing ranker' },
  { title: 'Do not randomize all', text: 'explore with structure; pure random feels broken' },
];

const CORE = [
  {
    icon: '🌈', title: 'Samey Shelf', titleClass: 'card-title-cyan', subtitle: 'Problem',
    description: 'Ranker loves one cluster. Users see React×10 and nothing else.',
    code: '// top-10 all “React”\n'// user churns',
  },
  {
    icon: '🧲', title: 'MMR', titleClass: 'card-title-purple', subtitle: 'Rerank',
    description: 'Greedy: next = argmax λ·rel − (1−λ)·max_sim(to picked).',
    code: 'λ·relevance\n− (1−λ)·redundancy',
  },
  {
    icon: '✨', title: 'Serendipity Slot', titleClass: 'card-title-amber', subtitle: 'UX',
    description: 'Reserve 1–2 slots for “adjacent” topics outside the user’s top tag.',
    code: 'slots 1–8: core\nslots 9–10: adjacent',
  },
];

const PRACTICE = [
  {
    icon: '🏷️', title: 'Tag Quotas', titleClass: 'card-title-cyan', subtitle: 'Rule',
    description: 'After sort, walk the list and skip items that break max-per-tag.',
    code: 'max_per_tag = 2\nin top 10',
  },
  {
    icon: '📏', title: 'Diversity Metric', titleClass: 'card-title-purple', subtitle: 'Monitor',
    description: 'Log unique tags / creators in top-10 and mean embedding distance.',
    code: 'unique_tags@10\nmean_pairwise_dist',
  },
  {
    icon: '🧪', title: 'A/B Diversity', titleClass: 'card-title-amber', subtitle: 'Prove',
    description: 'Compare λ settings on CTR and 7-day return — pick the product win.',
    code: 'λ=0.9 vs λ=0.6\nCTR · return@7',
  },
  {
    icon: '🔜', title: 'Next: Eval Gap', titleClass: 'card-title-lime', subtitle: 'Day 199 Preview',
    description: 'Tomorrow: why offline metrics lie — and how to trust online results.',
    link: { href: '/day-199', label: 'Go to Day 199 →' },
  },
];

const RESOURCES = [
  {
    icon: '🌈', title: 'Diversity in Recs', titleClass: 'card-title-cyan', subtitle: 'Overview',
    description: 'Diversity concepts in recommendation contexts.',
    link: { href: DIV, label: 'Read diversity notes →', external: true },
  },
  {
    icon: '🧲', title: 'MMR', titleClass: 'card-title-purple', subtitle: 'Algorithm',
    description: 'Maximal marginal relevance for diverse lists.',
    link: { href: MMR, label: 'Read MMR →', external: true },
  },
  {
    icon: '✨', title: 'Serendipity', titleClass: 'card-title-amber', subtitle: 'Concept',
    description: 'Unexpected but useful discoveries.',
    link: { href: SEREN, label: 'Read serendipity →', external: true },
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

export default function Day198() {
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
          <Link to="/day-197" className="day001-nav-btn day001-nav-prev">← Day 197</Link>
          <p className="day001-datetime">ML Day 198 · 21 Dec 2027</p>
          <Link to="/day-199" className="day001-nav-btn day001-nav-next">Day 199 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>ML</span><span>Year 1</span><span>Diversity</span><span>UX</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 198 <span aria-hidden="true">🌈</span></h1>
              <p className="day001-day-theme">DIVERSITY &amp; SERENDIPITY</p>
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
          Day 198 breaks the clone shelf. Use <strong>MMR</strong>, <strong>tag quotas</strong>, and a
          little <strong>serendipity</strong> so lists feel fresh without going random.
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

        <CardSection icon="🌈" title="1 · FRESH LISTS" cards={CORE} columns={3} />
        <CardSection icon="🏷️" title="2 · POST-PROCESS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Diversity</span><span>#Serendipity</span><span>#RecSys</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
