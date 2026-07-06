import { useSearchParams, Link } from 'react-router-dom';
import { nextjsChapters, searchNextjsChapters } from '../data/nextjsChapters';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import LectureCard from '../components/LectureCard';
import NextjsSyllabus from '../components/NextjsSyllabus';
import NextjsHero, { NextjsHeroStats } from '../components/NextjsHero';

export default function NextjsHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchNextjsChapters(query) : nextjsChapters;

  return (
    <>
      <section className="nextjs-hero">
        <div className="nextjs-hero-inner">
          <NextjsHero
            actions={
              <div className="nextjs-hero-actions">
                <Link to="/nextjs/learn/introduction-to-the-course" className="btn btn-nextjs btn-lg">
                  Start NX Module 1
                </Link>
                <a
                  href={NEXTJS_META.udemyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-nextjs-udemy btn-lg"
                >
                  Udemy Course
                </a>
                <a href="#nextjs-syllabus" className="btn btn-outline-nextjs btn-lg">
                  View Syllabus
                </a>
                <a
                  href="/react-nextjs-course-slides.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-nextjs btn-lg"
                >
                  📄 React Slides (PDF)
                </a>
                <Link to="/" className="btn btn-outline-nextjs btn-lg">
                  ← Thunder 100 Days
                </Link>
                <Link to="/mobile" className="btn btn-outline-nextjs btn-lg">
                  React Native →
                </Link>
              </div>
            }
          >
            <NextjsHeroStats />
          </NextjsHero>
        </div>
      </section>

      <div className="home nextjs-home">
        <div id="nextjs-syllabus">
          <NextjsSyllabus />
        </div>

        <section className="roadmap">
          <h2>30-Module React & Next.js Roadmap</h2>
          <p className="section-desc">
            Thunder+ starts after Day 100. All {nextjsChapters.length} modules are on this site, then React Native
            follows.
          </p>
          <div className="roadmap-grid roadmap-nextjs">
            {nextjsChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/nextjs/learn/${ch.slug}`}>{ch.nextDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-nextjs" /> {nextjsChapters.length} modules
            </span>
            <span>
              <span className="legend-dot published" /> After Thunder · Before React Native
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Modules'}</h2>
            {query && (
              <Link to="/nextjs" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/nextjs">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/nextjs/learn" dayPrefix="NX" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
