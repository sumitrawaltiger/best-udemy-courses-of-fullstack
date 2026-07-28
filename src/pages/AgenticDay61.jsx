import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MLFLOW = 'https://mlflow.org/docs/latest/llms/index.html';
const LANGSMITH = 'https://docs.smith.langchain.com/';

const LEARNT_TODAY = [
  { title: 'LLMOps vs MLOps', text: 'same ops mindset — but prompts, tools, and eval sets are first-class artifacts' },
  { title: 'Version everything', text: 'prompt, model id, tools schema, retrieval index, and graph code need versions' },
  { title: 'Registries', text: 'store prompts/models with owners, changelogs, and promote stages (dev → staging → prod)' },
  { title: 'Config as code', text: 'env + feature flags select model/prompt version — never hardcode in prod' },
  { title: 'Reproducibility', text: 'a failed production run must be re-playable from logged versions' },
  { title: 'Ownership', text: 'who can ship a prompt change? who owns the eval gate?' },
  { title: 'Cost envelopes', text: 'per-tenant and per-feature budgets from day one' },
  { title: 'What’s next', text: 'package agent/RAG services so those versions ship the same way every time' },
];

const CORE = [
  {
    icon: '📦', title: 'Artifact Bundle', titleClass: 'card-title-cyan', subtitle: 'Version',
    description:
      'Treat a release as a bundle: prompt_id@v, model@v, tools@v, index@v, graph@v. Log the whole bundle on every run.',
    code: 'release = {\n  prompt: "support-v12",\n  model: "gpt-4.1-mini",\n  graph: "agent-v3",\n}',
  },
  {
    icon: '🏷️', title: 'Promote Stages', titleClass: 'card-title-purple', subtitle: 'Registry',
    description:
      'Dev → staging → prod with an eval gate between stages. Prod pointers move only after the suite passes.',
    code: 'dev → staging\n→ eval gate\n→ prod pointer',
  },
  {
    icon: '🎚️', title: 'Flags & Kill Switch', titleClass: 'card-title-amber', subtitle: 'Control',
    description:
      'Feature flags pick graph/prompt version. A kill switch falls back to a safe FAQ or human queue.',
    code: 'flag: agent_v3=5%\nkill → FAQ / HITL',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Version Card', titleClass: 'card-title-cyan', subtitle: 'Lab',
    description:
      'Write a one-page release card for your agent: artifacts, owner, eval pass criteria, rollback pointer.',
    code: 'artifacts · owner\neval · rollback',
  },
  {
    icon: '📒', title: 'Replay Log', titleClass: 'card-title-purple', subtitle: 'Ops',
    description:
      'On a failed run, print the exact prompt/model/tool versions used. Confirm you can re-run offline.',
    code: 'log versions\n→ replay offline',
  },
  {
    icon: '🔜', title: 'Next: CI/CD for Agents', titleClass: 'card-title-amber', subtitle: 'Day 66 Preview',
    description: 'Next in the curriculum — pipelines, eval gates, and canary rollouts so versions ship safely.',
    link: { href: '/agentic-day-66', label: 'Go to Day 66 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python Track', titleClass: 'card-title-cyan', subtitle: 'Hub',
    description: 'Agentic + Gen AI modules that feed into LLMOps practice.',
    link: { href: '/python', label: 'Open Python track →' },
  },
  {
    icon: '📖', title: 'MLflow LLMs', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Tracking and packaging patterns for LLM apps.',
    link: { href: MLFLOW, label: 'Open MLflow LLM docs →', external: true },
  },
  {
    icon: '🔭', title: 'LangSmith', titleClass: 'card-title-amber', subtitle: 'Observability',
    description: 'Traces and datasets that pair with versioned prompts and graphs.',
    link: { href: LANGSMITH, label: 'Open LangSmith →', external: true },
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

export default function AgenticDay61() {
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
          <Link to="/agentic-day-55" className="day001-nav-btn day001-nav-prev">← Day 55</Link>
          <p className="day001-datetime">Agentic AI Day 61 · 30 Sep 2026</p>
          <Link to="/agentic-day-66" className="day001-nav-btn day001-nav-next">Day 66 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>LLMOps</span><span>Versioning</span><span>Phase 10</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 61 <span aria-hidden="true">🏭</span></h1>
              <p className="day001-day-theme">LLMOPS FOUNDATIONS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          Day 61 opens <strong>LLMOps</strong>. Version prompts, models, tools, and graphs — then promote them through
          stages with eval gates and kill switches.
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

        <CardSection icon="🏭" title="OPS BASICS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#LLMOps</span><span>#AgenticAI</span><span>#Day61</span><span>#Versioning</span><span>#GenAI</span>
        </footer>
      </div>
    </div>
  );
}
