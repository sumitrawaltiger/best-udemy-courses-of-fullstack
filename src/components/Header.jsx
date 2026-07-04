import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { discordCommunity } from '../data/syllabus';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onMobile = location.pathname.startsWith('/mobile');

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      const base = onMobile ? '/mobile' : '/';
      navigate(`${base}?q=${encodeURIComponent(query.trim())}`);
      onSearch?.(query.trim());
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`header ${onMobile ? 'header-mobile' : ''}`}>
      <div className="header-inner">
        <Link to={onMobile ? '/mobile' : '/'} className="logo" onClick={closeMenu}>
          <span className={`logo-icon ${onMobile ? 'logo-icon-mobile' : ''}`}>
            {onMobile ? 'RN' : 'JS'}
          </span>
          <div className="logo-text">
            <span className="logo-name">{onMobile ? 'Thunder++ Mobile' : 'JS Learn Hub'}</span>
            <span className="logo-tagline">
              {onMobile ? 'React Native by ChaiCode' : 'Learn JavaScript Day by Day'}
            </span>
          </div>
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder={onMobile ? 'Search mobile lessons...' : 'Search tutorials...'}
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
          <Link to="/mobile" onClick={closeMenu} className="header-rn-link">
            React Native
          </Link>
          <a href={onMobile ? '/mobile#mobile-syllabus' : '/#syllabus'} onClick={closeMenu}>
            Syllabus
          </a>
          <Link
            to={onMobile ? '/mobile/learn/react-js-refresher' : '/learn/introduction-to-javascript'}
            onClick={closeMenu}
          >
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
