import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NEXTJS_NOTES_EPISODES, NEXTJS_NOTES_GROUPS, NEXTJS_NOTES_META } from '../data/nextjsNotes';
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

export default function NextjsNotesSeries() {
  const [group, setGroup] = useState(ALL);
  const episodes =
    group === ALL
      ? NEXTJS_NOTES_EPISODES
      : NEXTJS_NOTES_EPISODES.filter((e) => e.group === group);

  return (
    <div className="prereq-page">
      <section className="prereq-hero">
        <span className="prereq-hero-badge">▲ Next.js · Handwritten Notes Series</span>
        <h1 className="prereq-hero-title">{NEXTJS_NOTES_META.title}</h1>
        <p className="prereq-hero-sub">{NEXTJS_NOTES_META.blurb}</p>
        <div className="prereq-hero-actions">
          <Link to="/nextjs-notes/day/1" className="prereq-btn prereq-btn-primary">
            Start at Episode 1 →
          </Link>
          <Link to="/git" className="prereq-btn prereq-btn-ghost">
            ← Git Series
          </Link>
        </div>
        <div className="prereq-stats">
          <div className="prereq-stat">
            <span className="prereq-stat-value">{NEXTJS_NOTES_EPISODES.length}</span>
            <span className="prereq-stat-label">episodes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">{NEXTJS_NOTES_GROUPS.length}</span>
            <span className="prereq-stat-label">themes</span>
          </div>
          <div className="prereq-stat">
            <span className="prereq-stat-value">Next.js→Stack</span>
            <span className="prereq-stat-label">SSR, SSG, Routing, Data &amp; Deployment</span>
          </div>
        </div>
      </section>

      <section className="prereq-note">
        <p>
          Next.js is <strong>React with superpowers</strong> — file-based routing, server-side
          rendering, static generation, API routes, and image optimisation built right in. These
          episodes cover everything from what Next.js is through to deploying a full-stack app,
          each with the full written notes and every snippet. Comes after the{' '}
          <Link to="/git">Git Series</Link> in the Year 2 JavaScript Stack.
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
          <span aria-hidden="true">🗂️</span> All {NEXTJS_NOTES_EPISODES.length} episodes
        </button>
        {NEXTJS_NOTES_GROUPS.map((g) => (
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
          {NEXTJS_NOTES_GROUPS.find((g) => g.id === group)?.desc}
        </p>
      )}

      <section className="prereq-grid">
        {episodes.map((e) => (
          <Link
            key={e.ep}
            to={`/nextjs-notes/day/${e.ep}`}
            className={`prereq-card prereq-card-${e.group}`}
          >
            <div className="prereq-card-top">
              <span className="prereq-card-day">Ep {pad(e.ep)}</span>
              <span className="prereq-card-ep">NX {pad(e.ep)}</span>
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
          Notes written from the <em>Next.js Handwritten Notes Series</em>. New to Git?
          Start with the <Link to="/git">Git Series</Link> first.
        </p>
      </footer>
    </div>
  );
}
