import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { REACT_DAYS, REACT_GROUPS, REACT_META, getReactDay } from '../data/reactNotes';
import './Prerequisites.css';

function pad(n) {
  return String(n).padStart(2, '0');
}

// Inline markdown: **bold** and `code` only.
function inline(text, key) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${key}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${key}-${i}`}>{part.slice(1, -1)}</code>;
    }
    return <span key={`${key}-${i}`}>{part}</span>;
  });
}

// Paragraphs split on blank lines; "- " lines become a list.
function prose(text, key) {
  return text.split('\n\n').map((block, b) => {
    const lines = block.split('\n');
    if (lines.every((l) => l.trim().startsWith('- '))) {
      return (
        <ul key={`${key}-b${b}`} className="prereq-theory-list">
          {lines.map((l, i) => (
            <li key={i}>{inline(l.trim().slice(2), `${key}-b${b}-${i}`)}</li>
          ))}
        </ul>
      );
    }
    return <p key={`${key}-b${b}`}>{inline(block, `${key}-b${b}`)}</p>;
  });
}

export default function ReactDay() {
  const { day } = useParams();
  const [zoom, setZoom] = useState(false);
  const entry = getReactDay(day);

  if (!entry) {
    return (
      <div className="prereq-page">
        <section className="prereq-hero">
          <h1 className="prereq-hero-title">Episode not found</h1>
          <p className="prereq-hero-sub">
            The React series currently has {REACT_DAYS.length} episode{REACT_DAYS.length !== 1 ? 's' : ''} — more coming soon.
          </p>
          <div className="prereq-hero-actions">
            <Link to="/react" className="prereq-btn prereq-btn-primary">
              ← Back to all episodes
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const group = REACT_GROUPS.find((g) => g.id === entry.group);
  const prev = REACT_DAYS.find((d) => d.day === entry.day - 1);
  const next = REACT_DAYS.find((d) => d.day === entry.day + 1);
  const progress = Math.round((entry.day / Math.max(REACT_DAYS.length, entry.day)) * 100);
  const snippets = entry.snippets || (entry.code ? [{ label: 'Example', code: entry.code }] : []);

  return (
    <div className={`prereq-page prereq-day-page prereq-theme-${entry.group}`}>
      <nav className="prereq-daynav">
        <Link to="/react" className="prereq-daynav-btn">
          All episodes
        </Link>
        <span className="prereq-daynav-spacer" />
        {prev ? (
          <Link to={`/react/day/${prev.day}`} className="prereq-daynav-btn">
            ← Ep {pad(prev.day)}
          </Link>
        ) : (
          <span className="prereq-daynav-btn is-disabled">← Ep 00</span>
        )}
        {next ? (
          <Link to={`/react/day/${next.day}`} className="prereq-daynav-btn prereq-daynav-next">
            Ep {pad(next.day)} →
          </Link>
        ) : (
          <Link to="/react" className="prereq-daynav-btn prereq-daynav-next">
            Back to all episodes →
          </Link>
        )}
      </nav>

      <header className="prereq-dayhead">
        <div className="prereq-dayhead-tags">
          <span className="prereq-daychip">React</span>
          <span className="prereq-daychip">Episode {pad(entry.day)}</span>
          <span className="prereq-daychip">
            {group?.icon} {group?.label}
          </span>
        </div>
        <h1 className="prereq-dayhead-title">
          <span className="prereq-dayhead-num">EP {pad(entry.day)}</span>
          {entry.title}
        </h1>
        <p className="prereq-dayhead-tagline">{entry.tagline}</p>
        <div className="prereq-progress" aria-label={`Episode ${entry.day}`}>
          <div className="prereq-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="prereq-progress-label">
          Episode {entry.day} · {REACT_META.title}
        </p>
      </header>

      <div className="prereq-daybody">
        <section className="prereq-notes">
          <h2 className="prereq-notes-title">
            <span className="prereq-notes-line" aria-hidden="true" />
            KEY POINTS
          </h2>
          <ul className="prereq-notes-list">
            {entry.notes.map((n) => (
              <li key={n.k}>
                <span className="prereq-note-k">{n.k}</span>
                <span className="prereq-note-v">{inline(n.v, `n-${n.k}`)}</span>
              </li>
            ))}
          </ul>
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
            <img
              src={entry.image}
              alt={`Episode ${entry.day} — ${entry.title}`}
              loading="lazy"
              onError={(e) => { const f = e.currentTarget.closest('.prereq-figure'); if (f) f.style.display = 'none'; }}
            />
            <span className="prereq-figure-zoom">🔍 Click to zoom</span>
          </button>
          <figcaption>
            Episode {pad(entry.day)} · {entry.title} — the original one-page episode
          </figcaption>
        </figure>
      </div>

      {entry.theory?.length > 0 && (
        <section className="prereq-theory">
          <h2 className="prereq-theory-heading">
            <span className="prereq-notes-line" aria-hidden="true" />
            THE FULL NOTES
          </h2>
          <p className="prereq-theory-intro">
            Everything on the episode above, written out — so you can read it instead of squinting at it.
          </p>
          {entry.theory.map((t, i) => (
            <article key={t.h} className="prereq-theory-block">
              <h3 className="prereq-theory-h">
                <span className="prereq-theory-num">{pad(i + 1)}</span>
                {t.h}
              </h3>
              <div className="prereq-theory-body">{prose(t.p, `t${i}`)}</div>
              {t.code && <pre className="prereq-code">{t.code}</pre>}
            </article>
          ))}
        </section>
      )}

      {snippets.length > 0 && (
        <section className="prereq-snippets">
          <h2 className="prereq-theory-heading">
            <span className="prereq-notes-line" aria-hidden="true" />
            THE CODE
          </h2>
          <p className="prereq-theory-intro">
            Every snippet from the episode, transcribed so you can copy and run it.
          </p>
          <div className="prereq-snippet-grid">
            {snippets.map((s, i) => (
              <figure key={`${s.label}-${i}`} className="prereq-snippet">
                <figcaption className="prereq-snippet-label">{s.label}</figcaption>
                <pre className="prereq-code">{s.code}</pre>
                {s.note && <p className="prereq-snippet-note">{inline(s.note, `sn${i}`)}</p>}
              </figure>
            ))}
          </div>
        </section>
      )}

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
          <Link to={`/react/day/${next.day}`} className="prereq-btn prereq-btn-primary">
            Next · Ep {pad(next.day)} — {next.title} →
          </Link>
        ) : (
          <Link to="/react" className="prereq-btn prereq-btn-primary">
            Back to all episodes →
          </Link>
        )}
      </footer>
    </div>
  );
}
