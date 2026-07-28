import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const APOLLO = 'https://www.apollographql.com/docs/apollo-server/';
const EXPRESS_INT = 'https://www.apollographql.com/docs/apollo-server/api/express-middleware/';
const CONTEXT = 'https://www.apollographql.com/docs/apollo-server/data/context/';

const LEARNT_TODAY = [
  { title: 'Apollo Server', text: 'popular GraphQL server for Node — schema, resolvers, and a playground' },
  { title: 'Mount on Express', text: 'keep REST routes and add /graphql via expressMiddleware' },
  { title: 'typeDefs + resolvers', text: 'pass both into ApolloServer and start it once at boot' },
  { title: 'Context', text: 'per-request bag (user, db, loaders) available to every resolver' },
  { title: 'JWT in context', text: 'read Authorization, verify, set context.user — same habit as Express auth' },
  { title: 'Variables', text: 'clients send query + variables JSON — never string-build queries' },
  { title: 'Errors', text: 'throw GraphQLError with extensions.code for clean client handling' },
  { title: 'Playground / Sandbox', text: 'hit /graphql in the browser to explore the schema live' },
  { title: 'Keep REST', text: 'you can run both — GraphQL for flexible UIs, REST for webhooks and files' },
];

const CORE = [
  {
    icon: '🚀', title: 'Install & Boot', titleClass: 'card-title-cyan', subtitle: 'Apollo + Express',
    description: 'Create the server with typeDefs/resolvers, start it, then mount middleware on Express.',
    code: 'import { ApolloServer } from "@apollo/server";\nimport { expressMiddleware } from "@as-integrations/express4";\n\nconst server = new ApolloServer({ typeDefs, resolvers });\nawait server.start();\napp.use("/graphql", express.json(), expressMiddleware(server));',
  },
  {
    icon: '🧾', title: 'typeDefs', titleClass: 'card-title-purple', subtitle: 'SDL String',
    description: 'Keep the schema in a string or .graphql file. Match fields to resolver names.',
    code: 'const typeDefs = `#graphql\n  type Query { hello: String! }\n`;\nconst resolvers = {\n  Query: { hello: () => "Day 147" },\n};',
  },
  {
    icon: '🪪', title: 'Context With JWT', titleClass: 'card-title-amber', subtitle: 'Per Request',
    description: 'Build context from the incoming request so resolvers know who is calling.',
    code: 'expressMiddleware(server, {\n  context: async ({ req }) => {\n    const user = verifyOptional(req.headers.authorization);\n    return { user, db };\n  },\n});',
  },
];

const PRACTICE = [
  {
    icon: '🧪', title: 'Client Call', titleClass: 'card-title-cyan', subtitle: 'POST JSON',
    description: 'Send query and variables. Check data and errors in the JSON response.',
    code: 'await fetch("/graphql", {\n  method: "POST",\n  headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },\n  body: JSON.stringify({ query: `{ tasks { id title } }` }),\n});',
  },
  {
    icon: '⚠️', title: 'GraphQLError', titleClass: 'card-title-purple', subtitle: 'Typed Failures',
    description: 'Use extensions so clients can branch on UNAUTHENTICATED vs BAD_USER_INPUT.',
    code: 'import { GraphQLError } from "graphql";\nthrow new GraphQLError("login required", {\n  extensions: { code: "UNAUTHENTICATED" },\n});',
  },
  {
    icon: '📎', title: 'Beside REST', titleClass: 'card-title-amber', subtitle: 'Hybrid API',
    description: 'Keep /api/v1 for uploads and webhooks. Add /graphql for product screens that need nested data.',
    code: 'app.use("/api/v1", v1Router);\napp.use("/graphql", …);',
  },
  {
    icon: '🔜', title: 'Next: NestJS', titleClass: 'card-title-lime', subtitle: 'Day 148 Preview',
    description: 'Tomorrow: NestJS — modules, controllers, and providers for a structured backend.',
    link: { href: '/day-148', label: 'Go to Day 148 →' },
  },
];

const RESOURCES = [
  {
    icon: '🚀', title: 'Apollo Server', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description: 'Getting started, schema, plugins, and production tips.',
    link: { href: APOLLO, label: 'Read Apollo Server docs →', external: true },
  },
  {
    icon: '🚂', title: 'Express Middleware', titleClass: 'card-title-purple', subtitle: 'Integration',
    description: 'How to mount Apollo on an existing Express app.',
    link: { href: EXPRESS_INT, label: 'Read Express middleware →', external: true },
  },
  {
    icon: '🪪', title: 'Context', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Share user, db, and dataloaders across resolvers.',
    link: { href: CONTEXT, label: 'Read context docs →', external: true },
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

export default function Day147() {
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
          <Link to="/day-146" className="day001-nav-btn day001-nav-prev">← Day 146</Link>
          <p className="day001-datetime">Express Day 147 · 27 May 2027</p>
          <Link to="/day-148" className="day001-nav-btn day001-nav-next">Day 148 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>Apollo</span><span>GraphQL</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 147 <span aria-hidden="true">🚀</span></h1>
              <p className="day001-day-theme">APOLLO SERVER ON EXPRESS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">EXPRESS · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '41%' }} /></div>

        <p className="day001-summary">
          Day 147 mounts <strong>Apollo Server</strong> on Express. Wire{' '}
          <strong>typeDefs</strong> and <strong>resolvers</strong>, build{' '}
          <strong>context</strong> with JWT, and keep <strong>/api/v1</strong> beside{' '}
          <strong>/graphql</strong>.
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

        <CardSection icon="🚀" title="1 · MOUNT APOLLO" cards={CORE} columns={3} />
        <CardSection icon="🧪" title="2 · CALLS & ERRORS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#Apollo</span><span>#GraphQL</span><span>#Express</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
