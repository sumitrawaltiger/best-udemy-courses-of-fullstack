import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PIPES = 'https://docs.nestjs.com/pipes';
const GUARDS = 'https://docs.nestjs.com/guards';
const FILTERS = 'https://docs.nestjs.com/exception-filters';

const LEARNT_TODAY = [
  { title: 'DTO', text: 'Data Transfer Object — a class that describes the shape of the request body' },
  { title: 'class-validator', text: 'decorators like @IsString() @IsEmail() on DTO fields' },
  { title: 'ValidationPipe', text: 'global pipe that validates bodies and strips unknown fields' },
  { title: 'Guard', text: 'runs before the handler — return true/false for authz (JWT guard)' },
  { title: 'Interceptor', text: 'wrap the response — logging, mapping, caching around the handler' },
  { title: 'Exception filter', text: 'catch errors and shape a consistent JSON error body' },
  { title: 'HttpException', text: 'throw new NotFoundException() / UnauthorizedException() — Nest maps status codes' },
  { title: 'Same ideas as Express', text: 'Zod middleware ≈ ValidationPipe; auth middleware ≈ Guard' },
  { title: 'Global setup', text: 'app.useGlobalPipes(new ValidationPipe({ whitelist: true })) in main.ts' },
];

const CORE = [
  {
    icon: '📋', title: 'DTO + Validators', titleClass: 'card-title-cyan', subtitle: 'Typed Body',
    description: 'Define a class for the body. Decorators declare rules Nest will enforce.',
    code: 'export class CreateTaskDto {\n  @IsString() @MinLength(1)\n  title: string;\n\n  @IsBoolean() @IsOptional()\n  done?: boolean;\n}',
  },
  {
    icon: '✅', title: 'ValidationPipe', titleClass: 'card-title-purple', subtitle: 'Global',
    description: 'whitelist removes undeclared fields; transform coerces types from JSON.',
    code: 'app.useGlobalPipes(new ValidationPipe({\n  whitelist: true,\n  forbidNonWhitelisted: true,\n  transform: true,\n}));',
  },
  {
    icon: '🛡️', title: 'Auth Guard', titleClass: 'card-title-amber', subtitle: 'JWT Gate',
    description: 'A guard reads the Bearer token, verifies it, and attaches user to the request.',
    code: '@Injectable()\nexport class JwtAuthGuard implements CanActivate {\n  canActivate(ctx: ExecutionContext) {\n    const req = ctx.switchToHttp().getRequest();\n    req.user = verify(req.headers.authorization);\n    return !!req.user;\n  }\n}',
  },
];

const PRACTICE = [
  {
    icon: '🏷️', title: 'Use The Guard', titleClass: 'card-title-cyan', subtitle: '@UseGuards',
    description: 'Apply on a controller or method. Public routes simply omit the guard.',
    code: '@UseGuards(JwtAuthGuard)\n@Get("me")\nme(@Req() req) { return req.user; }',
  },
  {
    icon: '🧯', title: 'Exceptions', titleClass: 'card-title-purple', subtitle: 'Clean Status',
    description: 'Throw Nest HTTP exceptions instead of raw Error so clients get consistent JSON.',
    code: 'if (!task) throw new NotFoundException("task not found");\nthrow new UnauthorizedException();',
  },
  {
    icon: '🧹', title: 'Exception Filter', titleClass: 'card-title-amber', subtitle: 'Shape Errors',
    description: 'Optional global filter to add requestId and a stable { statusCode, message } body.',
    code: '// catch everything → JSON\n// include path + timestamp',
  },
  {
    icon: '🔜', title: 'Next: Choose Stack', titleClass: 'card-title-lime', subtitle: 'Day 150 Preview',
    description: 'Tomorrow: Express vs Nest vs GraphQL — pick tools that fit the product, not the hype.',
    link: { href: '/day-150', label: 'Go to Day 150 →' },
  },
];

const RESOURCES = [
  {
    icon: '✅', title: 'Pipes', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'ValidationPipe and custom pipes for transformation.',
    link: { href: PIPES, label: 'Read pipes docs →', external: true },
  },
  {
    icon: '🛡️', title: 'Guards', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Authentication and authorization gates.',
    link: { href: GUARDS, label: 'Read guards docs →', external: true },
  },
  {
    icon: '🧯', title: 'Exception Filters', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Centralize error responses across the app.',
    link: { href: FILTERS, label: 'Read filters docs →', external: true },
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

export default function Day149() {
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
          <Link to="/day-148" className="day001-nav-btn day001-nav-prev">← Day 148</Link>
          <p className="day001-datetime">Express Day 149 · 2 Nov 2027</p>
          <Link to="/day-150" className="day001-nav-btn day001-nav-next">Day 150 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>DTO</span><span>Guards</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 149 <span aria-hidden="true">🛡️</span></h1>
              <p className="day001-day-theme">NEST PIPES, GUARDS &amp; ERRORS</p>
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
          Day 149 hardens Nest. <strong>DTOs</strong> + <strong>ValidationPipe</strong>,{' '}
          <strong>JWT guards</strong>, and <strong>HTTP exceptions</strong> — the Nest equivalents of
          Zod middleware and Express auth.
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

        <CardSection icon="📋" title="1 · VALIDATION" cards={CORE} columns={3} />
        <CardSection icon="🛡️" title="2 · AUTH & ERRORS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#Validation</span><span>#JWT</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
