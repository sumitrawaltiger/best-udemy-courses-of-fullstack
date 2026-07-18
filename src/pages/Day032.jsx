import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day13';
const DOCS_URL = 'https://mongoosejs.com/docs/populate.html';

const LEARNT_TODAY = [
  {
    title: 'Relationships',
    text: 'model links between documents — a user has many posts',
  },
  {
    title: 'Referencing',
    text: 'store an ObjectId that points to another document',
  },
  {
    title: 'Embedding',
    text: 'nest a subdocument directly inside its parent',
  },
  {
    title: 'ref',
    text: 'the schema option that names the related Model',
  },
  {
    title: 'populate()',
    text: 'swap an id for the full referenced document',
  },
  {
    title: 'One-to-many',
    text: 'the parent (or child) holds an array of refs',
  },
  {
    title: 'Select fields',
    text: 'populate("author", "name email") to trim the payload',
  },
  {
    title: 'Nested populate',
    text: 'populate inside an already-populated document',
  },
  {
    title: 'Embed vs reference',
    text: 'embed small tightly-coupled data; reference large or shared data',
  },
  {
    title: 'No joins',
    text: 'MongoDB has no SQL joins — populate does it in the app layer',
  },
];

const MODELING = [
  {
    icon: '🔗',
    title: 'Reference vs Embed',
    titleClass: 'card-title-cyan',
    subtitle: 'two strategies',
    description: 'Embed small, owned data; reference large or shared data.',
    code: '// embedded\n{ name: "Rohit", address: { city: "Delhi" } }\n\n// referenced\n{ title: "Post", author: ObjectId("665f...") }',
  },
  {
    icon: '🧬',
    title: 'The ref Option',
    titleClass: 'card-title-green',
    subtitle: 'name the model',
    description: 'A field of type ObjectId with ref points at another Model.',
    code: 'const postSchema = new mongoose.Schema({\n  title: String,\n  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },\n});',
  },
  {
    icon: '🌿',
    title: 'One-to-Many',
    titleClass: 'card-title-amber',
    subtitle: 'array of refs',
    description: 'A user has many posts — keep refs on whichever side you query.',
    code: 'const userSchema = new mongoose.Schema({\n  name: String,\n  posts: [{ type: ObjectId, ref: "Post" }],\n});',
  },
];

const POPULATION = [
  {
    icon: '✨',
    title: 'populate()',
    titleClass: 'card-title-cyan',
    subtitle: 'id → document',
    description: 'Replace the stored id with the full referenced document.',
    code: 'const post = await Post.findById(id).populate("author");\n// post.author is now the full User doc',
  },
  {
    icon: '✂️',
    title: 'Select Fields',
    titleClass: 'card-title-green',
    subtitle: 'trim payload',
    description: 'Pull only the fields you need from the referenced doc.',
    code: 'await Post.find().populate("author", "name email");',
  },
  {
    icon: '🪆',
    title: 'Nested Populate',
    titleClass: 'card-title-amber',
    subtitle: 'deep refs',
    description: 'Populate a reference that lives inside another populated doc.',
    code: 'await Post.findById(id).populate({\n  path: "comments",\n  populate: { path: "author", select: "name" },\n});',
  },
  {
    icon: '⚖️',
    title: 'When to Embed',
    titleClass: 'card-title-pink',
    subtitle: 'the trade-off',
    description: 'Embed for read-together, bounded data; reference otherwise.',
    code: '// embed  -> fewer queries, data duplicated\n// ref    -> normalized, needs populate',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day13',
    description: 'Referencing, one-to-many models, and populate across collections.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Mongoose Populate',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The official Mongoose populate guide — refs, paths, and nested populate.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Populate in Mongoose',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Relationships with Populate in Node & Mongoose by CodingHunger — for Day 32.',
    link: {
      href: 'https://www.youtube.com/watch?v=E-jC8ZhOGPk',
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

export default function Day032() {
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
          <Link to="/day-031" className="day001-nav-btn day001-nav-home">
            ← Day 31
          </Link>
          <p className="day001-datetime">Thunder Day 32 · 24 Aug 2026</p>
          <Link to="/day-033" className="day001-nav-btn day001-nav-next">
            Day 33 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Mongoose</span>
              <span>MongoDB</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 32 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">MONGOOSE RELATIONSHIPS & POPULATION</p>
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
          <div className="day001-progress-bar" style={{ width: '32%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-two — real data has <strong>relationships</strong>. MongoDB has no SQL joins, so
          I linked documents two ways: <strong>embedding</strong> small owned data, and{' '}
          <strong>referencing</strong> larger or shared data with an <code>ObjectId</code> and a{' '}
          <code>ref</code>. Then <code>populate()</code> swaps those ids for full documents — with{' '}
          field selection and even <strong>nested</strong> populate. The rule: embed what you read
          together, reference the rest. Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day13 on GitHub
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

        <CardSection icon="🧩" title="DATA MODELING" cards={MODELING} columns={3} />
        <CardSection icon="✨" title="POPULATION" cards={POPULATION} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 13" cards={RESOURCES} columns={3} />

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
