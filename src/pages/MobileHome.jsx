import { useSearchParams, Link } from 'react-router-dom';
import { mobileChapters, searchMobileChapters } from '../data/mobileChapters';
import { MOBILE_META } from '../data/mobileSyllabus';
import LectureCard from '../components/LectureCard';
import MobileSyllabus from '../components/MobileSyllabus';
import MobileHero, { MobileHeroStats } from '../components/MobileHero';

export default function MobileHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchMobileChapters(query) : mobileChapters;
  return (
    <>
      <section className="mobile-hero">
        <div className="mobile-hero-inner">
          <MobileHero
            actions={
              <div className="mobile-hero-actions">
                <Link to="/mobile/learn/react-js-refresher" className="btn btn-mobile btn-lg">
                  Start RN Day 1
                </Link>
                <a
                  href={MOBILE_META.cohortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mobile-cohort btn-lg"
                >
                  ChaiCode Cohort
                </a>
                <a href="#mobile-syllabus" className="btn btn-outline-mobile btn-lg">
                  View Syllabus
                </a>
                <Link to="/nextjs" className="btn btn-outline-mobile btn-lg">
                  ← React & Next.js
                </Link>
                <Link to="/python" className="btn btn-outline-mobile btn-lg">
                  Python & AI →
                </Link>
              </div>
            }
          >
            <MobileHeroStats />
          </MobileHero>
        </div>
      </section>

      <div className="home mobile-home">
        <div id="mobile-syllabus">
          <MobileSyllabus />
        </div>

        <section className="roadmap">
          <h2>25-Lesson Mobile Roadmap</h2>
          <p className="section-desc">
            Thunder++ continues after React & Next.js. All {mobileChapters.length} React Native lessons are on
            this site.
          </p>
          <div className="roadmap-grid roadmap-mobile">
            {mobileChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/mobile/learn/${ch.slug}`}>{ch.rnDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-mobile" /> {mobileChapters.length} lessons
            </span>
            <span>
              <span className="legend-dot published" /> After React & Next.js
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Mobile Lessons'}</h2>
            {query && (
              <Link to="/mobile" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No lessons found for "{query}".</p>
              <Link to="/mobile">View all lessons</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/mobile/learn" dayPrefix="RN" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
