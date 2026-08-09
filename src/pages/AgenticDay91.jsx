import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Coding agents', text: 'agents that edit repos, run tests, and iterate — not just chat about code' },
  { title: 'CLI + IDE', text: 'Claude Code, Codex CLI, and IDE agents share a loop: read → plan → patch → verify' },
  { title: 'Repo tools', text: 'read_file, search, apply_patch, run_terminal — least privilege still applies' },
  { title: 'Verification first', text: 'tests and linters are the ground truth; never “trust the diff” alone' },
  { title: 'Scoped tasks', text: 'small PRs beat mega-refactors; agents thrash without a clear Definition of Done' },
  { title: 'Human gates', text: 'approve destructive git/network actions; review before push' },
  { title: 'Failure modes', text: 'infinite edit loops, wrong file, hallucinated APIs — cap steps and require evidence' },
  { title: 'What’s next', text: 'persistent memory so coding agents remember project conventions across sessions' },
];

const CORE = [
  {
    icon: '⌨️', title: 'Edit Loop', titleClass: 'card-title-cyan', subtitle: 'Flow',
    description:
      'Plan change → locate files → patch → run tests → read failures → retry. Stop on green or max steps.',
    code: 'plan → patch\n→ test → fix\nmax_steps',
  },
  {
    icon: '🧪', title: 'Verify Gate', titleClass: 'card-title-purple', subtitle: 'Truth',
    description:
      'Definition of Done includes lint + unit tests. No “looks good” without a command exit code 0.',
    code: 'lint && pytest\nexit 0 required',
  },
  {
    icon: '🔒', title: 'Safe Shell', titleClass: 'card-title-amber', subtitle: 'Policy',
    description:
      'Allowlist commands (pytest, npm test). Block rm -rf, curl|sh, and secret-exfil patterns.',
    code: 'allow: test/lint\ndeny: rm -rf, curl|sh',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Tiny Agent Task', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Give an agent: “Add a /health endpoint and a test.” Require a green test run in the log.',
    code: 'task → patches\n→ pytest green',
  },
  {
    icon: '📝', title: 'DoD Card', titleClass: 'card-title-purple', subtitle: 'Process',
    description:
      'Write Definition of Done for coding agents: files touched, tests, no secrets, PR description.',
    code: 'files · tests\nsecrets · PR notes',
  },
  {
    icon: '🔜', title: 'Next: Memory', titleClass: 'card-title-amber', subtitle: 'Day 92 Preview',
    description: 'Tomorrow — persistent memory so agents keep project conventions.',
    link: { href: '/agentic-day-92', label: 'Go to Day 92 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Agent Design Day', titleClass: 'card-title-cyan', subtitle: 'Day 79',
    description: 'System-design vocabulary for tool loops and HITL.',
    link: { href: '/agentic-day-79', label: 'Open Day 79 →' },
  },
  {
    icon: '🕸️', title: 'LangGraph & MCP', titleClass: 'card-title-purple', subtitle: 'Module 46',
    description: 'Graph + tool servers — same skeleton coding agents use.',
    link: { href: '/python/learn/langgraph-and-mcp', label: 'Open Module 46 →' },
  },
  {
    icon: '🛡️', title: 'Guardrails Day', titleClass: 'card-title-amber', subtitle: 'Day 52',
    description: 'Policy and sandbox thinking for shell/file tools.',
    link: { href: '/agentic-day-52', label: 'Open Day 52 →' },
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

export default function AgenticDay91() {
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
          <Link to="/agentic-day-90" className="day001-nav-btn day001-nav-prev">← Day 90</Link>
          <p className="day001-datetime">Agentic AI Day 91 · 9 Nov 2026</p>
          <Link to="/agentic-day-92" className="day001-nav-btn day001-nav-next">Day 92 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coding Agents</span><span>Phase 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 91 <span aria-hidden="true">⌨️</span></h1>
              <p className="day001-day-theme">CODING AGENTS & AUTONOMOUS DEV</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · CODING</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '61%' }} /></div>

        <p className="day001-summary">
          Day 91 builds coding agents. Learn the <strong>edit → test → fix</strong> loop, verification gates, and safe
          shell policy for autonomous dev assistants.
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

        <CardSection icon="⌨️" title="CODING LOOP" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#CodingAgents</span><span>#AgenticAI</span><span>#Day91</span><span>#DevTools</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
