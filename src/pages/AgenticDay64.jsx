import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const LANGSMITH = 'https://docs.smith.langchain.com/';
const OWASP = 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';

const LEARNT_TODAY = [
  { title: 'Quality online', text: 'task success%, human takeover rate, thumbs-down rate' },
  { title: 'Tool health', text: 'wrong-tool rate, arg errors, timeouts, empty retrievals' },
  { title: 'Latency SLOs', text: 'p50/p95 end-to-end — users feel tails more than averages' },
  { title: 'Cost meters', text: '$/successful task and tokens per tenant — alert before the bill' },
  { title: 'Drift signals', text: 'input mix shifts, embedding space drift, sudden eval regression' },
  { title: 'Alerting', text: 'page on SLO burn; ticket on soft warnings — avoid alert fatigue' },
  { title: 'Trace sampling', text: 'sample happy paths; always keep full traces on failures' },
  { title: 'Privacy', text: 'redact PII/secrets in traces before they hit the observability store' },
];

const CORE = [
  {
    icon: '📈', title: 'SLO Dashboard', titleClass: 'card-title-cyan', subtitle: 'Live',
    description:
      'One screen: success%, p95, $/task, loop rate, tool error rate. Review it in standup.',
    code: 'success% · p95\n$/task · tool_err%',
  },
  {
    icon: '🚨', title: 'Burn Alerts', titleClass: 'card-title-purple', subtitle: 'On-call',
    description:
      'Alert when error budget burns fast or cost/task jumps 2×. Auto-trigger canary pause / kill switch.',
    code: 'if burn_rate > N:\n  pause canary\n  page on-call',
  },
  {
    icon: '📉', title: 'Drift Watch', titleClass: 'card-title-amber', subtitle: 'Quality',
    description:
      'Nightly offline eval + online shadow score. Drift → freeze promotes until investigated.',
    code: 'nightly eval\n+ online shadow\n→ freeze on drop',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Metric Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Define 5 metrics with owners and alert thresholds for your agent. Keep it on one page.',
    code: 'metric · owner\nthreshold · action',
  },
  {
    icon: '🔍', title: 'Fail Trace Drill', titleClass: 'card-title-purple', subtitle: 'Debug',
    description:
      'Take one failed production-like run; redact PII; identify the failing span; file a fix ticket.',
    code: 'fail → redact\n→ span → ticket',
  },
  {
    icon: '🔜', title: 'Next: CI/CD', titleClass: 'card-title-amber', subtitle: 'Day 65 Preview',
    description: 'Tomorrow — automate eval gates in CI and close the LLMOps loop.',
    link: { href: '/agentic-day-65', label: 'Go to Day 65 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Eval Journal', titleClass: 'card-title-cyan', subtitle: 'Day 50',
    description: 'Offline eval and tracing habits that feed live dashboards.',
    link: { href: '/agentic-day-50', label: 'Open Day 50 →' },
  },
  {
    icon: '🔭', title: 'LangSmith', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Datasets, traces, and evaluation workflows for LLM apps.',
    link: { href: LANGSMITH, label: 'Open LangSmith →', external: true },
  },
  {
    icon: '🛡️', title: 'OWASP LLM Top 10', titleClass: 'card-title-amber', subtitle: 'Security',
    description: 'Risk categories to monitor — injection, data leak, unbounded consumption.',
    link: { href: OWASP, label: 'Open OWASP LLM →', external: true },
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

export default function AgenticDay64() {
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
          <Link to="/agentic-day-63" className="day001-nav-btn day001-nav-prev">← Day 63</Link>
          <p className="day001-datetime">Agentic AI Day 64 · 27 Oct 2026</p>
          <Link to="/agentic-day-65" className="day001-nav-btn day001-nav-next">Day 65 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Monitoring</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 64 <span aria-hidden="true">📡</span></h1>
              <p className="day001-day-theme">MONITORING, COST & DRIFT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · MONITORING</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Day 64 watches production. Track <strong>quality</strong>, <strong>latency</strong>, <strong>cost</strong>, and{' '}
          <strong>drift</strong> — then alert before users (or finance) notice.
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

        <CardSection icon="📡" title="LIVE SIGNALS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Monitoring</span><span>#LLMOps</span><span>#Day64</span><span>#Observability</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
