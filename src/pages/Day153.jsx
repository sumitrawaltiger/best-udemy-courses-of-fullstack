import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EVENTS = 'https://docs.nestjs.com/techniques/events';
const QUEUES = 'https://docs.nestjs.com/techniques/queues';
const CQRS = 'https://docs.nestjs.com/recipes/cqrs';

const LEARNT_TODAY = [
  { title: 'Domain events', text: 'something happened (task.created) — other parts react without tight imports' },
  { title: 'EventEmitter', text: '@nestjs/event-emitter for in-process publish/subscribe' },
  { title: 'emit vs on', text: 'service emits after a successful write; listeners handle email, metrics, cache bust' },
  { title: 'Keep handlers thin', text: 'listeners call services — do not put heavy logic in the decorator method alone' },
  { title: 'Queues next', text: 'BullMQ via @nestjs/bullmq when work must survive restarts or run off-box' },
  { title: 'At-least-once', text: 'listeners and jobs can run twice — make side effects idempotent' },
  { title: 'Don’t block the request', text: 'emit and return; let async listeners finish after the HTTP response' },
  { title: 'CQRS peek', text: 'commands change state, queries read — Nest recipe when domains grow large' },
  { title: 'Same idea as Day 142', text: 'background work off the hot path — Nest just organizes it with DI' },
];

const CORE = [
  {
    icon: '📡', title: 'Enable Events', titleClass: 'card-title-cyan', subtitle: 'EventEmitterModule',
    description: 'Import EventEmitterModule.forRoot() once. Then inject EventEmitter2 where you publish.',
    code: 'EventEmitterModule.forRoot();\n\n// after create:\nthis.events.emit("task.created", { id: task.id });',
  },
  {
    icon: '👂', title: 'Listen', titleClass: 'card-title-purple', subtitle: '@OnEvent',
    description: 'A provider method marked @OnEvent runs when that event name is emitted.',
    code: '@Injectable()\nexport class TaskListeners {\n  @OnEvent("task.created")\n  handle(payload: { id: string }) {\n    // send welcome email / bust cache\n  }\n}',
  },
  {
    icon: '📬', title: 'Queue When Needed', titleClass: 'card-title-amber', subtitle: 'BullMQ',
    description: 'If email can wait or must retry, push a job instead of doing it in the listener.',
    code: 'await this.emailQueue.add("welcome", { userId });\n// worker processes later',
  },
];

const PRACTICE = [
  {
    icon: '🔁', title: 'Idempotent Listeners', titleClass: 'card-title-cyan', subtitle: 'Safe Retries',
    description: 'Check “already sent” before sending. Events and jobs both retry in real systems.',
    code: 'if (await alreadyNotified(id)) return;\nawait notify(id);',
  },
  {
    icon: '🧩', title: 'Decouple Modules', titleClass: 'card-title-purple', subtitle: 'No Circular Imports',
    description: 'TasksModule emits; NotifyModule listens. Neither module imports the other’s services for that flow.',
    code: '// emit "task.created"\n'// NotifyModule listens — loose coupling',
  },
  {
    icon: '📚', title: 'CQRS Later', titleClass: 'card-title-amber', subtitle: 'Optional Path',
    description: 'When write and read models diverge, Nest CQRS helps. Learn events first; adopt CQRS when pain shows.',
    code: '// command → events → projections\n'// start simpler than full CQRS',
  },
  {
    icon: '🔜', title: 'Next: Nest Tests', titleClass: 'card-title-lime', subtitle: 'Day 154 Preview',
    description: 'Tomorrow: unit and e2e tests with Nest testing utilities and Supertest.',
    link: { href: '/day-154', label: 'Go to Day 154 →' },
  },
];

const RESOURCES = [
  {
    icon: '📡', title: 'Events', titleClass: 'card-title-cyan', subtitle: 'Nest Docs',
    description: 'EventEmitterModule, @OnEvent, and async listeners.',
    link: { href: EVENTS, label: 'Read events docs →', external: true },
  },
  {
    icon: '📬', title: 'Queues', titleClass: 'card-title-purple', subtitle: 'Nest Docs',
    description: 'Bull / BullMQ integration patterns in Nest.',
    link: { href: QUEUES, label: 'Read queues docs →', external: true },
  },
  {
    icon: '📐', title: 'CQRS Recipe', titleClass: 'card-title-amber', subtitle: 'Nest',
    description: 'Official recipe when you outgrow simple services.',
    link: { href: CQRS, label: 'Read CQRS recipe →', external: true },
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

export default function Day153() {
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
          <Link to="/day-152" className="day001-nav-btn day001-nav-prev">← Day 152</Link>
          <p className="day001-datetime">Nest Day 153 · 6 Nov 2027</p>
          <Link to="/day-154" className="day001-nav-btn day001-nav-next">Day 154 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Events</span><span>Queues</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 153 <span aria-hidden="true">📡</span></h1>
              <p className="day001-day-theme">EVENTS &amp; BACKGROUND WORK</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">NEST · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Day 153 decouples side effects. <strong>Emit</strong> domain events,{' '}
          <strong>listen</strong> in other modules, and escalate to <strong>queues</strong> when work
          must retry or leave the request path.
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

        <CardSection icon="📡" title="1 · EVENT EMITTER" cards={CORE} columns={3} />
        <CardSection icon="🔁" title="2 · IDEMPOTENCY & CQRS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Events</span><span>#BullMQ</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
