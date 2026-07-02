import { Link, useParams, Navigate } from 'react-router-dom';
import { getChapterBySlug, chapters } from '../data/chapters';
import { thunderRepo } from '../data/syllabus';
import CodeBlock from '../components/CodeBlock';
import CodePlayground from '../components/CodePlayground';
import Quiz from '../components/Quiz';

function renderMarkdown(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  const id = url.match(/[?&]v=([^&]+)/)?.[1];
  const start = url.match(/[?&]t=(\d+)/)?.[1];
  if (!id) return '';
  return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;
}

export default function Chapter() {
  const { slug } = useParams();
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const prevChapter = chapters.find((c) => c.id === chapter.id - 1);
  const nextChapter = chapters.find((c) => c.id === chapter.id + 1);

  return (
    <article className="chapter">
      <header className="chapter-header">
        <div className="chapter-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Day {chapter.day}</span>
        </div>
        <div className="chapter-badge">Day {chapter.day} · Lecture {String(chapter.id).padStart(2, '0')}</div>
        <h1>{chapter.title}</h1>
        <p className="chapter-subtitle">{chapter.subtitle}</p>
        <div className="chapter-meta">
          <span>📅 {chapter.createdOn}</span>
          <span>⏱ {chapter.duration}</span>
          <span>📚 {chapter.sections.length} sections</span>
        </div>
        <div className="chapter-links">
          {chapter.youtubeUrl && (
            <a
              href={chapter.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn youtube"
              title={chapter.youtubeTitle}
            >
              ▶ Watch on YouTube
            </a>
          )}
          {chapter.notionUrl && (
            <a href={chapter.notionUrl} target="_blank" rel="noopener noreferrer" className="chapter-link-btn">
              📝 My Notion Notes
            </a>
          )}
          {chapter.githubPath && (
            <a
              href={`${thunderRepo}/${chapter.githubPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              💻 Thunder Code
            </a>
          )}
        </div>
        {chapter.youtubeUrl && (
          <div className="youtube-block">
            <div className="youtube-block-header">
              <span>📺 Video Lecture — Day {chapter.day}</span>
              <span className="youtube-block-title">{chapter.youtubeTitle}</span>
            </div>
            <div className="youtube-embed-wrap">
              <iframe
                src={getYoutubeEmbedUrl(chapter.youtubeUrl)}
                title={chapter.youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {chapter.youtubeSupplementUrl && (
              <div className="youtube-supplement">
                <span>Also watch: </span>
                <a href={chapter.youtubeSupplementUrl} target="_blank" rel="noopener noreferrer">
                  {chapter.youtubeSupplementTitle}
                </a>
              </div>
            )}
          </div>
        )}
      </header>

      <div className="chapter-intro">
        <h2>What you'll learn</h2>
        <ul className="learn-list">
          {chapter.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {chapter.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="chapter-section">
          <h2>
            <span className="section-num">{index + 1}</span>
            {section.title}
          </h2>
          <div className="section-content">
            {renderMarkdown(section.content)}
          </div>
          {section.code && <CodeBlock code={section.code} />}
          {section.tryIt && (
            <CodePlayground initialCode={section.tryIt} />
          )}
        </section>
      ))}

      <section id="quiz" className="chapter-section">
        <Quiz questions={chapter.quiz} />
      </section>

      <nav className="chapter-nav">
        {prevChapter ? (
          <Link to={`/learn/${prevChapter.slug}`} className="nav-prev">
            <span className="nav-label">← Previous</span>
            <span className="nav-title">Day {prevChapter.day}: {prevChapter.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link to={`/learn/${nextChapter.slug}`} className="nav-next">
            <span className="nav-label">Next →</span>
            <span className="nav-title">Day {nextChapter.day}: {nextChapter.title}</span>
          </Link>
        ) : (
          <div className="nav-next coming-soon">
            <span className="nav-label">Next →</span>
            <span className="nav-title">Lecture 20 — Coming soon!</span>
          </div>
        )}
      </nav>
    </article>
  );
}
