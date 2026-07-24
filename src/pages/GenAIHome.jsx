import { useSearchParams, Link } from 'react-router-dom';
import { genaiChapters, searchGenaiChapters } from '../data/genaiChapters';
import { GENAI_META, genaiParts } from '../data/genaiSyllabus';
import LectureCard from '../components/LectureCard';
import './GenAIHome.css';

export default function GenAIHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchGenaiChapters(query) : genaiChapters;

  return (
    <>
      <section className="genai-hero">
        <div className="genai-hero-inner">
          <span className="genai-badge">Bonus · Agentic AI in JavaScript</span>
          <h1 className="genai-title">GenAI Engineering Bootcamp</h1>
          <p className="genai-tagline">{GENAI_META.subtitle}</p>
          <div className="genai-stats">
            <div className="genai-stat"><span className="genai-stat-val">{genaiChapters.length}</span><span className="genai-stat-label">modules</span></div>
            <div className="genai-stat"><span className="genai-stat-val">3</span><span className="genai-stat-label">parts</span></div>
            <div className="genai-stat"><span className="genai-stat-val">LangChain.js</span><span className="genai-stat-label">· LangGraph · LangSmith</span></div>
            <div className="genai-stat"><span className="genai-stat-val">2</span><span className="genai-stat-label">agent projects + capstone</span></div>
          </div>
          <div className="genai-hero-actions">
            <Link to={`/genai/learn/${genaiChapters[0].slug}`} className="btn btn-genai btn-lg">
              Start Module 1
            </Link>
            <Link to="/genai-day-1" className="btn btn-genai btn-lg">
              📓 39-Day Gen AI Journal
            </Link>
            <a href={GENAI_META.langchainJs} target="_blank" rel="noopener noreferrer" className="btn btn-outline-genai btn-lg">
              LangChain.js Docs
            </a>
            <a href="#genai-syllabus" className="btn btn-outline-genai btn-lg">View Syllabus</a>
            <Link to="/mobile" className="btn btn-outline-genai btn-lg">← React Native</Link>
          </div>
        </div>
      </section>

      <div className="home genai-home">
        <section className="genai-syllabus" id="genai-syllabus">
          <h2>The {genaiChapters.length}-Module Syllabus</h2>
          <p className="section-desc">
            A comprehensive journey from zero to hero — the fundamentals of Generative AI and the Transformer
            architecture, then building, testing and deploying sophisticated <strong>autonomous AI agents</strong>{' '}
            with the entire modern stack: <strong>LangChain, LangGraph and LangSmith</strong>.
          </p>
          <div className="genai-parts">
            {genaiParts.map((part) => (
              <div key={part.id} className="genai-part">
                <div className="genai-part-head">
                  <h3>{part.title}</h3>
                  <p>{part.blurb}</p>
                </div>
                <ul className="genai-module-list">
                  {part.modules.map((m) => (
                    <li key={m.slug}>
                      <Link to={m.href}>
                        <span className="genai-module-num">{m.number}</span>
                        <span className="genai-module-title">{m.title}</span>
                        <span className="genai-module-cta">Open →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="roadmap">
          <h2>{genaiChapters.length}-Module GenAI Roadmap</h2>
          <p className="section-desc">
            Phase 1 · Agentic AI built entirely in JavaScript. Graduate with a portfolio of intelligent agents
            and the skill set of a modern AI Engineer.
          </p>
          <div className="roadmap-grid roadmap-genai">
            {genaiChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/genai/learn/${ch.slug}`}>{ch.genaiDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span><span className="legend-dot published legend-dot-genai" /> {genaiChapters.length} modules</span>
            <span><span className="legend-dot published" /> After React Native · Year 1</span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Modules'}</h2>
            {query && <Link to="/genai" className="clear-search">Clear search</Link>}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No modules found for "{query}".</p>
              <Link to="/genai">View all modules</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/genai/learn" dayPrefix="GEN" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
