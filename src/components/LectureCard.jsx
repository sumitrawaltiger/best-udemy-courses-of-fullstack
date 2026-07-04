import { Link } from 'react-router-dom';

export default function LectureCard({ chapter, basePath = '/learn', dayPrefix = 'Day' }) {
  const dayNum = chapter.rnDay ?? chapter.day;
  const learnUrl = `${basePath}/${chapter.slug}`;

  return (
    <article className={`lecture-card ${basePath.includes('mobile') ? 'lecture-card-mobile' : ''}`}>
      <div className="lecture-thumb">
        <div
          className={`thumb-day thumb-day-${Math.min(dayNum, 4)} ${basePath.includes('mobile') ? 'thumb-day-mobile' : ''}`}
        >
          {dayNum === 1 && dayPrefix === 'Day' ? (
            <span className="js-logo">JS</span>
          ) : (
            <>
              <span className="day-label">{dayPrefix === 'RN' ? 'RN' : 'DAY'}</span>
              <span className="day-num">{dayNum}</span>
            </>
          )}
        </div>
      </div>
      <div className="lecture-body">
        <h2 className="lecture-title">
          <Link to={learnUrl}>
            {dayPrefix === 'RN' ? 'Lesson' : 'Lecture'} {String(chapter.id).padStart(2, '0')}: {chapter.title}
          </Link>
        </h2>
        <p className="lecture-subtitle">{chapter.subtitle}</p>
        <div className="lecture-meta">
          <span>Created on: {chapter.createdOn}</span>
          <span className="meta-dot">·</span>
          <span>⏱ {chapter.duration}</span>
          <span className="meta-dot">·</span>
          <span>{chapter.topics.length} topics</span>
        </div>
        <div className="lecture-topics">
          {chapter.topics.slice(0, 4).map((t) => (
            <span key={t} className="topic-tag">
              {t}
            </span>
          ))}
          {chapter.topics.length > 4 && (
            <span className="topic-tag more">+{chapter.topics.length - 4} more</span>
          )}
        </div>
        <div className="lecture-actions">
          <Link to={learnUrl} className={`btn ${basePath.includes('mobile') ? 'btn-mobile' : 'btn-watch'}`}>
            Start Learning →
          </Link>
          {chapter.paidLectureUrl && (
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${basePath.includes('mobile') ? 'btn-mobile-cohort-sm' : 'btn-paid-sm'}`}
            >
              🎓 {chapter.paidLectureLabel || 'Full Lecture'}
            </a>
          )}
          {chapter.youtubeUrl && (
            <a
              href={chapter.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube"
            >
              ▶ YouTube
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
