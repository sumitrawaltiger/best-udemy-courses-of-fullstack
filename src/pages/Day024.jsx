import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const FETCH_DOCS = 'https://nextjs.org/docs/app/building-your-application/data-fetching/fetching';
const ACTIONS_DOCS = 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations';

const LEARNT_TODAY = [
  { title: 'Fetch in the component', text: 'a Server Component just awaits data — no useEffect, no loading flag' },
  { title: 'Extended fetch', text: 'Next augments fetch with caching + revalidation options right on the call' },
  { title: 'Server Actions', text: 'async functions marked "use server" that run on the server — mutations without an API route' },
  { title: 'Progressive forms', text: 'a form action={} calls a Server Action; works even before JS loads' },
  { title: 'revalidatePath / Tag', text: 'after a mutation, tell Next which cached data to refresh' },
  { title: 'redirect()', text: 'navigate from a Server Action after a successful write' },
  { title: 'Parallel data', text: 'kick off fetches together and await them to avoid request waterfalls' },
  { title: 'Type the boundary', text: 'validate action inputs (Zod) — they come from the client and are untrusted' },
];

const FETCHING = [
  {
    icon: '📥', title: 'Await Data', titleClass: 'card-title-cyan', subtitle: 'In Server Components',
    description:
      'No data-fetching library needed for reads: an async Server Component awaits the data before it renders. Next extends fetch with caching and revalidation controls on the call itself.',
    code: 'async function Page() {\n  const res = await fetch("https://api/posts", {\n    next: { revalidate: 60 },   // ISR: refresh every 60s\n  });\n  const posts = await res.json();\n  return <List posts={posts} />;\n}',
  },
  {
    icon: '🔀', title: 'Avoid Waterfalls', titleClass: 'card-title-purple', subtitle: 'Parallel Fetching',
    description:
      'Sequential awaits create waterfalls. Start independent fetches together, then await both — the requests overlap and the page is ready sooner.',
    code: 'const postsP = getPosts();\nconst userP  = getUser();\nconst [posts, user] = await Promise.all([postsP, userP]);',
  },
];

const ACTIONS = [
  {
    icon: '⚡', title: 'Server Actions', titleClass: 'card-title-cyan', subtitle: '"use server"',
    description:
      'A Server Action is an async function that runs on the server — call it from a form’s action or a client handler to mutate data with no separate API route. It’s type-safe end to end.',
    code: 'async function createPost(formData: FormData) {\n  "use server";\n  const title = String(formData.get("title"));\n  await db.post.create({ data: { title } });\n  revalidatePath("/posts");\n}\n<form action={createPost}> … </form>',
  },
  {
    icon: '♻️', title: 'Revalidate', titleClass: 'card-title-purple', subtitle: 'Refresh The Cache',
    description:
      'After a write, call revalidatePath or revalidateTag so Next refetches the affected data. Or redirect() to send the user onward once the mutation succeeds.',
    code: 'revalidatePath("/posts");        // refresh a route\nrevalidateTag("posts");          // or a cache tag\nredirect("/posts");              // then navigate',
  },
  {
    icon: '🛡️', title: 'Validate Inputs', titleClass: 'card-title-amber', subtitle: 'They’re Untrusted',
    description:
      'Action arguments come from the client, so treat them as untrusted — parse with Zod before touching the database, and return typed errors for the form to show.',
    code: 'const parsed = PostSchema.safeParse({ title });\nif (!parsed.success) return { error: "Invalid title" };',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Data Fetching', titleClass: 'card-title-cyan', subtitle: 'Next.js Docs',
    description:
      'Fetching in Server Components, the extended fetch API, caching, streaming with Suspense, and avoiding waterfalls.',
    link: { href: FETCH_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '⚡', title: 'Server Actions', titleClass: 'card-title-purple', subtitle: 'Mutations',
    description:
      'How Server Actions work — forms, progressive enhancement, revalidation, redirects and security considerations.',
    link: { href: ACTIONS_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Rendering & Cache', titleClass: 'card-title-amber', subtitle: 'Day 25 Preview',
    description:
      'Tomorrow — SSR vs SSG vs ISR, static vs dynamic rendering, and how Next.js caching (the full route cache and data cache) actually works.',
    link: { href: '/day-025', label: 'Go to Day 25 →' },
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

export default function Day024() {
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
          <Link to="/day-023" className="day001-nav-btn day001-nav-prev">← Day 23</Link>
          <p className="day001-datetime">TypeScript Day 24 · 24 Jan 2027</p>
          <Link to="/day-025" className="day001-nav-btn day001-nav-next">Day 25 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Next.js</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 24 <span aria-hidden="true">📥</span></h1>
              <p className="day001-day-theme">NEXT.JS — DATA FETCHING &amp; SERVER ACTIONS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '24%' }} /></div>

        <p className="day001-summary">
          Reads and writes, the App Router way. For <strong>reads</strong>, an async Server Component just{' '}
          <code>await</code>s the data — no <code>useEffect</code>, no loading flag — and Next’s extended{' '}
          <strong>fetch</strong> adds caching/revalidation right on the call. Fire independent fetches with{' '}
          <code>Promise.all</code> to avoid <strong>waterfalls</strong>. For <strong>writes</strong>,{' '}
          <strong>Server Actions</strong> (<code>"use server"</code>) mutate data with <strong>no API route</strong> —
          call them from a <code>form action</code> (works before JS loads), then <strong>revalidatePath</strong> or{' '}
          <code>redirect()</code>. Inputs are untrusted, so <strong>validate with Zod</strong> first.{' '}
          <em>Next: rendering &amp; caching.</em>
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

        <CardSection icon="📥" title="FETCHING DATA" cards={FETCHING} columns={2} />
        <CardSection icon="⚡" title="SERVER ACTIONS" cards={ACTIONS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#NextJS</span><span>#ServerActions</span>
        </footer>
      </div>
    </div>
  );
}
