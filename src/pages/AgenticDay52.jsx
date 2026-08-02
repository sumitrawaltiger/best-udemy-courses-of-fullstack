import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: "Threat model", text: "prompt injection, data exfil, runaway spend, unsafe tool use" },
  { title: "Input filters", text: "block jailbreaks and obviously malicious instructions" },
  { title: "Output filters", text: "PII redaction, toxicity, secret scanning" },
  { title: "Tool sandbox", text: "least privilege; no raw shell without jail" },
  { title: "Policy engine", text: "allow/deny lists before side effects" },
  { title: "Escalation", text: "route to human when confidence is low or action is irreversible" },
  { title: "Audit logs", text: "who/what/when for every tool call" },
  { title: "Defense in depth", text: "no single filter is enough" },
];

const CORE = [
  {
    icon: "🚪", title: "Policy Gate", titleClass: 'card-title-cyan', subtitle: "Before Act",
    description:
      "Check action type + args against policy; deny by default.",
    code: "deny → allow exceptions",
  },
  {
    icon: "🧹", title: "I/O Filters", titleClass: 'card-title-purple', subtitle: "Sanitize",
    description:
      "Scan prompts and outputs for secrets and PII.",
    code: "redact · block",
  },
  {
    icon: "🙋", title: "Human Escalation", titleClass: 'card-title-amber', subtitle: "HITL",
    description:
      "Queue approval for payments, deletes, emails.",
    code: "approve | reject",
  },
];

const PRACTICE = [
  {
    icon: "🧪", title: "Injection Test", titleClass: 'card-title-cyan', subtitle: "Lab",
    description: "Try prompt-injection against your agent; confirm tool still blocked.",
    code: "attack → blocked",
  },
  {
    icon: "📜", title: "Audit Trail", titleClass: 'card-title-purple', subtitle: "Ops",
    description: "Log tool name, args hash, user, decision.",
    code: "immutable log",
  },
  {
    icon: "🔜", title: "Next: Prod Pipelines", titleClass: 'card-title-amber', subtitle: "Day 53",
    description: "Tomorrow — production agentic pipelines.",
    link: { href: '/agentic-day-53', label: 'Go to Day 53 →' },
  },
];

const RESOURCES = [
  {
    icon: "📘", title: "Python Track", titleClass: 'card-title-cyan', subtitle: "Hub",
    description: "Full lesson on the site for this module.",
    link: { href: "/python", label: 'Open module →' },
  },
  {
    icon: "📖", title: "OWASP LLM Top 10", titleClass: 'card-title-purple', subtitle: "Security",
    description: "Security resource.",
    link: { href: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", label: 'Open →', external: true },
  },
  {
    icon: "🗺️", title: "Rule", titleClass: 'card-title-amber', subtitle: "Remember",
    description: "Remember resource.",
    link: { href: "Least privilege + HITL for irreversible actions.", label: 'Open →', external: true },
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

export default function AgenticDay52() {
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
          <Link to="/agentic-day-51" className="day001-nav-btn day001-nav-prev">← Day 51</Link>
          <p className="day001-datetime">Agentic AI Day 52 · 25 Sep 2026</p>
          <Link to="/agentic-day-53" className="day001-nav-btn day001-nav-next">Day 53 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Safety</span><span>Day 52</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 52 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">GUARDRAILS & AI SAFETY FOR AGENTS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 52 keeps agents safe. Add <strong>policy checks</strong>, input/output filters, sandboxing, and escalation paths for risky actions.
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

        <CardSection icon="🛡️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Day52</span><span>#Safety</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
