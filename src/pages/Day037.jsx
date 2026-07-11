import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day18';
const DOCS_URL = 'https://jestjs.io/docs/getting-started';

const LEARNT_TODAY = [
  {
    title: 'Why test',
    text: 'confidence to change code without breaking it',
  },
  {
    title: 'Unit vs integration',
    text: 'a single function vs a whole route end-to-end',
  },
  {
    title: 'Jest',
    text: 'the test runner, assertions, and mocks in one',
  },
  {
    title: 'describe / it / expect',
    text: 'group tests, name cases, assert outcomes',
  },
  {
    title: 'Supertest',
    text: 'fire real HTTP requests at the Express app',
  },
  {
    title: 'Test database',
    text: 'in-memory Mongo or a separate DB — never production',
  },
  {
    title: 'Arrange-Act-Assert',
    text: 'set up, run the thing, check the result',
  },
  {
    title: 'Mocks',
    text: 'fake external services so tests stay fast and isolated',
  },
  {
    title: 'Coverage',
    text: 'see which lines your tests never touch',
  },
  {
    title: 'CI',
    text: 'run the whole suite automatically on every push',
  },
];

const BASICS = [
  {
    icon: '🎯',
    title: 'Why & Levels',
    titleClass: 'card-title-cyan',
    subtitle: 'unit → integration',
    description: 'Unit tests check a function; integration tests check a route.',
    code: '// unit: does formatPrice(9.5) return "$9.50"?\n// integration: does GET /products return 200 + a list?',
  },
  {
    icon: '🃏',
    title: 'Jest',
    titleClass: 'card-title-green',
    subtitle: 'the runner',
    description: 'Runs tests, gives assertions and mocks out of the box.',
    code: '// package.json\n"scripts": { "test": "jest" }\n// files: *.test.js',
  },
  {
    icon: '🧱',
    title: 'describe / it / expect',
    titleClass: 'card-title-amber',
    subtitle: 'structure',
    description: 'Group related cases, name each one, assert the outcome.',
    code: 'describe("sum", () => {\n  it("adds two numbers", () => {\n    expect(sum(2, 3)).toBe(5);\n  });\n});',
  },
];

const API_TESTS = [
  {
    icon: '📮',
    title: 'Supertest',
    titleClass: 'card-title-cyan',
    subtitle: 'HTTP in tests',
    description: 'Send requests to the app without starting a real server.',
    code: 'import request from "supertest";\nconst res = await request(app).get("/products");\nexpect(res.status).toBe(200);',
  },
  {
    icon: '🗃️',
    title: 'Test Database',
    titleClass: 'card-title-green',
    subtitle: 'isolated data',
    description: 'Spin up an in-memory Mongo; reset it between tests.',
    code: 'const mongod = await MongoMemoryServer.create();\nafterEach(() => Product.deleteMany({}));',
  },
  {
    icon: '🎭',
    title: 'Mocks',
    titleClass: 'card-title-amber',
    subtitle: 'fake the outside',
    description: 'Replace email/payment/HTTP calls with fakes.',
    code: 'jest.mock("../services/email");\nsendEmail.mockResolvedValue(true);',
  },
  {
    icon: '📊',
    title: 'Coverage & CI',
    titleClass: 'card-title-pink',
    subtitle: 'measure + automate',
    description: 'Track coverage and run the suite on every push.',
    code: 'jest --coverage\n# GitHub Actions: run `npm test` on push',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day18',
    description: 'Jest + Supertest suites, an in-memory test DB, mocks, and coverage.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Jest Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Getting started with Jest — matchers, setup, and mocking.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'API Integration Testing',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Node.js API Integration Testing — the Ultimate Guide by Alex Rusin — for Day 37.',
    link: {
      href: 'https://www.youtube.com/watch?v=LEYuxsGIeGo',
      label: 'Watch on YouTube →',
      external: true,
    },
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

export default function Day037() {
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
          <Link to="/day-036" className="day001-nav-btn day001-nav-home">
            ← Day 36
          </Link>
          <p className="day001-datetime">Thunder Day 37 · 10 Aug 2026</p>
          <Link to="/day-038" className="day001-nav-btn day001-nav-next">
            Day 38 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Testing</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 37 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">TESTING APIS</p>
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
              <p className="day001-profile-role">NODE · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '37%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-seven — tests are what let me change code without fear. I split them into{' '}
          <strong>unit</strong> (one function) and <strong>integration</strong> (a whole route),
          wrote them with <strong>Jest</strong> (<code>describe</code>/<code>it</code>/
          <code>expect</code>), and hit real endpoints using <strong>Supertest</strong> against an{' '}
          <strong>in-memory test database</strong>. Add <strong>mocks</strong> for external
          services, <strong>coverage</strong> to find gaps, and <strong>CI</strong> to run it all on
          every push. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day18 on GitHub
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
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

        <CardSection icon="🧪" title="TESTING BASICS" cards={BASICS} columns={3} />
        <CardSection icon="📮" title="API TESTS" cards={API_TESTS} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 18" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Testing</span>
          <span>#Jest</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
