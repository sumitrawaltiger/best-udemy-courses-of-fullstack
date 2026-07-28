import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CREWAI = 'https://docs.crewai.com/';
const OPENAI_AGENTS = 'https://openai.github.io/openai-agents-python/';

const LEARNT_TODAY = [
  { title: 'Framework zoo', text: 'LangGraph, CrewAI, OpenAI Agents SDK, LlamaIndex, n8n — same ideas, different APIs' },
  { title: 'Pick by job', text: 'graphs for control; crews for role teams; low-code for integration-heavy flows' },
  { title: 'Portable skills', text: 'schemas, evals, memory, HITL, and budgets transfer across frameworks' },
  { title: 'Avoid rewrite churn', text: 'don’t rebuild the same agent in five SDKs — learn patterns once' },
  { title: 'A2A / MCP', text: 'protocols let agents and tools interoperate beyond one vendor lock-in' },
  { title: 'Portfolio bar', text: 'one sharp multi-hop agentic RAG with traces + eval beats ten demos' },
  { title: 'Phase 12 map', text: 'Agentic RAG → context eng → schemas → AgentOps → ship' },
  { title: 'What’s next', text: 'cloud projects, coding agents, or fill missing middle journal days' },
];

const CORE = [
  {
    icon: '🧰', title: 'Framework Fit', titleClass: 'card-title-cyan', subtitle: 'Choose',
    description:
      'Need cycles & interrupts? LangGraph. Role swarm? CrewAI. Fast OpenAI-native tools? Agents SDK.',
    code: 'control → LangGraph\nroles → CrewAI\nOpenAI-native → SDK',
  },
  {
    icon: '🎓', title: 'Milestone Build', titleClass: 'card-title-purple', subtitle: 'Ship',
    description:
      'Deliver: Agentic RAG + Pydantic tools + context budget + traces + 20-task eval. README with metrics.',
    code: 'RAG agent\n+ schemas + traces\n+ eval table',
  },
  {
    icon: '🗺️', title: 'Pattern Checklist', titleClass: 'card-title-amber', subtitle: 'Remember',
    description:
      'Router, stop rules, citations, repair on validation fail, cost tags, kill switch. Framework-agnostic.',
    code: 'route · stop · cite\nrepair · $ · kill',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'One-Pager Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Write the milestone spec: user stories, tools, eval gates, and which framework you’ll use (and why).',
    code: 'stories · tools\neval · framework why',
  },
  {
    icon: '📦', title: 'Ship Checklist', titleClass: 'card-title-purple', subtitle: 'Done',
    description:
      'Repo has README, docker run, sample traces screenshot, and before/after eval numbers.',
    code: 'README · docker\ntrace · eval Δ',
  },
  {
    icon: '🔜', title: 'Next: Coding Agents', titleClass: 'card-title-amber', subtitle: 'Day 91',
    description: 'Continue Phase 13 — coding agents, memory, A2A, cloud deploy, milestone.',
    link: { href: '/agentic-day-91', label: 'Go to Day 91 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI + Agentic curriculum behind this journal arc.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📖', title: 'CrewAI Docs', titleClass: 'card-title-purple', subtitle: 'Framework',
    description: 'Role-based multi-agent crews — useful contrast to LangGraph.',
    link: { href: CREWAI, label: 'Open CrewAI →', external: true },
  },
  {
    icon: '📖', title: 'OpenAI Agents SDK', titleClass: 'card-title-amber', subtitle: 'Framework',
    description: 'Python agents SDK — another production-shaped option.',
    link: { href: OPENAI_AGENTS, label: 'Open Agents SDK →', external: true },
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

export default function AgenticDay85() {
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
          <Link to="/agentic-day-84" className="day001-nav-btn day001-nav-prev">← Day 84</Link>
          <p className="day001-datetime">Agentic AI Day 85 · 24 Oct 2026</p>
          <Link to="/agentic-day-91" className="day001-nav-btn day001-nav-next">Day 91 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Milestone</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 85 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">MULTI-FRAMEWORK AGENTS · PHASE 12 MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · MILESTONE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '57%' }} /></div>

        <p className="day001-summary">
          Day 85 closes Phase 12. Compare <strong>frameworks</strong>, keep portable patterns, and ship one portfolio{' '}
          <strong>Agentic RAG</strong> with schemas, traces, and eval.
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

        <CardSection icon="🏁" title="PHASE 12 CLOSE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#CrewAI</span><span>#LangGraph</span><span>#Day85</span><span>#AgenticAI</span><span>#Milestone</span>
        </footer>
      </div>
    </div>
  );
}
