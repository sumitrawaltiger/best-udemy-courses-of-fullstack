import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/reference/react-dom/components/input';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Controlled input',
    text: 'the value comes from React state',
  },
  {
    title: 'onChange',
    text: 'update state on every keystroke',
  },
  {
    title: 'Single source of truth',
    text: 'state, not the DOM, holds the value',
  },
  {
    title: 'Multiple inputs',
    text: 'one handler keyed by the field name',
  },
  {
    title: 'Submit',
    text: 'e.preventDefault() to stop the reload',
  },
  {
    title: 'Validation',
    text: 'derive errors from the current state',
  },
  {
    title: 'Checkbox & select',
    text: 'use checked and value accordingly',
  },
  {
    title: 'Uncontrolled',
    text: 'read values from a ref on submit',
  },
  {
    title: 'Controlled vs not',
    text: 'live control vs less code',
  },
  {
    title: 'Form libraries',
    text: 'React Hook Form for big, complex forms',
  },
];

const CONTROLLED = [
  {
    icon: '🎛️',
    title: 'Controlled Input',
    titleClass: 'card-title-cyan',
    subtitle: 'state-driven',
    description: 'Bind value to state and update it via onChange.',
    code: 'const [email, setEmail] = useState("");\n<input value={email} onChange={e => setEmail(e.target.value)} />',
  },
  {
    icon: '🗝️',
    title: 'Multiple Inputs',
    titleClass: 'card-title-green',
    subtitle: 'one handler',
    description: 'Store a form object; update by input name.',
    code: 'const [form, setForm] = useState({ name: "", email: "" });\nonChange={e => setForm({ ...form, [e.target.name]: e.target.value })}',
  },
  {
    icon: '📤',
    title: 'Submit',
    titleClass: 'card-title-amber',
    subtitle: 'preventDefault',
    description: 'Handle submit in JS; stop the default page reload.',
    code: 'function onSubmit(e) {\n  e.preventDefault();\n  api.post("/signup", form);\n}',
  },
  {
    icon: '✅',
    title: 'Validation',
    titleClass: 'card-title-pink',
    subtitle: 'from state',
    description: 'Compute errors from state and show them live.',
    code: 'const errors = {};\nif (!form.email.includes("@")) errors.email = "Invalid";',
  },
];

const BEYOND = [
  {
    icon: '🏷️',
    title: 'Uncontrolled & Refs',
    titleClass: 'card-title-cyan',
    subtitle: 'the DOM way',
    description: 'Let the DOM hold the value; read it with a ref on submit.',
    code: 'const ref = useRef();\n<input ref={ref} />\n// on submit: ref.current.value',
  },
  {
    icon: '☑️',
    title: 'Checkbox & Select',
    titleClass: 'card-title-green',
    subtitle: 'other inputs',
    description: 'Checkboxes use checked; selects use value.',
    code: '<input type="checkbox" checked={agree}\n  onChange={e => setAgree(e.target.checked)} />',
  },
  {
    icon: '📚',
    title: 'Form Libraries',
    titleClass: 'card-title-amber',
    subtitle: 'scale up',
    description: 'React Hook Form cuts re-renders and boilerplate.',
    code: 'const { register, handleSubmit } = useForm();\n<input {...register("email")} />',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs — Inputs',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official docs for controlled form inputs in React.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Build and validate real forms hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Controlled Components',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'React Controlled vs Uncontrolled Components by Thapa Technical — for Day 64.',
    link: {
      href: 'https://www.youtube.com/watch?v=yzqUCV3qPX0',
      label: 'Watch on YouTube →',
      external: true,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day064() {
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
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };

    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);

    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-063" className="day001-nav-btn day001-nav-home">
            ← Day 63
          </Link>
          <p className="day001-datetime">Thunder Day 64</p>
          <Link to="/day-065" className="day001-nav-btn day001-nav-next">
            Day 65 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Forms</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 64 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">FORMS & CONTROLLED COMPONENTS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">REACT · FRONTEND</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '64%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-four — forms in React. A <strong>controlled input</strong> takes its{' '}
          <code>value</code> from state and updates on <code>onChange</code>, so state is the{' '}
          <strong>single source of truth</strong>. Handle many inputs with one name-keyed handler,{' '}
          <strong>preventDefault</strong> on submit, and derive <strong>validation</strong> errors
          from state. There’s also the <strong>uncontrolled</strong> approach (refs), the right
          handling for checkboxes/selects, and <strong>React Hook Form</strong> for large forms.
          Practice at{' '}
          <a href={LABS_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            ChaiCode React Labs
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🎛️" title="CONTROLLED FORMS" cards={CONTROLLED} columns={4} />
        <CardSection icon="🧩" title="BEYOND" cards={BEYOND} columns={3} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Forms</span>
          <span>#ControlledComponents</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
