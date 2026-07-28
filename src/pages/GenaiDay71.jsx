import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Latency is a feature', text: 'users feel speed before they judge quality' },
  { title: 'Token budgets', text: 'set per-request ceilings and trim context aggressively' },
  { title: 'Prompt minimization', text: 'shorter instructions reduce cost every single call' },
  { title: 'Context hygiene', text: 'only inject what you can cite and what the user needs now' },
  { title: 'Streaming UX', text: 'stream early tokens to reduce perceived latency' },
  { title: 'Cache smartly', text: 'cache retrieval + deterministic transforms, not just final text' },
  { title: 'Fallback tiers', text: 'fast model for routine, strong model for hard cases' },
  { title: 'Measure end-to-end', text: 'quality, ms, and $ together or you optimize the wrong thing' },
];

const CORE = [
  {
    icon: '⚡️', title: 'Latency Budget', titleClass: 'card-title-cyan', subtitle: 'Speed',
    description:
      'Pick a target (e.g., p95 < 2s) and design the whole pipeline to hit it: retrieval, model, and UI.',
    code: 'p95 -> design',
  },
  {
    icon: '🧮', title: 'Cost Controls', titleClass: 'card-title-purple', subtitle: 'Spend',
    description:
      'Cap tokens, cap tool calls, and cap retries. Most cost explosions come from loops and huge contexts.',
    code: 'tokens · tools · retries',
  },
  {
    icon: '🧱', title: 'Tiered Models', titleClass: 'card-title-amber', subtitle: 'Quality',
    description:
      'Route easy requests to a fast model and escalate only when confidence is low or tasks are complex.',
    code: 'fast -> strong',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Token Trim', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add context trimming: keep last messages + top-k citations only.',
    code: 'tight context',
  },
  {
    icon: '📊', title: 'Perf Dashboard', titleClass: 'card-title-purple', subtitle: 'Track',
    description: 'Log p50/p95 latency and tokens for every request and every tool call.',
    code: 'ms · tokens',
  },
  {
    icon: '🔜', title: 'Next: Fine-Tuning', titleClass: 'card-title-amber', subtitle: 'Day 72',
    description: 'Tomorrow → when (and when not) to fine-tune for Gen AI products.',
    link: { href: '/genai-day-72', label: 'Go to Day 72 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
  {
    icon: '📖', title: 'Vite', titleClass: 'card-title-purple', subtitle: 'Perf',
    description: 'Client-side perf basics for a fast user experience.',
    link: { href: 'https://vite.dev/guide/performance', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'If you cannot measure latency and cost, you cannot optimize them.',
    footer: 'Budget first, then iterate.',
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

export default function GenaiDay71() {
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
          <Link to="/genai-day-55" className="day001-nav-btn day001-nav-prev">← Day 55</Link>
          <p className="day001-datetime">Gen AI Day 71 · 71 Aug 2026</p>
          <Link to="/genai-day-72" className="day001-nav-btn day001-nav-next">Day 72 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>LLMOps</span><span>Day 71</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 71 <span aria-hidden="true">⚡️</span></h1>
              <p className="day001-day-theme">PERFORMANCE & COST OPTIMIZATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · LLMOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          Day 71 tunes the system like a product: <strong>latency</strong>, <strong>cost</strong>, and <strong>quality</strong> move together.
          Add budgets, trim context, cache carefully, and route requests across model tiers.
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

        <CardSection icon="⚡️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#LLMOps</span><span>#Day71</span><span>#Performance</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

