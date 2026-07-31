import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SETUP_CHECKLIST = [
  {
    title: 'Node.js & npm',
    text: 'installed the Node.js LTS runtime and npm package manager — the base for every JS/TS project on the roadmap',
  },
  {
    title: 'Git & GitHub',
    text: 'installed Git, set my name/email, and created a GitHub account to version and back up all 1614 days of code',
  },
  {
    title: 'VS Code',
    text: 'installed VS Code with Prettier, ESLint, and GitLens extensions — my editor for the whole journey',
  },
  {
    title: 'Chrome + DevTools',
    text: 'set Chrome as the dev browser and opened DevTools (F12) — Console, Elements, Network, and the debugger',
  },
  {
    title: 'Terminal',
    text: 'configured the terminal (zsh) so I can run node, npm, and git commands comfortably from day one',
  },
  {
    title: 'Project folder',
    text: 'created a clean ~/dev workspace with one folder per phase — a home for every project I build',
  },
  {
    title: 'Study routine',
    text: 'locked the routine: wake 4:00 AM, study 5:00–8:00 AM IST (UTC+5:30, 3 hrs/day), every single day',
  },
  {
    title: 'The roadmap',
    text: 'reviewed the full 53-month (1,614-day) plan — Phase 1: Python Stack starts with 153 days of Agentic AI (LangChain, LangGraph, MCP), then continues with core Python and FastAPI through end of 2027. Then TypeScript Stack (2028), Java Stack (2029), and DevOps Stack (2030)',
  },
  {
    title: 'Ready for Phase 1 · Python Stack',
    text: 'Day 1 (1 Aug 2026) starts straight into Phase 1: Agentic AI using Python — 153 days of LangChain, LangGraph, MCP, and agentic workflows, followed by core Python and FastAPI',
  },
  {
    title: 'Accounts ready',
    text: 'signed in to the course platforms (Udemy, ChaiCode, KodeKloud) so Day 1 starts with zero friction',
  },
  {
    title: 'Deploy target',
    text: 'connected a Netlify account so projects can ship to the web from the very first week',
  },
];

const CORE_TOOLS = [
  {
    icon: '🟢',
    title: 'Node.js & npm',
    titleClass: 'card-title-green',
    subtitle: 'JavaScript Runtime',
    description:
      'Node.js runs JavaScript outside the browser and ships with npm, the package manager. Install the LTS version, then verify both are on your PATH before Day 1.',
    code: 'node -v   # v22.x (LTS)\nnpm -v    # 10.x',
  },
  {
    icon: '🔧',
    title: 'Git',
    titleClass: 'card-title-amber',
    subtitle: 'Version Control',
    description:
      'Git tracks every change and lets you push code to GitHub. Set your identity once so every commit across 1614 days is signed to you.',
    code: 'git --version\ngit config --global user.name "Sumit Rawal"\ngit config --global user.email "you@email.com"',
  },
  {
    icon: '🧩',
    title: 'VS Code',
    titleClass: 'card-title-blue',
    subtitle: 'Editor + Extensions',
    description:
      'Install VS Code and add Prettier (format on save), ESLint (catch mistakes), and GitLens. These three make writing clean code automatic.',
    code: '// Recommended extensions\nesbenp.prettier-vscode\ndbaeumer.vscode-eslint\neamodio.gitlens',
  },
  {
    icon: '🌐',
    title: 'Chrome + DevTools',
    titleClass: 'card-title-cyan',
    subtitle: 'Browser & Debugging',
    description:
      'Chrome’s V8 engine runs your JS, and DevTools (F12) is where you inspect the DOM, watch network calls, and debug. You will live in the Console tab.',
    code: '// Open the Console (F12) and try:\nconsole.log("Day 0 — setup complete ✅");',
  },
];

