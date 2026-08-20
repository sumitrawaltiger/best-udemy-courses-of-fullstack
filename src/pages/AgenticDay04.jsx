import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_DATA_STRUCTURES_DOCS = 'https://docs.python.org/3/tutorial/datastructures.html';

const LEARNT_TODAY = [
  { title: 'List', text: 'ordered, mutable, allows duplicates — the everyday container you reach for by default' },
  { title: 'Tuple', text: 'like a list but immutable — faster, and a good fit for data that should never change after creation' },
  { title: 'Set', text: 'unordered and automatically drops duplicates — the fastest way to de-duplicate a list of values' },
  { title: 'Dictionary', text: 'stores key–value pairs; keys must be unique, and lookups by key are effectively instant' },
  { title: 'Indexing & slicing', text: 'list[0] gets one item, list[1:4] gets a range, list[::-1] reverses the whole sequence' },
  { title: 'List comprehension', text: 'a one-line way to build a new list from an existing sequence, optionally filtered by a condition' },
  { title: 'Choosing a structure', text: 'need order + duplicates + changes → list; fixed data → tuple; uniqueness → set; labeled data → dict' },
  { title: 'Nesting', text: 'these structures combine — a list of dictionaries, or a dictionary of lists, models real-world records' },
];

const CORE_STRUCTURES = [
  {
    icon: '📋', title: 'List', titleClass: 'card-title-cyan', subtitle: 'Ordered · Mutable',
    description:
      'The most-used data structure in Python. Ordered, changeable after creation, and happy to hold duplicates or a mix of types.',
    code: 'courses = ["Python", "GenAI", "LangChain"]\ncourses.append("MCP")\nprint(courses[0], courses[-1])',
  },
  {
    icon: '📦', title: 'Tuple', titleClass: 'card-title-purple', subtitle: 'Ordered · Immutable',
    description:
      'Looks like a list but can\'t be changed once created. Use it for values that represent a fixed record, like coordinates or a date.',
    code: 'point = (10, 20)\nprint(point[0])\n# point[0] = 99  # not allowed — tuples are immutable',
  },
];

const MORE_STRUCTURES = [
  {
    icon: '🧮', title: 'Set', titleClass: 'card-title-cyan', subtitle: 'Unique Values Only',
    description:
      'A set silently drops duplicates and doesn\'t preserve order. The fastest way to de-duplicate a list is to wrap it in set().',
    code: 'skills = ["Python", "SQL", "Python", "Git"]\nunique_skills = set(skills)\nprint(unique_skills)  # duplicate "Python" removed',
  },
  {
    icon: '🗂️', title: 'Dictionary', titleClass: 'card-title-purple', subtitle: 'Key → Value',
    description:
      'Stores data as labeled key–value pairs instead of numeric positions. Keys must be unique; values can repeat and be any type.',
    code: 'student = {"name": "Ravi", "course": "Agentic AI", "marks": 88}\nprint(student["name"])\nprint(student.get("grade", "Not Graded"))',
  },
  {
    icon: '⚡', title: 'List Comprehension', titleClass: 'card-title-amber', subtitle: 'One Line, Not A Loop',
    description:
      'Builds a new list from an existing sequence in a single expression, optionally with a filter condition tacked on the end.',
    code: 'numbers = range(1, 11)\nsquares = [n * n for n in numbers]\neven_only = [n for n in numbers if n % 2 == 0]',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Data Structures in Python', titleClass: 'card-title-cyan', subtitle: 'PY Module 4',
    description: 'The full lesson on the site — lists, tuples, dictionaries, sets, and comprehensions, with worked examples.',
    link: { href: '/python/learn/data-structures-in-python', label: 'Open PY Module 4 →' },
  },
  {
    icon: '📖', title: 'Data Structures Tutorial', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter covering lists, tuples, sets, and dictionaries in depth.',
    link: { href: PY_DATA_STRUCTURES_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Functions', titleClass: 'card-title-amber', subtitle: 'Day 5 Preview',
    description: 'Tomorrow — defining functions, parameters vs arguments, return values, and lambda/map/filter.',
    link: { href: '/agentic-day-5', label: 'Go to Day 5 →' },
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

export default function AgenticDay04() {
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
          <Link to="/agentic-day-3" className="day001-nav-btn day001-nav-prev">← Day 3</Link>
          <p className="day001-datetime">Agentic AI Day 4 · 24 Aug 2026</p>
          <Link to="/agentic-day-5" className="day001-nav-btn day001-nav-next">Day 5 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Data Structures</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 4 <span aria-hidden="true">🗂️</span></h1>
              <p className="day001-day-theme">LISTS, TUPLES, SETS &amp; DICTIONARIES</p>
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
          How to actually store data. A <strong>list</strong> is ordered, mutable, and allows duplicates —
          the default container for most jobs. A <strong>tuple</strong> looks the same but is{' '}
          <strong>immutable</strong>, which makes it a better fit for fixed data and slightly faster than a
          list. A <strong>set</strong> throws away duplicates automatically and isn't ordered — the quickest
          way to de-duplicate a list is <code>set(my_list)</code>. A <strong>dictionary</strong> stores{' '}
          <strong>key–value pairs</strong> instead of numeric positions, so you look values up by a meaningful
          label instead of an index. Indexing (<code>list[0]</code>) and slicing (<code>list[1:4]</code>,{' '}
          <code>list[::-1]</code>) work the same way across lists, tuples, and strings. And a{' '}
          <strong>list comprehension</strong> collapses a loop-plus-append into one clean line, with an optional
          filter condition at the end.
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

        <CardSection icon="📋" title="LIST &amp; TUPLE" cards={CORE_STRUCTURES} columns={2} />
        <CardSection icon="🗂️" title="SET, DICT &amp; COMPREHENSIONS" cards={MORE_STRUCTURES} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day4</span><span>#DataStructures</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
