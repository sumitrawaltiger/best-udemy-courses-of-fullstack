import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { discordCommunity } from '../data/syllabus';

function trackFromPath(path) {
  if (path.startsWith('/mobile')) return 'mobile';
  if (path.startsWith('/devops')) return 'devops';
  if (path.startsWith('/aws')) return 'aws';
  if (path.startsWith('/python')) return 'python';
  if (path.startsWith('/nextjs')) return 'nextjs';
  return 'thunder';
}

const TRACK_HOME = {
  thunder: '/',
  nextjs: '/nextjs',
  python: '/python',
  aws: '/aws',
  devops: '/devops',
  mobile: '/mobile',
};

const TRACK_START = {
  thunder: '/learn/introduction-to-javascript',
  nextjs: '/nextjs/learn/introduction-to-the-course',
  python: '/python/learn/course-introduction',
  aws: '/aws/learn/introduction-to-100-days-of-cloud',
  devops: '/devops/learn/introduction-to-100-days-of-devops',
  mobile: '/mobile/learn/react-js-refresher',
};

const TRACK_SYLLABUS = {
  thunder: '/#syllabus',
  nextjs: '/nextjs#nextjs-syllabus',
  python: '/python#python-syllabus',
  aws: '/aws#aws-syllabus',
  devops: '/devops#devops-syllabus',
  mobile: '/mobile#mobile-syllabus',
};

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const track = trackFromPath(location.pathname);

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`${TRACK_HOME[track]}?q=${encodeURIComponent(query.trim())}`);
      onSearch?.(query.trim());
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const logoIcon =
    track === 'mobile'
      ? 'RN'
      : track === 'devops'
        ? 'DO'
        : track === 'aws'
          ? 'AWS'
          : track === 'python'
            ? 'PY'
            : track === 'nextjs'
              ? 'NX'
              : 'JS';
  const logoName =
    track === 'mobile'
      ? 'Thunder++ Mobile'
      : track === 'devops'
        ? 'Thunder++ DevOps'
        : track === 'aws'
          ? 'Thunder++ AWS Cloud'
          : track === 'python'
            ? 'Thunder++ Python'
            : track === 'nextjs'
              ? 'Thunder+ Next.js'
              : 'JS Learn Hub';
  const logoTagline =
    track === 'mobile'
      ? 'React Native by ChaiCode'
      : track === 'devops'
        ? '100 Days of DevOps — KodeKloud'
        : track === 'aws'
          ? '100 Days of Cloud — KodeKloud'
          : track === 'python'
            ? 'Python & Agentic AI — Ashok IT'
            : track === 'nextjs'
              ? 'React & Next.js by ChaiCode'
              : 'Learn JavaScript Day by Day';

  const searchPlaceholder =
    track === 'mobile'
      ? 'Search mobile lessons...'
      : track === 'devops'
        ? 'Search DevOps days...'
        : track === 'aws'
          ? 'Search AWS days...'
          : track === 'python'
            ? 'Search Python modules...'
            : track === 'nextjs'
              ? 'Search modules...'
              : 'Search tutorials...';

  return (
    <header
      className={`header ${track === 'mobile' ? 'header-mobile' : ''} ${track === 'nextjs' ? 'header-nextjs' : ''} ${track === 'python' ? 'header-python' : ''} ${track === 'aws' ? 'header-aws' : ''} ${track === 'devops' ? 'header-devops' : ''}`}
    >
      <div className="header-inner">
        <Link to={TRACK_HOME[track]} className="logo" onClick={closeMenu}>
          <span
            className={`logo-icon ${track === 'mobile' ? 'logo-icon-mobile' : ''} ${track === 'nextjs' ? 'logo-icon-nextjs' : ''} ${track === 'python' ? 'logo-icon-python' : ''} ${track === 'aws' ? 'logo-icon-aws' : ''} ${track === 'devops' ? 'logo-icon-devops' : ''}`}
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
            placeholder={searchPlaceholder}
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
          <Link to="/mobile" onClick={closeMenu} className="header-rn-link">
            React Native
          </Link>
          <Link to="/python" onClick={closeMenu} className="header-python-link">
            Python
          </Link>
          <Link to="/aws" onClick={closeMenu} className="header-aws-link">
            AWS
          </Link>
          <Link to="/devops" onClick={closeMenu} className="header-devops-link">
            DevOps
          </Link>
          <a href={TRACK_SYLLABUS[track]} onClick={closeMenu}>
            Syllabus
          </a>
          <Link to={TRACK_START[track]} onClick={closeMenu}>
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
