import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PLAYWRIGHT = 'https://playwright.dev/';

const LEARNT_TODAY = [
  { title: 'What computer-use means', text: 'an agent that sees a screenshot and controls a mouse/keyboard, not just calls an API' },
  { title: 'Why it matters', text: 'some tasks have no API — a legacy site, an internal tool — browser control is the only way in' },
  { title: 'Playwright as the hands', text: 'a standard browser automation library becomes the agent\'s actuator for clicks and typing' },
  { title: 'Screenshot → action loop', text: 'capture the screen, ask the model where to click or type, execute, repeat' },
  { title: 'Grounding accuracy', text: 'the model must map "click the blue Submit button" to real pixel coordinates reliably' },
  { title: 'Guardrails matter more here', text: 'a browser agent can click "Delete Account" as easily as "Save" — confirm risky actions first' },
  { title: 'Speed vs reliability', text: 'computer-use is slower and flakier than an API call — reach for it only when there\'s no API' },
  { title: 'Where it shines', text: 'legacy internal tools, form-filling, QA testing, and sites with no public API' },
];

const CORE = [
  {
    icon: '🔁', title: 'Screenshot → Action Loop', titleClass: 'card-title-cyan', subtitle: 'The Core Loop',
    description:
      'Capture the current screen, ask the model for the next click or keystroke, execute it, then capture again.',
    code: 'screenshot → model.next_action()\n→ execute(click/type) → repeat',
  },
  {
    icon: '🎭', title: 'Playwright As The Hands', titleClass: 'card-title-purple', subtitle: 'The Actuator',
    description:
      'Playwright drives the actual browser — clicks, typing, scrolling — while the model decides what to do next.',
    code: 'page.click("button:has-text(\'Submit\')")',
  },
  {
    icon: '🚧', title: 'Guardrails for Risky Clicks', titleClass: 'card-title-amber', subtitle: 'Confirm First',
    description:
      'A destructive action — delete, pay, submit — needs an explicit confirmation step, same discipline as any other agent tool.',
    code: 'if action.is_destructive: confirm(action)',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Automate a Simple Form', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Point an agent at a test form and have it fill and submit it purely from screenshots, no API calls.',
  },
  {
    icon: '✋', title: 'Add a Confirm-Before-Delete Rule', titleClass: 'card-title-purple', subtitle: 'Practice',
    description: 'Make the agent pause and ask before clicking anything labeled delete, cancel, or remove.',
  },
  {
    icon: '🔜', title: 'Next: Enterprise Agent Integration', titleClass: 'card-title-amber', subtitle: 'Day 98 Preview',
    description: 'Tomorrow — putting agents inside Slack, Teams, and ticketing systems.',
    link: { href: '/agentic-day-98', label: 'Go to Day 98 →' },
  },
];

const RESOURCES = [
  {
    icon: '🛡️', title: 'Guardrails & AI Safety', titleClass: 'card-title-cyan', subtitle: 'Day 52',
    description: 'The safety patterns from Day 52 apply directly to an agent with a mouse and keyboard.',
    link: { href: '/agentic-day-52', label: 'Open Day 52 →' },
  },
  {
    icon: '📖', title: 'Playwright Docs', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official documentation for the browser automation library behind computer-use agents.',
    link: { href: PLAYWRIGHT, label: 'Open Playwright docs →', external: true },
  },
  {
    icon: '🔐', title: 'AI Security & Compliance', titleClass: 'card-title-amber', subtitle: 'Day 69',
    description: 'Least-privilege and audit logging matter even more once an agent can click anything on screen.',
    link: { href: '/agentic-day-69', label: 'Open Day 69 →' },
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

export default function AgenticDay97() {
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
          <Link to="/agentic-day-96" className="day001-nav-btn day001-nav-prev">← Day 96</Link>
          <p className="day001-datetime">Agentic AI Day 97 · 6 Dec 2026</p>
          <Link to="/agentic-day-98" className="day001-nav-btn day001-nav-next">Day 98 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Computer Use</span><span>Phase 14</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 97 <span aria-hidden="true">🖱️</span></h1>
              <p className="day001-day-theme">BROWSER &amp; COMPUTER-USE AGENTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · COMPUTER USE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '65%' }} /></div>

        <p className="day001-summary">
          Day 97 gives agents a mouse and keyboard. A <strong>screenshot → action loop</strong> driven by{' '}
          <strong>Playwright</strong>, for the sites and internal tools that have no API — with{' '}
          <strong>guardrails</strong> on anything destructive.
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

        <CardSection icon="🖱️" title="AGENTS WITH HANDS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#ComputerUse</span><span>#Day97</span><span>#Playwright</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
