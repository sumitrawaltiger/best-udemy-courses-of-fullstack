import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PYTHON = '/python';

const LEARNT_TODAY = [
  { title: 'Phase 13 arc', text: 'coding agents → persistent memory → A2A interop → cloud deploy → ship' },
  { title: 'Portfolio bar', text: 'one cloud-hosted agent with memory, tools, traces, eval, and a runbook' },
  { title: 'Demo story', text: 'show a live task: plan → tool → remember → resume → cite → cost' },
  { title: 'README proof', text: 'architecture diagram, deploy steps, eval table, known limits' },
  { title: 'Security story', text: 'IAM, allowlists, HITL, redacted traces — say it out loud in demos' },
  { title: 'Cost story', text: 'show $/successful task and the kill switch you wired' },
  { title: 'Interview ready', text: 'you can now walk from RAG to AgentOps to cloud in one narrative' },
  { title: 'Keep shipping', text: 'fill gaps, deepen one cloud, or start the next product agent' },
];

const CORE = [
  {
    icon: '🎓', title: 'Milestone Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description:
      'Coding or support agent · memory · MCP/tools · cloud deploy · AgentOps traces · eval ≥20 tasks · runbook.',
    code: 'agent · memory\ncloud · traces\neval · runbook',
  },
  {
    icon: '🎬', title: '5-Min Demo', titleClass: 'card-title-purple', subtitle: 'Show',
    description:
      'Script: problem → architecture → live run → failed-trace debug → eval numbers → next risk.',
    code: 'problem → live\n→ debug → metrics',
  },
  {
    icon: '🗺️', title: 'Journey Map', titleClass: 'card-title-amber', subtitle: '13',
    description:
      'From autonomous coding loops to multi-cloud hosting — patterns travel; vendors change.',
    code: 'code → remember\n→ interop → cloud',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Ship the Repo', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Tag v0.1.0: Docker, .env.example, README, eval CSV, one screenshot of a trace UI.',
    code: 'v0.1.0 tag\nREADME · eval · trace',
  },
  {
    icon: '📕', title: 'Runbook Page', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'One page: symptoms → dashboards → rollback → who to page. Put it in /docs/runbook.md.',
    code: 'symptom → dash\n→ rollback → page',
  },
  {
    icon: '🔜', title: 'Next: Voice Agents', titleClass: 'card-title-amber', subtitle: 'Day 96 Preview',
    description: 'Next in the curriculum — Phase 14: voice, computer-use, enterprise integration, and agent UX.',
    link: { href: '/agentic-day-96', label: 'Go to Day 96 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python / Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full curriculum behind the Gen AI + Agentic journal.',
    link: { href: PYTHON, label: 'Open Python track →' },
  },
  {
    icon: '⌨️', title: 'Coding Agents', titleClass: 'card-title-purple', subtitle: 'Day 91',
    description: 'Start of this phase — autonomous edit/test loops.',
    link: { href: '/agentic-day-91', label: 'Open Day 91 →' },
  },
  {
    icon: '🔭', title: 'AgentOps Day', titleClass: 'card-title-amber', subtitle: 'Day 84',
    description: 'Traces and eval hooks your milestone should include.',
    link: { href: '/agentic-day-84', label: 'Open Day 84 →' },
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

export default function AgenticDay95() {
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
          <Link to="/agentic-day-94" className="day001-nav-btn day001-nav-prev">← Day 94</Link>
          <p className="day001-datetime">Agentic AI Day 95 · 6 Oct 2026</p>
          <Link to="/agentic-day-96" className="day001-nav-btn day001-nav-next">Day 96 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Milestone</span><span>Phase 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 95 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">PRODUCTION CLOUD AGENT MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '63%' }} /></div>

        <p className="day001-summary">
          Day 95 closes Phase 13. Ship a <strong>cloud-hosted agent</strong> with memory, traces, eval, and a demo you
          can tell in five minutes.
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

        <CardSection icon="🏁" title="PHASE 13 CLOSE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Milestone</span><span>#CloudAgents</span><span>#Day95</span><span>#AgenticAI</span><span>#Portfolio</span>
        </footer>
      </div>
    </div>
  );
}
