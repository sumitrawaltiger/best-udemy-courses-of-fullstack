import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const HACKATHON_TIPS = 'https://medium.com/hackernoon/how-to-win-a-hackathon-7d93cabc4ae';
const RN_TIPS = 'https://reactnative.dev/docs/getting-started';
const COMMUNITY = 'https://reactnative.dev/community/overview';

const LEARNT_TODAY = [
  { title: 'Hackathons', text: 'short timed builds — scope a MVP, ship a demo, skip perfect polish' },
  { title: 'Live workshops', text: 'follow-along sessions that force you to type, not just watch' },
  { title: 'Quizzes', text: 'quick checks on navigation, storage, EAS, and device APIs under time pressure' },
  { title: 'Bounties', text: 'small paid or ranked challenges that reward finishing a crisp feature' },
  { title: 'Community learning', text: 'ask in public, share blockers, and reuse patterns from peers' },
  { title: 'MVP mindset', text: 'one user story end-to-end beats five half-built screens' },
  { title: 'Demo discipline', text: 'rehearse a 3-minute path; have a backup recording if Wi‑Fi dies' },
  { title: 'Team roles', text: 'split UI / API / device features early so nobody blocks the finish line' },
  { title: 'Energy management', text: 'sleep and a working build at the deadline beat a broken masterpiece' },
];

const EVENTS = [
  {
    icon: '🏁', title: 'Hackathons', titleClass: 'card-title-cyan', subtitle: 'Build Under The Clock',
    description: 'Pick one problem, cut scope ruthlessly, and demo something that runs. A working “hello weather” beats a half-finished multi-tab dream.',
    code: '// 1 problem → 1 happy path → demo\n// polish only if time remains',
  },
  {
    icon: '🛠️', title: 'Live Workshops', titleClass: 'card-title-purple', subtitle: 'Type Along',
    description: 'Workshops lock in Expo, navigation, and device APIs by doing them live. Pause, ask, and commit often so you can rewind mistakes.',
    code: '// follow → break → fix → commit',
  },
  {
    icon: '❓', title: 'Quizzes & Bounties', titleClass: 'card-title-amber', subtitle: 'Prove It Fast',
    description: 'Short quizzes surface gaps. Bounties reward a small, shippable feature — great practice for ticket-sized work on a real team.',
    code: '// quiz → note gaps\n// bounty → one PR-sized feature',
  },
];

const COMMUNITY_CARDS = [
  {
    icon: '🌐', title: 'Community Learning', titleClass: 'card-title-cyan', subtitle: 'Learn In Public',
    description: 'Post what broke, what you tried, and what fixed it. Future-you (and classmates) will search the same error.',
    code: '// error + steps + fix = helpful post',
  },
  {
    icon: '🎯', title: 'MVP Mindset', titleClass: 'card-title-purple', subtitle: 'One Story',
    description: 'Define the demo script first. Everything that is not on that path is optional until the timer hits zero.',
    code: 'user opens app → sees X → taps Y → wins',
  },
  {
    icon: '🎬', title: 'Demo Discipline', titleClass: 'card-title-amber', subtitle: 'Show, Don’t Tell',
    description: 'Three minutes, big font, no live coding surprises. Keep a screen recording ready when the venue Wi‑Fi fails.',
    code: '// rehearse twice\n// backup MP4 on the laptop',
  },
  {
    icon: '🔜', title: 'Next: Capstone Polish', titleClass: 'card-title-lime', subtitle: 'Day 124 Preview',
    description: 'Tomorrow: final polish, README & docs, demo video, certification criteria, and submission prep.',
    link: { href: '/day-124', label: 'Go to Day 124 →' },
  },
];

const RESOURCES = [
  {
    icon: '🏁', title: 'Hackathon Tips', titleClass: 'card-title-cyan', subtitle: 'Article',
    description: 'Scope, teamwork, and demo habits that help under a hard deadline.',
    link: { href: HACKATHON_TIPS, label: 'Read hackathon tips →', external: true },
  },
  {
    icon: '📱', title: 'RN Getting Started', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Quick reference when a workshop moves faster than your notes.',
    link: { href: RN_TIPS, label: 'Open RN docs →', external: true },
  },
  {
    icon: '🌐', title: 'RN Community', titleClass: 'card-title-amber', subtitle: 'Overview',
    description: 'Where to ask questions and find React Native community spaces.',
    link: { href: COMMUNITY, label: 'Explore community →', external: true },
  },
];

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

export default function Day123() {
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
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
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
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/day-122" className="day001-nav-btn day001-nav-prev">← Day 122</Link>
          <p className="day001-datetime">React Native Day 123 · 3 May 2027</p>
          <Link to="/day-124" className="day001-nav-btn day001-nav-next">Day 124 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Hackathon</span><span>RN Day 23</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 123 <span aria-hidden="true">🏁</span></h1>
              <p className="day001-day-theme">HACKATHON &amp; WORKSHOPS</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">RN · MOBILE DEV</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '34%' }} /></div>

        <p className="day001-summary">
          Day 123 is community under pressure. <strong>Hackathons</strong>,{' '}
          <strong>live workshops</strong>, <strong>quizzes</strong>, <strong>bounties</strong>, and{' '}
          <strong>learning in public</strong> — with an <strong>MVP mindset</strong> and a rehearsed{' '}
          <strong>demo</strong>. Ship something small that works.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏁" title="1 · EVENTS & CHALLENGES" cards={EVENTS} columns={3} />
        <CardSection icon="🎯" title="2 · COMMUNITY & DEMO HABITS" cards={COMMUNITY_CARDS} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Hackathon</span><span>#Community</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
