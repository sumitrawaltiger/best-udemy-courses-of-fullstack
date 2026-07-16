import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const REACT_EVENTS = 'https://react.dev/learn/responding-to-events';
const TS_PLAYGROUND = 'https://www.typescriptlang.org/play';

const LEARNT_TODAY = [
  { title: 'Synthetic events', text: 'React wraps DOM events in typed SyntheticEvent objects' },
  { title: 'onChange typing', text: 'React.ChangeEvent<HTMLInputElement> gives e.target.value as string' },
  { title: 'onSubmit typing', text: 'React.FormEvent<HTMLFormElement> — call e.preventDefault()' },
  { title: 'onClick typing', text: 'React.MouseEvent<HTMLButtonElement> for button handlers' },
  { title: 'Controlled inputs', text: 'value + onChange keep React state as the single source of truth' },
  { title: 'Inline vs named handlers', text: 'inline handlers infer the event; named handlers need an annotation' },
  { title: 'Multiple inputs', text: 'one handler with e.target.name updates a typed form object' },
  { title: 'Selects & checkboxes', text: 'checked for checkboxes, value for selects — each typed correctly' },
  { title: 'Validation + Zod', text: 'parse the form object with a schema before submitting' },
  { title: 'Form libraries', text: 'React Hook Form + Zod give typed, validated forms with less code' },
];

const EVENTS = [
  {
    icon: '🖱️', title: 'Event Types', titleClass: 'card-title-cyan', subtitle: 'React.*Event',
    description: 'React events are typed generics over the element. onClick gets a MouseEvent, onChange a ChangeEvent — each knowing the right target properties.',
    code: 'function onClick(e: React.MouseEvent<HTMLButtonElement>) {\n  console.log(e.currentTarget.name);\n}',
  },
  {
    icon: '⌨️', title: 'onChange', titleClass: 'card-title-purple', subtitle: 'Read Input Values',
    description: 'Type the change event with the input element and e.target.value is a typed string — the basis of every controlled input.',
    code: 'function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n  setName(e.target.value);\n}',
  },
  {
    icon: '📨', title: 'onSubmit', titleClass: 'card-title-amber', subtitle: 'Handle Submits',
    description: 'Type the submit event with the form element, call preventDefault to stop the page reload, then read and validate the form’s state.',
    code: 'function onSubmit(e: React.FormEvent<HTMLFormElement>) {\n  e.preventDefault();\n  submit(form);\n}',
  },
];

const FORMS = [
  {
    icon: '🎛️', title: 'Controlled Inputs', titleClass: 'card-title-cyan', subtitle: 'State As Truth',
    description: 'A controlled input reads value from state and writes back via onChange. React state is the single source of truth, and TypeScript types both ends.',
    code: 'const [name, setName] = useState("");\n<input value={name}\n  onChange={(e) => setName(e.target.value)} />',
  },
  {
    icon: '🧩', title: 'One Object, Many Inputs', titleClass: 'card-title-blue', subtitle: 'name + spread',
    description: 'Keep the whole form as one typed object and update the field matching e.target.name — a single handler for many inputs, fully typed.',
    code: 'const [form, setForm] = useState<Form>({ name: "", email: "" });\nconst set = (e: React.ChangeEvent<HTMLInputElement>) =>\n  setForm((f) => ({ ...f, [e.target.name]: e.target.value }));',
  },
  {
    icon: '☑️', title: 'Checkboxes & Selects', titleClass: 'card-title-amber', subtitle: 'checked vs value',
    description: 'Read checkboxes with e.target.checked (boolean) and selects with e.target.value. TypeScript exposes exactly the right property per element.',
    code: 'const agree = e.target.checked; // boolean\nconst role = e.target.value;    // string',
  },
  {
    icon: '🛡️', title: 'Validate On Submit', titleClass: 'card-title-lime', subtitle: 'Zod Schema',
    description: 'Before acting, parse the form object with a Zod schema. You get typed data on success and field errors on failure — reused from Day 16.',
    code: 'const r = FormSchema.safeParse(form);\nif (!r.success) setErrors(r.error.format());',
  },
];

