import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROADMAP_ARCS, ROADMAP_STATS, ROADMAP_PHASES } from '../data/roadmapPhases';
import { JOURNEY_META } from '../data/interviewSyllabus';

const ROADMAP_POSTER = '/roadmap-notes/four-year-study-plan.jpg';

function PhaseLink({ phase, children }) {
  if (phase.href) {
    return (
      <a href={phase.href} target="_blank" rel="noopener noreferrer" className="roadmap-card-link">
        {children}
      </a>
    );
  }
  return (
    <Link to={phase.to} className="roadmap-card-link">
      {children}
    </Link>
  );
}

export default function RoadmapHome() {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <div className="roadmap-page">
      <section className="roadmap-hero">
        <span className="roadmap-hero-badge">📍 5 Jul 2026 → 4 Jul 2030</span>
        <h1 className="roadmap-hero-title">The 4-Year Learning Path</h1>
        <p className="roadmap-hero-sub">
          {JOURNEY_META.totalDays} days of study, one phase at a time — every morning from{' '}
          <strong>5:30–8:30 AM</strong> (Bangkok, UTC+7). From first JavaScript line to
          interview-ready full lifecycle engineer.
        </p>
        <div className="roadmap-stats">
          {ROADMAP_STATS.map((s) => (
            <div key={s.label} className="roadmap-stat">
              <span className="roadmap-stat-value">{s.value}</span>
              <span className="roadmap-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="roadmap-poster-section">
        <h2 className="roadmap-poster-heading">The plan at a glance</h2>
        <figure className="roadmap-poster">
          <button
            type="button"
            className="roadmap-poster-btn"
            onClick={() => setPosterOpen(true)}
            aria-label="Open the full study-plan poster"
          >
            <img
              src={ROADMAP_POSTER}
              alt="1461 Days · 4 Years of Growth — the complete study plan, all 18 phases with windows, days, and sources"
              loading="lazy"
            />
            <span className="roadmap-poster-zoom">🔍 Click to zoom</span>
          </button>
          <figcaption className="roadmap-poster-cap">
            1461 Days · 4 Years of Growth — the complete study plan (5 Jul 2026 → 4 Jul 2030).
          </figcaption>
        </figure>
      </section>

      <div className="roadmap-timeline">
        {ROADMAP_ARCS.map((arc) => (
          <section key={arc.id} className={`roadmap-arc roadmap-arc-${arc.id}`}>
            <div className="roadmap-arc-header">
              <span className="roadmap-arc-dot" aria-hidden="true" />
              <div className="roadmap-arc-heading">
                <h2 className="roadmap-arc-title">{arc.label}</h2>
                <p className="roadmap-arc-meta">
                  <span className="roadmap-arc-range">{arc.range}</span>
                  <span className="roadmap-arc-dates">{arc.dates}</span>
                </p>
                <p className="roadmap-arc-blurb">{arc.blurb}</p>
              </div>
            </div>

            <ol className="roadmap-list">
              {ROADMAP_PHASES.filter((p) => p.arc === arc.id).map((phase) => (
                <li
                  key={phase.n}
                  className={`roadmap-item ${phase.final ? 'roadmap-item-final' : ''}`}
                >
                  <span className="roadmap-node" aria-hidden="true">
                    <span className="roadmap-node-num">{phase.n}</span>
                  </span>
                  <PhaseLink phase={phase}>
                    <article className="roadmap-card">
                      <div className="roadmap-card-top">
                        <span className="roadmap-card-icon" aria-hidden="true">
                          {phase.icon}
                        </span>
                        <h3 className="roadmap-card-title">{phase.title}</h3>
                        {phase.final && <span className="roadmap-card-final">Final</span>}
                      </div>
                      <p className="roadmap-card-window">{phase.window}</p>
                      <div className="roadmap-card-foot">
                        <span className="roadmap-card-days">{phase.days} days</span>
                        <span className="roadmap-card-range">{phase.dayRange}</span>
                      </div>
                      <p className="roadmap-card-source">{phase.source}</p>
                    </article>
                  </PhaseLink>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="roadmap-finish">
          <span className="roadmap-finish-flag" aria-hidden="true">🏁</span>
          <div>
            <p className="roadmap-finish-title">Full Lifecycle Engineer</p>
            <p className="roadmap-finish-date">4 Jul 2030 · 1,461 days complete</p>
          </div>
        </div>
      </div>

      <section className="roadmap-flow">
        <h2 className="roadmap-flow-title">The flow, end to end</h2>
        <p className="roadmap-flow-text">{JOURNEY_META.summary}</p>
        <div className="roadmap-flow-actions">
          <Link to="/" className="btn btn-lg roadmap-btn-primary">
            Start at Day 1
          </Link>
          <Link to="/interview" className="btn btn-lg roadmap-btn-outline">
            Interview & Mastery track
          </Link>
          <Link to="/best-udemy-courses" className="btn btn-lg roadmap-btn-outline">
            All course picks
          </Link>
        </div>
      </section>

      {posterOpen && (
        <div
          className="roadmap-lightbox"
          onClick={() => setPosterOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Study plan poster, full size"
        >
          <button
            type="button"
            className="roadmap-lightbox-close"
            onClick={() => setPosterOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={ROADMAP_POSTER}
            alt="1461 Days · 4 Years of Growth — the complete study plan"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
