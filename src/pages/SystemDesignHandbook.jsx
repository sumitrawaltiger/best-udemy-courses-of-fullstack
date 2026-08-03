import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SD_HANDBOOK_META,
  SD_FUNDAMENTALS,
  SD_TRADEOFFS,
  SD_PATTERNS,
  SD_TEMPLATE_STEPS,
  SD_TIPS,
  SD_COMMON_QUESTIONS,
} from '../data/systemDesignHandbook';
import './SystemDesignHandbook.css';

const TABS = [
  { id: 'fundamentals', label: '20 Fundamentals', icon: '⚙️' },
  { id: 'tradeoffs', label: '11 Trade-offs', icon: '⚖️' },
  { id: 'patterns', label: '5 Patterns', icon: '🏗️' },
  { id: 'template', label: 'Interview Template', icon: '📋' },
  { id: 'tips', label: '40 Tips', icon: '💡' },
  { id: 'questions', label: '10 Questions', icon: '❓' },
];

function bold(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function BodyText({ text }) {
  if (!text) return null;
  return (
    <div className="sdh-body">
      {text.split('\n\n').map((block, b) => {
        const lines = block.split('\n');
        if (lines.length > 1 && lines.every(l => l.trim().startsWith('-'))) {
          return (
            <ul key={b} className="sdh-list">
              {lines.map((l, i) => <li key={i}>{bold(l.trim().slice(1).trim())}</li>)}
            </ul>
          );
        }
        return <p key={b}>{bold(block)}</p>;
      })}
    </div>
  );
}

function Points({ items, title }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      {title && <p className="sdh-points-title">{title}</p>}
      <ol className="sdh-points">
        {items.map((item, i) => <li key={i}>{bold(item)}</li>)}
      </ol>
    </>
  );
}

function BulletPoints({ items, title }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      {title && <p className="sdh-points-title">{title}</p>}
      <ul className="sdh-list">
        {items.map((item, i) => <li key={i}>{bold(item)}</li>)}
      </ul>
    </>
  );
}

