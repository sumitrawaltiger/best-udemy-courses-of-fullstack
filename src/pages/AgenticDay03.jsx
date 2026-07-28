import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_CONTROL_FLOW_DOCS = 'https://docs.python.org/3/tutorial/controlflow.html';

const LEARNT_TODAY = [
  { title: 'Top-to-bottom by default', text: 'Python runs statements in order unless a condition or loop tells it to branch or repeat' },
  { title: 'if / elif / else', text: 'checks conditions in order and runs the first true block — else is the fallback when none match' },
  { title: 'Nested if', text: 'an if inside another if, useful when a check only makes sense after a previous one already passed' },
  { title: 'match-case', text: 'a cleaner alternative to a long if-elif chain when comparing one value against several fixed options' },
  { title: 'for loop', text: 'iterates over a sequence — a string, list, tuple, dict, or range() — one item at a time' },
  { title: 'while loop', text: 'repeats as long as a condition stays true; you must update the condition yourself or it loops forever' },
  { title: 'break vs continue', text: 'break exits the loop immediately; continue skips just the current iteration and moves to the next' },
  { title: 'for vs while', text: 'reach for for when you know how many times to repeat; while when you\'re repeating until a condition changes' },
];

const CONDITIONALS = [
  {
    icon: '🔀', title: 'if / elif / else', titleClass: 'card-title-cyan', subtitle: 'Branching Logic',
    description:
      'Python checks each condition top to bottom and runs the first block that\'s true. else only runs if nothing above it matched.',
    code: 'marks = 72\n\nif marks >= 90:\n    print("A Grade")\nelif marks >= 75:\n    print("B Grade")\nelif marks >= 65:\n    print("C Grade")\nelse:\n    print("Needs Improvement")',
  },
  {
    icon: '🎛️', title: 'match-case', titleClass: 'card-title-purple', subtitle: 'Python 3.10+',
    description:
      'When you\'re comparing one value against a handful of fixed options, match-case reads cleaner than a long elif chain. case _: is the default.',
    code: 'choice = 2\n\nmatch choice:\n    case 1:\n        print("Add Student")\n    case 2:\n        print("View Student")\n    case _:\n        print("Invalid Choice")',
  },
];

const LOOPS = [
  {
    icon: '🔁', title: 'for Loop', titleClass: 'card-title-cyan', subtitle: 'Iterate A Sequence',
    description:
      'A for loop walks through a sequence one item at a time — a string, list, tuple, dict, or the numbers produced by range().',
    code: 'for i in range(1, 6):\n    print(i)\n\nfor name in ["Ravi", "Sita", "Kiran"]:\n    print(name)',
  },
  {
    icon: '⏳', title: 'while Loop', titleClass: 'card-title-purple', subtitle: 'Repeat Until False',
    description:
      'A while loop keeps running as long as its condition holds. You have to update the loop variable yourself, or the condition never becomes false.',
    code: 'count = 1\nwhile count <= 5:\n    print(count)\n    count = count + 1',
  },
  {
    icon: '⛔', title: 'break & continue', titleClass: 'card-title-amber', subtitle: 'Jumping Statements',
    description:
      'break stops the loop completely — handy once you\'ve found what you\'re searching for. continue just skips the current item and keeps looping.',
    code: 'for i in range(1, 11):\n    if i == 5:\n        break        # stop entirely at 5\n    if i % 2 == 0:\n        continue      # skip even numbers\n    print(i)',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Python Control Flow', titleClass: 'card-title-cyan', subtitle: 'PY Module 3',
    description: 'The full lesson on the site — conditional statements (if/elif/else) and loops (for, while).',
    link: { href: '/python/learn/python-control-flow', label: 'Open PY Module 3 →' },
  },
  {
    icon: '📖', title: 'Control Flow Tools', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter covering if statements, for loops, and the full range() family.',
    link: { href: PY_CONTROL_FLOW_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data Structures', titleClass: 'card-title-amber', subtitle: 'Day 4 Preview',
    description: 'Tomorrow — lists, tuples, sets, dictionaries, and list comprehensions for storing and organizing data.',
    link: { href: '/agentic-day-4', label: 'Go to Day 4 →' },
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

export default function AgenticDay03() {
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
          <Link to="/agentic-day-2" className="day001-nav-btn day001-nav-prev">← Day 2</Link>
          <p className="day001-datetime">Agentic AI Day 3 · 6 Jul 2026</p>
          <Link to="/agentic-day-4" className="day001-nav-btn day001-nav-next">Day 4 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Control Flow</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 3 <span aria-hidden="true">🔀</span></h1>
              <p className="day001-day-theme">PYTHON CONTROL FLOW — CONDITIONS &amp; LOOPS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '2%' }} /></div>

        <p className="day001-summary">
          Programs that actually decide and repeat. <strong>if / elif / else</strong> checks conditions in order
          and runs the first true block, with a <strong>nested if</strong> for checks that only make sense once
          an earlier one has already passed. <strong>match-case</strong> (Python 3.10+) is the cleaner tool once
          you're comparing one value against several fixed options, instead of a long elif chain. For repetition,
          a <strong>for</strong> loop walks through a sequence — a string, list, dict, or <code>range()</code> —
          while a <strong>while</strong> loop keeps going as long as its condition stays true, which means you
          have to update that condition yourself or risk an infinite loop. Inside either loop,{' '}
          <strong>break</strong> exits immediately and <strong>continue</strong> just skips to the next
          iteration.
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

        <CardSection icon="🔀" title="CONDITIONALS" cards={CONDITIONALS} columns={2} />
        <CardSection icon="🔁" title="LOOPS" cards={LOOPS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day3</span><span>#ControlFlow</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
