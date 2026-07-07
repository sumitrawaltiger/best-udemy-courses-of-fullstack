import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHEAT_SHEETS, CHEATSHEET_CATEGORIES } from '../data/cheatSheets';
import './CheatSheets.css';

function CheatSheetCard({ sheet, onZoom }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <article className="cs-card">
      <button
        type="button"
        className="cs-thumb"
        onClick={() => imgOk && onZoom(sheet)}
        aria-label={`View ${sheet.title} full size`}
      >
        {imgOk ? (
          <>
            <img src={sheet.image} alt={sheet.title} loading="lazy" onError={() => setImgOk(false)} />
            <span className="cs-thumb-zoom">🔍 Click to zoom</span>
          </>
        ) : (
          <span className="cs-thumb-fallback">
            <span aria-hidden="true" style={{ fontSize: '1.6rem' }}>
              🖼️
            </span>
            Image coming soon
          </span>
        )}
      </button>
      <div className="cs-body">
        <h3 className="cs-card-title">{sheet.title}</h3>
        <p className="cs-card-desc">{sheet.description}</p>
        {sheet.tags && (
          <div className="cs-tags">
            {sheet.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
        <div className="cs-actions">
          <a
            href={sheet.image}
            target="_blank"
            rel="noopener noreferrer"
            className="cs-btn cs-btn--primary"
          >
            Open full ↗
          </a>
          <a href={sheet.image} download className="cs-btn">
            Download ⬇
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CheatSheets() {
  const [zoomed, setZoomed] = useState(null);

  const countFor = (catId) => CHEAT_SHEETS.filter((s) => s.category === catId).length;

  return (
    <div className="cs-page">
      <header className="cs-topbar">
        <Link to="/" className="cs-nav-btn">
          ← Home
        </Link>
        <span className="cs-topbar-label">Cheat Sheets</span>
        <Link to="/best-udemy-courses" className="cs-nav-btn cs-nav-btn--accent">
          Best Udemy Courses →
        </Link>
      </header>

      <section className="cs-hero">
        <h1 className="cs-hero-title">
          Developer <span className="cs-accent">Cheat Sheets</span>
        </h1>
        <p className="cs-hero-sub">
          Quick-reference guides for the tools and topics you use every day. Click any sheet to zoom
          in, open it full-size, or download it.
        </p>
        <div className="cs-cats">
          {CHEATSHEET_CATEGORIES.map((cat) => (
            <span key={cat.id} className="cs-cat">
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
              <span className="cs-cat-count">{countFor(cat.id)}</span>
            </span>
          ))}
        </div>
      </section>

      <div className="cs-inner">
        {CHEAT_SHEETS.length === 0 ? (
          <div className="cs-empty">No cheat sheets yet — check back soon.</div>
        ) : (
          <div className="cs-grid">
            {CHEAT_SHEETS.map((sheet) => (
              <CheatSheetCard key={sheet.id} sheet={sheet} onZoom={setZoomed} />
            ))}
          </div>
        )}

        <footer className="cs-footer">
          <p>
            More cheat sheets coming soon. Pair these with the{' '}
            <Link to="/">learning tracks</Link> and{' '}
            <Link to="/java-interview-questions">interview questions</Link>.
          </p>
        </footer>
      </div>

      {zoomed && (
        <div
          className="cs-lightbox"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomed.title} full size`}
        >
          <button
            type="button"
            className="cs-lightbox-close"
            onClick={() => setZoomed(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img src={zoomed.image} alt={zoomed.title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
