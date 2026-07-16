import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TANSTACK = 'https://tanstack.com/query/latest/docs/framework/react/overview';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'The loading pattern', text: 'model data, loading, and error as one typed state — a discriminated union' },
  { title: 'Fetch in effect', text: 'load on mount with useEffect, guarding against unmount' },
  { title: 'Typed responses', text: 'reuse getJSON<T> so fetched data is typed from the first line' },
  { title: 'Validate at the edge', text: 'parse the response with a Zod schema before trusting it' },
  { title: 'Race conditions', text: 'ignore stale responses when the request changes mid-flight' },
  { title: 'TanStack Query', text: 'the standard data library — caching, refetch, and great TS support' },
  { title: 'useQuery<T>', text: 'returns typed { data, isLoading, error } with caching built in' },
  { title: 'Query keys', text: 'a typed array key identifies and caches each query' },
  { title: 'Mutations', text: 'useMutation types the input and result of writes' },
  { title: 'Less code, safer', text: 'a query library removes most manual state and bugs' },
];

const MANUAL = [
  {
    icon: '🎫', title: 'One State Union', titleClass: 'card-title-cyan', subtitle: 'No Impossible States',
    description: 'Model the request as a discriminated union rather than separate booleans. loading, error, and data can’t contradict each other — the compiler ensures it.',
    code: 'type Req<T> =\n  | { status: "loading" }\n  | { status: "error"; msg: string }\n  | { status: "success"; data: T };',
  },
  {
    icon: '🌀', title: 'Fetch In useEffect', titleClass: 'card-title-purple', subtitle: 'Load On Mount',
    description: 'Kick off the request in an effect, updating the union as it resolves. Reuse the typed getJSON<T> wrapper so data is safe end to end.',
    code: 'useEffect(() => {\n  getJSON<User>("/api/me")\n    .then((data) => set({ status: "success", data }))\n    .catch((e) => set({ status: "error", msg: String(e) }));\n}, []);',
  },
  {
    icon: '🏁', title: 'Race Conditions', titleClass: 'card-title-amber', subtitle: 'Ignore Stale',
    description: 'If the URL changes before a response arrives, an old result can overwrite a new one. A cleanup flag (or AbortController) discards stale responses.',
    code: 'let active = true;\n// on resolve: if (active) set(...)\nreturn () => { active = false; };',
  },
];

const RENDER = [
  {
    icon: '🖼️', title: 'Render Each State', titleClass: 'card-title-cyan', subtitle: 'Exhaustive UI',
    description: 'Switch over the status union in render so every state has a UI — spinner, error, or data. TypeScript narrows data to be present only in success.',
    code: 'if (req.status === "loading") return <Spinner />;\nif (req.status === "error") return <Err msg={req.msg} />;\nreturn <Profile user={req.data} />;',
  },
  {
    icon: '🛡️', title: 'Validate The Response', titleClass: 'card-title-blue', subtitle: 'Zod At The Edge',
    description: 'Since the server can lie, parse the response with a schema before storing it. Now the success data is guaranteed to match the type.',
    code: 'const data = UserSchema.parse(await res.json());',
  },
  {
    icon: '🧹', title: 'Manual Gets Tedious', titleClass: 'card-title-amber', subtitle: 'Why A Library',
    description: 'Caching, refetching, retries, and dedup are a lot to hand-roll. That repetition is exactly what a data library solves — enter TanStack Query.',
    code: '// caching + refetch + retry by hand = a lot',
  },
  {
    icon: '⚡', title: 'useQuery<T>', titleClass: 'card-title-lime', subtitle: 'TanStack Query',
    description: 'useQuery gives typed data plus isLoading and error, with caching and background refetch built in — the data hook from Day 28, done right.',
    code: 'const { data, isLoading } = useQuery<User>({\n  queryKey: ["me"],\n  queryFn: () => getJSON<User>("/api/me"),\n});',
  },
];

const QUERY = [
  {
    icon: '🔑', title: 'Query Keys', titleClass: 'card-title-cyan', subtitle: 'Identify & Cache',
    description: 'A typed array key uniquely identifies a query for caching and invalidation — ["user", id] caches per user and refetches when id changes.',
    code: 'useQuery({ queryKey: ["user", id], queryFn: () => getUser(id) });',
  },
  {
    icon: '✍️', title: 'Mutations', titleClass: 'card-title-purple', subtitle: 'Typed Writes',
    description: 'useMutation types both the variables you send and the result you get back, then invalidates related queries so the UI stays fresh.',
    code: 'const m = useMutation({ mutationFn: (t: NewTask) => createTask(t) });\nm.mutate({ title: "Learn TS" });',
  },
  {
    icon: '🎯', title: 'Less State, Fewer Bugs', titleClass: 'card-title-amber', subtitle: 'The Payoff',
    description: 'A query library removes most manual loading/error state, handles caching and retries, and keeps everything typed — dramatically less code.',
    code: '// no useEffect, no manual union — it’s handled',
  },
  {
    icon: '🔜', title: 'Next: React TS Capstone', titleClass: 'card-title-lime', subtitle: 'Day 30 Preview',
    description: 'Tomorrow ties Days 21–29 together into a small, fully typed React app — components, hooks, forms, context, and data fetching.',
    link: { href: '/day-030', label: 'Go to Day 30 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'TanStack Query', titleClass: 'card-title-cyan', subtitle: 'The Data Library',
    description: 'The official docs for TanStack Query — queries, mutations, caching, and its excellent TypeScript support. The industry standard for data fetching.',
    link: { href: TANSTACK, label: 'Read the TanStack docs →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Model The Union',
    description: 'Write the Req<T> union and a render switch, then confirm data only exists in the success branch. The pattern prevents a whole class of bugs.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Typed data fetching powers nearly every screen. TanStack Query + Zod + typed fetch is the stack you’ll use through React & Next.js.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
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

export default function Day029() {
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
          <Link to="/day-028" className="day001-nav-btn day001-nav-prev">← Day 28</Link>
          <p className="day001-datetime">TypeScript Day 29 · 14 Aug 2026</p>
          <Link to="/day-030" className="day001-nav-btn day001-nav-next">Day 30 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Data Fetching</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 29 <span aria-hidden="true">🌐</span></h1>
              <p className="day001-day-theme">DATA FETCHING IN REACT TS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · REACT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Day 29 loads data safely. I modelled requests as a <strong>discriminated union</strong> of{' '}
          loading/error/success (no impossible states), fetched with a typed <code>getJSON&lt;T&gt;</code> in an
          effect, <strong>validated</strong> with Zod, and handled <strong>race conditions</strong>. Then I moved
          to <strong>TanStack Query</strong> — <code>useQuery&lt;T&gt;</code> for typed, cached data,{' '}
          <strong>query keys</strong>, and typed <strong>mutations</strong> — far less code and far fewer bugs.
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

        <CardSection icon="🎫" title="THE MANUAL PATTERN" cards={MANUAL} columns={3} />
        <CardSection icon="🖼️" title="RENDER & SCALE UP" cards={RENDER} columns={4} />
        <CardSection icon="⚡" title="TANSTACK QUERY" cards={QUERY} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#DataFetching</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
