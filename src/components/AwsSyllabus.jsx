import { useState } from 'react';
import { Link } from 'react-router-dom';
import { awsPhases, awsHighlights, AWS_META } from '../data/awsSyllabus';

export default function AwsSyllabus() {
  const [openPhases, setOpenPhases] = useState({ foundations: true });

  function togglePhase(id) {
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    const all = {};
    awsPhases.forEach((p) => {
      all[p.id] = true;
    });
    setOpenPhases(all);
  }

  function collapseAll() {
    setOpenPhases({});
  }

  return (
    <section className="syllabus-section aws-syllabus-section">
      <div className="syllabus-inner">
        <div className="highlights-block">
          <h2>
            <span className="section-icon">☁️</span> Cloud Highlights
          </h2>
          <div className="highlights-grid">
            {awsHighlights.map((item) => (
              <div key={item} className="highlight-card highlight-card-aws">
                <span className="highlight-check highlight-check-aws">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syllabus-block">
          <div className="syllabus-header">
            <h2>
              <span className="section-icon">📚</span> 100-Day AWS Cloud Syllabus
            </h2>
            <div className="syllabus-actions">
              <button type="button" onClick={expandAll} className="syllabus-btn">
                Expand All
              </button>
              <button type="button" onClick={collapseAll} className="syllabus-btn">
                Collapse All
              </button>
            </div>
          </div>

          <p className="syllabus-source">
            Hands-on tasks on{' '}
            <a href={AWS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud 100 Days of Cloud
            </a>
            . Theory & SAA-C03 prep from{' '}
            <a href={AWS_META.cloudfolksCourseUrl} target="_blank" rel="noopener noreferrer">
              CloudFolks Hub
            </a>{' '}
            and{' '}
            <a href={AWS_META.udemyUrl} target="_blank" rel="noopener noreferrer">
              Udemy AWS SAA-C03
            </a>
            .
          </p>

          <div className="phases-list">
            {awsPhases.map((phase) => {
              const isOpen = openPhases[phase.id];
              return (
                <div
                  key={phase.id}
                  className={`phase-card ${isOpen ? 'open' : ''} phase-card-aws`}
                >
                  <button
                    type="button"
                    className="phase-header"
                    onClick={() => togglePhase(phase.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="phase-num phase-num-aws">{phase.number}</div>
                    <div className="phase-info">
                      <span className="phase-title">
                        PHASE {phase.number}: {phase.title}
                      </span>
                      <span className="phase-sub">{phase.moduleCount} Days</span>
                    </div>
                    <span className={`phase-chevron ${isOpen ? 'open' : ''}`}>⌄</span>
                  </button>

                  {isOpen && (
                    <div className="modules-list">
                      {phase.modules.map((mod) => (
                        <Link
                          key={mod.number}
                          to={mod.href || `/aws/learn/${mod.slug}`}
                          className="module-row published"
                        >
                          <span className="module-num">Day {mod.number}</span>
                          <span className="module-title">{mod.title}</span>
                          <span className="module-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="syllabus-footer-cta">
            <p>Start the free KodeKloud cloud challenge today</p>
            <a
              href={AWS_META.kodekloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-aws-kodekloud-outline"
            >
              Start on KodeKloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
