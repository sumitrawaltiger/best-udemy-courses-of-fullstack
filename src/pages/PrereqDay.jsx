import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PREREQ_DAYS, PREREQ_GROUPS, PREREQ_META, getPrereqDay } from '../data/jsPrereqNotes';
import './Prerequisites.css';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function PrereqDay() {
  const { day } = useParams();
  const [zoom, setZoom] = useState(false);
  const entry = getPrereqDay(day);

  if (!entry) {
    return (
      <div className="prereq-page">
        <section className="prereq-hero">
          <h1 className="prereq-hero-title">Day not found</h1>
          <p className="prereq-hero-sub">
            The JavaScript prerequisite series runs from Day 1 to Day {PREREQ_META.totalDays}.
          </p>
          <div className="prereq-hero-actions">
            <Link to="/prerequisites" className="prereq-btn prereq-btn-primary">
              ← Back to all 47 days
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const group = PREREQ_GROUPS.find((g) => g.id === entry.group);
  const prev = PREREQ_DAYS.find((d) => d.day === entry.day - 1);
  const next = PREREQ_DAYS.find((d) => d.day === entry.day + 1);
  const progress = Math.round((entry.day / PREREQ_META.totalDays) * 100);

  return (
    <div className={`prereq-page prereq-day-page prereq-theme-${entry.group}`}>
      <nav className="prereq-daynav">
        <Link to="/prerequisites" className="prereq-daynav-btn">
          All 47 days
        </Link>
        <span className="prereq-daynav-spacer" />
        {prev ? (
          <Link to={`/prerequisites/day/${prev.day}`} className="prereq-daynav-btn">
            ← Day {pad(prev.day)}
          </Link>
        ) : (
          <span className="prereq-daynav-btn is-disabled">← Day 00</span>
        )}
        {next ? (
          <Link to={`/prerequisites/day/${next.day}`} className="prereq-daynav-btn prereq-daynav-next">
            Day {pad(next.day)} →
          </Link>
        ) : (
          <Link to="/day-001" className="prereq-daynav-btn prereq-daynav-next">
            On to TypeScript Day 1 →
          </Link>
        )}
      </nav>

      <header className="prereq-dayhead">
        <div className="prereq-dayhead-tags">
          <span className="prereq-daychip">Prerequisite</span>
          <span className="prereq-daychip">JavaScript</span>
          <span className="prereq-daychip">
            {group?.icon} {group?.label}
          </span>
        </div>
        <h1 className="prereq-dayhead-title">
          <span className="prereq-dayhead-num">DAY {pad(entry.day)}</span>
          {entry.title}
        </h1>
        <p className="prereq-dayhead-tagline">{entry.tagline}</p>
        <div className="prereq-progress" aria-label={`Day ${entry.day} of ${PREREQ_META.totalDays}`}>
          <div className="prereq-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="prereq-progress-label">
          Day {entry.day} of {PREREQ_META.totalDays} · {progress}% through the series
        </p>
      </header>

      <div className="prereq-daybody">
        <section className="prereq-notes">
          <h2 className="prereq-notes-title">
            <span className="prereq-notes-line" aria-hidden="true" />
            THE NOTES
          </h2>
          <ul className="prereq-notes-list">
            {entry.notes.map((n) => (
              <li key={n.k}>
                <span className="prereq-note-k">{n.k}</span>
                <span className="prereq-note-v">{n.v}</span>
              </li>
            ))}
          </ul>
          {entry.code && <pre className="prereq-code">{entry.code}</pre>}
          <div className="prereq-notes-tags">
            {entry.tags.map((t) => (
              <span key={t}>#{t.replace(/\s+/g, '')}</span>
            ))}
          </div>
        </section>

        <figure className="prereq-figure">
          <button
            type="button"
            className="prereq-figure-btn"
            onClick={() => setZoom(true)}
            aria-label={`Zoom episode ${entry.day}: ${entry.title}`}
          >
            <img src={entry.image} alt={`Episode ${entry.day} — ${entry.title}`} loading="lazy" />
            <span className="prereq-figure-zoom">🔍 Click to zoom</span>
          </button>
          <figcaption>
            Episode {pad(entry.day)} · {entry.title}
          </figcaption>
        </figure>
      </div>

      {zoom && (
        <div
          className="prereq-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Episode ${entry.day} — ${entry.title}`}
          onClick={() => setZoom(false)}
        >
          <button type="button" className="prereq-lightbox-close" aria-label="Close">
            ✕
          </button>
          <img src={entry.image} alt={`Episode ${entry.day} — ${entry.title}`} />
        </div>
      )}

      <footer className="prereq-dayfoot">
        {next ? (
          <Link to={`/prerequisites/day/${next.day}`} className="prereq-btn prereq-btn-primary">
            Next · Day {pad(next.day)} — {next.title} →
          </Link>
        ) : (
          <Link to="/day-001" className="prereq-btn prereq-btn-primary">
            Prerequisites done · Start TypeScript Day 1 →
          </Link>
        )}
      </footer>
    </div>
  );
}
