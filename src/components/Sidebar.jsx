import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { chapters } from '../data/chapters';
import { mobileChapters } from '../data/mobileChapters';

export default function Sidebar({ currentSlug, track = 'thunder' }) {
  const isMobile = track === 'mobile';
  const list = isMobile ? mobileChapters : chapters;
  const basePath = isMobile ? '/mobile/learn' : '/learn';
  const current = list.find((c) => c.slug === currentSlug);
  const activeRef = useRef(null);
  const total = isMobile ? 25 : 100;

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentSlug]);

  return (
    <aside className={`sidebar ${isMobile ? 'sidebar-mobile' : ''}`}>
      <div className="sidebar-section">
        <h3 className="sidebar-heading">
          {isMobile ? 'React Native Tutorial' : 'JavaScript Tutorial'}
        </h3>
        <nav className="sidebar-nav">
          {list.map((ch) => (
            <NavLink
              key={ch.slug}
              ref={ch.slug === currentSlug ? activeRef : null}
              to={`${basePath}/${ch.slug}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''} ${isMobile ? 'sidebar-link-mobile' : ''}`
              }
            >
              <span className="sidebar-day">
                {isMobile ? `RN ${ch.rnDay}` : `Day ${ch.day}`}
              </span>
              <span className="sidebar-title">{ch.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {current && (
        <div className="sidebar-section sidebar-topics">
          <h3 className="sidebar-heading">In This Chapter</h3>
          <ul className="topic-list">
            {current.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
            <li>
              <a href="#quiz">Quiz</a>
            </li>
          </ul>
        </div>
      )}

      <div className="sidebar-section sidebar-progress">
        <h3 className="sidebar-heading">Your Progress</h3>
        <div className="progress-bar">
          <div
            className={`progress-fill ${isMobile ? 'progress-fill-mobile' : ''}`}
            style={{ width: `${(list.length / total) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {list.length} of {total} {isMobile ? 'lessons' : 'days'} published
        </p>
      </div>
    </aside>
  );
}
