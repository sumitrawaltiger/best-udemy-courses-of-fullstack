import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_DATATYPES_DOCS = 'https://docs.python.org/3/library/stdtypes.html';

const LEARNT_TODAY = [
  { title: 'Dynamic typing', text: 'a variable\'s type is decided by the value assigned to it — no type keyword needed at declaration' },
  { title: 'Variables', text: 'created the moment you assign a value: name = "Sumit" both declares and initializes name' },
  { title: 'Core data types', text: 'int, float, str, bool cover most everyday values; type() tells you which one a variable holds' },
  { title: 'Naming rules', text: 'letters, digits and underscores only, can\'t start with a digit, and snake_case is the Python convention' },
  { title: 'Arithmetic operators', text: '+ - * / // % ** — including floor division // and modulus % for the remainder' },
  { title: 'Comparison operators', text: '== != > < >= <= compare two values and always return True or False' },
  { title: 'Logical operators', text: 'and, or, not combine or invert conditions instead of using symbols like && || !' },
  { title: 'input() is always a string', text: 'user input from input() must be cast with int() or float() before doing math on it' },
];

const SYNTAX_VARIABLES = [
  {
    icon: '📝', title: 'Indentation Is Syntax', titleClass: 'card-title-cyan', subtitle: 'No Braces, No Semicolons',
    description:
      'Python uses indentation (not { }) to mark where a block starts and ends. Mixing tabs and spaces, or indenting inconsistently, is a syntax error — not just a style nitpick.',
    code: 'if True:\n    print("this line is inside the block")\nprint("this line is not")',
  },
  {
    icon: '🏷️', title: 'Variables', titleClass: 'card-title-purple', subtitle: 'Assign To Create',
    description:
      'A variable is created the moment you assign it a value — there\'s no separate declaration step. The type is inferred from whatever value you assign.',
    code: 'name = "Sumit"\nage = 27\nis_learning = True\n\nprint(type(name), type(age), type(is_learning))',
  },
];

const TYPES_OPERATORS = [
  {
    icon: '🔢', title: 'Basic Data Types', titleClass: 'card-title-cyan', subtitle: 'int · float · str · bool',
    description:
      'The four types you\'ll use constantly: whole numbers (int), decimals (float), text (str), and True/False (bool). Everything else builds on top of these.',
    code: 'age = 27          # int\nheight = 5.9      # float\nname = "Sumit"    # str\nis_active = True  # bool',
  },
  {
    icon: '➕', title: 'Arithmetic Operators', titleClass: 'card-title-purple', subtitle: '+ - * / // % **',
    description:
      'Standard math, plus two Python-specific ones: // (floor division, drops the remainder) and % (modulus, keeps only the remainder).',
    code: 'a, b = 10, 3\nprint(a + b, a - b, a * b)   # 13 7 30\nprint(a / b)                 # 3.333...\nprint(a // b, a % b, a ** b) # 3 1 1000',
  },
  {
    icon: '⚖️', title: 'Comparison & Logical', titleClass: 'card-title-amber', subtitle: '== != and or not',
    description:
      'Comparison operators check a relationship and return True/False. Logical operators combine multiple conditions into one — Python spells them out as words, not symbols.',
    code: 'age = 25\nprint(age >= 18)              # True\nprint(age >= 18 and age < 60) # True\nprint(not age >= 18)          # False',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Introduction to Python', titleClass: 'card-title-cyan', subtitle: 'PY Module 2',
    description: 'The full lesson on the site — getting started, syntax, variables, data types, and operators.',
    link: { href: '/python/learn/introduction-to-python', label: 'Open PY Module 2 →' },
  },
  {
    icon: '📖', title: 'Built-in Types', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official reference for every built-in data type and what you can do with it.',
    link: { href: PY_DATATYPES_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Control Flow', titleClass: 'card-title-amber', subtitle: 'Day 3 Preview',
    description: 'Tomorrow — if/elif/else, match-case, and the for and while loops that make a program actually decide and repeat.',
    link: { href: '/agentic-day-3', label: 'Go to Day 3 →' },
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

export default function AgenticDay02() {
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
          <Link to="/agentic-day-1" className="day001-nav-btn day001-nav-prev">← Day 1</Link>
          <p className="day001-datetime">Agentic AI Day 2 · 20 Mar 2027</p>
          <Link to="/agentic-day-3" className="day001-nav-btn day001-nav-next">Day 3 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Python Basics</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 2 <span aria-hidden="true">🐍</span></h1>
              <p className="day001-day-theme">PYTHON SYNTAX, VARIABLES &amp; OPERATORS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '1%' }} /></div>

        <p className="day001-summary">
          First real Python day. Python uses <strong>indentation</strong> instead of braces to mark a block, so
          a missing or inconsistent indent is a syntax error, not just messy style. A <strong>variable</strong>{' '}
          is created the instant you assign it — <code>name = "Sumit"</code> — with its type inferred from the
          value, since Python is <strong>dynamically typed</strong>. The four everyday types are{' '}
          <code>int</code>, <code>float</code>, <code>str</code>, and <code>bool</code>. Covered every{' '}
          <strong>arithmetic operator</strong> (including floor division <code>//</code> and modulus{' '}
          <code>%</code>), plus <strong>comparison</strong> (<code>== != &gt; &lt;</code>) and{' '}
          <strong>logical</strong> operators (<code>and</code>, <code>or</code>, <code>not</code>) for building
          conditions. One gotcha to remember: <code>input()</code> always returns a string, so it needs{' '}
          <code>int()</code> or <code>float()</code> before you can do math with it.
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

        <CardSection icon="📝" title="SYNTAX &amp; VARIABLES" cards={SYNTAX_VARIABLES} columns={2} />
        <CardSection icon="🔢" title="TYPES &amp; OPERATORS" cards={TYPES_OPERATORS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day2</span><span>#PhaseOne</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
