import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const SHOWCASE_URL = 'https://www.100daysofcode.com/';
const YT_URL = 'https://www.youtube.com/watch?v=Je_KYIM9QJc';

const LEARNT_TODAY = [
  {
    title: 'Final presentation',
    text: 'story arc: why → what you built → demo → learnings → what’s next',
  },
  {
    title: 'Demo your capstone',
    text: 'live happy path first — then one edge case and the architecture slide',
  },
  {
    title: 'Share learnings',
    text: '3 hard lessons + 3 habits you will keep after day 100',
  },
  {
    title: 'Next career steps',
    text: 'apply, contribute, deepen one track — pick concrete dates',
  },
  {
    title: 'Audience first',
    text: 'recruiters want impact; engineers want architecture — balance both',
  },
  {
    title: 'Keep demos reliable',
    text: 'seeded data, short script, backup video if the network fails',
  },
  {
    title: 'Celebrate properly',
    text: 'you finished 100 days — document it and thank your supporters',
  },
  {
    title: 'Ship the narrative',
    text: 'blog, LinkedIn, or a short video — the story is part of the portfolio',
  },
  {
    title: 'Ask for feedback',
    text: 'invite peers to roast the demo — polish for real interviews',
  },
  {
    title: 'Congratulations!',
    text: 'consistency compounds — this is a beginning, not an ending',
  },
];

const SHOWCASE = [
  {
    icon: '🎤',
    title: 'Final Presentation',
    titleClass: 'card-title-cyan',
    subtitle: 'tell the story',
    description: 'Open with the problem, show the build, close with impact and next steps.',
    code: 'why → build → demo\nlearnings → what’s next',
  },
  {
    icon: '🖥️',
    title: 'Demo Your Capstone',
    titleClass: 'card-title-green',
    subtitle: 'live + backup',
    description: 'Happy path first; keep a recorded fallback if the live demo flakes.',
    code: 'script: 3–5 minutes\nseed data · backup video',
  },
  {
    icon: '💡',
    title: 'Share Learnings',
    titleClass: 'card-title-amber',
    subtitle: 'teach what hurt',
    description: 'Honest failure stories land harder than a perfect highlight reel.',
    code: '3 hard lessons\n3 habits to keep',
  },
  {
    icon: '🛤️',
    title: 'Next Career Steps',
    titleClass: 'card-title-pink',
    subtitle: 'after graduation',
    description: 'Applications, OSS, interviews, or a deeper specialty — date it.',
    code: 'apply weekly · 1 OSS PR\ndeepen one track 90 days',
  },
];

const CELEBRATE = [
  {
    icon: '🎉',
    title: 'Congratulations!',
    titleClass: 'card-title-cyan',
    subtitle: 'you finished',
    description: '100 days of showing up. That discipline is the real deliverable.',
    code: 'Day 1 → Day 100\nconsistency > perfection',
  },
  {
    icon: '📣',
    title: 'Ship the Narrative',
    titleClass: 'card-title-green',
    subtitle: 'publish it',
    description: 'Write or record the journey — employers hire stories with proof.',
    code: 'LinkedIn post · blog\nportfolio case study',
  },
  {
    icon: '🏠',
    title: 'Back to the Hub',
    titleClass: 'card-title-amber',
    subtitle: 'keep learning',
    description: 'Return to the syllabus anytime — tracks beyond Thunder await.',
    code: 'Home · other tracks\ninterview prep · cheat sheets',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: '100DaysOfCode',
    titleClass: 'card-title-purple',
    subtitle: 'community',
    description: 'Share your graduation with the #100DaysOfCode community.',
    link: { href: SHOWCASE_URL, label: 'Share your win →', external: true },
  },
  {
    icon: '▶️',
    title: 'Full Stack Path',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How to Become a Full Stack Developer — Tech With Tim — Day 100.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 100 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/graduation-project-showcase',
      label: 'Open lesson →',
      external: false,
    },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-card-link"
          >
            {card.link.label}
          </a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">
            {card.link.label}
          </Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (
          <TopicCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function Day100() {
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
    if (avatar && !avatar.complete) {
      avatar.addEventListener('load', fitToScreen);
    }

    return () => {
      window.removeEventListener('resize', fitToScreen);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/day-099" className="day001-nav-btn day001-nav-home">
            ← Day 99
          </Link>
          <p className="day001-datetime">Thunder Day 100 · 24 Oct 2026</p>
          <Link to="/day-101" className="day001-nav-btn day001-nav-next">
            Day 101 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Graduation</span>
              <span>Showcase</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 100 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">GRADUATION PROJECT SHOWCASE</p>
            </div>
          </div>
          <div className="day001-profile">
            <img
              src="/sumit-profile.png"
              alt="Sumit Rawal"
              className="day001-avatar"
              width={48}
              height={48}
            />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">GRADUATE</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '100%' }} />
        </div>

        <p className="day001-summary">
          Day one hundred — <strong>present</strong>, <strong>demo</strong>, and{' '}
          <strong>celebrate</strong>. Tell the story of your capstone, share hard learnings, and
          lock in next career steps. You finished Thunder: 100 Days of Code. Reference:{' '}
          <a
            href={SHOWCASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-inline-link"
          >
            #100DaysOfCode
          </a>
          .
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title">
            <span className="day001-learnt-line" aria-hidden="true" />
            WHAT I LEARNED TODAY
          </h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🎤" title="SHOWCASE" cards={SHOWCASE} columns={4} />
        <CardSection icon="🎉" title="CELEBRATE & CONTINUE" cards={CELEBRATE} columns={3} />
        <CardSection icon="📚" title="GRADUATION RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Graduation</span>
          <span>#Showcase</span>
          <span>#FullStack</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
