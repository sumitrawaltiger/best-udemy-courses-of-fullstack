import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const GITHUB_URL = 'https://github.com/Rohitnegi9/Thunder/tree/main/03Backend/Day14';
const DOCS_URL = 'https://mongoosejs.com/docs/queries.html';

const LEARNT_TODAY = [
  {
    title: 'Never return everything',
    text: 'a big collection must be paged, not dumped at once',
  },
  {
    title: 'limit & skip',
    text: 'limit is the page size, skip is the offset',
  },
  {
    title: 'page & limit params',
    text: 'read ?page=2&limit=20 from req.query',
  },
  {
    title: 'skip formula',
    text: 'skip = (page - 1) * limit',
  },
  {
    title: 'Filtering',
    text: 'build a query object from req.query fields',
  },
  {
    title: 'Sorting',
    text: '.sort("-createdAt") for newest first',
  },
  {
    title: 'Field selection',
    text: '.select("name price") to trim the response',
  },
  {
    title: 'Search',
    text: 'regex or a text index on a field',
  },
  {
    title: 'Return metadata',
    text: 'send total, page and totalPages to the client',
  },
  {
    title: 'Cursor pagination',
    text: 'scales better than skip for huge datasets',
  },
];

const QUERY = [
  {
    icon: '🔬',
    title: 'Filtering',
    titleClass: 'card-title-cyan',
    subtitle: 'from req.query',
    description: 'Turn query params into a MongoDB filter object.',
    code: 'const filter = {};\nif (req.query.category) filter.category = req.query.category;\nif (req.query.min) filter.price = { $gte: +req.query.min };\nawait Product.find(filter);',
  },
  {
    icon: '↕️',
    title: 'Sorting',
    titleClass: 'card-title-green',
    subtitle: '.sort()',
    description: 'Order results; a leading "-" means descending.',
    code: 'await Product.find().sort("-createdAt"); // newest first\nawait Product.find().sort("price");    // cheapest first',
  },
  {
    icon: '✂️',
    title: 'Field Selection',
    titleClass: 'card-title-amber',
    subtitle: '.select()',
    description: 'Return only the fields the client needs.',
    code: 'await Product.find().select("name price");\n// exclude with a minus: .select("-__v")',
  },
];

const PAGINATION = [
  {
    icon: '📄',
    title: 'limit & skip',
    titleClass: 'card-title-cyan',
    subtitle: 'the primitives',
    description: 'limit caps the page; skip jumps past earlier pages.',
    code: 'const page = +req.query.page || 1;\nconst limit = +req.query.limit || 20;\nawait Product.find().skip((page - 1) * limit).limit(limit);',
  },
  {
    icon: '🔢',
    title: 'Page Params',
    titleClass: 'card-title-green',
    subtitle: '?page=2&limit=20',
    description: 'Sensible defaults, and a cap so no one asks for 10k.',
    code: 'const limit = Math.min(+req.query.limit || 20, 100);',
  },
  {
    icon: '📦',
    title: 'Response Shape',
    titleClass: 'card-title-amber',
    subtitle: 'data + meta',
    description: 'Send the items plus enough metadata to build a pager.',
    code: 'const total = await Product.countDocuments(filter);\nres.json({ data, page, totalPages: Math.ceil(total / limit) });',
  },
  {
    icon: '🧭',
    title: 'Cursor Pagination',
    titleClass: 'card-title-pink',
    subtitle: 'scales further',
    description: 'For huge data, page by a stable key instead of skip.',
    code: '// ?after=<lastId>\nawait Product.find({ _id: { $gt: afterId } }).limit(limit);',
  },
];

const RESOURCES = [
  {
    icon: '💻',
    title: 'Thunder GitHub',
    titleClass: 'card-title-purple',
    subtitle: '03Backend / Day14',
    description: 'Filtering, sorting, field selection, and paginated list endpoints.',
    link: { href: GITHUB_URL, label: 'View on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Mongoose Queries',
    titleClass: 'card-title-green',
    subtitle: 'Official docs',
    description: 'The Mongoose queries guide — find, sort, select, skip, and limit.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'Search, Sort & Paginate',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Search, Sort, Filter & Pagination in a REST API by CyberWolves — for Day 33.',
    link: {
      href: 'https://www.youtube.com/watch?v=0T4GsMYnVN4',
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

export default function Day033() {
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
          <Link to="/day-032" className="day001-nav-btn day001-nav-home">
            ← Day 32
          </Link>
          <p className="day001-datetime">Thunder Day 33</p>
          <Link to="/day-034" className="day001-nav-btn day001-nav-next">
            Day 34 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>REST API</span>
              <span>MongoDB</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 33 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">PAGINATION, FILTERING & SORTING</p>
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
          <div className="day001-progress-bar" style={{ width: '33%' }} />
        </div>

        <p className="day001-summary">
          Day thirty-three — a list endpoint must never dump the whole collection. I added the four
          list features every API needs: <strong>filtering</strong> (build a query from{' '}
          <code>req.query</code>), <strong>sorting</strong> (<code>.sort(&quot;-createdAt&quot;)</code>),{' '}
          <strong>field selection</strong> (<code>.select</code>), and <strong>pagination</strong>{' '}
          with <code>skip</code>/<code>limit</code> plus a metadata envelope (<code>total</code>,{' '}
          <code>page</code>, <code>totalPages</code>). Code in{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            03Backend/Day14 on GitHub
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

        <CardSection icon="🔎" title="QUERY FEATURES" cards={QUERY} columns={3} />
        <CardSection icon="📄" title="PAGINATION" cards={PAGINATION} columns={4} />
        <CardSection icon="📚" title="THUNDER BACKEND DAY 14" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#RESTAPI</span>
          <span>#Pagination</span>
          <span>#Backend</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
