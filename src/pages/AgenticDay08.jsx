import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_ERRORS_DOCS = 'https://docs.python.org/3/tutorial/errors.html';

const LEARNT_TODAY = [
  { title: 'try / except', text: 'code that might fail goes in try; the matching except block catches the error instead of crashing the program' },
  { title: 'else', text: 'runs only if the try block succeeded with no exception — a clean place for the "happy path" follow-up' },
  { title: 'finally', text: 'always runs, error or not — the right place to close a file or release a resource' },
  { title: 'Specific exceptions first', text: 'catch ValueError, ZeroDivisionError, etc. by name before a generic except Exception, so real bugs aren\'t hidden' },
  { title: 'raise', text: 'manually triggers an exception — useful for rejecting invalid input as soon as it\'s detected' },
  { title: 'Custom exceptions', text: 'a class inheriting from Exception lets you name domain-specific errors, like InsufficientBalanceError' },
  { title: 'Debugging vs printing', text: 'a debugger pauses execution and lets you inspect real variable state, instead of guessing with print()' },
  { title: 'Breakpoints', text: 'mark a line where execution pauses, then step through code (F7 into, F8 over) to see exactly what happens' },
];

const TRY_EXCEPT = [
  {
    icon: '🧯', title: 'try / except / else / finally', titleClass: 'card-title-cyan', subtitle: 'Handle Errors Gracefully',
    description:
      'Risky code goes in try. except catches a matching error. else runs only if nothing went wrong. finally always runs — success or failure.',
    code: 'try:\n    result = 10 / int(input("Divide by: "))\nexcept ZeroDivisionError:\n    print("Can\'t divide by zero")\nelse:\n    print("Result:", result)\nfinally:\n    print("Done")',
  },
  {
    icon: '🚨', title: 'raise & Custom Exceptions', titleClass: 'card-title-purple', subtitle: 'Fail On Your Own Terms',
    description:
      'raise triggers an error manually. Subclassing Exception lets you create a named error type specific to your program\'s domain.',
    code: 'class InsufficientBalanceError(Exception):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientBalanceError("Not enough funds")\n    return balance - amount',
  },
];

const DEBUGGING = [
  {
    icon: '🔍', title: 'What is Debugging?', titleClass: 'card-title-cyan', subtitle: 'Beyond print()',
    description:
      'Debugging means executing a program step by step to see which line runs, what each variable holds, and exactly where things go wrong — instead of guessing with scattered print statements.',
  },
  {
    icon: '🔴', title: 'Breakpoints', titleClass: 'card-title-purple', subtitle: 'Pause Execution',
    description:
      'A breakpoint tells the debugger to pause the program right before that line runs, so you can inspect the current state before continuing.',
  },
  {
    icon: '⌨️', title: 'Step Into / Over', titleClass: 'card-title-amber', subtitle: 'F7 · F8 · F9',
    description:
      'Step Into (F7) enters a function call to see what happens inside it; Step Over (F8) runs the current line without diving in; Resume (F9) continues to the next breakpoint.',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Exception Handling', titleClass: 'card-title-cyan', subtitle: 'PY Module 8',
    description: 'The full lesson on the site — try/except/else/finally, custom exceptions, and debugging with breakpoints.',
    link: { href: '/python/learn/exception-handling', label: 'Open PY Module 8 →' },
  },
  {
    icon: '📖', title: 'Errors and Exceptions', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter on handling exceptions, raising them, and defining your own.',
    link: { href: PY_ERRORS_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: OOP in Python', titleClass: 'card-title-amber', subtitle: 'Day 9 Preview',
    description: 'Tomorrow — classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
    link: { href: '/agentic-day-9', label: 'Go to Day 9 →' },
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

export default function AgenticDay08() {
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
          <Link to="/agentic-day-7" className="day001-nav-btn day001-nav-prev">← Day 7</Link>
          <p className="day001-datetime">Agentic AI Day 8 · 26 Mar 2027</p>
          <Link to="/agentic-day-9" className="day001-nav-btn day001-nav-next">Day 9 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Exceptions</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 8 <span aria-hidden="true">🧯</span></h1>
              <p className="day001-day-theme">EXCEPTION HANDLING &amp; DEBUGGING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '5%' }} /></div>

        <p className="day001-summary">
          Handling failure on purpose instead of crashing. <strong>try / except</strong> wraps risky code
          and catches a matching error before it takes down the program, <strong>else</strong> runs only
          when nothing went wrong, and <strong>finally</strong> always runs — the right place to close a
          file or release a resource. Catching specific exceptions (<code>ValueError</code>,{' '}
          <code>ZeroDivisionError</code>) before a generic one keeps real bugs from getting silently
          swallowed. <strong>raise</strong> triggers an error manually, and a class inheriting from{' '}
          <code>Exception</code> creates a <strong>custom exception</strong> named for your program's own
          domain. Also spent time on <strong>debugging</strong> — pausing execution at a{' '}
          <strong>breakpoint</strong> and stepping through code line by line to inspect real variable
          state, instead of guessing with scattered <code>print()</code> calls.
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

        <CardSection icon="🧯" title="TRY, EXCEPT &amp; RAISE" cards={TRY_EXCEPT} columns={2} />
        <CardSection icon="🔍" title="DEBUGGING" cards={DEBUGGING} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day8</span><span>#ExceptionHandling</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
