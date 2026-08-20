import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Why persist', text: 'coding and support agents forget repo rules without long-term memory' },
  { title: 'Checkpointing', text: 'LangGraph checkpoints save graph state so runs can pause and resume' },
  { title: 'User/project memory', text: 'store preferences, style guides, and past decisions keyed by user/repo' },
  { title: 'mem0-style stores', text: 'extract facts from conversations; retrieve relevant ones next session' },
  { title: 'Write policies', text: 'what is allowed into memory — never API keys, tokens, or raw PII dumps' },
  { title: 'Decay & conflict', text: 'old facts expire; newer preferences override older ones with timestamps' },
  { title: 'Scoped recall', text: 'retrieve only memories that match the current task — don’t dump the whole DB' },
  { title: 'Eval memory', text: 'test: session 1 teaches a preference; session 2 must use it without re-asking' },
];

const CORE = [
  {
    icon: '💾', title: 'Memory Layers', titleClass: 'card-title-cyan', subtitle: 'Design',
    description:
      'Thread buffer (hot) + checkpoint (resume) + long-term facts (cold). Each has a different write path.',
    code: 'hot: messages\nwarm: checkpoint\ncold: fact store',
  },
  {
    icon: '📥', title: 'Extract → Store', titleClass: 'card-title-purple', subtitle: 'Write',
    description:
      'After a turn, extract durable facts (“prefers pytest”, “API in FastAPI”). Store with source + time.',
    code: 'extract facts\n→ validate\n→ upsert by key',
  },
  {
    icon: '🔎', title: 'Scoped Retrieve', titleClass: 'card-title-amber', subtitle: 'Read',
    description:
      'On new tasks, pull top-k memories by similarity + recency. Inject as a short MEMORY block.',
    code: 'query → top_k\n→ MEMORY block\nbudget tokens',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Preference Test', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Session A: user says “always use ruff.” Session B: agent formats code — must follow without re-ask.',
    code: 'save preference\n→ later: apply',
  },
  {
    icon: '🚫', title: 'Redact Rules', titleClass: 'card-title-purple', subtitle: 'Safety',
    description:
      'List 5 fields that must never enter long-term memory. Add a simple regex/secret scanner.',
    code: 'block: keys, tokens\nPII · passwords',
  },
  {
    icon: '🔜', title: 'Next: A2A', titleClass: 'card-title-amber', subtitle: 'Day 93 Preview',
    description: 'Tomorrow — agent-to-agent protocols and interop.',
    link: { href: '/agentic-day-93', label: 'Go to Day 93 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧠', title: 'Memory Day 49', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Short/long-term memory and tool contracts foundation.',
    link: { href: '/agentic-day-49', label: 'Open Day 49 →' },
  },
  {
    icon: '📦', title: 'Context Day 82', titleClass: 'card-title-purple', subtitle: 'Journal',
    description: 'How recalled memory fits into the context budget.',
    link: { href: '/agentic-day-82', label: 'Open Day 82 →' },
  },
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Agentic modules covering memory and LangGraph state.',
    link: { href: '/python', label: 'Open Python track →' },
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

export default function AgenticDay92() {
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
          <Link to="/agentic-day-91" className="day001-nav-btn day001-nav-prev">← Day 91</Link>
          <p className="day001-datetime">Agentic AI Day 92 · 21 Nov 2026</p>
          <Link to="/agentic-day-93" className="day001-nav-btn day001-nav-next">Day 93 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Memory</span><span>Phase 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 92 <span aria-hidden="true">💾</span></h1>
              <p className="day001-day-theme">PERSISTENT AGENT MEMORY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '61%' }} /></div>

        <p className="day001-summary">
          Day 92 makes agents remember. Combine <strong>checkpoints</strong>, long-term fact stores, and scoped recall
          without leaking secrets into memory.
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

        <CardSection icon="💾" title="PERSISTENCE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Memory</span><span>#AgenticAI</span><span>#Day92</span><span>#Checkpoints</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
