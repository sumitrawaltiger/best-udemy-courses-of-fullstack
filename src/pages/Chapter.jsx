import { Link, useParams, Navigate } from 'react-router-dom';
import { getChapterBySlug, chapters } from '../data/chapters';
import { getMobileChapterBySlug, mobileChapters } from '../data/mobileChapters';
import { thunderRepo, thunderRootRepo } from '../data/syllabus';
import { MOBILE_META } from '../data/mobileSyllabus';
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

function dayLabel(chapter, isMobile) {
  return isMobile ? `RN Day ${chapter.rnDay}` : `Day ${chapter.day}`;
}

export default function Chapter({ track = 'thunder' }) {
  const { slug } = useParams();
  const isMobile = track === 'mobile';
  const chapter = isMobile ? getMobileChapterBySlug(slug) : getChapterBySlug(slug);
  const list = isMobile ? mobileChapters : chapters;
  const homePath = isMobile ? '/mobile' : '/';
  const learnPath = isMobile ? '/mobile/learn' : '/learn';
  const codeRepoDefault = isMobile ? MOBILE_META.githubRepo : thunderRepo;

  if (!chapter) {
    return <Navigate to={homePath} replace />;
  }

  const prevChapter = list.find((c) => c.id === chapter.id - 1);
  const nextChapter = list.find((c) => c.id === chapter.id + 1);
  const label = dayLabel(chapter, isMobile);

  return (
    <article className={`chapter ${isMobile ? 'chapter-mobile' : ''}`}>
      <header className="chapter-header">
        <div className="chapter-breadcrumb">
          <Link to={homePath}>Home</Link>
          <span>/</span>
          <span>{label}</span>
        </div>
        <div className={`chapter-badge ${isMobile ? 'chapter-badge-mobile' : ''}`}>
          {label} · Lesson {String(chapter.id).padStart(2, '0')}
        </div>
        <h1>{chapter.title}</h1>
        <p className="chapter-subtitle">{chapter.subtitle}</p>
        <div className="chapter-meta">
          <span>📅 {chapter.createdOn}</span>
          <span>⏱ {chapter.duration}</span>
          <span>📚 {chapter.sections.length} sections</span>
        </div>
        <div className="chapter-links">
          {chapter.paidLectureUrl && (
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`chapter-link-btn paid ${isMobile ? 'paid-mobile' : ''}`}
            >
              🎓 {chapter.paidLectureLabel || 'Full In-Depth Lecture'}
            </a>
          )}
          {chapter.youtubeUrl && (
            <a
              href={chapter.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn youtube"
              title={chapter.youtubeTitle}
            >
              ▶ Free on YouTube
            </a>
          )}
          {chapter.notionUrl && (
            <a href={chapter.notionUrl} target="_blank" rel="noopener noreferrer" className="chapter-link-btn">
              📝 My Notion Notes
            </a>
          )}
          {isMobile && (
            <a
              href={MOBILE_META.syllabusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              📋 ChaiCode Syllabus
            </a>
          )}
          {chapter.githubPath && (
            <a
              href={`${chapter.codeRepo || codeRepoDefault}/${chapter.githubPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-link-btn outline"
            >
              💻 {isMobile ? 'ChaiCode Code' : 'Thunder Code'}
            </a>
          )}
        </div>
        {chapter.paidLectureUrl && (
          <div className={`paid-lecture-banner ${isMobile ? 'paid-lecture-banner-mobile' : ''}`}>
            <div className="paid-lecture-text">
              <strong>{isMobile ? 'Join the full cohort?' : 'Want the full depth?'}</strong>
              <span>
                {isMobile
                  ? 'Get live classes, recordings, and community access on ChaiCode.'
                  : 'Watch the complete Thunder lecture with Rohit Negi on the course portal (login required).'}
              </span>
            </div>
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${isMobile ? 'btn-mobile-cohort' : 'btn-paid'}`}
            >
              {isMobile ? 'Enroll on ChaiCode →' : 'Open Full Lecture →'}
            </a>
          </div>
        )}
        {chapter.youtubeUrl && (
          <div className="youtube-block">
            <div className="youtube-block-header">
              <span>📺 Free Video — {label}</span>
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
          </div>
        )}
      </header>

      <div className={`chapter-intro ${isMobile ? 'chapter-intro-mobile' : ''}`}>
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
            <span className={`section-num ${isMobile ? 'section-num-mobile' : ''}`}>{index + 1}</span>
            {section.title}
          </h2>
          <div className="section-content">{renderMarkdown(section.content)}</div>
          {section.code && <CodeBlock code={section.code} />}
          {section.tryIt && <CodePlayground initialCode={section.tryIt} />}
        </section>
      ))}

      <section id="quiz" className="chapter-section">
        <Quiz questions={chapter.quiz} />
      </section>

      <nav className="chapter-nav">
        {prevChapter ? (
          <Link to={`${learnPath}/${prevChapter.slug}`} className="nav-prev">
            <span className="nav-label">← Previous</span>
            <span className="nav-title">
              {dayLabel(prevChapter, isMobile)}: {prevChapter.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link to={`${learnPath}/${nextChapter.slug}`} className="nav-next">
            <span className="nav-label">Next →</span>
            <span className="nav-title">
              {dayLabel(nextChapter, isMobile)}: {nextChapter.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
