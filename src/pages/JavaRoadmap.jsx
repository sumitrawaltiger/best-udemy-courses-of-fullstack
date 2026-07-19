import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  JAVA_ROADMAP_META,
  ROADMAP_BANDS,
  ROADMAP_LEGEND as LEGEND,
  ROADMAP_MODULES,
  ROADMAP_PHASES,
  ROADMAP_STAGES,
} from '../data/javaRoadmap';
import './JavaRoadmap.css';

// grid-column for a stage span [a,b] — column 1 is the row label.
function col(a, b) {
  return `${a + 1} / ${b + 2}`;
}

const PHASE_COLOR = Object.fromEntries(ROADMAP_PHASES.map((p) => [p.id, p.color]));

export default function JavaRoadmap() {
  const [zoom, setZoom] = useState(false);

  return (
    <div className="jr-page">
      <div>
        <Link to="/java" className="jr-back">← Back to Java track</Link>
      </div>

      <header className="jr-hero">
        <span className="jr-eyebrow">JAVA · COMPETENCY ROADMAP</span>
        <h1 className="jr-title">{JAVA_ROADMAP_META.title}</h1>
        <p className="jr-sub">{JAVA_ROADMAP_META.subtitle}</p>
      </header>

      <figure className="jr-poster">
        <button type="button" className="jr-poster-btn" onClick={() => setZoom(true)} aria-label="Zoom the Java plan">
          <img src={JAVA_ROADMAP_META.image} alt={JAVA_ROADMAP_META.imageAlt} loading="lazy" />
        </button>
        <figcaption className="jr-poster-cap">The Java plan — click to zoom</figcaption>
      </figure>

      <p className="jr-scroll-hint">The matrix below scrolls sideways → all 16 stages.</p>

      <div className="jr-matrix-wrap">
        <div className="jr-matrix">
          {/* Phase headers */}
          <div className="jr-row">
            <div className="jr-rowlabel">Stages</div>
            {ROADMAP_PHASES.map((p) => (
              <div key={p.id} className="jr-phase" style={{ gridColumn: col(p.span[0], p.span[1]), backgroundColor: p.color }}>
                {p.label}
              </div>
            ))}
          </div>

          {/* Stage numbers */}
          <div className="jr-row">
            <div className="jr-rowlabel" />
            {ROADMAP_STAGES.map((s) => (
              <div key={s.n} className="jr-num" style={{ gridColumn: col(s.n, s.n) }}>
                {s.n}
              </div>
            ))}
          </div>

          {/* Module headers */}
          <div className="jr-row">
            <div className="jr-rowlabel">Modules</div>
            {ROADMAP_MODULES.map((m) => (
              <div
                key={m.name + m.span[0]}
                className="jr-mod"
                style={{ gridColumn: col(m.span[0], m.span[1]), backgroundColor: PHASE_COLOR[m.phase] }}
              >
                {m.name}
              </div>
            ))}
          </div>

          {/* Topics */}
          <div className="jr-row">
            <div className="jr-rowlabel">Topics</div>
            {ROADMAP_STAGES.map((s) => (
              <div key={s.n} className="jr-topics" style={{ gridColumn: col(s.n, s.n) }}>
                {s.topics.map((tp, i) => (
                  <div key={i} className={`jr-topic ${tp.kind ? `jr-${tp.kind}` : ''}`}>
                    {tp.t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bands */}
          {ROADMAP_BANDS.map((band) => (
            <div key={band.id} className="jr-row">
              <div className="jr-rowlabel">{band.label}</div>
              {band.cells.map((c, i) => (
                <div key={i} className={`jr-band jr-band-${band.id}`} style={{ gridColumn: col(c.span[0], c.span[1]) }}>
                  {c.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="jr-legend">
        <span className="jr-legend-title">Legend · Mandatory Competency Assessments</span>
        {LEGEND.map((l) => (
          <span key={l.kind} className="jr-legend-item">
            <span className={`jr-swatch ${l.kind}`} />
            {l.label}
          </span>
        ))}
      </div>

      <p className="jr-tagline">
        <strong>Java is not just a language</strong> — it's a full engineering career, from FLC Engineer to Engineering Manager.
      </p>

      {zoom && (
        <div className="jr-lightbox" role="dialog" aria-modal="true" aria-label="Java plan, full size" onClick={() => setZoom(false)}>
          <button type="button" className="jr-lightbox-close" aria-label="Close">✕</button>
          <img src={JAVA_ROADMAP_META.image} alt={JAVA_ROADMAP_META.imageAlt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
