import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'You can ship now', text: 'a Gen AI product is a pipeline + UX + metrics, not just prompts' },
  { title: 'Your differentiator', text: 'data quality, retrieval, and domain focus beat model chasing' },
  { title: 'LLMOps mindset', text: 'eval gates, canary releases, and rollback plans reduce risk' },
  { title: 'Security is core', text: 'PII, tenant isolation, and audit trails keep you production-ready' },
  { title: 'Portfolio story', text: 'show problem → approach → demo → metrics → constraints' },
  { title: 'Keep it narrow', text: 'one valuable workflow beats five half-finished demos' },
  { title: 'Iterate by evidence', text: 'fix what the logs and evals prove, not what feels cool' },
  { title: 'Next: agentic', text: 'these foundations make tool-using systems easier to build' },
];

const CORE = [
  {
    icon: '🏁', title: 'Milestone', titleClass: 'card-title-cyan', subtitle: 'Wrap',
    description:
      'You now have a map: performance + cost, tuning decisions, eval harness, and governance to ship confidently.',
    code: 'build -> measure -> ship',
  },
  {
    icon: '📦', title: 'Portfolio Pack', titleClass: 'card-title-purple', subtitle: 'Show',
    description:
      'Add README, screenshots, sample inputs, and a short demo script. Make the project easy to run and evaluate.',
    code: 'repo + demo',
  },
  {
    icon: '🗺️', title: 'Next Builds', titleClass: 'card-title-amber', subtitle: 'Plan',
    description:
      'Pick one: deeper RAG, multimodal workflows, or agentic tool automation with strict safety.',
    code: 'choose one path',
  },
];

const PRACTICE = [
  {
    icon: '🎬', title: 'Demo Script', titleClass: 'card-title-cyan', subtitle: '2 minutes',
    description: 'Write a tight demo: success case + edge case + metric impact.',
    code: 'happy + edge + metric',
  },
  {
    icon: '📊', title: 'Scorecard', titleClass: 'card-title-purple', subtitle: 'Report',
    description: 'Publish your p95 latency, token cost, and eval pass rate for the app.',
    code: 'p95 · tokens · pass%',
  },
  {
    icon: '🏠', title: 'Back To Track', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Return to the Gen AI home and extend the roadmap from here.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
  {
    icon: '📖', title: 'LangChain', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Patterns spanning prompts, retrieval, evaluation, and agents.',
    link: { href: 'https://js.langchain.com/docs/introduction/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Shipping with metrics beats collecting concepts.',
    footer: 'Build, measure, iterate.',
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

export default function GenaiDay75() {
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
          <Link to="/genai-day-74" className="day001-nav-btn day001-nav-prev">← Day 74</Link>
          <p className="day001-datetime">Gen AI Day 75 · 75 Aug 2026</p>
          <Link to="/genai" className="day001-nav-btn day001-nav-next">Gen AI →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Milestone</span><span>Day 75</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 75 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">GEN AI MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · SHIP</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 75 is a checkpoint. You can build a Gen AI app that is <strong>fast</strong>, <strong>measurable</strong>, and <strong>safe</strong>:
          budgets, tuning choices, eval harnesses, and governance. Now keep shipping.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Milestone</span><span>#Day75</span><span>#LLMOps</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

