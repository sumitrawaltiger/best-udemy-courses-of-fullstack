import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { searchAllCurricula } from '../data/searchAll';
import { nextjsChapters } from '../data/nextjsChapters';
import { pythonChapters } from '../data/pythonChapters';
import { javaChapters } from '../data/javaChapters';
import { awsChapters } from '../data/awsChapters';
import { devopsChapters } from '../data/devopsChapters';
import { k8sChapters } from '../data/k8sChapters';
import { interviewChapters } from '../data/interviewChapters';
import { mobileChapters } from '../data/mobileChapters';
import { genaiChapters } from '../data/genaiChapters';
import { GENAI_META } from '../data/genaiSyllabus';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { PYTHON_META } from '../data/pythonSyllabus';
import { JAVA_META } from '../data/javaSyllabus';
import { AWS_META } from '../data/awsSyllabus';
import { DEVOPS_META } from '../data/devopsSyllabus';
import { K8S_META } from '../data/k8sSyllabus';
import { INTERVIEW_META, DSA_META } from '../data/interviewSyllabus';
import { MOBILE_META } from '../data/mobileSyllabus';
import { PAID_COURSE_URL } from '../data/syllabus';
import { JS_INTERVIEW_QUESTIONS } from '../data/interviewQuestions';
import { REACT_INTERVIEW_QUESTIONS } from '../data/reactInterviewQuestions';
import { NEXTJS_INTERVIEW_QUESTIONS } from '../data/nextjsInterviewQuestions';
import { JAVA_INTERVIEW_QUESTIONS } from '../data/javaInterviewQuestions';
import { KAFKA_INTERVIEW_QUESTIONS } from '../data/kafkaInterviewQuestions';
import { MICROSERVICES_INTERVIEW_QUESTIONS } from '../data/microservicesInterviewQuestions';
import { SQL_INTERVIEW_QUESTIONS } from '../data/sqlInterviewQuestions';
import { MONGODB_INTERVIEW_QUESTIONS } from '../data/mongodbInterviewQuestions';
import { JAVA_STREAMS_PUZZLES } from '../data/javaStreamsPuzzles';
import { SQL_QUERY_PUZZLES } from '../data/sqlQueryPuzzles';
import { BEST_COURSES } from '../data/bestUdemyCourses';
import LectureCard from '../components/LectureCard';
import Syllabus from '../components/Syllabus';
import JourneyCountdown from '../components/JourneyCountdown';

