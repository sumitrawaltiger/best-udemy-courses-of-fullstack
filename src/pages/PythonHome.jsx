import { useSearchParams, Link } from 'react-router-dom';
import { pythonChapters, searchPythonChapters } from '../data/pythonChapters';
import { PYTHON_META } from '../data/pythonSyllabus';
import LectureCard from '../components/LectureCard';
import PythonSyllabus from '../components/PythonSyllabus';
import PythonHero, { PythonHeroStats } from '../components/PythonHero';

// Python — 500 Practice Exam Questions with Explanation
// (public/python-notes/python-500-practice-exam-questions.pdf), 5 chapters.
const PYTHON_EXAM_PDF = '/python-notes/python-500-practice-exam-questions.pdf';
const PYTHON_EXAM_COVER = '/python-notes/python-500-practice-exam-questions-cover.jpg';
const PYTHON_EXAM_CHAPTERS = [
  ['📘', 'Basics of Python Programming'],
  ['🔀', 'Control Structures'],
  ['🧩', 'Functions & Modules'],
  ['🗃️', 'Data Structures'],
  ['🏛️', 'Object-Oriented Programming'],
];

export default function PythonHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchPythonChapters(query) : pythonChapters;

  return (
    <>
      <section className="python-hero">
        <div className="python-hero-inner">
          <PythonHero
            actions={
              <div className="python-hero-actions">
                <Link to="/python/learn/course-introduction" className="btn btn-python btn-lg">
                  Start PY Module 1
                </Link>
                <a
                  href={PYTHON_META.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-python-portal btn-lg"
                >
                  Ashok IT Portal
                </a>
                <a href="#python-syllabus" className="btn btn-outline-python btn-lg">
                  View Syllabus
                </a>
                <a
                  href={PYTHON_META.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-python btn-lg"
                >
                  💻 Ashok IT GitHub
                </a>
                <Link to="/mobile" className="btn btn-outline-python btn-lg">
                  ← React Native
                </Link>
                <Link to="/java" className="btn btn-outline-python btn-lg">
                  Java & Spring →
                </Link>
              </div>
            }
          >
            <PythonHeroStats />
          </PythonHero>
        </div>
      </section>

      <div className="home python-home">
        <div id="python-syllabus">
          <PythonSyllabus />
        </div>

        <section className="py-exam" id="python-practice-exams">
          <div className="py-exam-inner">
            <div className="py-exam-text">
              <p className="section-eyebrow">Practice · MCQs</p>
              <h2 className="py-exam-title">
                <span aria-hidden="true">🐍</span> Python — 500 Practice Exam Questions
              </h2>
              <p className="section-desc">
                A 259-page question bank — <strong>500 multiple-choice questions with full explanations</strong>,
                organised into five chapters. Test yourself as you work through the modules and lock in the
                fundamentals.
              </p>
              <div className="py-exam-chips">
                {PYTHON_EXAM_CHAPTERS.map(([icon, name], i) => (
                  <span key={name} className="py-exam-chip">
                    <span className="py-exam-chip-num">{i + 1}</span>
                    <span aria-hidden="true">{icon}</span> {name}
                  </span>
                ))}
              </div>
              <div className="python-hero-actions">
                <a href={PYTHON_EXAM_PDF} download className="btn btn-python btn-lg">
                  📥 Download Questions (PDF)
                </a>
                <a href={PYTHON_EXAM_PDF} target="_blank" rel="noopener noreferrer" className="btn btn-outline-python btn-lg">
                  Open in new tab ↗
                </a>
              </div>
            </div>

            <figure className="py-exam-figure">
              <a href={PYTHON_EXAM_PDF} target="_blank" rel="noopener noreferrer">
                <img
                  src={PYTHON_EXAM_COVER}
                  alt="Python — 500 Practice Exam Questions with Explanation — cover of a 259-page MCQ book covering Basics, Control Structures, Functions & Modules, Data Structures and OOP."
                  loading="lazy"
                  onError={(e) => { const f = e.currentTarget.closest('.py-exam-figure'); if (f) f.style.display = 'none'; }}
                />
              </a>
              <figcaption>Cover — click to open the full PDF ↗</figcaption>
            </figure>
          </div>
        </section>

        <section className="roadmap">
          <h2>45-Module Python & AI Roadmap</h2>
          <p className="section-desc">
            Covers Python, Django, FastAPI, and Agentic AI — {pythonChapters.length} modules with room for
            projects and practice.
          </p>
          <div className="roadmap-grid roadmap-python">
            {pythonChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/python/learn/${ch.slug}`}>{ch.pyDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-python" /> {pythonChapters.length} modules
            </span>
            <span>
              <span className="legend-dot published" /> Python → Django → FastAPI → Agentic AI
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Modules'}</h2>
            {query && (
              <Link to="/python" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/python">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/python/learn" dayPrefix="PY" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
