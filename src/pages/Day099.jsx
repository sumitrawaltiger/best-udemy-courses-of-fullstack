import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const JOURNAL_URL = 'https://www.100daysofcode.com/';
const YT_URL = 'https://www.youtube.com/watch?v=hdI2bqOjy3c';

const LEARNT_TODAY = [
  {
    title: 'Skills acquired',
    text: 'JS → backend → DevOps → architecture — list what stuck',
  },
  {
    title: 'Projects built',
    text: 'inventory demos, repos, and posters — pick showcase pieces',
  },
  {
    title: 'Knowledge gaps',
    text: 'honest list: DSA depth, system design, cloud certs, soft skills',
  },
  {
    title: 'Learning plan ahead',
    text: 'next 30/90 days — one deep track + weekly practice habit',
  },
  {
    title: 'Staying consistent',
    text: 'smaller daily targets beat burnout — protect the streak',
  },
  {
    title: 'Wins to keep',
    text: 'what routines worked — morning blocks, notes, shipping demos',
  },
  {
    title: 'What to drop',
    text: 'cut busywork — tutorials without building, endless tool hopping',
  },
  {
    title: 'Mentor & peers',
    text: 'who helped — keep those channels open after day 100',
  },
  {
    title: 'Portfolio refresh',
    text: 'update README, resume, LinkedIn with the 100-day arc',
  },
  {
    title: 'Celebrate progress',
    text: 'you showed up nearly 100 times — that discipline is the skill',
  },
];

const LOOK_BACK = [
  {
    icon: '🧠',
    title: 'Skills Acquired',
    titleClass: 'card-title-cyan',
    subtitle: 'what stuck',
    description: 'Map the journey: frontend, backend, databases, DevOps, design.',
    code: 'JS · React · Node · SQL\nDocker · K8s · auth · indexing',
  },
  {
    icon: '🛠️',
    title: 'Projects Built',
    titleClass: 'card-title-green',
    subtitle: 'proof of work',
    description: 'List shipped apps and day posters — pick 3 for the showcase.',
    code: 'capstones · demos · repos\npin + write short case notes',
  },
  {
    icon: '🕳️',
    title: 'Knowledge Gaps',
    titleClass: 'card-title-amber',
    subtitle: 'be honest',
    description: 'Name weak spots without shame — they become the next roadmap.',
    code: 'DSA depth · system design\ncloud · behavioral polish',
  },
  {
    icon: '🗺️',
    title: 'Learning Plan Ahead',
    titleClass: 'card-title-pink',
    subtitle: 'next 30 / 90 days',
    description: 'One primary track + weekly practice — not ten new courses.',
    code: '30d: deepen X\n90d: ship Y · interview Z',
  },
];

const HABITS = [
  {
    icon: '🔥',
    title: 'Stay Consistent',
    titleClass: 'card-title-cyan',
    subtitle: 'protect the streak',
    description: 'Shrink the daily bar on hard days — never zero if you can help it.',
    code: 'minimum viable day: 25 min\njournal one line of progress',
  },
  {
    icon: '✅',
    title: 'Keep / Drop',
    titleClass: 'card-title-green',
    subtitle: 'edit the system',
    description: 'Double down on habits that shipped; cut tutorial loops.',
    code: 'keep: build + notes\ndrop: passive binge-watching',
  },
  {
    icon: '📣',
    title: 'Portfolio Refresh',
    titleClass: 'card-title-amber',
    subtitle: 'tell the story',
    description: 'Update resume, GitHub, LinkedIn with the 100-day narrative.',
    code: '100 Days of Thunder\nskills · projects · next goals',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: '100DaysOfCode',
    titleClass: 'card-title-purple',
    subtitle: 'community',
    description: 'The #100DaysOfCode movement — keep logging after graduation.',
    link: { href: JOURNAL_URL, label: 'Open 100DaysOfCode →', external: true },
  },
  {
    icon: '▶️',
    title: 'JS Full Course',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Refresh fundamentals anytime — Traversy Media JS course for Day 99.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 99 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/100-days-retrospective',
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

export default function Day099() {
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
          <Link to="/day-098" className="day001-nav-btn day001-nav-home">
            ← Day 98
          </Link>
          <p className="day001-datetime">Thunder Day 99</p>
          <Link to="/day-100" className="day001-nav-btn day001-nav-next">
            Day 100 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Retrospective</span>
              <span>Growth</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 99 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">100 DAYS RETROSPECTIVE</p>
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
              <p className="day001-profile-role">REFLECT</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap">
          <div className="day001-progress-bar" style={{ width: '99%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-nine — look back before you graduate: inventory{' '}
          <strong>skills</strong>, <strong>projects</strong>, and <strong>gaps</strong>, then write
          a clear <strong>plan ahead</strong>. Keep the habits that worked; cut the rest.
          Reference:{' '}
          <a
            href={JOURNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="day001-inline-link"
          >
            100DaysOfCode
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

        <CardSection icon="🪞" title="LOOK BACK" cards={LOOK_BACK} columns={4} />
        <CardSection icon="🔥" title="HABITS GOING FORWARD" cards={HABITS} columns={3} />
        <CardSection icon="📚" title="RETRO RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#Retrospective</span>
          <span>#Growth</span>
          <span>#Consistency</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
