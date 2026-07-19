import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GH_LECTURE = 'https://github.com/Rohitnegi9/STRIKEGenAI/tree/main/Lecture25';
const GH_REPO = 'https://github.com/Rohitnegi9/STRIKEGenAI';

const LEARNT_TODAY = [
  { title: 'The build agents', text: 'Coder writes a task, Reviewer checks it, Executor runs it in Docker, Debugger fixes real errors' },
  { title: 'The dev loop', text: 'selectNextTask → contextBuilder → Coder → Reviewer → Executor → snapshot, then repeat' },
  { title: 'The review gate', text: 'approved → execute; rejected ≤2 → re-code; rejected >2 → simplify the task instead of forcing it' },
  { title: 'Real execution', text: 'the Executor runs code in the Docker sandbox and captures actual output, not a guess' },
  { title: 'Debug or escalate', text: 'on failure the Debugger diagnoses and re-codes; if it can’t, it escalates to a human' },
  { title: 'Snapshots & rollback', text: 'Git commits after each task give a safe point; a failed debug rolls back to it' },
  { title: 'Token control', text: 'stateCompactor and a token tracker keep the growing state and cost under budget' },
  { title: 'Checkpointed & resumable', text: 'MemorySaver persists state so the whole team survives a crash and resumes mid-build' },
];

const LOOP = [
  {
    icon: '🔁', title: 'The Dev Loop', titleClass: 'card-title-cyan', subtitle: 'One Task At A Time',
    description:
      'selectNextTask picks the next task, contextBuilder gathers what the Coder needs, the Coder writes it, the Reviewer checks it, and the Executor runs it — then loop to the next task.',
    code: '// selectNextTask → contextBuilder → coderAgent\n// → reviewerAgent → executorAgent → snapshot\n// → back to selectNextTask',
  },
  {
    icon: '🚦', title: 'The Review Gate', titleClass: 'card-title-purple', subtitle: 'Approve Or Retry',
    description:
      'The Reviewer’s verdict routes the flow: approved code goes to the Executor; rejected code (up to twice) goes back to the Coder; a third rejection triggers task simplification.',
    code: '// approved      → executorAgent\n// rejected (≤2)  → coderAgent (retry)\n// rejected (>2)  → simplifyTask',
  },
  {
    icon: '🧪', title: 'Run It For Real', titleClass: 'card-title-amber', subtitle: 'Executor + Snapshot',
    description:
      'The Executor runs the code in the Docker sandbox. On pass, a Git snapshot commits the progress. On fail, the flow hands off to the Debugger.',
    code: '// executor pass → snapshot (git commit)\n// executor fail → debuggerAgent',
  },
];

const RESILIENCE = [
  {
    icon: '🐞', title: 'Debug Or Escalate', titleClass: 'card-title-cyan', subtitle: 'When Code Fails',
    description:
      'The Debugger reads the real error, finds the root cause, and sends a fix back to the Coder. If it still can’t fix it, humanEscalation asks a person to skip or guide.',
    code: '// debugger fix     → coderAgent (try again)\n// debugger stuck   → humanEscalation → skip/guide',
  },
  {
    icon: '↩️', title: 'Snapshots & Rollback', titleClass: 'card-title-purple', subtitle: 'Undo Bad Code',
    description:
      'Because every task is committed to Git in the sandbox, a broken change can be rolled back to the last good snapshot — the team never digs itself into a hole.',
    code: '// good task → git commit (snapshot)\n// debug failure → rollback to last snapshot',
  },
  {
    icon: '🧮', title: 'Budget & Verify', titleClass: 'card-title-amber', subtitle: 'Stay In Control',
    description:
      'phaseVerification confirms each phase is done, patternExtractor keeps code consistent, stateCompactor and the token tracker cap cost — then presentToUser and END.',
    footer: 'verify · compact · budget · present → END',
  },
];

const RESOURCES = [
  {
    icon: '💻', title: 'Lecture 25', titleClass: 'card-title-cyan', subtitle: 'GitHub',
    description:
      'The complete ai-dev-team-final project — all 8 agents, the full dev-loop graph, snapshots, escalation and token control.',
    link: { href: GH_LECTURE, label: 'Open Lecture 25 →', external: true },
  },
  {
    icon: '🏆', title: 'An Autonomous Team', titleClass: 'card-title-purple', subtitle: 'It All Comes Together',
    description:
      'Prompts, tools, RAG, memory, LangGraph and multi-agent orchestration — combined into a system that plans, codes, tests, debugs and iterates on real software.',
    link: { href: '/genai', label: 'Open the GenAI track →' },
  },
  {
    icon: '💾', title: 'STRIKE GenAI Repo', titleClass: 'card-title-amber', subtitle: 'All Lectures',
    description:
      'The full Coder Army course code — next up, Lecture 26 adds a live React dashboard (WebSocket) over the AI Dev Team.',
    link: { href: GH_REPO, label: 'Open the full repo →', external: true },
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

export default function Day025() {
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
          <Link to="/day-024" className="day001-nav-btn day001-nav-prev">← Day 24</Link>
          <p className="day001-datetime">Agentic AI Day 25</p>
          <Link to="/day-026" className="day001-nav-btn day001-nav-next">Day 26 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Coder Army</span><span>Lecture 25</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 25 <span aria-hidden="true">🏆</span></h1>
              <p className="day001-day-theme">AI DEV TEAM — THE FULL DEV LOOP</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GEN · AGENTIC AI</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '25%' }} /></div>

        <p className="day001-summary">
          Lecture 25 completes the team. The <strong>build agents</strong> join in a <strong>dev loop</strong>:{' '}
          <strong>selectNextTask → Coder → Reviewer → Executor</strong>, then snapshot and repeat. The Reviewer is a{' '}
          <strong>gate</strong> — approve, re-code (≤2), or <strong>simplify</strong> a stubborn task. The Executor
          runs code <strong>for real in Docker</strong>; failures go to the <strong>Debugger</strong>, which fixes or{' '}
          <strong>escalates to a human</strong>. Git <strong>snapshots</strong> allow rollback, and{' '}
          <strong>checkpoints</strong> + a <strong>token budget</strong> keep it resilient and affordable. An{' '}
          autonomous team that actually ships. <em>25 lectures in.</em>
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

        <CardSection icon="🔁" title="THE DEV LOOP" cards={LOOP} columns={3} />
        <CardSection icon="🛟" title="WHEN THINGS FAIL" cards={RESILIENCE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GenAI</span><span>#AIDevTeam</span><span>#LangGraph</span><span>#Agents</span>
        </footer>
      </div>
    </div>
  );
}
