import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEST = 'https://docs.nestjs.com/';
const MODULES = 'https://docs.nestjs.com/modules';
const CONTROLLERS = 'https://docs.nestjs.com/controllers';

const LEARNT_TODAY = [
  { title: 'What is NestJS', text: 'a TypeScript-first Node framework with Angular-like structure on top of Express (or Fastify)' },
  { title: 'Why Nest', text: 'modules, DI, and clear folders scale better than a flat Express app as the team grows' },
  { title: 'Module', text: 'groups related controllers and providers — AppModule is the root' },
  { title: 'Controller', text: 'HTTP routes (@Get, @Post) — thin, like Express routers' },
  { title: 'Provider / Service', text: 'business logic injected into controllers — testable and reusable' },
  { title: 'Decorator style', text: '@Controller(), @Injectable(), @Get() — metadata Nest reads at boot' },
  { title: 'CLI', text: 'nest new / nest g resource scaffolds modules quickly' },
  { title: 'Express under the hood', text: 'default adapter is Express — your HTTP knowledge still applies' },
  { title: 'Same Year-1 goals', text: 'auth, validation, DB — Nest organizes them; patterns stay familiar' },
];

const CORE = [
  {
    icon: '🪺', title: 'Hello Nest', titleClass: 'card-title-cyan', subtitle: 'Bootstrap',
    description: 'nest new my-api creates a project. main.ts boots NestFactory and listens on a port.',
    code: '// main.ts\nconst app = await NestFactory.create(AppModule);\nawait app.listen(3000);',
  },
  {
    icon: '📦', title: 'Module', titleClass: 'card-title-purple', subtitle: 'Boundary',
    description: 'Declare controllers and providers in a module. Import other modules when you need their exports.',
    code: '@Module({\n  controllers: [TasksController],\n  providers: [TasksService],\n})\nexport class TasksModule {}',
  },
  {
    icon: '🎮', title: 'Controller + Service', titleClass: 'card-title-amber', subtitle: 'Route → Logic',
    description: 'Controller handles HTTP; service holds logic. Nest injects the service via the constructor.',
    code: '@Controller("tasks")\nexport class TasksController {\n  constructor(private tasks: TasksService) {}\n  @Get() findAll() { return this.tasks.findAll(); }\n}',
  },
];

const PRACTICE = [
  {
    icon: '💉', title: 'Dependency Injection', titleClass: 'card-title-cyan', subtitle: 'Constructor Inject',
    description: 'Mark services @Injectable(). Nest creates one instance (singleton by default) and passes it in.',
    code: '@Injectable()\nexport class TasksService {\n  findAll() { return this.db.tasks.findMany(); }\n}',
  },
  {
    icon: '🛠️', title: 'CLI Generate', titleClass: 'card-title-purple', subtitle: 'nest g',
    description: 'Generate a resource to get module, controller, service, and DTO stubs in one command.',
    code: 'nest g resource tasks\n# REST CRUD scaffold',
  },
  {
    icon: '🔁', title: 'From Express', titleClass: 'card-title-amber', subtitle: 'Mental Map',
    description: 'app.get → @Get, middleware → guards/interceptors, routers → modules. Same HTTP, clearer structure.',
    code: '// Express route file  ≈  Nest controller\n'// helper module       ≈  Nest service',
  },
  {
    icon: '🔜', title: 'Next: Nest Patterns', titleClass: 'card-title-lime', subtitle: 'Day 149 Preview',
    description: 'Tomorrow: DTOs, ValidationPipe, guards for JWT, and exception filters.',
    link: { href: '/day-149', label: 'Go to Day 149 →' },
  },
];

const RESOURCES = [
  {
    icon: '🪺', title: 'Nest Docs', titleClass: 'card-title-cyan', subtitle: 'Official',
    description: 'First principles overview of the Nest platform.',
    link: { href: NEST, label: 'Read Nest docs →', external: true },
  },
  {
    icon: '📦', title: 'Modules', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'How modules encapsulate and share providers.',
    link: { href: MODULES, label: 'Read modules docs →', external: true },
  },
  {
    icon: '🎮', title: 'Controllers', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Routing, params, body, and status codes in Nest.',
    link: { href: CONTROLLERS, label: 'Read controllers docs →', external: true },
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

export default function Day148() {
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
          <Link to="/day-147" className="day001-nav-btn day001-nav-prev">← Day 147</Link>
          <p className="day001-datetime">Express Day 148 · 28 May 2027</p>
          <Link to="/day-149" className="day001-nav-btn day001-nav-next">Day 149 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>Modules</span><span>DI</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 148 <span aria-hidden="true">🪺</span></h1>
              <p className="day001-day-theme">NESTJS FUNDAMENTALS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          Day 148 meets <strong>NestJS</strong>. <strong>Modules</strong> group features,{' '}
          <strong>controllers</strong> own routes, <strong>services</strong> hold logic, and{' '}
          <strong>DI</strong> wires them — Express power with clearer structure.
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

        <CardSection icon="🪺" title="1 · MODULES & ROUTES" cards={CORE} columns={3} />
        <CardSection icon="💉" title="2 · DI & CLI" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#TypeScript</span><span>#Backend</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
