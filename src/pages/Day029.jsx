import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const EXPO_ROUTER = 'https://docs.expo.dev/router/introduction/';
const REACT_NAV = 'https://reactnavigation.org/';

const LEARNT_TODAY = [
  { title: 'Expo Router', text: 'file-based routing for RN — the app/ folder maps to screens, like Next.js' },
  { title: 'React Navigation', text: 'the underlying library — stacks, tabs and drawers; Expo Router sits on top' },
  { title: 'Stack navigator', text: 'push/pop screens like a stack of cards — the default for drill-in flows' },
  { title: 'Tab navigator', text: 'a bottom tab bar switching between top-level sections' },
  { title: 'Dynamic routes', text: 'a [id].tsx screen reads params with useLocalSearchParams' },
  { title: 'Link & router', text: '<Link href> for declarative nav, router.push() for programmatic' },
  { title: 'Typed routes', text: 'Expo Router can generate types so hrefs and params are checked' },
  { title: 'Headers & options', text: 'set titles, buttons and gestures per screen via Stack.Screen options' },
];

const ROUTERS = [
  {
    icon: '🗂️', title: 'Expo Router', titleClass: 'card-title-cyan', subtitle: 'File-Based Screens',
    description:
      'If you learned the Next.js App Router, this is instant: files under app/ become screens. app/index.tsx is home, app/profile.tsx is /profile, and _layout.tsx defines the navigator.',
    code: '// app/_layout.tsx\nexport default function Layout() {\n  return <Stack />;   // or <Tabs />\n}\n// app/index.tsx  → home screen\n// app/settings.tsx → /settings',
  },
  {
    icon: '🃏', title: 'Stacks & Tabs', titleClass: 'card-title-purple', subtitle: 'The Two Workhorses',
    description:
      'A Stack pushes screens on top of each other with a back gesture (drill-in flows). Tabs render a bottom bar to switch top-level sections. Most apps nest tabs, each holding a stack.',
    code: '// app/(tabs)/_layout.tsx\n<Tabs>\n  <Tabs.Screen name="index" options={{ title: "Home" }} />\n  <Tabs.Screen name="profile" options={{ title: "Profile" }} />\n</Tabs>',
  },
];

const NAV = [
  {
    icon: '🔗', title: 'Navigate', titleClass: 'card-title-cyan', subtitle: 'Link & router',
    description:
      'Use <Link href="/profile"> for declarative navigation and router.push() / router.back() from code after an action — the mobile equivalents of web Link and useNavigate.',
    code: 'import { Link, router } from "expo-router";\n<Link href="/users/7">Open</Link>\n// or:\nrouter.push("/users/7");',
  },
  {
    icon: '🆔', title: 'Route Params', titleClass: 'card-title-purple', subtitle: 'Typed',
    description:
      'A dynamic screen [id].tsx reads its param with useLocalSearchParams. Enable typed routes and both the href and the params are TypeScript-checked.',
    code: '// app/users/[id].tsx\nconst { id } = useLocalSearchParams<{ id: string }>();\nreturn <Text>User #{id}</Text>;',
  },
  {
    icon: '⚙️', title: 'Screen Options', titleClass: 'card-title-amber', subtitle: 'Headers & Gestures',
    description:
      'Configure each screen’s header title, buttons, presentation (modal), and back gesture through options — declaratively per screen, no manual header code.',
    code: '<Stack.Screen name="edit"\n  options={{ title: "Edit", presentation: "modal" }} />',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Expo Router', titleClass: 'card-title-cyan', subtitle: 'Docs',
    description:
      'File-based routing for React Native — layouts, stacks, tabs, dynamic routes, typed routes and deep linking.',
    link: { href: EXPO_ROUTER, label: 'Open Expo Router →', external: true },
  },
  {
    icon: '🧭', title: 'React Navigation', titleClass: 'card-title-purple', subtitle: 'The Foundation',
    description:
      'The navigation library underneath — navigators, params, nesting and the imperative API, when you need lower-level control.',
    link: { href: REACT_NAV, label: 'Open React Navigation →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Data & APIs', titleClass: 'card-title-amber', subtitle: 'Day 30 Preview',
    description:
      'Tomorrow — lists at scale with FlatList, fetching data (TanStack Query works here too), local storage, and using native device APIs via Expo.',
    link: { href: '/day-030', label: 'Go to Day 30 →' },
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

export default function Day029() {
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
          <Link to="/day-028" className="day001-nav-btn day001-nav-prev">← Day 28</Link>
          <p className="day001-datetime">TypeScript Day 29 · 29 Jan 2027</p>
          <Link to="/day-030" className="day001-nav-btn day001-nav-next">Day 30 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>React Native</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 29 <span aria-hidden="true">🧭</span></h1>
              <p className="day001-day-theme">REACT NATIVE — NAVIGATION</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '29%' }} /></div>

        <p className="day001-summary">
          Moving between screens. <strong>Expo Router</strong> brings <strong>file-based routing</strong> to mobile —
          files in <code>app/</code> are screens and <code>_layout.tsx</code> defines the navigator, exactly like the
          Next.js App Router. It’s built on <strong>React Navigation</strong>: a <strong>Stack</strong> pushes/pops
          screens (drill-in + back gesture), <strong>Tabs</strong> give a bottom bar, and most apps nest tabs each
          holding a stack. Navigate with <code>&lt;Link href&gt;</code> or <code>router.push()</code>, read typed
          params via <strong>useLocalSearchParams</strong>, and configure headers/modals through per-screen{' '}
          <strong>options</strong>. <em>Next: lists, data &amp; native APIs.</em>
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

        <CardSection icon="🗂️" title="ROUTERS & NAVIGATORS" cards={ROUTERS} columns={2} />
        <CardSection icon="🔗" title="NAVIGATING" cards={NAV} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#ReactNative</span><span>#Navigation</span>
        </footer>
      </div>
    </div>
  );
}
