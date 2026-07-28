import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_FILE_IO_DOCS = 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files';

const LEARNT_TODAY = [
  { title: 'open()', text: 'opens a file for a given mode — "r" read, "w" write/truncate, "a" append, "x" create — before you can touch it' },
  { title: 'with open(...) as f', text: 'the safe way to open a file — it closes automatically even if an error happens partway through' },
  { title: 'read() vs readlines()', text: 'read() returns the whole file as one string; readlines() returns a list, one string per line' },
  { title: 'Looping a file object', text: 'for line in file: reads line by line, the most memory-efficient way to process a large file' },
  { title: 'write() vs writelines()', text: 'write() takes one string; writelines() takes a list, but neither one adds newlines for you' },
  { title: 'close()', text: 'releases the file and flushes pending writes — with open(...) does this automatically, so prefer it' },
  { title: 'JSON', text: 'json.dump(data, f, indent=4) writes readable JSON; json.load(f) reads it back into a Python object' },
  { title: 'os module', text: 'os.path.exists(), os.remove(), os.rename(), and os.mkdir() manage files and folders on disk' },
];

const FILE_BASICS = [
  {
    icon: '📂', title: 'Opening & Reading', titleClass: 'card-title-cyan', subtitle: 'with open(...) as f',
    description:
      'with open() is the safe way to work with a file — it closes automatically even if the code inside raises an error. Loop the file object directly to read it line by line.',
    code: 'with open("students.txt", "r") as file:\n    for line in file:\n        print(line)',
  },
  {
    icon: '✍️', title: 'Writing to Files', titleClass: 'card-title-purple', subtitle: '"w" Overwrites, "a" Appends',
    description:
      'write() takes a single string, writelines() takes a list — but neither adds a newline for you, so add \\n yourself where you need one.',
    code: 'courses = ["Python\\n", "GenAI\\n", "LangChain\\n"]\n\nwith open("courses.txt", "w") as file:\n    file.writelines(courses)',
  },
];

const FILE_TOOLS = [
  {
    icon: '🔤', title: 'File Modes', titleClass: 'card-title-cyan', subtitle: 'r · w · a · x · b · +',
    description:
      'r reads (default), w writes and truncates, a appends, x creates and fails if the file exists. Add b for binary or + for read-and-write, e.g. "rb" or "w+".',
    code: '# "r" read   "w" write/truncate   "a" append\n# "x" create-only   "rb" read binary   "w+" write & read',
  },
  {
    icon: '🗂️', title: 'Working with JSON', titleClass: 'card-title-purple', subtitle: 'dump() / load()',
    description:
      'JSON is a lightweight, language-independent key-value format — perfect for config files, API payloads, and saved app state.',
    code: 'import json\n\nwith open("profile.json", "w") as f:\n    json.dump({"name": "Sumit", "day": 7}, f, indent=4)\n\nwith open("profile.json") as f:\n    data = json.load(f)',
  },
  {
    icon: '🧰', title: 'os Module', titleClass: 'card-title-amber', subtitle: 'Check · Delete · Rename',
    description:
      'The os module manages files and folders on disk — check before deleting, and always confirm a file exists first to avoid a crash.',
    code: 'import os\n\nif os.path.exists("old.txt"):\n    os.rename("old.txt", "new.txt")\nos.mkdir("reports")',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'File Handling', titleClass: 'card-title-cyan', subtitle: 'PY Module 7',
    description: 'The full lesson on the site — opening, reading, writing, file modes, JSON, and the os module.',
    link: { href: '/python/learn/file-handling', label: 'Open PY Module 7 →' },
  },
  {
    icon: '📖', title: 'Reading & Writing Files', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial section on file objects, modes, and the with statement.',
    link: { href: PY_FILE_IO_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Exception Handling', titleClass: 'card-title-amber', subtitle: 'Day 8 Preview',
    description: 'Tomorrow — try/except/else/finally, raising custom errors, and debugging with breakpoints.',
    link: { href: '/agentic-day-8', label: 'Go to Day 8 →' },
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

export default function AgenticDay07() {
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
          <Link to="/agentic-day-6" className="day001-nav-btn day001-nav-prev">← Day 6</Link>
          <p className="day001-datetime">Agentic AI Day 7 · 5 Aug 2026</p>
          <Link to="/agentic-day-8" className="day001-nav-btn day001-nav-next">Day 8 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>File Handling</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 7 <span aria-hidden="true">📁</span></h1>
              <p className="day001-day-theme">FILE HANDLING &amp; JSON</p>
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
          Making data outlive the program. <code>open("file", "mode")</code> is the entry point, but{' '}
          <strong>with open(...) as f</strong> is the version to actually use — it closes the file
          automatically even if something goes wrong inside the block. Looping a file object directly (
          <code>for line in file</code>) reads it line by line, the most memory-friendly option for large
          files, while <strong>read()</strong> grabs everything at once and <strong>readlines()</strong>{' '}
          returns a list of lines. On the write side, <strong>write()</strong> takes one string and{' '}
          <strong>writelines()</strong> takes a list — neither adds a newline automatically. For structured
          data, <strong>JSON</strong> (<code>json.dump</code> / <code>json.load</code>) is the standard
          format for config files and API payloads, and the <strong>os module</strong> handles checking,
          deleting, renaming files, and creating folders.
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

        <CardSection icon="📂" title="READING &amp; WRITING FILES" cards={FILE_BASICS} columns={2} />
        <CardSection icon="🧰" title="MODES, JSON &amp; OS TOOLS" cards={FILE_TOOLS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day7</span><span>#FileHandling</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
