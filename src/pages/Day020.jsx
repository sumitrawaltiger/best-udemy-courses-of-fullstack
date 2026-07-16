import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';
const NODE_TS = 'https://nodejs.org/en/learn/typescript/run';

const LEARNT_TODAY = [
  { title: 'A real project', text: 'built a typed CLI task manager end to end — the first capstone of the phase' },
  { title: 'Model the domain', text: 'a Task interface + a discriminated Status union describe the data precisely' },
  { title: 'Validate input', text: 'a Zod schema parses commands and file data at the boundaries' },
  { title: 'Typed storage', text: 'read/write tasks.json with fs/promises, typed on the way in and out' },
  { title: 'Result-based ops', text: 'add/complete/remove return Result so failures are explicit' },
  { title: 'Generic repository', text: 'a Repository<T> pattern keeps storage reusable and testable' },
  { title: 'Parse argv', text: 'turn process.argv into typed commands with exhaustive handling' },
  { title: 'Errors handled', text: 'unknown catches narrowed, custom errors, friendly CLI messages' },
  { title: 'strict throughout', text: 'no any, strictNullChecks on — the whole app is type-safe' },
  { title: 'Everything connects', text: 'types, generics, unions, async, validation, errors, patterns — together' },
];

const MODEL = [
  {
    icon: '🧩', title: 'Domain Model', titleClass: 'card-title-cyan', subtitle: 'Task + Status',
    description: 'Describe the data first. A Task interface plus a literal Status union make illegal states unrepresentable and drive the rest of the app.',
    code: 'type Status = "todo" | "doing" | "done";\ninterface Task {\n  id: number;\n  title: string;\n  status: Status;\n}',
  },
  {
    icon: '🛡️', title: 'Validate At The Edge', titleClass: 'card-title-purple', subtitle: 'Zod Schema',
    description: 'Parse both CLI input and the JSON file with a schema, so the Task[] your logic works with is guaranteed to match the type.',
    code: 'const TaskSchema = z.object({\n  id: z.number(), title: z.string().min(1),\n  status: z.enum(["todo", "doing", "done"]),\n});',
  },
  {
    icon: '🗄️', title: 'Generic Repository', titleClass: 'card-title-amber', subtitle: 'Reusable Storage',
    description: 'A Repository<T> reads and writes typed data via fs/promises. Generics keep it reusable; injecting it makes the service layer testable.',
    code: 'class JsonRepo<T> {\n  constructor(private file: string) {}\n  async all(): Promise<T[]> { /* read + parse */ }\n  async save(items: T[]) { /* write */ }\n}',
  },
];

const LOGIC = [
  {
    icon: '📦', title: 'Result-Based Ops', titleClass: 'card-title-cyan', subtitle: 'Explicit Failure',
    description: 'add, complete, and remove return a Result instead of throwing, so the CLI layer decides how to report success or a friendly error.',
    code: 'function complete(tasks: Task[], id: number): Result<Task[]> {\n  const t = tasks.find((x) => x.id === id);\n  if (!t) return { ok: false, error: new Error("not found") };\n  t.status = "done";\n  return { ok: true, value: tasks };\n}',
  },
  {
    icon: '⌨️', title: 'Parse Commands', titleClass: 'card-title-blue', subtitle: 'Typed argv',
    description: 'Turn process.argv into a typed command and switch over it exhaustively — a never default guarantees no command is left unhandled.',
    code: 'const [cmd, ...rest] = process.argv.slice(2);\nswitch (cmd) {\n  case "add": return add(rest.join(" "));\n  case "list": return list();\n}',
  },
  {
    icon: '🎣', title: 'Handle Errors', titleClass: 'card-title-amber', subtitle: 'Friendly Output',
    description: 'Wrap the entry point in a try/catch, narrow the unknown error, and print a clean message with a non-zero exit code — no raw stack traces.',
    code: 'try { await main(); }\ncatch (e) {\n  console.error(e instanceof Error ? e.message : e);\n  process.exit(1);\n}',
  },
  {
    icon: '🏗️', title: 'Wire It Together', titleClass: 'card-title-lime', subtitle: 'DI + Patterns',
    description: 'A TaskService takes the repo via its constructor (dependency injection). Swap the repo for an in-memory one in tests — no code changes.',
    code: 'const service = new TaskService(new JsonRepo<Task>("tasks.json"));',
  },
];

const RECAP = [
  {
    icon: '🧠', title: 'Days 1–10 Applied', titleClass: 'card-title-cyan', subtitle: 'The Core',
    description: 'Types, functions, interfaces, classes, generics, narrowing, utility types, modules, and tsconfig all show up in this single small program.',
    code: '// interfaces + generics + unions + strict',
  },
  {
    icon: '🚀', title: 'Days 11–19 Applied', titleClass: 'card-title-purple', subtitle: 'Advanced & Applied',
    description: 'Advanced types, async/await, typed fetch shape, Zod validation, the Result error pattern, and the Repository/DI patterns — combined into one app.',
    code: '// validation + Result + repository + DI',
  },
  {
    icon: '🏁', title: '20 Days Down', titleClass: 'card-title-amber', subtitle: 'TypeScript, For Real',
    description: 'You can now read and write serious TypeScript: model data, validate it, handle async and errors, and structure code with patterns. A strong foundation.',
    link: { href: '/roadmap', label: 'See the full roadmap →' },
  },
  {
    icon: '🔜', title: 'Next: Day 21+', titleClass: 'card-title-lime', subtitle: 'Keep Going',
    description: 'The TypeScript phase continues toward React & Next.js in TypeScript. Day 21 picks up the next topic in Year 1.',
    link: { href: '/day-021', label: 'Go to Day 21 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Run TS On Node', titleClass: 'card-title-cyan', subtitle: 'Build & Run',
    description: 'Everything you need to run the capstone locally — tsx for dev, tsc for a build, and the module settings that make it work.',
    link: { href: NODE_TS, label: 'Node + TypeScript guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Prototype The Types',
    description: 'Model Task, Status, and the Result type in the Playground first, then bring them into a real Node project with fs and argv.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'This mini-project mirrors how real apps are built — model, validate, store, handle errors. The same spine powers everything that follows.',
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

export default function Day020() {
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
          <Link to="/day-019" className="day001-nav-btn day001-nav-prev">← Day 19</Link>
          <p className="day001-datetime">TypeScript Day 20 · 5 Aug 2026</p>
          <Link to="/day-021" className="day001-nav-btn day001-nav-next">Day 21 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Capstone</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 20 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">CAPSTONE — A TYPED CLI TASK MANAGER</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TS · TYPESCRIPT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '20%' }} /></div>

        <p className="day001-summary">
          Day 20 ties the first three weeks together into one real project: a fully typed{' '}
          <strong>CLI task manager</strong>. I modelled the domain with an interface and a discriminated{' '}
          <strong>Status</strong> union, <strong>validated</strong> input and file data with Zod, stored tasks via a
          generic <strong>Repository</strong>, made operations return <strong>Result</strong>, parsed{' '}
          <code>argv</code> exhaustively, and handled errors cleanly — <code>strict</code> on, no <code>any</code>.
          Every concept from Days 1–19, working together.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I BUILT TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🧩" title="MODEL & STORAGE" cards={MODEL} columns={3} />
        <CardSection icon="🛠️" title="LOGIC & CLI" cards={LOGIC} columns={4} />
        <CardSection icon="🏁" title="20-DAY RECAP" cards={RECAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Capstone</span><span>#WebDev</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
