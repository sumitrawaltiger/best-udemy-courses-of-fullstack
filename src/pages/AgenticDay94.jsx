import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BEDROCK = 'https://docs.aws.amazon.com/bedrock/';
const VERTEX = 'https://cloud.google.com/vertex-ai/docs';

const LEARNT_TODAY = [
  { title: 'Cloud agent hosting', text: 'run FastAPI/worker graphs on AWS, GCP, or Azure with managed LLM APIs' },
  { title: 'Bedrock / Vertex / Foundry', text: 'managed model access + IAM — keys stay in cloud secret stores' },
  { title: 'Same package', text: 'Docker image from Day 62/63 is the portable unit across clouds' },
  { title: 'IAM least privilege', text: 'task role can call one model + one vector store — nothing else' },
  { title: 'Private networking', text: 'agents talking to DBs should stay on VPC/private endpoints' },
  { title: 'Regional choice', text: 'latency + data residency — pick region before you hardcode endpoints' },
  { title: 'Cost controls', text: 'quotas, budgets, and per-tenant limits in the cloud console + app layer' },
  { title: 'Observability glue', text: 'export traces to your AgentOps stack; don’t rely on cloud logs alone' },
];

const CORE = [
  {
    icon: '☁️', title: 'Deploy Shape', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description:
      'API service + async worker + secrets + managed model endpoint. Health probes and autoscaling on RPS.',
    code: 'API · worker\nsecrets · model\nprobes · scale',
  },
  {
    icon: '🔑', title: 'IAM Envelope', titleClass: 'card-title-purple', subtitle: 'Security',
    description:
      'No long-lived keys in env files. Use role/workload identity; rotate automatically.',
    code: 'workload identity\nleast privilege\nno keys in git',
  },
  {
    icon: '📊', title: 'Cloud + AgentOps', titleClass: 'card-title-amber', subtitle: 'See',
    description:
      'Cloud metrics for infra; LangSmith/Langfuse for LLM spans. Correlate with request ids.',
    code: 'infra metrics\n+ LLM traces\nrequest_id join',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Cloud One-Pager', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Pick AWS, GCP, or Azure. Sketch services, secrets, model API, and rollback for your agent.',
    code: 'cloud · services\nsecrets · rollback',
  },
  {
    icon: '💵', title: 'Budget Alarm', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'Define a monthly $ cap and what auto-happens at 80% (throttle, notify, kill non-prod).',
    code: '80% → alert\n100% → throttle',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-amber', subtitle: 'Day 95 Preview',
    description: 'Tomorrow — ship a production cloud agent portfolio milestone.',
    link: { href: '/agentic-day-95', label: 'Go to Day 95 →' },
  },
];

const RESOURCES = [
  {
    icon: '🚀', title: 'Deploy Day 63', titleClass: 'card-title-cyan', subtitle: 'Journal',
    description: 'Rolling deploys and canaries — still the rollout playbook.',
    link: { href: '/agentic-day-63', label: 'Open Day 63 →' },
  },
  {
    icon: '📖', title: 'Amazon Bedrock', titleClass: 'card-title-purple', subtitle: 'AWS',
    description: 'Managed foundation models and agent-related AWS docs.',
    link: { href: BEDROCK, label: 'Open Bedrock docs →', external: true },
  },
  {
    icon: '📖', title: 'Vertex AI', titleClass: 'card-title-amber', subtitle: 'GCP',
    description: 'Google Cloud Vertex AI. For Azure, use AI Foundry docs in parallel.',
    link: { href: VERTEX, label: 'Open Vertex docs →', external: true },
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

export default function AgenticDay94() {
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
          <Link to="/agentic-day-93" className="day001-nav-btn day001-nav-prev">← Day 93</Link>
          <p className="day001-datetime">Agentic AI Day 94 · 3 Dec 2026</p>
          <Link to="/agentic-day-95" className="day001-nav-btn day001-nav-next">Day 95 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Cloud</span><span>Phase 13</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 94 <span aria-hidden="true">☁️</span></h1>
              <p className="day001-day-theme">CLOUD DEPLOY FOR AGENTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · CLOUD</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '63%' }} /></div>

        <p className="day001-summary">
          Day 94 ships to the cloud. Host agents with <strong>managed model APIs</strong>, IAM, private networking, and
          budgets on AWS, GCP, or Azure.
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

        <CardSection icon="☁️" title="CLOUD SHAPE" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AWS</span><span>#GCP</span><span>#Azure</span><span>#Day94</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
