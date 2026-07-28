import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Agent vs chatbot", text: "chatbots answer; agents pursue goals with tools and multi-step plans" },
  { title: "Agentic AI", text: "systems that plan, act, observe, and iterate toward an objective" },
  { title: "Memory", text: "short-term scratchpad vs long-term vector/DB memory" },
  { title: "Planning", text: "decompose goals into steps; replan when tools fail" },
  { title: "Architecture", text: "brain (LLM) + tools + memory + orchestrator loop" },
  { title: "Multi-agent", text: "specialist agents (researcher, coder, critic) collaborating" },
  { title: "Human-in-the-loop", text: "approve risky actions before execution" },
  { title: "What’s next", text: "LangGraph/MCP and n8n turn this theory into workflows" },
];

const CORE = [
  {
    icon: "🎯", title: "Goal Loop", titleClass: 'card-title-cyan', subtitle: "Think→Act",
    description:
      "observe → plan → tool call → observe → … until done or budget hit.",
    code: "plan → act → observe",
  },
  {
    icon: "🧠", title: "Memory Layers", titleClass: 'card-title-purple', subtitle: "State",
    description:
      "Conversation buffer + retrieved long-term facts + tool results log.",
    code: "short · long · tool log",
  },
  {
    icon: "👥", title: "Multi-Agent", titleClass: 'card-title-amber', subtitle: "Team",
    description:
      "Router assigns sub-tasks; critic agent reviews outputs.",
    code: "researcher | writer | critic",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Toy Agent", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "LLM + calculator tool that solves multi-step math word problems.",
    code: "tool: calculate",
  },
  {
    icon: "📝", title: "Write Spec", titleClass: 'card-title-purple', subtitle: "Design",
    description: "One-page agent spec: goal, tools, memory, stop conditions.",
    code: "goal · tools · stop",
  },
  {
    icon: "🔜", title: "Next: LangGraph", titleClass: 'card-title-amber', subtitle: "Day 46",
    description: "Tomorrow — LangGraph workflows and MCP servers.",
    link: { href: '/agentic-day-46', label: 'Go to Day 46 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Introduction to Agentic AI", titleClass: 'card-title-cyan', subtitle: "PY Module 45",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/introduction-to-agentic-ai", label: 'Open module →' },
  },
  {
    icon: "📖", title: "LangGraph Concepts", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://langchain-ai.github.io/langgraph/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Mental Model", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Agent = LLM + tools + memory + loop with a clear stop rule.", label: 'Open →', external: true },
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
          <p className="day001-datetime">Agentic AI Day 45 · 45 Aug 2026</p>
          <Link to="/agentic-day-46" className="day001-nav-btn day001-nav-next">Day 46 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Agents</span><span>Day 45</span></div>
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
          Day 45 opens true agents. Learn how <strong>agentic AI</strong> plans, uses memory, and coordinates <strong>multi-agent</strong> systems beyond single chat replies.
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

        <CardSection icon="🤖" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day45</span><span>#Agents</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
