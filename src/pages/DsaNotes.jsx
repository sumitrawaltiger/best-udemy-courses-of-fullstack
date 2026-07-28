import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DSA_TOPICS,
  DSA_PDF,
  COMPLETE_DSA_PDF,
  COMPLETE_DSA_COVER,
  COMPLETE_DSA_GROUPS,
  LEETCODE_PDF,
  LEETCODE_COVER,
  LEETCODE_GROUPS,
  JAVA_DSA_PDF,
  JAVA_DSA_GROUPS,
} from '../data/dsaNotes';
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

      <section className="dsa-leetcode" id="complete-dsa-notes">
        <div className="dsa-leetcode-inner">
          <div className="dsa-leetcode-text">
            <p className="dsa-eyebrow">Reference · 77 pages</p>
            <h2 className="dsa-leetcode-title">
              <span aria-hidden="true">📗</span> Complete DSA Notes
            </h2>
            <p className="dsa-leetcode-sub">
              A <strong>77-page illustrated handwritten reference</strong> covering every major data structure
              and algorithm topic — arrays through advanced graphs — in the same colourful, diagram-first style
              as the nine pages above, at full course depth.
            </p>
            <div className="dsa-leetcode-chips">
              {COMPLETE_DSA_GROUPS.map(([icon, name]) => (
                <span key={name} className="dsa-leetcode-chip">
                  <span aria-hidden="true">{icon}</span> {name}
                </span>
              ))}
            </div>
            <div className="dsa-hero-actions">
              <a href={COMPLETE_DSA_PDF} download className="dsa-btn dsa-btn-primary">
                📥 Download Complete DSA Notes
              </a>
              <a href={COMPLETE_DSA_PDF} target="_blank" rel="noopener noreferrer" className="dsa-btn dsa-btn-outline">
                Open in new tab ↗
              </a>
            </div>
            <p className="dsa-leetcode-credit">Credit: @curious_programmer.</p>
          </div>

          <figure className="dsa-leetcode-figure">
            <a href={COMPLETE_DSA_PDF} target="_blank" rel="noopener noreferrer">
              <img
                src={COMPLETE_DSA_COVER}
                alt="Complete DSA Notes — cover of a 77-page illustrated handwritten reference covering arrays, linked lists, stacks & queues, sorting, trees, hash tables, graphs, recursion and DP."
                loading="lazy"
                onError={(e) => { const f = e.currentTarget.closest('.dsa-leetcode-figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption>Cover — click to open the full PDF ↗</figcaption>
          </figure>
        </div>
      </section>

      <section className="dsa-leetcode" id="leetcode-solutions">
        <div className="dsa-leetcode-inner">
          <div className="dsa-leetcode-text">
            <p className="dsa-eyebrow">Practice · Python</p>
            <h2 className="dsa-leetcode-title">
              <span aria-hidden="true">🐍</span> LeetCode Solutions in Python
            </h2>
            <p className="dsa-leetcode-sub">
              A 227-page problem book with <strong>clean Python solutions to 150+ LeetCode problems</strong>,
              grouped by data structure — the perfect companion for turning these notes into interview-ready
              practice. Work through a group at a time.
            </p>
            <div className="dsa-leetcode-chips">
              {LEETCODE_GROUPS.map(([icon, name]) => (
                <span key={name} className="dsa-leetcode-chip">
                  <span aria-hidden="true">{icon}</span> {name}
                </span>
              ))}
            </div>
            <div className="dsa-hero-actions">
              <a href={LEETCODE_PDF} download className="dsa-btn dsa-btn-primary">
                📥 Download Solutions (Python)
              </a>
              <a href={LEETCODE_PDF} target="_blank" rel="noopener noreferrer" className="dsa-btn dsa-btn-outline">
                Open in new tab ↗
              </a>
            </div>
            <p className="dsa-leetcode-credit">Credit: LeetCode &amp; the community.</p>
          </div>

          <figure className="dsa-leetcode-figure">
            <a href={LEETCODE_PDF} target="_blank" rel="noopener noreferrer">
              <img
                src={LEETCODE_COVER}
                alt="LeetCode Solutions in Python — cover of a 227-page problem book grouped by data structure (Linked List, Trees, Graphs, Heaps, Arrays, Strings, Bit Manipulation, Maths, Matrix, Design)."
                loading="lazy"
                onError={(e) => { const f = e.currentTarget.closest('.dsa-leetcode-figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption>Cover — click to open the full PDF ↗</figcaption>
          </figure>
        </div>
      </section>

      <section className="dsa-leetcode" id="dsa-algorithms-java">
        <div className="dsa-leetcode-inner dsa-leetcode-inner--solo">
          <div className="dsa-leetcode-text">
            <p className="dsa-eyebrow">Practice · Java</p>
            <h2 className="dsa-leetcode-title">
              <span aria-hidden="true">☕</span> DSA Algorithms in Java
            </h2>
            <p className="dsa-leetcode-sub">
              A reference covering <strong>every major algorithm family with working Java code</strong> —
              theory, step-by-step algorithm, a runnable <code>main()</code> demo, and time complexity for
              each one. The Java companion to the notes above.
            </p>
            <div className="dsa-leetcode-chips">
              {JAVA_DSA_GROUPS.map(([icon, name]) => (
                <span key={name} className="dsa-leetcode-chip">
                  <span aria-hidden="true">{icon}</span> {name}
                </span>
              ))}
            </div>
            <div className="dsa-hero-actions">
              <a href={JAVA_DSA_PDF} download className="dsa-btn dsa-btn-primary">
                📥 Download Algorithms (Java)
              </a>
              <a href={JAVA_DSA_PDF} target="_blank" rel="noopener noreferrer" className="dsa-btn dsa-btn-outline">
                Open in new tab ↗
              </a>
            </div>
          </div>
        </div>
      </section>

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
