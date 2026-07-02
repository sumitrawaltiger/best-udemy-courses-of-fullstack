import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query.trim())}`);
      onSearch?.(query.trim());
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
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

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <a href="/#syllabus">Syllabus</a>
          <Link to="/learn/introduction-to-javascript">Start Learning</Link>
        </nav>
      </div>
    </header>
  );
}
