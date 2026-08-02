import { useState } from 'react';
import { Link } from 'react-router-dom';
import { REACT_DAYS, REACT_GROUPS, REACT_META } from '../data/reactNotes';
import './Prerequisites.css';

const ALL = 'all';

function pad(n) {
  return String(n).padStart(2, '0');
}

function CardThumb({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="prereq-card-thumb prereq-card-thumb-missing">
        <span aria-hidden="true">🖼️</span> Image coming soon
      </div>
    );
  }
  return (
    <img
      className="prereq-card-thumb"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ReactSeries() {
  const [group, setGroup] = useState(ALL);
  const days = group === ALL ? REACT_DAYS : REACT_DAYS.filter((d) => d.group === group);

  return (
    <div className="prereq-page">
      <section className="prereq-hero">
        <span className="prereq-hero-badge">⚛️ React · Illustrated Series</span>
        <h1 className="prereq-hero-title">{REACT_META.title}</h1>
        <p className="prereq-hero-sub">{REACT_META.blurb}</p>
        <div className="prereq-hero-actions">
          <Link to="/react/day/1" className="prereq-btn prereq-btn-primary">
            Start at Episode 1 →
          </Link>
          <Link to="/typescript" className="prereq-btn prereq-btn-ghost">
            ← TypeScript Series
          </Link>
        </div>
        <div className="prereq-stats">
          <div className="prereq-stat">
            <span className="prereq-stat-value">{REACT_DAYS.length}</span>
            <span className="prereq-stat-label">episodes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">{REACT_GROUPS.length}</span>
            <span className="prereq-stat-label">themes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">React→Stack</span>
            <span className="prereq-stat-label">Hooks, Router, State &amp; Patterns</span>
          </div>
        </div>
      </section>

      <section className="prereq-note">
        <p>
          React is <strong>JavaScript for building UIs</strong> — components, state, and the Virtual DOM.
          These episodes go from the very first component through <strong>hooks, routing, state management,
          and performance patterns</strong>, each with the full written notes and every code snippet.
          Comes after the <Link to="/typescript">TypeScript Series</Link> in the 2028 TypeScript Stack.
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
          <span aria-hidden="true">🗂️</span> All {REACT_DAYS.length} episodes
        </button>
        {REACT_GROUPS.map((g) => (
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
          {REACT_GROUPS.find((g) => g.id === group)?.desc}
        </p>
      )}

      <section className="prereq-grid">
        {days.map((d) => (
          <Link key={d.day} to={`/react/day/${d.day}`} className={`prereq-card prereq-card-${d.group}`}>
            <div className="prereq-card-top">
              <span className="prereq-card-day">Ep {pad(d.day)}</span>
              <span className="prereq-card-ep">RX {pad(d.day)}</span>
            </div>
            <CardThumb src={d.image} alt="" />
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
          Notes written from <em>The React Series</em> — illustrated episodes by Neon Dev (@neon_time).
          New to TypeScript? Start with the{' '}
          <Link to="/typescript">TypeScript Series</Link> first.
        </p>
      </footer>
    </div>
  );
}
