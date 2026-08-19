import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NUMPY_DOCS = 'https://numpy.org/doc/stable/user/absolute_beginners.html';
const PANDAS_DOCS = 'https://pandas.pydata.org/docs/getting_started/index.html';

const LEARNT_TODAY = [
  { title: 'Data science pipeline', text: 'collect → clean → analyze → visualize → model → deploy → monitor' },
  { title: 'NumPy', text: 'fast n-dimensional arrays — the numeric backbone under Pandas and most ML libs' },
  { title: 'ndarray', text: 'homogeneous typed arrays; vectorized ops beat Python for-loops on big numbers' },
  { title: 'Pandas', text: 'DataFrame = labeled table; Series = one column — load CSV, filter, group, join' },
  { title: 'Data cleaning', text: 'drop duplicates, fill/drop nulls, fix types — messy data breaks every model downstream' },
  { title: 'Visualization intro', text: 'Matplotlib/Seaborn turn numbers into charts so patterns show up fast' },
  { title: 'Why this matters for AI', text: 'every Gen AI / ML project still starts with clean tabular or text data prep' },
  { title: 'Practice habit', text: 'load a CSV, describe() it, plot one column — small reps beat watching tutorials' },
];

const CORE = [
  {
    icon: '🧭', title: 'The Pipeline', titleClass: 'card-title-cyan', subtitle: 'End-To-End',
    description:
      'Real projects spend most time collecting and cleaning. Modeling is only one step — and monitoring after deploy keeps it honest.',
    code: 'collect → clean → analyze\n→ visualize → model → deploy',
  },
  {
    icon: '🔢', title: 'NumPy Arrays', titleClass: 'card-title-purple', subtitle: 'Speed',
    description:
      'Create arrays, slice them, and use vectorized math. Broadcasting lets you combine arrays of compatible shapes without manual loops.',
    code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a * 2)      # [2 4 6]\nprint(a + b)      # [11 22 33]\nprint(a.mean())',
  },
  {
    icon: '📊', title: 'Pandas DataFrame', titleClass: 'card-title-amber', subtitle: 'Tables',
    description:
      'Read CSV/Excel, select columns, filter rows, and aggregate. This is how you explore training data before any model.',
    code: 'import pandas as pd\ndf = pd.read_csv("students.csv")\nprint(df.head())\nprint(df.describe())\nprint(df[df["fee"] > 1000])',
  },
];

const PRACTICE = [
  {
    icon: '🧹', title: 'Clean First', titleClass: 'card-title-cyan', subtitle: 'Hygiene',
    description:
      'Check nulls with isna(), drop or fill them, cast dtypes, and remove duplicates before you trust any chart or model.',
    code: 'df = df.drop_duplicates()\ndf["fee"] = df["fee"].fillna(0)\ndf["email"] = df["email"].str.lower()',
  },
  {
    icon: '📈', title: 'Quick Viz', titleClass: 'card-title-purple', subtitle: 'See Patterns',
    description:
      'A histogram or bar chart often reveals outliers and skew that summary stats hide.',
    code: 'import matplotlib.pyplot as plt\ndf["fee"].hist()\nplt.title("Fee distribution")\nplt.show()',
  },
  {
    icon: '🔜', title: 'Next: ML for NLP', titleClass: 'card-title-amber', subtitle: 'Day 13 Preview',
    description: 'Tomorrow — tokenization, stemming, BoW/TF-IDF, and word embeddings for text.',
    link: { href: '/agentic-day-13', label: 'Go to Day 13 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Data Science Intro', titleClass: 'card-title-cyan', subtitle: 'PY Module 12',
    description: 'Full lesson — pipeline, NumPy, Pandas, cleaning, and viz intro.',
    link: { href: '/python/learn/data-science-introduction', label: 'Open PY Module 12 →' },
  },
  {
    icon: '🔢', title: 'NumPy Beginners', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official absolute beginners guide to NumPy arrays.',
    link: { href: NUMPY_DOCS, label: 'Open NumPy guide →', external: true },
  },
  {
    icon: '📊', title: 'Pandas Getting Started', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Official Pandas getting-started tutorials.',
    link: { href: PANDAS_DOCS, label: 'Open Pandas guide →', external: true },
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

export default function AgenticDay12() {
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
          <Link to="/agentic-day-11" className="day001-nav-btn day001-nav-prev">← Day 11</Link>
          <p className="day001-datetime">Agentic AI Day 12 · 1 Sep 2026</p>
          <Link to="/agentic-day-13" className="day001-nav-btn day001-nav-next">Day 13 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Data Science</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 12 <span aria-hidden="true">📊</span></h1>
              <p className="day001-day-theme">DATA SCIENCE INTRODUCTION</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '8%' }} /></div>

        <p className="day001-summary">
          Day 12 opens the data path. Learn the <strong>pipeline</strong>, get fluent with{' '}
          <strong>NumPy</strong> and <strong>Pandas</strong>, and clean data before any ML or Gen AI work.
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

        <CardSection icon="🧭" title="PIPELINE &amp; TOOLS" cards={CORE} columns={3} />
        <CardSection icon="🧹" title="CLEAN &amp; SEE" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day12</span><span>#NumPy</span><span>#Pandas</span>
        </footer>
      </div>
    </div>
  );
}
