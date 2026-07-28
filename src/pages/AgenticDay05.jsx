import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_FUNCTIONS_DOCS = 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions';

const LEARNT_TODAY = [
  { title: 'def', text: 'defines a reusable block of code once, then calls it by name as many times as needed' },
  { title: 'Parameters vs arguments', text: 'parameters are the names in the function definition; arguments are the actual values passed when calling it' },
  { title: 'return', text: 'sends a value back to the caller and exits the function immediately — a function with no return gives back None' },
  { title: 'Default parameters', text: 'a parameter can have a fallback value, so the caller only needs to pass it when overriding the default' },
  { title: 'Keyword arguments', text: 'passing arguments by name (greet(name="Sumit")) instead of position, so order stops mattering' },
  { title: '*args', text: 'collects any number of extra positional arguments into a tuple inside the function' },
  { title: '**kwargs', text: 'collects any number of extra named arguments into a dictionary inside the function' },
  { title: 'lambda', text: 'a small, throwaway, unnamed function for one-line logic — often passed straight into map() or filter()' },
];

const FUNCTION_BASICS = [
  {
    icon: '🧩', title: 'def & return', titleClass: 'card-title-cyan', subtitle: 'Define Once, Call Many Times',
    description:
      'def names a block of reusable logic. return hands a value back to whoever called the function and exits immediately — no return means the function silently gives back None.',
    code: 'def add(a, b):\n    return a + b\n\nresult = add(4, 5)\nprint(result)  # 9',
  },
  {
    icon: '🎚️', title: 'Default Parameters', titleClass: 'card-title-purple', subtitle: 'Optional Overrides',
    description:
      'Give a parameter a default value, and callers only need to supply it when they want something other than that default.',
    code: 'def greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Sumit")            # Hello, Sumit!\ngreet("Sumit", "Namaste") # Namaste, Sumit!',
  },
];

const ADVANCED_FUNCTIONS = [
  {
    icon: '📥', title: '*args', titleClass: 'card-title-cyan', subtitle: 'Any Number Of Positional Args',
    description:
      'When you don\'t know in advance how many positional values will be passed in, *args collects all of them into a single tuple.',
    code: 'def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3))       # 6\nprint(total(10, 20, 30, 40)) # 100',
  },
  {
    icon: '📦', title: '**kwargs', titleClass: 'card-title-purple', subtitle: 'Any Number Of Named Args',
    description:
      'The keyword-argument equivalent of *args — it gathers every extra name=value pair into a dictionary you can loop over.',
    code: 'def profile(**kwargs):\n    for key, value in kwargs.items():\n        print(key, "->", value)\n\nprofile(name="Sumit", course="Agentic AI")',
  },
  {
    icon: '⚡', title: 'lambda', titleClass: 'card-title-amber', subtitle: 'Small, Unnamed Functions',
    description:
      'A lambda is a one-line, throwaway function — no def, no name required. It shows up constantly as an argument to map(), filter(), and sorted().',
    code: 'square = lambda x: x * x\nprint(square(5))  # 25\n\nnums = [1, 2, 3, 4]\nprint(list(map(lambda n: n * n, nums)))',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Functions in Python', titleClass: 'card-title-cyan', subtitle: 'PY Module 5',
    description: 'The full lesson on the site — defining functions, parameters, return values, *args/**kwargs, and lambda.',
    link: { href: '/python/learn/functions-in-python', label: 'Open PY Module 5 →' },
  },
  {
    icon: '📖', title: 'Defining Functions', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter on defining functions, argument passing, and default values.',
    link: { href: PY_FUNCTIONS_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🎉', title: 'Week 1 Complete', titleClass: 'card-title-amber', subtitle: 'Days 1–5 Done',
    description: 'Setup, syntax, control flow, data structures, and functions — the core of Python is covered. Next: deeper Python + first ML/DL concepts.',
    link: { href: '/', label: 'Back to Home →' },
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

export default function AgenticDay05() {
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
          <Link to="/agentic-day-4" className="day001-nav-btn day001-nav-prev">← Day 4</Link>
          <p className="day001-datetime">Agentic AI Day 5 · 5 Aug 2026</p>
          <Link to="/" className="day001-nav-btn day001-nav-next">Home →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Functions</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 5 <span aria-hidden="true">🧩</span></h1>
              <p className="day001-day-theme">FUNCTIONS IN PYTHON</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '3%' }} /></div>

        <p className="day001-summary">
          Turning repeated code into reusable blocks. <strong>def</strong> defines a function once, and{' '}
          <strong>return</strong> sends a value back and exits — no return means the function hands back{' '}
          <code>None</code>. Learned the difference between <strong>parameters</strong> (the names in the
          definition) and <strong>arguments</strong> (the actual values passed in), plus{' '}
          <strong>default parameters</strong> so a caller only overrides what it needs to, and{' '}
          <strong>keyword arguments</strong> so order stops mattering. For flexible signatures,{' '}
          <strong>*args</strong> gathers extra positional values into a tuple and{' '}
          <strong>**kwargs</strong> gathers extra named values into a dictionary. And a{' '}
          <strong>lambda</strong> is a small, unnamed, one-line function — the kind you pass straight into{' '}
          <code>map()</code> or <code>filter()</code> without ever giving it a name. That closes out the
          first week of Python fundamentals.
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

        <CardSection icon="🧩" title="FUNCTION BASICS" cards={FUNCTION_BASICS} columns={2} />
        <CardSection icon="⚡" title="*ARGS, **KWARGS &amp; LAMBDA" cards={ADVANCED_FUNCTIONS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day5</span><span>#Functions</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