function FundamentalsTab() {
  const [open, setOpen] = useState(null);
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        The 20 core concepts every system design interview tests — from scalability and availability to distributed primitives.
      </p>
      <div className="sdh-accordion">
        {SD_FUNDAMENTALS.map((f) => (
          <div
            key={f.id}
            className={`sdh-accordion-item ${open === f.id ? 'is-open' : ''}`}
          >
            <button
              className="sdh-accordion-head"
              onClick={() => setOpen(open === f.id ? null : f.id)}
              aria-expanded={open === f.id}
            >
              <span className="sdh-accordion-num">{String(f.num).padStart(2, '0')}</span>
              <span className="sdh-accordion-icon">{f.icon}</span>
              <span className="sdh-accordion-title">{f.title}</span>
              <span className="sdh-accordion-chevron">{open === f.id ? '▲' : '▼'}</span>
            </button>
            {open === f.id && (
              <div className="sdh-accordion-body">
                <BodyText text={f.body} />
                {f.table && (
                  <div className="sdh-table-wrap">
                    <table className="sdh-table">
                      <thead>
                        <tr>{f.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {f.table.rows.map((row, r) => (
                          <tr key={r}>{row.map((cell, c) => <td key={c}>{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <Points items={f.points} title={f.pointsTitle} />
                <BulletPoints items={f.points2} title={f.points2Title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TradeoffsTab() {
  const [open, setOpen] = useState(null);
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        The 11 fundamental trade-offs every system designer must understand — no perfect answer, only deliberate choices.
      </p>
      <div className="sdh-accordion">
        {SD_TRADEOFFS.map((t) => (
          <div
            key={t.id}
            className={`sdh-accordion-item ${open === t.id ? 'is-open' : ''}`}
          >
            <button
              className="sdh-accordion-head"
              onClick={() => setOpen(open === t.id ? null : t.id)}
              aria-expanded={open === t.id}
            >
              <span className="sdh-accordion-num">{String(t.num).padStart(2, '0')}</span>
              <span className="sdh-accordion-icon">{t.icon}</span>
              <span className="sdh-accordion-title">{t.title}</span>
              <span className="sdh-accordion-chevron">{open === t.id ? '▲' : '▼'}</span>
            </button>
            {open === t.id && (
              <div className="sdh-accordion-body">
                <div className="sdh-versus">
                  <div className="sdh-versus-left">
                    <span className="sdh-versus-label">{t.left.label}</span>
                    <BodyText text={t.left.body} />
                  </div>
                  <div className="sdh-versus-divider">vs</div>
                  <div className="sdh-versus-right">
                    <span className="sdh-versus-label">{t.right.label}</span>
                    <BodyText text={t.right.body} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PatternsTab() {
  const [open, setOpen] = useState(null);
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        The 5 foundational architectural patterns — client-server, microservices, serverless, event-driven, and P2P.
      </p>
      <div className="sdh-pattern-grid">
        {SD_PATTERNS.map((p) => (
          <div
            key={p.id}
            className={`sdh-pattern-card ${open === p.id ? 'is-open' : ''}`}
            onClick={() => setOpen(open === p.id ? null : p.id)}
            role="button"
            aria-expanded={open === p.id}
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setOpen(open === p.id ? null : p.id)}
          >
            <div className="sdh-pattern-head">
              <span className="sdh-pattern-icon">{p.icon}</span>
              <span className="sdh-pattern-num">{String(p.num).padStart(2, '0')}</span>
              <h3 className="sdh-pattern-title">{p.title}</h3>
              <span className="sdh-accordion-chevron">{open === p.id ? '▲' : '▼'}</span>
            </div>
            {open === p.id && (
              <div className="sdh-pattern-body">
                <BodyText text={p.body} />
                <BulletPoints items={p.points} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TemplateTab() {
  const [open, setOpen] = useState(1);
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        A 7-step framework for approaching any system design interview — from requirements to reliability.
      </p>
      <div className="sdh-steps">
        {SD_TEMPLATE_STEPS.map((s) => (
          <div
            key={s.num}
            className={`sdh-step ${open === s.num ? 'is-open' : ''}`}
          >
            <button
              className="sdh-step-head"
              onClick={() => setOpen(open === s.num ? null : s.num)}
              aria-expanded={open === s.num}
            >
              <span className="sdh-step-num">Step {s.num}</span>
              <span className="sdh-step-icon">{s.icon}</span>
              <span className="sdh-step-title">{s.title}</span>
              <span className="sdh-accordion-chevron">{open === s.num ? '▲' : '▼'}</span>
            </button>
            {open === s.num && (
              <div className="sdh-step-body">
                <BodyText text={s.body} />
                {s.functional && (
                  <>
                    <p className="sdh-points-title">Functional Requirements:</p>
                    <ul className="sdh-list">
                      {s.functional.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                    <p className="sdh-points-title">Non-Functional Requirements:</p>
                    <ul className="sdh-list">
                      {s.nonFunctional.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                  </>
                )}
                {s.points && <BulletPoints items={s.points} title={s.pointsTitle} />}
                {s.note && <p className="sdh-note"><strong>Note:</strong> {s.note}</p>}
                {s.scalability && (
                  <>
                    <p className="sdh-points-title">{s.scalabilityTitle}</p>
                    <ul className="sdh-list">
                      {s.scalability.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                    <p className="sdh-points-title">{s.reliabilityTitle}</p>
                    <ul className="sdh-list">
                      {s.reliability.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                  </>
                )}
                {s.storage && (
                  <>
                    <p className="sdh-points-title">{s.storageTitle}</p>
                    <ul className="sdh-list">
                      {s.storage.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TipsTab() {
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        40 actionable tips to level up your system design interviews — memorise these, apply them in every answer.
      </p>
      <ol className="sdh-tips-list">
        {SD_TIPS.map((tip, i) => (
          <li key={i} className="sdh-tip-item">
            <span className="sdh-tip-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="sdh-tip-text">{bold(tip)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function QuestionsTab() {
  const [open, setOpen] = useState(null);
  return (
    <div className="sdh-section">
      <p className="sdh-section-desc">
        The 10 most common system design interview questions — with functional and non-functional requirements outlined for each.
      </p>
      <div className="sdh-accordion">
        {SD_COMMON_QUESTIONS.map((q) => (
          <div
            key={q.id}
            className={`sdh-accordion-item ${open === q.id ? 'is-open' : ''}`}
          >
            <button
              className="sdh-accordion-head"
              onClick={() => setOpen(open === q.id ? null : q.id)}
              aria-expanded={open === q.id}
            >
              <span className="sdh-accordion-num">{String(q.num).padStart(2, '0')}</span>
              <span className="sdh-accordion-icon">{q.icon}</span>
              <span className="sdh-accordion-title">{q.title}</span>
              <span className="sdh-accordion-chevron">{open === q.id ? '▲' : '▼'}</span>
            </button>
            {open === q.id && (
              <div className="sdh-accordion-body">
                <div className="sdh-req-grid">
                  <div>
                    <p className="sdh-points-title">Functional Requirements:</p>
                    <ul className="sdh-list">
                      {q.functional.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="sdh-points-title">Non-Functional Requirements:</p>
                    <ul className="sdh-list">
                      {q.nonFunctional.map((item, i) => <li key={i}>{bold(item)}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SystemDesignHandbook() {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="sdh-page">
      <header className="sdh-hero">
        <div className="sdh-hero-inner">
          <div className="sdh-hero-badge">📐 System Design · Interview Handbook</div>
          <h1 className="sdh-hero-title">{SD_HANDBOOK_META.title}</h1>
          <p className="sdh-hero-sub">{SD_HANDBOOK_META.subtitle}</p>
          <div className="sdh-hero-stats">
            <div className="sdh-stat"><span className="sdh-stat-num">20</span><span className="sdh-stat-label">Fundamentals</span></div>
            <div className="sdh-stat"><span className="sdh-stat-num">11</span><span className="sdh-stat-label">Trade-offs</span></div>
            <div className="sdh-stat"><span className="sdh-stat-num">5</span><span className="sdh-stat-label">Patterns</span></div>
            <div className="sdh-stat"><span className="sdh-stat-num">7</span><span className="sdh-stat-label">Interview Steps</span></div>
            <div className="sdh-stat"><span className="sdh-stat-num">40</span><span className="sdh-stat-label">Tips</span></div>
            <div className="sdh-stat"><span className="sdh-stat-num">10</span><span className="sdh-stat-label">Questions</span></div>
          </div>
          <div className="sdh-hero-links">
            <Link to="/interview-questions" className="sdh-btn sdh-btn-ghost">← Interview Q&amp;A</Link>
            <Link to="/microservices-interview-questions" className="sdh-btn sdh-btn-ghost">Microservices Q&amp;A →</Link>
          </div>
        </div>
      </header>

      <nav className="sdh-tabs" role="tablist" aria-label="Handbook sections">
        {TABS.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`sdh-tab ${activeTab === tab.id ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="sdh-tab-icon">{tab.icon}</span>
            <span className="sdh-tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="sdh-main">
        {activeTab === 'fundamentals' && <FundamentalsTab />}
        {activeTab === 'tradeoffs' && <TradeoffsTab />}
        {activeTab === 'patterns' && <PatternsTab />}
        {activeTab === 'template' && <TemplateTab />}
        {activeTab === 'tips' && <TipsTab />}
        {activeTab === 'questions' && <QuestionsTab />}
      </main>

      <footer className="sdh-footer">
        <p>
          Source: <em>System Design Interview Handbook</em> by{' '}
          <strong>blog.algomaster.io</strong> · Extracted for quick reference.
        </p>
        <div className="sdh-footer-links">
          <Link to="/interview-questions" className="sdh-footer-link">Interview Q&amp;A Hub</Link>
          <Link to="/microservices-interview-questions" className="sdh-footer-link">Microservices</Link>
          <Link to="/devops-interview-questions" className="sdh-footer-link">DevOps</Link>
          <Link to="/kafka-interview-questions" className="sdh-footer-link">Kafka</Link>
        </div>
      </footer>
    </div>
  );
}
