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
          <h2>100-Day System Design Roadmap</h2>
          <p className="section-desc">
            This track covers the finale of the journey: <strong>System Design</strong> (12 Aug – 19 Nov 2028),{' '}
            <strong>Data Structures</strong> (20 Nov 2028 – 27 Feb 2029), <strong>100 Days of JavaScript DSA</strong>{' '}
            (28 Feb – 7 Jun 2029), a <strong>50 Days React Bootcamp</strong> (8 Jun – 27 Jul 2029), a{' '}
            <strong>100 Days of Python</strong> bootcamp (28 Jul – 4 Nov 2029), a{' '}
            <strong>100 Days of JavaScript</strong> bootcamp (5 Nov 2029 – 12 Feb 2030), a{' '}
            <strong>50 Days LeetCode in Java</strong> phase (13 Feb – 3 Apr 2030), a{' '}
            <strong>60 Days of Java</strong> masterclass (4 Apr – 2 Jun 2030), a{' '}
            <strong>30 JavaScript Projects</strong> sprint (3 Jun – 2 Jul 2030), then a{' '}
            <strong>Two-Week JavaScript Bootcamp</strong> closing the journey for{' '}
            <strong>14 days (~2 weeks)</strong> — 3 Jul 2030 to{' '}
            <strong>16 Jul 2030</strong>. Total study: <strong>1461 days</strong> from 17 Jul 2026 to 16 Jul 2030.{' '}
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
              <span className="legend-dot published" /> JS-DSA 100d · React 50d · Py 100d · JS 100d · LC 50d · Java 60d · JS30 30d · JS2w 14d (~2w) → 16 Jul 2030 · 1461 total
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
