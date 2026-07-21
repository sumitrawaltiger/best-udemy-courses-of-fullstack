import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RHF_DOCS = 'https://react-hook-form.com/';
const ZOD_DOCS = 'https://zod.dev/';

const LEARNT_TODAY = [
  { title: 'Controlled inputs get slow', text: 'a useState per field re-renders the whole form on every keystroke' },
  { title: 'React Hook Form', text: 'uses uncontrolled inputs + refs, so typing re-renders almost nothing — fast forms' },
  { title: 'register', text: 'spread register("email") onto an input to wire it into the form with no state' },
  { title: 'handleSubmit', text: 'validates, then calls your typed onSubmit only when the data is valid' },
  { title: 'Zod schema', text: 'declare the shape and rules once; z.infer gives you the TypeScript type for free' },
  { title: 'zodResolver', text: 'bridges Zod to React Hook Form so validation errors appear per field' },
  { title: 'Typed errors', text: 'formState.errors is typed to your schema — show messages inline' },
  { title: 'One source of truth', text: 'the Zod schema defines both validation and the form’s type — they never drift' },
];

const RHF = [
  {
    icon: '⚡', title: 'Why React Hook Form', titleClass: 'card-title-cyan', subtitle: 'Fast, Less Code',
    description:
      'Controlled forms re-render on every keystroke. React Hook Form keeps inputs uncontrolled via refs, so it’s fast and needs no per-field useState. register() wires each input in.',
    code: 'const { register, handleSubmit } = useForm<FormData>();\n\n<input {...register("email")} />\n<input type="password" {...register("password")} />\n<button>Sign in</button>',
  },
  {
    icon: '✅', title: 'handleSubmit', titleClass: 'card-title-purple', subtitle: 'Validate, Then Run',
    description:
      'Wrap your submit handler in handleSubmit. It validates first and only calls onSubmit with fully-typed, valid data — no manual checks scattered through the component.',
    code: 'const onSubmit = (data: FormData) => save(data);\n<form onSubmit={handleSubmit(onSubmit)}> … </form>',
  },
];

const ZOD = [
  {
    icon: '📐', title: 'A Zod Schema', titleClass: 'card-title-cyan', subtitle: 'Rules + Type',
    description:
      'Describe the form once with Zod — types and rules together. z.infer turns the schema into a TypeScript type, so the form data and validation never drift apart.',
    code: 'const Schema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8, "Min 8 chars"),\n});\ntype FormData = z.infer<typeof Schema>;',
  },
  {
    icon: '🔗', title: 'zodResolver', titleClass: 'card-title-purple', subtitle: 'Wire Them Together',
    description:
      'Pass zodResolver(Schema) to useForm and every field is validated against Zod. Failed rules populate a typed errors object you render inline.',
    code: 'const { register, handleSubmit, formState: { errors } } =\n  useForm<FormData>({ resolver: zodResolver(Schema) });',
  },
  {
    icon: '⚠️', title: 'Show Errors', titleClass: 'card-title-amber', subtitle: 'Typed & Inline',
    description:
      'errors is typed to your schema, so errors.email?.message is safe. Render it under the field — clear, per-input feedback with zero guesswork.',
    code: '<input {...register("email")} />\n{errors.email && <p className="err">{errors.email.message}</p>}',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'React Hook Form', titleClass: 'card-title-cyan', subtitle: 'Official Docs',
    description:
      'The performant forms library — register, handleSubmit, useController, field arrays and resolvers, all TypeScript-friendly.',
    link: { href: RHF_DOCS, label: 'Open React Hook Form →', external: true },
  },
  {
    icon: '📗', title: 'Zod', titleClass: 'card-title-purple', subtitle: 'Schema Validation',
    description:
      'TypeScript-first schema validation — define once, validate everywhere, and infer the type. The same Zod you met in the TS foundation.',
    link: { href: ZOD_DOCS, label: 'Open Zod docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Global State', titleClass: 'card-title-amber', subtitle: 'Day 20 Preview',
    description:
      'Tomorrow — lightweight global state with Zustand: a typed store outside React, no boilerplate, no context wrapping, and selective re-renders.',
    link: { href: '/day-020', label: 'Go to Day 20 →' },
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

export default function Day019() {
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
          <Link to="/day-018" className="day001-nav-btn day001-nav-prev">← Day 18</Link>
          <p className="day001-datetime">TypeScript Day 19</p>
          <Link to="/day-020" className="day001-nav-btn day001-nav-next">Day 20 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Forms</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 19 <span aria-hidden="true">📝</span></h1>
              <p className="day001-day-theme">FORMS — REACT HOOK FORM + ZOD</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '19%' }} /></div>

        <p className="day001-summary">
          Real forms, done right. A <code>useState</code> per field re-renders the whole form on every keystroke;{' '}
          <strong>React Hook Form</strong> keeps inputs <strong>uncontrolled</strong> (refs), so typing costs almost
          nothing. Spread <code>register("email")</code> onto an input and wrap your handler in{' '}
          <strong>handleSubmit</strong> — it validates, then calls your <em>typed</em> <code>onSubmit</code> only with
          valid data. Validation comes from a <strong>Zod schema</strong> (rules once; <code>z.infer</code> gives the
          type), wired in with <strong>zodResolver</strong>, and <code>formState.errors</code> is typed to your schema
          for inline messages. One schema = validation <em>and</em> type. <em>Next: global state with Zustand.</em>
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

        <CardSection icon="⚡" title="REACT HOOK FORM" cards={RHF} columns={2} />
        <CardSection icon="📐" title="ZOD VALIDATION" cards={ZOD} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactHookForm</span><span>#Zod</span>
        </footer>
      </div>
    </div>
  );
}
