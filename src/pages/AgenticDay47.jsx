import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "n8n role", text: "visual automation — connect APIs, LLMs, and webhooks without all custom glue" },
  { title: "Triggers", text: "webhook, schedule, or app events start the flow" },
  { title: "Action nodes", text: "HTTP, Slack, Sheets, LLM nodes execute steps" },
  { title: "AI agent prompts", text: "clear system prompts + tool descriptions inside n8n AI nodes" },
  { title: "Credentials", text: "store API keys in n8n credentials vault, not plain nodes" },
  { title: "Branching", text: "IF nodes route success/failure paths" },
  { title: "Observability", text: "execution history is your debugger" },
  { title: "E2E project", text: "ticket comes in → agent researches → drafts reply → human approve → send" },
];

const CORE = [
  {
    icon: "▶️", title: "Trigger → Actions", titleClass: 'card-title-cyan', subtitle: "Flow",
    description:
      "Webhook receives event; chain LLM + HTTP nodes; respond.",
    code: "Webhook → AI → HTTP",
  },
  {
    icon: "🔑", title: "Credentials", titleClass: 'card-title-purple', subtitle: "Secrets",
    description:
      "Create credential objects; reference them in nodes.",
    code: "never hardcode keys",
  },
  {
    icon: "✅", title: "Human Gate", titleClass: 'card-title-amber', subtitle: "HITL",
    description:
      "Wait node or approval step before irreversible sends.",
    code: "draft → approve → send",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Webhook Agent", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "POST JSON to n8n; return an LLM summary in the response.",
    code: "POST /webhook/...",
  },
  {
    icon: "📬", title: "Notify Path", titleClass: 'card-title-purple', subtitle: "Integrate",
    description: "On success, post to Slack; on failure, alert email.",
    code: "IF → Slack / Email",
  },
  {
    icon: "🔜", title: "Next: Multi-Agent", titleClass: 'card-title-amber', subtitle: "Day 48",
    description: "Tomorrow — multi-agent patterns beyond a single workflow.",
    link: { href: '/agentic-day-48', label: 'Go to Day 48 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "n8n & Agentic Workflows", titleClass: 'card-title-cyan', subtitle: "PY Module 47",
    description: "Full lesson on the site for this module.",
    link: { href: "/python/learn/n8n-and-agentic-ai-workflows", label: 'Open module →' },
  },
  {
    icon: "📖", title: "n8n Docs", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://docs.n8n.io/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Pattern", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Trigger → reason → tools → approve → act → log.", label: 'Open →', external: true },
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

export default function AgenticDay47() {
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
          <Link to="/agentic-day-46" className="day001-nav-btn day001-nav-prev">← Day 46</Link>
          <p className="day001-datetime">Agentic AI Day 47 · 47 Aug 2026</p>
          <Link to="/agentic-day-48" className="day001-nav-btn day001-nav-next">Day 48 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>n8n</span><span>Day 47</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 47 <span aria-hidden="true">🔁</span></h1>
              <p className="day001-day-theme">N8N & AGENTIC AI WORKFLOWS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          Day 47 automates agents. Use <strong>n8n</strong> triggers and actions, wire credentials, and ship an end-to-end <strong>agentic workflow</strong>.
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

        <CardSection icon="🔁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day47</span><span>#n8n</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
