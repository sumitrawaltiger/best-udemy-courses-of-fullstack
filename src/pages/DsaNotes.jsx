import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DSA_TOPICS, DSA_PDF } from '../data/dsaNotes';
import './DsaNotes.css';

function Block({ block }) {
  if (block.type === 'group') {
    return (
      <div className="dsa-block">
        <h4 className="dsa-block-title">{block.title}</h4>
        <ul className="dsa-list">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === 'table') {
    return (
      <div className="dsa-block">
        <h4 className="dsa-block-title">{block.title}</h4>
        <div className="dsa-table-wrap">
          <table className="dsa-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (block.type === 'code') {
    return (
      <div className="dsa-block">
        <h4 className="dsa-block-title">{block.title}</h4>
        <pre className="dsa-code">{block.code}</pre>
      </div>
    );
  }
  if (block.type === 'callout') {
    return (
      <div className={`dsa-callout dsa-callout-${block.variant}`}>
        <span className="dsa-callout-label">{block.title}</span>
        <p>{block.text}</p>
      </div>
    );
  }
  return null;
}

export default function DsaNotes() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="dsa-notes-page">
      <header className="dsa-hero">
        <div className="dsa-hero-inner">
          <p className="dsa-eyebrow">DSA · Handwritten Notes</p>
          <h1 className="dsa-title">Data Structures &amp; Algorithms</h1>
          <p className="dsa-sub">
            Nine pages of handwritten revision notes — from complexity analysis to advanced trees —
            transcribed and illustrated for quick reference. Tap any page image to view it full size.
          </p>
          <div className="dsa-hero-actions">
            <a href={DSA_PDF} download className="dsa-btn dsa-btn-primary">
              📥 Download PDF (9 pages)
            </a>
            <a href={DSA_PDF} target="_blank" rel="noopener noreferrer" className="dsa-btn dsa-btn-outline">
              Open in new tab ↗
            </a>
            <Link to="/interview" className="dsa-btn dsa-btn-outline">
              ← DSA &amp; System Design
            </Link>
          </div>

          <nav className="dsa-toc" aria-label="Topics">
            {DSA_TOPICS.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="dsa-toc-chip">
                <span className="dsa-toc-num">{t.n}</span> {t.icon} {t.title}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="dsa-topics">
        {DSA_TOPICS.map((topic) => (
          <section key={topic.id} id={topic.id} className="dsa-topic">
            <div className="dsa-topic-head">
              <span className="dsa-topic-num">{topic.n}</span>
              <h2 className="dsa-topic-title">
                <span className="dsa-topic-icon" aria-hidden="true">{topic.icon}</span> {topic.title}
              </h2>
            </div>

            <div className="dsa-topic-body">
              <div className="dsa-topic-content">
                <p className="dsa-topic-summary">{topic.summary}</p>
                {topic.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>

              <figure className="dsa-topic-figure">
                <button
                  type="button"
                  className="dsa-figure-btn"
                  onClick={() => setLightbox(topic)}
                  aria-label={`View handwritten page for ${topic.title}`}
                >
                  <img src={topic.image} alt={`Handwritten notes — ${topic.title}`} loading="lazy" />
                </button>
                <figcaption>Original handwritten page · tap to enlarge</figcaption>
              </figure>
            </div>
          </section>
        ))}
      </div>

      <footer className="dsa-footer">
        <p>
          Keep these notes handy through the whole <strong>DSA &amp; System Design</strong> track —
          practised in TypeScript, Python and Java across the 4-year journey.
        </p>
        <div className="dsa-hero-actions">
          <a href={DSA_PDF} download className="dsa-btn dsa-btn-primary">
            📥 Download the full PDF
          </a>
          <Link to="/interview" className="dsa-btn dsa-btn-outline">
            Back to Interview Prep
          </Link>
        </div>
      </footer>

      {lightbox && (
        <div className="dsa-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="dsa-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            ✕
          </button>
          <img
            src={lightbox.image}
            alt={`Handwritten notes — ${lightbox.title}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