const ACCOUNTS = [
  {
    icon: '🐙',
    title: 'GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Code Home',
    description:
      'Create a GitHub account and your first repo. Every project, from Phase 1 (Agentic AI & Python) to Phase 4 (DevOps Stack), gets committed and pushed here.',
    link: { href: 'https://github.com', label: 'Create GitHub account →', external: true },
  },
  {
    icon: '🚀',
    title: 'Netlify',
    titleClass: 'card-title-lime',
    subtitle: 'Ship to the Web',
    description:
      'Connect Netlify to GitHub so your apps deploy automatically. This very site (sumit-rawal.online) is hosted the same way.',
    link: { href: 'https://netlify.com', label: 'Set up Netlify →', external: true },
  },
  {
    icon: '🎓',
    title: 'Course Platforms',
    titleClass: 'card-title-pink',
    subtitle: 'Where I Learn',
    description:
      'Sign in to Thunder++ (Rohit Negi), Udemy, ChaiCode, and KodeKloud so every phase opens instantly. No account setup mid-journey.',
    link: { href: '/best-udemy-courses', label: 'See course picks →' },
  },
];

const STUDY_SYSTEM = [
  {
    icon: '⏰',
    title: 'Daily Routine',
    titleClass: 'card-title-amber',
    subtitle: '4 AM Wake · 5–8 AM Study',
    description:
      'Wake at 4:00 AM, then study 5:00–8:00 AM IST (UTC+5:30) — 3 focused hours, 7 days a week. Same slot every day builds the habit that finishes 1614 days.',
    footer: '+ Consistency today, mastery tomorrow, freedom forever.',
  },
  {
    icon: '🗺️',
    title: 'The 53-Month Roadmap',
    titleClass: 'card-title-cyan',
    subtitle: '4 stacks · Python Stack starts 1 Aug 2026',
    description:
      'Phase 1 · Python Stack (518 days): 153 days of Agentic AI (LangChain, LangGraph, MCP, n8n) → core Python → FastAPI. Then TypeScript Stack (2028) → Java Stack (2029) → DevOps Stack (2030). DSA & System Design practiced throughout every stack. 1,614 days total.',
    link: { href: '/roadmap', label: 'Open the full roadmap →' },
  },
  {
    icon: '🤖',
    title: 'Day 1 · Agentic AI using Python',
    titleClass: 'card-title-lime',
    subtitle: 'Phase 1 · Python Stack · 153 days of Agentic AI',
    description:
      'Day 1 (1 Aug 2026) begins with 153 days of Agentic AI — building AI agents with LangChain, LangGraph, MCP, and n8n agentic workflows. Phase 1 (Python Stack) then continues into core Python and FastAPI through 31 Dec 2027.',
    link: { href: '/python', label: 'Start Phase 1 · Python Stack →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day000() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">
            Home
          </Link>
          <p className="day001-datetime">Day 0 · 31 Jul 2026</p>
          <Link to="/python" className="day001-nav-btn day001-nav-next">
            Phase 1 · Agentic AI →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>53 Months</span>
              <span>1614 Days</span>
              <span>Python Stack</span>
              <span>Day 0 · 31 Jul 2026</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 0 <span aria-hidden="true">🛠️</span>
              </h1>
              <p className="day001-day-theme">ENVIRONMENT SETUP · PYTHON STACK BEGINS 1 AUG 2026</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">1614 DAYS · DAY 0</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '0.07%' }} />
        </div>

        <p className="day001-summary">
          <strong>Day 0 · 31 Jul 2026 — environment setup before the 53-month journey begins.</strong>{' '}
          Install <code>Node.js</code>, <code>Git</code>, and <code>VS Code</code>, wire the terminal and
          Chrome DevTools, create{' '}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            GitHub
          </a>{' '}
          and Netlify accounts, and lock the routine (wake 4 AM, study 5:00–8:00 AM IST). No lectures today —
          clear every obstacle so <strong>Day 1 (1 Aug 2026)</strong> starts with zero friction:{' '}
          <strong>153 days of Agentic AI</strong> using Python — LangChain, LangGraph, MCP, n8n. Sharpen the axe before the first swing.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            SETUP CHECKLIST — DONE TODAY
          </h2>
          <ul className="day001-learnt-list">
            {SETUP_CHECKLIST.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🧰" title="CORE TOOLS" cards={CORE_TOOLS} columns={4} />
        <CardSection icon="🔐" title="ACCOUNTS & PLATFORMS" cards={ACCOUNTS} columns={3} />
        <CardSection icon="🎯" title="STUDY SYSTEM" cards={STUDY_SYSTEM} columns={3} />

        <footer className="day001-hashtags">
          <span>#Day0</span>
          <span>#PythonStack</span>
          <span>#AgenticAI</span>
          <span>#53Months</span>
          <span>#1614Days</span>
        </footer>
      </div>
    </div>
  );
}
