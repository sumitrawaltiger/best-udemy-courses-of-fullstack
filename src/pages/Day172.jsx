import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const TX = 'https://www.postgresql.org/docs/current/tutorial-transactions.html';
const ISO = 'https://www.postgresql.org/docs/current/transaction-iso.html';
const PRISMA_TX = 'https://www.prisma.io/docs/orm/prisma-client/queries/transactions';

const LEARNT_TODAY = [
  { title: 'Why transactions', text: 'multi-step writes must all succeed or all fail — no half-created orders' },
  { title: 'ACID', text: 'Atomicity, Consistency, Isolation, Durability — the contract of a serious DB' },
  { title: 'BEGIN / COMMIT', text: 'group statements; ROLLBACK undoes everything on error' },
  { title: 'Isolation levels', text: 'Read Committed is Postgres default; Serializable is stricter and slower' },
  { title: 'Lost updates', text: 'two readers overwrite each other — use row locks or optimistic versioning' },
  { title: 'Prisma $transaction', text: 'interactive or sequential transactions in the client you already use' },
  { title: 'Keep them short', text: 'long transactions hold locks and hurt throughput' },
  { title: 'Idempotent APIs', text: 'retries + unique constraints beat “hope the client only clicked once”' },
  { title: 'Money & inventory', text: 'classic cases where partial writes are unacceptable' },
];

const CORE = [
  {
    icon: '🔒', title: 'SQL Sketch', titleClass: 'card-title-cyan', subtitle: 'BEGIN…COMMIT',
    description: 'Debit and credit in one transaction so balances never diverge.',
    code: 'BEGIN;\nUPDATE accounts SET bal = bal - 10 WHERE id = 1;\nUPDATE accounts SET bal = bal + 10 WHERE id = 2;\nCOMMIT;',
  },
  {
    icon: '◇', title: 'Prisma Transaction', titleClass: 'card-title-purple', subtitle: '$transaction',
    description: 'Pass an array of queries or an async function that uses the tx client.',
    code: 'await prisma.$transaction(async (tx) => {\n  await tx.order.create({ data: order });\n  await tx.stock.update({ where: { id }, data: { qty: { decrement: 1 } } });\n});',
  },
  {
    icon: '🏷️', title: 'Optimistic Lock', titleClass: 'card-title-amber', subtitle: 'version Column',
    description: 'Update only if version matches; retry or fail when another writer won.',
    code: 'UPDATE tasks SET title = $1, version = version + 1\nWHERE id = $2 AND version = $3;',
  },
];

const PRACTICE = [
  {
    icon: '⚠️', title: 'Deadlocks', titleClass: 'card-title-cyan', subtitle: 'Order Locks',
    description: 'Lock rows in a consistent order (e.g. lower id first) to reduce deadlock cycles.',
    code: '// always lock account A then B\n'// retry on deadlock error',
  },
  {
    icon: '⏱️', title: 'Short Critical Sections', titleClass: 'card-title-purple', subtitle: 'Perf',
    description: 'Do validation and external HTTP outside the transaction when you can.',
    code: '// validate → BEGIN writes → COMMIT\n'// then send email',
  },
  {
    icon: '🔁', title: 'Idempotency Key', titleClass: 'card-title-amber', subtitle: 'APIs',
    description: 'Store a unique idempotency key for POSTs so retries do not double-charge.',
    code: 'UNIQUE(idempotency_key)\n// second POST returns same result',
  },
  {
    icon: '🔜', title: 'Next: Kafka', titleClass: 'card-title-lime', subtitle: 'Day 173 Preview',
    description: 'Tomorrow: Apache Kafka — topics, producers, and why logs beat chatty RPC for streams.',
    link: { href: '/day-173', label: 'Go to Day 173 →' },
  },
];

const RESOURCES = [
  {
    icon: '🔒', title: 'Transactions', titleClass: 'card-title-cyan', subtitle: 'Postgres',
    description: 'Tutorial on BEGIN, COMMIT, and ROLLBACK.',
    link: { href: TX, label: 'Read transactions tutorial →', external: true },
  },
  {
    icon: '📊', title: 'Isolation', titleClass: 'card-title-purple', subtitle: 'Postgres',
    description: 'Isolation levels and anomalies.',
    link: { href: ISO, label: 'Read isolation docs →', external: true },
  },
  {
    icon: '◇', title: 'Prisma Transactions', titleClass: 'card-title-amber', subtitle: 'Docs',
    description: 'Sequential and interactive transactions.',
    link: { href: PRISMA_TX, label: 'Read Prisma tx docs →', external: true },
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

export default function Day172() {
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
          <Link to="/day-171" className="day001-nav-btn day001-nav-prev">← Day 171</Link>
          <p className="day001-datetime">Data Day 172</p>
          <Link to="/day-173" className="day001-nav-btn day001-nav-next">Day 173 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>PostgreSQL</span><span>Year 1</span><span>ACID</span><span>Transactions</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 172 <span aria-hidden="true">🔒</span></h1>
              <p className="day001-day-theme">TRANSACTIONS &amp; CONSISTENCY</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">DATA · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '48%' }} /></div>

        <p className="day001-summary">
          Day 172 protects multi-step writes. Use <strong>transactions</strong>, understand{' '}
          <strong>isolation</strong>, prefer <strong>short critical sections</strong>, and make POSTs{' '}
          <strong>idempotent</strong>.
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

        <CardSection icon="🔒" title="1 · TRANSACTIONS" cards={CORE} columns={3} />
        <CardSection icon="⚠️" title="2 · LOCKS & IDEMPOTENCY" cards={PRACTICE} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#PostgreSQL</span><span>#ACID</span><span>#Prisma</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
