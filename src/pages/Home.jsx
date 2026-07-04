import { useSearchParams, Link } from 'react-router-dom';
import { chapters, searchChapters } from '../data/chapters';
import { nextjsChapters } from '../data/nextjsChapters';
import { mobileChapters } from '../data/mobileChapters';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { MOBILE_META } from '../data/mobileSyllabus';
import { thunderRepo, PAID_COURSE_URL, strikeCourse } from '../data/syllabus';
import LectureCard from '../components/LectureCard';
import Syllabus from '../components/Syllabus';
import ThunderHero from '../components/ThunderHero';

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchChapters(query) : chapters;

  return (
    <>
      <section className="thunder-hero">
        <div className="thunder-hero-inner">
          <ThunderHero
            actions={
              <div className="thunder-hero-actions">
                <Link to="/learn/introduction-to-javascript" className="btn btn-primary btn-lg">
                  Start Day 1 — Free
                </Link>
                <a
                  href={PAID_COURSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-paid btn-lg"
                >
                  Full In-Depth Lectures
                </a>
                <a href="#syllabus" className="btn btn-outline-light btn-lg">
                  View Syllabus
                </a>
                <a
                  href={strikeCourse}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-strike btn-lg"
                >
                  Thunder on Strike →
                </a>
              </div>
            }
          >
            <p className="thunder-hero-desc">
              My notes from the{' '}
              <a href={thunderRepo} target="_blank" rel="noopener noreferrer">
                Thunder course
              </a>{' '}
              by Rohit Negi — {chapters.length} lectures live with code examples, playground, and quizzes.
            </p>
          </ThunderHero>
        </div>
      </section>

      <div className="home">
      <div id="syllabus">
        <Syllabus />
      </div>

      <section className="roadmap">
        <h2>100-Day JavaScript Roadmap</h2>
        <p className="section-desc">
          Following the Thunder 100 Days of Code program. All {chapters.length} days are published on this site.
        </p>
        <div className="roadmap-grid roadmap-100">
          {Array.from({ length: 100 }, (_, i) => {
            const day = i + 1;
            const chapter = chapters.find((c) => c.day === day);
            return (
              <div
                key={day}
                className={`roadmap-day ${chapter ? 'published' : 'upcoming'}`}
                title={chapter ? chapter.title : `Day ${day} — Coming soon`}
              >
                {chapter ? (
                  <Link to={`/learn/${chapter.slug}`}>{day}</Link>
                ) : (
                  <span>{day}</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="roadmap-legend">
          <span><span className="legend-dot published" /> Published ({chapters.length})</span>
          <span><span className="legend-dot upcoming" /> Coming soon</span>
        </div>
      </section>

      <section className="thunder-plus-section thunder-nextjs-section" id="thunder-nextjs">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-nextjs">After Day 100</span>
          <h2>Thunder+ — React & Next.js</h2>
          <p className="section-desc">
            Continue with the{' '}
            <a href={NEXTJS_META.udemyUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode Udemy course
            </a>{' '}
            by Hitesh Choudhary & Suraj Kumar Jha. {nextjsChapters.length} modules covering React, Next.js App
            Router, Convex, Supabase, Drizzle, AI projects, auth, and payments.
          </p>
          <div className="thunder-plus-highlights">
            <span>⚛️ React & Next.js</span>
            <span>🗄️ Convex & Supabase</span>
            <span>🤖 OpenAI & Gemini</span>
            <span>💳 Stripe & Razorpay</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/nextjs" className="btn btn-nextjs btn-lg">
              Explore Thunder+
            </Link>
            <Link to="/nextjs/learn/introduction-to-the-course" className="btn btn-nextjs-udemy btn-lg">
              Start NX Module 1
            </Link>
            <a
              href={NEXTJS_META.udemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-nextjs btn-lg"
            >
              Udemy Course
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section" id="thunder-plus">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge">After React & Next.js</span>
          <h2>Thunder++ — React Native</h2>
          <p className="section-desc">
            Then continue with the{' '}
            <a href={MOBILE_META.syllabusUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode Mobile Development Cohort
            </a>
            . {mobileChapters.length} lessons covering Expo, navigation, APIs, notifications, auth, and real-world app
            projects.
          </p>
          <div className="thunder-plus-highlights">
            <span>📱 React Native + Expo</span>
            <span>🧭 Expo Router</span>
            <span>🔔 Push Notifications</span>
            <span>🚀 EAS & Play Store</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/mobile" className="btn btn-mobile btn-lg">
              Explore Thunder++
            </Link>
            <Link to="/mobile/learn/react-js-refresher" className="btn btn-mobile-cohort btn-lg">
              Start RN Day 1
            </Link>
            <a
              href={MOBILE_META.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-mobile btn-lg"
            >
              ChaiCode GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="lectures" className="lectures-section">
        <div className="section-header">
          <h2>{query ? `Search Results for "${query}"` : 'All Lectures'}</h2>
          {query && (
            <Link to="/" className="clear-search">
              Clear search
            </Link>
          )}
        </div>

        {results.length === 0 ? (
          <div className="no-results">
            <p>No lectures found for "{query}".</p>
            <Link to="/">View all lectures</Link>
          </div>
        ) : (
          <div className="lecture-list">
            {results.map((ch) => (
              <LectureCard key={ch.slug} chapter={ch} />
            ))}
          </div>
        )}
      </section>
    </div>
    </>
  );
}
