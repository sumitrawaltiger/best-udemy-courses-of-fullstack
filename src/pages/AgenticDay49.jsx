import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Short-term memory", text: "current thread messages and scratchpad" },
  { title: "Long-term memory", text: "vector store or DB facts keyed by user/project" },
  { title: "Episodic vs semantic", text: "what happened vs general knowledge" },
  { title: "Tool contracts", text: "JSON schema, timeouts, idempotency keys" },
  { title: "Side effects", text: "reads are safe; writes need confirmation" },
  { title: "Tool errors", text: "typed errors so the agent can retry or replan" },
  { title: "Caching", text: "cache pure tool results to cut cost/latency" },
  { title: "Privacy", text: "don’t put secrets into long-term memory dumps" },
];

const CORE = [
  {
    icon: "💾", title: "Memory Tiers", titleClass: 'card-title-cyan', subtitle: "Design",
    description:
      "Buffer → summary → vector recall. Evict aggressively.",
    code: "hot · warm · cold",
  },
  {
    icon: "🛠️", title: "Tool Spec", titleClass: 'card-title-purple', subtitle: "Schema",
    description:
      "name, description, args schema, examples, failure modes.",
    code: "JSON schema + timeout",
  },
  {
    icon: "🔐", title: "Safe Writes", titleClass: 'card-title-amber', subtitle: "HITL",
    description:
      "destructive tools require explicit confirm=true from user/agent policy.",
    code: "confirm before write",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Memory Demo", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Store user preference; recall it in a later session.",
    code: "save → retrieve",
  },
  {
    icon: "🧰", title: "Three Tools", titleClass: 'card-title-purple', subtitle: "Build",
    description: "search, calculator, ticket_create with schemas + timeouts.",
    code: "3 tools · schemas",
  },
  {
    icon: "🔜", title: "Next: Eval", titleClass: 'card-title-amber', subtitle: "Day 50",
    description: "Tomorrow — evaluating and observing agents.",
    link: { href: '/agentic-day-50', label: 'Go to Day 50 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📖", title: "LangChain Memory", titleClass: 'card-title-purple', subtitle: "Docs",
    description: "Docs resource.",
    link: { href: "https://python.langchain.com/docs/concepts/memory/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Rule", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Tools need contracts; memory needs eviction and privacy rules.", label: 'Open →', external: true },
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

export default function AgenticDay49() {
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
          <Link to="/agentic-day-48" className="day001-nav-btn day001-nav-prev">← Day 48</Link>
          <p className="day001-datetime">Agentic AI Day 49 · 49 Aug 2026</p>
          <Link to="/agentic-day-50" className="day001-nav-btn day001-nav-next">Day 50 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Memory</span><span>Day 49</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 49 <span aria-hidden="true">🧠</span></h1>
              <p className="day001-day-theme">AGENT MEMORY & TOOLS DEEP DIVE</p>
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
          Day 49 sharpens the toolbox. Design <strong>short/long-term memory</strong>, reliable <strong>tool contracts</strong>, and safe side effects.
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

        <CardSection icon="🧠" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day49</span><span>#Memory</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
