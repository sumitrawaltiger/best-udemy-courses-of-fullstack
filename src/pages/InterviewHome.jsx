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
          <h2>DSA &amp; System Design — Every Year</h2>
          <p className="section-desc">
            In the re-sequenced 4-year plan, <strong>DSA</strong> and <strong>System Design</strong> are practiced{' '}
            <strong>every year in that year’s language</strong>:{' '}
            <strong>JavaScript</strong> in Year 1 (DSA 24 Feb – 3 Jun 2027 · System Design 4 Jun – 23 Jul 2027),{' '}
            <strong>Python</strong> in Year 2 (25 Feb – 23 Jul 2028), and <strong>Java</strong> in Year 3
            (14 Feb – 23 Jul 2029). Total study: <strong>1461 days</strong> from 24 Jul 2026 to 23 Jul 2030.{' '}
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
              <span className="legend-dot published" /> DSA & System Design each year: JS (Y1) · Python (Y2) · Java (Y3) → 23 Jul 2030 · 1461 total
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
