import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PYDANTIC = 'https://docs.pydantic.dev/latest/';

const LEARNT_TODAY = [
  { title: 'Why structure', text: 'agents break when tools get free-text args or JSON that almost parses' },
  { title: 'Pydantic models', text: 'typed schemas for tool inputs, LLM outputs, and API boundaries' },
  { title: 'JSON schema', text: 'export models to JSON Schema for function calling / tool defs' },
  { title: 'Validation errors', text: '422-style failures should become agent-visible repair signals' },
  { title: 'Strict modes', text: 'prefer providers’ structured output / JSON mode when available' },
  { title: 'Enums & bounds', text: 'constrain status, top_k, and money fields — don’t trust the model’s vibes' },
  { title: 'Version schemas', text: 'tool schema v2 needs a migration story for old traces and clients' },
  { title: 'Tests without LLM', text: 'unit-test parsers and validators offline — cheaper than prompt loops' },
];

const CORE = [
  {
    icon: '📐', title: 'Tool In Schema', titleClass: 'card-title-cyan', subtitle: 'Input',
    description:
      'Define SearchIn(q: str, k: int = Field(ge=1, le=20)). Reject bad args before the tool runs.',
    code: 'class SearchIn(BaseModel):\n  q: str = Field(min_length=1)\n  k: int = Field(1, ge=1, le=20)',
  },
  {
    icon: '📤', title: 'Structured Out', titleClass: 'card-title-purple', subtitle: 'Output',
    description:
      'Ask the model for AnswerOut(answer, citations[], confidence). Parse → validate → use.',
    code: 'class AnswerOut(BaseModel):\n  answer: str\n  citations: list[str]\n  confidence: float',
  },
  {
    icon: '🔧', title: 'Repair Loop', titleClass: 'card-title-amber', subtitle: 'Robust',
    description:
      'On ValidationError, feed error details back once. Cap retries so you don’t loop forever.',
    code: 'parse → validate\nfail → repair prompt\nmax 2 retries',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Three Schemas', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Model TicketCreate, SearchQuery, and FinalAnswer. Generate JSON Schema for each tool.',
    code: 'TicketCreate\nSearchQuery\nFinalAnswer',
  },
  {
    icon: '🧨', title: 'Break It', titleClass: 'card-title-purple', subtitle: 'Test',
    description:
      'Feed invalid JSON / wrong types; assert your agent gets a clean error, not a stack dump.',
    code: 'bad json → error obj\nno traceback to user',
  },
  {
    icon: '🔜', title: 'Next: Prompt Optimization', titleClass: 'card-title-amber', subtitle: 'Day 86 Preview',
    description: 'Next in the curriculum — declarative prompt optimization, few-shot selection, and compression.',
    link: { href: '/agentic-day-84', label: 'Go to Day 84 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'FastAPI Day', titleClass: 'card-title-cyan', subtitle: 'Day 41',
    description: 'Pydantic request/response models — same discipline for tools.',
    link: { href: '/agentic-day-41', label: 'Open Day 41 →' },
  },
  {
    icon: '📖', title: 'Pydantic Docs', titleClass: 'card-title-purple', subtitle: 'Official',
    description: 'Validation, JSON Schema, and settings models.',
    link: { href: PYDANTIC, label: 'Open Pydantic docs →', external: true },
  },
  {
    icon: '🛠️', title: 'Tools Day', titleClass: 'card-title-amber', subtitle: 'Day 49',
    description: 'Tool contracts and timeouts — schemas make them real.',
    link: { href: '/agentic-day-49', label: 'Open Day 49 →' },
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

export default function AgenticDay83() {
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
          <Link to="/agentic-day-82" className="day001-nav-btn day001-nav-prev">← Day 82</Link>
          <p className="day001-datetime">Agentic AI Day 83 · 29 Oct 2026</p>
          <Link to="/agentic-day-84" className="day001-nav-btn day001-nav-next">Day 84 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Gen AI</span><span>Pydantic</span><span>Phase 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 83 <span aria-hidden="true">📐</span></h1>
              <p className="day001-day-theme">STRUCTURED OUTPUTS & TOOL SCHEMAS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN AI · SCHEMAS</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '55%' }} /></div>

        <p className="day001-summary">
          Day 83 makes agents machine-safe. Use <strong>Pydantic</strong> for tool inputs, structured LLM outputs, and
          repair loops when validation fails.
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

        <CardSection icon="📐" title="SCHEMA DISCIPLINE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Pydantic</span><span>#StructuredOutput</span><span>#Day83</span><span>#GenAI</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
