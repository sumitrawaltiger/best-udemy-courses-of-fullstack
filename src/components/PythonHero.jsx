import { PYTHON_META } from '../data/pythonSyllabus';
import { pythonChapters } from '../data/pythonChapters';

export default function PythonHero({ children, actions }) {
  return (
    <div className="python-hero-block">
      <span className="python-level-badge">
        <span className="python-level-icon" aria-hidden="true">🐍</span>
        After React Native
      </span>

      <h1 className="python-title">
        <span className="python-title-line">Thunder++</span>
        <span className="python-title-line">Python & Agentic AI</span>
      </h1>

      <p className="python-subtitle">{PYTHON_META.subtitle}</p>

      <div className="python-meta-row">
        <span className="python-meta-tag">
          <span aria-hidden="true">🐍</span>
          {PYTHON_META.totalModules} Modules
        </span>
        <span className="python-meta-tag">
          <span aria-hidden="true">🏫</span>
          {PYTHON_META.institute}
        </span>
        <span className="python-meta-tag">
          <span aria-hidden="true">🤖</span>
          Gen AI & Agentic AI
        </span>
        <span className="python-meta-tag">
          <span aria-hidden="true">⚡</span>
          Django & FastAPI
        </span>
      </div>

      {children}
      {actions}
    </div>
  );
}

export function PythonHeroStats() {
  return (
    <p className="python-hero-desc">
      {pythonChapters.length} modules from{' '}
      <a href={PYTHON_META.portalUrl} target="_blank" rel="noopener noreferrer">
        {PYTHON_META.institute}
      </a>{' '}
      — Python, ML/NLP, Transformers, LangChain, RAG, Django, FastAPI, LangGraph, MCP, and n8n agentic workflows.
    </p>
  );
}
