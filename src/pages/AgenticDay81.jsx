import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Plain RAG limit', text: 'fixed retrieve → generate fails when the query needs planning or multi-hop evidence' },
  { title: 'Agentic RAG', text: 'an agent decides what to retrieve, whether to retrieve again, and how to use results' },
  { title: 'Query rewrite', text: 'agent rewrites vague user questions into better search queries' },
  { title: 'Adaptive retrieval', text: 'skip retrieval for chitchat; deepen retrieval when confidence is low' },
  { title: 'Multi-hop', text: 'answer A, then retrieve for B using A — common in research assistants' },
  { title: 'Critique loop', text: 'grader node checks faithfulness; if weak, retrieve again or ask clarifying Q' },
  { title: 'Cost control', text: 'each hop costs tokens — cap retrieval rounds and document tokens' },
  { title: 'Cite always', text: 'production answers should point at chunk ids / URLs the agent actually used' },
];

const CORE = [
  {
    icon: '🧭', title: 'Decide → Retrieve', titleClass: 'card-title-cyan', subtitle: 'Control',
    description:
      'Router: answer directly, rewrite+search, or ask a clarifying question. Retrieval is a tool, not a default.',
    code: 'route(query):\n  chitchat → answer\n  fact → retrieve\n  vague → clarify',
  },
  {
    icon: '🔁', title: 'Grade & Retry', titleClass: 'card-title-purple', subtitle: 'Quality',
    description:
      'After generate, score groundedness. Fail → rewrite query or fetch more chunks (within max hops).',
    code: 'retrieve → generate\n→ grade → retry?\nmax_hops = 2',
  },
  {
    icon: '📚', title: 'Cite Sources', titleClass: 'card-title-amber', subtitle: 'Trust',
    description:
      'Return answer + citations. If a claim has no supporting chunk, drop or flag it.',
    code: 'answer + [doc_id]\nuncited claim → drop',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Two-Hop Lab', titleClass: 'card-title-cyan', subtitle: 'Build',
    description:
      'Question needing two facts from different docs. Log each retrieve/generate step.',
    code: 'hop1 → hop2\nlog queries + chunks',
  },
  {
    icon: '📏', title: 'Grader Prompt', titleClass: 'card-title-purple', subtitle: 'Eval',
    description:
      'Write a faithfulness grader that returns { grounded: bool, missing: [] }.',
    code: 'grounded · missing[]\nfail → retry',
  },
  {
    icon: '🔜', title: 'Next: Context Eng', titleClass: 'card-title-amber', subtitle: 'Day 82 Preview',
    description: 'Tomorrow — what goes in the context window and what gets cut.',
    link: { href: '/agentic-day-82', label: 'Go to Day 82 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'RAG Module', titleClass: 'card-title-cyan', subtitle: 'PY Track',
    description: 'Classic RAG foundation before making it agentic.',
    link: { href: '/python/learn/retrieval-augmented-generation', label: 'Open RAG module →' },
  },
  {
    icon: '🕸️', title: 'LangGraph & MCP', titleClass: 'card-title-purple', subtitle: 'PY Module 46',
    description: 'Graph loops for rewrite → retrieve → grade → answer.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open Module 46 →' },
  },
  {
    icon: '✨', title: 'Interview Day 78', titleClass: 'card-title-amber', subtitle: 'Prep',
    description: 'RAG vs FT talking points that still apply in system design.',
    link: { href: '/agentic-day-78', label: 'Open Day 78 →' },
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

export default function AgenticDay81() {
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
          <Link to="/agentic-day-80" className="day001-nav-btn day001-nav-prev">← Day 80</Link>
          <p className="day001-datetime">Agentic AI Day 81 · 1 Nov 2026</p>
          <Link to="/agentic-day-82" className="day001-nav-btn day001-nav-next">Day 82 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Agentic RAG</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 81 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">AGENTIC RAG</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · AGENTIC RAG</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '54%' }} /></div>

        <p className="day001-summary">
          Day 81 upgrades retrieval. Build <strong>Agentic RAG</strong> — rewrite, adaptive retrieve, grade, and retry
          until answers are grounded.
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

        <CardSection icon="🧭" title="AGENTIC RETRIEVAL" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticRAG</span><span>#GenAI</span><span>#RAG</span><span>#Day81</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
