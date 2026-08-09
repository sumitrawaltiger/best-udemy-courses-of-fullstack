import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  { title: 'LLMOps arc', text: 'versioning & registries → containers → CI/CD → monitoring → scaling → security — the full production loop' },
  { title: 'Version everything', text: 'prompt, model, tools schema, retrieval index, and graph code all need their own version, logged per release' },
  { title: 'Ship through gates', text: 'an eval gate in CI blocks any release that regresses on the golden eval set before it reaches production' },
  { title: 'See before you scale', text: 'logs, metrics, and traces have to work before autoscaling and load balancing are worth adding' },
  { title: 'Scale on the right signal', text: 'queue depth and p95 latency predict LLM-service overload far earlier than raw CPU' },
  { title: 'Security is not optional', text: 'prompt injection defense, PII redaction, and least-privilege tools are part of "done", not an afterthought' },
  { title: 'One release checklist', text: 'versioned bundle → passed eval gate → deployed via pipeline → monitored → scaled → secured' },
  { title: 'What\'s next', text: 'apply this same LLMOps loop to the next agentic product, or the next stack in the journey' },
];

const CORE = [
  {
    icon: '✅', title: 'The LLMOps Checklist', titleClass: 'card-title-cyan', subtitle: 'Ship It',
    description:
      'Versioned artifact bundle, eval gate passed, deployed through a pipeline with canary + rollback, monitored, scaled, and secured.',
    code: 'version · eval gate · deploy\nmonitor · scale · secure',
  },
  {
    icon: '🗺️', title: 'Journey Map', titleClass: 'card-title-purple', subtitle: 'Day 61 → 70',
    description:
      'From versioning and registries, through containers and CI/CD, to observability, scaling, and security — one continuous production loop.',
    code: 'version → containerize → automate\n→ observe → scale → secure',
  },
  {
    icon: '🎚️', title: 'Quality Bar', titleClass: 'card-title-amber', subtitle: 'Prove It',
    description:
      'A production-ready agentic service passes its eval suite, stays inside its cost envelope, and survives a load test without falling over.',
    code: 'eval ≥ threshold · cost ≤ budget\nload test passes',
  },
];

const PRACTICE = [
  {
    icon: '📦', title: 'Release Card', titleClass: 'card-title-cyan', subtitle: 'Demo',
    description: 'Write a one-page release card for a real service: artifact versions, eval result, rollback pointer, monitoring dashboard link.',
    code: 'artifacts · eval · rollback\ndashboard link',
  },
  {
    icon: '🔍', title: 'Production Health Ritual', titleClass: 'card-title-purple', subtitle: 'Weekly',
    description: 'Re-run the eval suite, review traces, check spend against budget, and rotate one secret — a five-minute weekly habit.',
    code: 'eval · traces · $ · rotate',
  },
  {
    icon: '🏁', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Beyond Day 70',
    description: 'Apply this same LLMOps loop to the next agentic product you build, or move on to the next stack in the journey.',
    link: { href: '/agentic-day-71', label: 'Go to Day 71 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📘', title: 'GenAI Journal Track', titleClass: 'card-title-purple', subtitle: 'Hub',
    description: 'The bonus GenAI day-journal track, running alongside this Agentic AI series.',
    link: { href: '/genai', label: 'Open GenAI track →' },
  },
  {
    icon: '🎉', title: 'LLMOps Complete', titleClass: 'card-title-amber', subtitle: 'Days 61, 66–70',
    description: 'Versioning, CI/CD, monitoring, scaling, and security are covered — the production side of shipping agentic systems.',
    link: { href: '/', label: 'Back to Home →' },
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

export default function AgenticDay70() {
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
          <Link to="/agentic-day-69" className="day001-nav-btn day001-nav-prev">← Day 69</Link>
          <p className="day001-datetime">Agentic AI Day 70 · 19 Oct 2026</p>
          <Link to="/agentic-day-71" className="day001-nav-btn day001-nav-next">Day 71 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Milestone</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 70 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">LLMOPS MILESTONE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '47%' }} /></div>

        <p className="day001-summary">
          Day 70 closes the LLMOps stretch. <strong>Versioning</strong> through <strong>CI/CD</strong>,{' '}
          <strong>monitoring</strong>, <strong>scaling</strong>, and <strong>security</strong> — one
          continuous loop for shipping agentic systems that stay reliable in production.
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

        <CardSection icon="🏁" title="CORE IDEAS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LLMOps</span><span>#Day70</span><span>#Milestone</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
