import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { discordCommunity } from '../data/syllabus';
import { LEARNING_PATH } from '../data/learningPath';
import LearningPathNav from './LearningPathNav';

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

const TRACK_HOME = {
  thunder: '/',
  nextjs: '/nextjs',
  python: '/python',
  java: '/java',
  aws: '/aws',
  devops: '/devops',
  k8s: '/k8s',
  interview: '/interview',
  mobile: '/mobile',
};

const TRACK_START = {
  thunder: '/learn/introduction-to-javascript',
  nextjs: '/nextjs/learn/introduction-to-the-course',
  python: '/python/learn/course-introduction',
  java: '/java/learn/introduction-to-java-and-setup',
  aws: '/aws/learn/introduction-to-100-days-of-cloud',
  devops: '/devops/learn/introduction-to-100-days-of-devops',
  k8s: '/k8s/learn/introduction-to-kubernetes-learning-path',
  interview: '/interview/learn/introduction-to-interview-prep',
  mobile: '/mobile/learn/react-js-refresher',
};

const TRACK_SYLLABUS = {
  thunder: '/#syllabus',
  nextjs: '/nextjs#nextjs-syllabus',
  python: '/python#python-syllabus',
  java: '/java#java-syllabus',
  aws: '/aws#aws-syllabus',
  devops: '/devops#devops-syllabus',
  k8s: '/k8s#k8s-syllabus',
  interview: '/interview#interview-syllabus',
  mobile: '/mobile#mobile-syllabus',
};

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [tracksOpen, setTracksOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const tracksRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const track = trackFromPath(location.pathname);
  const currentTrack = LEARNING_PATH.find((t) => t.id === track) ?? LEARNING_PATH[0];
  const showTracksMenu = isMobileNav ? menuOpen : tracksOpen;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const sync = () => setIsMobileNav(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobileNav) {
      setTracksOpen(true);
    }
  }, [menuOpen, isMobileNav]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (tracksRef.current && !tracksRef.current.contains(e.target)) {
        setTracksOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setTracksOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

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
    setTracksOpen(false);
  }

  const logoIcon =
    track === 'mobile'
      ? 'RN'
      : track === 'interview'
        ? 'IP'
        : track === 'k8s'
          ? 'K8S'
          : track === 'devops'
            ? 'DO'
            : track === 'aws'
              ? 'AWS'
              : track === 'java'
                ? 'JV'
                : track === 'python'
                  ? 'PY'
                  : track === 'nextjs'
                    ? 'NX'
                    : 'JS';
  const logoName =
    track === 'mobile'
      ? 'Thunder++ Mobile'
      : track === 'interview'
        ? 'Thunder++ Interview Prep'
        : track === 'k8s'
          ? 'Thunder++ Kubernetes'
          : track === 'devops'
            ? 'Thunder++ DevOps'
            : track === 'aws'
              ? 'Thunder++ AWS Cloud'
              : track === 'java'
                ? 'Thunder++ Java & Spring'
                : track === 'python'
                  ? 'Thunder++ Python'
                  : track === 'nextjs'
                    ? 'Thunder+ Next.js'
                    : 'Road to Full Lifecycle Engineer';
  const logoTagline =
    track === 'mobile'
      ? 'React Native by ChaiCode'
      : track === 'interview'
        ? 'DSA & System Design — ChaiCode + GfG'
        : track === 'k8s'
          ? 'Kubernetes — KodeKloud'
          : track === 'devops'
            ? '100 Days of DevOps — KodeKloud'
            : track === 'aws'
              ? '100 Days of Cloud — KodeKloud'
              : track === 'java'
                ? 'Java & Spring — Udemy'
                : track === 'python'
                  ? 'Python & Agentic AI — Ashok IT'
                  : track === 'nextjs'
                    ? 'React & Next.js by ChaiCode'
                    : 'Java · Python · TypeScript · DevOps · Kubernetes';

  const searchPlaceholder =
    track === 'mobile'
      ? 'Search mobile lessons...'
      : track === 'interview'
        ? 'Search interview modules...'
        : track === 'k8s'
          ? 'Search Kubernetes days...'
          : track === 'devops'
            ? 'Search DevOps days...'
            : track === 'aws'
              ? 'Search AWS days...'
              : track === 'java'
                ? 'Search Java modules...'
                : track === 'python'
                  ? 'Search Python modules...'
                  : track === 'nextjs'
                    ? 'Search modules...'
                    : 'Search tutorials...';

  return (
    <header
      className={`header ${track === 'mobile' ? 'header-mobile' : ''} ${track === 'nextjs' ? 'header-nextjs' : ''} ${track === 'python' ? 'header-python' : ''} ${track === 'java' ? 'header-java' : ''} ${track === 'aws' ? 'header-aws' : ''} ${track === 'devops' ? 'header-devops' : ''} ${track === 'k8s' ? 'header-k8s' : ''} ${track === 'interview' ? 'header-interview' : ''}`}
    >
      <div className="header-inner">
        <Link to={TRACK_HOME[track]} className="logo" onClick={closeMenu}>
          <span
            className={`logo-icon ${track === 'mobile' ? 'logo-icon-mobile' : ''} ${track === 'nextjs' ? 'logo-icon-nextjs' : ''} ${track === 'python' ? 'logo-icon-python' : ''} ${track === 'java' ? 'logo-icon-java' : ''} ${track === 'aws' ? 'logo-icon-aws' : ''} ${track === 'devops' ? 'logo-icon-devops' : ''} ${track === 'k8s' ? 'logo-icon-k8s' : ''} ${track === 'interview' ? 'logo-icon-interview' : ''}`}
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
          <button type="submit" className="btn btn-search" aria-label="Search">
            <span className="search-btn-text">Search</span>
            <span className="search-btn-icon" aria-hidden="true">⌕</span>
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
          <div className="header-nav-tracks" ref={tracksRef}>
            {isMobileNav && menuOpen && (
              <p className="header-nav-section-label">All learning tracks</p>
            )}

            {!isMobileNav && (
              <button
                type="button"
                className={`header-tracks-trigger ${tracksOpen ? 'open' : ''}`}
                onClick={() => setTracksOpen((open) => !open)}
                aria-expanded={tracksOpen}
                aria-haspopup="true"
              >
                <span className="header-tracks-trigger-label">Learning Path</span>
                <span className="header-tracks-current">{currentTrack.label}</span>
                <span className="header-tracks-chevron" aria-hidden="true">▾</span>
              </button>
            )}

            {showTracksMenu && (
              <div className="header-tracks-menu" role="menu">
                {LEARNING_PATH.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    role="menuitem"
                    className={`header-track-item track-${item.id} ${track === item.id ? 'active' : ''} ${item.id === 'interview' ? 'header-track-featured' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="header-track-dot" aria-hidden="true" />
                    <span className="header-track-text">
                      <span className="header-track-name">{item.label}</span>
                      <span className="header-track-desc">{item.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="header-nav-actions">
            <a href={TRACK_SYLLABUS[track]} className="header-nav-link" onClick={closeMenu}>
              Syllabus
            </a>
            <Link to={TRACK_START[track]} className="header-nav-cta" onClick={closeMenu}>
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
          </div>
        </nav>
      </div>
      {isMobileNav && !menuOpen && <LearningPathNav />}
    </header>
  );
}
