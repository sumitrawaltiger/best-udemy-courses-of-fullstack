import { Link } from 'react-router-dom';
import './Day001.css';

const LEARNT_TODAY = [
  'What JavaScript is — the programming language that adds behavior to the web',
  'How HTML, CSS, and JS work together — structure, style, and interactivity',
  'Adding JavaScript to an HTML page with script tags',
  'Using console.log() in DevTools to debug and learn',
  'Declaring variables with let and const',
  'Writing comments with // and /* */',
  'Building my first program — Hello, Thunder!',
];

const JS_BASICS = [
  {
    icon: '🌐',
    title: 'What is JavaScript?',
    titleClass: 'card-title-cyan',
    subtitle: 'Language of the Web',
    description:
      'JavaScript is the programming language of the web. HTML gives structure, CSS gives style, and JavaScript gives behavior — clicks, forms, animations, and data fetching.',
    footer: '+ Pretty does not mean functional until JS enters',
  },
  {
    icon: '🦴',
    title: 'HTML, CSS & JS',
    titleClass: 'card-title-purple',
    subtitle: 'Skeleton · Style · Brain',
    description:
      'Think of a website like a person: HTML is the skeleton, CSS is the clothes, and JavaScript is the brain and actions. Thunder Lecture01 walks v1-html → v2-css → v3-js.',
    link: { href: '/learn/introduction-to-javascript', label: 'Open Day 1 lesson →' },
  },
  {
    icon: '📜',
    title: 'Adding JS to HTML',
    titleClass: 'card-title-amber',
    subtitle: 'Script Tags',
    description:
      'Place JavaScript inside <script> tags before </body>, or link an external .js file. The browser runs your code when the page loads.',
    code: '<script src="app.js"></script>',
  },
];

const FIRST_CODE = [
  {
    icon: '🖥️',
    title: 'console.log',
    titleClass: 'card-title-green',
    subtitle: 'Your First Debugging Tool',
    description:
      'Open DevTools (F12) and print values to the console. This is how you see output and debug while learning.',
    code: 'console.log("Hello, Thunder!");\nconsole.log(42);',
  },
  {
    icon: '📦',
    title: 'let & const',
    titleClass: 'card-title-blue',
    subtitle: 'Variables',
    description:
      'Use let for values that change and const for values that stay fixed. Avoid var in modern JavaScript.',
    code: 'let score = 0;\nconst course = "Thunder";',
  },
  {
    icon: '💬',
    title: 'Comments',
    titleClass: 'card-title-pink',
    subtitle: '// and /* */',
    description:
      'Single-line comments use //. Multi-line comments use /* ... */. Comments help you and others understand your code.',
    code: '// Day 1 — Introduction to JS\n/* Thunder 100 Days */',
  },
  {
    icon: '🚀',
    title: 'First Program',
    titleClass: 'card-title-lime',
    subtitle: 'Hello, World!',
    description:
      'Combine console.log, variables, and comments into your first working script. Run it in the browser console or a .js file.',
    code: 'let name = "Sumit";\nconsole.log("Learning JS, Day 1:", name);',
  },
];

const THUNDER_RESOURCES = [
  {
    icon: '📓',
    title: 'Lecture 01 — Notion',
    titleClass: 'card-title-cyan',
    subtitle: 'Official Thunder Notes',
    description: 'Introduction to JavaScript — HTML, CSS, JS, console.log, let, const, and your first program.',
    link: {
      href: 'https://app.notion.com/p/Lecture01-Introduction-to-Javascript-37243ac5cab9802293fff4573c26a6f4',
      label: 'Open Notion notes →',
      external: true,
    },
  },
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: 'Lecture01 Code',
    description: 'v1-html, v2-css, and v3-js folders showing how the same page evolves with HTML, CSS, and JavaScript.',
    link: {
      href: 'https://github.com/Rohitnegi9/Thunder/tree/main/02Javascript/Lecture01',
      label: 'View on GitHub →',
      external: true,
    },
  },
  {
    icon: '▶️',
    title: 'Free YouTube',
    titleClass: 'card-title-amber',
    subtitle: 'Traversy Media',
    description: 'JavaScript Crash Course For Beginners — a solid supplement while following the Thunder curriculum.',
    link: {
      href: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
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

function CardSection({ icon, title, cards }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className="day001-card-row">
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day001() {
  return (
    <div className="day001-page">
      <header className="day001-topbar">
        <Link to="/" className="day001-nav-btn day001-nav-home">
          Home
        </Link>
        <p className="day001-datetime">📅 4 Jul 2026 · Thunder Day 1 · JS Learn Hub</p>
        <Link to="/learn/data-types-in-javascript" className="day001-nav-btn day001-nav-next">
          Day 2 →
        </Link>
      </header>

      <div className="day001-hero">
        <div className="day001-hero-left">
          <div className="day001-tags">
            <span>JavaScript</span>
            <span>Thunder</span>
            <span>100 Days</span>
          </div>
          <div className="day001-title-block">
            <h1 className="day001-day-num">
              DAY 1 <span aria-hidden="true">⚡</span>
            </h1>
            <p className="day001-day-theme">OF LEARNING JAVASCRIPT</p>
          </div>
        </div>
        <div className="day001-profile">
          <div className="day001-avatar" aria-hidden="true">
            SR
          </div>
          <div>
            <p className="day001-profile-name">Sumit Rawal</p>
            <p className="day001-profile-role">JS · THUNDER</p>
          </div>
        </div>
      </div>

      <div className="day001-progress-wrap">
        <div className="day001-progress-bar" style={{ width: '1%' }} />
      </div>

      <p className="day001-summary">
        Day one of my 100-day JavaScript journey — I learned what JavaScript is, how HTML/CSS/JS work
        together, how to use <code>console.log</code>, declare variables with <code>let</code> and{' '}
        <code>const</code>, write comments, and run my first Thunder program. The web finally has a
        brain.
      </p>

      <section className="day001-learnt">
        <h2 className="day001-learnt-title">
          <span className="day001-learnt-line" aria-hidden="true" />
          WHAT I LEARNT TODAY
        </h2>
        <ul className="day001-learnt-list">
          {LEARNT_TODAY.map((item) => (
            <li key={item}>
              <span className="day001-check" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <CardSection icon="📘" title="JAVASCRIPT BASICS" cards={JS_BASICS} />
      <CardSection icon="🛠️" title="FIRST STEPS IN CODE" cards={FIRST_CODE} />
      <CardSection icon="⚡" title="THUNDER LECTURE 01" cards={THUNDER_RESOURCES} />

      <footer className="day001-hashtags">
        <span>#100DaysOfCode</span>
        <span>#JavaScript</span>
        <span>#Thunder</span>
        <span>#WebDev</span>
        <span>#JSLearnHub</span>
      </footer>
    </div>
  );
}
