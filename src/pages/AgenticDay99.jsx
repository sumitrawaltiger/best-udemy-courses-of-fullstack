import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NNG_AI = 'https://www.nngroup.com/topic/ai/';
const HAX_TOOLKIT = 'https://www.microsoft.com/en-us/haxtoolkit/';

const LEARNT_TODAY = [
  { title: 'Streaming responses', text: 'show tokens as they arrive — a 10-second spinner feels broken even when the answer is good' },
  { title: 'Show the plan first', text: 'surfacing what the agent is about to do builds trust before it actually acts' },
  { title: 'Specific confirmations', text: '"Send this email to 40 people?" beats a generic "Are you sure?" every time' },
  { title: 'Progressive disclosure', text: 'show a summary first, let the user expand into tool calls and traces if they want detail' },
  { title: 'Helpful error states', text: '"couldn\'t find that document, try rephrasing" beats a raw stack trace on screen' },
  { title: 'Undo over prevent', text: 'where possible, make actions reversible instead of just blocking them outright' },
  { title: 'Visible loading states', text: 'a "searching…" or "running code…" indicator beats a silent multi-second pause' },
  { title: 'The design principle', text: 'the UI\'s job is to make the agent\'s uncertainty and actions legible, not to hide them' },
];

const CORE = [
  {
    icon: '📡', title: 'Streaming & Progressive Disclosure', titleClass: 'card-title-cyan', subtitle: 'Show, Don\'t Hide',
    description:
      'Stream tokens as they generate, and show a collapsed summary with an option to expand into the full trace of tool calls.',
    code: 'for token in stream: render(token)\n[show trace ▾]',
  },
  {
    icon: '⚠️', title: 'Confirmation UX', titleClass: 'card-title-purple', subtitle: 'Specific, Not Generic',
    description:
      'Name exactly what will happen — "Delete 3 files: report.pdf, notes.txt, draft.docx?" — not just "Are you sure?"',
    code: 'confirm(f"Send to {count} recipients?")',
  },
  {
    icon: '🩹', title: 'Helpful Error States', titleClass: 'card-title-amber', subtitle: 'Explain & Suggest',
    description:
      'An error should say what went wrong in plain language and suggest a next step — never a raw exception on screen.',
    code: '"Couldn\'t find that order — try the order number instead of the name"',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Redesign One Error Message', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Take a raw error your app currently shows and rewrite it as a plain-language message with a suggested fix.',
  },
  {
    icon: '📋', title: 'Add a "Show Plan First" Step', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Before your agent executes a multi-step task, have it display the plan and wait for a go-ahead.',
  },
  {
    icon: '🔜', title: 'Next: 100 Days Milestone', titleClass: 'card-title-amber', subtitle: 'Day 100 Preview',
    description: 'Tomorrow — closing out the first 100 days of this journey.',
    link: { href: '/agentic-day-100', label: 'Go to Day 100 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏭', title: 'LLMOps Foundations', titleClass: 'card-title-cyan', subtitle: 'Day 61',
    description: 'The kill switch and safe-fallback pattern from Day 61 is the backend half of this UX story.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
  },
  {
    icon: '📖', title: 'NN/g on AI', titleClass: 'card-title-purple', subtitle: 'UX Research',
    description: 'Nielsen Norman Group\'s research hub on designing usable AI-powered interfaces.',
    link: { href: NNG_AI, label: 'Open NN/g AI topic →', external: true },
  },
  {
    icon: '📖', title: 'HAX Toolkit', titleClass: 'card-title-amber', subtitle: 'Guidelines',
    description: 'Microsoft\'s human-AI interaction guidelines — a practical checklist for agent UX.',
    link: { href: HAX_TOOLKIT, label: 'Open HAX Toolkit →', external: true },
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

export default function AgenticDay99() {
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
          <Link to="/agentic-day-98" className="day001-nav-btn day001-nav-prev">← Day 98</Link>
          <p className="day001-datetime">Agentic AI Day 99 · 7 Dec 2026</p>
          <Link to="/agentic-day-100" className="day001-nav-btn day001-nav-next">Day 100 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Product UX</span><span>Phase 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 99 <span aria-hidden="true">🎨</span></h1>
              <p className="day001-day-theme">AGENT PRODUCT DESIGN &amp; UX</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · UX</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '66%' }} /></div>

        <p className="day001-summary">
          Day 99 makes agents feel trustworthy, not just capable. <strong>Streaming</strong> and{' '}
          <strong>progressive disclosure</strong>, <strong>specific confirmations</strong> before risky
          actions, and <strong>error states</strong> that explain and suggest instead of just failing.
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

        <CardSection icon="🎨" title="DESIGN FOR TRUST" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#AgentUX</span><span>#Day99</span><span>#ProductDesign</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
