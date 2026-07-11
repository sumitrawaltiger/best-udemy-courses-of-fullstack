import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day08';
const DOCS_URL = 'https://mongoosejs.com/docs/guide.html';

const LEARNT_TODAY = [
  {
    title: 'ODM',
    text: 'Mongoose maps JavaScript objects to MongoDB documents',
  },
  {
    title: 'Schema',
    text: 'defines the shape — field types, defaults, and rules',
  },
  {
    title: 'Model',
    text: 'mongoose.model(name, schema) gives a collection interface',
  },
  {
    title: 'Validation',
    text: 'required, min/max, enum and match are built into the schema',
  },
  {
    title: 'Connect',
    text: 'mongoose.connect(uri) once at startup',
  },
  {
    title: 'Create',
    text: 'new Model().save() or Model.create({...})',
  },
  {
    title: 'Read',
    text: 'Model.find(), findById() with chainable queries',
  },
  {
    title: 'Update',
    text: 'findByIdAndUpdate(id, data, { new: true }) returns the updated doc',
  },
  {
    title: 'Delete',
    text: 'findByIdAndDelete(id)',
  },
  {
    title: 'Hooks',
    text: 'pre("save") middleware — hash a password before it is stored',
  },
];

const SCHEMA_MODEL = [
  {
    icon: '📐',
    title: 'Schema',
    titleClass: 'card-title-cyan',
    subtitle: 'the shape',
    description: 'Declare fields, types, defaults, and validation in one place.',
    code: 'const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  age:  { type: Number, min: 0 },\n  email:{ type: String, unique: true },\n});',
  },
  {
    icon: '🏭',
    title: 'Model',
    titleClass: 'card-title-green',
    subtitle: 'the interface',
    description: 'Compile a schema into a Model — your handle to the collection.',
    code: 'const User = mongoose.model("User", userSchema);\n// -> "users" collection\nawait mongoose.connect(process.env.MONGO_URI);',
  },
  {
    icon: '🛡️',
    title: 'Validation',
    titleClass: 'card-title-amber',
    subtitle: 'built in',
    description: 'required, min/max, enum and match reject bad data before saving.',
    code: 'role: { type: String, enum: ["user", "admin"], default: "user" }\npassword: { type: String, minLength: 8 }',
  },
];

const CRUD = [
  {
    icon: '➕',
    title: 'Create',
    titleClass: 'card-title-cyan',
    subtitle: 'save / create',
    description: 'Build a document and persist it.',
    code: 'const u = new User({ name: "Rohit", age: 24 });\nawait u.save();\n// or: await User.create({ name: "Rohit" });',
  },
  {
    icon: '🔎',
    title: 'Read',
    titleClass: 'card-title-green',
    subtitle: 'find / findById',
    description: 'Query with chainable filters, sorting, and limits.',
    code: 'await User.find({ age: { $gte: 18 } }).sort("name").limit(10);\nawait User.findById(id);',
  },
  {
    icon: '✏️',
    title: 'Update',
    titleClass: 'card-title-amber',
    subtitle: '{ new: true }',
    description: 'Update and get the new document back with { new: true }.',
    code: 'await User.findByIdAndUpdate(\n  id, { age: 25 }, { new: true, runValidators: true }\n);',
  },
  {
    icon: '🗑️',
    title: 'Delete',
    titleClass: 'card-title-pink',
    subtitle: 'findByIdAndDelete',
    description: 'Remove a document by its id.',
    code: 'await User.findByIdAndDelete(id);',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day08',
    description: 'Schemas, models, validation, and Mongoose CRUD against MongoDB.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Mongoose Docs',
    titleClass: 'card-title-green',
    subtitle: 'Official guide',
    description: 'The official Mongoose guide — schemas, models, queries, and middleware.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Mongoose Crash Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Mongoose Crash Course by Web Dev Simplified — supplement for Day 27.',
    link: {
      href: 'https://www.youtube.com/watch?v=DZBGEVgL2eE',
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

export default function Day027() {
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
        1,
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );

      if (scale < 0.99) {
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'top center';
        if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
      }
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
          <Link to="/day-026" className="day001-nav-btn day001-nav-home">
            ← Day 26
          </Link>
          <p className="day001-datetime">Thunder Day 27 · 31 Jul 2026</p>
          <Link to="/day-028" className="day001-nav-btn day001-nav-next">
            Day 28 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Node.js</span>
              <span>Mongoose</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 27 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MONGOOSE ODM</p>
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
              <p className="day001-profile-role">NODE · THUNDER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '27%' }} />
        </div>

        <p className="day001-summary">
          Day twenty-seven — raw MongoDB has no structure, so I added{' '}
          <strong>Mongoose</strong>, an ODM that maps JavaScript objects to documents. A{' '}
          <strong>Schema</strong> defines the shape and validation; compiling it into a{' '}
          <strong>Model</strong> gives a clean interface for CRUD —{' '}
          <code>create</code>, <code>find</code>, <code>findByIdAndUpdate</code>, and{' '}
          <code>findByIdAndDelete</code>. Hooks like <code>pre(&quot;save&quot;)</code> run logic
          before a write. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day08 on GitHub
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

        <CardSection icon="📐" title="SCHEMAS & MODELS" cards={SCHEMA_MODEL} columns={3} />
        <CardSection icon="🔁" title="MONGOOSE CRUD" cards={CRUD} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 08" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Mongoose</span>
          <span>#MongoDB</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
