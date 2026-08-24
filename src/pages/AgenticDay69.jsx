import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OWASP_LLM = 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';
const NIST_AI_RMF = 'https://www.nist.gov/itl/ai-risk-management-framework';

const LEARNT_TODAY = [
  { title: 'Prompt injection', text: 'untrusted input — a document, a scraped webpage — can contain instructions trying to hijack the model' },
  { title: 'Defense in depth', text: 'sanitize inputs, constrain tool permissions, and never let a model execute an unreviewed irreversible action' },
  { title: 'Data privacy', text: 'know exactly what user data enters a prompt, and whether it\'s sent to a third-party model provider' },
  { title: 'PII handling', text: 'redact or mask sensitive fields — names, emails, ids — before they ever reach an LLM call' },
  { title: 'Access control', text: 'not every user or service should be able to call every tool an agent has access to' },
  { title: 'Audit logs', text: 'record who asked what, what the agent did, and why — essential for compliance and incident review' },
  { title: 'Least privilege for tools', text: 'a tool should be able to do exactly what\'s needed for its job, and nothing more' },
  { title: 'What\'s next', text: 'pull versioning, containers, CI/CD, monitoring, scaling, and security into one production checklist' },
];

const CORE = [
  {
    icon: '💉', title: 'Prompt Injection Defense', titleClass: 'card-title-cyan', subtitle: 'Untrusted Input Is Hostile',
    description:
      'Treat any text from outside your control — documents, web pages, tool outputs — as potentially containing instructions aimed at the model, not just data.',
    code: '# never blindly trust retrieved content\n# strip/flag suspicious instruction-like text before it reaches the prompt',
  },
  {
    icon: '🕵️', title: 'PII & Data Privacy', titleClass: 'card-title-purple', subtitle: 'Know What You Send',
    description:
      'Redact emails, names, and IDs before they hit a third-party model API, and track exactly what data leaves your system and where it goes.',
    code: 'clean_text = redact_pii(user_message)\nresponse = model.call(clean_text)',
  },
  {
    icon: '🔐', title: 'Tool Permissions & Audit Logs', titleClass: 'card-title-amber', subtitle: 'Least Privilege',
    description:
      'Scope each tool to the minimum it needs, and log every call — who triggered it, what arguments, and what it returned.',
    code: 'audit_log.write({user, tool, args, result, timestamp})',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Red-Team Your Own Agent', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Feed your agent a document containing a hidden instruction ("ignore previous rules and...") and see if it gets followed.',
  },
  {
    icon: '📒', title: 'Add an Audit Log', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Log every tool call your agent makes, with enough detail to reconstruct exactly what happened after the fact.',
  },
  {
    icon: '🔜', title: 'Next: LLMOps Milestone', titleClass: 'card-title-amber', subtitle: 'Day 70 Preview',
    description: 'Tomorrow — pulling versioning, containers, CI/CD, monitoring, scaling, and security into one checklist.',
    link: { href: '/agentic-day-70', label: 'Go to Day 70 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📖', title: 'OWASP Top 10 for LLMs', titleClass: 'card-title-purple', subtitle: 'Security',
    description: 'The definitive checklist of security risks specific to LLM applications, including prompt injection.',
    link: { href: OWASP_LLM, label: 'Open OWASP LLM Top 10 →', external: true },
  },
  {
    icon: '📖', title: 'NIST AI RMF', titleClass: 'card-title-amber', subtitle: 'Compliance',
    description: 'A widely referenced framework for managing risk across the AI system lifecycle.',
    link: { href: NIST_AI_RMF, label: 'Open NIST AI RMF →', external: true },
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

export default function AgenticDay69() {
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
          <Link to="/agentic-day-68" className="day001-nav-btn day001-nav-prev">← Day 68</Link>
          <p className="day001-datetime">Agentic AI Day 69 · 1 Nov 2026</p>
          <Link to="/agentic-day-70" className="day001-nav-btn day001-nav-next">Day 70 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Security</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 69 <span aria-hidden="true">🔐</span></h1>
              <p className="day001-day-theme">AI SECURITY &amp; COMPLIANCE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · LLMOPS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '46%' }} /></div>

        <p className="day001-summary">
          Day 69 locks it down before it ships wide. <strong>Prompt injection</strong> defense against
          untrusted input, <strong>PII</strong> redaction before data reaches a model API, and{' '}
          <strong>least-privilege tool access</strong> backed by an audit trail.
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

        <CardSection icon="🔐" title="LOCKING IT DOWN" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LLMOps</span><span>#Day69</span><span>#AISecurity</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
