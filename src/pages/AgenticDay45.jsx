import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const AGENT_YT = 'https://www.youtube.com/watch?v=sal78ACtGTc';
const LANGGRAPH = 'https://langchain-ai.github.io/langgraph/';

const LEARNT_TODAY = [
  { title: 'Agent vs chatbot', text: 'chatbots answer once; agents pursue a goal with tools and multi-step plans' },
  { title: 'Agentic AI', text: 'systems that plan, act, observe, and iterate until the goal (or budget) is hit' },
  { title: 'Memory', text: 'short-term scratchpad vs long-term vector/DB memory for facts across sessions' },
  { title: 'Planning', text: 'decompose goals into steps; replan when a tool fails' },
  { title: 'Architecture', text: 'LLM brain + tools + memory + orchestrator loop with a clear stop rule' },
  { title: 'Multi-agent', text: 'specialists (researcher, coder, critic) collaborating under a supervisor/router' },
  { title: 'Human-in-the-loop', text: 'approve risky side effects before they run' },
  { title: 'What’s next', text: 'LangGraph/MCP and n8n turn this theory into real workflows' },
];

const CORE = [
  {
    icon: '🎯', title: 'Goal Loop', titleClass: 'card-title-cyan', subtitle: 'Think → Act',
    description:
      'observe → plan → tool call → observe → … until done or max steps. Always define stop conditions up front.',
    code: 'while not done and steps < MAX:\n  plan → act → observe\n# stop: success | fail | budget',
  },
  {
    icon: '🧠', title: 'Memory Layers', titleClass: 'card-title-purple', subtitle: 'State',
    description:
      'Conversation buffer for the thread, summaries when history grows, vector recall for long-term facts.',
    code: 'short-term: messages\nlong-term: vector / DB\ntool log: what ran',
  },
  {
    icon: '👥', title: 'Multi-Agent', titleClass: 'card-title-amber', subtitle: 'Team',
    description:
      'Router sends intent to a specialist; a critic reviews output. Only add agents when specialization helps.',
    code: 'router → researcher\n         → writer\n         → critic',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Toy Agent', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'LLM + calculator tool that solves a multi-step word problem. Log every tool call.',
    code: 'tool: calculate(expr)\nloop until final answer',
  },
  {
    icon: '📝', title: 'Write a Spec', titleClass: 'card-title-purple', subtitle: 'Design',
    description:
      'One page: goal, tools, memory, stop rules, and what needs human approval.',
    code: 'goal · tools · memory\nstop · HITL gates',
  },
  {
    icon: '🔜', title: 'Next: LangGraph & MCP', titleClass: 'card-title-amber', subtitle: 'Day 46 Preview',
    description: 'Next — stateful graph workflows and Model Context Protocol tool servers.',
    link: { href: '/agentic-day-46', label: 'Go to Day 46 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Introduction to Agentic AI', titleClass: 'card-title-cyan', subtitle: 'PY Module 45',
    description: 'Full lesson — agents vs agentic AI, roadmap, memory, and multi-agent ideas.',
    link: { href: '/python/learn/introduction-to-agentic-ai', label: 'Open PY Module 45 →' },
  },
  {
    icon: '🎬', title: 'Agentic AI Explained', titleClass: 'card-title-purple', subtitle: 'IBM',
    description: 'Accessible overview of agentic AI concepts.',
    link: { href: AGENT_YT, label: 'Watch agentic AI intro →', external: true },
  },
  {
    icon: '📖', title: 'LangGraph Docs', titleClass: 'card-title-amber', subtitle: 'Next Step',
    description: 'Stateful agent graphs — the framework Day 46 builds on.',
    link: { href: LANGGRAPH, label: 'Open LangGraph →', external: true },
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

export default function AgenticDay45() {
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
          <Link to="/agentic-day-44" className="day001-nav-btn day001-nav-prev">← Day 44</Link>
          <p className="day001-datetime">Agentic AI Day 45 · 14 Oct 2026</p>
          <Link to="/agentic-day-46" className="day001-nav-btn day001-nav-next">Day 46 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Agents</span><span>Phase 9</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 45 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">INTRODUCTION TO AGENTIC AI</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · AGENTS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '30%' }} /></div>

        <p className="day001-summary">
          Day 45 opens true agents. Learn how <strong>agentic AI</strong> plans, uses{' '}
          <strong>memory</strong>, and coordinates <strong>multi-agent</strong> teams beyond a single chat reply.
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

        <CardSection icon="🤖" title="AGENT BASICS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Agents</span><span>#Day45</span><span>#GenAI</span><span>#MultiAgent</span>
        </footer>
      </div>
    </div>
  );
}
