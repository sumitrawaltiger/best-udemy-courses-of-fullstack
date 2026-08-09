import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const NEST_GQL = 'https://docs.nestjs.com/graphql/quick-start';
const CODE_FIRST = 'https://docs.nestjs.com/graphql/resolvers';
const AUTH = 'https://docs.nestjs.com/graphql/guards-interceptors';

const LEARNT_TODAY = [
  { title: 'Nest GraphQL module', text: '@nestjs/graphql + Apollo driver — GraphQL inside the Nest DI world' },
  { title: 'Code-first', text: 'TypeScript classes + decorators generate the schema (common Nest style)' },
  { title: 'ObjectType / Field', text: 'mark model classes that GraphQL can return' },
  { title: 'Resolver', text: 'like a controller — @Query and @Mutation map to schema operations' },
  { title: 'Args / InputType', text: 'typed arguments and mutation inputs with validation-friendly DTOs' },
  { title: 'Reuse services', text: 'resolvers call the same TasksService / PrismaService as REST controllers' },
  { title: 'Guards still work', text: 'JwtAuthGuard on resolvers — GqlExecutionContext reads the request' },
  { title: 'Playground', text: 'Nest serves a GraphQL playground in development for exploration' },
  { title: 'REST + GraphQL', text: 'keep both modules if webhooks and flexible UI queries both matter' },
];

const CORE = [
  {
    icon: '⬡', title: 'Enable GraphQL', titleClass: 'card-title-cyan', subtitle: 'AppModule',
    description: 'Import GraphQLModule with the Apollo driver. Code-first auto-generates schema.gql.',
    code: 'GraphQLModule.forRoot<ApolloDriverConfig>({\n  driver: ApolloDriver,\n  autoSchemaFile: true,\n})',
  },
  {
    icon: '🏷️', title: 'ObjectType', titleClass: 'card-title-purple', subtitle: 'Graph Shape',
    description: 'Decorate a class so Nest exposes it as a GraphQL type with selected fields.',
    code: '@ObjectType()\nexport class Task {\n  @Field(() => ID) id: string;\n  @Field() title: string;\n  @Field() done: boolean;\n}',
  },
  {
    icon: '🎯', title: 'Resolver', titleClass: 'card-title-amber', subtitle: 'Queries & Mutations',
    description: 'Inject TasksService and map methods to @Query / @Mutation.',
    code: '@Resolver(() => Task)\nexport class TasksResolver {\n  constructor(private tasks: TasksService) {}\n  @Query(() => [Task]) tasks() { return this.tasks.findAll(); }\n  @Mutation(() => Task)\n  createTask(@Args("title") title: string) {\n    return this.tasks.create(title);\n  }\n}',
  },
];

const PRACTICE = [
  {
    icon: '📥', title: 'InputType', titleClass: 'card-title-cyan', subtitle: 'Mutation Args',
    description: 'Prefer an input class over many loose args — pairs well with ValidationPipe.',
    code: '@InputType()\nexport class CreateTaskInput {\n  @Field() title: string;\n}',
  },
  {
    icon: '🛡️', title: 'Guard A Resolver', titleClass: 'card-title-purple', subtitle: 'Auth',
    description: 'UseGuards works on resolvers. Adapt JWT extraction via GqlExecutionContext if needed.',
    code: '@UseGuards(JwtAuthGuard)\n@Query(() => User)\nme(@Context() ctx) { return ctx.req.user; }',
  },
  {
    icon: '🔁', title: 'One Service Two APIs', titleClass: 'card-title-amber', subtitle: 'DRY',
    description: 'REST controller and GraphQL resolver share TasksService — business rules live once.',
    code: '// TasksController → TasksService\n'// TasksResolver  → TasksService',
  },
  {
    icon: '🔜', title: 'Next: Events', titleClass: 'card-title-lime', subtitle: 'Day 153 Preview',
    description: 'Tomorrow: Nest EventEmitter and queue hooks — react to domain events without tight coupling.',
    link: { href: '/day-153', label: 'Go to Day 153 →' },
  },
];

const RESOURCES = [
  {
    icon: '⬡', title: 'Nest GraphQL', titleClass: 'card-title-cyan', subtitle: 'Quick Start',
    description: 'Install, configure Apollo, and run your first query.',
    link: { href: NEST_GQL, label: 'Read Nest GraphQL docs →', external: true },
  },
  {
    icon: '🎯', title: 'Resolvers', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Queries, mutations, and field resolvers in code-first mode.',
    link: { href: CODE_FIRST, label: 'Read resolvers docs →', external: true },
  },
  {
    icon: '🛡️', title: 'Guards & Interceptors', titleClass: 'card-title-amber', subtitle: 'GraphQL',
    description: 'Auth patterns that work with the GraphQL context.',
    link: { href: AUTH, label: 'Read GraphQL auth docs →', external: true },
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

export default function Day152() {
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
          <Link to="/day-151" className="day001-nav-btn day001-nav-prev">← Day 151</Link>
          <p className="day001-datetime">Nest Day 152 · 5 Nov 2027</p>
          <Link to="/day-153" className="day001-nav-btn day001-nav-next">Day 153 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>NestJS</span><span>Year 1</span><span>GraphQL</span><span>Apollo</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 152 <span aria-hidden="true">⬡</span></h1>
              <p className="day001-day-theme">NEST GRAPHQL (CODE-FIRST)</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '42%' }} /></div>

        <p className="day001-summary">
          Day 152 brings GraphQL into Nest. <strong>Code-first</strong> types,{' '}
          <strong>resolvers</strong> that reuse your services, and the same{' '}
          <strong>guards</strong> you already use on REST.
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

        <CardSection icon="⬡" title="1 · MODULE & RESOLVERS" cards={CORE} columns={3} />
        <CardSection icon="🛡️" title="2 · INPUTS & AUTH" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#NestJS</span><span>#GraphQL</span><span>#Apollo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
