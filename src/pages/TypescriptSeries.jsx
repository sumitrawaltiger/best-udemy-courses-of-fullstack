import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TS_DAYS, TS_GROUPS, TS_META } from '../data/typescriptNotes';
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

export default function TypescriptSeries() {
  const [group, setGroup] = useState(ALL);
  const days = group === ALL ? TS_DAYS : TS_DAYS.filter((d) => d.group === group);

  return (
    <div className="prereq-page">
      <section className="prereq-hero">
        <span className="prereq-hero-badge">🧩 TypeScript · Illustrated Series</span>
        <h1 className="prereq-hero-title">{TS_META.title}</h1>
        <p className="prereq-hero-sub">{TS_META.blurb}</p>
        <div className="prereq-hero-actions">
          <Link to="/typescript/day/1" className="prereq-btn prereq-btn-primary">
            Start at Episode 1 →
          </Link>
          <Link to="/typescript/day/11" className="prereq-btn prereq-btn-ghost">
            Jump to Abstract Classes →
          </Link>
        </div>
        <div className="prereq-stats">
          <div className="prereq-stat">
            <span className="prereq-stat-value">{TS_META.totalDays}</span>
            <span className="prereq-stat-label">episodes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">{TS_GROUPS.length}</span>
            <span className="prereq-stat-label">themes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">JS→TS</span>
            <span className="prereq-stat-label">types on JavaScript</span>
          </div>
        </div>
      </section>

      <section className="prereq-note">
        <p>
          TypeScript is <strong>JavaScript with a type system</strong> — the same language you know,
          plus static types that catch bugs before they run. These episodes go from installing the
          compiler through <strong>classes, inheritance and abstract classes</strong>, each with the
          full written notes and every code snippet.
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
          <span aria-hidden="true">🗂️</span> All {TS_META.totalDays} episodes
        </button>
        {TS_GROUPS.map((g) => (
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
          {TS_GROUPS.find((g) => g.id === group)?.desc}
        </p>
      )}

      <section className="prereq-grid">
        {days.map((d) => (
          <Link key={d.day} to={`/typescript/day/${d.day}`} className={`prereq-card prereq-card-${d.group}`}>
            <div className="prereq-card-top">
              <span className="prereq-card-day">Ep {pad(d.day)}</span>
              <span className="prereq-card-ep">TS {pad(d.day)}</span>
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
          Notes written from <em>The TypeScript Series</em> — {TS_META.totalDays} illustrated episodes.
          Coming from JavaScript? Start with the{' '}
          <Link to="/prerequisites">JavaScript prerequisites</Link> first.
        </p>
      </footer>
    </div>
  );
}