const BTECH_ROADMAP = [
  {
    year: 'Skills 1–3',
    theme: 'Python + FastAPI + Agentic AI',
    icon: '🐍',
    accent: 'y1',
    topics: ['Core Python', 'FastAPI', 'LangChain', 'LangGraph', 'MCP', 'n8n Workflows', 'AI Agents'],
    blurb: 'The Python Stack — 100 days each of core Python, FastAPI APIs, and Agentic AI (LangChain, LangGraph, MCP). The AI + API foundation. Days 1–300.',
    links: [
      { label: 'Python & FastAPI', to: '/python' },
      { label: 'Agentic AI', to: '/python' },
    ],
  },
  {
    year: 'Skills 4–8',
    theme: 'JavaScript → TypeScript → React JS → Next JS → React Native',
    icon: '🔷',
    accent: 'y2',
    topics: ['JavaScript', 'TypeScript', 'React JS', 'Next JS', 'React Native'],
    blurb: 'The JS/TS frontend & mobile ecosystem — 100 days each of JavaScript, TypeScript, React JS, Next JS, and React Native. Days 301–800.',
    links: [
      { label: 'JavaScript', to: '/' },
      { label: 'TypeScript', to: '/typescript' },
      { label: 'React & Next JS', to: '/nextjs' },
      { label: 'React Native', to: '/mobile' },
    ],
  },
  {
    year: 'Skills 9–10',
    theme: 'Databases → Express JS',
    icon: '🗄️',
    accent: 'y3',
    topics: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Express JS', 'Prisma', 'JWT Auth'],
    blurb: 'Data layer first, then APIs on top — 100 days of SQL & NoSQL (PostgreSQL, MySQL, MongoDB, Redis), then 100 days of Express / Node JS REST APIs with Prisma and JWT auth. Days 801–1000.',
    links: [
      { label: 'Java & Databases', to: '/java' },
    ],
  },
  {
    year: 'Skills 11–15',
    theme: 'J2SE → Automation Testing → JPA → Spring Boot → Microservices',
    icon: '☕',
    accent: 'y3',
    topics: ['J2SE', 'Automation Testing', 'JPA', 'Spring Boot', 'Microservices'],
    blurb: 'Java (400 days) + Automation Testing (100 days) — J2SE, then test automation, then JPA, Spring Boot, and Microservices. Days 1001–1500.',
    links: [{ label: 'Java Stack', to: '/java' }],
  },
  {
    year: 'Skills 16–20',
    theme: 'DevOps → Cloud (AWS) → Kubernetes → System Design → Capstone',
    icon: '🚀',
    accent: 'y5',
    topics: ['Linux', 'Docker', 'CI/CD', 'AWS Cloud', 'Kubernetes', 'CKA', 'System Design', 'Capstone'],
    blurb: 'Ship, scale, and orchestrate — 100 days each of DevOps, AWS Cloud, Kubernetes (CKA), and a dedicated System Design intensive, then a 100-day Capstone tying all 19 skills together. Days 1501–2000.',
    links: [
      { label: 'DevOps', to: '/devops' },
      { label: 'AWS Cloud', to: '/aws' },
      { label: 'Roadmap', to: '/roadmap' },
    ],
  },
];

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const searchResults = query ? searchAllCurricula(query) : [];
  const results = query ? searchResults : chapters;

  useEffect(() => {
    if (query) {
      const el = document.getElementById('search-results-top');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [query]);

  return (
    <>
      <section className="fle-hero">
        <div className="fle-hero-grid" aria-hidden="true" />
        <span className="fle-orb fle-orb-1" aria-hidden="true" />
        <span className="fle-orb fle-orb-2" aria-hidden="true" />
        <span className="fle-orb fle-orb-3" aria-hidden="true" />

        <div className="fle-hero-inner">
          <div className="fle-hero-left">
            <span className="fle-badge"><span aria-hidden="true">⚡</span> Road to Full Lifecycle Engineer</span>
            <h1 className="fle-title">
              Master <span className="fle-hl">Agentic AI</span>, the <span className="fle-hl">Full Stack</span> &amp;{' '}
              <span className="fle-hl">DevOps</span>
            </h1>
            <p className="fle-sub">
              A structured <strong>2,000-day journey</strong> — <strong>20 skills, 19×100 days + Capstone 100</strong>:
              Python, FastAPI, Agentic AI, JavaScript, TypeScript, React JS, Next JS, React Native,
              Databases, Express JS, J2SE, Automation Testing, JPA, Spring Boot, Microservices, DevOps, Cloud (AWS), Kubernetes,
              System Design, and a 100-day Capstone Project integrating all 19 skills.
              Data Structures &amp; Algorithms practiced throughout. One skill at a time, fully focused, front to back.
            </p>

            <div className="fle-pills">
              <span className="fle-pill"><span aria-hidden="true">⚡</span> 2,000 Days of Code</span>
              <span className="fle-pill"><span aria-hidden="true">🧠</span> 20 Skills · 19×100 Days + Capstone 100</span>
              <span className="fle-pill"><span aria-hidden="true">🚀</span> Python → JS/TS → Databases → Java → DevOps → Capstone</span>
              <span className="fle-pill"><span aria-hidden="true">📐</span> DSA &amp; System Design Throughout</span>
            </div>

            <JourneyCountdown variant="hero" />

            <div className="fle-cta-row">
              <Link to="/day-000" className="fle-btn-primary">
                Start Day 0 →
              </Link>
              <Link to="/roadmap" className="fle-btn-ghost">
                View the Roadmap
              </Link>
            </div>

            <div className="fle-quicklinks">
              <Link to="/day-000" className="fle-chip">🛠️ Day 0 · Setup</Link>
              <Link to="/genai" className="fle-chip">🤖 Gen AI Track</Link>
              <a href={PAID_COURSE_URL} target="_blank" rel="noopener noreferrer" className="fle-chip">🎬 Full Lectures</a>
              <Link to="/interview-questions" className="fle-chip">💬 Interview Q&amp;A</Link>
              <Link to="/best-udemy-courses" className="fle-chip">🎓 Best Udemy Courses</Link>
              <Link to="/cheat-sheets" className="fle-chip">📄 Cheat Sheets</Link>
              <Link to="/about-founder" className="fle-chip">👤 About the Author</Link>
            </div>
          </div>

          <div className="fle-hero-right" aria-hidden="true">
            <div className="fle-cube-scene">
              <div className="fle-cube">
                <span className="fle-face fle-face-front">GEN AI</span>
                <span className="fle-face fle-face-back">DEVOPS</span>
                <span className="fle-face fle-face-right">TS</span>
                <span className="fle-face fle-face-left">PYTHON</span>
                <span className="fle-face fle-face-top">JAVA</span>
                <span className="fle-face fle-face-bottom">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {query && (
        <section id="search-results-top" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}>
              {searchResults.length > 0
                ? `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${query}"`
                : `No results for "${query}"`}
            </h2>
            <Link to="/" style={{ fontSize: '0.85rem', opacity: 0.65, textDecoration: 'none', border: '1px solid currentColor', padding: '4px 12px', borderRadius: '20px' }}>
              ✕ Clear search
            </Link>
          </div>
          {searchResults.length === 0 ? (
            <p style={{ opacity: 0.6 }}>Try a different keyword — e.g. "LangChain", "Spring Boot", "Docker", "React".</p>
          ) : (
            <div className="lecture-list">
              {searchResults.map((ch) => (
                <div key={`${ch._basePath || ''}-${ch.slug}`}>
                  {ch._track && (
                    <p style={{ margin: '12px 0 4px 2px', fontSize: '0.72rem', fontWeight: 700, opacity: 0.55, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      {ch._track}
                    </p>
                  )}
                  <LectureCard chapter={ch} basePath={ch._basePath || '/learn'} dayPrefix={ch._dayPrefix || 'Day'} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <div className="home">
      <section className="btech-roadmap" id="btech-roadmap">
        <div className="btech-inner">
          <span className="btech-badge">The Roadmap</span>
          <h2 className="btech-title">The 2,000-Day Learning Path</h2>
          <p className="btech-sub">
            A structured path to a full lifecycle engineer — <strong>5 phases</strong>:{' '}
            <strong>Python Stack (Agentic AI → Python → FastAPI) → TypeScript Stack → Java Stack → DevOps
            Stack → Kubernetes → System Design → Capstone Project</strong> — <strong>2,000 days</strong> total. Each stack bundles several tracks on this
            site. Data Structures &amp; Algorithms are practiced throughout every stack; System Design gets a dedicated
            100-day intensive as Skill 19 before the Capstone.
          </p>
          <div className="btech-grid">
            {BTECH_ROADMAP.map((yr) => (
              <article className={`btech-card btech-card--${yr.accent}`} key={yr.year}>
                <div className="btech-card-head">
                  <span className="btech-card-icon" aria-hidden="true">
                    {yr.icon}
                  </span>
                  <div>
                    <p className="btech-card-year">{yr.year}</p>
                    <h3 className="btech-card-theme">{yr.theme}</h3>
                  </div>
                </div>
                <p className="btech-card-blurb">{yr.blurb}</p>
                <div className="btech-tags">
                  {yr.topics.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="btech-links">
                  {yr.links.map((lnk) =>
                    lnk.to.startsWith('#') ? (
                      <a key={lnk.label} href={lnk.to} className="btech-link">
                        {lnk.label} →
                      </a>
                    ) : (
                      <Link key={lnk.label} to={lnk.to} className="btech-link">
                        {lnk.label} →
                      </Link>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section className="roadmap" id="backend-engineering-notes">
        <div className="section-header">
          <h2>⚙️ Backend Engineering — API Gateway</h2>
          <a href="/backend-notes/api-gateway-day55.jpeg" download className="btn">
            📥 Download
          </a>
        </div>
        <p className="section-desc">
          <strong>Day 55 — API Gateway: Concepts and Simple Implementation.</strong> A single entry point for all
          client requests — routing, authentication, rate limiting, caching, and request/response transformation.
          Built with <strong>Node.js + Express + http-proxy-middleware</strong>.
        </p>
        <figure style={{ margin: '0 auto', textAlign: 'center', maxWidth: '700px' }}>
          <a href="/backend-notes/api-gateway-day55.jpeg" target="_blank" rel="noopener noreferrer">
            <img
              src="/backend-notes/api-gateway-day55.jpeg"
              alt="Learning Backend Engineering Day 55 — API Gateway: concepts (what it is, how it works, key responsibilities, benefits, common patterns, architecture), popular solutions (Kong, Nginx, Amazon API Gateway, Traefik, Spring Cloud Gateway, Apigee), simple Node.js implementation with Express and http-proxy-middleware, security, monitoring, best practices, use cases, common pitfalls, and key takeaway."
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 14px 44px rgba(0,0,0,0.45)' }}
              onError={(e) => { const f = e.currentTarget.closest('figure'); if (f) f.style.display = 'none'; }}
            />
          </a>
          <figcaption style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.6 }}>
            Learning Backend Engineering · Day 55 — click to open full size ↗
          </figcaption>
        </figure>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
          {[
            {
              title: 'What is an API Gateway?',
              color: '#6366f1',
              points: [
                'A single entry point for all client requests to backend services.',
                'Routes requests to the right services.',
                'Handles cross-cutting concerns: security, rate limiting, logging.',
                'Hides internal service architecture.',
                'Centralizes common functionality.',
                'Improves security, performance, scalability, and monitoring.',
              ],
            },
            {
              title: 'How It Works',
              color: '#10b981',
              points: [
                '1. Client sends request to the API Gateway.',
                '2. Gateway authenticates, authorizes, and validates the request.',
                '3. Gateway routes the request to the appropriate service.',
                '4. Response is returned to the client through the gateway.',
                'Flow: Client → API Gateway → User Service / Order Service / Payment Service.',
              ],
            },
            {
              title: 'Key Responsibilities',
              color: '#f59e0b',
              points: [
                'Authentication & Authorization — validate tokens, API keys, or OAuth.',
                'Routing — route requests to the correct service.',
                'Rate Limiting — protect services from abuse and overload.',
                'Logging & Monitoring — capture logs, metrics, and traces.',
                'Caching — cache responses to improve performance.',
                'Request/Response Transformation — modify headers, body, or format.',
              ],
            },
            {
              title: 'Common Patterns',
              color: '#ec4899',
              points: [
                'Proxy Pattern — gateway acts as a proxy for backend services.',
                'Backend for Frontend (BFF) — different gateways for web, mobile, etc.',
                'Aggregation — combine data from multiple services.',
                'Circuit Breaker — prevent cascading failures.',
              ],
            },
            {
              title: 'Popular Solutions',
              color: '#14b8a6',
              points: [
                'Kong — open source, cloud-native API gateway.',
                'Nginx — high performance, can act as API gateway.',
                'Amazon API Gateway — managed service by AWS.',
                'Traefik — modern reverse proxy and gateway.',
                'Spring Cloud Gateway — built on Spring WebFlux.',
                'Apigee — enterprise API management platform.',
              ],
            },
            {
              title: 'Node.js Implementation',
              color: '#f97316',
              code: 'npm init -y\nnpm install express http-proxy-middleware cors\n\n// index.js\nconst { createProxyMiddleware } = require("http-proxy-middleware");\napp.use("/users", createProxyMiddleware({\n  target: process.env.USER_SERVICE,\n  changeOrigin: true,\n  pathRewrite: { "^/users": "/" }\n}));\napp.use("/orders", createProxyMiddleware({\n  target: process.env.ORDER_SERVICE,\n  changeOrigin: true\n}));\napp.listen(PORT);',
              points: [],
            },
            {
              title: 'Security at Gateway',
              color: '#8b5cf6',
              points: [
                'Validate JWT / OAuth tokens.',
                'API key validation.',
                'IP whitelisting / blacklisting.',
                'OWASP protection (rate limiting, input validation).',
                'HTTPS / TLS termination.',
              ],
            },
            {
              title: 'Monitoring & Observability',
              color: '#06b6d4',
              points: [
                'Track request/response logs.',
                'Metrics: QPS, latency, errors.',
                'Distributed tracing.',
                'Alerts and dashboards (Prometheus, Grafana).',
              ],
            },
            {
              title: 'Best Practices',
              color: '#84cc16',
              points: [
                'Keep gateway stateless.',
                'Use caching for frequent responses.',
                'Implement rate limiting and throttling.',
                'Apply circuit breaker for downstream calls.',
                'Version your APIs.',
                'Monitor and alert on failures.',
              ],
            },
            {
              title: 'Common Pitfalls',
              color: '#ef4444',
              points: [
                'Gateway becomes a bottleneck.',
                'Too much logic in the gateway.',
                'Missing timeouts and retries.',
                'Not securing the gateway.',
                'Ignoring monitoring and logging.',
              ],
            },
            {
              title: 'Use Cases',
              color: '#a78bfa',
              points: [
                'Microservices architectures.',
                'Mobile and SPA backends.',
                'Partner / third-party integrations.',
                'Multi-tenant systems.',
                'Hybrid cloud and distributed systems.',
              ],
            },
            {
              title: 'Key Takeaway',
              color: '#fbbf24',
              points: [
                'An API Gateway simplifies client interaction, improves security, and centralizes cross-cutting concerns.',
                "It's a must-have component in modern backend architectures.",
                'One Gateway. Many Services. Infinite Possibilities.',
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}
            >
              <h3 style={{ color: card.color, fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {card.title}
              </h3>
              {card.points.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {card.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              )}
              {card.code && (
                <pre style={{ marginTop: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', overflowX: 'auto' }}>{card.code}</pre>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="thunder-plus-section thunder-genai-section" id="thunder-genai">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-genai">
            Bonus · Agentic AI in JavaScript
          </span>
          <h2>Thunder+ — GenAI Engineering Bootcamp</h2>
          <p className="section-desc">
            A bonus track — <strong>Agentic AI in JavaScript</strong>: from how LLMs work and the Transformer
            architecture to production-grade autonomous agents. {genaiChapters.length} modules across 3 parts — core
            theory, building agents, then production — with the modern stack{' '}
            <a href={GENAI_META.langchainJs} target="_blank" rel="noopener noreferrer">
              LangChain.js
            </a>
            ,{' '}
            <a href={GENAI_META.langgraphJs} target="_blank" rel="noopener noreferrer">
              LangGraph
            </a>{' '}
            and{' '}
            <a href={GENAI_META.langsmith} target="_blank" rel="noopener noreferrer">
              LangSmith
            </a>
            . Graduate with a portfolio of intelligent agents and a full-stack capstone.
          </p>
          <div className="thunder-plus-highlights">
            <span>🤖 Autonomous Agents</span>
            <span>🔗 LangChain &amp; LangGraph</span>
            <span>📚 RAG &amp; Vector DBs</span>
            <span>🚀 Deploy &amp; Evaluate</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/genai" className="btn btn-genai btn-lg">
              Explore GenAI Track
            </Link>
            <Link to="/genai/learn/the-new-age-of-ai-introduction-to-generative-ai" className="btn btn-outline-genai btn-lg">
              Start GenAI Module 1
            </Link>
            <a href={GENAI_META.langchainJs} target="_blank" rel="noopener noreferrer" className="btn btn-outline-genai btn-lg">
              LangChain.js Docs
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-nextjs-section" id="thunder-nextjs">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-nextjs">Phase 2 · TypeScript Stack</span>
          <h2>Thunder+ — React & Next.js</h2>
          <p className="section-desc">
            React JS and Next JS follow TypeScript within the TypeScript Stack, then React Native. Continue
            with the{' '}
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
              className="btn btn-nextjs-udemy-outline btn-lg"
            >
              Udemy Course
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section" id="thunder-plus">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge">Phase 2 · TypeScript Stack</span>
          <h2>Thunder++ — React Native</h2>
          <p className="section-desc">
            Finish the frontend stretch with the{' '}
            <a href={MOBILE_META.syllabusUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode Mobile Development Cohort
            </a>
            . {mobileChapters.length} lessons covering Expo, navigation, APIs, notifications, auth, and real-world app
            projects. Express JS / Node JS rounds out the TypeScript Stack next.
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
              className="btn btn-mobile-cohort-outline btn-lg"
            >
              ChaiCode GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-python-section" id="thunder-python">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-python">
            Phase 1 · Agentic AI + Python Stack
          </span>
          <h2>Thunder++ — Python &amp; Django</h2>
          <p className="section-desc">
            Agentic AI using Python comes first, then core Python
            study, Django, and FastAPI continue the same Phase 1 Python Stack, at{' '}
            <a href={PYTHON_META.portalUrl} target="_blank" rel="noopener noreferrer">
              {PYTHON_META.institute}
            </a>
            . {pythonChapters.length} modules from Python basics through ML/NLP, Transformers, LangChain, RAG,
            Django, FastAPI, LangGraph, MCP, and n8n.
          </p>
          <div className="thunder-plus-highlights">
            <span>🐍 Python study</span>
            <span>🌐 Django</span>
            <span>⚡ FastAPI</span>
            <span>🤖 Agentic AI</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/python" className="btn btn-python btn-lg">
              Explore Python Track
            </Link>
            <Link to="/python/learn/course-introduction" className="btn btn-python-portal btn-lg">
              Start PY Module 1
            </Link>
            <a
              href={PYTHON_META.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-python-portal-outline btn-lg"
            >
              Ashok IT Portal
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-java-section" id="thunder-java">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-java">
            Phase 3 · Java Stack
          </span>
          <h2>Thunder++ — Java & Spring</h2>
          <p className="section-desc">
            The <strong>Java phases</strong>:{' '}
            <strong>J2SE</strong>, <strong>Automation Testing</strong>, <strong>JPA</strong>, <strong>Spring Boot</strong>,{' '}
            <strong>Microservices</strong>, and <strong>Java Design Patterns</strong> — mapped from {JAVA_META.courses.length} Udemy courses into{' '}
            {javaChapters.length} modules on this site.
          </p>
          <div className="thunder-plus-highlights">
            <span>☕ J2SE</span>
            <span>🧪 Automation Testing</span>
            <span>🗄️ JPA</span>
            <span>🍃 Spring Boot</span>
            <span>📡 Microservices</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/java" className="btn btn-java btn-lg">
              Explore Java Track
            </Link>
            <Link to="/java/learn/introduction-to-java-and-setup" className="btn btn-java-udemy btn-lg">
              Start JV Module 1
            </Link>
            <a
              href={JAVA_META.primaryUdemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-java-udemy-outline btn-lg"
            >
              Udemy — Java Course
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-aws-section" id="thunder-aws">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-aws">
            Phase 4 · DevOps Stack
          </span>
          <h2>Thunder++ — 100 Days of AWS Cloud</h2>
          <p className="section-desc">
            The final stack — AWS gets its own <strong>100 days</strong> of focused mastery with{' '}
            <a href={AWS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud 100 Days of Cloud
            </a>{' '}
            and{' '}
            <a href={AWS_META.cloudfolksUrl} target="_blank" rel="noopener noreferrer">
              CloudFolks Hub
            </a>
            . {awsChapters.length} hands-on days covering IAM, EC2, S3, VPC, RDS, Lambda, IaC, and SAA-C03 certification
            prep with Bhavesh Atara.
          </p>
          <div className="thunder-plus-highlights">
            <span>☁️ AWS + Azure</span>
            <span>🎯 100 Hands-on Tasks</span>
            <span>🏆 SAA-C03 Prep</span>
            <span>📁 Cloud Portfolio</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/aws" className="btn btn-aws btn-lg">
              Explore AWS Track
            </Link>
            <Link to="/aws/learn/introduction-to-100-days-of-cloud" className="btn btn-aws-kodekloud btn-lg">
              Start AWS Day 1
            </Link>
            <a
              href={AWS_META.udemyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-aws-kodekloud-outline btn-lg"
            >
              Udemy SAA-C03
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-devops-section" id="thunder-devops">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-devops">
            Phase 4 · DevOps Stack
          </span>
          <h2>Thunder++ — DevOps &amp; CI/CD</h2>
          <p className="section-desc">
            DevOps &amp; CI/CD — the core of the <strong>100-day</strong> DevOps Stack, with{' '}
            <a href={DEVOPS_META.kodekloudUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud 100 Days of DevOps
            </a>{' '}
            and{' '}
            <a href={DEVOPS_META.cloudfolksUrl} target="_blank" rel="noopener noreferrer">
              CloudFolks Hub
            </a>
            . {devopsChapters.length} hands-on days covering Linux, Git, Jenkins, Docker, Kubernetes, Ansible,
            Terraform, and Prometheus.
          </p>
          <div className="thunder-plus-highlights">
            <span>⚙️ Linux & Git</span>
            <span>🔄 Jenkins CI/CD</span>
            <span>🐳 Docker & K8s</span>
            <span>📊 Prometheus & Grafana</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/devops" className="btn btn-devops btn-lg">
              Explore DevOps Track
            </Link>
            <Link to="/devops/learn/introduction-to-100-days-of-devops" className="btn btn-devops-kodekloud btn-lg">
              Start DevOps Day 1
            </Link>
            <a
              href={DEVOPS_META.kodekloudPathUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-devops-kodekloud-outline btn-lg"
            >
              DevOps Learning Path
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-k8s-section" id="thunder-k8s">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-k8s">
            Phase 4 · DevOps Stack
          </span>
          <h2>Thunder++ — Kubernetes</h2>
          <p className="section-desc">
            <strong>100 days</strong> mastering Kubernetes with the{' '}
            <a href={K8S_META.pathUrl} target="_blank" rel="noopener noreferrer">
              KodeKloud Kubernetes Learning Path
            </a>
            . {k8sChapters.length} hands-on days covering Docker, Helm, Istio, EFK, Prometheus,{' '}
            <a href={K8S_META.challengesUrl} target="_blank" rel="noopener noreferrer">
              challenges
            </a>
            ,{' '}
            <a href={K8S_META.playgroundsUrl} target="_blank" rel="noopener noreferrer">
              playgrounds
            </a>
            , and{' '}
            <a href={K8S_META.ckaUrl} target="_blank" rel="noopener noreferrer">
              CKA certification
            </a>
            .
          </p>
          <div className="thunder-plus-highlights">
            <span>☸️ K8s Core & EKS</span>
            <span>🧪 Labs & Playgrounds</span>
            <span>📊 Prometheus & Loki</span>
            <span>🏆 CKA Prep</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/k8s" className="btn btn-k8s btn-lg">
              Explore Kubernetes Track
            </Link>
            <Link to="/k8s/learn/introduction-to-kubernetes-learning-path" className="btn btn-k8s-kodekloud btn-lg">
              Start K8s Day 1
            </Link>
            <a
              href={K8S_META.labsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-k8s-kodekloud-outline btn-lg"
            >
              Studio Labs
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-interview-section" id="thunder-interview">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-interview">
            Alongside · Interview Prep
          </span>
          <h2>Thunder++ — System Design</h2>
          <p className="section-desc">
            <strong>System Design</strong> runs <strong>alongside the build phase</strong>, practiced in each stack's
            language as you learn it: deep study with{' '}
            <a href={INTERVIEW_META.gfgSystemDesignUrl} target="_blank" rel="noopener noreferrer">
              GeeksForGeeks System Design
            </a>{' '}
            and{' '}
            <a href={INTERVIEW_META.chaicodeUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode Interview Preparation
            </a>
            . {interviewChapters.length} modules covering HLD/LLD, scalability, and case studies — re-applied in each phase's stack language.
          </p>
          <div className="thunder-plus-highlights">
            <span>🏗️ System Design</span>
            <span>📐 HLD & LLD</span>
            <span>📈 Scalability</span>
            <span>💚 GeeksForGeeks</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/interview" className="btn btn-interview btn-lg">
              Explore System Design
            </Link>
            <Link to="/interview/learn/introduction-to-interview-prep" className="btn btn-interview-chaicode btn-lg">
              Start SD Module 1
            </Link>
            <a
              href={INTERVIEW_META.gfgSystemDesignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-interview-chaicode-outline btn-lg"
            >
              GfG System Design
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-interview-section" id="thunder-dsa">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-interview">
            Alongside · Interview Prep
          </span>
          <h2>Thunder++ — Data Structures</h2>
          <p className="section-desc">
            <strong>DSA</strong> runs <strong>alongside the build phase</strong>, practiced in each stack's language —
            starting in JavaScript (Elshad Karimov): deep <strong>Data Structures &amp; Algorithms</strong> study with{' '}
            <a href={DSA_META.gfgDsaUrl} target="_blank" rel="noopener noreferrer">
              GeeksForGeeks DSA Self Paced
            </a>{' '}
            and{' '}
            <a href={DSA_META.chaicodeUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode practice
            </a>
            . Arrays, trees, graphs, DP, and problem-solving patterns — solved in each phase's stack language.
          </p>
          <div className="thunder-plus-highlights">
            <span>📊 Arrays & Strings</span>
            <span>🌳 Trees & Graphs</span>
            <span>🧩 DP & Patterns</span>
            <span>💚 GeeksForGeeks DSA</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/interview" className="btn btn-interview btn-lg">
              Explore DSA Track
            </Link>
            <a
              href={DSA_META.gfgDsaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-interview-chaicode btn-lg"
            >
              GfG DSA Self Paced
            </a>
            <Link to="/interview#chaicode" className="btn btn-interview-chaicode-outline btn-lg">
              Interview Prep →
            </Link>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-interview-section" id="thunder-interview-prep">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-interview">
            2,000 days · 5 phases
          </span>
          <h2>Thunder++ — The Full Journey</h2>
          <p className="section-desc">
            <strong>5 phases</strong> — <strong>Python Stack (Agentic AI using Python, then Python
            &amp; FastAPI)</strong>,{' '}
            <strong>TypeScript Stack (JavaScript, TypeScript, React JS, Next JS, React Native, Express/Node JS)</strong>,{' '}
            <strong>Java Stack (J2SE, Automation Testing, JPA, Spring Boot, Microservices)</strong>,{' '}
            <strong>DevOps Stack (DevOps, AWS Cloud)</strong>,{' '}
            <strong>Kubernetes</strong>, a dedicated{' '}
            <strong>System Design</strong> intensive, and a{' '}
            <strong>Capstone Project</strong> integrating all five stacks —
            with <strong>DSA &amp; System Design</strong> practiced throughout every stack, not saved for one
            dedicated block. That's <strong>2,000 days</strong> of focused study, front to back.
          </p>
          <div className="thunder-plus-highlights">
            <span>🤖 Agentic AI First</span>
            <span>⌨️ 5 Phases · 4 Stacks + Capstone</span>
            <span>☁️ TypeScript → Java → DevOps → Capstone</span>
            <span>📐 DSA &amp; System Design Throughout</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/interview" className="btn btn-interview-chaicode btn-lg">
              DSA &amp; System Design →
            </Link>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-interview-section" id="interview-questions">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-interview">Interview Prep</span>
          <h2>Interview Questions — Q&amp;A</h2>
          <p className="section-desc">
            Dedicated Q&amp;A sections with{' '}
            {JS_INTERVIEW_QUESTIONS.length +
              REACT_INTERVIEW_QUESTIONS.length +
              NEXTJS_INTERVIEW_QUESTIONS.length +
              JAVA_INTERVIEW_QUESTIONS.length +
              KAFKA_INTERVIEW_QUESTIONS.length +
              MICROSERVICES_INTERVIEW_QUESTIONS.length +
              JAVA_STREAMS_PUZZLES.length +
              SQL_QUERY_PUZZLES.length +
              SQL_INTERVIEW_QUESTIONS.length +
              MONGODB_INTERVIEW_QUESTIONS.length}
            + questions and answers. <strong>JavaScript</strong> — closures, the <code>this</code> keyword,
            promises, and the event loop. <strong>React</strong> — {REACT_INTERVIEW_QUESTIONS.length} on
            components, hooks, lifecycle, routing, and Redux. <strong>Next.js</strong> —{' '}
            {NEXTJS_INTERVIEW_QUESTIONS.length} on routing, SSG/SSR/ISR, data fetching &amp; the App Router.{' '}
            <strong>Java</strong> —{' '}
            {JAVA_INTERVIEW_QUESTIONS.length} on OOP, collections, concurrency, Spring &amp; REST.{' '}
            <strong>Kafka</strong> — {KAFKA_INTERVIEW_QUESTIONS.length} of the trickiest questions on
            partitions, ordering, delivery semantics &amp; rebalancing.{' '}
            <strong>Microservices</strong> — {MICROSERVICES_INTERVIEW_QUESTIONS.length} on API gateways,
            service discovery, resilience, deployment &amp; security. <strong>Java 8 Streams</strong> —{' '}
            {JAVA_STREAMS_PUZZLES.length} predict-the-output puzzles with worked solutions.{' '}
            <strong>SQL</strong> — {SQL_QUERY_PUZZLES.length} tricky query puzzles plus{' '}
            {SQL_INTERVIEW_QUESTIONS.length} interview Q&amp;A on joins, window functions, indexes, ACID &amp;
            optimization. <strong>MongoDB</strong> — {MONGODB_INTERVIEW_QUESTIONS.length} on schema design,
            indexing &amp; the aggregation pipeline. Click any question to reveal the answer.
          </p>
          <div className="thunder-plus-highlights">
            <span>📘 JS Fundamentals</span>
            <span>⚛️ React &amp; Hooks</span>
            <span>▲ Next.js SSR/SSG</span>
            <span>☕ Java &amp; OOP</span>
            <span>🍃 Spring &amp; REST</span>
            <span>🔀 Kafka &amp; Streaming</span>
            <span>🧱 Microservices</span>
            <span>🧩 Stream Puzzles</span>
            <span>🗄️ Tricky SQL</span>
            <span>📊 SQL Q&amp;A</span>
            <span>🍃 MongoDB</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/interview-questions" className="btn btn-interview btn-lg">
              JavaScript Q&amp;A 💬
            </Link>
            <Link to="/react-interview-questions" className="btn btn-nextjs btn-lg">
              React Q&amp;A ⚛️
            </Link>
            <Link to="/nextjs-interview-questions" className="btn btn-nextjs btn-lg">
              Next.js Q&amp;A ▲
            </Link>
            <Link to="/nodejs-interview-questions" className="btn btn-genai btn-lg">
              Node.js Q&amp;A 🟢
            </Link>
            <Link to="/java-interview-questions" className="btn btn-java btn-lg">
              Java Q&amp;A ☕
            </Link>
            <Link to="/kafka-interview-questions" className="btn btn-devops btn-lg">
              Kafka Q&amp;A 🔀
            </Link>
            <Link to="/microservices-interview-questions" className="btn btn-java btn-lg">
              Microservices Q&amp;A 🧱
            </Link>
            <Link to="/java-streams-puzzles" className="btn btn-java btn-lg">
              Java Streams Puzzles 🧩
            </Link>
            <Link to="/sql-query-puzzles" className="btn btn-python btn-lg">
              Tricky SQL Queries 🗄️
            </Link>
            <Link to="/sql-interview-questions" className="btn btn-python btn-lg">
              SQL Q&amp;A 📊
            </Link>
            <Link to="/mongodb-interview-questions" className="btn btn-genai btn-lg">
              MongoDB Q&amp;A 🍃
            </Link>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-nextjs-section" id="best-udemy-courses">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-nextjs">Curated Picks</span>
          <h2>Best Udemy Courses by Skill</h2>
          <p className="section-desc">
            A hand-picked list of {BEST_COURSES.length} courses for the full-stack journey — JavaScript,
            TypeScript, React, Next.js, React Native, Java, Spring Boot, Microservices, JPA, Python, and
            DevOps. Coupon codes are pre-applied in the links where available.
          </p>
          <div className="thunder-plus-highlights">
            <span>⚛️ Frontend &amp; JS</span>
            <span>☕ Java &amp; Spring</span>
            <span>🐍 Python</span>
            <span>⚙️ DevOps</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/best-udemy-courses" className="btn btn-nextjs btn-lg">
              Browse Best Courses 🎓
            </Link>
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
              <div key={`${ch._basePath || ''}-${ch.slug}`}>
                {query && ch._track && (
                  <p style={{ margin: '0 0 4px 2px', fontSize: '0.75rem', fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {ch._track}
                  </p>
                )}
                <LectureCard
                  chapter={ch}
                  basePath={ch._basePath || '/learn'}
                  dayPrefix={ch._dayPrefix || 'Day'}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
    </>
  );
}
