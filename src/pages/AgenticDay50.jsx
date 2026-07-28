import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Offline eval sets", text: "golden tasks with expected final answers or rubrics" },
  { title: "Online metrics", text: "success rate, retries, human takeovers" },
  { title: "Tool metrics", text: "wrong tool rate, arg error rate" },
  { title: "Tracing", text: "span every LLM and tool call with inputs/outputs redacted" },
  { title: "Latency & cost", text: "p95 latency and $ per successful task" },
  { title: "Regression suites", text: "re-run evals on every prompt/graph change" },
  { title: "Failure taxonomies", text: "hallucination, loop, tool fail, policy block" },
  { title: "Ship gate", text: "don’t promote agents that only “feel” better" },
];

const CORE = [
  {
    icon: "📋", title: "Eval Set", titleClass: 'card-title-cyan', subtitle: "Offline",
    description:
      "30–100 tasks covering happy path and nasty edge cases.",
    code: "task → expected",
  },
  {
    icon: "🔭", title: "Traces", titleClass: 'card-title-purple', subtitle: "Debug",
    description:
      "OpenTelemetry-style spans or LangSmith/equivalent.",
    code: "llm · tool · retrieve",
  },
  {
    icon: "📈", title: "Dashboards", titleClass: 'card-title-amber', subtitle: "Online",
    description:
      "success%, cost/task, p95, loop rate.",
    code: "SLOs for agents",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Scorecard", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Run 10 tasks; score pass/fail + notes; compare prompt v1 vs v2.",
    code: "v1 vs v2",
  },
  {
    icon: "🔍", title: "Trace One Fail", titleClass: 'card-title-purple', subtitle: "Debug",
    description: "Pick a failed run; identify which node broke.",
    code: "find failing span",
  },
  {
    icon: "🔜", title: "Next: MCP Hands-On", titleClass: 'card-title-amber', subtitle: "Day 51",
    description: "Tomorrow — build and consume MCP servers.",
    link: { href: '/agentic-day-51', label: 'Go to Day 51 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📖", title: "LangSmith", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://docs.smith.langchain.com/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Rule", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "If you can’t measure it, you can’t safely improve the agent.", label: 'Open →', external: true },
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

export default function AgenticDay50() {
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
          <Link to="/agentic-day-49" className="day001-nav-btn day001-nav-prev">← Day 49</Link>
          <p className="day001-datetime">Agentic AI Day 50 · 50 Aug 2026</p>
          <Link to="/agentic-day-51" className="day001-nav-btn day001-nav-next">Day 51 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Eval</span><span>Day 50</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 50 <span aria-hidden="true">📏</span></h1>
              <p className="day001-day-theme">AGENT EVALUATION & OBSERVABILITY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '33%' }} /></div>

        <p className="day001-summary">
          Day 50 measures agents. Track <strong>task success</strong>, <strong>tool accuracy</strong>, latency/cost, and add traces you can debug.
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

        <CardSection icon="📏" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day50</span><span>#Eval</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
