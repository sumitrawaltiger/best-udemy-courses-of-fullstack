import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PORTFOLIO = 'https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/';
const CAREER = 'https://reactnative.dev/docs/getting-started';
const MOBILE_TRACK = '/mobile';

const LEARNT_TODAY = [
  { title: 'Final presentation', text: 'tell the story: problem → approach → demo → what you’d build next' },
  { title: 'App showcase', text: 'highlight 2–3 projects with screenshots, stack, and a live or recorded demo' },
  { title: 'Career next steps', text: 'portfolio, GitHub, LinkedIn, and applying skills to junior RN / Expo roles' },
  { title: 'Thunder++ complete', text: 'foundations → production → projects → deploy → graduation — the cohort arc is done' },
  { title: 'Ship to stores', text: 'keep at least one app on an internal or production track as proof you can ship' },
  { title: 'Retrospective', text: 'write what was hard, what clicked, and which habits you’ll keep' },
  { title: 'Network', text: 'stay in the cohort chat — referrals and code review buddies outlast the course' },
  { title: 'Keep building', text: 'one small ship per week beats a perfect rewrite that never launches' },
  { title: 'Celebrate', text: 'you went from Expo Go to store-ready workflows — mark the milestone' },
];

const SHOWCASE = [
  {
    icon: '🎤', title: 'Final Presentation', titleClass: 'card-title-cyan', subtitle: 'Tell The Story',
    description: 'Three to five minutes: the problem, your architecture choices, a live or recorded demo, and one lesson learned. Practice once out loud.',
    code: 'problem → demo → stack → next',
  },
  {
    icon: '📱', title: 'App Showcase', titleClass: 'card-title-purple', subtitle: 'Pick Your Best',
    description: 'Feature the weather, wallpaper, study, or Jarvis apps that best show range — UI, device APIs, AI, and shipping. Screenshots on a clean README.',
    code: '// 2–3 apps · screenshots · links',
  },
  {
    icon: '🧭', title: 'Career Next Steps', titleClass: 'card-title-amber', subtitle: 'After The Cohort',
    description: 'Update portfolio and LinkedIn with Expo/RN keywords, pin a shipped repo, and practice explaining one production decision (EAS, OTA, auth).',
    code: '// portfolio · GitHub · apply · keep shipping',
  },
];

const WRAP = [
  {
    icon: '⚡', title: 'Thunder++ Complete', titleClass: 'card-title-cyan', subtitle: 'Days 101–125',
    description: 'React refresher through device APIs, EAS, push, auth, real projects, store submit, OTA, and graduation. A full mobile cohort arc on the journal.',
    footer: 'From “hello Expo” to a store-ready mindset.',
  },
  {
    icon: '🚀', title: 'Ship To Stores', titleClass: 'card-title-purple', subtitle: 'Stay In Production',
    description: 'Keep one app alive on an internal or production track. Real users (even friends) teach more than another unfinished clone.',
    code: '// internal track → feedback → OTA',
  },
  {
    icon: '🚂', title: 'What Comes Next', titleClass: 'card-title-amber', subtitle: 'Day 126 Preview',
    description: 'Tomorrow starts Express.js on Node — hello server, routing, REST, JWT auth, and a real database.',
    link: { href: '/day-126', label: 'Go to Day 126 →' },
  },
  {
    icon: '📱', title: 'Explore The RN Track', titleClass: 'card-title-lime', subtitle: 'Full Syllabus',
    description: 'Revisit every phase, lesson, and project on the React Native track whenever you need a refresher.',
    link: { href: MOBILE_TRACK, label: 'Open the RN track →' },
  },
];

const RESOURCES = [
  {
    icon: '💼', title: 'Portfolio Guide', titleClass: 'card-title-cyan', subtitle: 'Article',
    description: 'Structure a developer portfolio so your cohort apps are easy to scan.',
    link: { href: PORTFOLIO, label: 'Read portfolio guide →', external: true },
  },
  {
    icon: '📘', title: 'React Native Docs', titleClass: 'card-title-purple', subtitle: 'Keep Learning',
    description: 'The official docs stay your home base as the ecosystem moves.',
    link: { href: CAREER, label: 'Open RN docs →', external: true },
  },
  {
    icon: '📱', title: 'RN Track On Site', titleClass: 'card-title-amber', subtitle: 'Syllabus',
    description: 'Browse the full ChaiCode mobile cohort lessons and projects on JS Learn Hub.',
    link: { href: MOBILE_TRACK, label: 'Open the RN track →' },
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

export default function Day125() {
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
          <Link to="/day-124" className="day001-nav-btn day001-nav-prev">← Day 124</Link>
          <p className="day001-datetime">React Native Day 125 · 9 Oct 2027</p>
          <Link to="/day-126" className="day001-nav-btn day001-nav-next">Day 126 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Graduation</span><span>RN Day 25</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 125 <span aria-hidden="true">🎉</span></h1>
              <p className="day001-day-theme">COHORT GRADUATION &amp; SHOWCASE</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '35%' }} /></div>

        <p className="day001-summary">
          Day 125 closes the React Native cohort. <strong>Present</strong> your work,{' '}
          <strong>showcase</strong> your best apps, plan <strong>career next steps</strong>, and mark{' '}
          <strong>Thunder++ complete</strong>. Keep at least one build shipping — graduation is a
          checkpoint, not a stop.
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

        <CardSection icon="🎤" title="1 · PRESENT & SHOWCASE" cards={SHOWCASE} columns={3} />
        <CardSection icon="🎉" title="2 · COMPLETE & KEEP SHIPPING" cards={WRAP} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Graduation</span><span>#ThunderPlusPlus</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
