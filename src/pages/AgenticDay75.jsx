import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Agentic app = system', text: 'graph + tools + policies + logs + UX, not just chat' },
  { title: 'Choose one workflow', text: 'triage bot, research bot, ops bot — one domain, one win' },
  { title: 'Tool discipline', text: 'schemas, timeouts, retries, and idempotency make it reliable' },
  { title: 'Safety rails', text: 'policy gates + HITL for irreversible actions' },
  { title: 'Memory with scope', text: 'recall is powerful only when tenant/user boundaries are strict' },
  { title: 'Evaluation', text: 'define success rate and run regression suites every release' },
  { title: 'Ops readiness', text: 'queues, budgets, alerts, and runbooks' },
  { title: 'Portfolio story', text: 'demo a real task end-to-end with logs and guardrails visible' },
];

const CORE = [
  {
    icon: '🎓', title: 'Capstone', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description:
      'Build one end-to-end agentic system: UI/API, graph orchestration, tools, memory, and safety.',
    code: 'agent -> tools -> result',
  },
  {
    icon: '✅', title: 'Quality Bar', titleClass: 'card-title-purple', subtitle: 'Prove',
    description:
      'Gate releases by eval pass rate, tool success rate, and budget compliance.',
    code: 'eval · tools · $',
  },
  {
    icon: '🏁', title: 'Milestone', titleClass: 'card-title-amber', subtitle: 'Wrap',
    description:
      'The goal is not “more autonomy” — it is reliable automation with control and auditability.',
    code: 'control -> trust',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Ship MVP', titleClass: 'card-title-cyan', subtitle: 'Build',
    description: 'Complete a vertical slice and record a 2-minute demo with one failure recovery.',
    code: 'demo-ready',
  },
  {
    icon: '📕', title: 'Runbook', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Write one page: symptoms, checks, mitigations, rollback.',
    code: 'on-call ready',
  },
  {
    icon: '🏠', title: 'Back To Home', titleClass: 'card-title-amber', subtitle: 'Continue',
    description: 'Return to Home and keep extending the roadmap.',
    link: { href: '/agentic-day-76', label: 'Go to Day 76 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'LangGraph', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Graph orchestration patterns for agentic systems.',
    link: { href: 'https://langchain-ai.github.io/langgraph/', label: 'Open →', external: true },
  },
  {
    icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-purple', subtitle: 'Security',
    description: 'A checklist of threats to test and mitigate.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Agentic engineering is software engineering with sharper edges.',
    footer: 'Make it observable and safe.',
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

export default function AgenticDay75() {
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
          <Link to="/agentic-day-74" className="day001-nav-btn day001-nav-prev">← Day 74</Link>
          <p className="day001-datetime">Agentic AI Day 75 · 7 Nov 2026</p>
          <Link to="/agentic-day-76" className="day001-nav-btn day001-nav-next">Day 76 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Capstone</span><span>Day 75</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 75 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">AGENTIC AI CAPSTONE MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · SHIP</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '51%' }} /></div>

        <p className="day001-summary">
          Day 75 is a capstone checkpoint: multi-agent orchestration, reliable tools, scoped memory, policy gates,
          and production ops. The outcome is an agentic system you can demo and defend.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Capstone</span><span>#Day75</span><span>#MCP</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

