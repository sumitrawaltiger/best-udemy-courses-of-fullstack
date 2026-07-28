import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const ESLINT = 'https://typescript-eslint.io/';
const STRICT = 'https://typescript-eslint.io/users/configs/#strict';

const LEARNT_TODAY = [
  { title: 'typescript-eslint', text: 'ESLint understands TypeScript syntax and types — not just plain JS rules' },
  { title: 'parserServices', text: 'type-aware rules need a linked tsconfig so lint can see types' },
  { title: 'Recommended sets', text: 'start from recommended or strict; add stylistic later' },
  { title: 'no-explicit-any', text: 'block new any; allowlist legacy files during migration' },
  { title: 'consistent-type-imports', text: 'prefer import type for types-only imports — cleaner emit' },
  { title: 'CI lint', text: 'eslint . runs with tsc --noEmit before merge' },
  { title: 'What’s next', text: 'monorepos need project references so lint/typecheck stay fast' },
];

const CORE = [
  {
    icon: '🧹',
    title: 'Wire ESLint',
    titleClass: 'card-title-cyan',
    subtitle: 'Setup',
    description: 'Use typescript-eslint parser + plugin with projectService or project references.',
    code: '// eslint.config.js (flat)\nimport tseslint from \'typescript-eslint\';\nexport default tseslint.config(\n  ...tseslint.configs.recommendedTypeChecked,\n);',
  },
  {
    icon: '🚫',
    title: 'Ban any',
    titleClass: 'card-title-purple',
    subtitle: 'Rule',
    description: 'Fail on explicit any in app code. Exceptions need a comment + ticket.',
    code: '\'@typescript-eslint/no-explicit-any\': \'error\'',
  },
  {
    icon: '📦',
    title: 'import type',
    titleClass: 'card-title-amber',
    subtitle: 'Style',
    description: 'Separate type imports so bundlers can drop them easily.',
    code: 'import type { User } from \'@/types\';\nimport { saveUser } from \'@/api\';',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Enable Recommended',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Add typescript-eslint recommendedTypeChecked. Fix the first 10 errors without any.',
    code: 'npx eslint src --max-warnings=0',
  },
  {
    icon: '🔍',
    title: 'any Allowlist',
    titleClass: 'card-title-purple',
    subtitle: 'Ops',
    description: 'List files that still need any. Cap the list — no new entries without review.',
    code: 'legacy/**  # temporary',
  },
  {
    icon: '📝',
    title: 'Lint Script',
    titleClass: 'card-title-amber',
    subtitle: 'CI',
    description: 'Add lint and typecheck scripts; document both in README.',
    code: '"lint": "eslint ."\n"typecheck": "tsc --noEmit"',
  },
  {
    icon: '🔜',
    title: 'Next: Monorepos',
    titleClass: 'card-title-lime',
    subtitle: 'Day 222',
    description: 'Tomorrow — project references and monorepo TypeScript.',
    link: { href: '/day-222', label: 'Go to Day 222 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'typescript-eslint',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Official tooling for linting TypeScript.',
    link: { href: ESLINT, label: 'Open typescript-eslint →', external: true },
  },
  {
    icon: '🔒',
    title: 'Strict Configs',
    titleClass: 'card-title-purple',
    subtitle: 'Configs',
    description: 'Stricter shared configs.',
    link: { href: STRICT, label: 'Open strict configs →', external: true },
  },
  {
    icon: '🏁',
    title: 'Day 220',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Tooling milestone before this quality bridge.',
    link: { href: '/day-220', label: 'Open Day 220 →' },
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

export default function Day221() {
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
          <Link to="/day-220" className="day001-nav-btn day001-nav-prev">← Day 220</Link>
          <p className="day001-datetime">TypeScript Day 221 · 9 Aug 2027</p>
          <Link to="/day-222" className="day001-nav-btn day001-nav-next">Day 222 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Quality</span><span>Day 221</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 221 <span aria-hidden="true">🧹</span></h1>
              <p className="day001-day-theme">typescript-eslint & TYPE-AWARE LINT</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '62%' }} /></div>

        <p className="day001-summary">
          Day 221 puts a lint wall around types. Use <strong>typescript-eslint</strong>, ban new <strong>any</strong>, and prefer <strong>import type</strong>.
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

        <CardSection icon="🧹" title="1 · TYPE-AWARE LINT" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day221</span><span>#ESLint</span><span>#Quality</span>
        </footer>
      </div>
    </div>
  );
}
