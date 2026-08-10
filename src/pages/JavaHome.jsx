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

        <section className="roadmap" id="java-evolution">
          <div className="section-header">
            <h2>🚀 Java Evolution — Java 8 → Java 25</h2>
            <a href="/java-notes/java25.jpeg" download className="btn btn-java">
              📥 Download
            </a>
          </div>
          <p className="section-desc">
            <strong>Smarter Language. Stronger Platform. Unlimited Possibilities.</strong> From Lambdas in Java 8 to
            Virtual Threads in Java 21 and cloud-native JVM optimisations in Java 25 — here's how Java evolved across
            the five landmark releases every developer should know.
          </p>
          <figure style={{ margin: '0 auto', textAlign: 'center', maxWidth: '980px' }}>
            <a href="/java-notes/java25.jpeg" target="_blank" rel="noopener noreferrer">
              <img
                src="/java-notes/java25.jpeg"
                alt="Java Evolution From Java 8 to Java 25 — Java 8 (2014): Lambda Expressions, Stream API, Optional, New Date & Time API (Functional Programming); Java 11 (2018 LTS): HttpClient API, String utilities isBlank/lines, var in lambda parameters, Better performance & GC improvements (Modern APIs); Java 17 (2021 LTS): Records, Sealed Classes, Pattern Matching for instanceof, Stronger security & JVM enhancements (Cleaner Domain Models); Java 21 (2023 LTS): Virtual Threads, Record Patterns, Pattern Matching for switch, Sequenced Collections (Lightweight Concurrency); Java 25 (2025): Performance & GC improvements, Better concurrency support, Continued Project Loom & JVM enhancements, More optimizations for cloud-native apps (Faster Smarter JVM). Focus: Java 17 & Java 21 for modern development, Java 8 for legacy enterprise systems."
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
              Java 8 → Java 25 at a glance — click to open full size ↗
            </figcaption>
          </figure>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                version: 'Java 8',
                year: '2014',
                lts: false,
                color: '#f97316',
                theme: 'Functional Programming',
                icon: 'λ',
                features: [
                  'Lambda Expressions — concise anonymous functions',
                  'Stream API — functional pipelines over collections',
                  'Optional — null-safe value containers',
                  'New Date & Time API — java.time replaces Date/Calendar',
                ],
              },
              {
                version: 'Java 11',
                year: '2018',
                lts: true,
                color: '#22c55e',
                theme: 'Modern APIs',
                icon: '🌐',
                features: [
                  'HttpClient API — built-in HTTP/2 client',
                  'String utilities — isBlank(), lines(), strip()',
                  'var in lambda parameters — cleaner lambdas',
                  'Better performance & GC improvements',
                ],
              },
              {
                version: 'Java 17',
                year: '2021',
                lts: true,
                color: '#3b82f6',
                theme: 'Cleaner Domain Models',
                icon: '📦',
                features: [
                  'Records — concise immutable data classes',
                  'Sealed Classes — restricted class hierarchies',
                  'Pattern Matching for instanceof — eliminates casts',
                  'Stronger security & JVM enhancements',
                ],
              },
              {
                version: 'Java 21',
                year: '2023',
                lts: true,
                color: '#a855f7',
                theme: 'Lightweight Concurrency',
                icon: '⚡',
                features: [
                  'Virtual Threads — millions of lightweight threads',
                  'Record Patterns — nested destructuring in patterns',
                  'Pattern Matching for switch — exhaustive matching',
                  'Sequenced Collections — ordered collection APIs',
                ],
              },
              {
                version: 'Java 25',
                year: '2025',
                lts: false,
                color: '#6366f1',
                theme: 'Faster, Smarter JVM',
                icon: '📈',
                features: [
                  'Performance & GC improvements',
                  'Better concurrency support',
                  'Continued Project Loom & JVM enhancements',
                  'More optimisations for cloud-native apps',
                ],
              },
            ].map((v) => (
              <div
                key={v.version}
                style={{
                  background: 'var(--card-bg, rgba(255,255,255,0.04))',
                  border: `2px solid ${v.color}55`,
                  borderRadius: '12px',
                  padding: '1.1rem 1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{v.icon}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <strong style={{ color: v.color, fontSize: '1rem' }}>{v.version}</strong>
                      {v.lts && (
                        <span style={{ fontSize: '0.65rem', background: v.color + '33', color: v.color, border: `1px solid ${v.color}66`, borderRadius: '4px', padding: '1px 5px', fontWeight: 700, letterSpacing: '0.05em' }}>LTS</span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.55 }}>{v.year}</div>
                  </div>
                </div>
                <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.1rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
                  {v.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div style={{ fontSize: '0.75rem', color: v.color, fontWeight: 600, opacity: 0.85 }}>
                  {v.theme}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', background: 'var(--card-bg, rgba(255,255,255,0.04))', border: '1.5px solid #f97316aa', borderRadius: '10px', padding: '1rem 1.5rem', fontSize: '0.88rem', lineHeight: 1.7 }}>
            <strong style={{ color: '#f97316' }}>🎯 Focus for Developers:</strong>{' '}
            <strong>Java 17</strong> &amp; <strong>Java 21</strong> for modern development (Spring Boot 3+, virtual threads, records, sealed classes).{' '}
            <strong>Java 8</strong> understanding for legacy enterprise systems. Most production stacks today run on <strong>Java 17 LTS</strong> or <strong>Java 21 LTS</strong>.
          </div>
        </section>

        <section className="roadmap" id="gc-basics">
          <div className="section-header">
            <h2>♻️ Garbage Collection Basics</h2>
            <a href="/java-notes/gc-basics.jpeg" download className="btn btn-java">
              📥 Download
            </a>
          </div>
          <p className="section-desc">
            <strong>Garbage Collection (GC)</strong> is the automatic memory management process in the JVM. It
            reclaims memory by removing objects that are <strong>no longer reachable</strong> — preventing memory
            leaks and <code>OutOfMemoryError</code> without any developer intervention.
          </p>
          <figure style={{ margin: '0 auto', textAlign: 'center', maxWidth: '980px' }}>
            <a href="/java-notes/gc-basics.jpeg" target="_blank" rel="noopener noreferrer">
              <img
                src="/java-notes/gc-basics.jpeg"
                alt="Garbage Collection Basics — What is GC, How GC Works (Root References → Heap traversal), When GC Runs, Generational Hypothesis (Young Generation / Old Generation), Common GC Goals (Throughput, Pause Time, Memory Leaks, Balance), and the House Cleaner analogy."
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
              Day 40 — Garbage Collection Basics · click to open full size ↗
            </figcaption>
          </figure>

          <div className="gc-notes" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                title: '1. What is GC?',
                color: '#4caf50',
                points: [
                  'GC automatically reclaims memory occupied by objects that are no longer in use.',
                  'Helps prevent memory leaks and OutOfMemoryError.',
                  'JVM decides when and how to run GC.',
                  'Developers do NOT control GC explicitly.',
                ],
                code: 'User user = new User();\nuser = null; // eligible for GC',
              },
              {
                title: '2. How GC Works',
                color: '#9c27b0',
                points: [
                  'Starts from Root References — Stack (local vars), Static variables, JNI references.',
                  'Traces all objects reachable from roots (mark phase).',
                  'Unreachable objects are swept and their memory freed.',
                  'GC identifies unreachable objects and frees up their memory.',
                ],
              },
              {
                title: '3. Key Points',
                color: '#ff9800',
                points: [
                  'GC runs in the background.',
                  'Identifies unreachable objects starting from Root References.',
                  'Reclaims memory and makes it available for new objects.',
                  'Improves application stability and performance.',
                  'Root refs include: local variables, static variables, JNI references, active threads.',
                ],
              },
              {
                title: '4. When Does GC Run?',
                color: '#f06292',
                points: [
                  'When the heap is running low on memory.',
                  'JVM chooses the right time — not the developer.',
                  'Different GC algorithms have different strategies.',
                ],
                note: 'System.gc() can request GC, but JVM may ignore it. Never rely on it.',
              },
              {
                title: '5. Generational Hypothesis',
                color: '#8bc34a',
                points: [
                  '"Most objects die young, few live long."',
                  'Young Generation (Eden + Survivor Spaces) — new objects created here, most collected here.',
                  'Old Generation (Tenured) — objects surviving multiple GCs; collected less often.',
                ],
              },
              {
                title: '6. Common GC Goals',
                color: '#00bcd4',
                points: [
                  'Maximize Throughput — complete more work in less time.',
                  'Minimize Pause Time — reduce impact on the running application.',
                  'Prevent Memory Leaks — reclaim unused memory automatically.',
                  'Maintain Balance — between throughput and pause time.',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--card-bg, rgba(255,255,255,0.04))',
                  border: `1.5px solid ${card.color}55`,
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                }}
              >
                <h3 style={{ color: card.color, fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {card.title}
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {card.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                {card.code && (
                  <pre style={{ marginTop: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.78rem', overflowX: 'auto' }}>{card.code}</pre>
                )}
                {card.note && (
                  <p style={{ marginTop: '0.6rem', fontSize: '0.8rem', color: '#f06292', fontStyle: 'italic' }}>⚠️ {card.note}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', background: 'var(--card-bg, rgba(255,255,255,0.04))', border: '1.5px solid #03a9f455', borderRadius: '10px', padding: '1rem 1.5rem' }}>
            <h3 style={{ color: '#03a9f4', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              7. Easy Way to Remember — GC as a House Cleaner
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem' }}>
              {[
                { label: 'House (Heap)', desc: 'Objects are like items in the house.' },
                { label: 'Cleaner (GC)', desc: 'Finds unwanted items and removes them.' },
                { label: 'Clean House', desc: 'Memory is free and ready for new items.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {i > 0 && <span style={{ opacity: 0.4 }}>→</span>}
                  <div style={{ background: 'rgba(3,169,244,0.1)', border: '1px solid #03a9f455', borderRadius: '8px', padding: '0.4rem 0.75rem', textAlign: 'center' }}>
                    <div style={{ color: '#03a9f4', fontWeight: 600 }}>{step.label}</div>
                    <div style={{ opacity: 0.75, fontSize: '0.78rem' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap">
          <h2>50-Module Java & Spring Roadmap</h2>
          <p className="section-desc">
            Path:{' '}
            <strong>J2SE → JPA → Spring Boot → Microservices → Automation Testing</strong> — {javaChapters.length} modules of the
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
              <span className="legend-dot published" /> J2SE → JPA → Spring Boot → Microservices → Automation Testing
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
