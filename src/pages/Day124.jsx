import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const README_GUIDE = 'https://www.makeareadme.com/';
const DEMO_TIPS = 'https://www.youtube.com/watch?v=Tt08Km_XIYQ';
const EXPO_PUBLISH = 'https://docs.expo.dev/deploy/build-project/';

const LEARNT_TODAY = [
  { title: 'Final polish', text: 'fix crashes, empty states, and ugly spacing before evaluators open the app' },
  { title: 'README & docs', text: 'what it does, stack, setup, env vars, and screenshots — no tribal knowledge' },
  { title: 'Demo video', text: '60–90 seconds of the happy path with captions; host on Drive/YouTube unlisted' },
  { title: 'Certification criteria', text: 'know the rubric — features, code quality, docs, and demo usually all score' },
  { title: 'Submission prep', text: 'repo link, build/install steps, credentials for reviewers, and a contact email' },
  { title: 'Stable build', text: 'pin a release tag or EAS build so reviewers don’t chase a moving main branch' },
  { title: 'Secret scrub', text: 'remove API keys from the repo; use .env.example and reviewer test accounts' },
  { title: 'Accessibility pass', text: 'labels on icons, readable contrast, and large tap targets for demos' },
  { title: 'Almost done', text: 'Day 125 is showcase — today is make the package review-ready' },
];

const POLISH = [
  {
    icon: '✨', title: 'Final Polish', titleClass: 'card-title-cyan', subtitle: 'Look Finished',
    description: 'Kill console noise, fix the top three UX papercuts, and make loading/error/empty states intentional. First impressions decide scores.',
    code: '// no red box · no blank screens\n// consistent spacing & type',
  },
  {
    icon: '📝', title: 'README & Docs', titleClass: 'card-title-purple', subtitle: 'Run Without You',
    description: 'Problem statement, features, stack, install, env vars, and screenshots. A stranger should run the app in under ten minutes.',
    code: '## Setup\nnpm i && npx expo start\n## Env\nEXPO_PUBLIC_API_URL=...',
  },
  {
    icon: '🎥', title: 'Demo Video', titleClass: 'card-title-amber', subtitle: 'Show The Path',
    description: 'Record the happy path once. Big text, slow taps, voiceover or captions. Unlisted link in the README beats live-demo risk.',
    code: '// 60–90s · happy path only\n// link in README',
  },
];

const SUBMIT = [
  {
    icon: '📋', title: 'Certification Criteria', titleClass: 'card-title-cyan', subtitle: 'Know The Rubric',
    description: 'Map required features to a checklist and tick them before you submit. Don’t discover a missing entitlement the night before.',
    code: '// features · quality · docs · demo',
  },
  {
    icon: '📦', title: 'Submission Prep', titleClass: 'card-title-purple', subtitle: 'One Package',
    description: 'Repo URL, tag/commit hash, install steps, test account, and privacy notes if AI APIs are used. Put it all in one place.',
    code: '// repo · tag · demo · reviewer login',
  },
  {
    icon: '🏷️', title: 'Stable Build', titleClass: 'card-title-amber', subtitle: 'Pin The Bits',
    description: 'Tag a release or point reviewers at a specific EAS build. Continuous pushes to main during review create chaos.',
    code: 'git tag v1.0.0-cert\ngit push --tags',
  },
  {
    icon: '🔜', title: 'Next: Graduation', titleClass: 'card-title-lime', subtitle: 'Day 125 Preview',
    description: 'Tomorrow: final presentation, app showcase, career next steps, and celebrating Thunder++ complete.',
    link: { href: '/day-125', label: 'Go to Day 125 →' },
  },
];

const RESOURCES = [
  {
    icon: '📝', title: 'Make a README', titleClass: 'card-title-cyan', subtitle: 'Guide',
    description: 'Structure a README so setup and screenshots are obvious to reviewers.',
    link: { href: README_GUIDE, label: 'Read README guide →', external: true },
  },
  {
    icon: '🎥', title: 'Portfolio / Demo Tips', titleClass: 'card-title-purple', subtitle: 'Video',
    description: 'How to present projects clearly — useful when recording your cert demo.',
    link: { href: DEMO_TIPS, label: 'Watch demo tips →', external: true },
  },
  {
    icon: '🏗️', title: 'Build For Deploy', titleClass: 'card-title-amber', subtitle: 'Expo',
    description: 'Expo’s guide to building a project you can hand to testers or stores.',
    link: { href: EXPO_PUBLISH, label: 'Read build guide →', external: true },
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

export default function Day124() {
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
          <Link to="/day-123" className="day001-nav-btn day001-nav-prev">← Day 123</Link>
          <p className="day001-datetime">React Native Day 124 · 4 May 2027</p>
          <Link to="/day-125" className="day001-nav-btn day001-nav-next">Day 125 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Capstone</span><span>RN Day 24</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 124 <span aria-hidden="true">🎓</span></h1>
              <p className="day001-day-theme">CAPSTONE POLISH &amp; CERT PREP</p>
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
          Day 124 makes the package review-ready. <strong>Final polish</strong>, a clear{' '}
          <strong>README</strong>, a short <strong>demo video</strong>, mapped{' '}
          <strong>certification criteria</strong>, and a pinned <strong>submission</strong>. Tomorrow
          is the showcase — today is the checklist.
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

        <CardSection icon="✨" title="1 · POLISH & DOCS" cards={POLISH} columns={3} />
        <CardSection icon="📦" title="2 · RUBRIC & SUBMISSION" cards={SUBMIT} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#Capstone</span><span>#Certification</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
