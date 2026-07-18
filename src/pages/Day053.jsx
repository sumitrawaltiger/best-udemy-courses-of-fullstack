import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PRIMER_URL = 'https://github.com/donnemartin/system-design-primer';
const DOCS_URL = 'https://microservices.io/patterns/data/saga.html';

const LEARNT_TODAY = [
  {
    title: 'Core services',
    text: 'catalog, cart, order, payment, inventory',
  },
  {
    title: 'Catalog & search',
    text: 'browse and search a huge product set',
  },
  {
    title: 'Cart',
    text: 'session-based or persisted per user',
  },
  {
    title: 'Checkout & payment',
    text: 'a payment gateway with idempotent charges',
  },
  {
    title: 'Inventory',
    text: 'reserve stock to avoid overselling',
  },
  {
    title: 'Order service',
    text: 'an order lifecycle / state machine',
  },
  {
    title: 'Saga',
    text: 'a distributed transaction across services',
  },
  {
    title: 'Eventual consistency',
    text: 'services sync through events',
  },
  {
    title: 'Caching & CDN',
    text: 'product pages and images served fast',
  },
  {
    title: 'Flash sales',
    text: 'plan for spiky, bursty traffic',
  },
];

const SERVICES = [
  {
    icon: '🛍️',
    title: 'Catalog & Search',
    titleClass: 'card-title-cyan',
    subtitle: 'read-heavy',
    description: 'Browse and search products; cache and index heavily.',
    code: 'catalog-service + search (Elasticsearch)\n// cache hot products + CDN images',
  },
  {
    icon: '🛒',
    title: 'Cart & Checkout',
    titleClass: 'card-title-green',
    subtitle: 'the funnel',
    description: 'Persist the cart, then drive a multi-step checkout.',
    code: 'cart-service (persisted per user)\ncheckout → validate → reserve → pay',
  },
  {
    icon: '💳',
    title: 'Payment',
    titleClass: 'card-title-amber',
    subtitle: 'idempotent',
    description: 'A gateway charges once — protected by an idempotency key.',
    code: 'POST /charge  Idempotency-Key: <uuid>\n// never double-charge on retry',
  },
  {
    icon: '📦',
    title: 'Inventory',
    titleClass: 'card-title-pink',
    subtitle: 'no oversell',
    description: 'Reserve stock at checkout; release if payment fails.',
    code: 'reserve(item, qty) → hold\n  paid?   commit\n  failed? release',
  },
];

const CONSISTENCY = [
  {
    icon: '🔗',
    title: 'Order Saga',
    titleClass: 'card-title-cyan',
    subtitle: 'distributed txn',
    description: 'Chain steps across services with compensating rollbacks.',
    code: 'reserve → pay → ship\nany failure → compensate previous steps',
  },
  {
    icon: '⚡',
    title: 'Caching & CDN',
    titleClass: 'card-title-green',
    subtitle: 'fast reads',
    description: 'Product pages and media are cached at the edge.',
    code: 'product page → cache (TTL)\nimages/video → CDN',
  },
  {
    icon: '🔥',
    title: 'Flash-Sale Scale',
    titleClass: 'card-title-amber',
    subtitle: 'handle spikes',
    description: 'Queue orders, rate-limit, and pre-warm caches for bursts.',
    code: 'queue checkout requests\nrate-limit + waiting room for hot drops',
  },
];

const RESOURCES = [
  {
    icon: '📘',
    title: 'System Design Primer',
    titleClass: 'card-title-purple',
    subtitle: 'GitHub reference',
    description: 'system-design-primer — service decomposition, caching, and scaling.',
    link: { href: PRIMER_URL, label: 'Open on GitHub →', external: true },
  },
  {
    icon: '📗',
    title: 'Saga Pattern',
    titleClass: 'card-title-green',
    subtitle: 'Pattern docs',
    description: 'The saga pattern from microservices.io — distributed transactions.',
    link: { href: DOCS_URL, label: 'Open the docs →', external: true },
  },
  {
    icon: '▶️',
    title: 'E-commerce Architecture',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'eCommerce Architecture & Order Management design — Architecture Bytes — for Day 53.',
    link: {
      href: 'https://www.youtube.com/watch?v=M-l7gVm69KI',
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

export default function Day053() {
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
          <Link to="/day-052" className="day001-nav-btn day001-nav-home">
            ← Day 52
          </Link>
          <p className="day001-datetime">Thunder Day 53</p>
          <Link to="/day-054" className="day001-nav-btn day001-nav-next">
            Day 54 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>System Design</span>
              <span>HLD Case Study</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 53 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">DESIGN AN E-COMMERCE PLATFORM</p>
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
              <p className="day001-profile-role">SYSTEM DESIGN</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '53%' }} />
        </div>

        <p className="day001-summary">
          Day fifty-three — an <strong>e-commerce platform</strong> split into services:{' '}
          <strong>catalog & search</strong>, <strong>cart & checkout</strong>,{' '}
          <strong>payment</strong> (idempotent charges), and <strong>inventory</strong> (reserve
          stock to prevent overselling). An <strong>order saga</strong> coordinates the distributed
          transaction with compensating rollbacks, services sync through <strong>events</strong>, and{' '}
          <strong>caching + CDN</strong> plus queueing carry the read-heavy catalog and{' '}
          <strong>flash-sale</strong> spikes. Reference:{' '}
          <a href={PRIMER_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            system-design-primer
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

        <CardSection icon="🏬" title="THE SERVICES" cards={SERVICES} columns={4} />
        <CardSection icon="🔗" title="CONSISTENCY & SCALE" cards={CONSISTENCY} columns={3} />
        <CardSection icon="📚" title="SYSTEM DESIGN RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#SystemDesign</span>
          <span>#HLD</span>
          <span>#Ecommerce</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
