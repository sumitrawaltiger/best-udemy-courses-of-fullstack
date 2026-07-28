import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GQL = 'https://graphql.org/learn/';
const SPEC = 'https://spec.graphql.org/';
const QUERIES = 'https://graphql.org/learn/queries/';

const LEARNT_TODAY = [
  { title: 'Why GraphQL', text: 'clients ask for exactly the fields they need — fewer round-trips than many REST endpoints' },
  { title: 'One endpoint', text: 'usually POST /graphql with a query string in the body' },
  { title: 'Schema first', text: 'types + fields define the contract; resolvers fill in the data' },
  { title: 'Query', text: 'read data — nested fields can load related objects in one request' },
  { title: 'Mutation', text: 'write data — create/update/delete with typed inputs and payloads' },
  { title: 'Subscription', text: 'realtime pushes over WebSockets (live feeds, chats)' },
  { title: 'Strong typing', text: 'the schema is the source of truth for clients and docs' },
  { title: 'Not a DB', text: 'GraphQL sits on top of your services/DB — same auth and business rules' },
  { title: 'Days 146–150', text: 'GraphQL → Apollo on Express → NestJS fundamentals → Nest patterns → choose your stack' },
];

const CORE = [
  {
    icon: '⬡', title: 'Schema Sketch', titleClass: 'card-title-cyan', subtitle: 'Types & Fields',
    description: 'Define object types and a Query root. Clients can only ask for fields that exist here.',
    code: 'type Task {\n  id: ID!\n  title: String!\n  done: Boolean!\n}\n\ntype Query {\n  tasks: [Task!]!\n  task(id: ID!): Task\n}',
  },
  {
    icon: '🔍', title: 'A Query', titleClass: 'card-title-purple', subtitle: 'Ask For Fields',
    description: 'The client picks fields. The server returns JSON shaped like the query.',
    code: 'query {\n  tasks {\n    id\n    title\n  }\n}\n// → { "data": { "tasks": [...] } }',
  },
  {
    icon: '✏️', title: 'A Mutation', titleClass: 'card-title-amber', subtitle: 'Write Path',
    description: 'Mutations change data. Use input types and return the updated object.',
    code: 'mutation {\n  createTask(title: "Ship day 146") {\n    id\n    title\n    done\n  }\n}',
  },
];

const PRACTICE = [
  {
    icon: '🧠', title: 'Resolvers', titleClass: 'card-title-cyan', subtitle: 'How Data Loads',
    description: 'Each field can have a resolver function. Start simple: Query.tasks hits the DB.',
    code: 'const resolvers = {\n  Query: {\n    tasks: () => db.tasks.findMany(),\n    task: (_p, { id }) => db.tasks.findById(id),\n  },\n};',
  },
  {
    icon: '📦', title: 'REST Vs GraphQL', titleClass: 'card-title-purple', subtitle: 'When To Use',
    description: 'REST stays great for simple CRUD and caching. GraphQL shines when UIs need flexible, nested shapes.',
    code: '// many screens, many shapes → GraphQL\n'// few fixed resources → REST is fine',
  },
  {
    icon: '🔐', title: 'Same Security', titleClass: 'card-title-amber', subtitle: 'Auth Still Matters',
    description: 'Validate JWT in context. Authorize inside resolvers — never expose private fields by accident.',
    code: '// context: { user }\n'// if (!user) throw new GraphQLError("unauthorized")',
  },
  {
    icon: '🔜', title: 'Next: Apollo + Express', titleClass: 'card-title-lime', subtitle: 'Day 147 Preview',
    description: 'Tomorrow: mount Apollo Server on your Express app and run real queries against it.',
    link: { href: '/day-147', label: 'Go to Day 147 →' },
  },
];

const RESOURCES = [
  {
    icon: '⬡', title: 'GraphQL Learn', titleClass: 'card-title-cyan', subtitle: 'Official',
    description: 'Queries, mutations, schemas, and the mental model.',
    link: { href: GQL, label: 'Read GraphQL learn →', external: true },
  },
  {
    icon: '📜', title: 'GraphQL Spec', titleClass: 'card-title-purple', subtitle: 'Reference',
    description: 'The language and execution rules when you need precision.',
    link: { href: SPEC, label: 'Read the spec →', external: true },
  },
  {
    icon: '🔍', title: 'Queries Guide', titleClass: 'card-title-amber', subtitle: 'Official',
    description: 'Arguments, aliases, fragments, and variables.',
    link: { href: QUERIES, label: 'Read queries guide →', external: true },
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

export default function Day146() {
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
          <Link to="/day-145" className="day001-nav-btn day001-nav-prev">← Day 145</Link>
          <p className="day001-datetime">Express Day 146 · 26 May 2027</p>
          <Link to="/day-147" className="day001-nav-btn day001-nav-next">Day 147 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Express</span><span>Year 1</span><span>GraphQL</span><span>Schema</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 146 <span aria-hidden="true">⬡</span></h1>
              <p className="day001-day-theme">GRAPHQL BASICS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '40%' }} /></div>

        <p className="day001-summary">
          Day 146 opens GraphQL. Learn the <strong>schema</strong>, write a{' '}
          <strong>query</strong> and a <strong>mutation</strong>, and see how{' '}
          <strong>resolvers</strong> load data — still sitting on the same auth and DB you already built.
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

        <CardSection icon="⬡" title="1 · SCHEMA & OPERATIONS" cards={CORE} columns={3} />
        <CardSection icon="🧠" title="2 · RESOLVERS & TRADE-OFFS" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#GraphQL</span><span>#Express</span><span>#API</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
