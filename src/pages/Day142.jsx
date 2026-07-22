import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BULLMQ = 'https://docs.bullmq.io/';
const AGENDA = 'https://github.com/agenda/agenda#readme';
const QUEUES = 'https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop';

const LEARNT_TODAY = [
  { title: 'Don’t block the request', text: 'emails, PDFs, and thumbnails should not run inside the HTTP handler' },
  { title: 'Job queue', text: 'push work to a queue; a worker process pulls and runs it' },
  { title: 'BullMQ + Redis', text: 'popular Node queue on Redis — retries, delays, and concurrency built in' },
  { title: 'Producer vs worker', text: 'API enqueues; a separate worker (or same repo, other entry) processes' },
  { title: 'Idempotency', text: 'jobs may retry — make side effects safe to run twice' },
  { title: 'Retries & backoff', text: 'transient failures get automatic retries with delay' },
  { title: 'Respond fast', text: 'POST returns 202 Accepted + job id; client polls or waits on a socket' },
  { title: 'Dead letter', text: 'failed-too-many-times jobs land somewhere you can inspect' },
  { title: 'Keep handlers thin', text: 'route validates → enqueue → done; logic lives in the worker' },
];

const CORE = [
  {
    icon: '📬', title: 'Why Queues', titleClass: 'card-title-cyan', subtitle: 'Off The Hot Path',
    description: 'If work takes more than a blink, enqueue it. The user gets a fast response; the system finishes in the background.',
    code: '// bad: await sendEmail() inside POST /signup\n// good: await emailQueue.add("welcome", { userId })',
  },
  {
    icon: '🐂', title: 'BullMQ Sketch', titleClass: 'card-title-purple', subtitle: 'Redis-Backed',
    description: 'Create a Queue in the API and a Worker in a worker entry file. Same Redis URL for both.',
    code: 'import { Queue, Worker } from "bullmq";\nconst connection = { url: process.env.REDIS_URL };\nexport const emailQueue = new Queue("email", { connection });\n\nnew Worker("email", async (job) => {\n  await sendWelcome(job.data.userId);\n}, { connection });',
  },
  {
    icon: '📤', title: 'Enqueue From Route', titleClass: 'card-title-amber', subtitle: '202 Accepted',
    description: 'After validating input, add a job and return quickly with a job id for status tracking.',
    code: 'app.post("/reports", auth, wrap(async (req, res) => {\n  const job = await reportQueue.add("weekly", { userId: req.user.sub });\n  res.status(202).json({ jobId: job.id });\n}));',
  },
];

const OPS = [
  {
    icon: '🔁', title: 'Retries', titleClass: 'card-title-cyan', subtitle: 'Backoff',
    description: 'Configure attempts and exponential backoff so flaky SMTP or APIs do not lose work forever.',
    code: 'await queue.add("welcome", data, {\n  attempts: 5,\n  backoff: { type: "exponential", delay: 2000 },\n});',
  },
  {
    icon: '🧩', title: 'Idempotent Jobs', titleClass: 'card-title-purple', subtitle: 'Safe Retries',
    description: 'Check “already sent welcome to user X” before sending again. Retries become safe.',
    code: 'if (await alreadySent(userId, "welcome")) return;\nawait sendWelcome(userId);',
  },
  {
    icon: '👷', title: 'Separate Process', titleClass: 'card-title-amber', subtitle: 'Scale Workers',
    description: 'Run workers as their own dyno/service so heavy jobs never starve the HTTP event loop.',
    code: '// package.json\n"worker": "tsx src/worker.ts"',
  },
  {
    icon: '🔜', title: 'Next: Redis Cache', titleClass: 'card-title-lime', subtitle: 'Day 143 Preview',
    description: 'Tomorrow: cache hot reads with Redis — TTLs, cache keys, and invalidation after writes.',
    link: { href: '/day-143', label: 'Go to Day 143 →' },
  },
];

const RESOURCES = [
  {
    icon: '🐂', title: 'BullMQ Docs', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Queues, workers, repeats, and Redis connection options.',
    link: { href: BULLMQ, label: 'Read BullMQ docs →', external: true },
  },
  {
    icon: '⏱️', title: 'Agenda', titleClass: 'card-title-purple', subtitle: 'Mongo Jobs',
    description: 'Job scheduling on Mongo when you are already in that stack.',
    link: { href: AGENDA, label: 'Read Agenda docs →', external: true },
  },
  {
    icon: '🌀', title: 'Don’t Block The Loop', titleClass: 'card-title-amber', subtitle: 'Node',
    description: 'Why long CPU/IO in the request path hurts everyone.',
    link: { href: QUEUES, label: 'Read Node guide →', external: true },
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

export default function Day142() {
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
          <Link to="/day-141" className="day001-nav-btn day001-nav-prev">← Day 141</Link>
          <p className="day001-datetime">Express Day 142</p>
          <Link to="/day-143" className="day001-nav-btn day001-nav-next">Day 143 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Jobs</span><span>BullMQ</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 142 <span aria-hidden="true">📬</span></h1>
              <p className="day001-day-theme">BACKGROUND JOBS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          Day 142 moves slow work off the request. <strong>Enqueue</strong> with{' '}
          <strong>BullMQ</strong> (Redis), return <strong>202</strong>, process in a{' '}
          <strong>worker</strong> with retries and idempotent handlers — keep HTTP fast.
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

        <CardSection icon="📬" title="1 · QUEUES" cards={CORE} columns={3} />
        <CardSection icon="🔁" title="2 · RETRIES & WORKERS" cards={OPS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Express</span><span>#BullMQ</span><span>#Redis</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
