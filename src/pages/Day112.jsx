import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const BACKGROUND_DOCS = 'https://docs.expo.dev/versions/latest/sdk/background-task/';
const LINKING_DOCS = 'https://docs.expo.dev/linking/overview/';
const TASK_MANAGER_DOCS = 'https://docs.expo.dev/versions/latest/sdk/task-manager/';

const LEARNT_TODAY = [
  { title: 'Background tasks', text: 'run short work when the app is not in the foreground — sync, cleanup, refresh' },
  { title: 'TaskManager', text: 'define a named task once, then register it with a background API' },
  { title: 'Task scheduling', text: 'BackgroundTask / BackgroundFetch ask the OS to wake you on a interval (best-effort)' },
  { title: 'Deep linking', text: 'a custom URL scheme (myapp://) opens the app to a specific screen' },
  { title: 'Universal links', text: 'https://your.domain/... opens the app when installed, or the website when not' },
  { title: 'URL navigation', text: 'parse the path and params, then navigate with Expo Router / React Navigation' },
  { title: 'Permissions & limits', text: 'background work is battery-sensitive — keep tasks short and rare' },
  { title: 'Headless JS', text: 'some tasks run with no UI — your JS still needs to finish cleanly' },
  { title: 'Dev build required', text: 'most background APIs need a custom EAS development build, not Expo Go' },
];

const BACKGROUND = [
  {
    icon: '⚙️', title: 'Background Tasks', titleClass: 'card-title-cyan', subtitle: 'Work Off-Screen',
    description: 'When the user leaves the app, the OS can still wake your JS for short jobs — syncing data, clearing caches, or refreshing a widget. Keep work small; the system will kill long tasks.',
    code: 'import * as BackgroundTask from "expo-background-task";\nimport * as TaskManager from "expo-task-manager";',
  },
  {
    icon: '📝', title: 'Define A Task', titleClass: 'card-title-purple', subtitle: 'TaskManager',
    description: 'Register a named task at the top level of a module (not inside a component). The OS calls that function when the background trigger fires.',
    code: 'const TASK = "SYNC_TASK";\nTaskManager.defineTask(TASK, async () => {\n  await syncOfflineQueue();\n  return BackgroundTask.BackgroundTaskResult.Success;\n});',
  },
  {
    icon: '⏱️', title: 'Schedule It', titleClass: 'card-title-amber', subtitle: 'Best-Effort Interval',
    description: 'Register the task so the OS can run it periodically. Timing is not exact — treat it as “sometime later,” not a cron job.',
    code: 'await BackgroundTask.registerTaskAsync(TASK, {\n  minimumInterval: 60 * 15, // ~15 min hint\n});',
  },
];

const LINKING = [
  {
    icon: '🔗', title: 'Deep Links', titleClass: 'card-title-cyan', subtitle: 'myapp://…',
    description: 'A custom scheme opens your app from another app, email, or QR code. Map path segments to screens — e.g. myapp://product/42 → Product detail.',
    code: '// app.json\n"scheme": "myapp"\n// open: myapp://product/42',
  },
  {
    icon: '🌐', title: 'Universal Links', titleClass: 'card-title-purple', subtitle: 'https → App',
    description: 'Verified https links open the app when installed. Same URL works in the browser for users without the app — one marketing link, two destinations.',
    code: '// associatedDomains / intentFilters\n// https://example.com/product/42\n// → opens Product screen in-app',
  },
  {
    icon: '🧭', title: 'URL → Screen', titleClass: 'card-title-amber', subtitle: 'Parse & Navigate',
    description: 'Expo Router maps file paths to URLs automatically. With React Navigation, configure a linking object so path + params land on the right route.',
    code: '// Expo Router: app/product/[id].tsx\n// URL /product/42 → params.id === "42"',
  },
  {
    icon: '🔜', title: 'Next: Notifications', titleClass: 'card-title-lime', subtitle: 'Day 113 Preview',
    description: 'Tomorrow: local and push notifications — permissions, push tokens, listeners, scheduling, and custom sounds.',
    link: { href: '/day-113', label: 'Go to Day 113 →' },
  },
];

const RESOURCES = [
  {
    icon: '⚙️', title: 'Background Task', titleClass: 'card-title-cyan', subtitle: 'API',
    description: 'Register and run background work with Expo’s Background Task API and OS constraints.',
    link: { href: BACKGROUND_DOCS, label: 'Read background-task docs →', external: true },
  },
  {
    icon: '📝', title: 'TaskManager', titleClass: 'card-title-purple', subtitle: 'Define Tasks',
    description: 'Define named tasks that background APIs and notifications can invoke.',
    link: { href: TASK_MANAGER_DOCS, label: 'Read TaskManager docs →', external: true },
  },
  {
    icon: '🔗', title: 'Linking', titleClass: 'card-title-amber', subtitle: 'Deep & Universal',
    description: 'Schemes, universal links, and how Expo routes incoming URLs into your navigation tree.',
    link: { href: LINKING_DOCS, label: 'Read linking docs →', external: true },
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

export default function Day112() {
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
          <Link to="/day-111" className="day001-nav-btn day001-nav-prev">← Day 111</Link>
          <p className="day001-datetime">React Native Day 112 · 26 Sep 2027</p>
          <Link to="/day-113" className="day001-nav-btn day001-nav-next">Day 113 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>React Native</span><span>Year 1</span><span>Background</span><span>RN Day 12</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 112 <span aria-hidden="true">🔗</span></h1>
              <p className="day001-day-theme">BACKGROUND TASKS &amp; DEEP LINKING</p>
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

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '31%' }} /></div>

        <p className="day001-summary">
          Day 112 keeps the app alive after the user leaves. <strong>TaskManager</strong> +{' '}
          <strong>background tasks</strong> run short sync jobs off-screen.{' '}
          <strong>Deep links</strong> (<code>myapp://</code>) and <strong>universal links</strong>{' '}
          (<code>https://</code>) open straight into the right screen. Together they make an app feel
          connected to the rest of the phone and the web.
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

        <CardSection icon="⚙️" title="1 · BACKGROUND WORK" cards={BACKGROUND} columns={3} />
        <CardSection icon="🔗" title="2 · DEEP & UNIVERSAL LINKS" cards={LINKING} columns={4} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#ReactNative</span><span>#DeepLinking</span><span>#Expo</span><span>#JSLearnHub</span>
        </footer>
      </div>
    </div>
  );
}
