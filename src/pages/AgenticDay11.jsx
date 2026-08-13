import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SQLITE_DOCS = 'https://docs.python.org/3/library/sqlite3.html';

const LEARNT_TODAY = [
  { title: 'CRUD', text: 'Create, Read, Update, Delete — the four operations every app needs against a database' },
  { title: 'Relational vs non-relational', text: 'tables (MySQL, SQLite, Postgres) vs documents/key-value (MongoDB, Redis)' },
  { title: 'SQLite', text: 'a whole database in one file — no server, no password; Python\'s sqlite3 module is built-in' },
  { title: 'connect → cursor → execute', text: 'open a connection, get a cursor, run SQL, then commit() writes and close() when done' },
  { title: 'Parameterized queries', text: 'use ? (SQLite) or %s (MySQL) placeholders — never paste user input into SQL strings' },
  { title: 'fetchall / fetchone', text: 'fetchall() returns every matching row; fetchone() returns a single row (or None)' },
  { title: 'MySQL connector', text: 'pip install mysql-connector-python, then connect with host, port, user, password, database' },
  { title: 'Assignment', text: 'build a menu-driven Student Management System with full CRUD on MySQL' },
];

const SQLITE = [
  {
    icon: '🗄️', title: 'SQLite CRUD Shape', titleClass: 'card-title-cyan', subtitle: 'File Database',
    description:
      'Connect to a .db file (created if missing), create a cursor, run SQL, commit writes, and close. Perfect for learning and small apps.',
    code: 'import sqlite3\nconn = sqlite3.connect("students.db")\ncur = conn.cursor()\ncur.execute("""\n  CREATE TABLE IF NOT EXISTS students (\n    student_id INTEGER PRIMARY KEY AUTOINCREMENT,\n    student_name TEXT,\n    student_email TEXT UNIQUE,\n    student_course TEXT,\n    student_fee REAL\n  )\n""")\nconn.commit()\nconn.close()',
  },
  {
    icon: '🛡️', title: 'Parameterized Insert', titleClass: 'card-title-purple', subtitle: 'No SQL Injection',
    description:
      'Pass values as a tuple with ? placeholders. The driver handles quoting — safer and cleaner than f-strings in SQL.',
    code: 'sql = """INSERT INTO students\n  (student_name, student_email, student_course, student_fee)\n  VALUES (?, ?, ?, ?)"""\ncur.execute(sql, (name, email, course, fee))\nconn.commit()',
  },
];

const MYSQL = [
  {
    icon: '🐬', title: 'MySQL Setup', titleClass: 'card-title-cyan', subtitle: 'Server + Connector',
    description:
      'Install MySQL Server/Workbench, create a virtualenv, then pip install mysql-connector-python. MySQL placeholders use %s, not ?.',
    code: 'python -m venv venv\n# activate, then:\npip install mysql-connector-python\n\nconn = mysql.connector.connect(\n  host="localhost", port="3306",\n  user="root", passwd="root",\n  database="student")',
  },
  {
    icon: '📋', title: 'Insert & View', titleClass: 'card-title-purple', subtitle: 'CRUD Core',
    description:
      'Separate functions for add_student() and view_all_students(). Always commit after writes and close the connection.',
    code: 'sql = """INSERT INTO students\n  (student_name, student_email, student_course, student_fee)\n  VALUES (%s, %s, %s, %s)"""\ncursor.execute(sql, values)\nconnection.commit()',
  },
  {
    icon: '🎓', title: 'Student SMS Assignment', titleClass: 'card-title-amber', subtitle: 'Menu-Driven CRUD',
    description:
      'Build add / view all / view by id / update / delete / exit. Auto-create the table, block duplicate emails, confirm deletes, handle errors.',
    footer: 'CRUD + parameterized queries + clean close',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Database Connectivity', titleClass: 'card-title-cyan', subtitle: 'PY Module 11',
    description: 'Full lesson — SQLite, MySQL, CRUD, and the student management assignment.',
    link: { href: '/python/learn/database-connectivity-in-python', label: 'Open PY Module 11 →' },
  },
  {
    icon: '📖', title: 'sqlite3 — Docs', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'Official sqlite3 module reference for connections, cursors, and parameterized queries.',
    link: { href: SQLITE_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data Science Intro', titleClass: 'card-title-amber', subtitle: 'Day 12 Preview',
    description: 'Tomorrow — NumPy, Pandas, and the data science workflow that feeds ML/NLP.',
    link: { href: '/agentic-day-12', label: 'Go to Day 12 →' },
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

export default function AgenticDay11() {
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
          <Link to="/agentic-day-10" className="day001-nav-btn day001-nav-prev">← Day 10</Link>
          <p className="day001-datetime">Agentic AI Day 11 · 23 Aug 2026</p>
          <Link to="/agentic-day-12" className="day001-nav-btn day001-nav-next">Day 12 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>Databases</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 11 <span aria-hidden="true">🗄️</span></h1>
              <p className="day001-day-theme">DATABASE CONNECTIVITY IN PYTHON</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '7%' }} /></div>

        <p className="day001-summary">
          Python talks to real data stores. Learn <strong>CRUD</strong>, start with file-based{' '}
          <strong>SQLite</strong>, then connect to <strong>MySQL</strong> with parameterized queries —
          and finish with a student management assignment.
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

        <CardSection icon="🗄️" title="SQLITE" cards={SQLITE} columns={2} />
        <CardSection icon="🐬" title="MYSQL &amp; ASSIGNMENT" cards={MYSQL} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day11</span><span>#SQLite</span><span>#MySQL</span>
        </footer>
      </div>
    </div>
  );
}
