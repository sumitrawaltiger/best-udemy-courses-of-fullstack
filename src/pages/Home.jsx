import { useSearchParams, Link } from 'react-router-dom';
import { chapters, searchChapters } from '../data/chapters';
import { nextjsChapters } from '../data/nextjsChapters';
import { pythonChapters } from '../data/pythonChapters';
import { javaChapters } from '../data/javaChapters';
import { awsChapters } from '../data/awsChapters';
import { devopsChapters } from '../data/devopsChapters';
import { k8sChapters } from '../data/k8sChapters';
import { interviewChapters } from '../data/interviewChapters';
import { mobileChapters } from '../data/mobileChapters';
import { NEXTJS_META } from '../data/nextjsSyllabus';
import { PYTHON_META } from '../data/pythonSyllabus';
import { JAVA_META } from '../data/javaSyllabus';
import { AWS_META } from '../data/awsSyllabus';
import { DEVOPS_META } from '../data/devopsSyllabus';
import { K8S_META } from '../data/k8sSyllabus';
import { INTERVIEW_META } from '../data/interviewSyllabus';
import { MOBILE_META } from '../data/mobileSyllabus';
import { thunderRepo, PAID_COURSE_URL, strikeCourse } from '../data/syllabus';
import { JS_INTERVIEW_QUESTIONS } from '../data/interviewQuestions';
import { REACT_INTERVIEW_QUESTIONS } from '../data/reactInterviewQuestions';
import { NEXTJS_INTERVIEW_QUESTIONS } from '../data/nextjsInterviewQuestions';
import { JAVA_INTERVIEW_QUESTIONS } from '../data/javaInterviewQuestions';
import { KAFKA_INTERVIEW_QUESTIONS } from '../data/kafkaInterviewQuestions';
import { JAVA_STREAMS_PUZZLES } from '../data/javaStreamsPuzzles';
import { SQL_QUERY_PUZZLES } from '../data/sqlQueryPuzzles';
import { BEST_COURSES } from '../data/bestUdemyCourses';
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
                <Link to="/interview-questions" className="btn btn-interview btn-lg">
                  Interview Q&amp;A 💬
                </Link>
                <Link to="/react-interview-questions" className="btn btn-nextjs btn-lg">
                  React Q&amp;A ⚛️
                </Link>
                <Link to="/nextjs-interview-questions" className="btn btn-nextjs btn-lg">
                  Next.js Q&amp;A ▲
                </Link>
                <Link to="/java-interview-questions" className="btn btn-java btn-lg">
                  Java Q&amp;A ☕
                </Link>
                <Link to="/kafka-interview-questions" className="btn btn-devops btn-lg">
                  Kafka Q&amp;A 🔀
                </Link>
                <Link to="/java-streams-puzzles" className="btn btn-java btn-lg">
                  Java Streams Puzzles 🧩
                </Link>
                <Link to="/sql-query-puzzles" className="btn btn-python btn-lg">
                  Tricky SQL Queries 🗄️
                </Link>
                <Link to="/best-udemy-courses" className="btn btn-paid btn-lg">
                  Best Udemy Courses 🎓
                </Link>
                <Link to="/cheat-sheets" className="btn btn-interview btn-lg">
                  Cheat Sheets 📄
                </Link>
                <Link to="/about-founder" className="btn btn-outline-light btn-lg">
                  About theAuthor 👤
                </Link>
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
              className="btn btn-nextjs-udemy-outline btn-lg"
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
              className="btn btn-mobile-cohort-outline btn-lg"
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
              className="btn btn-python-portal-outline btn-lg"
            >
              Ashok IT Portal
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-java-section" id="thunder-java">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-java">After Python & Agentic AI</span>
          <h2>Thunder++ — Java & Spring</h2>
          <p className="section-desc">
            Master Java and Spring with {JAVA_META.courses.length} Udemy courses — core Java, Java 8/9, JDBC, Spring
            Framework 6, Spring Boot microservices, Docker, Kubernetes, CQRS, and event-driven architecture.{' '}
            {javaChapters.length} modules mapped on this site.
          </p>
          <div className="thunder-plus-highlights">
            <span>☕ Java Core & OOP</span>
            <span>🍃 Spring Boot & Cloud</span>
            <span>🐳 Docker & Kubernetes</span>
            <span>📡 Event-Driven Microservices</span>
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
          <span className="thunder-plus-badge thunder-plus-badge-aws">After Java & Spring</span>
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
              className="btn btn-aws-kodekloud-outline btn-lg"
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
              className="btn btn-devops-kodekloud-outline btn-lg"
            >
              DevOps Learning Path
            </a>
          </div>
        </div>
      </section>

      <section className="thunder-plus-section thunder-k8s-section" id="thunder-k8s">
        <div className="thunder-plus-inner">
          <span className="thunder-plus-badge thunder-plus-badge-k8s">After 100 Days of DevOps</span>
          <h2>Thunder++ — Kubernetes</h2>
          <p className="section-desc">
            Master Kubernetes with the{' '}
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
          <span className="thunder-plus-badge thunder-plus-badge-interview">After Kubernetes</span>
          <h2>Thunder++ — DSA & Interview Prep</h2>
          <p className="section-desc">
            Crack tech interviews with{' '}
            <a href={INTERVIEW_META.chaicodeUrl} target="_blank" rel="noopener noreferrer">
              ChaiCode All-in-One Interview Preparation
            </a>{' '}
            and{' '}
            <a href={INTERVIEW_META.gfgCoursesUrl} target="_blank" rel="noopener noreferrer">
              GeeksForGeeks paid courses
            </a>
            . {interviewChapters.length} modules covering DSA, system design case studies, mock interviews, and
            full-stack interview readiness.
          </p>
          <div className="thunder-plus-highlights">
            <span>📊 DSA & Patterns</span>
            <span>🏗️ System Design</span>
            <span>🎯 ChaiCode Mocks</span>
            <span>💚 GeeksForGeeks</span>
          </div>
          <div className="thunder-plus-actions">
            <Link to="/interview" className="btn btn-interview btn-lg">
              Explore Interview Track
            </Link>
            <Link to="/interview/learn/introduction-to-interview-prep" className="btn btn-interview-chaicode btn-lg">
              Start IP Module 1
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
              JAVA_STREAMS_PUZZLES.length +
              SQL_QUERY_PUZZLES.length}
            + questions and answers. <strong>JavaScript</strong> — closures, the <code>this</code> keyword,
            promises, and the event loop. <strong>React</strong> — {REACT_INTERVIEW_QUESTIONS.length} on
            components, hooks, lifecycle, routing, and Redux. <strong>Next.js</strong> —{' '}
            {NEXTJS_INTERVIEW_QUESTIONS.length} on routing, SSG/SSR/ISR, data fetching &amp; the App Router.{' '}
            <strong>Java</strong> —{' '}
            {JAVA_INTERVIEW_QUESTIONS.length} on OOP, collections, concurrency, Spring &amp; REST.{' '}
            <strong>Kafka</strong> — {KAFKA_INTERVIEW_QUESTIONS.length} of the trickiest questions on
            partitions, ordering, delivery semantics &amp; rebalancing. <strong>Java 8 Streams</strong> —{' '}
            {JAVA_STREAMS_PUZZLES.length} predict-the-output puzzles with worked solutions.{' '}
            <strong>SQL</strong> — {SQL_QUERY_PUZZLES.length} tricky query puzzles on joins, window
            functions, NULLs &amp; classic patterns. Click any question to reveal the answer.
          </p>
          <div className="thunder-plus-highlights">
            <span>📘 JS Fundamentals</span>
            <span>⚛️ React &amp; Hooks</span>
            <span>▲ Next.js SSR/SSG</span>
            <span>☕ Java &amp; OOP</span>
            <span>🍃 Spring &amp; REST</span>
            <span>🔀 Kafka &amp; Streaming</span>
            <span>🧩 Stream Puzzles</span>
            <span>🗄️ Tricky SQL</span>
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
            <Link to="/java-interview-questions" className="btn btn-java btn-lg">
              Java Q&amp;A ☕
            </Link>
            <Link to="/kafka-interview-questions" className="btn btn-devops btn-lg">
              Kafka Q&amp;A 🔀
            </Link>
            <Link to="/java-streams-puzzles" className="btn btn-java btn-lg">
              Java Streams Puzzles 🧩
            </Link>
            <Link to="/sql-query-puzzles" className="btn btn-python btn-lg">
              Tricky SQL Queries 🗄️
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
              <LectureCard key={ch.slug} chapter={ch} />
            ))}
          </div>
        )}
      </section>
    </div>
    </>
  );
}
