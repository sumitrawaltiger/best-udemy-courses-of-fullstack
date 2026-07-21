import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../pages/InterviewQuestions.css';

const TOPICS = [
  { id: 'javascript', label: 'JavaScript', path: '/interview-questions' },
  { id: 'react', label: 'React', path: '/react-interview-questions' },
  { id: 'nextjs', label: 'Next.js', path: '/nextjs-interview-questions' },
  { id: 'java', label: 'Java', path: '/java-interview-questions' },
  { id: 'kafka', label: 'Kafka', path: '/kafka-interview-questions' },
  { id: 'java-streams', label: 'Java 8 Streams', path: '/java-streams-puzzles' },
  { id: 'sql', label: 'SQL Queries', path: '/sql-query-puzzles' },
  { id: 'devops', label: 'DevOps', path: '/devops-interview-questions' },
];

function renderAnswer(text) {
  // Render inline `code` spans and **bold** emphasis within the answer text.
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="iq-inline-code">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function QuestionItem({ item, index, categories, isOpen, onToggle }) {
  const category = categories.find((c) => c.id === item.category);
  return (
    <article className={`iq-item ${isOpen ? 'iq-item--open' : ''}`}>
      <button type="button" className="iq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span className="iq-question-num">Q{index + 1}</span>
        <span className="iq-question-text">{item.question}</span>
        {category && <span className="iq-question-tag">{category.label}</span>}
        <span className="iq-chevron" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="iq-answer">
          <p className="iq-answer-text">{renderAnswer(item.answer)}</p>
          {item.code && <pre className="iq-code">{item.code}</pre>}
          {item.image && (
            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="iq-answer-image"
            >
              <img src={item.image} alt={item.imageAlt || item.question} loading="lazy" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function InterviewQnA({
  topicId,
  title,
  subtitle,
  questions,
  categories,
  search,
  tags = ['Interview', 'Q & A'],
  sourceNote,
  downloadPdf,
  challengeImages,
  challengeTitle = 'Tricky Coding Challenges',
}) {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [zoomed, setZoomed] = useState(null);

  const visibleQuestions = useMemo(() => {
    let list = query ? search(query) : questions;
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.category === activeCategory);
    }
    return list;
  }, [query, activeCategory, questions, search]);

  const countFor = (catId) => questions.filter((item) => item.category === catId).length;

  return (
    <div className="iq-page">
      <header className="iq-topbar">
        <Link to="/" className="iq-nav-btn">
          ← Home
        </Link>
        <span className="iq-topbar-label">Interview Questions</span>
        <Link to="/interview" className="iq-nav-btn iq-nav-btn--accent">
          Interview Prep Track →
        </Link>
      </header>

      <nav className="iq-topics" aria-label="Question topics">
        {TOPICS.map((t) => (
          <Link
            key={t.id}
            to={t.path}
            className={`iq-topic ${location.pathname === t.path ? 'iq-topic--active' : ''}`}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <section className="iq-hero">
        <div className="iq-hero-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h1 className="iq-hero-title">
          {title} <span aria-hidden="true">💬</span>
        </h1>
        <p className="iq-hero-sub">{subtitle}</p>
        {downloadPdf && (
          <div className="iq-downloads">
            {(Array.isArray(downloadPdf) ? downloadPdf : [downloadPdf]).map((pdf) => (
              <a
                key={pdf.href}
                href={pdf.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="iq-download-btn"
              >
                📄 {pdf.label || 'Download PDF'}
              </a>
            ))}
          </div>
        )}
      </section>

      {challengeImages && challengeImages.length > 0 && (
        <section className="iq-challenges">
          <h2 className="iq-challenges-title">
            <span aria-hidden="true">🧩</span> {challengeTitle}
          </h2>
          <div className="iq-challenge-grid">
            {challengeImages.map((c) => (
              <button
                type="button"
                key={c.image}
                className="iq-challenge-card"
                onClick={() => setZoomed(c)}
                aria-label={`View ${c.title} full size`}
              >
                <img src={c.image} alt={c.title} loading="lazy" />
                <span className="iq-challenge-caption">{c.title}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="iq-controls">
        <div className="iq-search-wrap">
          <span className="iq-search-icon" aria-hidden="true">
            🔍
          </span>
          <input
            type="text"
            className="iq-search"
            placeholder="Search questions or answers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="iq-search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="iq-cats">
          <button
            type="button"
            className={`iq-cat ${activeCategory === 'all' ? 'iq-cat--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All <span className="iq-cat-count">{questions.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`iq-cat ${activeCategory === cat.id ? 'iq-cat--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}{' '}
              <span className="iq-cat-count">{countFor(cat.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="iq-result-count">
        Showing {visibleQuestions.length} question{visibleQuestions.length === 1 ? '' : 's'}
        {topicId === 'react' && activeCategory === 'all' && !query ? ' · scroll or filter by topic' : ''}
      </p>

      <section className="iq-list">
        {visibleQuestions.length === 0 ? (
          <div className="iq-empty">
            <p>No questions found for "{query}".</p>
            <button type="button" className="iq-nav-btn" onClick={() => setQuery('')}>
              Clear search
            </button>
          </div>
        ) : (
          visibleQuestions.map((item, index) => (
            <QuestionItem
              key={item.id}
              item={item}
              index={index}
              categories={categories}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))
        )}
      </section>

      {sourceNote && <footer className="iq-footer">{sourceNote}</footer>}

      {zoomed && (
        <div
          className="iq-lightbox"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomed.title} full size`}
        >
          <button
            type="button"
            className="iq-lightbox-close"
            onClick={() => setZoomed(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img src={zoomed.image} alt={zoomed.title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
