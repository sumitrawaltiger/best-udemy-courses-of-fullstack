import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BFF = 'https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends';
const GATEWAY = 'https://microservices.io/patterns/apigateway.html';
const NEST = 'https://docs.nestjs.com/';

const LEARNT_TODAY = [
  { title: 'API Gateway', text: 'single entry for clients — routing, auth, rate limits, and aggregation at the edge' },
  { title: 'BFF', text: 'Backend for Frontend — a gateway shaped for one client (web vs mobile)' },
  { title: 'Why bother', text: 'hide internal services, terminate TLS once, and tailor payloads per UI' },
  { title: 'Nest as edge', text: 'a Nest HTTP app can proxy/aggregate calls to other services or modules' },
  { title: 'Auth at the edge', text: 'verify JWT once; pass user id downstream (trusted header or mTLS later)' },
  { title: 'Aggregation', text: 'one screen may need user + tasks + prefs — gateway composes the response' },
  { title: 'Don’t over-fetch forever', text: 'GraphQL or careful BFFs beat a mega-gateway that becomes a bottleneck' },
  { title: 'Year-1 shape', text: 'modular monolith with a clear “edge” module often is enough' },
  { title: 'Observability', text: 'trace ids from gateway through services — you need the chain when debugging' },
];

const CORE = [
  {
    icon: '🚪', title: 'Edge Responsibilities', titleClass: 'card-title-cyan', subtitle: 'What Sits In Front',
    description: 'Authn, rate limit, request logging, routing to the right backend, and response shaping.',
    code: '// client → gateway → services\n'// JWT · rate limit · route · aggregate',
  },
  {
    icon: '📱', title: 'BFF Split', titleClass: 'card-title-purple', subtitle: 'Per Client',
    description: 'Web BFF returns HTML-friendly rich graphs; mobile BFF returns smaller payloads.',
    code: '// /bff/web/home\n'// /bff/mobile/home',
  },
  {
    icon: '🪺', title: 'Nest Edge Module', titleClass: 'card-title-amber', subtitle: 'Practical Start',
    description: 'Create a GatewayModule that calls TasksService + UsersService and returns a home DTO.',
    code: '@Get("home")\nasync home(@Req() req) {\n  const [user, tasks] = await Promise.all([\n    this.users.me(req.user.sub),\n    this.tasks.listFor(req.user.sub),\n  ]);\n  return { user, tasks };\n}',
  },
];

const PRACTICE = [
  {
    icon: '🔐', title: 'Trust Boundary', titleClass: 'card-title-cyan', subtitle: 'Auth Once',
    description: 'Validate tokens at the edge. Internal services should not re-accept raw user tokens forever without a plan.',
    code: '// gateway verifies JWT\n'// downstream gets userId context',
  },
  {
    icon: '⏱️', title: 'Timeouts', titleClass: 'card-title-purple', subtitle: 'Fail Fast',
    description: 'When aggregating, set per-call timeouts so one slow service does not hang the whole page.',
    code: '// Promise.allSettled + partial UI\n'// or fail the request with 502',
  },
  {
    icon: '🧭', title: 'When Not To', titleClass: 'card-title-amber', subtitle: 'Keep Simple',
    description: 'One Nest API with modules is fine until you have multiple deployable backends or client-specific needs.',
    code: '// one API → modules\n'// many clients diverge → BFF',
  },
  {
    icon: '🔜', title: 'Next: Nest Swagger', titleClass: 'card-title-lime', subtitle: 'Day 159 Preview',
    description: 'Tomorrow: OpenAPI in Nest — decorators that generate Swagger UI for your REST API.',
    link: { href: '/day-159', label: 'Go to Day 159 →' },
  },
];

const RESOURCES = [
  {
    icon: '🚪', title: 'API Gateway Pattern', titleClass: 'card-title-cyan', subtitle: 'microservices.io',
    description: 'Classic pattern write-up for edge routing and aggregation.',
    link: { href: GATEWAY, label: 'Read API gateway pattern →', external: true },
  },
  {
    icon: '📱', title: 'BFF Pattern', titleClass: 'card-title-purple', subtitle: 'Azure Arch',
    description: 'Backends for frontends — tailor APIs per client.',
    link: { href: BFF, label: 'Read BFF pattern →', external: true },
  },
  {
    icon: '🪺', title: 'Nest Docs', titleClass: 'card-title-amber', subtitle: 'Home',
    description: 'Build the edge as a normal Nest HTTP app first.',
    link: { href: NEST, label: 'Open Nest docs →', external: true },
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

export default function Day158() {
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
          <Link to="/day-157" className="day001-nav-btn day001-nav-prev">← Day 157</Link>
          <p className="day001-datetime">Nest Day 158 · 11 Nov 2027</p>
          <Link to="/day-159" className="day001-nav-btn day001-nav-next">Day 159 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>BFF</span><span>Gateway</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 158 <span aria-hidden="true">🚪</span></h1>
              <p className="day001-day-theme">API GATEWAY &amp; BFF</p>
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
          Day 158 designs the edge. An <strong>API gateway</strong> or <strong>BFF</strong> authenticates,
          aggregates, and shapes responses for each client — without turning into a second monolith by accident.
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

        <CardSection icon="🚪" title="1 · EDGE PATTERNS" cards={CORE} columns={3} />
        <CardSection icon="🔐" title="2 · TRUST & LIMITS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#APIGateway</span><span>#BFF</span><span>#NestJS</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
