import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TESTING = 'https://docs.nestjs.com/fundamentals/testing';
const E2E = 'https://docs.nestjs.com/fundamentals/testing#end-to-end-testing';
const JEST = 'https://jestjs.io/docs/getting-started';

const LEARNT_TODAY = [
  { title: 'Unit vs e2e', text: 'unit tests one provider in isolation; e2e boots the app and hits HTTP' },
  { title: 'Test module', text: 'Test.createTestingModule({…}).compile() builds a DI graph for tests' },
  { title: 'Mock providers', text: 'override PrismaService or repos with { provide, useValue } fakes' },
  { title: 'get / resolve', text: 'module.get(TasksService) pulls the instance under test' },
  { title: 'e2e + Supertest', text: 'NestFactory or testing module → request(app.getHttpServer())' },
  { title: 'Happy + sad paths', text: 'assert 201 create and 400/401 failures — lock the contract' },
  { title: 'Close the app', text: 'await app.close() in afterAll so Jest exits cleanly' },
  { title: 'Same habits as Day 138', text: 'export a testable app; isolate data; run in CI' },
  { title: 'Coverage where it matters', text: 'services and guards first — not every decorator line' },
];

const CORE = [
  {
    icon: '🧪', title: 'Unit Test Service', titleClass: 'card-title-cyan', subtitle: 'TestingModule',
    description: 'Compile a module with the real service and a fake Prisma. Assert return values.',
    code: 'const module = await Test.createTestingModule({\n  providers: [\n    TasksService,\n    { provide: PrismaService, useValue: mockPrisma },\n  ],\n}).compile();\nconst service = module.get(TasksService);',
  },
  {
    icon: '🎭', title: 'Mock Prisma', titleClass: 'card-title-purple', subtitle: 'useValue',
    description: 'Stub findMany / create so unit tests never touch a real database.',
    code: 'const mockPrisma = {\n  task: {\n    findMany: jest.fn().mockResolvedValue([]),\n    create: jest.fn(),\n  },\n};',
  },
  {
    icon: '🚀', title: 'e2E Sketch', titleClass: 'card-title-amber', subtitle: 'Supertest',
    description: 'Create a full Nest app from AppModule (or a test module), then HTTP-assert.',
    code: 'const module = await Test.createTestingModule({ imports: [AppModule] }).compile();\nconst app = module.createNestApplication();\nawait app.init();\nawait request(app.getHttpServer()).get("/tasks").expect(200);',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Authed e2e', titleClass: 'card-title-cyan', subtitle: 'Bearer',
    description: 'Obtain a token (or override the guard) and .set("Authorization", `Bearer ${token}`).',
    code: 'await request(app.getHttpServer())\n  .post("/tasks")\n  .set("Authorization", `Bearer ${token}`)\n  .send({ title: "test" })\n  .expect(201);',
  },
  {
    icon: '🧹', title: 'Cleanup', titleClass: 'card-title-purple', subtitle: 'afterAll',
    description: 'Close the Nest app and disconnect Prisma so watch mode and CI do not hang.',
    code: 'afterAll(async () => {\n  await app.close();\n});',
  },
  {
    icon: '📊', title: 'CI Script', titleClass: 'card-title-amber', subtitle: 'npm test',
    description: 'Keep test and test:e2e scripts. Fail the pipeline when contracts break.',
    code: '"test": "jest",\n"test:e2e": "jest --config ./test/jest-e2e.json"',
  },
  {
    icon: '🔜', title: 'Next: Ship Nest', titleClass: 'card-title-lime', subtitle: 'Day 155 Preview',
    description: 'Tomorrow: Nest production checklist — config, health, logging, and deploy notes.',
    link: { href: '/day-155', label: 'Go to Day 155 →' },
  },
];

const RESOURCES = [
  {
    icon: '🧪', title: 'Nest Testing', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'TestingModule, overrides, and unit patterns.',
    link: { href: TESTING, label: 'Read Nest testing docs →', external: true },
  },
  {
    icon: '🚀', title: 'e2e Testing', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'End-to-end setup with a real HTTP server.',
    link: { href: E2E, label: 'Read e2e section →', external: true },
  },
  {
    icon: '🃏', title: 'Jest', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'The default test runner Nest scaffolds with.',
    link: { href: JEST, label: 'Read Jest docs →', external: true },
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

export default function Day154() {
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
          <Link to="/day-153" className="day001-nav-btn day001-nav-prev">← Day 153</Link>
          <p className="day001-datetime">Nest Day 154</p>
          <Link to="/day-155" className="day001-nav-btn day001-nav-next">Day 155 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Testing</span><span>Jest</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 154 <span aria-hidden="true">🧪</span></h1>
              <p className="day001-day-theme">NEST UNIT &amp; E2E TESTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">NEST · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '43%' }} /></div>

        <p className="day001-summary">
          Day 154 locks Nest contracts. <strong>TestingModule</strong> for unit tests with mocks,{' '}
          <strong>Supertest e2e</strong> for HTTP, and clean <strong>app.close()</strong> so CI stays green.
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

        <CardSection icon="🧪" title="1 · UNIT & E2E" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · AUTH & CI" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Jest</span><span>#Testing</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
