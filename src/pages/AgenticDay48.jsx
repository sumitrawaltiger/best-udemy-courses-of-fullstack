import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MULTI_AGENT_DOCS = 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/';

const LEARNT_TODAY = [
  { title: 'Why multi-agent', text: 'specialize roles, parallelize work, and add critics for quality' },
  { title: 'Router pattern', text: 'classify intent → send to the right specialist agent' },
  { title: 'Supervisor', text: 'one orchestrator assigns tasks and merges worker outputs' },
  { title: 'Crew / swarm', text: 'peer agents with shared goals and message passing' },
  { title: 'Handoffs', text: 'explicit state transfer between agents with schemas — no silent context loss' },
  { title: 'Conflict', text: 'when two agents disagree, need a judge node or priority rules' },
  { title: 'Cost control', text: 'more agents = more tokens; set a budget per run' },
  { title: 'When not to', text: 'a simple FAQ does not need five agents — start with one' },
];

const CORE = [
  {
    icon: '🧭', title: 'Router', titleClass: 'card-title-cyan', subtitle: 'Dispatch',
    description:
      'An intent classifier picks researcher vs coder vs support. Keep the router thin — classify, don’t solve.',
    code: 'intent = classify(msg)\nif intent == "research":\n  → researcher\nelif intent == "code":\n  → coder',
  },
  {
    icon: '👔', title: 'Supervisor', titleClass: 'card-title-purple', subtitle: 'Orchestrate',
    description:
      'Plan tasks, call workers, synthesize the final answer. The supervisor owns stop rules and the merge step.',
    code: 'plan → workers\n→ merge → answer\n# supervisor owns budget',
  },
  {
    icon: '🧵', title: 'Shared Scratchpad', titleClass: 'card-title-amber', subtitle: 'State',
    description:
      'A common memory object all agents read/write with clear roles. Prefer schema’d fields over free-form dumps.',
    code: 'state = {\n  "goal": ...,\n  "notes": [],\n  "draft": None,\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Two-Agent Debate', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Proposer + critic loop until the critic approves or you hit max 3 rounds. Log each round.',
    code: 'propose → critique\nrepeat ≤ 3',
  },
  {
    icon: '💵', title: 'Budget Cap', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'Stop when total tokens > N; return best-so-far with a clear “budget exceeded” flag.',
    code: 'if tokens > MAX:\n  return best_so_far',
  },
  {
    icon: '🔜', title: 'Next: Memory & Tools', titleClass: 'card-title-amber', subtitle: 'Day 49 Preview',
    description: 'Tomorrow — short/long-term memory and reliable tool contracts.',
    link: { href: '/agentic-day-49', label: 'Go to Day 49 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Agentic Intro', titleClass: 'card-title-cyan', subtitle: 'PY Module 45',
    description: 'Foundation for multi-agent ideas — agents, memory, and architecture.',
    link: { href: '/python/learn/introduction-to-agentic-ai', label: 'Open PY Module 45 →' },
  },
  {
    icon: '📖', title: 'LangGraph Multi-Agent', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official multi-agent tutorials — supervisor, handoffs, and collaboration patterns.',
    link: { href: MULTI_AGENT_DOCS, label: 'Open multi-agent docs →', external: true },
  },
  {
    icon: '🕸️', title: 'LangGraph & MCP', titleClass: 'card-title-amber', subtitle: 'PY Module 46',
    description: 'Graph primitives you use to implement routers and supervisors in code.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open PY Module 46 →' },
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

export default function AgenticDay48() {
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
          <Link to="/agentic-day-47" className="day001-nav-btn day001-nav-prev">← Day 47</Link>
          <p className="day001-datetime">Agentic AI Day 48 · 14 Oct 2026</p>
          <Link to="/agentic-day-49" className="day001-nav-btn day001-nav-next">Day 49 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Multi-Agent</span><span>Phase 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 48 <span aria-hidden="true">👥</span></h1>
              <p className="day001-day-theme">MULTI-AGENT SYSTEMS PATTERNS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · MULTI-AGENT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '32%' }} /></div>

        <p className="day001-summary">
          Day 48 scales beyond one brain. Learn <strong>router</strong>, <strong>supervisor</strong>, and{' '}
          <strong>crew</strong> patterns for multi-agent collaboration.
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

        <CardSection icon="👥" title="TEAM PATTERNS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#MultiAgent</span><span>#Day48</span><span>#LangGraph</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
