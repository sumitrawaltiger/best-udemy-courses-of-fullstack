import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const CODE_REVIEW = 'https://google.github.io/eng-practices/review/';
const PORTFOLIO = 'https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/';
const RN_BEST = 'https://reactnative.dev/docs/performance';

const LEARNT_TODAY = [
  { title: 'Peer review', text: 'read a classmate’s PR or project with a checklist — not just “looks fine”' },
  { title: 'Code quality', text: 'naming, structure, error handling, and dead code matter as much as features' },
  { title: 'Best practices', text: 'lists, keys, memo where needed, secure storage for secrets, clear folders' },
  { title: 'Feedback loops', text: 'give specific, kind notes; ask questions; ship a follow-up fix the same day' },
  { title: 'Portfolio polish', text: 'README, screenshots, and a one-line “what / why / stack” for each app' },
  { title: 'Review checklist', text: 'permissions, loading/error states, offline paths, and accessibility hits' },
  { title: 'Ask better questions', text: '“why this pattern?” beats “this is wrong” — learn from the author’s intent' },
  { title: 'Own your diffs', text: 'small PRs are easier to review; describe risk and test steps in the description' },
  { title: 'Graduation starts', text: 'Days 122–125 shift from building alone to reviewing, shipping, and showcasing' },
];

const REVIEW = [
  {
    icon: '👥', title: 'Peer Review', titleClass: 'card-title-cyan', subtitle: 'Read Someone Else’s Code',
    description: 'Pair up on cohort projects. Walk the happy path, then break it — empty states, denied permissions, offline mode. Write notes the author can act on.',
    code: '// checklist\n// [ ] runs on a device\n// [ ] errors handled\n// [ ] secrets not in repo',
  },
  {
    icon: '✨', title: 'Code Quality', titleClass: 'card-title-purple', subtitle: 'Beyond “It Works”',
    description: 'Look for clear component boundaries, consistent naming, no giant files, and comments only where intent is non-obvious.',
    code: '// prefer: small screens + hooks\n// avoid: 800-line App.js',
  },
  {
    icon: '📐', title: 'Best Practices', titleClass: 'card-title-amber', subtitle: 'RN Habits',
    description: 'Stable list keys, avoid anonymous inline monsters in hot paths, SecureStore for tokens, and environment configs out of source control.',
    code: '// keys · SecureStore · .env\n// FlashList / FlatList perf basics',
  },
];

const GROW = [
  {
    icon: '🔄', title: 'Feedback Loops', titleClass: 'card-title-cyan', subtitle: 'Give & Receive',
    description: 'Be specific (“crash on Android 14 when camera denied”) and kind. When you get feedback, reproduce, fix, and reply with what changed.',
    code: '// observe → note → fix → confirm',
  },
  {
    icon: '💼', title: 'Portfolio Polish', titleClass: 'card-title-purple', subtitle: 'Show The Work',
    description: 'Each project needs a README: problem, screenshots, stack, and how to run. Recruiters skim — make the first screen count.',
    code: '## Weather App\nWhat / Why / Stack / Run\n![screenshot](...)',
  },
  {
    icon: '📋', title: 'Review Checklist', titleClass: 'card-title-amber', subtitle: 'Don’t Miss Basics',
    description: 'Permissions copy, loading spinners, empty lists, retry on failure, and a privacy note if you send data to AI APIs.',
    code: '// UX · security · offline · a11y',
  },
  {
    icon: '🔜', title: 'Next: Hackathon', titleClass: 'card-title-lime', subtitle: 'Day 123 Preview',
    description: 'Tomorrow: hackathons, live workshops, quizzes, bounties, and learning with the community under time pressure.',
    link: { href: '/day-123', label: 'Go to Day 123 →' },
  },
];

const RESOURCES = [
  {
    icon: '👀', title: 'Code Review Guide', titleClass: 'card-title-cyan', subtitle: 'How To Review',
    description: 'Google’s engineering practices for useful, respectful code reviews.',
    link: { href: CODE_REVIEW, label: 'Read review guide →', external: true },
  },
  {
    icon: '⚡', title: 'RN Performance', titleClass: 'card-title-purple', subtitle: 'Docs',
    description: 'Official React Native performance guidance — lists, re-renders, and JS thread tips.',
    link: { href: RN_BEST, label: 'Read performance docs →', external: true },
  },
  {
    icon: '💼', title: 'Dev Portfolio', titleClass: 'card-title-amber', subtitle: 'Guide',
    description: 'Structure a portfolio site so your cohort apps are easy to find and understand.',
    link: { href: PORTFOLIO, label: 'Read portfolio tips →', external: true },
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

export default function Day122() {
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
          <Link to="/day-121" className="day001-nav-btn day001-nav-prev">← Day 121</Link>
          <p className="day001-datetime">React Native Day 122</p>
          <Link to="/day-123" className="day001-nav-btn day001-nav-next">Day 123 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Review</span><span>RN Day 22</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 122 <span aria-hidden="true">👥</span></h1>
              <p className="day001-day-theme">PEER CLASS &amp; CODE REVIEW</p>
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
          Day 122 opens Graduation with <strong>peer review</strong>. Trade projects, check{' '}
          <strong>code quality</strong> and <strong>best practices</strong>, run tight{' '}
          <strong>feedback loops</strong>, and start <strong>portfolio polish</strong> so each app
          has a clear story. Building alone is done — shipping as a team starts here.
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

        <CardSection icon="👥" title="1 · REVIEW & QUALITY" cards={REVIEW} columns={3} />
        <CardSection icon="🔄" title="2 · FEEDBACK & PORTFOLIO" cards={GROW} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#CodeReview</span><span>#Portfolio</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
