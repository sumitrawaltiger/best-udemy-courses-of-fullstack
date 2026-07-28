import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Memory types', text: 'working, summary, semantic, and episodic memory serve different needs' },
  { title: 'Context windows are finite', text: 'trim and summarize instead of infinite history' },
  { title: 'Semantic recall', text: 'vector memory retrieves relevant facts, not entire transcripts' },
  { title: 'Episodic logs', text: 'store past interactions with timestamps for accountability' },
  { title: 'Preferences are gold', text: 'store user preferences separately for better personalization' },
  { title: 'Freshness & decay', text: 'expire or decay stale memories and re-validate critical facts' },
  { title: 'Memory risks', text: 'memory can leak PII or cross-tenant data if not scoped' },
  { title: 'Eval memory', text: 'test recall and correctness, not just “feels smart”' },
];

const CORE = [
  {
    icon: '🧠', title: 'Memory Architecture', titleClass: 'card-title-cyan', subtitle: 'Design',
    description:
      'Combine summary memory for long chats with semantic memory for facts and episodic logs for auditability.',
    code: 'summary + vector + episodes',
  },
  {
    icon: '🧭', title: 'Retrieval Scope', titleClass: 'card-title-purple', subtitle: 'Safety',
    description:
      'Always scope memory by tenant and user. Enforce filters before any vector search returns results.',
    code: 'tenant_id + user_id',
  },
  {
    icon: '📏', title: 'Memory Evals', titleClass: 'card-title-amber', subtitle: 'Quality',
    description:
      'Measure: recall accuracy, false recall, and hallucinations when memory is injected.',
    code: 'recall -> verify',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Preference Store', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Store three user preferences and retrieve them on every response.',
    code: 'prefs -> inject',
  },
  {
    icon: '🗂️', title: 'Episode Log', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Log each run with timestamp, tool calls, and summary for later review.',
    code: 'audit-friendly',
  },
  {
    icon: '🔜', title: 'Next: Security', titleClass: 'card-title-amber', subtitle: 'Day 74',
    description: 'Tomorrow → deep agent security: injection, exfiltration, and policy engines.',
    link: { href: '/agentic-day-74', label: 'Go to Day 74 →' },
  },
];

const RESOURCES = [
  {
    icon: '📖', title: 'LangChain Memory', titleClass: 'card-title-cyan', subtitle: 'Patterns',
    description: 'Memory patterns and trade-offs for LLM applications.',
    link: { href: 'https://js.langchain.com/docs/how_to/', label: 'Open →', external: true },
  },
  {
    icon: '📖', title: 'Vector DB Notes', titleClass: 'card-title-purple', subtitle: 'Recall',
    description: 'Revisit vector retrieval and filtering best practices.',
    link: { href: '/genai-day-52', label: 'Open →' },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Memory without scope becomes a data leak.',
    footer: 'Scope first, then recall.',
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

export default function AgenticDay73() {
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
          <Link to="/agentic-day-72" className="day001-nav-btn day001-nav-prev">← Day 72</Link>
          <p className="day001-datetime">Agentic AI Day 73 · 10 Oct 2026</p>
          <Link to="/agentic-day-74" className="day001-nav-btn day001-nav-next">Day 74 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Memory</span><span>Day 73</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 73 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">MEMORY FOR PRODUCTION AGENTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · MEMORY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '49%' }} /></div>

        <p className="day001-summary">
          Day 73 builds memory that works in production: summaries for long chats, semantic recall for facts,
          episodic logs for auditability, and strict scoping to prevent leaks.
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

        <CardSection icon="🧠" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Memory</span><span>#Day73</span><span>#RAG</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

