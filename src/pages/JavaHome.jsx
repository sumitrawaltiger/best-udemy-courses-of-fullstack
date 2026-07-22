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
                <Link to="/java/roadmap" className="btn btn-java btn-lg">
                  Java Engineering Roadmap 🗺️
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

        <section className="roadmap" id="java-26">
          <div className="section-header">
            <h2>☕ Java 26 — Latest Features</h2>
            <a href="/java-notes/java-26-latest-features.jpg" download className="btn btn-java">
              📥 Download
            </a>
          </div>
          <p className="section-desc">
            <strong>Java 26 (JDK 26)</strong> is here — released <strong>17 March 2026</strong>. A one-page look at
            the <strong>10 core updates in JDK 26</strong> — AOT object caching, structured concurrency, native
            HTTP/3, integrity by default (JEP 500), AI-readiness, GC &amp; performance, the Foreign Function &amp;
            Memory API, and platform modernization — plus the top recent releases (JDK 25 LTS, Spring Boot 4.0 &amp;
            AI) and why it matters.
          </p>
          <figure style={{ margin: '0 auto', textAlign: 'center', maxWidth: '980px' }}>
            <a href="/java-notes/java-26-latest-features.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/java-notes/java-26-latest-features.jpg"
                alt="Java 26 is Here (released 17 March 2026) — the 10 core updates in JDK 26 (AOT object caching, structured concurrency, native HTTP/3, integrity by default JEP 500, removal of the Applet API, AI-readiness, performance & GC improvements, Foreign Function & Memory API, developer productivity, platform modernization), top Java releases (JDK 26, JDK 25 LTS, Spring Boot 4.0 & AI, Eclipse IDE 2026-06), and why it matters."
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 14px 44px rgba(0, 0, 0, 0.45)',
                }}
                onError={(e) => { const f = e.currentTarget.closest('figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.6 }}>
              Java 26 at a glance — click to open full size ↗
            </figcaption>
          </figure>
        </section>

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
