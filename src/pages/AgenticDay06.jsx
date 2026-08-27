import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_MODULES_DOCS = 'https://docs.python.org/3/tutorial/modules.html';

const LEARNT_TODAY = [
  { title: 'import', text: 'brings code from another file or library into the current one — import math, or from random import randint' },
  { title: 'Your own module', text: 'any .py file is a module the moment another file imports it — no special syntax required to create one' },
  { title: 'Package', text: 'a folder of related modules grouped together, importable as one unit (e.g. a project\'s utils package)' },
  { title: 'Standard library', text: 'modules that ship with Python itself — math, random, os, datetime, json — no install needed' },
  { title: 'pip', text: 'Python\'s package installer, for anything not in the standard library — pip install requests' },
  { title: 'requirements.txt', text: 'lists a project\'s external dependencies so anyone can recreate the same environment with one command' },
  { title: 'import aliasing', text: 'import numpy as np renames a module on import, the standard convention for long or common library names' },
  { title: 'Why modularize', text: 'splitting code into modules/packages keeps files small, logic reusable, and a codebase easier to navigate' },
];

const IMPORT_BASICS = [
  {
    icon: '📥', title: 'import Statements', titleClass: 'card-title-cyan', subtitle: 'Reuse Existing Code',
    description:
      'import brings in an entire module; from ... import brings in just the piece you need. Both the standard library and third-party packages work the same way.',
    code: 'import math\nfrom random import randint\n\nprint(math.sqrt(25))   # 5.0\nprint(randint(1, 10))  # a random int 1-10',
  },
  {
    icon: '🧱', title: 'Creating Your Own Module', titleClass: 'card-title-purple', subtitle: 'Any .py File Qualifies',
    description:
      'Save reusable functions in their own file — say helpers.py — and import it by filename (no .py extension) from anywhere else in the project.',
    code: '# helpers.py\ndef greet(name):\n    return f"Hello, {name}!"\n\n# main.py\nimport helpers\nprint(helpers.greet("Sumit"))',
  },
];

const PACKAGES_LIBS = [
  {
    icon: '📦', title: 'Packages', titleClass: 'card-title-cyan', subtitle: 'A Folder Of Modules',
    description:
      'A package is a directory of related modules imported as a single unit — e.g. utils.text, utils.files — keeping a growing codebase organized.',
    code: 'from utils import text\nfrom utils.files import read_csv',
  },
  {
    icon: '🐍', title: 'Standard Library', titleClass: 'card-title-purple', subtitle: 'Built In, No Install',
    description:
      'Python ships with dozens of ready-to-use modules — math, random, os, datetime, json — covering the vast majority of everyday tasks with zero setup.',
    code: 'import os, datetime, json\nprint(os.getcwd())\nprint(datetime.date.today())',
  },
  {
    icon: '⬇️', title: 'pip Basics', titleClass: 'card-title-amber', subtitle: 'Installing Third-Party Packages',
    description:
      'Anything outside the standard library — requests, pandas, langchain — gets installed with pip, Python\'s package manager.',
    code: 'pip install requests\npip freeze > requirements.txt\npip install -r requirements.txt',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Modules & Packages', titleClass: 'card-title-cyan', subtitle: 'PY Module 6',
    description: 'The full lesson on the site — import statements, creating modules, packages, the standard library, and pip.',
    link: { href: '/python/learn/modules-and-packages', label: 'Open PY Module 6 →' },
  },
  {
    icon: '📖', title: 'Modules Tutorial', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter on modules, packages, and how Python resolves imports.',
    link: { href: PY_MODULES_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: File Handling', titleClass: 'card-title-amber', subtitle: 'Day 7 Preview',
    description: 'Tomorrow — reading and writing files, the with statement, file modes, and working with JSON.',
    link: { href: '/agentic-day-7', label: 'Go to Day 7 →' },
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

export default function AgenticDay06() {
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
          <Link to="/agentic-day-5" className="day001-nav-btn day001-nav-prev">← Day 5</Link>
          <p className="day001-datetime">Agentic AI Day 6 · 2 Sep 2026</p>
          <Link to="/agentic-day-7" className="day001-nav-btn day001-nav-next">Day 7 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Modules</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 6 <span aria-hidden="true">📦</span></h1>
              <p className="day001-day-theme">MODULES &amp; PACKAGES</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '4%' }} /></div>

        <p className="day001-summary">
          Organizing code beyond a single file. <strong>import</strong> pulls in code from another file or
          library — either the whole module (<code>import math</code>) or just one piece (
          <code>from random import randint</code>). Any <code>.py</code> file is already a{' '}
          <strong>module</strong> the moment something else imports it — no special declaration needed. A{' '}
          <strong>package</strong> groups related modules into one importable folder, which is how real
          projects stay organized as they grow. Python ships with a huge{' '}
          <strong>standard library</strong> (<code>math</code>, <code>random</code>, <code>os</code>,{' '}
          <code>datetime</code>, <code>json</code>) that needs no installation at all, and{' '}
          <strong>pip</strong> handles everything outside of it — third-party packages like{' '}
          <code>requests</code> or <code>langchain</code>, tracked in a <code>requirements.txt</code> so
          anyone can rebuild the same environment.
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

        <CardSection icon="📥" title="IMPORTS &amp; YOUR OWN MODULES" cards={IMPORT_BASICS} columns={2} />
        <CardSection icon="📦" title="PACKAGES, STDLIB &amp; PIP" cards={PACKAGES_LIBS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day6</span><span>#Modules</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
