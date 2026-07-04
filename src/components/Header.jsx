import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { discordCommunity } from '../data/syllabus';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onMobile = location.pathname.startsWith('/mobile');
  const onNextjs = location.pathname.startsWith('/nextjs');
  const onPython = location.pathname.startsWith('/python');

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      const base = onMobile ? '/mobile' : onPython ? '/python' : onNextjs ? '/nextjs' : '/';
      navigate(`${base}?q=${encodeURIComponent(query.trim())}`);
      onSearch?.(query.trim());
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const homePath = onMobile ? '/mobile' : onPython ? '/python' : onNextjs ? '/nextjs' : '/';
  const logoIcon = onMobile ? 'RN' : onPython ? 'PY' : onNextjs ? 'NX' : 'JS';
  const logoName = onMobile
    ? 'Thunder++ Mobile'
    : onPython
      ? 'Thunder++ Python'
      : onNextjs
        ? 'Thunder+ Next.js'
        : 'JS Learn Hub';
  const logoTagline = onMobile
    ? 'React Native by ChaiCode'
    : onPython
      ? 'Python & Agentic AI — Ashok IT'
      : onNextjs
        ? 'React & Next.js by ChaiCode'
        : 'Learn JavaScript Day by Day';

  const startPath = onMobile
    ? '/mobile/learn/react-js-refresher'
    : onPython
      ? '/python/learn/course-introduction'
      : onNextjs
        ? '/nextjs/learn/introduction-to-the-course'
        : '/learn/introduction-to-javascript';

  const syllabusHref = onMobile
    ? '/mobile#mobile-syllabus'
    : onPython
      ? '/python#python-syllabus'
      : onNextjs
        ? '/nextjs#nextjs-syllabus'
        : '/#syllabus';

  return (
    <header
      className={`header ${onMobile ? 'header-mobile' : ''} ${onNextjs ? 'header-nextjs' : ''} ${onPython ? 'header-python' : ''}`}
    >
      <div className="header-inner">
        <Link to={homePath} className="logo" onClick={closeMenu}>
          <span
            className={`logo-icon ${onMobile ? 'logo-icon-mobile' : ''} ${onNextjs ? 'logo-icon-nextjs' : ''} ${onPython ? 'logo-icon-python' : ''}`}
          >
            {logoIcon}
          </span>
          <div className="logo-text">
            <span className="logo-name">{logoName}</span>
            <span className="logo-tagline">{logoTagline}</span>
          </div>
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder={
              onMobile
                ? 'Search mobile lessons...'
                : onPython
                  ? 'Search Python modules...'
                  : onNextjs
                    ? 'Search modules...'
                    : 'Search tutorials...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search tutorials"
          />
          <button type="submit" className="btn btn-search">
            Search
          </button>
        </form>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Thunder</Link>
          <Link to="/nextjs" onClick={closeMenu} className="header-nextjs-link">
            Next.js
          </Link>
          <Link to="/python" onClick={closeMenu} className="header-python-link">
            Python
          </Link>
          <Link to="/mobile" onClick={closeMenu} className="header-rn-link">
            React Native
          </Link>
          <a href={syllabusHref} onClick={closeMenu}>
            Syllabus
          </a>
          <Link to={startPath} onClick={closeMenu}>
            Start Learning
          </Link>
          <a
            href={discordCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="header-discord"
            onClick={closeMenu}
          >
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