const LIBS = [
  {
    icon: '📚', title: 'React Hook Form', titleClass: 'card-title-cyan', subtitle: 'Less Boilerplate',
    description: 'For real forms, React Hook Form manages state, validation, and errors with great TypeScript support — far less code than wiring inputs by hand.',
    code: 'const { register, handleSubmit } = useForm<Form>();',
  },
  {
    icon: '🔗', title: 'RHF + Zod', titleClass: 'card-title-purple', subtitle: 'Typed & Validated',
    description: 'Pair React Hook Form with a Zod resolver to get one schema driving both the types and the validation — the modern typed-forms stack.',
    code: 'useForm<Form>({ resolver: zodResolver(FormSchema) });',
  },
  {
    icon: '🎯', title: 'currentTarget vs target', titleClass: 'card-title-amber', subtitle: 'Know The Difference',
    description: 'currentTarget is the element the handler is attached to (well-typed); target is where the event originated (broader). Prefer currentTarget for safety.',
    code: 'e.currentTarget.value; // typed to the bound element',
  },
  {
    icon: '🔜', title: 'Next: useReducer', titleClass: 'card-title-lime', subtitle: 'Day 26 Preview',
    description: 'Tomorrow: managing complex state with useReducer — typed state, discriminated action unions, and exhaustive reducers.',
    link: { href: '/day-026', label: 'Go to Day 26 →' },
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Responding To Events', titleClass: 'card-title-cyan', subtitle: 'react.dev',
    description: 'React’s guide to event handlers — the mental model and patterns that the TypeScript event types build directly on top of.',
    link: { href: REACT_EVENTS, label: 'Read the events guide →', external: true },
  },
  {
    icon: '🎮', title: 'TS Playground', titleClass: 'card-title-purple', subtitle: 'Type A Handler',
    description: 'Write an onChange handler and hover e.target to confirm value is a string. Then try onSubmit and see the form element type.',
    link: { href: TS_PLAYGROUND, label: 'Open the Playground →', external: true },
  },
  {
    icon: '🗺️', title: 'Where This Fits', titleClass: 'card-title-amber', subtitle: 'Year 1 · TypeScript',
    description: 'Forms are where users meet your app. Typed events + Zod validation make them robust — a pattern you’ll reuse on every screen.',
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

export default function Day025() {
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
          <Link to="/day-024" className="day001-nav-btn day001-nav-prev">← Day 24</Link>
          <p className="day001-datetime">TypeScript Day 25 · 10 Aug 2026</p>
          <Link to="/day-026" className="day001-nav-btn day001-nav-next">Day 26 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>Events · Forms</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 25 <span aria-hidden="true">📨</span></h1>
              <p className="day001-day-theme">EVENTS & FORMS IN REACT TS</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '25%' }} /></div>

        <p className="day001-summary">
          Day 25 types user input. React’s <strong>synthetic events</strong> are typed generics — I used{' '}
          <code>ChangeEvent</code>, <code>FormEvent</code>, and <code>MouseEvent</code> to read values and handle
          submits. I built <strong>controlled inputs</strong> with React state as the source of truth, updated a
          single typed form object across many inputs via <code>e.target.name</code>, handled checkboxes/selects,
          and <strong>validated</strong> with Zod on submit — then saw how React Hook Form + Zod cut the boilerplate.
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

        <CardSection icon="🖱️" title="TYPED EVENTS" cards={EVENTS} columns={3} />
        <CardSection icon="🎛️" title="CONTROLLED FORMS" cards={FORMS} columns={4} />
        <CardSection icon="📚" title="LIBRARIES & DETAILS" cards={LIBS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#React</span><span>#Forms</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
