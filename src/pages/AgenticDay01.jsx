import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PYTHON_DOWNLOADS = 'https://www.python.org/downloads/';

const LEARNT_TODAY = [
  { title: 'The 300-day Python Stack', text: 'Skills 1–3 of the 2,000-day journey — Python (Days 1–100) → FastAPI (Days 101–200) → Agentic AI (Days 201–300), 100 days each. After this comes the JS/TS Stack (Skills 4–8), then Databases (Skill 9), Express JS (Skill 10), Java, DevOps & Cloud, and Capstone' },
  { title: 'AI vs ML vs DL vs Gen AI', text: 'each one builds on the last — AI is the umbrella, ML learns from data, DL uses neural networks, Gen AI creates new content' },
  { title: 'Why Python for AI', text: 'simple syntax + a huge ecosystem (NumPy, Pandas, TensorFlow, LangChain) made it the default language for AI work' },
  { title: 'Toolchain setup', text: 'installed Python, ticked "Add to PATH" during install, and picked an editor to write code in' },
  { title: 'python --version', text: 'the first command every Python dev runs, to confirm the interpreter is actually installed and on PATH' },
  { title: 'The interpreter', text: 'Python reads and runs code line by line — no separate compile step before you can run a file' },
  { title: 'print()', text: 'the smallest possible Python program — and the first thing almost every course starts with' },
  { title: "What's ahead (100 days)", text: 'Python basics first, then ML/DL concepts, then Generative AI, RAG, and Agentic AI with LangChain, LangGraph & MCP — all within this 100-day Agentic AI skill block' },
];

const SETUP = [
  {
    icon: '🐍', title: 'Install Python', titleClass: 'card-title-cyan', subtitle: 'Get The Toolchain Ready',
    description:
      'Download the latest Python 3.x from python.org, run the installer, and — the step everyone forgets — tick "Add Python to PATH" before clicking Install. That one checkbox is what lets you run python from any terminal.',
    code: '# verify the install\npython --version\n# or, on some systems\npy --version',
  },
  {
    icon: '🧰', title: 'Pick an Editor', titleClass: 'card-title-purple', subtitle: 'VS Code or PyCharm',
    description:
      'Either works well for this course. VS Code is light and general-purpose; PyCharm has more built-in Python tooling out of the box. Pick one and stick with it — the editor matters far less than actually writing code every day.',
  },
];

const BIG_PICTURE = [
  {
    icon: '🧠', title: 'AI → ML → DL → Gen AI', titleClass: 'card-title-cyan', subtitle: 'One Builds On The Next',
    description:
      'AI is the umbrella term for machines doing tasks that normally need human intelligence. ML is a subset — systems that learn patterns from data instead of being explicitly programmed. DL is a subset of ML using neural networks for complex data (images, language). Gen AI sits on top of DL, generating brand-new content instead of just predicting a label.',
  },
  {
    icon: '🤖', title: 'Agentic AI', titleClass: 'card-title-purple', subtitle: 'AI That Takes Action',
    description:
      'Generative AI answers a prompt and stops there. Agentic AI goes further — it can plan a sequence of steps, call tools, and take actions toward a goal with little to no hand-holding, instead of just producing one static response.',
  },
  {
    icon: '👋', title: 'Hello, Python', titleClass: 'card-title-amber', subtitle: 'Your First Line',
    description:
      'Every course starts here. One line, no boilerplate, no semicolons — just print() and a string.',
    code: 'print("Hello, Agentic AI!")',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Course Introduction', titleClass: 'card-title-cyan', subtitle: 'PY Module 1',
    description: 'The full course overview on the site — roadmap, AI vs ML vs DL, tools & setup, and what the 100 days of Agentic AI ahead look like.',
    link: { href: '/python/learn/course-introduction', label: 'Open PY Module 1 →' },
  },
  {
    icon: '⬇️', title: 'Download Python', titleClass: 'card-title-purple', subtitle: 'Official Installer',
    description: 'Grab the latest Python 3.x release for your OS directly from the official site.',
    link: { href: PYTHON_DOWNLOADS, label: 'python.org/downloads →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Python Basics', titleClass: 'card-title-amber', subtitle: 'Day 2 Preview',
    description: 'Tomorrow — Python syntax, variables, the core data types, and the operators you reach for on day one of any script.',
    link: { href: '/agentic-day-2', label: 'Go to Day 2 →' },
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

export default function AgenticDay01() {
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
          <Link to="/day-000" className="day001-nav-btn day001-nav-prev">← Day 0</Link>
          <p className="day001-datetime">Agentic AI Day 1 · 22 Aug 2026</p>
          <Link to="/agentic-day-2" className="day001-nav-btn day001-nav-next">Day 2 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Python Stack</span><span>Skill 3</span><span>Day 1</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 1 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">COURSE INTRODUCTION — GEN AI &amp; AGENTIC AI WITH PYTHON</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PYTHON STACK</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '1%' }} /></div>

        <p className="day001-summary">
          Day 1 of 100 — the start of <strong>Skill 3 · Agentic AI</strong>, the final skill of the{' '}
          <strong>300-day Python Stack</strong> (Skills 1–3 of the 2,000-day journey):{' '}
          <strong>Python (Days 1–100) → FastAPI (Days 101–200) → Agentic AI (Days 201–300)</strong>.
          Today is pure orientation: what <strong>Generative AI</strong>{' '}
          and <strong>Agentic AI</strong> actually mean, how they sit on top of <strong>AI → ML → DL</strong>,
          why <strong>Python</strong> is the language for this skill, and getting the toolchain (Python +
          editor) installed and verified with <code>python --version</code>. No frameworks yet —
          just <code>print("Hello, Agentic AI!")</code> and a clear picture of where the next 100 days are
          headed: Python fundamentals, then ML/DL basics, then Generative AI, RAG, and finally LangChain,
          LangGraph, and MCP-based agents. After this 300-day Python Stack, the journey continues with the
          500-day JS/TS Stack (Skills 4–8), then Databases (Skill 9), Express JS (Skill 10), Java, DevOps &amp; Cloud, and Capstone.
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

        <CardSection icon="🧰" title="SETTING UP" cards={SETUP} columns={2} />
        <CardSection icon="🧠" title="THE BIG PICTURE" cards={BIG_PICTURE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#GenAI</span><span>#Python</span><span>#Day1</span><span>#PhaseOne</span>
        </footer>
      </div>
    </div>
  );
}
