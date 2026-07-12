import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const STAR_URL = 'https://www.themuse.com/advice/star-interview-method';
const YT_URL = 'https://www.youtube.com/watch?v=ld0cvWnrVsU';

const LEARNT_TODAY = [
  {
    title: 'STAR method',
    text: 'Situation, Task, Action, Result — structure every story',
  },
  {
    title: 'Common questions',
    text: 'conflict, failure, leadership, ownership — prepare 5–7 stories',
  },
  {
    title: 'Project stories',
    text: 'pick 2–3 projects with clear impact metrics you can quantify',
  },
  {
    title: 'Strengths',
    text: 'name a real strength + a short story that proves it',
  },
  {
    title: 'Weaknesses',
    text: 'honest growth area + what you did to improve — no fake flaws',
  },
  {
    title: 'Culture fit',
    text: 'show how you collaborate, give feedback, and handle ambiguity',
  },
  {
    title: 'Quantify results',
    text: '%, latency, revenue, users — numbers beat vague “improved X”',
  },
  {
    title: 'Own the action',
    text: 'say “I did…” not only “we did…” — interviewers want your role',
  },
  {
    title: 'Practice out loud',
    text: '2-minute answers; record yourself; cut filler words',
  },
  {
    title: 'Ask questions back',
    text: 'team rituals, on-call, growth — interviews go both ways',
  },
];

const STAR_CORE = [
  {
    icon: '⭐',
    title: 'STAR Method',
    titleClass: 'card-title-cyan',
    subtitle: 'S · T · A · R',
    description: 'Frame every behavioral answer with Situation → Task → Action → Result.',
    code: 'S: context\nT: your responsibility\nA: what YOU did\nR: measurable outcome',
  },
  {
    icon: '💬',
    title: 'Common Questions',
    titleClass: 'card-title-green',
    subtitle: 'prepare the bank',
    description: 'Conflict, failure, deadline pressure, disagreement with a manager.',
    code: '"Tell me about a conflict…"\n"When did you fail…?"\n"Lead without authority…"',
  },
  {
    icon: '📁',
    title: 'Project Stories',
    titleClass: 'card-title-amber',
    subtitle: 'your portfolio voice',
    description: '2–3 deep stories beat 10 shallow ones — impact + your role.',
    code: 'project → problem → your decisions\n→ metric (p95, conversion, cost)',
  },
  {
    icon: '🪞',
    title: 'Strengths & Weaknesses',
    titleClass: 'card-title-pink',
    subtitle: 'honest + specific',
    description: 'Prove strengths with STAR; frame weaknesses as growth in progress.',
    code: 'strength → short proof story\nweakness → what you changed',
  },
];

const DELIVERY = [
  {
    icon: '🤝',
    title: 'Culture Fit',
    titleClass: 'card-title-cyan',
    subtitle: 'how you work',
    description: 'Show collaboration, feedback, ownership, and calm under ambiguity.',
    code: 'pair / review / mentorship\nhandle conflict constructively',
  },
  {
    icon: '📈',
    title: 'Quantify Impact',
    titleClass: 'card-title-green',
    subtitle: 'numbers win',
    description: 'Replace “made it better” with latency, %, cost, or user counts.',
    code: 'cut p95 800ms → 200ms\n+12% conversion · -30% cost',
  },
  {
    icon: '🎙️',
    title: 'Practice Out Loud',
    titleClass: 'card-title-amber',
    subtitle: 'rehearse',
    description: 'Time answers to ~2 minutes; record; tighten the Action/Result.',
    code: 'write bullets → speak → cut filler\nmock with a friend',
  },
];

const RESOURCES = [
  {
    icon: '📖',
    title: 'STAR Method',
    titleClass: 'card-title-purple',
    subtitle: 'The Muse',
    description: 'A clear walkthrough of Situation, Task, Action, Result.',
    link: { href: STAR_URL, label: 'Open STAR guide →', external: true },
  },
  {
    icon: '▶️',
    title: 'Behavioral Interview',
    titleClass: 'card-title-amber',
    subtitle: 'Free YouTube',
    description: 'Cracking the Behavioral Interview for Software Developers — Day 95.',
    link: { href: YT_URL, label: 'Watch on YouTube →', external: true },
  },
  {
    icon: '📚',
    title: 'Lesson Page',
    titleClass: 'card-title-green',
    subtitle: 'full chapter',
    description: 'Open the Day 95 lesson for sections, quiz, and try-it snippets.',
    link: {
      href: '/learn/behavioral-interview-prep',
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

export default function Day095() {
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
          <Link to="/day-094" className="day001-nav-btn day001-nav-home">
            ← Day 94
          </Link>
          <p className="day001-datetime">Thunder Day 95 · 7 Oct 2026</p>
          <Link to="/day-096" className="day001-nav-btn day001-nav-next">
            Day 96 →
          </Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags">
              <span>Career</span>
              <span>Interview</span>
              <span>100 Days</span>
            </div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">
                DAY 95 <span aria-hidden="true">⚡</span>
              </h1>
              <p className="day001-day-theme">BEHAVIORAL INTERVIEW PREP</p>
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
          <div className="day001-progress-bar" style={{ width: '95%' }} />
        </div>

        <p className="day001-summary">
          Day ninety-five — nail behavioral interviews with the <strong>STAR</strong> method,
          prepared <strong>project stories</strong>, honest strengths/weaknesses, and clear{' '}
          <strong>culture-fit</strong> signals. Quantify results and practice out loud. Reference:{' '}
          <a href={STAR_URL} target="_blank" rel="noopener noreferrer" className="day001-inline-link">
            the STAR method
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

        <CardSection icon="⭐" title="STAR & STORIES" cards={STAR_CORE} columns={4} />
        <CardSection icon="🎙️" title="DELIVERY" cards={DELIVERY} columns={3} />
        <CardSection icon="📚" title="INTERVIEW RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span>
          <span>#InterviewPrep</span>
          <span>#STAR</span>
          <span>#Career</span>
          <span>#Thunder</span>
        </footer>
      </div>
    </div>
  );
}
