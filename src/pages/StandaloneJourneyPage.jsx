import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

// Day 1 of the Agentic AI journey = 5 Aug 2026
const AGENTIC_DAY1 = new Date(2026, 7, 5);

function agenticDate(dayNum) {
  const d = new Date(AGENTIC_DAY1.getTime());
  d.setDate(d.getDate() + dayNum - 1);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function StandaloneJourneyPage({
  dayNumber,
  dateLabel,
  prev,
  next,
  tags,
  theme,
  heroIcon,
  profileRole,
  progressWidth,
  summary,
  learntToday,
  core,
  practice,
  resources,
  hashtags,
}) {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min(
        (window.innerHeight - pad) / wrap.scrollHeight,
        (window.innerWidth - pad) / wrap.scrollWidth,
      );
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to={prev.href} className="day001-nav-btn day001-nav-prev">{prev.label}</Link>
          <p className="day001-datetime">Agentic AI Day {dayNumber} · {agenticDate(dayNumber)}</p>
          <Link to={next.href} className="day001-nav-btn day001-nav-next">{next.label}</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              {tags.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY {dayNumber} <span aria-hidden="true">{heroIcon}</span></h1>
              <p className="day001-day-theme">{theme}</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">{profileRole}</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: progressWidth }} />
        </div>

        <p className="day001-summary">{summary}</p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {learntToday.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> - {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon={heroIcon} title="CORE IDEAS" cards={core} columns={3} />
        <CardSection icon="🧪" title="PRACTICE" cards={practice} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={resources} columns={3} />

        <footer className="day001-hashtags">
          {hashtags.map((tag) => (<span key={tag}>{tag}</span>))}
        </footer>
      </div>
    </div>
  );
}
