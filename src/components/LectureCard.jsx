import { Link } from 'react-router-dom';

export default function LectureCard({ chapter, basePath = '/learn', dayPrefix = 'Day' }) {
  const dayNum = chapter.devopsDay ?? chapter.awsDay ?? chapter.pyDay ?? chapter.nextDay ?? chapter.rnDay ?? chapter.day;
  const learnUrl = `${basePath}/${chapter.slug}`;
  const isMobile = basePath.includes('mobile');
  const isDevops = basePath.includes('devops');
  const isAws = basePath.includes('aws');
  const isNextjs = basePath.includes('nextjs');
  const isPython = basePath.includes('python');
  const watchBtn = isMobile
    ? 'btn-mobile'
    : isDevops
      ? 'btn-devops'
      : isAws
        ? 'btn-aws'
        : isPython
          ? 'btn-python'
          : isNextjs
            ? 'btn-nextjs'
            : 'btn-watch';
  const paidBtn = isMobile
    ? 'btn-mobile-cohort-sm'
    : isDevops
      ? 'btn-devops-kodekloud-sm'
      : isAws
        ? 'btn-aws-kodekloud-sm'
        : isPython
          ? 'btn-python-portal-sm'
          : isNextjs
            ? 'btn-nextjs-udemy-sm'
            : 'btn-paid-sm';
  const cardClass = isMobile
    ? 'lecture-card-mobile'
    : isDevops
      ? 'lecture-card-devops'
      : isAws
        ? 'lecture-card-aws'
        : isPython
          ? 'lecture-card-python'
          : isNextjs
            ? 'lecture-card-nextjs'
            : '';
  const thumbClass = isMobile
    ? 'thumb-day-mobile'
    : isDevops
      ? 'thumb-day-devops'
      : isAws
        ? 'thumb-day-aws'
        : isPython
          ? 'thumb-day-python'
          : isNextjs
            ? 'thumb-day-nextjs'
            : '';

  return (
    <article className={`lecture-card ${cardClass}`}>
      <div className="lecture-thumb">
        <div className={`thumb-day thumb-day-${Math.min(dayNum, 4)} ${thumbClass}`}>
          {dayNum === 1 && dayPrefix === 'Day' ? (
            <span className="js-logo">JS</span>
          ) : (
            <>
              <span className="day-label">{dayPrefix === 'Day' ? 'DAY' : dayPrefix}</span>
              <span className="day-num">{dayNum}</span>
            </>
          )}
        </div>
      </div>
      <div className="lecture-body">
        <h2 className="lecture-title">
          <Link to={learnUrl}>
            {dayPrefix === 'Day' || dayPrefix === 'AWS' || dayPrefix === 'DO'
              ? 'Day'
              : dayPrefix === 'NX' || dayPrefix === 'PY'
                ? 'Module'
                : 'Lesson'}{' '}
            {String(chapter.id).padStart(2, '0')}: {chapter.title}
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
          <Link to={learnUrl} className={`btn ${watchBtn}`}>
            Start Learning →
          </Link>
          {chapter.paidLectureUrl && (
            <a
              href={chapter.paidLectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${paidBtn}`}
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
