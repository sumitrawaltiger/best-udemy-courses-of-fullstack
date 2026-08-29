import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MEMORY_DOCS = 'https://python.langchain.com/docs/concepts/memory/';
const MCP = 'https://modelcontextprotocol.io/';

const LEARNT_TODAY = [
  { title: 'Short-term memory', text: 'current thread messages and scratchpad for this run' },
  { title: 'Long-term memory', text: 'vector store or DB facts keyed by user/project across sessions' },
  { title: 'Episodic vs semantic', text: 'what happened in a past run vs general reusable knowledge' },
  { title: 'Tool contracts', text: 'JSON schema, timeouts, and idempotency keys for every tool' },
  { title: 'Side effects', text: 'reads are usually safe; writes need confirmation and audit logs' },
  { title: 'Tool errors', text: 'typed errors so the agent can retry, replan, or ask a human' },
  { title: 'Caching', text: 'cache pure tool results to cut cost and latency' },
  { title: 'Privacy', text: 'don’t dump secrets or PII into long-term memory without redaction' },
];

const CORE = [
  {
    icon: '💾', title: 'Memory Tiers', titleClass: 'card-title-cyan', subtitle: 'Design',
    description:
      'Hot buffer for the thread, warm summaries when history grows, cold vector recall for long-term facts. Evict aggressively.',
    code: 'hot:  message buffer\nwarm: running summary\ncold: vector / DB facts',
  },
  {
    icon: '🛠️', title: 'Tool Spec', titleClass: 'card-title-purple', subtitle: 'Schema',
    description:
      'Every tool needs name, description, args schema, examples, timeout, and documented failure modes.',
    code: '{\n  "name": "search",\n  "args": { "q": "string" },\n  "timeout_ms": 8000\n}',
  },
  {
    icon: '🔐', title: 'Safe Writes', titleClass: 'card-title-amber', subtitle: 'HITL',
    description:
      'Destructive tools require confirm=true from policy or a human. Prefer dry-run modes when you can.',
    code: 'if tool.is_write:\n  require confirm=True\n  audit_log(call)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Memory Demo', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Store a user preference in session 1; recall it in session 2 without repeating the question.',
    code: 'save preference\n→ later: retrieve',
  },
  {
    icon: '🧰', title: 'Three Tools', titleClass: 'card-title-purple', subtitle: 'Build',
    description:
      'Implement search, calculator, and ticket_create with JSON schemas + timeouts. Force one intentional failure path.',
    code: 'search · calculate\nticket_create (+ timeout)',
  },
  {
    icon: '🔜', title: 'Next: Eval', titleClass: 'card-title-amber', subtitle: 'Day 50 Preview',
    description: 'Tomorrow — offline eval sets, traces, and online agent SLOs.',
    link: { href: '/agentic-day-50', label: 'Go to Day 50 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangGraph & MCP', titleClass: 'card-title-cyan', subtitle: 'PY Module 46',
    description: 'Where tools and protocol servers plug into your agent graph.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open PY Module 46 →' },
  },
  {
    icon: '📖', title: 'LangChain Memory', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Concepts for short-term, long-term, and summarization memory patterns.',
    link: { href: MEMORY_DOCS, label: 'Open memory docs →', external: true },
  },
  {
    icon: '🔌', title: 'MCP Spec', titleClass: 'card-title-amber', subtitle: 'Protocol',
    description: 'Standard tool discovery and calling — keep tool contracts portable.',
    link: { href: MCP, label: 'Open MCP →', external: true },
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

export default function AgenticDay49() {
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
          <Link to="/agentic-day-48" className="day001-nav-btn day001-nav-prev">← Day 48</Link>
          <p className="day001-datetime">Agentic AI Day 49 · 18 Oct 2026</p>
          <Link to="/agentic-day-50" className="day001-nav-btn day001-nav-next">Day 50 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Memory</span><span>Phase 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 49 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">AGENT MEMORY & TOOLS DEEP DIVE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Day 49 sharpens the toolbox. Design <strong>short/long-term memory</strong>, reliable{' '}
          <strong>tool contracts</strong>, and safe side effects.
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

        <CardSection icon="🧠" title="MEMORY & TOOLS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Memory</span><span>#Tools</span><span>#Day49</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
