import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const RESUME_URL = 'https://www.techinterviewhandbook.org/resume/';
const YT_URL = 'https://www.youtube.com/watch?v=5gLVxMKeSGM';

const LEARNT_TODAY = [
  {
    title: 'Resume structure',
    text: 'one page — header, summary, skills, experience, projects, education',
  },
  {
    title: 'Bullet formula',
    text: 'Action verb + what you built + metric (%, latency, users, cost)',
  },
  {
    title: 'Project highlights',
    text: '2–3 projects with stack, problem, and measurable impact',
  },
  {
    title: 'Skills section',
    text: 'group by Languages · Frameworks · Tools — only what you can defend',
  },
  {
    title: 'LinkedIn optimization',
    text: 'headline with role + stack; featured projects; weekly posts optional',
  },
  {
    title: 'GitHub profile',
    text: 'pinned repos, README, clean commits — your live portfolio',
  },
  {
    title: 'Portfolio links',
    text: 'live demo + repo + short case study — make it one click',
  },
  {
    title: 'ATS-friendly',
    text: 'plain text, standard headings, no tables/graphics that break parsers',
  },
  {
    title: 'Tailor per role',
    text: 'mirror keywords from the job post in skills and bullets',
  },
  {
    title: 'Proof over fluff',
    text: 'ship numbers and links — drop empty soft-skill filler',
  },
];

const RESUME = [
  {
    icon: '📄',
    title: 'Resume Structure',
    titleClass: 'card-title-cyan',
    subtitle: 'one page',
    description: 'Clear sections recruiters scan in seconds — keep it scannable.',
    code: 'Header · Summary · Skills\nExperience · Projects · Education',
  },
  {
    icon: '✍️',
    title: 'Bullet Formula',
    titleClass: 'card-title-green',
    subtitle: 'impact first',
    description: 'Every line: verb + work + result with a number when possible.',
    code: 'Built X using Y → cut p95 40%\nShipped Z → +12k MAU',
  },
  {
    icon: '🚀',
    title: 'Project Highlights',
    titleClass: 'card-title-amber',
    subtitle: 'show, don’t list',
    description: 'Problem → your approach → stack → outcome. Link the demo.',
    code: 'Capstone · Thunder apps\nlive URL + GitHub + 2 bullets',
  },
  {
    icon: '🧰',
    title: 'Skills Section',
    titleClass: 'card-title-pink',
    subtitle: 'defensible only',
    description: 'Group skills; drop buzzwords you cannot explain in an interview.',
    code: 'Lang: JS, TS, Python\nFE/BE · DB · Cloud · Tools',
  },
];

const PRESENCE = [
  {
    icon: '💼',
    title: 'LinkedIn Optimization',
    titleClass: 'card-title-cyan',
    subtitle: 'discoverable',
    description: 'Headline, About, Featured, and Experience that match the resume.',
    code: 'Full-Stack · React · Node\nFeatured: demo + case study',
  },
  {
    icon: '🐙',
    title: 'GitHub Profile',
    titleClass: 'card-title-green',
    subtitle: 'proof of work',
    description: 'Pinned repos, profile README, meaningful commit history.',
    code: 'pin 4–6 best repos\nREADME: who you are + stack',
  },
  {
    icon: '🔗',
    title: 'Portfolio Links',
    titleClass: 'card-title-amber',
    subtitle: 'one click',
    description: 'Live site, repo, and a short write-up for each flagship project.',
    code: 'demo.example.com\ngithub.com/you/project',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'Resume Guide',
    titleClass: 'card-title-purple',
    subtitle: 'Tech Interview Handbook',
    description: 'Practical resume advice tailored for software engineers.',
    link: { href: RESUME_URL, label: 'Open resume guide →', external: true },
  },
  {
    icon: '▶️',
    title: 'Winning Tech Resume',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'How to Write a Winning Tech Resume — Anthony D. Mays — Day 97.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 97 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/building-your-tech-resume',
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

export default function Day097() {
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
          <Link to="/day-096" className="day001-nav-btn day001-nav-home">
            ← Day 96
          </Link>
          <p className="day001-datetime">Thunder Day 97 · 21 Oct 2026</p>
          <Link to="/day-098" className="day001-nav-btn day001-nav-next">
            Day 98 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Career</span>
              <span>Resume</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 97 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">BUILDING YOUR TECH RESUME</p>
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
              <p className="day001-profile-role">CAREER</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '97%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-seven — package your work: a tight <strong>resume</strong>, strong{' '}
          <strong>project bullets</strong>, an optimized <strong>LinkedIn</strong>, and a clean{' '}
          <strong>GitHub</strong> profile with portfolio links. Proof beats fluff. Reference:{' '}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            Tech Interview Handbook — Resume
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

        <CardSection icon="📄" title="RESUME CRAFT" cards={RESUME} columns={4} />
        <CardSection icon="🌐" title="ONLINE PRESENCE" cards={PRESENCE} columns={3} />
        <CardSection icon="📚" title="RESUME RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Resume</span>
          <span>#LinkedIn</span>
          <span>#GitHub</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
