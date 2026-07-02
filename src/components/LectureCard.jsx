import { Link } from 'react-router-dom';

export default function LectureCard({ chapter }) {
  return (
    <article className="lecture-card">
      <div className="lecture-thumb">
        <div className={`thumb-day thumb-day-${Math.min(chapter.day, 4)}`}>
          {chapter.day === 1 ? (
            <span className="js-logo">JS</span>
          ) : (
            <>
              <span className="day-label">DAY</span>
              <span className="day-num">{chapter.day}</span>
            </>
          )}
        </div>
      </div>
      <div className="lecture-body">
        <h2 className="lecture-title">
          <Link to={`/learn/${chapter.slug}`}>
            Lecture {String(chapter.id).padStart(2, '0')}: {chapter.title}
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
        <Link to={`/learn/${chapter.slug}`} className="btn btn-watch">
          Start Learning →
        </Link>
      </div>
    </article>
  );
}
