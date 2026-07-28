import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const DOCS_URL = 'https://react.dev/learn/passing-props-to-a-component';
const LABS_URL = 'https://react.chaicode.com/';

const LEARNT_TODAY = [
  {
    title: 'Composition',
    text: 'build big UIs by nesting small components',
  },
  {
    title: 'Props',
    text: 'read-only data passed from parent to child',
  },
  {
    title: 'One-way flow',
    text: 'data always flows down the tree',
  },
  {
    title: 'Destructuring',
    text: 'function Card({ title, price }) reads props cleanly',
  },
  {
    title: 'children',
    text: 'whatever you nest between the tags',
  },
  {
    title: 'State',
    text: 'a component’s own data that can change',
  },
  {
    title: 'useState',
    text: 'const [v, setV] = useState(initial)',
  },
  {
    title: 'Re-render',
    text: 'calling setV re-renders with the new value',
  },
  {
    title: 'Props vs state',
    text: 'passed-in and read-only vs owned and mutable',
  },
  {
    title: 'Lifting state up',
    text: 'move shared state to a common parent',
  },
];

const PROPS = [
  {
    icon: '📦',
    title: 'Passing Props',
    titleClass: 'card-title-cyan',
    subtitle: 'parent → child',
    description: 'Pass data down as attributes; children read them.',
    code: '<Card title="Thunder" price={499} />\n\nfunction Card(props) { return <h3>{props.title}</h3>; }',
  },
  {
    icon: '🎁',
    title: 'Destructure & children',
    titleClass: 'card-title-green',
    subtitle: 'clean access',
    description: 'Destructure props; use children for nested content.',
    code: 'function Card({ title, children }) {\n  return <div><h3>{title}</h3>{children}</div>;\n}',
  },
  {
    icon: '⬇️',
    title: 'One-Way Flow',
    titleClass: 'card-title-amber',
    subtitle: 'read-only',
    description: 'Props are immutable; children never edit them directly.',
    code: '// child can NOT do: props.title = "x"\n// to change data, call a parent callback',
  },
];

const STATE = [
  {
    icon: '🎛️',
    title: 'useState',
    titleClass: 'card-title-cyan',
    subtitle: 'local data',
    description: 'A hook that gives a value and a setter.',
    code: 'const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>{count}</button>',
  },
  {
    icon: '🔄',
    title: 'Re-render on Change',
    titleClass: 'card-title-green',
    subtitle: 'reactive',
    description: 'Setting state schedules a re-render with the new value.',
    code: 'setCount(c => c + 1); // functional update\n// UI reflects the latest state automatically',
  },
  {
    icon: '⚖️',
    title: 'Props vs State',
    titleClass: 'card-title-amber',
    subtitle: 'know the diff',
    description: 'Props come from outside; state is owned inside.',
    code: 'props : passed in, read-only\nstate : owned, changeable via setState',
  },
  {
    icon: '⬆️',
    title: 'Lifting State Up',
    titleClass: 'card-title-pink',
    subtitle: 'share it',
    description: 'Two components share state via their closest parent.',
    code: '// parent holds state, passes value + setter down\n<Child value={v} onChange={setV} />',
  },
];

const RESOURCES = [
  {
    icon: '📗',
    title: 'React Docs — Props',
    titleClass: 'card-title-green',
    subtitle: 'react.dev',
    description: 'The official guide to passing props and managing state.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '🧪',
    title: 'ChaiCode React Labs',
    titleClass: 'card-title-purple',
    subtitle: 'Interactive playground',
    description: 'Practice components, props, and state hands-on.',
    link: { href: LABS_URL, label: 'Open the labs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Props in React',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'PROPS in React Explained by Bro Code — supplement for Day 61.',
    link: {
      href: 'https://www.youtube.com/watch?v=uvEAvxWvwOs',
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

export default function Day061() {
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
          <Link to="/day-060" className="day001-nav-btn day001-nav-home">
            ← Day 60
          </Link>
          <p className="day001-datetime">Thunder Day 61 · 2 Mar 2027</p>
          <Link to="/day-062" className="day001-nav-btn day001-nav-next">
            Day 62 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>React</span>
              <span>Frontend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 61 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">COMPONENTS, PROPS & STATE</p>
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
          <div className="day001-progress-bar" style={{ width: '61%' }} />
        </div>

        <p className="day001-summary">
          Day sixty-one — the heart of React: <strong>components, props, and state</strong>.{' '}
          <strong>Props</strong> pass read-only data down the tree (one-way flow), read cleanly with{' '}
          <strong>destructuring</strong> and the <strong>children</strong> prop.{' '}
          <strong>State</strong> is a component’s own changeable data via{' '}
          <code>useState</code> — calling the setter triggers a <strong>re-render</strong>. Know the
          difference (passed-in vs owned), and when two components need the same data,{' '}
          <strong>lift state up</strong> to a shared parent. Practice at{' '}
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

        <CardSection icon="📦" title="PROPS" cards={PROPS} columns={3} />
        <CardSection icon="🎛️" title="STATE" cards={STATE} columns={4} />
        <CardSection icon="📚" title="REACT RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#React</span>
          <span>#Props</span>
          <span>#State</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
