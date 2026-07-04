import { useSearchParams, Link } from 'react-router-dom';
import { chapters, searchChapters } from '../data/chapters';
import { nextjsChapters } from '../data/nextjsChapters';
import { pythonChapters } from '../data/pythonChapters';
import { awsChapters } from '../data/awsChapters';
import { devopsChapters } from '../data/devopsChapters';
import { mobileChapters } from '../data/mobileChapters';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { PYTHON_META } from '../data/pythonSyllabus';
import { AWS_META } from '../data/awsSyllabus';
import { DEVOPS_META } from '../data/devopsSyllabus';
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
            Continue with the{' '}
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

      <section className="thunder-plus-section thunder-python-section" id="thunder-python">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-python">After React Native</span>
          <h2>Thunder++ — Python & Agentic AI</h2>
          <p className="section-desc">
            Learn Gen AI & Agentic AI with Python at{' '}
            <a href={PYTHON_META.portalUrl} target="_blank" rel="noopener noreferrer">
              {PYTHON_META.institute}
            </a>
            . {pythonChapters.length} modules from Python basics through ML/NLP, Transformers, LangChain, RAG,
            Django, FastAPI, LangGraph, MCP, and n8n.
          </p>
          <div className="thunder-plus-highlights">
            <span>🐍 Python & OOP</span>
            <span>🧠 ML & Transformers</span>
            <span>🔗 LangChain & RAG</span>
            <span>🤖 Agentic AI & n8n</span>
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
              className="btn btn-outline-python btn-lg"
            >
              Ashok IT Portal
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-aws-section" id="thunder-aws">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-aws">After Python & Agentic AI</span>
          <h2>Thunder++ — 100 Days of AWS Cloud</h2>
          <p className="section-desc">
            Master AWS with{' '}
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
              className="btn btn-outline-aws btn-lg"
            >
              Udemy SAA-C03
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-devops-section" id="thunder-devops">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-devops">After 100 Days of AWS</span>
          <h2>Thunder++ — 100 Days of DevOps</h2>
          <p className="section-desc">
            Master the DevOps stack with{' '}
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
              className="btn btn-outline-devops btn-lg"
            >
              DevOps Learning Path
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
