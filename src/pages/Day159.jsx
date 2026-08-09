import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SWAGGER = 'https://docs.nestjs.com/openapi/introduction';
const DECORATORS = 'https://docs.nestjs.com/openapi/decorators';
const CLI = 'https://docs.nestjs.com/openapi/cli-plugin';

const LEARNT_TODAY = [
  { title: 'OpenAPI in Nest', text: '@nestjs/swagger generates docs from decorators on controllers and DTOs' },
  { title: 'SwaggerModule', text: 'mount Swagger UI at /docs (or /api) in development and staging' },
  { title: 'ApiTags / ApiOperation', text: 'group endpoints and describe what each does' },
  { title: 'ApiProperty on DTOs', text: 'document fields, examples, and required flags for the schema' },
  { title: 'Bearer auth', text: 'DocumentBearerAuth so “Authorize” in Swagger sends JWT' },
  { title: 'CLI plugin', text: 'optional plugin infers ApiProperty from TypeScript types — less boilerplate' },
  { title: 'Same idea as Day 139', text: 'contract-first habit — docs that match the running API' },
  { title: 'Export the JSON', text: 'serve /docs-json for Postman or client generators' },
  { title: 'Prod caution', text: 'lock down or disable Swagger UI in production if it exposes internals' },
];

const CORE = [
  {
    icon: '📘', title: 'Setup Swagger', titleClass: 'card-title-cyan', subtitle: 'main.ts',
    description: 'Build a DocumentBuilder, create the document, and mount Swagger UI.',
    code: 'const config = new DocumentBuilder()\n  .setTitle("Tasks API")\n  .setVersion("1.0")\n  .addBearerAuth()\n  .build();\nconst document = SwaggerModule.createDocument(app, config);\nSwaggerModule.setup("docs", app, document);',
  },
  {
    icon: '🏷️', title: 'Controller Decorators', titleClass: 'card-title-purple', subtitle: 'Describe Routes',
    description: 'Tag controllers and annotate operations and response types.',
    code: '@ApiTags("tasks")\n@ApiBearerAuth()\n@Controller("tasks")\nexport class TasksController {\n  @ApiOperation({ summary: "List tasks" })\n  @Get() findAll() { … }\n}',
  },
  {
    icon: '📋', title: 'DTO ApiProperty', titleClass: 'card-title-amber', subtitle: 'Schema Fields',
    description: 'Document each field so Swagger shows types and examples.',
    code: 'export class CreateTaskDto {\n  @ApiProperty({ example: "Ship day 159" })\n  @IsString()\n  title: string;\n}',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Try It With JWT', titleClass: 'card-title-cyan', subtitle: 'Authorize',
    description: 'Click Authorize in Swagger UI, paste Bearer token, then call protected routes.',
    code: '// Authorize → Bearer <token>\n'// Execute POST /tasks',
  },
  {
    icon: '🧰', title: 'CLI Plugin', titleClass: 'card-title-purple', subtitle: 'Less Boilerplate',
    description: 'Nest Swagger plugin can infer properties from TS — great once DTOs are stable.',
    code: '// nest-cli.json plugins: ["@nestjs/swagger"]',
  },
  {
    icon: '📦', title: 'Client Generation', titleClass: 'card-title-amber', subtitle: 'Optional',
    description: 'Point openapi-generator or similar at /docs-json for typed clients.',
    code: '// openapi.json → TS fetch client',
  },
  {
    icon: '🔜', title: 'Next: Milestone', titleClass: 'card-title-lime', subtitle: 'Day 160 Preview',
    description: 'Tomorrow: wrap the Year-1 Nest/Express backend arc and point to what comes next.',
    link: { href: '/day-160', label: 'Go to Day 160 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'OpenAPI Intro', titleClass: 'card-title-cyan', subtitle: 'Nest Docs',
    description: 'Install, DocumentBuilder, and Swagger UI setup.',
    link: { href: SWAGGER, label: 'Read OpenAPI intro →', external: true },
  },
  {
    icon: '🏷️', title: 'Decorators', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'ApiTags, ApiProperty, responses, and more.',
    link: { href: DECORATORS, label: 'Read decorators docs →', external: true },
  },
  {
    icon: '🛠️', title: 'CLI Plugin', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Infer OpenAPI metadata from TypeScript.',
    link: { href: CLI, label: 'Read CLI plugin docs →', external: true },
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

export default function Day159() {
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
          <Link to="/day-158" className="day001-nav-btn day001-nav-prev">← Day 158</Link>
          <p className="day001-datetime">Nest Day 159 · 12 Nov 2027</p>
          <Link to="/day-160" className="day001-nav-btn day001-nav-next">Day 160 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>OpenAPI</span><span>Swagger</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 159 <span aria-hidden="true">📘</span></h1>
              <p className="day001-day-theme">NEST OPENAPI / SWAGGER</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '44%' }} /></div>

        <p className="day001-summary">
          Day 159 documents the Nest API. <strong>SwaggerModule</strong>,{' '}
          <strong>ApiProperty</strong> on DTOs, <strong>Bearer auth</strong> in the UI — living OpenAPI
          that matches your running routes.
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

        <CardSection icon="📘" title="1 · SWAGGER SETUP" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · AUTH & GENERATORS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#OpenAPI</span><span>#Swagger</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
