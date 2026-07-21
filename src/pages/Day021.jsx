import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const VITEST_DOCS = 'https://vitest.dev/';
const RTL_DOCS = 'https://testing-library.com/docs/react-testing-library/intro/';

const LEARNT_TODAY = [
  { title: 'Vitest', text: 'a fast, Vite-native test runner with a Jest-compatible API — describe, it, expect' },
  { title: 'React Testing Library', text: 'render components and test them the way a user actually uses them' },
  { title: 'Query by role', text: 'getByRole / getByLabelText find elements accessibly — not by brittle CSS classes' },
  { title: 'user-event', text: 'simulate real interactions — click, type, tab — closer to a real user than fireEvent' },
  { title: 'Assert behaviour', text: 'test what the user sees and does, not internal state or implementation details' },
  { title: 'findBy for async', text: 'await findByText waits for elements that appear after a fetch or state update' },
  { title: 'Mock the network', text: 'MSW intercepts requests so tests are fast and deterministic' },
  { title: 'Confidence to refactor', text: 'behaviour tests keep passing when you change internals — safe to improve code' },
];

const TOOLS = [
  {
    icon: '⚡', title: 'Vitest', titleClass: 'card-title-cyan', subtitle: 'The Runner',
    description:
      'Vitest runs on your existing Vite config — instant, watch-mode, TypeScript out of the box. The API is Jest-compatible, so describe / it / expect all feel familiar.',
    code: 'import { describe, it, expect } from "vitest";\n\ndescribe("add", () => {\n  it("sums two numbers", () => {\n    expect(add(2, 3)).toBe(5);\n  });\n});',
  },
  {
    icon: '🧑‍💻', title: 'Render & Query', titleClass: 'card-title-purple', subtitle: 'Like A User',
    description:
      'React Testing Library renders a component and queries it by accessible role or label — the way a person (or screen reader) finds things — instead of by fragile classes.',
    code: 'render(<LoginForm />);\nconst email = screen.getByLabelText("Email");\nconst button = screen.getByRole("button", { name: "Sign in" });',
  },
];

const PRACTICE = [
  {
    icon: '🖱️', title: 'Simulate The User', titleClass: 'card-title-cyan', subtitle: 'user-event',
    description:
      'userEvent types, clicks and tabs like a real person, firing the same event sequence the browser would. Prefer it over fireEvent for realistic tests.',
    code: 'const user = userEvent.setup();\nawait user.type(email, "a@b.com");\nawait user.click(button);',
  },
  {
    icon: '⏳', title: 'Async & Assertions', titleClass: 'card-title-purple', subtitle: 'findBy + expect',
    description:
      'After an action, await findByText to wait for the UI to update, then assert what the user sees. Test outcomes, not implementation.',
    code: 'await user.click(button);\nexpect(await screen.findByText("Welcome!")).toBeInTheDocument();',
  },
  {
    icon: '🎭', title: 'Mock The Network', titleClass: 'card-title-amber', subtitle: 'MSW',
    description:
      'Mock Service Worker intercepts fetch/XHR at the network layer, so components run their real code against fake responses — fast, deterministic, no real API.',
    code: '// handlers.ts\nhttp.get("/api/user", () => HttpResponse.json({ name: "Sumit" }))',
  },
];

const RESOURCES = [
  {
    icon: '⚡', title: 'Vitest', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description:
      'Config, watch mode, coverage, mocking and snapshot testing — the fast, Vite-native runner for the whole Year-1 stack.',
    link: { href: VITEST_DOCS, label: 'Open Vitest →', external: true },
  },
  {
    icon: '🧩', title: 'Testing Library', titleClass: 'card-title-purple', subtitle: 'React',
    description:
      'The guiding principle — "the more your tests resemble the way your software is used, the more confidence they give you" — plus queries and best practices.',
    link: { href: RTL_DOCS, label: 'Open Testing Library →', external: true },
  },
  {
    icon: '🔜', title: 'Year 1 Continues', titleClass: 'card-title-amber', subtitle: 'Day 22 Preview',
    description:
      'The Year-1 TypeScript stack continues — React Native, Express JS and DSA / System Design in TypeScript are next. The journal keeps building day by day.',
    link: { href: '/day-022', label: 'Go to Day 22 →' },
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

export default function Day021() {
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
          <Link to="/day-020" className="day001-nav-btn day001-nav-prev">← Day 20</Link>
          <p className="day001-datetime">TypeScript Day 21</p>
          <Link to="/day-022" className="day001-nav-btn day001-nav-next">Day 22 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Testing</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 21 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">TESTING — VITEST + TESTING LIBRARY</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '21%' }} /></div>

        <p className="day001-summary">
          Ship with confidence. <strong>Vitest</strong> is a fast, Vite-native runner with a Jest-compatible API
          (<code>describe</code>/<code>it</code>/<code>expect</code>) and TypeScript built in.{' '}
          <strong>React Testing Library</strong> renders components and queries them the way a <em>user</em> does —{' '}
          <code>getByRole</code>, <code>getByLabelText</code> — not by brittle classes. Drive interactions with{' '}
          <strong>user-event</strong> (real click/type), wait for async UI with <code>findBy</code>, and assert{' '}
          <strong>behaviour, not implementation</strong>. Mock the network with <strong>MSW</strong> for fast,
          deterministic tests. The payoff: refactor internals freely and the tests still pass.{' '}
          <em>Year 1 continues — React Native, Express &amp; more.</em>
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

        <CardSection icon="⚡" title="THE TOOLS" cards={TOOLS} columns={2} />
        <CardSection icon="🖱️" title="WRITING TESTS" cards={PRACTICE} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#Vitest</span><span>#Testing</span>
        </footer>
      </div>
    </div>
  );
}
