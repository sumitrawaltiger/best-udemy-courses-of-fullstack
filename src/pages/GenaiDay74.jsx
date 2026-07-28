import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Data boundaries', text: 'be explicit about what can be stored, retrieved, and logged' },
  { title: 'PII handling', text: 'detect and redact PII before storage or sharing' },
  { title: 'Tenant isolation', text: 'never mix embeddings or indexes across tenants without strict guards' },
  { title: 'Consent and retention', text: 'keep data for a purpose and delete on schedule' },
  { title: 'Auditability', text: 'log decisions and citations so outputs can be reviewed later' },
  { title: 'Policy gates', text: 'block unsafe prompts, unsafe outputs, and risky tool calls' },
  { title: 'Secure defaults', text: 'least privilege, allowlists, and short-lived secrets' },
  { title: 'Compliance is product', text: 'governance is part of the UX, not just paperwork' },
];

const CORE = [
  {
    icon: '🛡️', title: 'PII Pipeline', titleClass: 'card-title-cyan', subtitle: 'Protect',
    description:
      'Detect PII in inputs and outputs, redact or mask before logs, storage, and retrieval indexing.',
    code: 'detect -> redact',
  },
  {
    icon: '🏢', title: 'Tenant Isolation', titleClass: 'card-title-purple', subtitle: 'Separate',
    description:
      'Partition by tenant, enforce metadata filters, and validate user scope on every retrieval and tool call.',
    code: 'tenant_id everywhere',
  },
  {
    icon: '📜', title: 'Audit Trail', titleClass: 'card-title-amber', subtitle: 'Review',
    description:
      'Store citations, prompt versions, and tool decisions so you can explain what happened after the fact.',
    code: 'who · what · why',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'PII Redaction', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Add an input/output filter that masks emails, phones, and card-like strings.',
    code: 'mask -> store',
  },
  {
    icon: '🔒', title: 'Access Checks', titleClass: 'card-title-purple', subtitle: 'Hardening',
    description: 'Add a tenant filter to retrieval and reject queries without a tenant scope.',
    code: 'deny by default',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 75',
    description: 'Tomorrow → wrap-up and a focused plan for what to build next.',
    link: { href: '/genai-day-75', label: 'Go to Day 75 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track →' },
  },
  {
    icon: '📖', title: 'OWASP LLM Top 10', titleClass: 'card-title-purple', subtitle: 'Security',
    description: 'Security guidance for LLM applications and agentic systems.',
    link: { href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', label: 'Open →', external: true },
  },
  {
    icon: '🗺️', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'Governance is easiest when designed early, not patched later.',
    footer: 'Build rails before speed.',
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

export default function GenaiDay74() {
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
          <Link to="/genai-day-73" className="day001-nav-btn day001-nav-prev">← Day 73</Link>
          <p className="day001-datetime">Gen AI Day 74 · 74 Aug 2026</p>
          <Link to="/genai-day-75" className="day001-nav-btn day001-nav-next">Day 75 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Governance</span><span>Day 74</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 74 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">PRIVACY, COMPLIANCE & GOVERNANCE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · SECURITY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '50%' }} /></div>

        <p className="day001-summary">
          Day 74 adds rails for real-world Gen AI: <strong>PII handling</strong>, <strong>tenant isolation</strong>, retention, auditability,
          and policy gates. Governance becomes part of the product, not an afterthought.
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

        <CardSection icon="🛡️" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Security</span><span>#Day74</span><span>#Governance</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}

