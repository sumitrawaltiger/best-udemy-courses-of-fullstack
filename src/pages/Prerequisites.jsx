import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PREREQ_DAYS, PREREQ_GROUPS, PREREQ_META } from '../data/jsPrereqNotes';
import './Prerequisites.css';

const ALL = 'all';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Prerequisites() {
  const [group, setGroup] = useState(ALL);
  const days = group === ALL ? PREREQ_DAYS : PREREQ_DAYS.filter((d) => d.group === group);

  return (
    <div className="prereq-page">
      <section className="prereq-hero">
        <span className="prereq-hero-badge">🟨 JavaScript · Illustrated Series</span>
        <h1 className="prereq-hero-title">{PREREQ_META.title}</h1>
        <p className="prereq-hero-sub">{PREREQ_META.blurb}</p>
        <div className="prereq-hero-actions">
          <Link to="/javascript/day/1" className="prereq-btn prereq-btn-primary">
            Start at Day 1 →
          </Link>
          <a
            href={PREREQ_META.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="prereq-btn prereq-btn-ghost"
          >
            ↗ Open the full PDF
          </a>
        </div>
        <div className="prereq-stats">
          <div className="prereq-stat">
            <span className="prereq-stat-value">47</span>
            <span className="prereq-stat-label">days · episodes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">7</span>
            <span className="prereq-stat-label">themes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">1995→</span>
            <span className="prereq-stat-label">origins to the engine</span>
          </div>
        </div>
      </section>

      <section className="prereq-note">
        <p>
          47 illustrated episodes covering the full JavaScript language — from the history and origin of JS
          through core syntax, the engine internals, async patterns, OOP, and advanced features. Theory
          companion to the JavaScript curriculum.
        </p>
      </section>

      <div className="prereq-filters" role="tablist" aria-label="Filter by theme">
        <button
          type="button"
          role="tab"
          aria-selected={group === ALL}
          className={`prereq-filter ${group === ALL ? 'active' : ''}`}
          onClick={() => setGroup(ALL)}
        >
          <span aria-hidden="true">🗂️</span> All 47 days
        </button>
        {PREREQ_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={group === g.id}
            className={`prereq-filter prereq-filter-${g.id} ${group === g.id ? 'active' : ''}`}
            onClick={() => setGroup(g.id)}
          >
            <span aria-hidden="true">{g.icon}</span> {g.label}
          </button>
        ))}
      </div>

      {group !== ALL && (
        <p className="prereq-group-desc">
          {PREREQ_GROUPS.find((g) => g.id === group)?.desc}
        </p>
      )}

      <section className="prereq-grid">
        {days.map((d) => (
          <Link key={d.day} to={`/javascript/day/${d.day}`} className={`prereq-card prereq-card-${d.group}`}>
            <div className="prereq-card-top">
              <span className="prereq-card-day">Day {pad(d.day)}</span>
              <span className="prereq-card-ep">EP {pad(d.day)}</span>
            </div>
            <img className="prereq-card-thumb" src={d.image} alt="" loading="lazy" />
            <h2 className="prereq-card-title">{d.title}</h2>
            <p className="prereq-card-tagline">{d.tagline}</p>
            <div className="prereq-card-tags">
              {d.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <span className="prereq-card-cta">Read the notes →</span>
          </Link>
        ))}
      </section>

      <footer className="prereq-footer">
        <p>
          Notes written from <em>The JavaScript Series</em> — 47 illustrated episodes. The complete
          set is also in the{' '}
          <Link to="/cheat-sheets">cheat sheets</Link> as a single PDF.
        </p>
      </footer>
    </div>
  );
}
