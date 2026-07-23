import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const OTEL = 'https://opentelemetry.io/docs/';
const K8S = 'https://kubernetes.io/docs/home/';
const SRE = 'https://sre.google/sre-book/table-of-contents/';

const LEARNT_TODAY = [
  { title: 'Ops arc done', text: 'Days 161–170: containers → CI → secrets → cloud → traces → metrics → K8s' },
  { title: 'See everything', text: 'logs + traces + RED metrics — debug with evidence, not guesses' },
  { title: 'Ship safely', text: 'same image digest, health probes, rollbacks, and secret hygiene' },
  { title: 'K8s when needed', text: 'Compose/PaaS first; Kubernetes when multi-node orchestration pays off' },
  { title: 'Alert on symptoms', text: 'error rate and latency beat vanity CPU graphs for Year-1 on-call' },
  { title: 'Backend + ops', text: 'Express/Nest skills plus deploy skills — full lifecycle engineer habits' },
  { title: 'One checklist', text: 'migrate · health · metrics · traces · rollback tag before every release' },
  { title: 'What’s next', text: 'deeper platform work, data/streaming, or the next Year-1 track — Day 171 when ready' },
  { title: 'Keep practicing', text: 'break a staging deploy on purpose and undo it — muscle memory for incidents' },
];

const CORE = [
  {
    icon: '🗺️', title: '161 → 170 Map', titleClass: 'card-title-cyan', subtitle: 'What You Built',
    description: 'Docker and Compose, Actions, secrets, cloud ship, OpenTelemetry, RED metrics, K8s deploy.',
    code: 'Container · CI · Secrets · Cloud\nTraces · Metrics · K8s',
  },
  {
    icon: '✅', title: 'Release Checklist', titleClass: 'card-title-purple', subtitle: 'Every Ship',
    description: 'Image SHA known, migrations applied, /health green, dashboards open, previous tag bookmarked.',
    code: '// sha · migrate · health\n'// watch RED 15m · undo ready',
  },
  {
    icon: '🧭', title: 'Choose Complexity', titleClass: 'card-title-amber', subtitle: 'Fit The Stage',
    description: 'Solo API on Railway is fine. Add K8s when you need multi-service scheduling and policies.',
    code: '// PaaS → grow\n'// K8s when ops demand it',
  },
];

const WRAP = [
  {
    icon: '🚀', title: 'What Comes Next', titleClass: 'card-title-lime', subtitle: 'Day 171 Preview',
    description: 'Tomorrow: database indexes — composite keys, EXPLAIN ANALYZE, and Prisma @@index.',
    link: { href: '/day-171', label: 'Go to Day 171 →' },
  },
  {
    icon: '🏠', title: 'Back Home', titleClass: 'card-title-amber', subtitle: 'Hub',
    description: 'Return to the hub for other tracks and the 1500-day map.',
    link: { href: '/', label: 'Go to Home →' },
  },
  {
    icon: '🔭', title: 'OTel Home', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Keep tracing docs handy when adding a new service.',
    link: { href: OTEL, label: 'Open OpenTelemetry →', external: true },
  },
  {
    icon: '☸️', title: 'K8s Docs', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official Kubernetes documentation home.',
    link: { href: K8S, label: 'Open Kubernetes docs →', external: true },
  },
];

const RESOURCES = [
  {
    icon: '🔭', title: 'OpenTelemetry', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Traces, metrics, and logs standards.',
    link: { href: OTEL, label: 'Read OTel docs →', external: true },
  },
  {
    icon: '☸️', title: 'Kubernetes', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Cluster concepts and task guides.',
    link: { href: K8S, label: 'Read K8s docs →', external: true },
  },
  {
    icon: '📘', title: 'SRE Book', titleClass: 'card-title-amber', subtitle: 'Google',
    description: 'Deeper reading on SLIs, SLOs, and toil when you are ready.',
    link: { href: SRE, label: 'Open SRE book TOC →', external: true },
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

export default function Day170() {
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
          <Link to="/day-169" className="day001-nav-btn day001-nav-prev">← Day 169</Link>
          <p className="day001-datetime">Ops Day 170</p>
          <Link to="/day-171" className="day001-nav-btn day001-nav-next">Day 171 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Year 1</span><span>Ops</span><span>Milestone</span><span>Day 170</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 170 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">CLOUD &amp; OPS MILESTONE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">OPS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Day 170 closes the ops journal arc. You can <strong>containerize</strong>,{' '}
          <strong>observe</strong>, and <strong>orchestrate</strong> an API — and know when PaaS is
          enough versus when Kubernetes earns its keep.
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

        <CardSection icon="🗺️" title="1 · THE ARC" cards={CORE} columns={3} />
        <CardSection icon="🚀" title="2 · NEXT & REFERENCES" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#DevOps</span><span>#Kubernetes</span><span>#Observability</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
