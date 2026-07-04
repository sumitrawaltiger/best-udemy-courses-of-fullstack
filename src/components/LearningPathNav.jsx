import { Link, useLocation } from 'react-router-dom';
import { LEARNING_PATH } from '../data/learningPath';

function trackFromPath(path) {
  if (path.startsWith('/mobile')) return 'mobile';
  if (path.startsWith('/interview')) return 'interview';
  if (path.startsWith('/k8s')) return 'k8s';
  if (path.startsWith('/devops')) return 'devops';
  if (path.startsWith('/aws')) return 'aws';
  if (path.startsWith('/java')) return 'java';
  if (path.startsWith('/python')) return 'python';
  if (path.startsWith('/nextjs')) return 'nextjs';
  return 'thunder';
}

export default function LearningPathNav() {
  const location = useLocation();
  const activeTrack = trackFromPath(location.pathname);

  return (
    <nav className="learning-path-nav" aria-label="Full learning path">
      <span className="learning-path-nav-label">Tracks</span>
      <div className="learning-path-nav-scroll">
        {LEARNING_PATH.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`learning-path-chip track-${item.id} ${activeTrack === item.id ? 'active' : ''}`}
          >
            <span className="learning-path-chip-short">{item.short}</span>
            <span className="learning-path-chip-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
