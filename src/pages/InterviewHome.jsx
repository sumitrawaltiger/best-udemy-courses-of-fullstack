import { useSearchParams, Link } from 'react-router-dom';
import { interviewChapters, searchInterviewChapters } from '../data/interviewChapters';
import { INTERVIEW_META } from '../data/interviewSyllabus';
import LectureCard from '../components/LectureCard';
import InterviewSyllabus from '../components/InterviewSyllabus';
import InterviewHero, { InterviewHeroStats } from '../components/InterviewHero';

export default function InterviewHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchInterviewChapters(query) : interviewChapters;

  return (
    <>
      <section className="interview-hero">
        <div className="interview-hero-inner">
          <InterviewHero
            actions={
              <div className="interview-hero-actions">
                <Link
                  to="/interview/learn/introduction-to-interview-prep"
                  className="btn btn-interview btn-lg"
                >
                  Start IP Module 1
                </Link>
                <a
                  href={INTERVIEW_META.chaicodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-interview-chaicode btn-lg"
                >
                  ChaiCode Course
                </a>
                <a
                  href={INTERVIEW_META.gfgDsaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-interview-gfg btn-lg"
                >
                  GfG DSA
                </a>
                <a
                  href={INTERVIEW_META.gfgSystemDesignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-interview-gfg btn-lg"
                >
                  GfG System Design
                </a>
                <a href="#interview-syllabus" className="btn btn-outline-interview btn-lg">
                  View Syllabus
                </a>
                <Link to="/k8s" className="btn btn-outline-interview btn-lg">
                  ← Kubernetes
                </Link>
              </div>
            }
          >
            <InterviewHeroStats />
          </InterviewHero>
        </div>
      </section>

      <div className="home interview-home">
        <div id="interview-syllabus">
          <InterviewSyllabus />
        </div>

        <section className="roadmap">
          <h2>DSA &amp; System Design — Every Phase</h2>
          <p className="section-desc">
            Across the <strong>3-phase, 1465-day</strong> plan, <strong>DSA</strong> and{' '}
            <strong>System Design</strong> are practiced <strong>in each stack’s language</strong> during the{' '}
            <strong>1000 Days of Code</strong> build phase: <strong>TypeScript / JavaScript</strong>, then{' '}
            <strong>Python</strong>, then <strong>Java</strong>. That’s{' '}
            <strong>100 days Agentic AI → 1000 Days of Code → 365 days DevOps</strong>.{' '}
            {interviewChapters.length} modules on this track support these phases.
          </p>
          <div className="roadmap-grid roadmap-interview">
            {interviewChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/interview/learn/${ch.slug}`}>{ch.interviewDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-interview" /> {interviewChapters.length} modules
            </span>
            <span>
              <span className="legend-dot published" /> DSA & System Design in each language: TypeScript · Python · Java · 1465 days total
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Interview Modules'}</h2>
            {query && (
              <Link to="/interview" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/interview">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/interview/learn" dayPrefix="IP" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
