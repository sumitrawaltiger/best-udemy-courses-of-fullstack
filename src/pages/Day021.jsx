import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture21';
const LANGGRAPH_DOCS = 'https://langchain-ai.github.io/langgraphjs/';

const LEARNT_TODAY = [
  { title: 'One agent hits limits', text: 'a single generalist agent struggles with large, multi-step tasks and long, unfocused prompts' },
  { title: 'Divide and specialize', text: 'give each agent one narrow role with a focused prompt — it does that job far better' },
  { title: 'Agents collaborate', text: 'one agent’s output becomes the next one’s input, forming a pipeline or a team' },
  { title: 'Communicate via state', text: 'in LangGraph, agents do not call each other — they read and write a shared state object' },
  { title: 'Specialization = quality', text: 'focused prompts and roles produce more reliable, higher-quality output than one do-everything prompt' },
  { title: 'Common patterns', text: 'a planner delegating to workers, or a role-based pipeline (PM → architect → coder → reviewer)' },
  { title: 'Next: a real team', text: 'the coming lectures build an autonomous software development team of specialized agents' },
];

const WHY = [
  {
    icon: '🧠', title: 'Why One Agent Struggles', titleClass: 'card-title-cyan', subtitle: 'Too Much At Once',
    description:
      'Ask a single agent to plan, code, review, test and deploy and its prompt becomes a tangle. It loses focus, forgets constraints, and quality drops as the task grows.',
    code: '// one giant prompt: "plan + code + review + test + deploy"\n// → unfocused, error-prone, hard to control',
  },
  {
    icon: '👥', title: 'A Team Of Specialists', titleClass: 'card-title-purple', subtitle: 'Divide The Work',
    description:
      'Split the job across agents, each with a single responsibility and a tight prompt — a planner, a coder, a reviewer. Each becomes an expert at its one thing.',
    code: '// planner  → break the task down\n// coder    → write one piece\n// reviewer → check it\n// each prompt stays short and focused',
  },
];

const HOW = [
  {
    icon: '🔗', title: 'They Collaborate', titleClass: 'card-title-cyan', subtitle: 'Output → Input',
    description:
      'Agents form a workflow: the planner’s plan feeds the coder, the coder’s code feeds the reviewer. Structured hand-offs replace one overloaded model.',
    code: '// plan  →  code  →  review  →  test\n// each stage consumes the previous stage’s output',
  },
  {
    icon: '📦', title: 'Shared State', titleClass: 'card-title-purple', subtitle: 'Not Direct Calls',
    description:
      'In LangGraph, agents never call each other directly. They read from and write to a shared state object — the single source of truth the whole team works on.',
    code: '// Node A writes to state → Node B reads from state\n// state is the ONLY channel between agents',
  },
  {
    icon: '🎼', title: 'Orchestration', titleClass: 'card-title-amber', subtitle: 'LangGraph',
    description:
      'A graph (from Day 20) orchestrates the team — deciding which agent runs next, when to loop, and when to stop. Multi-agent systems are LangGraph’s reason to exist.',
    footer: 'specialized agents + shared state + a graph = a team',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 21', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The multi-agent systems lecture and diagram in the STRIKE GenAI repo — the concept behind the AI Dev Team ahead.',
    link: { href: GH_LECTURE, label: 'Open Lecture 21 →', external: true },
  },
  {
    icon: '📘', title: 'LangGraph.js', titleClass: 'card-title-purple', subtitle: 'Orchestration',
    description:
      'The framework that runs multi-agent workflows — state, nodes, conditional edges and cycles that coordinate a team of agents.',
    link: { href: LANGGRAPH_DOCS, label: 'LangGraph.js docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: The AI Dev Team', titleClass: 'card-title-amber', subtitle: 'Day 22 Preview',
    description:
      'Tomorrow — Lecture 22: the vision of an autonomous software development team (like Devin) — the roles and the requirement-to-deploy pipeline.',
    link: { href: '/day-022', label: 'Go to Day 22 →' },
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-prev">← Day 20</Link>
          <p className="day001-datetime">Agentic AI Day 21</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">Day 22 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 21</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 21 <span aria-hidden="true">👥</span></h1>
              <p className="day001-day-theme">MULTI-AGENT SYSTEMS — A TEAM OF AGENTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '21%' }} /></div>

        <p className="day001-summary">
          Lecture 21 — <strong>multi-agent systems</strong>. One generalist agent buckles under large, multi-step
          work, so we <strong>divide and specialize</strong>: each agent gets a single role and a focused prompt and
          becomes an expert at it. The agents <strong>collaborate</strong> — one’s output is the next one’s input —
          but they never call each other directly; they read and write a <strong>shared state</strong>, coordinated
          by a <strong>LangGraph</strong> graph. Specialization plus orchestration is what makes a real{' '}
          <strong>AI team</strong> possible. <em>Next, we build one. (Diagram-based lecture; standard concepts.)</em>
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

        <CardSection icon="🧠" title="WHY ONE AGENT ISN’T ENOUGH" cards={WHY} columns={2} />
        <CardSection icon="🎼" title="A TEAM, ORCHESTRATED" cards={HOW} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#MultiAgent</span><span>#LangGraph</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
