import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GHA = 'https://docs.github.com/en/actions';
const PYTHON = '/python';

const LEARNT_TODAY = [
  { title: 'CI for agents', text: 'unit-test tools; run golden eval suite on every prompt/graph PR' },
  { title: 'Eval gate', text: 'block merge/promote if pass rate or cost regressions exceed thresholds' },
  { title: 'Build & push', text: 'CI builds the Docker image, tags with git SHA, pushes to the registry' },
  { title: 'CD promote', text: 'staging auto-deploys; prod waits for human + green eval' },
  { title: 'Prompt PRs', text: 'treat prompt text like code — review, diff, and require eval evidence' },
  { title: 'Secrets in CI', text: 'OIDC/short-lived tokens; never echo keys into logs' },
  { title: 'Smoke after deploy', text: 'post-deploy hit /health and 3 golden tasks in staging' },
  { title: 'Phase close', text: 'LLMOps loop: version → container → deploy → monitor → CI gate → repeat' },
];

const CORE = [
  {
    icon: '⚙️', title: 'PR Pipeline', titleClass: 'card-title-cyan', subtitle: 'CI',
    description:
      'lint → tool unit tests → offline eval suite → build image. Fail the PR if eval regresses.',
    code: 'lint → unit\n→ eval suite\n→ docker build',
  },
  {
    icon: '🚦', title: 'Promote Gate', titleClass: 'card-title-purple', subtitle: 'CD',
    description:
      'Staging deploys on green CI. Prod promote needs eval report + on-call ack. Canary first.',
    code: 'staging: auto\nprod: eval + ack\n→ canary → 100%',
  },
  {
    icon: '🏁', title: 'LLMOps Loop', titleClass: 'card-title-amber', subtitle: 'Milestone',
    description:
      'You can now run agents like products: versioned, containerized, deployed, observed, and gated.',
    code: 'version → ship\n→ watch → gate\n→ improve',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Eval in CI', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Add a GitHub Action (or script) that runs 10 golden tasks and fails if pass rate < 80%.',
    code: 'pytest eval/\n# fail if < 0.8',
  },
  {
    icon: '📝', title: 'Prompt PR Template', titleClass: 'card-title-purple', subtitle: 'Process',
    description:
      'PR checklist: why change, eval before/after, cost delta, rollback pointer, owner.',
    code: 'why · eval Δ\ncost Δ · rollback',
  },
  {
    icon: '🔜', title: 'Next: Interview Prep', titleClass: 'card-title-amber', subtitle: 'Day 76',
    description: 'Continue with Phase 11 — Python/ML → DL/NLP → Gen AI/RAG → Agentic design → career pack.',
    link: { href: '/agentic-day-66', label: 'Go to Day 66 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Full Gen AI / Agentic curriculum that this LLMOps arc operationalizes.',
    link: { href: PYTHON, label: 'Open Python track →' },
  },
  {
    icon: '⚙️', title: 'GitHub Actions', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'CI/CD workflows for build, test, and deploy automation.',
    link: { href: GHA, label: 'Open Actions docs →', external: true },
  },
  {
    icon: '🏭', title: 'Day 61 Foundations', titleClass: 'card-title-amber', subtitle: 'Journal',
    description: 'Versioning and promote stages — the policy your CI enforces.',
    link: { href: '/agentic-day-61', label: 'Open Day 61 →' },
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

export default function AgenticDay65() {
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
          <Link to="/agentic-day-64" className="day001-nav-btn day001-nav-prev">← Day 64</Link>
          <p className="day001-datetime">Agentic AI Day 65 · 28 Oct 2026</p>
          <Link to="/agentic-day-66" className="day001-nav-btn day001-nav-next">Day 66 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>CI/CD</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 65 <span aria-hidden="true">⚙️</span></h1>
              <p className="day001-day-theme">CI/CD FOR AGENTS · LLMOPS MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · CI/CD</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Day 65 closes the LLMOps loop. Put <strong>eval gates in CI</strong>, promote with evidence, and treat prompt
          changes like production code.
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

        <CardSection icon="⚙️" title="AUTOMATE THE LOOP" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#CICD</span><span>#LLMOps</span><span>#Day65</span><span>#AgenticAI</span><span>#Milestone</span>
        </footer>
      </div>
    </div>
  );
}
