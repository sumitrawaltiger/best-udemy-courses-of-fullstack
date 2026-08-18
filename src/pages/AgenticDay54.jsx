import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Pick a narrow goal", text: "support triage, research assistant, or ops bot — not “general AGI”" },
  { title: "Architecture sketch", text: "API + graph + tools + memory + store + UI" },
  { title: "MVP scope", text: "2–4 tools, one memory type, one eval set" },
  { title: "Demo script", text: "show success, a tool failure recovery, and a HITL gate" },
  { title: "Docs", text: "README with setup, architecture diagram, and known limits" },
  { title: "Tests", text: "unit-test tools; golden-path eval for the graph" },
  { title: "Deploy", text: "container + env secrets + /health" },
  { title: "Reflect", text: "what you’d add next with more time" },
];

const CORE = [
  {
    icon: "🗺️", title: "Scope Card", titleClass: 'card-title-cyan', subtitle: "Plan",
    description:
      "User → goal → tools → success metric in one paragraph.",
    code: "goal · tools · metric",
  },
  {
    icon: "🧩", title: "Vertical Slice", titleClass: 'card-title-purple', subtitle: "Build",
    description:
      "One happy path working before polish.",
    code: "API → agent → tool",
  },
  {
    icon: "🎬", title: "Demo Story", titleClass: 'card-title-amber', subtitle: "Show",
    description:
      "Cold start → agent acts → cites sources → asks approval → done.",
    code: "storyboard 5 beats",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Ship MVP", titleClass: 'card-title-cyan', subtitle: "Build",
    description: "Complete the vertical slice and record a 2-minute demo.",
    code: "working demo",
  },
  {
    icon: "📋", title: "Eval Pass", titleClass: 'card-title-purple', subtitle: "Quality",
    description: "≥70% on your 10-task suite before calling it done.",
    code: "pass rate",
  },
  {
    icon: "🔜", title: "Next: Milestone", titleClass: 'card-title-amber', subtitle: "Day 55",
    description: "Tomorrow — Gen AI & Agentic AI milestone wrap-up.",
    link: { href: '/agentic-day-55', label: 'Go to Day 55 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📖", title: "LangGraph", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://langchain-ai.github.io/langgraph/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Tip", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Narrow goal + reliable tools beats a flashy unstable demo.", label: 'Open →', external: true },
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

export default function AgenticDay54() {
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
          <Link to="/agentic-day-53" className="day001-nav-btn day001-nav-prev">← Day 53</Link>
          <p className="day001-datetime">Agentic AI Day 54 · 11 Oct 2026</p>
          <Link to="/agentic-day-55" className="day001-nav-btn day001-nav-next">Day 55 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Capstone</span><span>Day 54</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 54 <span aria-hidden="true">🎓</span></h1>
              <p className="day001-day-theme">CAPSTONE: BUILD AN AGENTIC APP</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Day 54 ships a portfolio piece. Build an end-to-end <strong>agentic app</strong> with tools, memory, eval, and a thin API/UI.
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

        <CardSection icon="🎓" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day54</span><span>#Capstone</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
