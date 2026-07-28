import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'Pick one user pain', text: 'solve a narrow, expensive problem instead of building a generic chatbot' },
  { title: 'Thin slices win', text: 'upload, process, review, and export one complete workflow first' },
  { title: 'Ground outputs', text: 'use retrieval, structured fields, or citations so the app is auditable' },
  { title: 'Design review states', text: 'draft, approved, rejected, and retry states make the UX real' },
  { title: 'Keep prompts in code', text: 'version them, test them, and avoid editing production prompts by hand' },
  { title: 'Add failure paths', text: 'bad OCR, low-confidence extraction, and missing files need product handling' },
  { title: 'Demo the business value', text: 'show time saved, errors reduced, or better coverage' },
  { title: 'Polish the handoff', text: 'README, setup, screenshots, and sample inputs make the project credible' },
];

const CORE = [
  {
    icon: '🧩', title: 'Vertical Slice', titleClass: 'card-title-cyan', subtitle: 'Build',
    description:
      'Ship one complete flow from input to validated output before adding more capabilities.',
    code: 'input -> model -> review -> export',
  },
  {
    icon: '🛠️', title: 'Ops Ready', titleClass: 'card-title-purple', subtitle: 'Run',
    description:
      'Add sample data, environment setup, error states, and a health check so the project is runnable.',
    code: 'setup · logs · retry',
  },
  {
    icon: '🎬', title: 'Demo Story', titleClass: 'card-title-amber', subtitle: 'Show',
    description:
      'Walk through the user problem, the AI flow, one edge case, and the final business outcome.',
    code: 'problem -> flow -> value',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Ship MVP', titleClass: 'card-title-cyan', subtitle: 'Build',
    description: 'Complete one polished Gen AI app and record a 2-minute demo.',
    code: 'working portfolio piece',
  },
  {
    icon: '📋', title: 'Review Checklist', titleClass: 'card-title-purple', subtitle: 'Quality',
    description: 'Check setup, prompts, output schema, citations, and failure handling.',
    code: 'ready to show',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 55',
    description: 'Tomorrow -> wrap the Gen AI run and map the next builds.',
    link: { href: '/genai-day-55', label: 'Go to Day 55 ->' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Browse the full Gen AI lessons and curriculum on the site.',
    link: { href: '/genai', label: 'Open Gen AI Track ->' },
  },
  {
    icon: '📖', title: 'Vercel AI SDK', titleClass: 'card-title-purple', subtitle: 'Stack',
    description: 'Useful patterns for streaming, structured outputs, and product UX.',
    link: { href: 'https://sdk.vercel.ai/docs', label: 'Open ->', external: true },
  },
  {
    icon: '🧠', title: 'Rule', titleClass: 'card-title-amber', subtitle: 'Remember',
    description: 'A narrow, reliable app is a better portfolio story than a broad unstable one.',
    footer: 'Depth beats scope for capstones.',
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

export default function GenaiDay54() {
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
          <Link to="/genai-day-53" className="day001-nav-btn day001-nav-prev">Day 53</Link>
          <p className="day001-datetime">Gen AI Day 54 · 54 Aug 2026</p>
          <Link to="/genai-day-55" className="day001-nav-btn day001-nav-next">Day 55 {'->'}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Capstone</span><span>Day 54</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 54 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">CAPSTONE: SHIP A GEN AI APP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · CAPSTONE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '36%' }} /></div>

        <p className="day001-summary">
          Day 54 turns the theory into a portfolio piece. Build one <strong>end-to-end Gen AI product</strong> with
          grounded outputs, review states, and a demo story that clearly shows business value.
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

        <CardSection icon="🚀" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#GenAI</span><span>#Capstone</span><span>#Day54</span><span>#Portfolio</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
