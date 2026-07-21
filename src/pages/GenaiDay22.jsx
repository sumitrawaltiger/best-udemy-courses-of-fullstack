import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture22';

const LEARNT_TODAY = [
  { title: 'The vision', text: 'an autonomous AI software team (like Devin) that builds an app from a single requirement' },
  { title: 'Eight specialized agents', text: 'PM, Architect, Planner, Coder, Reviewer, Executor, Debugger and Deploy — each owns one job' },
  { title: 'The pipeline', text: 'understand → plan → code → review → run → debug → deploy, mostly on its own' },
  { title: 'PM removes ambiguity', text: 'the PM agent clarifies the requirement into a precise spec before any design starts' },
  { title: 'Architect designs', text: 'the Architect turns the spec into a blueprint — database, APIs, pages and folder structure' },
  { title: 'Real execution', text: 'the Executor runs code in a Docker sandbox, and real errors feed the Debugger' },
  { title: 'Human-in-the-loop', text: 'the team pauses for clarifying answers and approvals at key checkpoints' },
];

const VISION = [
  {
    icon: '🤖', title: 'Like Devin', titleClass: 'card-title-cyan', subtitle: 'Autonomous Dev Team',
    description:
      'The goal: hand the system a requirement and it plans, writes, reviews, runs, debugs and deploys the app — a full software team made of cooperating agents, with minimal human help.',
    code: '// input:  "Build a task-manager app with auth"\n// output: a working, deployed app\n// in between: an AI team does the work',
  },
  {
    icon: '🎯', title: 'One Role Per Agent', titleClass: 'card-title-purple', subtitle: 'Focused Experts',
    description:
      'Each agent has a single responsibility and a tight prompt, mirroring a real dev team. That focus is what keeps the code quality high across a big project.',
    code: '// PM · Architect · Planner · Coder\n// Reviewer · Executor · Debugger · Deploy',
  },
];

const AGENTS = [
  {
    icon: '📋', title: 'Plan The Work', titleClass: 'card-title-cyan', subtitle: 'PM → Architect → Planner',
    description:
      'The PM turns the requirement into a clear spec (asking questions if needed). The Architect designs the blueprint. The Planner breaks it into a phased, dependency-ordered task list.',
    code: '// PM        → clarify → spec\n// Architect → DB, APIs, pages, folders\n// Planner   → ordered task plan',
  },
  {
    icon: '⌨️', title: 'Build & Verify', titleClass: 'card-title-purple', subtitle: 'Coder → Reviewer → Executor',
    description:
      'The Coder writes one task at a time, the Reviewer checks it for bugs and security, and the Executor actually runs it in a Docker sandbox to capture real output.',
    code: '// Coder    → write one task\n// Reviewer → bugs, security, integration\n// Executor → run it for real (Docker)',
  },
  {
    icon: '🐞', title: 'Fix & Ship', titleClass: 'card-title-amber', subtitle: 'Debugger → Deploy',
    description:
      'When execution fails, the Debugger reads the real error, finds the root cause and proposes a fix. Once everything passes, the Deploy agent generates the deployment configs.',
    code: '// Debugger → real error → root cause → fix\n// Deploy   → deployment configs & steps',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 22', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The AI Dev Team vision lecture and diagram in the STRIKE GenAI repo — the roles before the design and build.',
    link: { href: GH_LECTURE, label: 'Open Lecture 22 →', external: true },
  },
  {
    icon: '🧭', title: 'Why It’s The Capstone', titleClass: 'card-title-purple', subtitle: 'Everything Combined',
    description:
      'This project uses it all — prompts, tools, RAG, memory, LangGraph and multi-agent orchestration — to build real software autonomously.',
    footer: 'prompts + tools + RAG + agents + LangGraph',
  },
  {
    icon: '🔜', title: 'Next: The Design', titleClass: 'card-title-amber', subtitle: 'Day 23 Preview',
    description:
      'Tomorrow — Lecture 23: the complete system design — the tech stack, the 30-node LangGraph flow, and the V2 fixes that make it robust.',
    link: { href: '/genai-day-23', label: 'Go to Day 23 →' },
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

export default function GenaiDay22() {
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
          <Link to="/genai-day-21" className="day001-nav-btn day001-nav-prev">← Day 21</Link>
          <p className="day001-datetime">Agentic AI Day 22</p>
          <Link to="/genai-day-23" className="day001-nav-btn day001-nav-next">Day 23 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 22</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 22 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">THE AI DEV TEAM — AN AUTONOMOUS SOFTWARE TEAM</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '22%' }} /></div>

        <p className="day001-summary">
          Lecture 22 — the big one: an <strong>autonomous AI software team</strong>, like <strong>Devin</strong>, that
          takes a single requirement and builds the app. <strong>Eight specialized agents</strong> —{' '}
          <strong>PM, Architect, Planner, Coder, Reviewer, Executor, Debugger, Deploy</strong> — each own one job and
          hand work down the pipeline: <strong>understand → plan → code → review → run → debug → deploy</strong>.
          Code runs for real in a <strong>Docker sandbox</strong>, real errors drive the Debugger, and a{' '}
          <strong>human stays in the loop</strong> for clarifications and approvals.{' '}
          <em>Tomorrow: the full design. (Diagram-based lecture.)</em>
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

        <CardSection icon="🤖" title="THE VISION" cards={VISION} columns={2} />
        <CardSection icon="👥" title="THE EIGHT AGENTS" cards={AGENTS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#MultiAgent</span><span>#AIDevTeam</span><span>#CoderArmy</span>
        </footer>
      </div>
    </div>
  );
}
