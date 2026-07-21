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

const SENIOR_ROADMAP = {
  image: '/java-notes/senior-java-developer-roadmap-2026.jpg',
  alt: 'Senior Java Developer Roadmap 2026 — 12 focus areas: Core Java, Spring Ecosystem, Microservices, Databases, Messaging, Cloud & DevOps, System Design, Testing, AI for Developers, Soft Skills, Architecture Principles, Tools & Productivity, plus a learning path.',
};

export default function JavaRoadmap() {
  const [zoomSrc, setZoomSrc] = useState(null);
  const [imgOk, setImgOk] = useState(true);
  const [seniorOk, setSeniorOk] = useState(true);

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
        {imgOk ? (
          <>
            <button type="button" className="jr-poster-btn" onClick={() => setZoomSrc(JAVA_ROADMAP_META.image)} aria-label="Zoom the Java plan">
              <img
                src={JAVA_ROADMAP_META.image}
                alt={JAVA_ROADMAP_META.imageAlt}
                loading="lazy"
                onError={() => setImgOk(false)}
              />
            </button>
            <figcaption className="jr-poster-cap">The Java plan — click to zoom</figcaption>
          </>
        ) : (
          <div className="jr-poster-missing">
            <span className="jr-poster-missing-icon" aria-hidden="true">🖼️</span>
            <p className="jr-poster-missing-title">Plan image not uploaded yet</p>
            <p className="jr-poster-missing-note">
              The full plan below is live. To show the original poster here, add the file at{' '}
              <code>public/java-notes/java-plan-roadmap.jpg</code>.
            </p>
          </div>
        )}
      </figure>

      {seniorOk && (
        <section className="jr-senior">
          <h2 className="jr-senior-title">Senior Java Developer Roadmap 2026</h2>
          <p className="jr-senior-sub">
            A practical roadmap to level up and grow as a Senior Java Developer — 12 focus areas from
            Core Java and the Spring ecosystem to microservices, system design, AI for developers and soft skills.
          </p>
          <figure className="jr-poster jr-poster-wide">
            <button
              type="button"
              className="jr-poster-btn"
              onClick={() => setZoomSrc(SENIOR_ROADMAP.image)}
              aria-label="Zoom the Senior Java Developer Roadmap"
            >
              <img src={SENIOR_ROADMAP.image} alt={SENIOR_ROADMAP.alt} loading="lazy" onError={() => setSeniorOk(false)} />
            </button>
            <figcaption className="jr-poster-cap">
              Senior Java Developer Roadmap 2026 — click to zoom ·{' '}
              <a href={SENIOR_ROADMAP.image} download className="jr-poster-download">Download image</a>
            </figcaption>
          </figure>
        </section>
      )}

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

      {zoomSrc && (
        <div className="jr-lightbox" role="dialog" aria-modal="true" aria-label="Roadmap, full size" onClick={() => setZoomSrc(null)}>
          <button type="button" className="jr-lightbox-close" aria-label="Close">✕</button>
          <img src={zoomSrc} alt="Java roadmap, full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
