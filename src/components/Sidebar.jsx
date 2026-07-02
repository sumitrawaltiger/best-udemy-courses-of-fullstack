import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { chapters } from '../data/chapters';

export default function Sidebar({ currentSlug }) {
  const current = chapters.find((c) => c.slug === currentSlug);
  const activeRef = useRef(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentSlug]);

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">JavaScript Tutorial</h3>
        <nav className="sidebar-nav">
          {chapters.map((ch) => (
            <NavLink
              key={ch.slug}
              ref={ch.slug === currentSlug ? activeRef : null}
              to={`/learn/${ch.slug}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="sidebar-day">Day {ch.day}</span>
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
            className="progress-fill"
            style={{ width: `${(chapters.length / 100) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {chapters.length} of 100 days published
        </p>
      </div>
    </aside>
  );
}
