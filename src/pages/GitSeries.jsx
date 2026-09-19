import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GIT_EPISODES, GIT_GROUPS, GIT_META } from '../data/gitNotes';
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

export default function GitSeries() {
  const [group, setGroup] = useState(ALL);
  const episodes = group === ALL ? GIT_EPISODES : GIT_EPISODES.filter((e) => e.group === group);

  return (
    <div className="prereq-page">
      <section className="prereq-hero">
        <span className="prereq-hero-badge">🌿 Git · Illustrated Series</span>
        <h1 className="prereq-hero-title">{GIT_META.title}</h1>
        <p className="prereq-hero-sub">{GIT_META.blurb}</p>
        <div className="prereq-hero-actions">
          <Link to="/git/day/1" className="prereq-btn prereq-btn-primary">
            Start at Episode 1 →
          </Link>
          <Link to="/react" className="prereq-btn prereq-btn-ghost">
            ← React Series
          </Link>
        </div>
        <div className="prereq-stats">
          <div className="prereq-stat">
            <span className="prereq-stat-value">{GIT_EPISODES.length}</span>
            <span className="prereq-stat-label">episodes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">{GIT_GROUPS.length}</span>
            <span className="prereq-stat-label">themes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">Git→GitHub</span>
            <span className="prereq-stat-label">Branches, Merge, Remote &amp; Best Practices</span>
          </div>
        </div>
      </section>

      <section className="prereq-note">
        <p>
          Git is the <strong>version control system every developer lives by</strong> — track changes,
          branch safely, and collaborate on GitHub. These episodes go from the very first{' '}
          <code>git init</code> through <strong>branches, merging, undoing changes, and pushing to
          GitHub</strong>, each with the full written notes and every command. An essential companion
          to the <Link to="/react">React Series</Link>.
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
          <span aria-hidden="true">🗂️</span> All {GIT_EPISODES.length} episodes
        </button>
        {GIT_GROUPS.map((g) => (
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
          {GIT_GROUPS.find((g) => g.id === group)?.desc}
        </p>
      )}

      <section className="prereq-grid">
        {episodes.map((e) => (
          <Link key={e.ep} to={`/git/day/${e.ep}`} className={`prereq-card prereq-card-${e.group}`}>
            <div className="prereq-card-top">
              <span className="prereq-card-day">Ep {pad(e.ep)}</span>
              <span className="prereq-card-ep">GIT {pad(e.ep)}</span>
            </div>
            <CardThumb src={e.image} alt="" />
            <h2 className="prereq-card-title">{e.title}</h2>
            <p className="prereq-card-tagline">{e.tagline}</p>
            <div className="prereq-card-tags">
              {e.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <span className="prereq-card-cta">Read the notes →</span>
          </Link>
        ))}
      </section>

      <footer className="prereq-footer">
        <p>
          Notes written from <em>Git &amp; GitHub Mini Series</em> — illustrated episodes by Neon Dev (@neon_time).
          Ready for the browser? Move on to the{' '}
          <Link to="/react">React Series</Link>.
        </p>
      </footer>
    </div>
  );
}
