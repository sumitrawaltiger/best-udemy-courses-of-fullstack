import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VITEST = 'https://vitest.dev/guide/';
const RTL = 'https://testing-library.com/docs/react-testing-library/intro/';

const LEARNT_TODAY = [
  { title: 'Same TS', text: 'tests use the same tsconfig paths and types as app code' },
  { title: 'Vitest types', text: 'expect, describe, test are typed — broken asserts show up early' },
  { title: 'Type-only tests', text: 'expectTypeOf / assertType catch helper regressions without runtime' },
  { title: 'Mock typing', text: 'vi.fn typed with Mock or MockedFunction beats any spies' },
  { title: 'Fixtures', text: 'build typed factories instead of loose JSON blobs' },
  { title: 'CI gate', text: 'tsc --noEmit and vitest both run before merge' },
  { title: 'What’s next', text: 'tooling + migration milestone wraps the arc' },
];

const CORE = [
  {
    icon: '🧪',
    title: 'Typed Tests',
    titleClass: 'card-title-cyan',
    subtitle: 'Vitest',
    description: 'Import from vitest. Keep helpers shared with app types.',
    code: 'import { describe, it, expect } from \'vitest\';\nimport { add } from \'@/lib/add\';\n\nit(\'adds\', () => {\n  expect(add(2, 3)).toBe(5);\n});',
  },
  {
    icon: '🧲',
    title: 'expectTypeOf',
    titleClass: 'card-title-purple',
    subtitle: 'Types',
    description: 'Assert types in tests so refactors cannot silently widen APIs.',
    code: 'import { expectTypeOf } from \'vitest\';\nexpectTypeOf(add).returns.toEqualTypeOf<number>();',
  },
  {
    icon: '🎭',
    title: 'Typed Mocks',
    titleClass: 'card-title-amber',
    subtitle: 'Spies',
    description: 'Mock functions with explicit signatures so call args stay checked.',
    code: 'const fetchUser = vi.fn<\n  (id: string) => Promise<User>\n>();',
  },
];

const PRACTICE = [
  {
    icon: '🧪',
    title: 'Util Spec',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Write a Vitest file for a pure TS util. Include one expectTypeOf check.',
    code: 'it("types", () => {\n  expectTypeOf(parse).parameter(0).toBeString();\n});',
  },
  {
    icon: '🔍',
    title: 'Factory',
    titleClass: 'card-title-purple',
    subtitle: 'Fixtures',
    description: 'makeUser(overrides?: Partial<User>): User with defaults — use in 2 tests.',
    code: 'function makeUser(p: Partial<User> = {}): User {\n  return { id: "1", email: "a@b.c", ...p };\n}',
  },
  {
    icon: '📝',
    title: 'CI Snippet',
    titleClass: 'card-title-amber',
    subtitle: 'Ops',
    description: 'Document the two commands: tsc --noEmit and vitest run.',
    code: 'tsc --noEmit\nvitest run',
  },
  {
    icon: '🔜',
    title: 'Next: Milestone',
    titleClass: 'card-title-lime',
    subtitle: 'Day 220',
    description: 'Tomorrow — tooling and migration milestone.',
    link: { href: '/day-220', label: 'Go to Day 220 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'Vitest Guide',
    titleClass: 'card-title-cyan',
    subtitle: 'Docs',
    description: 'Getting started with Vitest.',
    link: { href: VITEST, label: 'Open Vitest →', external: true },
  },
  {
    icon: '⚛️',
    title: 'Testing Library',
    titleClass: 'card-title-purple',
    subtitle: 'UI',
    description: 'When you test React components.',
    link: { href: RTL, label: 'Open RTL →', external: true },
  },
  {
    icon: '🔒',
    title: 'Day 218',
    titleClass: 'card-title-amber',
    subtitle: 'Prior',
    description: 'Migration that tests must protect.',
    link: { href: '/day-218', label: 'Open Day 218 →' },
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

export default function Day219() {
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
          <Link to="/day-218" className="day001-nav-btn day001-nav-prev">← Day 218</Link>
          <p className="day001-datetime">TypeScript Day 219 · 7 Aug 2027</p>
          <Link to="/day-220" className="day001-nav-btn day001-nav-next">Day 220 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Testing</span><span>Day 219</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 219 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">TESTING TYPESCRIPT (VITEST)</p>
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
          Day 219 locks quality in. Use <strong>Vitest</strong> with shared types, <strong>expectTypeOf</strong> for APIs, and typed mocks instead of any.
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

        <CardSection icon="🧪" title="1 · TYPED TESTS" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · PRACTICE" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Day219</span><span>#Vitest</span><span>#Testing</span>
        </footer>
      </div>
    </div>
  );
}
