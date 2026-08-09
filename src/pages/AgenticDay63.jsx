import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const K8S = 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/';
const TWELVE = 'https://12factor.net/';

const LEARNT_TODAY = [
  { title: 'Deploy targets', text: 'managed container services, Kubernetes, or serverless containers — pick by team skill' },
  { title: 'Deployments', text: 'desired replica count + image tag; platform rolls pods forward' },
  { title: 'Rollouts', text: 'rolling update keeps capacity; canary sends 5% traffic to the new graph first' },
  { title: 'Probes', text: 'liveness vs readiness — don’t send traffic until /ready passes' },
  { title: 'Config & secrets', text: 'ConfigMaps/env for non-secrets; secret stores for API keys' },
  { title: 'Autoscaling', text: 'scale on CPU/RPS — and watch $ because LLM cost ≠ CPU cost' },
  { title: 'Rollback', text: 'keep previous image tag hot; one command reverts on SLO breach' },
  { title: '12-factor habits', text: 'stateless processes, backing services as attached resources, logs as streams' },
];

const CORE = [
  {
    icon: '🚀', title: 'Rolling Deploy', titleClass: 'card-title-cyan', subtitle: 'Ship',
    description:
      'Bump image tag agent-api:v12. Platform replaces pods gradually. Fail readiness → stop the rollout.',
    code: 'image: agent-api:v12\nreplicas: 3\nstrategy: RollingUpdate',
  },
  {
    icon: '🐤', title: 'Canary', titleClass: 'card-title-purple', subtitle: 'Risk',
    description:
      'Route 5% of traffic to the new prompt/graph version. Compare success% and $/task before 100%.',
    code: 'v11: 95%\nv12: 5%\ncompare SLOs → promote',
  },
  {
    icon: '↩️', title: 'Rollback Plan', titleClass: 'card-title-amber', subtitle: 'Safety',
    description:
      'Document the exact rollback command and who can run it. Pair with the Day 61 kill switch.',
    code: 'kubectl rollout undo\n# or redeploy :v11',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Deploy Spec', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Write a minimal Deployment YAML (or platform config) for your ask-api image with probes on /health.',
    code: 'containerPort: 8000\nreadiness: /health\nliveness: /health',
  },
  {
    icon: '📕', title: 'Rollback Runbook', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'One page: symptoms (error spike, cost spike) → checks → rollback → who to page.',
    code: 'symptom → check\n→ rollback → page',
  },
  {
    icon: '🔜', title: 'Next: Monitor', titleClass: 'card-title-amber', subtitle: 'Day 64 Preview',
    description: 'Tomorrow — live metrics for quality, latency, cost, and drift.',
    link: { href: '/agentic-day-64', label: 'Go to Day 64 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Production Deploy', titleClass: 'card-title-cyan', subtitle: 'PY Module 44',
    description: 'Earlier FastAPI production deploy habits that carry into containers.',
    link: { href: '/python/learn/fastapi-production-deployment', label: 'Open PY Module 44 →' },
  },
  {
    icon: '📖', title: 'K8s Deployments', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Controllers, rollouts, and desired-state mental model.',
    link: { href: K8S, label: 'Open Kubernetes docs →', external: true },
  },
  {
    icon: '📐', title: '12-Factor App', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Stateless processes, config, and backing services — still the deploy checklist.',
    link: { href: TWELVE, label: 'Open 12-Factor →', external: true },
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

export default function AgenticDay63() {
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
          <Link to="/agentic-day-62" className="day001-nav-btn day001-nav-prev">← Day 62</Link>
          <p className="day001-datetime">Agentic AI Day 63 · 12 Oct 2026</p>
          <Link to="/agentic-day-64" className="day001-nav-btn day001-nav-next">Day 64 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Deploy</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 63 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">DEPLOY LLM APPS & ROLLOUTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · DEPLOY</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Day 63 ships to the cloud. Run containerized agents with <strong>rolling deploys</strong>,{' '}
          <strong>canaries</strong>, probes, and a rehearsed rollback.
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

        <CardSection icon="🚀" title="SHIP & ROLL BACK" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#Deploy</span><span>#Kubernetes</span><span>#LLMOps</span><span>#Day63</span><span>#AgenticAI</span>
        </footer>
      </div>
    </div>
  );
}
