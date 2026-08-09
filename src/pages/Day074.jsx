import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend';
const DOCS_URL = 'https://expressjs.com/en/starter/installing.html';

const LEARNT_TODAY = [
  {
    title: 'Scaffold',
    text: 'an Express server + a MongoDB connection',
  },
  {
    title: 'Models',
    text: 'Mongoose schemas for each entity',
  },
  {
    title: 'Routes & controllers',
    text: 'RESTful CRUD, split cleanly',
  },
  {
    title: 'Auth',
    text: 'register/login with JWT + protect middleware',
  },
  {
    title: 'Validation & errors',
    text: 'validate input; one central error handler',
  },
  {
    title: 'Env config',
    text: '.env with dotenv for secrets',
  },
  {
    title: 'Test endpoints',
    text: 'Postman / Thunder Client while building',
  },
  {
    title: 'CORS',
    text: 'allow the frontend origin to call the API',
  },
  {
    title: 'Seed data',
    text: 'sample records to develop against',
  },
  {
    title: 'Clean structure',
    text: 'models / routes / controllers / middleware',
  },
];

const SETUP = [
  {
    icon: '🏗️',
    title: 'Scaffold + DB',
    titleClass: 'card-title-cyan',
    subtitle: 'the server',
    description: 'Boot Express and connect to MongoDB (Atlas).',
    code: 'const app = express();\napp.use(express.json());\nawait mongoose.connect(process.env.DB_URI);',
  },
  {
    icon: '📐',
    title: 'Models',
    titleClass: 'card-title-green',
    subtitle: 'schemas',
    description: 'Define a Mongoose schema per entity from the plan.',
    code: 'const Task = mongoose.model("Task", new Schema({\n  title: { type: String, required: true },\n  done: { type: Boolean, default: false },\n  user: { type: ObjectId, ref: "User" },\n}));',
  },
  {
    icon: '🎛️',
    title: 'Routes & Controllers',
    titleClass: 'card-title-amber',
    subtitle: 'REST CRUD',
    description: 'Router files stay thin; controllers hold the logic.',
    code: 'router.get("/", getTasks);\nrouter.post("/", createTask);\napp.use("/tasks", protect, taskRouter);',
  },
  {
    icon: '🔐',
    title: 'Auth',
    titleClass: 'card-title-pink',
    subtitle: 'JWT',
    description: 'Hash passwords, issue tokens, protect routes.',
    code: 'const token = jwt.sign({ id }, process.env.JWT_SECRET);\n// protect: verify + attach req.user',
  },
];

const HARDEN = [
  {
    icon: '🧯',
    title: 'Validation & Errors',
    titleClass: 'card-title-cyan',
    subtitle: 'be robust',
    description: 'Validate every input; funnel errors to one handler.',
    code: 'if (!title) return res.status(400)...\napp.use(errorHandler);',
  },
  {
    icon: '⚙️',
    title: 'Env + CORS',
    titleClass: 'card-title-green',
    subtitle: 'config',
    description: 'Secrets in .env; allow the frontend origin.',
    code: 'require("dotenv").config();\napp.use(cors({ origin: FRONTEND_URL }));',
  },
  {
    icon: '🧪',
    title: 'Test + Seed',
    titleClass: 'card-title-amber',
    subtitle: 'verify',
    description: 'Hit endpoints in Postman; seed sample data.',
    code: '// Thunder Client / Postman collection\n// seed script inserts demo records',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder Backend',
    titleClass: 'card-title-purple',
    subtitle: '03Backend',
    description: 'The Thunder backend track — the reference for this capstone API.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Express — Getting Started',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'Install and scaffold an Express server from the docs.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'MERN with Deployment',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'MERN Stack Tutorial with Deployment by freeCodeCamp — for Day 74.',
    link: {
      href: 'https://www.youtube.com/watch?v=F9gB5b4jgOI',
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

export default function Day074() {
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
          <Link to="/day-073" className="day001-nav-btn day001-nav-home">
            ← Day 73
          </Link>
          <p className="day001-datetime">Thunder Day 74 · 19 Aug 2027</p>
          <Link to="/day-075" className="day001-nav-btn day001-nav-next">
            Day 75 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Full-Stack</span>
              <span>Backend</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 74 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">CAPSTONE BUILD I — BACKEND</p>
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
              <p className="day001-profile-role">FULL-STACK</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '74%' }} />
        </div>

        <p className="day001-summary">
          Day seventy-four — build the <strong>backend</strong> from the plan. Scaffold{' '}
          <strong>Express</strong> and connect <strong>MongoDB</strong>, define{' '}
          <strong>Mongoose models</strong>, and expose RESTful <strong>routes + controllers</strong>{' '}
          for CRUD. Add <strong>JWT auth</strong> with a protect middleware, then harden it with{' '}
          <strong>validation</strong>, a central <strong>error handler</strong>,{' '}
          <strong>.env</strong> config, and <strong>CORS</strong> for the frontend — testing each
          endpoint in Postman as you go. Reference:{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Thunder 03Backend
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

        <CardSection icon="🏗️" title="BACKEND SETUP" cards={SETUP} columns={4} />
        <CardSection icon="🛡️" title="HARDEN" cards={HARDEN} columns={3} />
        <CardSection icon="📚" title="CAPSTONE RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#FullStack</span>
          <span>#MERN</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
