import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { discordCommunity } from '../data/syllabus';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query.trim())}`);
      onSearch?.(query.trim());
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">JS</span>
          <div className="logo-text">
            <span className="logo-name">JS Learn Hub</span>
            <span className="logo-tagline">Learn JavaScript Day by Day</span>
          </div>
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search tutorials..."
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
          <Link to="/" onClick={closeMenu}>Home</Link>
          <a href="/#syllabus" onClick={closeMenu}>Syllabus</a>
          <Link to="/learn/introduction-to-javascript" onClick={closeMenu}>Start Learning</Link>
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
