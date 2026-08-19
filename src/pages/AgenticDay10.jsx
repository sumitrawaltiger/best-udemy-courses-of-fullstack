import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_THREADING_DOCS = 'https://docs.python.org/3/library/threading.html';

const LEARNT_TODAY = [
  { title: 'Process vs thread', text: 'a process is a running program with its own memory; a thread is a lightweight unit of execution inside it, sharing that memory' },
  { title: 'Multitasking', text: 'process-based (several programs at once) vs thread-based (several tasks inside one program) — both run things concurrently' },
  { title: 'threading module', text: 'Python\'s built-in tool for creating and managing threads inside a single process' },
  { title: 'Thread(target=fn)', text: 'wraps a function as a thread; start() begins it running, join() blocks until it finishes' },
  { title: 'is_alive()', text: 'checks whether a thread is still running — True before it finishes, False once it completes' },
  { title: 'Thread scheduling', text: 'the OS decides which thread runs when, so exact execution order is never guaranteed' },
  { title: 'Race condition', text: 'happens when multiple threads read and write shared data at the same time, producing an incorrect result' },
  { title: 'Lock', text: 'threading.Lock() lets only one thread execute a critical section at a time — acquire it, do the work, release it (or use with lock:)' },
];

const THREADING_BASICS = [
  {
    icon: '🧵', title: 'Process vs Thread', titleClass: 'card-title-cyan', subtitle: 'Separate Memory vs Shared Memory',
    description:
      'A process is a full running program with its own memory — expensive to create. A thread is a lightweight unit of execution inside a process, sharing that same memory with other threads.',
  },
  {
    icon: '▶️', title: 'Creating & Joining Threads', titleClass: 'card-title-purple', subtitle: 'start() & join()',
    description:
      'Thread(target=fn) wraps a function to run on its own thread. start() kicks it off; join() makes the current thread wait until it finishes.',
    code: 'import threading, time\n\ndef download():\n    print("Downloading...")\n    time.sleep(2)\n    print("Done")\n\nt = threading.Thread(target=download)\nt.start()\nt.join()\nprint("File is ready")',
  },
];

const THREADING_SAFETY = [
  {
    icon: '⚠️', title: 'Race Condition', titleClass: 'card-title-cyan', subtitle: 'Shared Data, Unsafe Access',
    description:
      'When multiple threads read and modify the same shared value at once, the result depends on unpredictable OS scheduling — and can come out wrong.',
    code: 'balance = 1000\n\ndef withdraw(amount):\n    global balance\n    if balance >= amount:\n        balance -= amount  # unsafe if two threads run this at once',
  },
  {
    icon: '🔐', title: 'Lock', titleClass: 'card-title-purple', subtitle: 'One Thread At A Time',
    description:
      'A Lock protects a critical section so only one thread can execute it at once. Using with lock: is the safest pattern — Python acquires and releases it automatically.',
    code: 'lock = threading.Lock()\n\ndef withdraw(amount):\n    global balance\n    with lock:\n        if balance >= amount:\n            balance -= amount',
  },
  {
    icon: '👀', title: 'is_alive()', titleClass: 'card-title-amber', subtitle: 'Check Thread Status',
    description:
      'Returns True while a thread is still running and False once it has completed — handy for checking progress without blocking with join().',
    code: 't = threading.Thread(target=download)\nt.start()\nprint(t.is_alive())  # True\nt.join()\nprint(t.is_alive())  # False',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Multi-threading in Python', titleClass: 'card-title-cyan', subtitle: 'PY Module 10',
    description: 'The full lesson on the site — process vs thread, creating threads, race conditions, and locks.',
    link: { href: '/python/learn/multi-threading-in-python', label: 'Open PY Module 10 →' },
  },
  {
    icon: '📖', title: 'threading — Docs', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official reference for the threading module — Thread, Lock, and thread synchronization.',
    link: { href: PY_THREADING_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🎉', title: 'Next: Databases', titleClass: 'card-title-amber', subtitle: 'Day 11 Preview',
    description: 'Tomorrow — SQLite, MySQL, CRUD, and a student management assignment.',
    link: { href: '/agentic-day-11', label: 'Go to Day 11 →' },
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

export default function AgenticDay10() {
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
          <Link to="/agentic-day-9" className="day001-nav-btn day001-nav-prev">← Day 9</Link>
          <p className="day001-datetime">Agentic AI Day 10 · 30 Aug 2026</p>
          <Link to="/agentic-day-11" className="day001-nav-btn day001-nav-next">Day 11 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Threading</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 10 <span aria-hidden="true">🧵</span></h1>
              <p className="day001-day-theme">MULTI-THREADING IN PYTHON</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '7%' }} /></div>

        <p className="day001-summary">
          Running more than one thing at once. A <strong>process</strong> is a full running program with
          its own memory; a <strong>thread</strong> is a lightweight unit of execution inside that process,
          sharing its memory with other threads — like several employees working the same restaurant
          instead of one person doing every job in sequence. The <strong>threading</strong> module creates
          threads with <code>Thread(target=fn)</code>: <strong>start()</strong> kicks one off,{' '}
          <strong>join()</strong> waits for it to finish, and <strong>is_alive()</strong> checks whether
          it's still running. Since the OS controls <strong>thread scheduling</strong>, execution order is
          never guaranteed — which is exactly how a <strong>race condition</strong> happens: two threads
          read and write the same shared value at once and produce a wrong result. A{' '}
          <strong>Lock</strong> (ideally via <code>with lock:</code>) fixes that by letting only one thread
          into a critical section at a time. That wraps up the first ten days of Python fundamentals.
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

        <CardSection icon="🧵" title="PROCESS, THREAD &amp; CONTROL" cards={THREADING_BASICS} columns={2} />
        <CardSection icon="🔐" title="RACE CONDITIONS &amp; LOCKS" cards={THREADING_SAFETY} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day10</span><span>#Threading</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
