import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_ACTIONS = 'https://docs.github.com/en/actions';
const TERRAFORM_DOCS = 'https://developer.hashicorp.com/terraform/docs';

const LEARNT_TODAY = [
  { title: 'Why CI/CD for agents', text: 'prompt, model, and tool changes need the same test-before-ship discipline as regular application code' },
  { title: 'Pipeline stages', text: 'lint → unit test → eval suite → build → deploy → smoke test, each stage gating the next' },
  { title: 'Eval gates in CI', text: 'a release can\'t merge or deploy unless it clears a golden-set eval score threshold first' },
  { title: 'Canary rollouts', text: 'ship a new prompt or model version to a small percentage of traffic before going wide' },
  { title: 'Rollback plan', text: 'keep the previous version\'s artifacts ready so a bad release can revert in seconds, not hours' },
  { title: 'Secrets in pipelines', text: 'API keys and credentials get injected at deploy time from a secret manager — never committed to the repo' },
  { title: 'Infra as code', text: 'Terraform or CloudFormation describe the deployment declaratively, so environments stay reproducible' },
  { title: 'What\'s next', text: 'once shipping is automated, watching what ships in production becomes the next concern' },
];

const CORE = [
  {
    icon: '🔧', title: 'Pipeline Stages', titleClass: 'card-title-cyan', subtitle: 'Test → Build → Deploy',
    description:
      'Each stage gates the next — a failed eval suite blocks the build, a failed smoke test blocks the deploy.',
    code: 'lint → unit test → eval suite\n→ build → deploy → smoke test',
  },
  {
    icon: '🚧', title: 'Eval Gates', titleClass: 'card-title-purple', subtitle: 'No Regressions Ship',
    description:
      'Run the golden eval set as a CI step. If the pass rate drops below threshold, the pipeline fails before anything reaches production.',
    code: 'eval_score = run_eval_suite(candidate)\nassert eval_score >= 0.90, "eval gate failed"',
  },
  {
    icon: '🐤', title: 'Canary & Rollback', titleClass: 'card-title-amber', subtitle: 'Ship Safely',
    description:
      'Route a small slice of traffic to the new version first. Keep the old version\'s artifacts one click away for instant rollback.',
    code: 'traffic: v_new=5% · v_old=95%\nrollback → repoint to v_old',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Build a Minimal Pipeline', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description: 'Write a CI workflow that runs your eval suite on every push and fails the build if the score drops.',
    code: 'on: push\njobs: eval → build → deploy',
  },
  {
    icon: '🗝️', title: 'Secrets & Config', titleClass: 'card-title-purple', subtitle: 'Ops',
    description: 'Move any hardcoded API key into a secret manager, and confirm the pipeline still deploys cleanly.',
  },
  {
    icon: '🔜', title: 'Next: Monitoring', titleClass: 'card-title-amber', subtitle: 'Day 67 Preview',
    description: 'Tomorrow — logs, metrics, traces, and the golden signals that tell you a production agent is healthy.',
    link: { href: '/agentic-day-67', label: 'Go to Day 67 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python & Agentic Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'The site\'s Python and Agentic AI modules feeding into this LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '🎬', title: 'GitHub Actions', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official docs for building CI/CD pipelines with GitHub Actions.',
    link: { href: GH_ACTIONS, label: 'Open Actions docs →', external: true },
  },
  {
    icon: '📖', title: 'Terraform Docs', titleClass: 'card-title-amber', subtitle: 'IaC',
    description: 'Reference for describing infrastructure and deployments as code.',
    link: { href: TERRAFORM_DOCS, label: 'Open Terraform docs →', external: true },
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

export default function AgenticDay66() {
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
          <Link to="/agentic-day-65" className="day001-nav-btn day001-nav-prev">← Day 65</Link>
          <p className="day001-datetime">Agentic AI Day 66 · 5 Nov 2026</p>
          <Link to="/agentic-day-67" className="day001-nav-btn day001-nav-next">Day 67 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>CI/CD</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 66 <span aria-hidden="true">🔧</span></h1>
              <p className="day001-day-theme">CI/CD FOR AGENTIC APPS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '44%' }} /></div>

        <p className="day001-summary">
          Day 66 automates shipping. A <strong>pipeline</strong> that tests, evaluates, and deploys every
          change, an <strong>eval gate</strong> that blocks regressions before they reach production, and{' '}
          <strong>canary rollouts</strong> with a rollback plan for when something still slips through.
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

        <CardSection icon="🔧" title="SHIPPING SAFELY" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#LLMOps</span><span>#Day66</span><span>#CICD</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
