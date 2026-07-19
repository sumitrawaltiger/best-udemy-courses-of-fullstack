import { useSearchParams, Link } from 'react-router-dom';
import { javaChapters, searchJavaChapters } from '../data/javaChapters';
import { JAVA_META } from '../data/javaSyllabus';
import LectureCard from '../components/LectureCard';
import JavaSyllabus from '../components/JavaSyllabus';
import JavaHero, { JavaHeroStats } from '../components/JavaHero';

export default function JavaHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchJavaChapters(query) : javaChapters;

  return (
    <>
      <section className="java-hero">
        <div className="java-hero-inner">
          <JavaHero
            actions={
              <div className="java-hero-actions">
                <Link
                  to="/java/learn/introduction-to-java-and-setup"
                  className="btn btn-java btn-lg"
                >
                  Start JV Module 1
                </Link>
                <a
                  href={JAVA_META.primaryUdemyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-java-udemy btn-lg"
                >
                  Udemy — Java Course
                </a>
                <a href="#java-syllabus" className="btn btn-outline-java btn-lg">
                  View Syllabus
                </a>
                <Link to="/spring-boot-ecommerce-roadmap" className="btn btn-java btn-lg">
                  Full-Stack E-Commerce Roadmap 🛒
                </Link>
                <Link to="/python" className="btn btn-outline-java btn-lg">
                  ← Python & Agentic AI
                </Link>
                <Link to="/aws" className="btn btn-outline-java btn-lg">
                  AWS Cloud →
                </Link>
              </div>
            }
          >
            <JavaHeroStats />
          </JavaHero>
        </div>
      </section>

      <div className="home java-home">
        <div id="java-syllabus">
          <JavaSyllabus />
        </div>

        <section className="roadmap">
          <h2>50-Module Java & Spring Roadmap</h2>
          <p className="section-desc">
            Path:{' '}
            <strong>J2SE → J2EE → JPA → Spring Boot → Microservices</strong> — {javaChapters.length} modules of the
            Java stack.
          </p>
          <div className="roadmap-grid roadmap-java">
            {javaChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/java/learn/${ch.slug}`}>{ch.javaDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-java" /> {javaChapters.length} modules
            </span>
            <span>
              <span className="legend-dot published" /> J2SE → J2EE → JPA → Spring Boot → Microservices
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Java Modules'}</h2>
            {query && (
              <Link to="/java" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/java">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/java/learn" dayPrefix="JV" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
