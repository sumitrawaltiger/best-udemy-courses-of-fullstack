import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PYTHON = '/python';
const INTERVIEW = '/interview-questions';

const LEARNT_TODAY = [
  { title: 'Resume rule', text: 'one page (or two max); every bullet has a verb + scope + metric when possible' },
  { title: 'Project bullets', text: 'RAG / agent / FastAPI — show stack, your role, and a result (latency, accuracy, cost)' },
  { title: 'GitHub hygiene', text: 'README with demo GIF/screenshot, setup, eval notes, architecture diagram' },
  { title: 'Pinned repos', text: 'pin 2–3 best projects; archive tutorial clones that dilute signal' },
  { title: 'LinkedIn headline', text: 'role + stack + proof (“Gen AI · RAG · Agents · shipped X”)' },
  { title: 'About section', text: '3 short paras: who you are, what you build, what you’re hunting' },
  { title: 'Mock ritual', text: 'record yourself answering; fix filler words; timebox to interview length' },
  { title: 'Track close', text: 'Python → Gen AI → Agentic → LLMOps → Interview — you can tell the full story' },
];

const CORE = [
  {
    icon: '📄', title: 'Resume Bullet Formula', titleClass: 'card-title-cyan', subtitle: 'Write',
    description:
      'Built X using Y that achieved Z. Prefer shipped systems over coursework lists.',
    code: 'Built RAG FAQ (FastAPI + PGVector)\n→ 78% grounded answers\n→ p95 < 2.1s',
  },
  {
    icon: '💻', title: 'GitHub README', titleClass: 'card-title-purple', subtitle: 'Proof',
    description:
      'Problem → architecture → run steps → eval table → limitations. Recruiters skim in 20 seconds.',
    code: 'demo · setup\narch · eval\nlimitations',
  },
  {
    icon: '🏁', title: 'Mock Loop', titleClass: 'card-title-amber', subtitle: 'Milestone',
    description:
      'Run a 45-min mock: 15 min ML/Python, 15 min Gen AI/RAG, 15 min agent design. Score yourself honestly.',
    code: '15 · 15 · 15\nnote gaps → drill',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Rewrite 5 Bullets', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Take five weak resume lines and rewrite with metric or clear scope. Cut fluff adjectives.',
    code: 'weak → strong\n+ number',
  },
  {
    icon: '🎥', title: 'Record One Answer', titleClass: 'card-title-purple', subtitle: 'Speak',
    description:
      'Film a 90s answer to “Explain RAG vs fine-tuning.” Watch once; fix two issues only.',
    code: 'record → review\nfix 2 things',
  },
  {
    icon: '🔜', title: 'Next: Agentic RAG', titleClass: 'card-title-amber', subtitle: 'Day 81',
    description: 'Continue Phase 12 — Agentic RAG, context engineering, schemas, AgentOps, milestone.',
    link: { href: '/agentic-day-81', label: 'Go to Day 81 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python / Gen AI Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full curriculum to revise before applications.',
    link: { href: PYTHON, label: 'Open Python track →' },
  },
  {
    icon: '💬', title: 'Interview Questions', titleClass: 'card-title-purple', subtitle: 'Site',
    description: 'Extra question banks across stacks on this site.',
    link: { href: INTERVIEW, label: 'Open interview hub →' },
  },
  {
    icon: '🎓', title: 'Capstone Day', titleClass: 'card-title-amber', subtitle: 'Day 54',
    description: 'Portfolio project day — turn it into your strongest resume bullet.',
    link: { href: '/agentic-day-54', label: 'Open Day 54 →' },
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

export default function AgenticDay80() {
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
          <Link to="/agentic-day-79" className="day001-nav-btn day001-nav-prev">← Day 79</Link>
          <p className="day001-datetime">Agentic AI Day 80 · 9 Nov 2026</p>
          <Link to="/agentic-day-81" className="day001-nav-btn day001-nav-next">Day 81 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Interview</span><span>Career</span><span>Phase 11</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 80 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">RESUME, GITHUB, LINKEDIN & MOCK INTERVIEW</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · CAREER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '53%' }} /></div>

        <p className="day001-summary">
          Day 80 closes the interview arc. Ship a sharp <strong>resume</strong>, clean <strong>GitHub</strong>, strong{' '}
          <strong>LinkedIn</strong>, and one honest mock interview.
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

        <CardSection icon="🚀" title="CAREER PACK" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Resume</span><span>#GitHub</span><span>#LinkedIn</span><span>#Day80</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
